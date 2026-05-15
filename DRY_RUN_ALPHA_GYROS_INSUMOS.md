# Dry-run Alpha Gyros - Plano Mestre

Data: 2026-05-06

Escopo: teste controlado somente para `#1104 GYR-LAN-ALPHA Alpha Gyros (Fraldinha)`.

Fonte de decisao: `PLANO_MIGRACAO_INSUMOS_ERP_GYROS.md`.

Fonte de custos: `insumos.md`.

Status: dry-run. Nenhuma gravacao foi feita no ERP.

## Resultado geral

O novo guia permite montar uma visao completa de como o Alpha ficaria preenchido, incluindo:

- insumos diretos do produto;
- insumos de opcoes de grupos;
- produtos filhos de molhos, bebidas e sobremesa;
- opcoes sem insumo fisico;
- vinculos que ja existem no ERP;
- bloqueios antes da importacao real.

Conclusao: o Alpha ja pode ser usado como piloto real depois de criar os canonicos pendentes. O ERP deve receber consumo em `G` para itens de peso, calculado a partir do custo canonico em `KG` do PWA/documento.

## Snapshot atual do ERP

Produto:

| Campo | Valor |
|---|---|
| ERP product id | `#1104` |
| SKU | `GYR-LAN-ALPHA` |
| Nome | `Alpha Gyros (Fraldinha)` |
| Tipo | `custom` |

Grupos atuais:

| Grupo | Nome | Papel |
|---:|---|---|
| `#162` | Escolha seu queijo | obrigatorio, `1-1`, soma |
| `#97` | Turbine seu Gyros | opcional, proteina extra |
| `#98` | Adicionais | opcional, bacon/queijos extras |
| `#99` | Deseja remover algo? | opcional, sem consumo fisico |
| `#100` | Molhos extra a parte | produto filho de molho |
| `#101` | Escolha as Bebidas | produto filho de bebida |
| `#102` | Sobremesa | produto filho de sobremesa |

## Insumos ja cadastrados no Alpha

O ERP ja possui 2 vinculos diretos de feedstock no Alpha.

| Linha ERP | Scope atual | Produto filho | Qtd atual | Custo atual | Decisao |
|---:|---|---|---:|---:|---|
| `#1565` | direto | `#1882 Pao Frances com Parmesao` | `1` | `1.899` | `skip_existing`; bate com PWA, apenas arredondamento visual para `R$ 1,90` |
| `#1566` | direto | `#1883 Manteiga com sal e alho` | `1 G` | `0.35` | `update_existing_link`; corrigir para `20 G` e `R$ 1,23` |

Portanto o importador deve reconhecer que o Alpha nao esta vazio. Ele deve reaproveitar `#1565`, corrigir `#1566` e criar novas linhas somente depois de criar/mapear os canonicos pendentes.

## Decisao definitiva de unidade

Para peso, a fonte de custo permanece em `KG` no PWA/documento, mas a quantidade gravada no ERP fica em `G`.

| Canonico | Custo referencia | Consumo Alpha no ERP | Custo do vinculo |
|---|---:|---:|---:|
| `GYR-PREP-MANTEIGA-SAL-ALHO` / `#1883` | `R$ 61,39/KG` | `20 G` | `R$ 1,23` |
| `GYR-INS-CARNE-FRALDINHA` / `#1881` | `R$ 46,73/KG` | `150 G` | `R$ 7,01` |
| `GYR-PREP-FRANGO-PEITO-SOBRECOXA` / `#1878` | `R$ 21,04/KG` | `150 G` | `R$ 3,16` |
| `GYR-PREP-MAIONESE-CASA` | `R$ 35,82/KG` | `10 G` | `R$ 0,36` |
| `GYR-PREP-VINAGRETE-BASE` | `R$ 15,82/KG` | `60 G` | `R$ 0,95` |

O ERP nao deve receber `1 G / R$ 0,35` para manteiga. A linha existente deve ser editada, nao duplicada.

## Produto direto proposto

Estas sao as linhas que pertencem ao produto fixo `#1104`, sem grupo.

| Scope | Produto ERP | Canonico | ERP canonico | Qtd | Unidade | Custo total | Acao |
|---|---:|---|---:|---:|---|---:|---|
| `product_direct` | `#1104` | `GYR-INS-CARNE-FRALDINHA` | `#1881` | `150` | `G` | `R$ 7,01` | `create_or_update_link` |
| `product_direct` | `#1104` | `GYR-INS-PAO-FRANCES-PARMESAO` | `#1882` | `1` | `UN` | `R$ 1,90` | `skip_existing` |
| `product_direct` | `#1104` | `GYR-PREP-MANTEIGA-SAL-ALHO` | `#1883` | `20` | `G` | `R$ 1,23` | `update_existing_link` |
| `product_direct` | `#1104` | `GYR-PREP-MAIONESE-CASA` | pendente | `10` | `G` | `R$ 0,36` | `create_canonical_product`, depois `create_or_update_link` |
| `product_direct` | `#1104` | `GYR-PREP-VINAGRETE-BASE` | pendente | `60` | `G` | `R$ 0,95` | `create_canonical_product`, depois `create_or_update_link` |
| `product_direct` | `#1104` | `GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO` | pendente | `1` | `UN` | `R$ 0,15` | `create_canonical_product`, depois `create_or_update_link` |
| `product_direct` | `#1104` | `GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38` | pendente | `1` | `UN` | `R$ 0,07` | `create_canonical_product`, depois `create_or_update_link` |
| `blocked_review` | `#1104` | `GYR-INS-QUEIJO-MUCARELA` | pendente | `90` | `G` | `R$ 3,31` | nao importar direto; custo deve ir para `#162` |

Base fixa importavel antes de criar novos canonicos: carne, pao e manteiga corrigida.

Base fixa completa esperada depois dos canonicos: carne, pao, manteiga corrigida, maionese base, vinagrete base, guardanapo e papel. Queijo sai da base direta.

## Grupo `#162 Escolha seu queijo`

O ERP ja possui estas opcoes no Alpha:

| Linha ERP | Opcao | Preco atual | Papel |
|---:|---|---:|---|
| `#673` | `#1356 Catupiry Original` | `R$ 0,00` | opcao comercial |
| `#709` | `#1358 Sem queijo` | `R$ 0,00` | opcao sem insumo |
| `#834` | `#1364 Queijo Mucarela` | `R$ 0,00` | opcao comercial |
| `#838` | `#1338 Catupiry 4 queijos` | `R$ 0,00` | opcao comercial |
| `#872` | `#1369 Cheddar` | `R$ 0,00` | opcao comercial |

Preenchimento esperado dos insumos do grupo:

| Scope | Grupo | Opcao ERP | Canonico | Qtd | Unidade | Custo total | Acao |
|---|---:|---|---|---:|---|---:|---|
| `group_option` | `#162` | `#1356 Catupiry Original` | `GYR-INS-CATUPIRY-ORIGINAL` | `90` | `G` | `R$ 3,66` | `create_canonical_product`, depois `create_or_update_link` |
| `no_physical_feedstock` | `#162` | `#1358 Sem queijo` | - | `0` | - | `R$ 0,00` | `no_action` |
| `group_option` | `#162` | `#1364 Queijo Mucarela` | `GYR-INS-QUEIJO-MUCARELA` | `90` | `G` | `R$ 3,31` | `create_canonical_product`, depois `create_or_update_link` |
| `group_option` | `#162` | `#1338 Catupiry 4 queijos` | `GYR-INS-CATUPIRY-4-QUEIJOS` | `90` | `G` | `R$ 3,00` | `create_canonical_product`, depois `create_or_update_link` |
| `group_option` | `#162` | `#1369 Cheddar` | `GYR-INS-CHEDDAR` | `90` | `G` | `R$ 2,45` | `create_canonical_product`, depois `create_or_update_link` |

Regra do teste: o queijo nao entra direto no Alpha. Ele entra no grupo obrigatorio `#162`, usando a opcao selecionada.

## Grupo `#97 Turbine seu Gyros`

Opcoes atuais do Alpha:

| Linha ERP | Opcao | Preco atual |
|---:|---|---:|
| `#849` | `#1361 Carne (Fraldinha)` | `R$ 9,99` |
| `#873` | `#1878 Frango (Peito e Sobrecoxa)` | `R$ 7,99` |
| `#367` | `#1337 Linguica Toscana` | `R$ 7,99` |
| `#859` | `#1377 Antepasto de Berinjela` | `R$ 9,99` |

Preenchimento esperado:

| Scope | Grupo | Opcao ERP | Canonico | ERP canonico | Qtd | Unidade | Custo total | Acao |
|---|---:|---|---|---:|---:|---|---:|---|
| `group_option` | `#97` | `#1361 Carne (Fraldinha)` | `GYR-INS-CARNE-FRALDINHA` | `#1881` | `150` | `G` | `R$ 7,01` | `create_or_update_link` |
| `group_option` | `#97` | `#1878 Frango (Peito e Sobrecoxa)` | `GYR-PREP-FRANGO-PEITO-SOBRECOXA` | `#1878` | `150` | `G` | `R$ 3,16` | converter `#1878` para preparo/insumo canonico; `#1381 + #1382` ficam para receita futura |
| `group_option` | `#97` | `#1337 Linguica Toscana` | `GYR-INS-LINGUICA-TOSCANA-AURORA` | `#1380` | `150` | `G` | `R$ 3,49` | `update_existing_link`; corrigir linha atual `120g / R$ 2,64` |
| `group_option` | `#97` | `#1377 Antepasto de Berinjela` | `GYR-PREP-ANTEPASTO-BERINJELA` | pendente | `150` | `G` | `R$ 9,24` | `create_canonical_product`, depois `create_or_update_link` |

## Grupo `#98 Adicionais`

Opcoes atuais do Alpha:

| Linha ERP | Opcao | Preco atual |
|---:|---|---:|
| `#850` | `#1341 Bacon` | `R$ 5,99` |
| `#860` | `#1356 Catupiry Original` | `R$ 7,99` |
| `#874` | `#1338 Catupiry 4 queijos` | `R$ 7,99` |
| `#374` | `#1369 Cheddar` | `R$ 7,99` |
| `#882` | `#1364 Queijo Mucarela` | `R$ 7,99` |

Preenchimento esperado:

| Scope | Grupo | Opcao ERP | Canonico | Qtd | Unidade | Custo total | Acao |
|---|---:|---|---|---:|---|---:|---|
| `group_option` | `#98` | `#1341 Bacon` | `GYR-INS-BACON` | `30` | `G` | `R$ 0,76` | `create_canonical_product`, depois `create_or_update_link` |
| `group_option` | `#98` | `#1356 Catupiry Original` | `GYR-INS-CATUPIRY-ORIGINAL` | `40` | `G` | `R$ 1,62` | `create_canonical_product`, depois `create_or_update_link` |
| `group_option` | `#98` | `#1338 Catupiry 4 queijos` | `GYR-INS-CATUPIRY-4-QUEIJOS` | `40` | `G` | `R$ 1,33` | `create_canonical_product`, depois `create_or_update_link` |
| `group_option` | `#98` | `#1369 Cheddar` | `GYR-INS-CHEDDAR` | `40` | `G` | `R$ 1,09` | `create_canonical_product`, depois `create_or_update_link` |
| `group_option` | `#98` | `#1364 Queijo Mucarela` | `GYR-INS-QUEIJO-MUCARELA` | `40` | `G` | `R$ 1,47` | `create_canonical_product`, depois `create_or_update_link` |

## Grupo `#99 Deseja remover algo?`

Opcoes atuais do Alpha:

| Linha ERP | Opcao | Acao |
|---:|---|---|
| `#375` | `#1127 Remover Carne` | `no_physical_feedstock` |
| `#377` | `#1129 Remover Queijo` | `no_physical_feedstock` |
| `#766` | `#1342 Remover Vinagrete` | `no_physical_feedstock` |
| `#875` | `#1359 Remover Maionese da Casa` | `no_physical_feedstock` |

Nenhum insumo deve ser criado para este grupo.

## Grupo `#100 Molhos extra a parte`

Opcoes atuais do Alpha:

| Linha ERP | Produto filho | Preco atual | Scope |
|---:|---|---:|---|
| `#379` | `#1111 Maionese da Casa - pote 60ml` | `R$ 5,99` | `child_product_reference` |
| `#380` | `#1112 Maionese Verde - pote 60ml` | `R$ 5,99` | `child_product_reference` |
| `#381` | `#1113 Maionese de Chimichurri - pote 60ml` | `R$ 5,99` | `child_product_reference` |
| `#382` | `#1114 Barbecue - pote 60ml` | `R$ 5,99` | `child_product_reference` |
| `#645` | `#1327 Vinagrete da Casa - pote 60ml` | `R$ 6,49` | `child_product_reference` |

Insumos que devem ficar nos produtos filhos:

| Produto filho | Canonicos esperados | Acao |
|---|---|---|
| `#1111 Maionese da Casa - pote 60ml` | `GYR-PREP-MAIONESE-CASA 60 G` + `GYR-EMB-POTE-60ML-BRANCO-G697 1 UN` | criar canonicos pendentes e vincular no produto filho |
| `#1112 Maionese Verde - pote 60ml` | `GYR-PREP-MAIONESE-VERDE 60 G` + `GYR-EMB-POTE-60ML-BRANCO-G697 1 UN` | criar canonicos pendentes e vincular no produto filho |
| `#1113 Maionese de Chimichurri - pote 60ml` | `GYR-PREP-MAIONESE-CHIMICHURRI 60 G` + `GYR-EMB-POTE-60ML-BRANCO-G697 1 UN` | criar canonicos pendentes e vincular no produto filho |
| `#1114 Barbecue - pote 60ml` | `GYR-PREP-BARBECUE-BASE 60 G` + `GYR-EMB-POTE-60ML-BRANCO-G697 1 UN` | criar canonicos pendentes e vincular no produto filho |
| `#1327 Vinagrete da Casa - pote 60ml` | `GYR-PREP-VINAGRETE-BASE 60 G` + `GYR-EMB-POTE-60ML-BRANCO-G697 1 UN` | criar canonicos pendentes e vincular no produto filho |

O Alpha nao deve receber esses insumos diretamente. Ele apenas referencia os produtos filhos.

## Grupo `#101 Escolha as Bebidas`

Opcoes atuais do Alpha:

| Linha ERP | Produto filho | Canonico de revenda esperado | Scope |
|---:|---|---|---|
| `#646` | `#1147 Agua Mineral Buonavita com gas 510 ml` | `GYR-INS-AGUA-COM-GAS-510ML` | `child_product_reference` |
| `#647` | `#1148 Agua Mineral Buonavita sem gas 510 ml` | `GYR-INS-AGUA-MINERAL-510ML` | `child_product_reference` |
| `#648` | `#1149 Cerveja Budweiser` | `GYR-INS-BUDWEISER-LONG-NECK-330ML` | `child_product_reference` |
| `#649` | `#1150 Cerveja Heineken` | `GYR-INS-HEINEKEN-LONG-NECK-330ML` | `child_product_reference` |
| `#383` | `#1131 Cha Ice Tea Leao Limao 450 ml` | `GYR-INS-GARRAFA-450ML` | `child_product_reference` |
| `#384` | `#1132 Cha Ice Tea Leao Pessego 450 ml` | `GYR-INS-GARRAFA-450ML` | `child_product_reference` |
| `#387` | `#1135 Coca-Cola lata 350 ml` | `GYR-INS-REFRIGERANTE-LATA-350ML` | `child_product_reference` |
| `#386` | `#1134 Coca-Cola PET 2 L` | `GYR-INS-COCA-COLA-2L` | `child_product_reference` |
| `#389` | `#1137 Coca-Cola Sem Acucar lata 350 ml` | `GYR-INS-REFRIGERANTE-LATA-350ML` | `child_product_reference` |
| `#650` | `#1151 Fanta Laranja lata 350 ml` | `GYR-INS-REFRIGERANTE-LATA-350ML` | `child_product_reference` |
| `#385` | `#1133 Guarana Antarctica lata 350 ml` | `GYR-INS-REFRIGERANTE-LATA-350ML` | `child_product_reference` |
| `#821` | `#1152 H2O Limao sem acucares PET 500 ml` | `GYR-INS-H2O-LIMAO-500ML` | `child_product_reference` |
| `#822` | `#1153 H2O Limoneto sem acucares PET 500 ml` | `GYR-INS-LIMONETO-SEM-ACUCAR-500ML` | `child_product_reference` |
| `#651` | `#1154 Schweppes Citrus lata 350 ml` | `GYR-INS-SCHWEPPES-CITRUS-350ML` | `child_product_reference` |
| `#652` | `#1155 Sprite lata 350 ml` | `GYR-INS-SPRITE-350ML` | `child_product_reference` |
| `#823` | `#1156 Suco Del Valle Uva lata 290 ml` | `GYR-INS-DEL-VALLE-UVA-290ML` | `child_product_reference` |

Bebidas nao entram como insumo do Alpha. O custo fica no produto de bebida/canonico de revenda.

## Grupo `#102 Sobremesa`

Opcao atual do Alpha:

| Linha ERP | Produto filho | Scope |
|---:|---|---|
| `#803` | `#1109 Mini Churros de doce de leite - 6 unidades` | `child_product_reference` |

Insumos que devem ficar no produto filho `#1109`:

| Produto filho | Canonico | Qtd | Unidade | Custo total | Acao |
|---|---|---:|---|---:|---|
| `#1109` | `GYR-INS-ACUCAR-COM-CANELA` | `8` | `G` | `R$ 0,10` | criar canonico e vincular no produto filho |
| `#1109` | `GYR-INS-MINI-CHURROS-DOCE-LEITE` | `120` | `G` | `R$ 3,66` | criar canonico e vincular no produto filho |
| `#1109` | `GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO` | `1` | `UN` | `R$ 0,06` | criar canonico e vincular no produto filho |

## Como ficaria preenchido

Depois de criar/mapear os canonicos pendentes e converter `#1878` em preparo canonico, o Alpha fica assim:

| Camada | Preenchimento esperado |
|---|---|
| Produto direto | carne, pao, manteiga corrigida, maionese base, vinagrete base, guardanapo, papel |
| `#162` | catupiry original, sem queijo, mucarela, catupiry 4 queijos, cheddar |
| `#97` | fraldinha extra, frango preparado, linguica, antepasto |
| `#98` | bacon, catupiry original, catupiry 4 queijos, cheddar, mucarela |
| `#99` | sem insumos fisicos |
| `#100` | referencia molhos; custo em cada produto molho |
| `#101` | referencia bebidas; custo em cada bebida |
| `#102` | referencia sobremesa; custo no churros |

## Pendencias antes de importar

O importador deve executar o Alpha somente depois destas pendencias objetivas:

1. Editar `#1566` de `1 G / R$ 0,35` para `20 G / R$ 1,23`.
2. Criar/mapear canonicos pendentes: maionese, vinagrete, queijos, bacon, embalagens, molhos, bebidas e churros.
3. Converter `#1878 Frango (Peito e Sobrecoxa)` em preparo/insumo canonico unico para o ERP atual.
4. Marcar os vinculos antigos do frango `#1381/#1382` como receita/auditoria futura, nao como custo direto do grupo.
5. Preencher molhos, bebidas e sobremesa nos produtos filhos, nao no Alpha.

## Veredito do dry-run

O dry-run agora esta fechado como regra de importacao. A gravacao real do Alpha deve ser feita em uma unica ponte controlada: reaproveitar canonicos existentes, criar os pendentes, corrigir os vinculos errados e inserir os insumos nos produtos/grupos certos.
