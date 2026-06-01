# Insumos Gyros

Lista consolidada dos insumos do Gyros, organizada por tipo de uso para compra, estoque, ficha técnica e conferência no ERP/PWA.

Fontes históricas de referência: `obsoleto/insumos-gerais.md`, `obsoleto/insumos.md`, `obsoleto/REQUISICAO_ERP_INSUMOS_GYROS.md` e `obsoleto/DRY_RUN_ALPHA_GYROS_INSUMOS.md`.

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

### Ponte de Engenharia de Produtos e Processos 2026-05-27

Estado antes desta virada: o PWA tinha boas partes espalhadas em `Catálogo`, `Engenharia de Produtos`, `Lançamentos`, `Operação` e `Cadastros`. Isso ajudou a descobrir o modelo, mas criou duplicidade visual: o mesmo produto, preparo, ingrediente, compra ou custo aparecia em mais de um lugar, às vezes com riqueza diferente.

Modelo desejado agora: a navegação principal passa a ter uma fonte de trabalho única chamada `Engenharia de Produtos e Processos`. As antigas áreas viram visões internas conectadas:

- `Produtos de venda`: ficha técnica, quantidades, grupos, custos, preço e margem.
- `Produtos de venda` também absorve foto, categoria, nome comercial, canal, preço praticado e publicação.
- `Ingredientes`: itens comprados/controlados como estoque ou custo base.
- `Preparos`: receitas, misturas, molhos e itens com rendimento/custo técnico próprio.
- `Embalagens`: descartáveis, potes, caixas, sacolas e itens de repasse.
- `Revenda`: itens comprados prontos e vendidos por unidade.
- `Compras e evidências`: histórico rico de notas, pedidos, orçamentos, imagens, links e preço comparável.
- `Processos`: fluxo operacional de recebimento, preparo, porcionamento, armazenamento, baixa e rotina.
- `Pendências` e `Parâmetros`: QA e regras.

Regra de responsabilidade: o cadastro técnico continua existindo, mas como modo de edição acionado pelo item selecionado, não como módulo concorrente. `Compras e evidências` continua existindo como a visão rica de auditoria, não como uma tabela simples de compras. A publicação comercial mora dentro de `Produtos de venda`, não como fonte-mãe do custo.

Regra anti-duplicidade: uma informação deve ter um lugar oficial de manutenção. As outras visões podem ler e resumir essa informação, mas não devem parecer cadastros alternativos para o mesmo dado. Se uma informação está mais completa em uma visão antiga, ela deve ser reaproveitada dentro da Engenharia em vez de duplicada.

Regra de processos: manipular, assar, porcionar, congelar, refrigerar ou dar baixa não obriga a criar um preparo separado. Um preparo separado só é necessário quando há composição, receita, rendimento ou custo técnico próprio. Por isso, nesta fase, `Fraldinha` e `Linguiça toscana` continuam como itens técnicos únicos de custo, com processo operacional documentado; `Frango preparado` continua como preparo porque une cortes e temperos em uma composição própria.

Produtos afetados: todos os produtos ativos do cardápio e todos os itens técnicos passam a ser afetados visualmente pela nova navegação. A mudança é de arquitetura de leitura e manutenção; não altera automaticamente quantidade, custo, preço ou evidência.

### Ponte de refatoração final da Engenharia 2026-05-27

Estado após a primeira virada: a lateral ficou mais limpa, mas a tela ainda mantinha duas camadas de navegação concorrentes. `Produtos de venda` e `Catálogo e publicação` mostravam o mesmo produto em leituras diferentes. `Cadastro técnico` aparecia como uma segunda engenharia dentro da Engenharia. `Compras técnicas`, `Gastos técnicos` e `Inputs técnicos` ainda competiam com a visão mais rica de `Compras e evidências`.

Modelo desejado desta etapa:

- `Produtos de venda` absorve `Catálogo e publicação`. O produto vendido aparece uma vez só, com ficha técnica, foto, categoria, publicação, preço, grupos, embalagens, compras ligadas e ações de edição.
- `Cadastro técnico` deixa de ser bloco visual principal. Ele permanece como modo de edição acionado a partir do item selecionado.
- `Preparos` mantém a organização operacional por grupos, mas ganha a riqueza do cadastro: rendimento, custo por kg/L/unidade, custo ativo, componentes, usos e evidências.
- `Ingredientes`, `Preparos`, `Embalagens` e `Revenda` são listas técnicas de manutenção e leitura; não são categorias comerciais.
- `Compras e evidências` é a única casa visível para notas, orçamentos, pedidos, comprovantes, gastos, manutenção, equipamentos e inputs sem vínculo. Compras/gastos/inputs viram filtros ou seções internas, não abas principais.
- `Fornecedores` sai da navegação principal da Engenharia. Fornecedor aparece dentro de compras/evidências e no detalhe do item técnico.
- `Ativos`, `Internos`, `Históricos` e `Todos` deixam de ser filtros padrão repetidos em todas as telas. Quando necessário, os filtros devem falar a língua da operação: pendente, com evidência, sem evidência, custo fixado, histórico.

Abas principais preservadas nesta etapa:

- `Produtos de venda`
- `Ingredientes`
- `Preparos`
- `Embalagens`
- `Revenda`
- `Compras e evidências`
- `Processos`
- `Pendências`
- `Parâmetros`

Abas fundidas ou escondidas:

- `Catálogo e publicação` vira seção do detalhe de `Produtos de venda`.
- `Fornecedores` vira detalhe/filtro dentro de compras e itens técnicos.
- `Compras técnicas`, `Gastos técnicos` e `Inputs técnicos` viram tipos internos de `Compras e evidências`.

Regra de preservação: nenhuma ficha, custo, compra, evidência, imagem, processo ou cadastro será apagado por esta refatoração. A mudança é de leitura, navegação e responsabilidade: cada informação continua existindo, mas deixa de aparecer como fonte duplicada.

### Ponte de evidências 2026-05-26

Estado antes da importação: o lote `/home/spawnbtc/Desktop/evidencias_sem_duplicatas` reunia imagens e um índice manual com notas, orçamentos, recibos e comprovantes ainda fora do PWA.

Modelo desejado:

- guardar todos os arquivos como evidência clicável em `docs/inputs/2026`;
- cadastrar notas, pedidos, prints e orçamentos como `inputs`;
- registrar compras de alimento, bebida, embalagem e insumo técnico em `purchaseOrders` e `purchaseItems`;
- registrar manutenção, utensílios, etiquetas, equipamentos e itens sem vínculo direto com ficha técnica como `expenseEntries` ou itens `other`;
- não criar insumo ativo automaticamente a partir de item estranho, higiene, limpeza, inseticida, manutenção ou descrição genérica;
- atualizar custo ativo somente quando houver item canônico claro, data, quantidade e valor compatíveis.

Produtos/custos canônicos com atualização permitida por este lote: pão francês com parmesão, fraldinha, linguiça toscana, muçarela, Catupiry, tomate, cebola e óleo de algodão. Outros itens do lote entram como histórico/evidência até revisão operacional.

| Antes no PWA | Depois no PWA | Papel correto |
|---|---|---|
| `ing_fraldinha` como `Fraldinha preparada` ou split crua/preparada | `ing_fraldinha` como `Fraldinha` | Item técnico único; processo fica no fluxo operacional |
| `ing_frango` como `Frango preparado` | `ing_frango` como `Frango cru (peito e sobrecoxa)` + `rec_frango_preparado` | Compra crua/blend vira ingrediente; consumo do cardápio usa preparo |
| `ing_linguica` como `Linguiça toscana preparada` ou split compra/preparo | `ing_linguica` como `Linguiça toscana` | Item técnico único; processo fica no fluxo operacional |

Regra para evidências: nomes de nota, cupom, orçamento ou fornecedor podem variar, mas devem apontar para o ingrediente canônico de compra. Exemplo: `Fraldinha bovina`, `Fraldinha bovina vácuo`, `Fraldinha grill` e nomes similares apontam para `ing_fraldinha`; a ficha técnica de venda consome `ing_fraldinha` diretamente nesta fase.

Regra para catálogo: lanches, pratos, gratinados e adicionais consomem o item técnico que responde pelo custo. Quando houver composição/rendimento próprio, como no frango, esse item é um preparo. Quando for apenas manipulação/assamento/porcionamento sem custo composto confirmado, como fraldinha e linguiça nesta fase, o item técnico pode ser o próprio insumo.

Exceção prática: `Pão Francês com Parmesão` é comprado pronto por unidade e usado direto no lanche. Portanto ele permanece como ingrediente de compra/estoque (`ing_pao_parmesao_pronto`) e entra diretamente na ficha técnica do produto, sem virar preparo.

Regra de leitura no PWA: o resumo do item deve mostrar a `Base de compra da porção` quando houver insumo fracionado. Exemplo: batata congelada comprada por pacote/caixa, custo por kg, uso de 200g na ficha e custo da porção. A mesma leitura deve aparecer nos adicionais, pois adicionais também são porções de ingredientes, preparos, embalagens ou unidades.

## Engenharia de Produtos e Processos

A antiga `Central de Insumos e Fichas` foi absorvida pela `Engenharia de Produtos e Processos`.

Ela não substitui o cadastro técnico; ela o organiza como modo de edição. A função dela é mostrar a ponte limpa entre compra, ingrediente, receita/preparo, porção, produto, grupo, processo, evidência e ficha que seguirá para o ERP.

Regra de responsabilidade:

- Produto vendido define quantidade usada.
- Grupo/adicional define regra comercial, mínimo/máximo e quantidade da opção.
- Receita/preparo define componentes e rendimento.
- Ingrediente/embalagem/preparo define custo ativo.
- Lançamentos guardam evidência de compra.
- Operação explica processo, perda, porcionamento e fluxo físico.

Portanto, o ERP deve receber uma ficha final clara, por exemplo: `Fraldinha | 150g | R$ X` ou `Frango preparado | 150g | R$ X`, enquanto a central preserva a origem desse custo: compra, preparo, perda, custo manual, custo médio ou última compra.

Um item de preparo pode ter custo ativo manual próprio quando existe composição, rendimento ou perda técnica relevante. Exemplo: `Frango preparado` pode usar custo calculado do blend/cortes ou um custo manual por kg preparado, quando a operação define esse valor por acordo comercial, parceria ou padronização interna.

Regra anti-duplicidade:

- Família organiza os nomes e evita duplicação.
- Item base representa compra/custo/estoque.
- Item operacional representa o estado correto usado na ficha.
- Produto e grupo devem consumir o item operacional correto, não um nome genérico.
- Nomes antigos, nomes de nota e variações de fornecedor viram alias/revisão, não novos insumos ativos sem saneamento.

Exemplo Gyros:

| Família | Base de compra | Item operacional usado em produto | Observação |
|---|---|---|---|
| Fraldinha | Fraldinha | Fraldinha | processo fica como fluxo operacional, não como preparo separado nesta fase |
| Frango | Frango cru (peito e sobrecoxa) | Frango preparado | compra em blend, uso pronto para servir |
| Linguiça toscana | Linguiça toscana | Linguiça toscana | retirada de tripa, espeto, cocção e porção ficam como fluxo operacional |
| Vinagrete | tomate, cebola, azeite, temperos | Vinagrete da casa | receita com rendimento, usada em lanches e potes |
| Batata pré-frita | batata congelada por kg/caixa | porções/base de batata | porcionamento muda conforme produto |

### Ponte de implementação da Central

Estado anterior da primeira versão da Central: a aba `Insumos` já existia no PWA, mas a leitura principal ainda começava por famílias técnicas. Isso misturava `Fraldinha crua` e `Fraldinha preparada` em pontos diferentes da lista e fazia a `Ficha ERP` parecer duplicada quando o mesmo item aparecia no produto base e também em grupos/adicionais.

Modelo final: a Central começa por `Cardápio e fichas`, organizado pelas categorias oficiais de venda. A leitura técnica é uma lista única de itens, com filtros por papel: todos, receitas/preparos, ingredientes, embalagens, revenda e itens com família. Família não é mais aba principal; é tag e seção de detalhe quando há desdobramento real, como `Frango cru` -> `Frango preparado` e `Batata pré-frita` -> porções/base.

Regra de exportação para ERP: o produto ou grupo envia a quantidade e o item operacional correto. A Central decide o custo ativo. A `Ficha ERP` deve separar visualmente:

- `Produto base`: componentes fixos do produto vendido.
- `Grupos obrigatórios`: escolhas exigidas pelo cliente, com mínimo/máximo e custo mínimo quando aplicável.
- `Adicionais opcionais`: escolhas vendidas à parte.

Movimentos desta revisão:

- A visão principal deixa de listar recursos soltos e passa a partir do cardápio oficial.
- `Fraldinha` e `Linguiça toscana` deixam de exigir família técnica ativa quando não houver custo composto confirmado.
- `Frango preparado` continua como preparo ativo, porque representa composição operacional de cortes e temperos.
- O mesmo critério vale para batatas, vinagrete, maioneses, queijos, molhos e embalagens: só há família quando há desdobramento técnico real.
- A `Ficha ERP` deixa de juntar base, obrigatórios e adicionais numa única lista corrida.

Produtos afetados pela leitura: todos os produtos ativos do cardápio, especialmente lanches Gyros, combos, batatas, gratinados, executivos e molhos 60ml. A alteração é de organização e leitura da ficha; não cria automaticamente novos insumos nem substitui evidências de compra.

### Ponte da revisão final da Central

Estado atual antes desta revisão: a Central já parte do cardápio oficial e já possui leituras por `Cardápio e fichas`, lista técnica e `Pendências`. Mesmo assim, a UX ainda estava pesada quando tentava transformar agrupamentos técnicos em famílias. Preparos pequenos, como `Manteiga com alho`, existem no cadastro e na ficha do Alpha, mas precisam aparecer com clareza como preparo do produto base.

Modelo desejado: a Central deve funcionar como protótipo fiel do futuro ERP. A entrada principal é o cardápio vendido; o produto mostra apenas quantidade e contexto. A lista técnica organiza os itens por tag e filtro, sem inventar famílias. A Central decide o custo ativo a partir do item técnico correto e mostra evidência ou pendência sem transformar nomes de nota em insumo ativo.

Movimentos desta revisão:

- Reforçar `Cardápio e fichas` como ficha limpa para ERP, separando `Produto base`, `Grupos obrigatórios`, `Adicionais opcionais` e `Embalagens/repasse`.
- Reorganizar a lista técnica como uma lista única filtrável por papel: ingrediente, receita/preparo, embalagem, revenda e família quando houver desdobramento real.
- Deixar `Pendências` como fila de QA com motivo, impacto e ação sugerida.
- Evitar renderizar árvores completas e vínculos extensos de uma vez; mostrar resumo primeiro e detalhe sob demanda.
- Manter preparos como `Manteiga com alho`, `Vinagrete da casa`, `Frango preparado` e `Antepasto de berinjela` como itens técnicos de primeira classe.

Produtos afetados pela leitura: todos os produtos ativos aparecem na Central, mas a checagem principal desta revisão passa pelos lanches Gyros, batatas, gratinados, executivos e molhos 60ml. A mudança esperada é de organização, clareza e performance; qualquer alteração de custo ou quantidade deve continuar documentada separadamente.

### Decisão final de UX

`Catálogo` continua sendo a visão comercial: card visual, preço de venda, preço iFood, margem e revisão rápida do que aparece ao cliente.

`Engenharia de Produtos e Processos` passa a ser a visão técnica/ERP baseada no produto de venda, com catálogo como publicação. A entrada principal não é mais uma lista de famílias; é a leitura consolidada de produtos, ingredientes, preparos, embalagens, compras, evidências e processos.

Abas internas da Central:

- `Cardápio e fichas`: ponto de partida principal. Produto vendido abre ficha limpa de ERP: produto base, grupos obrigatórios, adicionais opcionais, embalagens, custo e origem.
- `Lista técnica`: lista única com filtros para receitas/preparos, ingredientes, embalagens, revenda e itens com família.
- `Pendências`: estimativas, históricos, receitas a revisar, itens sem família operacional clara e custos que ainda precisam confirmação.

Nomes artificiais de agrupamento, como `Bases de almoço executivo`, não devem aparecer como família principal. Arroz, feijão, farofa, batata de almoço e vinagrete devem aparecer como ingredientes/preparos próprios e serem usados pelos produtos de almoço executivo por quantidade.

### Ponte final para versão 100%

Estado atual antes da lapidação final: a Central já tem a estrutura correta, mas ainda havia dois riscos de leitura. Primeiro, algumas famílias técnicas pareciam herdar ingredientes de receitas vizinhas, como `Maionese da casa` mostrando itens de molho/maionese defumada. Segundo, ao selecionar itens dentro das listas, a rolagem interna voltava para o topo e quebrava a conferência.

Modelo final aplicado:

- `Cardápio e fichas` continua sendo a entrada principal e espelha o que o ERP precisa receber: produto vendido, componentes fixos, grupos obrigatórios, adicionais opcionais, embalagens e repasses.
- `Lista técnica` reúne todos os itens técnicos e filtra por papel: receitas/preparos, ingredientes, embalagens, revenda e itens com família.
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
| Fraldinha | R$ 42,98/kg | 22/04/2026, Poupaki, R$ 183,54 / 4,270kg | Consumida diretamente nas fichas nesta fase; processo fica no fluxo operacional |
| Frango cru (peito e sobrecoxa) | R$ 24,55/kg | 11/04/2026, Sendas, R$ 54,10 / 2,204kg | O preparo `Frango preparado` continua consumindo este ingrediente |
| Linguiça toscana | R$ 24,90/kg | 19/04/2026, Poupaki, R$ 75,49 / 3,032kg | Consumida diretamente nas fichas nesta fase; processo fica no fluxo operacional |
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

- Fraldinha (custo de compra real atual no PWA: R$ 42,98/kg; processo operacional anotado no fluxo)
- Frango cru (peito e sobrecoxa sem osso)
- Linguiça toscana
- Bacon em cubos

### Preparos de proteína usados no cardápio

- Frango preparado

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

- Churrasco de Fraldinha (antigo Prato Alpha base) / (arroz cozido, feijão cozido, batata frita, vinagrete, farofa, fraldinha)
- Churrasco de Frango - antigo Prato Beta base (arroz cozido, feijão cozido, batata frita, vinagrete, farofa, frango preparado)
- Churrasco de Linguiça - antigo Prato Gamma base (arroz cozido, feijão cozido, batata frita, vinagrete, farofa, linguiça)
- Churrasco Vegetariano de Berinjela (arroz cozido, feijão cozido, batata frita, vinagrete, farofa, antepasto de berinjela)
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
- Feijão (cru)
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
| `GYR-INS-ARROZ-CRU` | Arroz cru | KG |
| `GYR-INS-AZEITE-DE-OLIVA` | Azeite de oliva | L |
| `GYR-INS-BACON` | Bacon em cubos | KG |
| `GYR-INS-BASE-DE-MAIONESE-QUERO` | Base de maionese Quero | KG |
| `GYR-INS-BATATA-PRE-FRITA` | Batata pré-frita | KG |
| `GYR-INS-BERINJELA` | Berinjela | KG |
| `GYR-INS-BUDWEISER-LONG-NECK-330ML` | Budweiser long neck 330ml | UN |
| `GYR-INS-CARNE-FRALDINHA` | Fraldinha | KG |
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
| `GYR-INS-FEIJAO-CRU` | Feijão cru | KG |
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
| `GYR-PREP-ARROZ-COZIDO` | Arroz cozido | KG |
| `GYR-PREP-BARBECUE-BASE` | Barbecue da casa | KG |
| `GYR-PREP-FEIJAO-COZIDO` | Feijão cozido | KG |
| `GYR-PREP-FRANGO-PEITO-SOBRECOXA` | Frango preparado | KG |
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

## Ponte histórica para a Central de Insumos e Fichas

### Estado atual do PWA

A Central já reúne produtos, ingredientes, preparos, embalagens e pendências, mas a navegação estava tratando muitos agrupamentos como `família`. Isso confundia família técnica com categoria de compra, grupo de cardápio, receita e embalagem.

### Modelo desejado

A Central passa a ter uma lista técnica única, filtrável por papel:

- `Todos`
- `Receitas`
- `Insumos`
- `Embalagens`
- `Revenda`
- `Com família`

`Família` não é mais uma aba principal. Família é apenas uma tag e uma seção de detalhe quando existe desdobramento real, por exemplo:

- Frango cru -> Frango preparado
- Batata pré-frita -> bases/porções operacionais
- Muçarela/Catupiry/Cheddar/4 Queijos -> coberturas gratinadas
- Vinagrete, antepasto e manteiga com alho -> receita com ingredientes e rendimento

Itens como `Sobremesas`, `Sachês e temperos secos`, `Embalagens de batata e gratinados` e `Revisar família` não devem aparecer como família técnica. São filtros, categorias, pendências ou agrupamentos de leitura.

### Cadastros movidos ou reinterpretados

- Nenhum custo, quantidade ou produto será alterado nesta etapa.
- A mudança é de leitura e organização da Central.
- Itens técnicos continuam como insumos, receitas, embalagens ou revenda.
- Família fica apenas como relação de desdobramento quando ajuda a entender origem, receita, porção e uso.

### Produtos afetados

Todos os produtos do catálogo continuam usando as mesmas fichas e quantidades. A tela apenas passa a mostrar o vínculo com mais clareza: produto vendido informa quantidade e contexto; a Central informa custo ativo, origem, receita, embalagem e família quando existir.

## Ponte de simplificação da lista técnica

### Estado atual do PWA

A Central já virou uma lista técnica única, mas ainda mantinha a palavra `preparo` em filtros, tags e descrições. Isso fazia itens compostos parecerem um terceiro tipo operacional concorrendo com `receita`, quando para o ERP o que importa é mais simples: item comprado, item composto por receita/rendimento, embalagem ou revenda.

Também havia agrupamentos por texto amplo demais. Exemplo: `Azeite de oliva` podia cair em laticínios porque o fornecedor continha "Frios e Laticínios"; `Açúcar com canela` podia cair em congelados por proximidade com churros. Isso não altera custo, mas atrapalha a leitura e pode induzir cadastro errado no ERP.

### Modelo desejado

A Central passa a mostrar apenas estes papéis principais:

- `Receita`: insumo composto, com ingredientes e rendimento. Inclui vinagrete, manteiga com alho, antepasto, coberturas, maioneses e também carnes prontas quando existir perda/rendimento.
- `Insumo`: item comprado ou controlado diretamente, como tomate, azeite, açúcar, canela, batata pré-frita, fraldinha crua, frango cru, muçarela e pão comprado pronto.
- `Embalagem`: descartável, pote, saco, bandeja, guardanapo, caixa ou item de repasse.
- `Revenda`: item comprado pronto e vendido por unidade, como bebidas.
- `Família`: somente tag e seção de detalhe quando há desdobramento real, nunca categoria principal.

Produto vendido continua fora desta lista técnica: ele pertence ao cardápio e informa somente quantidade, grupo obrigatório/opcional e contexto de venda.

### Cadastros movidos ou reinterpretados

- `Receitas e preparos` passa a aparecer como `Receitas`.
- `Receita/preparo` passa a aparecer como `Receita`.
- `Ingrediente/base` passa a aparecer como `Insumo`.
- `Embalagem/descartável` passa a aparecer como `Embalagem`.
- A categoria visual da lista deixa de usar fornecedor como critério.
- Nenhum cadastro, custo, quantidade ou vínculo de produto é alterado nesta etapa.

### Produtos afetados

Nenhum produto tem custo recalculado por esta mudança. O impacto é só de UX e QA: a Central fica mais parecida com o que deve ir para o ERP, com menos ambiguidade entre insumo simples, receita/insumo composto, embalagem e revenda.

## Ponte para Engenharia de Produtos

### Estado atual do PWA

A navegação foi consolidada em `Engenharia`, com leituras internas para produtos, catálogo/publicação, ingredientes, preparos, embalagens, revenda, compras/evidências, processos, fornecedores, pendências e parâmetros. O cardápio continua existindo, mas como publicação comercial conectada à engenharia, não como fonte-mãe da composição.

### Modelo desejado

O PWA passa a prototipar a decisão arquitetural final do ERP:

- `Engenharia de Produtos` é a fonte operacional de itens, fichas, custos e pendências.
- `Todos os itens` é a entrada principal da engenharia, reunindo insumos, embalagens, preparos/semiacabados, revenda e produtos de venda.
- `Cardápio e publicação` vira leitura comercial: mostra como os produtos de venda aparecem em categorias, grupos, adicionais, preços e canais.
- `Pendências` continua sendo fila de QA antes de levar dados ao ERP.

Vocabulário aplicado na tela:

- `Insumo`: item comprado/controlado como estoque ou custo base.
- `Embalagem`: descartável, pote, caixa, saco, guardanapo, talher ou item de repasse.
- `Preparo`: item produzido, porcionado ou semiacabado com ficha/rendimento.
- `Produto de venda`: item vendável do cardápio.
- `Receita`: modo de preparo ou composição dentro da ficha, não o nome do tipo principal.
- `Família`: tag/seção de desdobramento real, nunca aba principal.

### Cadastros movidos ou reinterpretados

- Nenhum custo, quantidade, preço ou vínculo de produto será alterado nesta etapa.
- Os cadastros existentes de `recipes` continuam tecnicamente como registros do PWA, mas passam a aparecer na Engenharia como `Preparos`.
- Os produtos ativos do catálogo passam a aparecer também em `Todos os itens` como `Produto de venda`, para deixar clara a separação entre produto operacional e publicação no cardápio.
- A tela por cardápio continua existindo, mas como `Cardápio e publicação`, não como fonte-mãe da engenharia.

### Produtos afetados

Todos os produtos ativos do cardápio aparecem na nova leitura de engenharia, especialmente lanches Gyros, combos, batatas, gratinados, executivos, molhos 60ml, sobremesas e bebidas. O impacto esperado é apenas de navegação, vocabulário e clareza arquitetural; não há recálculo de custo nesta etapa.

## Ponte de saneamento operacional da Engenharia

### Estado atual do PWA

A nova Engenharia revelou cadastros que estavam tecnicamente úteis para cálculo, mas ruins para operação:

- `Prato Alpha base`, `Prato Beta base`, `Prato Gamma base` e `Prato Vegetariano base` apareciam como preparos dentro dos executivos.
- `Sal e pimenta` aparecia como insumo e também entrava em bases de batata.
- `Tempero premium para batata` aparecia como preparo mesmo sem uso ativo claro.
- `Base de maionese Quero` parecia preparo, mas é uma maionese comprada em balde/bag usada como insumo de receitas.
- Coberturas gratinadas por tamanho apareciam como preparos, quando na prática são porções de muçarela, Catupiry, cheddar ou 4 queijos aplicadas em produtos/grupos.

### Modelo desejado

- Executivo deve mostrar sua ficha aberta: arroz, feijão, vinagrete, farofa, batata de almoço, proteína preparada e embalagens. Não deve esconder a composição atrás de `Prato Alpha base`.
- Batata pré-frita é insumo comprado. Batata frita padrão acompanha sachê quando necessário; batata gratinada recebe 1 sachê de sal aberto na montagem. A base de batata não deve usar `sal e pimenta`.
- Sal de cozinha é insumo simples. Mistura `sal e pimenta` para carnes, se cadastrada, deve ser preparo próprio e só entrar em fraldinha, frango e pernil suíno com gramatura definida.
- Maionese Quero é insumo comprado. Maionese verde, chimichurri e defumada são preparos que usam essa base.
- Cobertura gratinada por tamanho não deve aparecer como preparo principal; é porção operacional ou componente direto do produto/grupo.

### Cadastros movidos ou reinterpretados

- Executivos deixam de apontar para `Prato ... base` como componente único e passam a listar os itens da ficha diretamente.
- `Prato ... base` fica como histórico/subficha interna, fora da lista principal da Engenharia.
- `Sal e pimenta` deixa de ser nome do insumo simples; o insumo volta a representar sal fino de cozinha.
- Bases de batata frita deixam de consumir sal/pimenta. Batatas fritas publicadas recebem sachê como componente separado; gratinadas recebem 1 sachê de sal na base.
- `Tempero premium para batata` fica arquivado/oculto da Engenharia principal até existir regra comercial clara para páprica ou lemon pepper.
- `Base de maionese Quero` passa a aparecer como `Maionese Quero 3kg`.
- Receitas de cobertura gratinada por tamanho ficam ocultas da lista principal; produtos e opções passam a consumir diretamente o insumo na gramatura correta.

### Produtos afetados

Afeta a leitura e a ficha dos executivos, batatas fritas, batatas gratinadas e proteína gratinada. O objetivo é reduzir ambiguidade e duplicidade visual antes de levar o desenho ao ERP.

## Ponte de limpeza de bases de batata e sal

### Estado atual do PWA

Depois do saneamento inicial, ainda ficaram dois problemas visíveis:

- Bases como `Batata frita base M`, `Batata frita base G`, `Batata gratinada base M`, `Batata gratinada base G` e `Batata frita base media (historico 120g)` continuavam aparecendo em `Preparos`.
- O `app.js` ainda tinha uma regra antiga que renomeava `ing_tempero` para `Sal e pimenta` ao normalizar a base, fazendo o PWA voltar a exibir o nome errado mesmo com o JSON corrigido.

### Modelo desejado

- Batata frita/gratinada não precisa de preparo próprio quando a ficha é só porcionamento de batata pré-frita.
- Produto ou opção deve consumir diretamente `Batata pré-frita` na gramatura correta.
- `Sal` não deve ser insumo fixo da batata. Ele deve aparecer como custo apenas quando a opção `Sal` for escolhida no grupo de tempero.
- `Sal e pimenta` não deve existir como insumo genérico. Se houver mistura para carnes, será um preparo próprio separado, com ficha e uso apenas em carnes.

### Cadastros movidos ou reinterpretados

- As bases de batata ficam arquivadas/ocultas da Engenharia principal.
- Produtos e combos que apontavam para bases de batata passam a apontar diretamente para `Batata pré-frita`.
- Opções `Sal` dos grupos de tempero passam a consumir `Sal sachê refinado 0,8g`.
- Componentes fixos de batata deixam de incluir sal sachê; o custo do sal entra pela escolha do usuário.
- A normalização do PWA deixa de renomear sal como `Sal e pimenta`.

### Produtos afetados

Batatas fritas, batatas gratinadas, executivos, combos e produtos históricos que ainda referenciavam bases de batata. A intenção é reduzir camadas artificiais sem alterar o conceito de custo por gramatura.

## Ponte final entre Cadastros e Engenharia de Produtos

### Estado atual do PWA

A Engenharia já funciona como leitura operacional, mas a aba `Cadastros` ainda mostra registros técnicos brutos como se fossem a mesma verdade do usuário. Isso causa conflito visual:

- Subfichas internas e históricas aparecem em `Cadastros > Preparos`.
- Produtos de venda, como `Vinagrete da Casa 60ml`, aparecem na Engenharia, mas o botão `Abrir cadastro técnico` não abre uma ficha clara de produto.
- Porcionamentos vendáveis parecem herdar preparo sem deixar claro que são produtos de venda com ficha própria.

### Modelo desejado

- `Engenharia de Produtos` é a tela humana principal: produto vendido, preparo real, insumo, embalagem, revenda, custo e pendência.
- `Cadastros` é a base técnica editável: registros, status, histórico e parâmetros.
- `Cadastros` não deve competir com Engenharia. Por padrão, ele mostra itens ativos e esconde registros internos, arquivados ou ocultos da Engenharia.
- Deve existir filtro explícito para consultar itens internos/históricos quando necessário.
- `Produtos de venda` precisa existir em Cadastros, porque produto vendido não é preparo.
- `Abrir cadastro técnico` deve ser contextual:
  - insumo abre `Cadastros > Ingredientes`;
  - preparo abre `Cadastros > Preparos`;
  - embalagem abre `Cadastros > Embalagens`;
  - produto de venda abre `Cadastros > Produtos de venda`.

### Cadastros movidos ou reinterpretados

- Nenhum custo deve ser recalculado nesta etapa.
- Cadastros passa a respeitar `engineeringHidden`, `status: internal`, `status: archived` e `active: false` no filtro padrão.
- Produtos ativos do cardápio passam a ter tabela/detalhe próprios em Cadastros.
- O botão `Abrir cadastro técnico` deixa de tentar abrir produto em uma aba inexistente.

### Produtos afetados

Afeta principalmente produtos de venda porcionados, como `Vinagrete da Casa 60ml`, maioneses 60ml, molhos, batatas e executivos. O objetivo é deixar claro que o preparo base e o produto vendável são entidades diferentes, conectadas por ficha técnica.

## Ponte de correção de misturas simples

### Estado atual do PWA

A leitura anterior tratou incorretamente algumas misturas como insumo simples:

- `Sal fino de cozinha` foi criado como nome operacional sem refletir o cadastro real desejado.
- `Sal e pimenta` deixou de aparecer como preparo.
- `Açúcar com canela` apareceu em insumos, inclusive sem acento, quando na operação é mistura de finalização do churros.

### Modelo desejado

- `Sal` é insumo comprado/controlado.
- `Sal sachê refinado 0,8g` é insumo/embalagem de repasse usado em batatas quando a escolha do cliente exige sachê.
- `Pimenta-do-reino` é insumo comprado/controlado.
- `Sal e pimenta` é preparo/mistura operacional. Ele pode ser usado no vinagrete e no tempero das carnes, exceto linguiça, mas a gramatura de carne deve ficar pendente se não houver medida confirmada.
- `Açúcar` é insumo comprado/controlado.
- `Canela moída` é insumo comprado/controlado.
- `Açúcar com canela` é preparo/mistura de finalização usado no churros de doce de leite.

### Cadastros movidos ou reinterpretados

- `ing_tempero` volta a ser `Sal`.
- `ing_acucar_canela` deixa de representar mistura e passa a representar `Açúcar`.
- Criar/reativar `rec_sal_pimenta` como preparo.
- Criar/reativar `rec_acucar_canela` como preparo.
- O churros deve consumir `rec_acucar_canela`, não um insumo chamado açúcar com canela.
- O vinagrete deve consumir `rec_sal_pimenta` em vez de sal isolado quando a operação usa a mistura.

### Produtos afetados

Afeta principalmente `Vinagrete da casa`, preparos de carnes e `Mini Churros 6 un com Doce de Leite`. A correção é de classificação e rastreabilidade; qualquer gramatura ainda não confirmada deve permanecer como pendência operacional, não como custo inventado.

## Ponte de simplificação da família Maionese da Casa

### Estado atual do PWA

`Maionese da Casa Junior Grill` aparece como insumo comprado pronto e `Maionese da Casa (Junior Grill)` aparece como preparo. A família técnica mostrava os dois juntos, criando duplicidade visual: parecia haver uma transformação técnica, mas a ficha do preparo apenas apontava para o mesmo produto comprado pronto.

### Modelo desejado

Enquanto a operação não confirmar transformação, rendimento, mistura ou porcionamento com perda própria, a família técnica `Maionese da casa` não deve aparecer como desdobramento real. O item pode continuar em `Preparos` temporariamente por compatibilidade das fichas existentes, mas a Engenharia não deve reforçar a duplicidade como família.

### Cadastros movidos ou reinterpretados

- Não recalcular custo nesta etapa.
- Remover `Maionese da casa` da lista de famílias técnicas reais.
- Manter a decisão maior pendente: trocar produtos que usam `rec_maionese` para consumir `ing_maionese_junior_grill` diretamente, caso seja confirmado que a Junior Grill é comprada pronta e usada pronta.

### Produtos afetados

Afeta visualmente lanches que usam maionese da casa e o produto `Maionese da Casa 60ml`. O custo não muda nesta etapa.

## Ponte de agrupamento operacional dos preparos

### Estado atual do PWA

A lista de `Preparos` ficou correta conceitualmente, mas visualmente solta: temperos, molhos, proteínas, finalizações e históricos aparecem na mesma sequência, dificultando o pente fino.

### Modelo desejado

Criar agrupamento visual simples para preparos, sem virar família técnica e sem alterar custo:

- `Temperos e misturas`
- `Molhos e maioneses preparados`
- `Acompanhamentos preparados`
- `Proteínas preparadas`
- `Finalizações e bases de montagem`
- `Vegetais preparados`
- `Internos / históricos`

Esse agrupamento serve apenas para leitura da Engenharia. Ele não cria herança, não move ingredientes automaticamente e não muda ficha técnica.

### Cadastros movidos ou reinterpretados

- Nenhum cadastro será movido nesta etapa.
- Nenhum custo será recalculado.
- Preparos continuam sendo registros técnicos com ficha/rendimento.
- O agrupamento será derivado de papel operacional, nome, status e identificadores já existentes.

### Produtos afetados

Nenhum produto muda custo ou composição. O impacto é apenas a organização visual da lista de preparos na Engenharia de Produtos.

## Ponte de simplificação das proteínas do Gyros

### Estado atual do PWA

A Engenharia ainda mostra fraldinha e linguiça em dois níveis: ingrediente de compra e preparo usado no produto. Isso deixa a leitura pesada porque, na operação atual, esses itens não têm uma receita de custo própria confirmada: são temperados/manipulados/assados/porcionados, mas o custo principal continua vindo do mesmo item comprado.

O frango é diferente: ele representa uma composição operacional de cortes, normalmente peito + sobrecoxa sem osso, com proporção que pode variar. Nesse caso, faz sentido manter um preparo separado porque a composição altera o custo técnico.

### Modelo desejado

- `Fraldinha` deve ser item técnico único de custo, comprado/controlado e consumido diretamente nas fichas, com fluxo operacional anotando tempero, espeto, cocção e porcionamento.
- `Linguiça toscana` deve ser item técnico único de custo, comprado/controlado e consumido diretamente nas fichas, com fluxo operacional anotando retirada de tripa, montagem no espeto, cocção e porcionamento.
- `Frango preparado` continua sendo preparo, porque nasce de uma composição de cortes e temperos.
- `Pernil suíno`, quando entrar, deve seguir o mesmo critério: item único se o custo vier de uma matéria-prima principal, ou preparo se houver composição/rendimento/perda técnica relevante.
- Processos, inspeções, máquinas e etapas detalhadas não serão entidades nesta fase. Eles ficam como fluxo operacional/notas.

### Cadastros movidos ou reinterpretados

- `ing_fraldinha` deixa de ser exibido como `Fraldinha crua` e passa a ser `Fraldinha`.
- `rec_fraldinha_preparada` deve ficar arquivado/oculto e deixar de ser consumido pelas fichas ativas.
- `ing_linguica` permanece como `Linguiça toscana`.
- `rec_linguica_preparada` deve ficar arquivado/oculto e deixar de ser consumido pelas fichas ativas.
- A família técnica real de fraldinha e linguiça deve sair da lista principal, porque não há mais desdobramento técnico ativo.
- `rec_frango_preparado` permanece ativo como preparo.

### Produtos afetados

Produtos de venda, grupos obrigatórios/opcionais, gratinados e executivos que hoje consomem `rec_fraldinha_preparada` ou `rec_linguica_preparada` passam a consumir diretamente `ing_fraldinha` ou `ing_linguica`, preservando as mesmas quantidades. O objetivo é simplificar a leitura e evitar duplicidade visual, sem inventar perda, processo ou custo novo.

## Ponte de correção de arroz e feijão

### Estado atual do PWA

`Arroz cozido` e `Feijão cozido` aparecem como `Insumos`, mas na operação eles já são itens transformados: dependem de cocção, água, temperos e rendimento. Isso polui a aba `Insumos` e faz parecer que o executivo consome diretamente o item comprado pronto.

### Modelo desejado

- `Arroz cru` é insumo comprado/controlado.
- `Feijão cru` é insumo comprado/controlado.
- `Arroz cozido` é preparo com rendimento.
- `Feijão cozido` é preparo com rendimento.
- Produtos executivos consomem `Arroz cozido` e `Feijão cozido`, não arroz/feijão crus.
- Como a receita operacional exata ainda não foi confirmada, a primeira versão preserva o custo aproximado atual e marca rendimento/temperos como pendência.

### Cadastros movidos ou reinterpretados

- `ing_arroz` deixa de representar `Arroz cozido` e passa a representar `Arroz cru`.
- `ing_feijao` deixa de representar `Feijão cozido` e passa a representar `Feijão cru`.
- Criar/reativar `rec_arroz_cozido` como preparo.
- Criar/reativar `rec_feijao_cozido` como preparo.

### Produtos afetados

Executivos e bases internas de almoço que consumiam `ing_arroz` ou `ing_feijao` passam a consumir `rec_arroz_cozido` e `rec_feijao_cozido`, preservando as mesmas quantidades. O objetivo é corrigir classificação e leitura da Engenharia sem inventar receita completa antes da confirmação operacional.

## Ponte de ficha auditável na Engenharia de Produtos

### Estado atual do PWA

A aba `Cadastros` mostra uma leitura rica do produto de venda: ficha técnica, grupos, custo por quantidade e famílias de compra ligadas à composição. A `Engenharia de Produtos`, por outro lado, ainda mostra a mesma ficha de forma mais resumida.

Isso cria a sensação de que existem duas frentes concorrentes:

- `Cadastros`: parece mais completo para auditar custo e composição.
- `Engenharia de Produtos`: parece mais correto conceitualmente, mas menos rico para decidir preço e revisar quantidade.

Também falta deixar explícito, na ficha do produto de venda, o custo-base de cada componente por kg, litro ou unidade, além do custo daquela quantidade usada na ficha.

### Modelo desejado

- `Engenharia de Produtos` deve ser a tela principal de decisão e leitura humana.
- `Cadastros` permanece como base técnica editável, histórico, parâmetros e manutenção de registros.
- Produto de venda deve mostrar, na própria Engenharia:
  - preço praticado;
  - preço calculado pela regra;
  - custo técnico;
  - base que entra no markup;
  - custos apenas repassados;
  - quantidade de cada componente;
  - custo-base por kg, litro ou unidade;
  - custo daquela quantidade na ficha;
  - status da origem do custo;
  - famílias de compra ligadas à composição.
- Quantidades de ficha continuam pertencendo ao produto de venda. A Engenharia deve mostrar essas quantidades como campos auditáveis e abrir o cadastro do produto para ajuste.
- Itens como guardanapo, talher e similares podem depender de regra do pedido, não apenas de regra fixa do produto. Nesta etapa, a Engenharia deve sinalizar essa diferença sem criar motor de pedido.

### Cadastros movidos ou reinterpretados

- Nenhum cadastro será movido nesta etapa.
- Nenhum custo será recalculado.
- Nenhuma quantidade será alterada automaticamente.
- A leitura rica já existente em `Cadastros > Produtos de venda` será reaproveitada dentro da Engenharia.
- O botão de ajuste da ficha deve apontar para o cadastro técnico do produto de venda.

### Produtos afetados

Todos os produtos de venda da Engenharia são afetados visualmente, especialmente `Alpha Gyros de Fraldinha`, combos, executivos, batatas, gratinados, molhos 60ml, sobremesas e bebidas. O objetivo é preparar a experiência que deve ir ao ERP: Engenharia como fonte de decisão; Cadastros como oficina técnica.

## Ponte de custo ativo e ajuste rápido de quantidade

### Estado atual do PWA

A ficha do produto já calcula custo a partir de ingredientes, preparos, embalagens e grupos, mas a quantidade aparece como leitura. Para alterar `150 g` de fraldinha para `100 g`, o usuário precisa abrir o cadastro técnico, encontrar o componente e salvar a ficha inteira.

O custo ativo dos insumos também aparece como resultado do cadastro de compra, mas ainda não deixa claro se veio da última compra, média histórica, evidência selecionada, orçamento, valor manual fixado ou estimativa.

### Modelo desejado

- Quantidade pertence à ficha técnica do produto ou do grupo/adicional.
- Custo unitário ativo pertence ao insumo ou embalagem.
- Produto de venda informa apenas a quantidade consumida.
- Engenharia calcula imediatamente:
  - custo unitário ativo;
  - quantidade usada;
  - custo daquela quantidade;
  - preço sugerido/base pela regra.
- A ficha de produto deve permitir ajuste rápido de quantidade no próprio componente, sem abrir modal.
- O cadastro técnico continua existindo como base completa, mas não deve ser obrigatório para um ajuste simples de gramatura.
- Insumos e embalagens devem permitir escolher a fonte do custo ativo:
  - compra cadastrada;
  - última evidência;
  - média histórica;
  - evidência específica;
  - valor manual/fixado;
  - orçamento/estimativa.

### Cadastros movidos ou reinterpretados

- Nenhum produto, preparo, insumo ou embalagem será duplicado.
- Ingredientes e embalagens ganham campos opcionais de controle do custo ativo.
- Componentes de produtos e componentes de adicionais continuam no mesmo cadastro, apenas passam a ter edição rápida pela Engenharia.

### Produtos afetados

Todos os produtos com ficha técnica podem ter quantidade ajustada diretamente na Engenharia. A primeira leitura prática é o `Alpha Gyros de Fraldinha`, onde itens como fraldinha, muçarela, maionese, vinagrete, embalagem e guardanapo devem exibir a quantidade editável e recalcular custo/preço na hora.

## Ponte de custo ativo para preparos

### Estado atual do PWA

Ingredientes e embalagens já podem ter custo ativo por compra cadastrada, última evidência, média, evidência escolhida ou valor manual. Preparos ainda dependem apenas da ficha técnica: soma dos componentes dividida pelo rendimento.

Isso funciona para vinagrete, maioneses, arroz cozido e feijão cozido quando a receita está auditada, mas deixa uma lacuna: a operação pode querer fixar temporariamente um valor por kg, litro ou unidade de preparo sem alterar cada ingrediente da receita.

### Modelo desejado

- Preparo continua tendo custo calculado pela ficha e rendimento como padrão.
- O usuário pode fixar custo ativo por kg, litro, grama, ml ou unidade do preparo.
- Produtos que usam uma porção do preparo recalculam automaticamente:
  - `60 ml` de vinagrete;
  - `10 g` de maionese;
  - `150 g` de frango preparado;
  - qualquer outra quantidade informada na ficha.
- A tela deve mostrar custo calculado e custo ativo, para auditoria.

### Cadastros movidos ou reinterpretados

- Nenhum preparo será duplicado.
- Nenhuma receita será apagada.
- Preparos ganham os mesmos campos opcionais de custo ativo já usados em insumos/embalagens.
- Quando não houver custo ativo manual, o preparo continua usando o custo calculado pela receita.

### Produtos afetados

Todos os produtos que consomem preparos passam a respeitar custo ativo caso ele seja definido. Exemplos principais: lanches com vinagrete e maionese, molhos 60ml, executivos, arroz/feijão cozidos, maioneses preparadas, frango preparado, antepasto e churros com finalização.
