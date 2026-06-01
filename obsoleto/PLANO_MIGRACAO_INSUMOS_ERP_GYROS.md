# Plano Mestre de Migracao de Insumos ERP Gyros

Data: 2026-05-06

Empresa ERP: `#3 GYROS FRANQUIAS LTDA`

Status: documento de controle. Nenhuma acao deste arquivo deve ser executada automaticamente sem passar pelas validacoes.

Este e o documento escolhido para governar a limpeza, a padronizacao e a insercao correta dos insumos no ERP. O `insumos.md` continua como fonte de auditoria de custos e receitas do PWA; este arquivo e a fonte de decisao operacional para migracao.

## Decisao escolhida

A solucao escolhida e uma migracao em duas camadas:

1. Padronizar primeiro o cadastro canonico de insumos, preparos e embalagens.
2. Depois vincular cada canonico no lugar correto do ERP: produto direto, opcao de grupo, produto filho, ou nenhuma acao quando nao ha consumo fisico.

O importador nao deve ler nomes de produtos e decidir sozinho. Ele deve obedecer uma ponte com `link_scope`, IDs do ERP, codigo canonico, unidade canonica e acao permitida.

Decisao definitiva: a fonte de custo de qualquer item de peso fica sempre em `KG` no PWA/documento, mas o consumo gravado no ERP fica em `G` quando a tela do ERP trabalhar em gramas. O campo de custo do vinculo no ERP representa o custo total daquela quantidade consumida, nao o custo unitario de 1g.

Exemplo aprovado: `GYR-PREP-MANTEIGA-SAL-ALHO` tem custo canonico de `R$ 61,39/KG`. No Alpha, o consumo correto e `20 G`, portanto o custo do vinculo e `R$ 1,23`. O item ERP existente `#1883 Manteiga com sal e alho` deve ser mantido como canonico; nao deve ser apagado nem duplicado.

## Escopo deste plano

Este plano cobre:

| Area | Decisao |
|---|---|
| Limpeza do ERP | bloquear/revisar duplicados e itens teste antes de apagar |
| Padronizacao | manter uma fonte canonica por insumo/preparo/embalagem |
| Insercao em produtos | usar `product_direct` somente quando o custo pertence ao produto fixo |
| Insercao em grupos | usar `group_option` quando o custo pertence a uma opcao de grupo |
| Combos | usar composicao/produtos filhos; nao achatar custo direto no combo |
| Molhos, bebidas e sobremesas | custo no produto filho, nao no produto pai que oferece a opcao |

## Acoes permitidas

| Acao | Quando usar |
|---|---|
| `keep_existing` | ERP ja tem item correto e ele deve continuar como fonte |
| `skip_existing` | vinculo ja existe e esta aceitavel |
| `create_canonical_product` | canonico existe no PWA, mas nao existe no ERP |
| `convert_to_canonical_feedstock` | produto/componente existente deve ganhar papel de preparo/insumo canonico, sem criar duplicado |
| `update_existing_link` | vinculo existe, mas quantidade/custo devem ser corrigidos |
| `create_or_update_link` | criar/atualizar vinculo depois de todas as validacoes |
| `child_product_reference` | produto pai apenas referencia produto filho com custo proprio |
| `no_physical_feedstock` | opcoes sem consumo fisico, como remocoes |
| `merge_into_canonical` | item duplicado deve apontar para o canonico correto |
| `disable_or_archive` | item antigo/teste deve sair de uso, sem apagar ainda |
| `delete_after_confirm_no_usage` | apagar somente depois de provar que nao ha uso historico/aberto |
| `blocked_review` | bloquear qualquer automatismo ate decisao humana |
| `needs_canonical_erp_product` | custo existe, mas falta produto canonico no ERP |

## Link scopes obrigatorios

| `link_scope` | Significado | Exemplo |
|---|---|---|
| `product_direct` | insumo fixo do produto | `#1104 Alpha -> #1881 Carne Fraldinha` |
| `group_option` | insumo de uma opcao de grupo | `#1104 / #162 / #1364 Queijo Mucarela -> GYR-INS-QUEIJO-MUCARELA` |
| `child_product_reference` | produto pai referencia produto filho | `#1104 / #100 -> #1327 Vinagrete 60ml` |
| `no_physical_feedstock` | nao ha consumo fisico | `#1104 / #99 / #1342 Remover Vinagrete` |
| `blocked_review` | linha nao deve ser importada | combo com custo achatado, item teste, unidade divergente |

## Regra canonica de unidade e custo

Esta regra elimina a duvida entre `KG`, `G` e `UN`.

| Tipo | Fonte de custo no documento/PWA | Quantidade no ERP | Custo gravado no vinculo ERP |
|---|---|---|---|
| Insumo/preparo por peso | sempre `KG` | preferencialmente `G` | `quantidade_em_g / 1000 * custo_por_kg` |
| Embalagem/unidade | `UN` | `UN` | `quantidade * custo_por_unidade` |
| Bebida/revenda unitario | `UN` | `UN` | `quantidade * custo_por_unidade` |

Nunca criar dois canonicos para o mesmo item apenas porque um lugar usa `KG` e outro usa `G`. A conversao e responsabilidade da ponte de importacao.

## Ordem segura de execucao

1. Gerar snapshot do ERP antes de qualquer acao.
2. Confirmar que nenhum item `blocked_review` sera executado.
3. Criar ou mapear produtos canonicos faltantes.
4. Marcar duplicados/testes como `disable_or_archive`, sem apagar.
5. Corrigir divergencias de unidade/custo ja existentes.
6. Inserir vinculos `product_direct`.
7. Inserir vinculos `group_option`.
8. Inserir custos de produtos filhos: molhos, bebidas, sobremesas.
9. Rodar validacao de duplicidade.
10. So depois revisar exclusao fisica de itens sem uso.

## Inventario atual do ERP

### Feedstocks existentes

Hoje o ERP tem poucos itens realmente cadastrados como `feedstock`.

| ERP id | Nome | Decisao |
|---|---|---|
| `#1380` | Linguica Toscana Aurora | `keep_existing`; fonte canonica atual de linguica |
| `#1381` | Peito de Frango | `keep_existing`; ingrediente da receita/auditoria futura do preparo de frango |
| `#1382` | Sobrecoxa de Frango | `keep_existing`; ingrediente da receita/auditoria futura do preparo de frango |
| `#1881` | Carne Fraldinha | `keep_existing`; fonte canonica atual de fraldinha |
| `#1882` | Pao Frances com Parmesao | `keep_existing`; fonte canonica atual de pao |
| `#1883` | Manteiga com sal e alho | `keep_existing`; fonte canonica atual do preparo, com consumo ERP em `G` |

### Vinculos de insumo existentes

| Linha ERP | Produto/opcao | Grupo | Insumo | Qtd atual | Custo atual | Decisao |
|---|---|---|---|---:|---:|---|
| `#1565` | `#1104 Alpha Gyros` | direto | `#1882 Pao Frances com Parmesao` | `1` | `1.899` | `skip_existing` |
| `#1566` | `#1104 Alpha Gyros` | direto | `#1883 Manteiga com sal e alho` | `1 G` | `0.35` | `update_existing_link`; corrigir para `20 G / R$ 1,23` |
| `#866` | `#1337 Linguica Toscana` | `#97` | `#1380 Linguica Toscana Aurora` | `120 G` | `2.64` | `update_existing_link`; corrigir para `150 G / R$ 3,49` |
| `#867` | `#1878 Frango (Peito e Sobrecoxa)` | `#97` | `#1381 Peito de Frango` | `40 G` | `0.80` | `disable_or_archive`; nao usar no custo atual, pois o ERP deve receber o preparo canonico `#1878` |
| `#868` | `#1878 Frango (Peito e Sobrecoxa)` | `#97` | `#1382 Sobrecoxa de Frango` | `80 G` | `1.60` | `disable_or_archive`; nao usar no custo atual, pois o ERP deve receber o preparo canonico `#1878` |
| `#1564` | `#1343 Combo Alpha Gyros` | direto | `#1881 Carne Fraldinha` | `150` | `4.00` | `blocked_review`; combo nao deve carregar carne direta |

## Matriz de limpeza do ERP

Nada deve ser apagado nesta fase. Primeiro deve ser marcado, validado e somente depois removido se nao houver uso.

| Familia | Itens ERP | Canonico correto | Acao |
|---|---|---|---|
| Carne | `#1881 Carne Fraldinha` | `GYR-INS-CARNE-FRALDINHA` | `keep_existing` |
| Carne | `#1361 Carne (Fraldinha)` | `#1881` | `merge_into_canonical`; manter como opcao comercial se usada em grupo |
| Carne | `#1323 Carne Teste` | `#1881` | `disable_or_archive`, depois `delete_after_confirm_no_usage` |
| Frango | `#1381 Peito de Frango`, `#1382 Sobrecoxa de Frango` | ingredientes de receita futura | `keep_existing`, mas nao vincular diretamente em produtos/grupos no ERP atual |
| Frango | `#1878 Frango (Peito e Sobrecoxa)` | `GYR-PREP-FRANGO-PEITO-SOBRECOXA` | `convert_to_canonical_feedstock`; usar como preparo canonico unico do frango |
| Frango | `#1378 Frango` | preparo canonico | `blocked_review` |
| Frango | `#1322 Frango Teste` | preparo canonico | `disable_or_archive`, depois `delete_after_confirm_no_usage` |
| Linguica | `#1380 Linguica Toscana Aurora` | `GYR-INS-LINGUICA-TOSCANA-AURORA` | `keep_existing` |
| Linguica | `#1337 Linguica Toscana` | `#1380` | manter como opcao comercial; revisar vinculo atual |
| Linguica | `#1370 Toscana` | `#1380` | `disable_or_archive`, depois `delete_after_confirm_no_usage` |
| Churros | `#1109 Mini Churros de doce de leite - 6 unidades` | produto vendavel | `keep_existing` |
| Churros | `#1138 Mini Churros Doce de Leite` | `GYR-INS-MINI-CHURROS-DOCE-LEITE` | `blocked_review`; confirmar papel |
| Churros | `#1139 Mini Churros Goiabada` | nenhum atual | `disable_or_archive`, depois `delete_after_confirm_no_usage` |
| Combo | `#1564 Combo Alpha -> Carne Fraldinha` | custo deve estar no filho/composicao | `blocked_review`; candidato a remocao apos confirmar uso |

## Catalogo canonico aprovado

O cadastro canonico final deve conter 77 itens. Os itens abaixo que ja possuem ERP id devem ser reaproveitados; os demais devem virar `create_canonical_product` ou ser mapeados antes dos vinculos.

### Canonicos ja mapeados para ERP

| Codigo canonico | ERP id | Nome | Unidade | Acao |
|---|---:|---|---|---|
| `GYR-INS-CARNE-FRALDINHA` | `#1881` | Fraldinha preparada | `KG` | `keep_existing` |
| `GYR-INS-LINGUICA-TOSCANA-AURORA` | `#1380` | Linguica toscana preparada | `KG` | `keep_existing` |
| `GYR-INS-PAO-FRANCES-PARMESAO` | `#1882` | Pao Frances com Parmesao | `UN` | `keep_existing` |
| `GYR-PREP-MANTEIGA-SAL-ALHO` | `#1883` | Manteiga com sal e alho | `KG` referencia, `G` no consumo ERP | `keep_existing`; corrigir vinculos para gramagem real |
| `GYR-PREP-FRANGO-PEITO-SOBRECOXA` | `#1878` | Frango preparado | `KG` referencia, `G` no consumo ERP | `convert_to_canonical_feedstock`; `#1381 + #1382` ficam para receita/auditoria |

### Canonicos que precisam existir antes da importacao completa

| Grupo | Codigos |
|---|---|
| Queijos e adicionais | `GYR-INS-BACON`, `GYR-INS-CATUPIRY-ORIGINAL`, `GYR-INS-CATUPIRY-4-QUEIJOS`, `GYR-INS-CHEDDAR`, `GYR-INS-QUEIJO-MUCARELA` |
| Preparos base | `GYR-PREP-VINAGRETE-BASE`, `GYR-PREP-MAIONESE-CASA`, `GYR-PREP-MAIONESE-CHIMICHURRI`, `GYR-PREP-MAIONESE-VERDE`, `GYR-PREP-MAIONESE-DEFUMADA`, `GYR-PREP-BARBECUE-BASE`, `GYR-PREP-ANTEPASTO-BERINJELA` |
| Embalagens | `GYR-EMB-POTE-60ML-BRANCO-G697`, `GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO`, `GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38`, `GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO`, `GYR-EMB-SACO-DE-PAPEL-MONO-1-2-KG-PLASTIFICADO`, `GYR-EMB-SACO-LISO-BRANCO-MEDIO`, `GYR-EMB-BANDEJA-ALUMINIO-M120-500ML`, `GYR-EMB-BANDEJA-ALUMINIO-M90-220ML`, `GYR-EMB-CAIXA-COMBO-FAMILIA`, `GYR-EMB-CAIXA-MARMITA-BRANCA`, `GYR-EMB-KIT-TALHERES`, `GYR-EMB-POTE-REDONDO-145ML-COM-SOBRETAMPA` |
| Batata e temperos | `GYR-INS-BATATA-PRE-FRITA`, `GYR-INS-SAL`, `GYR-INS-LEMON-PEPPER`, `GYR-INS-PAPRICA` |
| Bebidas/revenda | `GYR-INS-AGUA-COM-GAS-510ML`, `GYR-INS-AGUA-MINERAL-510ML`, `GYR-INS-BUDWEISER-LONG-NECK-330ML`, `GYR-INS-HEINEKEN-LONG-NECK-330ML`, `GYR-INS-REFRIGERANTE-LATA-350ML`, `GYR-INS-COCA-COLA-2L`, `GYR-INS-H2O-LIMAO-500ML`, `GYR-INS-LIMONETO-SEM-ACUCAR-500ML`, `GYR-INS-SCHWEPPES-CITRUS-350ML`, `GYR-INS-SPRITE-350ML`, `GYR-INS-DEL-VALLE-UVA-290ML`, `GYR-INS-GARRAFA-450ML` |
| Sobremesa e saches | `GYR-INS-MINI-CHURROS-DOCE-LEITE`, `GYR-INS-ACUCAR-COM-CANELA`, `GYR-INS-SACHES-MIX` |
| Ingredientes de receitas futuras | `GYR-INS-TOMATE`, `GYR-INS-CEBOLA`, `GYR-INS-CEBOLA-ROXA`, `GYR-INS-CHEIRO-VERDE`, `GYR-INS-AZEITE-DE-OLIVA`, `GYR-INS-VINAGRE`, `GYR-INS-ALHO`, `GYR-INS-BASE-DE-MAIONESE-QUERO`, `GYR-INS-CHIMICHURRI`, `GYR-INS-FUMACA-EM-PO`, `GYR-INS-LIMAO-SUCO`, `GYR-INS-MOLHO-BARBECUE-PRONTO`, `GYR-INS-MOSTARDA-AMARELA`, `GYR-INS-BERINJELA`, `GYR-INS-TOMATE-SECO`, `GYR-INS-PIMENTAO-AMARELO`, `GYR-INS-PIMENTAO-VERMELHO`, `GYR-INS-SHOYU`, `GYR-INS-MEL`, `GYR-INS-OREGANO`, `GYR-INS-PIMENTA-CALABRESA`, `GYR-INS-PIMENTA-DO-REINO`, `GYR-INS-LOURO`, `GYR-INS-MANJERICAO`, `GYR-INS-MANTEIGA-COM-SAL`, `GYR-INS-KETCHUP`, `GYR-INS-ARROZ-COZIDO`, `GYR-INS-FAROFA-PRONTA`, `GYR-INS-FEIJAO-COZIDO` |

## Mapa de produtos e grupos

### Lanches Gyros

Produtos ERP: `#1104 Alpha`, `#1105 Beta`, `#1106 Gamma`, `#1107 Delta`.

Regra comum: o queijo base nao deve entrar como `product_direct`, pois o ERP possui `#162 Escolha seu queijo` obrigatorio.

| Grupo ERP | Link scope | Decisao |
|---|---|---|
| Base fixa do lanche | `product_direct` | pao, proteina base, maionese base, manteiga, vinagrete base, papel/guardanapo, exceto queijo quando houver `#162` |
| `#162 Escolha seu queijo` | `group_option` | cada queijo recebe seu canonico; `Sem queijo` fica `no_physical_feedstock` |
| `#97 Turbine seu Gyros` | `group_option` | proteinas extras com canonicos; divergencias atuais ficam `blocked_review` |
| `#98 Adicionais` | `group_option` | bacon e queijos extras |
| `#99 Deseja remover algo?` | `no_physical_feedstock` | nenhuma linha de consumo |
| `#100 Molhos extra a parte` | `child_product_reference` | custo fica no produto molho 60ml |
| `#101 Escolha as Bebidas` | `child_product_reference` | custo fica no produto bebida |
| `#102 Sobremesa` | `child_product_reference` | custo fica no produto sobremesa |

### Alpha Gyros - payload piloto

Este produto e o teste inicial aprovado como dry-run. A importacao real do Alpha deve criar primeiro os canonicos pendentes e depois executar somente linhas sem `blocked_review`.

| Scope | Produto ERP | Grupo | Opcao | Canonico | Qtd ERP | Unidade ERP | Custo total | Acao |
|---|---|---|---|---|---:|---|---|
| `product_direct` | `#1104` | - | - | `GYR-INS-CARNE-FRALDINHA` / `#1881` | `150` | `G` | `R$ 7,01` | `create_or_update_link` |
| `product_direct` | `#1104` | - | - | `GYR-INS-PAO-FRANCES-PARMESAO` / `#1882` | `1` | `UN` | `R$ 1,90` | `skip_existing` |
| `product_direct` | `#1104` | - | - | `GYR-PREP-MANTEIGA-SAL-ALHO` / `#1883` | `20` | `G` | `R$ 1,23` | `update_existing_link` |
| `product_direct` | `#1104` | - | - | `GYR-PREP-MAIONESE-CASA` | `10` | `G` | `R$ 0,36` | `create_canonical_product`, depois `create_or_update_link` |
| `product_direct` | `#1104` | - | - | `GYR-PREP-VINAGRETE-BASE` | `60` | `G` | `R$ 0,95` | `create_canonical_product`, depois `create_or_update_link` |
| `product_direct` | `#1104` | - | - | `GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO` | `1` | `UN` | `R$ 0,15` | `create_canonical_product`, depois `create_or_update_link` |
| `product_direct` | `#1104` | - | - | `GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38` | `1` | `UN` | `R$ 0,07` | `create_canonical_product`, depois `create_or_update_link` |
| `blocked_review` | `#1104` | - | - | `GYR-INS-QUEIJO-MUCARELA` | `90` | `G` | `R$ 3,31` | nao importar direto; mover para `#162` |
| `group_option` | `#1104` | `#162` | `#1364 Queijo Mucarela` | `GYR-INS-QUEIJO-MUCARELA` | `90` | `G` | `R$ 3,31` | `create_canonical_product`, depois `create_or_update_link` |
| `group_option` | `#1104` | `#162` | `#1358 Sem queijo` | - | `0` | - | `R$ 0,00` | `no_physical_feedstock` |
| `group_option` | `#1104` | `#97` | `#1361 Carne (Fraldinha)` | `GYR-INS-CARNE-FRALDINHA` / `#1881` | `150` | `G` | `R$ 7,01` | `create_or_update_link` |
| `group_option` | `#1104` | `#97` | `#1878 Frango` | `GYR-PREP-FRANGO-PEITO-SOBRECOXA` / `#1878` | `150` | `G` | `R$ 3,16` | `convert_to_canonical_feedstock`, depois `create_or_update_link` |
| `group_option` | `#1104` | `#97` | `#1337 Linguica Toscana` | `GYR-INS-LINGUICA-TOSCANA-AURORA` / `#1380` | `150` | `G` | `R$ 3,49` | `update_existing_link` |
| `group_option` | `#1104` | `#97` | `#1377 Antepasto de Berinjela` | `GYR-PREP-ANTEPASTO-BERINJELA` | `150` | `G` | `R$ 9,24` | `create_canonical_product`, depois `create_or_update_link` |
| `child_product_reference` | `#1104` | `#100` | molhos 60ml | produto filho | - | - | - | custo no molho |
| `child_product_reference` | `#1104` | `#101` | bebidas | produto filho | - | - | - | custo na bebida |
| `child_product_reference` | `#1104` | `#102` | `#1109 Mini Churros` | produto filho | - | - | - | custo no churros |

### Batatas e gratinados

| Produto/area | Regra |
|---|---|
| `#1108 Batata Frita Media`, `#1880 Batata Frita Grande` | sal/temperos devem ir para `#197` como `group_option`; se sal for fixo de preparo, precisa de decisao explicita para nao duplicar |
| `#1116 Batata Gratinada - Grande` | mesmo cuidado com `#197`; queijo gratinado do PWA precisa decisao se vira base fixa ou grupo ERP novo |
| `#1115 Proteina Gratinada - Grande` | proteina deve ir para `#125`, nao direto na base se o grupo for obrigatorio |
| `GYR-BAT-GRT-M130`, `GYR-GRT-PROT-M180` | `blocked_review`; produtos medios nao mapeados no ERP atual |

### Combos

Combos nao recebem insumos achatados do lanche, batata ou bebida.

| ERP/PWA | Acao |
|---|---|
| ERP `#1343/#1354/#1368/#1348` | usar composicao por produtos filhos/grupos |
| PWA `GYR-CMB-ESS/CLA/CPL/FAM` | `blocked_review` ate matriz de equivalencia comercial |
| Linha ERP `#1564 Combo Alpha -> Carne Fraldinha` | candidato a remocao apos confirmar que nao ha uso necessario |

### Molhos, bebidas e sobremesas

| Area | Regra |
|---|---|
| Molhos `#1111/#1112/#1113/#1114/#1327` | cada produto molho recebe preparo base + pote 60ml |
| Bebidas | cada produto de bebida aponta para canonico de revenda; lanches apenas referenciam bebida |
| Sobremesa `#1109` | recebe acucar/canela, churros doce de leite e embalagem; pais apenas referenciam |

## Anomalias bloqueantes

| Item | Problema | Acao |
|---|---|---|
| `GYR-ALM-VEG Executivo Vegetariano de Berinjela` | base esta com frango preparado, apesar de vegetariano | `blocked_review`; confirmar se deve ser antepasto |
| `GYR-CMB-*` | custos achatados de produtos filhos | `blocked_review`; exportar composicao |
| `GYR-BAT-GRT-M130`, `GYR-GRT-PROT-M180` | sem equivalente ERP confirmado | `blocked_review` |
| `GYR-MOL-MAIDEF-60` | PWA tem maionese defumada, ERP nao confirmou produto/opcao | `blocked_review` |

## Validacoes antes de executar

O importador deve falhar se:

1. Alguma linha `blocked_review` estiver marcada para execucao.
2. Alguma linha `group_option` nao tiver `product_group_id` e `group_option_product_id`.
3. Algum canonico usado em vinculo nao existir no ERP nem estiver marcado para `create_canonical_product`.
4. Algum combo receber insumo direto de lanche, carne, batata ou bebida.
5. Algum produto com grupo obrigatorio receber direto o mesmo insumo que deveria vir pelo grupo.
6. A quantidade estiver em gramas sem declarar o custo canonico em `KG` que originou a conversao.
7. Um produto comercial for criado como insumo canonico por nome semelhante.
8. Uma receita de preparo for achatada em ingredientes no ERP atual.
9. Houver tentativa de apagar item sem confirmar uso historico e pedidos abertos.

## Proximo passo recomendado

Gerar um arquivo estruturado a partir deste plano:

`erp_insumos_migration_bridge.gyros.json`

Esse JSON deve conter somente linhas sem bloqueio, com `action`, `link_scope`, IDs do ERP e canonicos ja criados/mapeados. A primeira execucao real deve ser apenas para `#1104 Alpha Gyros`, repetindo o dry-run antes de gravar.
