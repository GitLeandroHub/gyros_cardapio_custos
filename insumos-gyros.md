# Insumos Gyros

Lista consolidada dos insumos do Gyros, organizada por tipo de uso para compra, estoque, ficha técnica e conferência no ERP/PWA.

Fontes de referência: `insumos-gerais.md`, `insumos.md`, `REQUISICAO_ERP_INSUMOS_GYROS.md` e `DRY_RUN_ALPHA_GYROS_INSUMOS.md`.

## Visão geral por tipo

| Tipo | Uso principal | Exemplos |
|---|---|---|
| Carnes/proteínas | Base dos lanches, pratos, adicionais e gratinados | fraldinha, frango, linguiça, bacon |
| Receitas/preparos internos | Bases produzidas ou montadas pela operação | vinagrete, maioneses, manteiga com alho, antepasto |
| Embalagens/descartáveis | Entrega, montagem, porcionamento e consumo | papel acoplado, potes, caixas, guardanapo |
| Hortifruti | Receitas, molhos, vinagrete e vegetariano | tomate, cebola, berinjela, pimentões |
| Temperos/condimentos | Receitas, finalização e acompanhamentos | sal, lemon pepper, páprica, chimichurri |
| Laticínios/queijos | Queijos obrigatórios, adicionais e gratinados | muçarela, Catupiry, cheddar |
| Padaria | Base dos Gyros | pão francês com parmesão |
| Refrigerados/congelados | Batatas e sobremesas | batata pré-frita, mini churros |
| Bebidas | Revenda e combos | refrigerantes, águas, cervejas, chás, sucos |
| Mercearia/secos | Pratos executivos, molhos e apoio de cozinha | arroz, feijão, açúcar, maionese base |

Fora deste arquivo por enquanto: limpeza, higiene, EPI, manutenção, tecnologia e utilidades operacionais. Esses itens entram depois em custos fixos, gastos operacionais ou controles auxiliares, não na ficha técnica principal do cardápio.

## Ponte aplicada no PWA

Limpeza controlada aplicada em `gyros-custos-cardapio.json` e no `SEED_DATA` de `app.js`.

| Antes no PWA | Depois no PWA | Papel correto |
|---|---|---|
| `ing_fraldinha` como `Fraldinha preparada` | `ing_fraldinha` como `Fraldinha crua` + `rec_fraldinha_preparada` | Compra crua vira ingrediente; consumo do cardápio usa preparo |
| `ing_frango` como `Frango preparado` | `ing_frango` como `Frango cru (peito e sobrecoxa)` + `rec_frango_preparado` | Compra crua/blend vira ingrediente; consumo do cardápio usa preparo |
| `ing_linguica` como `Linguiça toscana preparada` | `ing_linguica` como `Linguiça toscana` + `rec_linguica_preparada` | Compra vira ingrediente; linguiça pronta para servir vira preparo |

Regra para evidências: nomes de nota, cupom, orçamento ou fornecedor podem variar, mas devem apontar para o ingrediente canônico de compra. Exemplo: `Fraldinha bovina`, `Fraldinha bovina vácuo`, `Fraldinha grill` e nomes similares apontam para `ing_fraldinha`; a ficha técnica de venda consome `rec_fraldinha_preparada`.

Regra para catálogo: lanches, pratos, gratinados e adicionais consomem o preparo já pronto para servir. Assim a gramatura de cada contexto pode variar sem duplicar insumo nem misturar compra com venda.

Exceção prática: `Pão Francês com Parmesão` é comprado pronto por unidade e usado direto no lanche. Portanto ele permanece como ingrediente de compra/estoque (`ing_pao_parmesao_pronto`) e entra diretamente na ficha técnica do produto, sem virar preparo.

Regra de leitura no PWA: o resumo do item deve mostrar a `Base de compra da porção` quando houver insumo fracionado. Exemplo: batata congelada comprada por pacote/caixa, custo por kg, uso de 200g na ficha e custo da porção. A mesma leitura deve aparecer nos adicionais, pois adicionais também são porções de ingredientes, preparos, embalagens ou unidades.

## Central de Insumos e Fichas

A nova aba lateral `Insumos` do PWA é a `Central de Insumos e Fichas`.

Ela não substitui os cadastros técnicos. A função dela é mostrar a ponte limpa entre compra, ingrediente, receita/preparo, porção, produto, grupo e ficha que seguirá para o ERP.

Regra de responsabilidade:

- Produto vendido define quantidade usada.
- Grupo/adicional define regra comercial, mínimo/máximo e quantidade da opção.
- Receita/preparo define componentes e rendimento.
- Ingrediente/embalagem/preparo define custo ativo.
- Lançamentos guardam evidência de compra.
- Operação explica processo, perda, porcionamento e fluxo físico.

Portanto, o ERP deve receber uma ficha final clara, por exemplo: `Fraldinha preparada | 150g | R$ X`, enquanto a central preserva a origem desse custo: compra crua, preparo, perda, custo manual, custo médio ou última compra.

Um item de preparo pode ter custo ativo manual próprio mesmo sendo filho de um ingrediente de compra. Exemplo: `Fraldinha preparada` pode usar custo calculado da `Fraldinha crua` ou um custo manual por kg preparado, quando a operação define esse valor por acordo comercial, parceria ou padronização interna.

Regra anti-duplicidade:

- Família organiza os nomes e evita duplicação.
- Item base representa compra/custo/estoque.
- Item operacional representa o estado correto usado na ficha.
- Produto e grupo devem consumir o item operacional correto, não um nome genérico.
- Nomes antigos, nomes de nota e variações de fornecedor viram alias/revisão, não novos insumos ativos sem saneamento.

Exemplo Gyros:

| Família | Base de compra | Item operacional usado em produto | Observação |
|---|---|---|---|
| Fraldinha | Fraldinha crua | Fraldinha preparada | lanches, adicionais, gratinados e executivos usam a preparada |
| Frango | Frango cru (peito e sobrecoxa) | Frango preparado | compra em blend, uso pronto para servir |
| Linguiça toscana | Linguiça toscana | Linguiça toscana preparada | mesmo sem tempero extra, há retirada de tripa, espeto, cocção e porção |
| Vinagrete | tomate, cebola, azeite, temperos | Vinagrete da casa | receita com rendimento, usada em lanches e potes |
| Batata pré-frita | batata congelada por kg/caixa | porções/base de batata | porcionamento muda conforme produto |

### Ponte de implementação da Central

Estado anterior da primeira versão da Central: a aba `Insumos` já existia no PWA, mas a leitura principal ainda começava por famílias técnicas. Isso misturava `Fraldinha crua` e `Fraldinha preparada` em pontos diferentes da lista e fazia a `Ficha ERP` parecer duplicada quando o mesmo item aparecia no produto base e também em grupos/adicionais.

Modelo final: a Central começa por `Cardápio e fichas`, organizado pelas categorias oficiais de venda. As famílias operacionais continuam existindo como biblioteca técnica de apoio, não como entrada principal. Dentro dessa biblioteca ficam relações como `Fraldinha crua` -> `Fraldinha preparada`, `Frango cru` -> `Frango preparado`, `Batata pré-frita` -> porções/base, e assim por diante.

Regra de exportação para ERP: o produto ou grupo envia a quantidade e o item operacional correto. A Central decide o custo ativo. A `Ficha ERP` deve separar visualmente:

- `Produto base`: componentes fixos do produto vendido.
- `Grupos obrigatórios`: escolhas exigidas pelo cliente, com mínimo/máximo e custo mínimo quando aplicável.
- `Adicionais opcionais`: escolhas vendidas à parte.

Movimentos desta revisão:

- A visão principal deixa de listar recursos soltos e passa a partir do cardápio oficial.
- `Fraldinha crua` e `Fraldinha preparada` ficam na mesma família, com a preparada marcada como item operacional correto para cardápio Gyros.
- O mesmo padrão vale para frango, linguiça, batatas, vinagrete, maioneses, queijos, molhos e embalagens.
- A `Ficha ERP` deixa de juntar base, obrigatórios e adicionais numa única lista corrida.

Produtos afetados pela leitura: todos os produtos ativos do cardápio, especialmente lanches Gyros, combos, batatas, gratinados, executivos e molhos 60ml. A alteração é de organização e leitura da ficha; não cria automaticamente novos insumos nem substitui evidências de compra.

### Ponte da revisão final da Central

Estado atual antes desta revisão: a Central já parte do cardápio oficial e já possui leituras por `Cardápio e fichas`, `Receitas e preparos`, `Ingredientes`, `Embalagens` e `Pendências`. Mesmo assim, a UX ainda está pesada, recalcula muitas relações ao clicar e algumas leituras técnicas continuam parecendo listas extensas em vez de árvores operacionais. Preparos pequenos, como `Manteiga com alho`, existem no cadastro e na ficha do Alpha, mas precisam aparecer com clareza como preparo do produto base.

Modelo desejado: a Central deve funcionar como protótipo fiel do futuro ERP. A entrada principal é o cardápio vendido; o produto mostra apenas quantidade e contexto. A biblioteca técnica organiza famílias, ingredientes, preparos, porções, embalagens e revenda. A Central decide o custo ativo a partir do item técnico correto e mostra evidência ou pendência sem transformar nomes de nota em insumo ativo.

Movimentos desta revisão:

- Reforçar `Cardápio e fichas` como ficha limpa para ERP, separando `Produto base`, `Grupos obrigatórios`, `Adicionais opcionais` e `Embalagens/repasse`.
- Reorganizar a biblioteca técnica em árvore por família e papel: compra/base, preparo/receita/porção, embalagem/revenda e usos no cardápio.
- Deixar `Pendências` como fila de QA com motivo, impacto e ação sugerida.
- Evitar renderizar árvores completas e vínculos extensos de uma vez; mostrar resumo primeiro e detalhe sob demanda.
- Manter preparos como `Manteiga com alho`, `Vinagrete da casa`, `Fraldinha preparada` e `Antepasto de berinjela` como itens técnicos de primeira classe.

Produtos afetados pela leitura: todos os produtos ativos aparecem na Central, mas a checagem principal desta revisão passa pelos lanches Gyros, batatas, gratinados, executivos e molhos 60ml. A mudança esperada é de organização, clareza e performance; qualquer alteração de custo ou quantidade deve continuar documentada separadamente.

### Decisão final de UX

`Catálogo` continua sendo a visão comercial: card visual, preço de venda, preço iFood, margem e revisão rápida do que aparece ao cliente.

`Central de Insumos e Fichas` passa a ser a visão técnica/ERP baseada no cardápio. A entrada principal da Central não é mais uma lista de famílias; é o próprio cardápio oficial, organizado por categorias e grupos de venda.

Abas internas da Central:

- `Cardápio e fichas`: ponto de partida principal. Produto vendido abre ficha limpa de ERP: produto base, grupos obrigatórios, adicionais opcionais, embalagens, custo e origem.
- `Receitas e preparos`: biblioteca técnica de itens produzidos ou porcionados pela operação, como fraldinha preparada, frango preparado, vinagrete, maioneses, batatas base e antepasto de berinjela.
- `Ingredientes`: itens comprados ou controlados como insumo de estoque.
- `Embalagens`: descartáveis, potes, bandejas, sacos, guardanapos e itens de repasse.
- `Pendências`: estimativas, históricos, receitas a revisar, itens sem família operacional clara e custos que ainda precisam confirmação.

Nomes artificiais de agrupamento, como `Bases de almoço executivo`, não devem aparecer como família principal. Arroz, feijão, farofa, batata de almoço e vinagrete devem aparecer como ingredientes/preparos próprios e serem usados pelos produtos de almoço executivo por quantidade.

### Ponte final para versão 100%

Estado atual antes da lapidação final: a Central já tem a estrutura correta, mas ainda havia dois riscos de leitura. Primeiro, algumas famílias técnicas pareciam herdar ingredientes de receitas vizinhas, como `Maionese da casa` mostrando itens de molho/maionese defumada. Segundo, ao selecionar itens dentro das listas, a rolagem interna voltava para o topo e quebrava a conferência.

Modelo final aplicado:

- `Cardápio e fichas` continua sendo a entrada principal e espelha o que o ERP precisa receber: produto vendido, componentes fixos, grupos obrigatórios, adicionais opcionais, embalagens e repasses.
- `Biblioteca técnica` organiza famílias, receitas/preparos, ingredientes, embalagens e revenda.
- Família técnica é apenas um mapa operacional. Ela agrupa compra, preparo, porção e uso, mas não soma nem empresta ingredientes entre filhos.
- Receita/preparo é quem possui ingredientes, rendimento e custo do lote.
- Ingrediente/embalagem é quem possui compra, unidade, custo ativo e evidência.
- Produto do cardápio apenas informa quantidade e contexto.
- `Pendências` é fila de QA para itens estimados, manuais, históricos ou sem evidência suficiente.

Movimentos desta lapidação:

- `Maionese da casa` passa a conter somente a base pronta `Maionese da Casa Junior Grill` e o preparo/porção `Maionese da Casa (Junior Grill)`.
- Ingredientes de receitas de molhos, como alho em pó, cebola em pó, caldo de galinha, fumaça, chimichurri e afins, permanecem em famílias/receitas de molhos próprias e não aparecem como se fossem composição da maionese Junior Grill.
- A tela preserva a posição das listas internas ao selecionar produto, família, receita, ingrediente ou embalagem.
- A ficha do cardápio passa a usar rótulos mais claros (`Ingrediente`, `Preparo`, `Embalagem`, `Obrigatório`, `Adicional`) em vez de siglas técnicas soltas.

Produtos afetados: a mudança é de leitura, organização e UX. Não altera quantidade, custo ou preço dos produtos nesta etapa. Os impactos visíveis ficam especialmente nos lanches que usam `Maionese da Casa (Junior Grill)`, nos molhos 60ml e na navegação da Central.

## Regra de atualização por lançamentos reais

Os valores de compra ativos no PWA devem priorizar lançamentos reais com data, fornecedor e comprovante quando o item comprado tiver correspondência clara com ingrediente, embalagem ou item de revenda usado no catálogo.

Linhas antigas importadas sem data, estimativas, nomes genéricos de nota e compras avulsas só devem substituir o cadastro canônico quando a unidade estiver clara e a conversão operacional estiver documentada. Se a evidência diz apenas `papel`, `interfolhas`, `volume`, `caixa` ou outro nome sem rendimento por porção, ela fica como evidência histórica/revisão até alguém confirmar a ponte.

Valores definidos como `só repassa custo` não entram na base de markup, mesmo quando têm comprovante. Exemplos atuais: guardanapo, pote transparente 60ml, pote de feijão 145ml e kit talheres.

Atualizações aplicadas nesta revisão:

| Insumo/embalagem | Valor real aplicado | Base usada | Observação |
|---|---:|---|---|
| Muçarela | R$ 54,89/kg | 22/04/2026, Poupaki, R$ 93,15 / 1,697kg | Substitui a linha antiga/importada de R$ 36,00/kg |
| Fraldinha crua | R$ 42,98/kg | 22/04/2026, Poupaki, R$ 183,54 / 4,270kg | O preparo `Fraldinha preparada` continua consumindo este ingrediente |
| Frango cru (peito e sobrecoxa) | R$ 24,55/kg | 11/04/2026, Sendas, R$ 54,10 / 2,204kg | O preparo `Frango preparado` continua consumindo este ingrediente |
| Linguiça toscana | R$ 24,90/kg | 19/04/2026, Poupaki, R$ 75,49 / 3,032kg | O preparo `Linguiça toscana preparada` continua consumindo este ingrediente |
| Catupiry Original | R$ 69,16/kg | 22/04/2026, Poupaki, R$ 17,29 / 250g | Valor real mais recente; revisar depois se a compra padrão operacional for bisnaga maior |
| Cheddar | R$ 31,33/kg | 15/04/2026, PMG, R$ 94,00 / 3kg | Atualizado por comprovante |
| Catupiry Sabor 4 queijos | R$ 37,12/kg | 18/03/2026, Laticínios Catupiry, R$ 74,98 / 2,020kg | Atualizado por comprovante |
| Batata pré-frita | R$ 7,14/kg | PMG, caixa operacional de 14kg por R$ 99,99 | Mantido: a compra aparece por caixa/pacote, mas a ficha consome em gramas |
| Base de maionese Quero | R$ 7,97/kg | 15/04/2026, PMG, R$ 47,80 / 6kg | Receitas de maionese ainda precisam revisão de proporção |
| Bacon em cubos | R$ 23,00/kg | 22/04/2026, Poupaki, R$ 23,00 / 1kg | Atualizado por comprovante |
| Manteiga com sal | R$ 47,00/kg | 22/04/2026, Poupaki, R$ 47,00 / 1kg | Atualizado por comprovante |
| Alho | R$ 12,90/kg | compra real de alho, R$ 12,90 / 1kg | Atualizado por comprovante |
| Tomate | R$ 11,99/kg | compra real de tomate, R$ 10,79 / 900g | Atualizado por comprovante |
| Farofa pronta | R$ 8,74/kg | 11/04/2026, Sendas, R$ 13,98 / 1,6kg | Atualizado por comprovante |
| Ketchup | R$ 18,73/kg | 19/04/2026, Poupaki, R$ 7,49 / 400g | Atualizado por comprovante |
| Mel | R$ 55,00/kg | compra real de mel, R$ 11,00 / 200g | Atualizado por comprovante |
| Azeite de oliva | R$ 52,00/L | compra real de azeite, R$ 26,00 / 500ml | Atualizado por comprovante |
| Sacola delivery | R$ 0,75/un | R$ 300,00 / 400 unidades | Atualizado por comprovante |

Itens conferidos e não substituídos automaticamente:

- Papel/interfolhas de R$ 15,00: falta rendimento por lanche ou unidade operacional; não deve mexer no custo do papel acoplado até confirmar o corte/quantidade.
- Potes, guardanapo, talheres e pote de feijão: mantidos como repasse operacional arredondado, conforme decisão do Gyros.
- Receitas de maionese: o preço de venda dos potes 60ml pode ser tabelado em R$ 5,99, mas o custo da receita ainda depende de revisão de proporção e rendimento.

## Carnes e proteínas

### Carnes principais

- Fraldinha crua (custo de compra real atual no PWA: R$ 42,98/kg, antes de perda/preparo)
- Frango cru (peito e sobrecoxa sem osso)
- Linguiça toscana
- Bacon em cubos

### Preparos de proteína usados no cardápio

- Fraldinha preparada
- Frango preparado
- Linguiça toscana preparada

### Proteínas vegetais/preparos equivalentes

- Antepasto de berinjela (receita)
- Berinjela

## Receitas e preparos internos

### Bases de lanche

- Pão francês com parmesão (pronto)
- Manteiga com alho (receita)
- Maionese da Casa (grill - pronta - junior)
- Vinagrete da casa (receita)
- Antepasto de berinjela (receita)

### Molhos e maioneses

- Barbecue da casa (receita)
- Maionese da Casa (Junior Grill pronta)
- Maionese Defumada (receita)
- Maionese Verde (receita)
- Maionese de Chimichurri (receita)
- Vinagrete da Casa 60ml (receita)
- Barbecue 60ml (pote)
- Maionese da Casa 60ml (pote)
- Maionese Defumada 60ml (pote)
- Maionese Verde 60ml (pote)
- Maionese de Chimichurri 60ml (pote)

### Batatas e gratinados

- Tempero premium para batata (lemmon pepper, sal, páprica)
- Batata frita base
- Batata gratinada base
- Cobertura gratinada de muçarela para batata ou proteina (aqui conta fatias ou gramas de muçarela)
- Cobertura gratinada de Catupiry Original para batata gratindada ou carne (aqui conta gramas de catupiry)
- Cobertura gratinada de Catupiry 4 Queijos para batata (aqui conta gramas de catupiry 4 queijos)
- Cobertura gratinada de cheddar para batata(aqui conta gramas de cheddar)

### Pratos executivos

- Churrasco de Fraldinha (antigo Prato Alpha base) / (arroz, feijao, batata frita, vinagrete, farofa, fraldinha)
- Churrasco de Frango - antigo Prato Beta base (arroz, feijao, batata frita, vinagrete, farofa, frango (peito e sobrecoxa))
- Churrasco de Linguiça - antigo Prato Gamma base (arroz, feijao, batata frita, vinagrete, farofa, fraldinha)
- Churrasco Vegetariano de Berinjela (arroz, feijao, batata frita, vinagrete, farofa, antepasto de barinjela)
- Batata frita almoço 150g (inclusa em todos os almoços executivos)
- Arroz cozido
- Feijão cozido

## Embalagens e descartáveis

### Embalagens de lanche, batata e combo

- Papel acoplado para lanche (papel manteiga rolo, cortado assim:
Wyda: rolo de 50 m x 29 cm. Considerando corte de 40 cm por lanche:
5000 cm ÷ 40 cm = 125 lanches por rolo.
Cada rolo custa R$ 29,00.
8 rolos = 1.000 lanches = R$ 232,00.


- Papel acoplado mono frios 30x38 (nao utilizamos)
- Saco de papel para batata média/churros = Saco de papel hamburguão plastificado
- 
- Saco de papel para batata grande = Saco de papel mono 1/2 kg plastificado
- 
- Saco liso branco para delivery = saquinho plastico para bebidas = Sacola
- Saco liso branco médio = Saco Kraft Branco Médio
- Saco liso branco médio = Saco Kraft Branco Grande (almoços)
- 
- Caixa combo família???
- Caixa delivery pequena???
- Caixa delivery média???
- Caixa delivery grande???
- Caixa marmita branca = caixa almoço

### Potes e bandejas

- Pote transparente 60ml = potes dos molhos, vinagrete e farofa. Só repassa custo: R$ 0,47/un.
- Pote 60ml branco G697 = nome antigo/incorreto; usar `Pote transparente 60ml`.
- Pote 145ml com tampa (transparente) = Pote redondo 145ml com sobretampa = pote feijão. Só repassa custo: R$ 0,34/un.
- Pote 500ml (transparente / armazenamento)
- Bandeja alumínio M90 220ml (não utilizamos mais)
- Bandeja alumínio M120 500ml = batata gratinada e proteina gratinada

### Consumo e apoio ao cliente

- Guardanapo avulso
- Guardanapo sachê 28x20,5 liso. Só repassa custo: R$ 0,15/un.
- Kit talheres. Só repassa custo: R$ 0,49/un.
- Sachê de sal
- Sachês de molhos (heinz, mostarda e ketchup)

### Proteção e frete

- Airpack
- Frete de embalagens

## Hortifruti

### Legumes, verduras e ervas

- Tomate (vinagrete)
- Tomate seco (antepasto berinjela)
- Cebola (vinagrete)
- Cebola roxa (antepasto berinjela)
- Pimentão verde (antepasto berinjela)
- Pimentão vermelho (antepasto berinjela)
- Pimentão amarelo (antepasto berinjela)
- Cheiro-verde (maionese verde, vinagrete)
- Alho (maionese verde, manteiga)
- Limão (vinagrete, tempero frango)
- Limão para suco ??? (não fazemos)
- Berinjela (antepasto berinjela)
- Folhas/salada ?????
- Hortifruti variado ?????

## Temperos, condimentos e óleos

### Temperos secos

- Sal (fraldiha, batata gratinada, frango, )
- Lemon pepper (batata frita, batata gratinada)
- Páprica doce (batata frita, batata gratinada)
- Chimichurri (maionese chimichurri)
- Pimenta-do-reino (fralinha, frango, vinagrete, antepasto de berinjela)
- Pimenta calabresa 
- Alho em pó (maionese / conferir quais)
- Cebola em pó (maionese / conferir quais )
- Caldo de galinha (tempero frango)
- Canela moída (churros frito)
- Louro (feijao)
- Orégano (conferir)
- Manjericão (conferir)
- Fumaça em pó (maionese defumada)

### Molhos, óleos e complementos

- Mostarda 
- Mostarda amarela (berbecue, maoinese conferir)
- Ketchup (berbecue, conferir onde mais)
- Molho barbecue (receita)
- Molho barbecue pronto 
- Molho de pimenta
- Shoyu (conferir, antepasto de berinjela???)
- Vinagre (conferir)
- Azeite (vinagrete) = Azeite de oliva
- Óleo de algodão (frritar batata e churros)
- Óleo de cozinha (feijao, pode ser usado para fritar)
- Mel (berbecue)
- Farofa pronta (almoço)

## Laticínios e queijos

### Queijos e adicionais

- Muçarela (adicionais e/ou lanche - se opção for muçarela, batata gratinada - se opção for muçarela, proteina gratinada - se opção for muçarela)
- Catupiry Original (adicionais e/ou lanche - se opção for Catupiry Origina, batata gratinada - se opção for Catupiry Origina, proteina gratinada - se opção for Catupiry Origina)
- Catupiry 4 Queijos (adicionais e/ou lanche - se opção for Catupiry 4 queijos, batata gratinada - se opção for Catupiry 4 queijos, proteina gratinada - se opção for Catupiry 4 queijos) = Catupiry Sabor 4 queijos

- Cheddar (adicionais e/ou lanche - se opção for Cheddar, batata gratinada - se opção for Cheddar, proteina gratinada - se opção for Cheddar)

### Gorduras e bases lácteas

- Manteiga com sal (manteigo com sal e alho)
- Manteiga com sal e alho

## Refrigerados e congelados

- Batata pré-frita 
- Mini churros congelado = Mini churros congelado de doce de leite


## Padaria

- Pão francês com parmesão = Pão Francês com Parmesão

## Bebidas

### Águas

- Água mineral sem gás = Água mineral 510ml
- Água mineral com gás = Água com gás 510ml
- Água mineral 1,5L (interno)
- Água mineral 5L (interno)

### Refrigerantes e chás

- Refrigerante lata 350ml (categoria????)
- Coca-Cola 350ml = Coca-Cola lata 350ml
- 
- Coca-Cola Zero 350ml
- Coca-Cola 2L
- Coca-Cola Zero 2L (não utilizamos mais, ou interno)
- Guaraná Antarctica 350ml
- Fanta Laranja 350ml
- Schweppes Citrus 350ml
- Sprite 350ml
- Sprite 2L (interno)
- Chá Ice Tea Leão Limão 450ml
- Chá Ice Tea Leão Pêssego 450ml
- Garrafa 450ml ??? (chá??)

### Cervejas

- 
- Budweiser long neck 330ml = Budweiser long neck
- 
- Heineken long neck 330ml = Heineken long neck
- Cerveja Amstel = long neck = 330ml

### Outras bebidas

- H2OH! Limão = H2O limão 500ml??
- H2OH! Zero
- Limoneto sem açúcar =  Limoneto sem açúcar 500ml ???
- Suco Del Valle Uva = Del Valle Uva 290ml
- Suco natural (não temos)
- Guaraviton (não mais no cardapio)

## Mercearia e secos

### Bases de cozinha

- Arroz (cru)
- Arroz cozido
- Feijão (cru)
- Feijão cozido
- Açúcar
- Açúcar com canela (churros após frito)
- Banha (não mais utilizamos)
- Base de maionese Quero (base para maionese defumada, maionese chimichurri, verde)
- Maionese da Casa Junior Grill (maionese da casa atual)

### Sobremesas e confeitaria

- Doce de leite ???? (*)
- Chocolate ????
- Goiabada ????
- Açúcar com canela (polvilhado no churros apos frito)
- Embalagem para churros ??? (saquinho??)

## Insumos canônicos do PWA/ERP

Esta seção mantém os códigos canônicos conhecidos para evitar duplicidade no ERP. Quando houver produto comercial, preparo e embalagem com nomes parecidos, o código abaixo deve ser tratado como a fonte única de custo.

### Ingredientes e revenda

| Código | Insumo | Unidade |
|---|---|---|
| `GYR-INS-ACUCAR-COM-CANELA` | Açúcar com canela | KG |
| `GYR-INS-AGUA-COM-GAS-510ML` | Água com gás 510ml | UN |
| `GYR-INS-AGUA-MINERAL-510ML` | Água mineral 510ml | UN |
| `GYR-INS-ALHO` | Alho | KG |
| `GYR-INS-ARROZ-COZIDO` | Arroz cozido | KG |
| `GYR-INS-AZEITE-DE-OLIVA` | Azeite de oliva | L |
| `GYR-INS-BACON` | Bacon em cubos | KG |
| `GYR-INS-BASE-DE-MAIONESE-QUERO` | Base de maionese Quero | KG |
| `GYR-INS-BATATA-PRE-FRITA` | Batata pré-frita | KG |
| `GYR-INS-BERINJELA` | Berinjela | KG |
| `GYR-INS-BUDWEISER-LONG-NECK-330ML` | Budweiser long neck 330ml | UN |
| `GYR-INS-CARNE-FRALDINHA` | Fraldinha crua | KG |
| `GYR-INS-CATUPIRY-ORIGINAL` | Catupiry | KG |
| `GYR-INS-CATUPIRY-4-QUEIJOS` | Catupiry Sabor 4 queijos | KG |
| `GYR-INS-CEBOLA` | Cebola | KG |
| `GYR-INS-CEBOLA-ROXA` | Cebola roxa | KG |
| `GYR-INS-CHEDDAR` | Cheddar | KG |
| `GYR-INS-CHEIRO-VERDE` | Cheiro-verde | KG |
| `GYR-INS-CHIMICHURRI` | Chimichurri | KG |
| `GYR-INS-COCA-COLA-2L` | Coca-Cola 2L | UN |
| `GYR-INS-DEL-VALLE-UVA-290ML` | Del Valle Uva 290ml | UN |
| `GYR-INS-FAROFA-PRONTA` | Farofa pronta | KG |
| `GYR-INS-FEIJAO-COZIDO` | Feijão cozido | KG |
| `GYR-INS-FUMACA-EM-PO` | Fumaça em pó | KG |
| `GYR-INS-GARRAFA-450ML` | Garrafa 450ml | UN |
| `GYR-INS-H2O-LIMAO-500ML` | H2O limão 500ml | UN |
| `GYR-INS-HEINEKEN-LONG-NECK-330ML` | Heineken long neck 330ml | UN |
| `GYR-INS-KETCHUP` | Ketchup | KG |
| `GYR-INS-LEMON-PEPPER` | Lemon pepper | KG |
| `GYR-INS-LIMAO-SUCO` | Limão (suco) | L |
| `GYR-INS-LIMONETO-SEM-ACUCAR-500ML` | Limoneto sem açúcar 500ml | UN |
| `GYR-INS-LINGUICA-TOSCANA-AURORA` | Linguiça toscana | KG |
| `GYR-INS-LOURO` | Louro | KG |
| `GYR-INS-MANJERICAO` | Manjericão | KG |
| `GYR-INS-MANTEIGA-COM-SAL` | Manteiga com sal | KG |
| `GYR-INS-MEL` | Mel | KG |
| `GYR-INS-MINI-CHURROS-DOCE-LEITE` | Mini churros congelado de doce de leite | KG |
| `GYR-INS-MOLHO-BARBECUE-PRONTO` | Molho barbecue pronto | L |
| `GYR-INS-MOSTARDA-AMARELA` | Mostarda amarela | KG |
| `GYR-INS-OREGANO` | Orégano | KG |
| `GYR-INS-PAO-FRANCES-PARMESAO` | Pão Francês com Parmesão | UN |
| `GYR-INS-PAPRICA` | Páprica doce | KG |
| `GYR-INS-PIMENTA-CALABRESA` | Pimenta calabresa | KG |
| `GYR-INS-PIMENTA-DO-REINO` | Pimenta-do-reino | KG |
| `GYR-INS-PIMENTAO-AMARELO` | Pimentão amarelo | KG |
| `GYR-INS-PIMENTAO-VERMELHO` | Pimentão vermelho | KG |
| `GYR-INS-QUEIJO-MUCARELA` | Muçarela | KG |
| `GYR-INS-REFRIGERANTE-LATA-350ML` | Refrigerante lata 350ml | UN |
| `GYR-INS-SACHES-MIX` | Sachês de molhos | UN |
| `GYR-INS-SAL` | Sal | KG |
| `GYR-INS-SCHWEPPES-CITRUS-350ML` | Schweppes Citrus 350ml | UN |
| `GYR-INS-SHOYU` | Shoyu | L |
| `GYR-INS-SPRITE-350ML` | Sprite 350ml | UN |
| `GYR-INS-TOMATE` | Tomate | KG |
| `GYR-INS-TOMATE-SECO` | Tomate seco | KG |
| `GYR-INS-VINAGRE` | Vinagre | L |

### Preparos canônicos

| Código | Preparo | Unidade |
|---|---|---|
| `GYR-PREP-ANTEPASTO-BERINJELA` | Antepasto de berinjela | KG |
| `GYR-PREP-BARBECUE-BASE` | Barbecue da casa | KG |
| `REC_FRALDINHA_PREPARADA` | Fraldinha preparada | KG |
| `GYR-PREP-FRANGO-PEITO-SOBRECOXA` | Frango preparado | KG |
| `REC_LINGUICA_TOSCANA_PREPARADA` | Linguiça toscana preparada | KG |
| `GYR-PREP-MAIONESE-CHIMICHURRI` | Maionese Chimichurri | KG |
| `GYR-PREP-MAIONESE-CASA` | Maionese da Casa | KG |
| `GYR-PREP-MAIONESE-DEFUMADA` | Maionese Defumada | KG |
| `GYR-PREP-MAIONESE-VERDE` | Maionese Verde | KG |
| `GYR-PREP-MANTEIGA-SAL-ALHO` | Manteiga com alho | KG |
| `GYR-PREP-VINAGRETE-BASE` | Vinagrete da casa | KG |

### Embalagens canônicas

| Código | Embalagem | Unidade |
|---|---|---|
| `GYR-EMB-BANDEJA-ALUMINIO-M120-500ML` | Bandeja alumínio M120 500ml | UN |
| `GYR-EMB-BANDEJA-ALUMINIO-M90-220ML` | Bandeja alumínio M90 220ml | UN |
| `GYR-EMB-CAIXA-COMBO-FAMILIA` | Caixa combo família | UN |
| `GYR-EMB-CAIXA-MARMITA-BRANCA` | Caixa marmita branca | UN |
| `GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO` | Guardanapo sachê 28x20,5 liso (só repasse) | UN |
| `GYR-EMB-KIT-TALHERES` | Kit talheres (só repasse) | UN |
| `GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38` | Papel acoplado mono frios 30x38 | UN |
| `GYR-EMB-POTE-TRANSPARENTE-60ML` | Pote transparente 60ml (só repasse) | UN |
| `GYR-EMB-POTE-REDONDO-145ML-COM-SOBRETAMPA` | Pote redondo 145ml com sobretampa (só repasse) | UN |
| `GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO` | Saco de papel hamburguão plastificado | UN |
| `GYR-EMB-SACO-DE-PAPEL-MONO-1-2-KG-PLASTIFICADO` | Saco de papel mono 1/2 kg plastificado | UN |
| `GYR-EMB-SACO-LISO-BRANCO-MEDIO` | Saco liso branco médio | UN |

## Política de subgrupos ERP/PWA

Subgrupo é regra de venda e montagem. Insumo/preparo é regra de custo. O mesmo preparo pode entrar com gramaturas diferentes conforme o subgrupo, sem criar outro insumo.

### Gyros da Casa

| Subgrupo | Regra | Impacto no custo |
|---|---|---|
| Escolha seu queijo | Obrigatório, 1 escolha | Não desconta custo base. Os Gyros continuam precificados com queijo na base. |
| Turbine seu Gyros | Opcional, no máximo 1 | Soma preço e soma custo da proteína/preparo adicional na gramatura do adicional. |
| Adicionais | Opcional, no máximo 3 | Soma preço e soma custo do adicional escolhido. |
| Deseja remover algo? | Opcional | Apenas instrução operacional; não remove custo e não altera preço. |
| Molhos extra à parte | Opcional | Soma preço e soma custo do preparo do molho + pote 60ml. |

`Sem queijo` fica somente em `Escolha seu queijo`. É uma opção operacional sem desconto: o valor base permanece o valor do lanche com queijo, e o custo base também permanece com queijo. Não cadastrar `Sem queijo` como insumo, preparo, desconto ou remoção que reduza ficha técnica.

### Batatas Fritas

| Subgrupo | Regra | Impacto no custo |
|---|---|---|
| Escolha o tempero da sua Batata | Obrigatório, 1 a 3 escolhas | Controla temperos de finalização; custo pode ser absorvido como base ou detalhado por tempero. |
| Molhos extra à parte | Opcional | Soma preço e soma custo do preparo do molho + pote 60ml. |

Batatas fritas e batatas gratinadas ativas incluem 1 molho padrão à parte na ficha de custo. O molho padrão atual é `Maionese de Chimichurri 60ml`, composto pelo preparo do molho + pote 60ml. A maionese grill não deve ser usada como molho padrão incluso das batatas.

### Gratinados

| Subgrupo | Regra | Impacto no custo |
|---|---|---|
| Escolha sua proteína | Obrigatório na proteína gratinada | Define o preparo usado e a gramatura da porção gratinada. |
| Escolha seu queijo | Obrigatório | Define cobertura de queijo do gratinado; aqui a escolha carrega custo próprio porque o queijo é parte do produto escolhido. |
| Escolha o tempero da sua Batata | Obrigatório na batata gratinada | Controla temperos de finalização da batata. |
| Adicionais | Opcional | Soma preço e soma custo do adicional escolhido. |
| Molhos extra à parte | Opcional | Soma preço e soma custo do preparo do molho + pote 60ml. |

Na `Proteína Gratinada Grande`, a proteína não é componente fixo da base. O produto vendido aparece como preço base `a partir de`, e o cliente é obrigado a selecionar 2 porções no subgrupo `Escolha sua proteína`. Cada seleção soma preço e custo; pode repetir a mesma proteína duas vezes ou misturar duas proteínas diferentes. Para leitura de margem mínima, o PWA deve computar o menor cenário obrigatório: base do produto + 2 seleções obrigatórias mais baratas. O multiplicador 2x vale para venda e para custo. Se a escolha for mais cara, preço e custo sobem conforme a opção escolhida.

### Almoço Executivo

| Subgrupo | Regra | Impacto no custo |
|---|---|---|
| Proteína extra | Opcional, no máximo 1 | Soma preço e soma custo do preparo de proteína extra. |
| Molhos extra à parte | Opcional | Soma preço e soma custo do preparo do molho + pote 60ml. |

## Observações de organização

- Produtos vendáveis, como lanches, combos, bebidas e molhos de 60ml, não devem ser duplicados como insumos quando já apontam para um insumo ou preparo canônico.
- Molhos de 60ml usam dois tipos de insumo: o preparo interno do molho e a embalagem `GYR-EMB-POTE-60ML-BRANCO-G697`.
- Bebidas são insumos de revenda por SKU/apresentação, não receita interna.
- Remoções do cardápio, como sem vinagrete ou sem maionese, não possuem insumo físico nem reduzem preço/custo. `Sem queijo` é opção do subgrupo `Escolha seu queijo`, também sem desconto.
- Combos atuais do catálogo são fechados por assinatura: `Combo Alpha`, `Combo Beta`, `Combo Gamma` e `Combo Delta`.
- Combos devem referenciar os produtos filhos. O custo dos insumos fica nos produtos filhos ou nas opções de grupo. Combos antigos como Essencial, Clássico, Completo e Família ficam apenas como histórico/desativado.
