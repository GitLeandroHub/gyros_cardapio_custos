# Insumos Gyros

Documento de auditoria para ERP: lista de insumos canonicos, categorias do catalogo e mapa de consumo por produto e por grupo/opcao. Fonte: `gyros-custos-cardapio.json` e `REQUISICAO_ERP_INSUMOS_GYROS.md`.

Total canonico: 77 itens. Produtos ativos mapeados: 42.

## Status para importacao ERP

Este arquivo e fonte confiavel para custos, unidades canonicas e composicao do PWA, mas a importacao no ERP so pode ser considerada 100% segura quando o PWA gerar uma ponte estruturada entre este catalogo e os IDs reais do ERP.

O ERP atual diferencia tres papeis que nao podem ser misturados:

| Papel | O que representa | Exemplo | Regra |
|---|---|---|---|
| Produto vendavel | Item que aparece no cardapio ou e vendido como produto | `#1104 Alpha Gyros`, `#1327 Vinagrete da Casa - pote 60ml` | Recebe insumos diretos quando o custo pertence ao produto em si |
| Opcao/componente de grupo | Item selecionavel dentro de um grupo do produto pai | `#1361 Carne (Fraldinha)` em `#97 Turbine seu Gyros` | Recebe insumo somente no contexto do grupo/opcao |
| Insumo/preparo/embalagem canonico | Fonte unica de custo e unidade | `GYR-INS-CARNE-FRALDINHA`, `GYR-PREP-VINAGRETE-BASE`, `GYR-EMB-POTE-60ML-BRANCO-G697` | Nao deve ser duplicado por nome parecido |

Portanto, as tabelas abaixo nao devem ser importadas por nome. O PWA deve transformar este documento em uma ponte com IDs do ERP antes de gravar qualquer vinculo em `product_group_products`.

## Contrato obrigatorio da ponte ERP

Cada linha de importacao de insumo precisa sair do PWA neste formato logico:

```json
{
  "company_id": 3,
  "erp_product_id": 1104,
  "erp_product_name": "Alpha Gyros (Fraldinha)",
  "pwa_product_code": "GYR-LAN-ALPHA",
  "link_scope": "product_direct",
  "product_group_id": null,
  "product_group_name": null,
  "group_option_product_id": null,
  "group_option_product_name": null,
  "canonical_code": "GYR-INS-CARNE-FRALDINHA",
  "canonical_erp_product_id": 1881,
  "canonical_name": "Fraldinha preparada",
  "canonical_kind": "feedstock",
  "quantity": 0.15,
  "quantity_unit": "KG",
  "unit_cost": 46.73,
  "total_cost": 7.01,
  "source": "insumos.md",
  "action": "create_or_update_link"
}
```

Para vinculo de uma opcao de grupo, o `link_scope` deve ser `group_option`:

```json
{
  "company_id": 3,
  "erp_product_id": 1104,
  "erp_product_name": "Alpha Gyros (Fraldinha)",
  "pwa_product_code": "GYR-LAN-ALPHA",
  "link_scope": "group_option",
  "product_group_id": 97,
  "product_group_name": "Turbine seu Gyros",
  "group_option_product_id": 1361,
  "group_option_product_name": "Carne (Fraldinha)",
  "canonical_code": "GYR-INS-CARNE-FRALDINHA",
  "canonical_erp_product_id": 1881,
  "canonical_name": "Fraldinha preparada",
  "canonical_kind": "feedstock",
  "quantity": 0.15,
  "quantity_unit": "KG",
  "unit_cost": 46.73,
  "total_cost": 7.01,
  "source": "insumos.md",
  "action": "create_or_update_link"
}
```

Campos obrigatorios:

| Campo | Obrigatorio | Regra |
|---|---:|---|
| `company_id` | sim | Sempre `3` para Gyros |
| `erp_product_id` | sim | Produto pai real do ERP |
| `pwa_product_code` | sim | Codigo usado neste arquivo |
| `link_scope` | sim | `product_direct`, `group_option`, `child_product_reference` ou `no_physical_feedstock` |
| `product_group_id` | condicional | Obrigatorio quando `link_scope = group_option` |
| `group_option_product_id` | condicional | Obrigatorio quando o insumo pertence a uma opcao selecionavel |
| `canonical_code` | sim | Deve existir em `Insumos canonicos`, `Preparos canonicos` ou `Embalagens` |
| `canonical_erp_product_id` | condicional | Obrigatorio quando o insumo canonico ja existir no ERP |
| `quantity` | sim | Sempre na unidade canonica, sem converter para gramas no texto |
| `quantity_unit` | sim | `KG`, `UN` ou `L` |
| `unit_cost` | sim | Valor decimal original do PWA, nao o valor arredondado exibido em Markdown |
| `total_cost` | sim | `quantity * unit_cost`, arredondado so para exibicao |
| `action` | sim | `create_or_update_link`, `skip_existing`, `blocked_review` ou `no_action` |

## Regras anti-duplicidade

1. Nenhum insumo deve ser criado por nome se ja existir um `canonical_code` equivalente.
2. Produtos comerciais e opcoes de grupo nao devem virar insumos duplicados. Eles podem apontar para um insumo/preparo canonico.
3. Receitas internas de preparos canonicos nao devem ser achatadas no ERP atual. Exemplo: `Vinagrete da Casa` entra como `GYR-PREP-VINAGRETE-BASE`; tomate, cebola e demais ingredientes ficam apenas para auditoria/futuro ERP com receita recursiva.
4. Combos nao devem duplicar custo dos produtos filhos. O combo deve carregar a composicao de filhos/grupos; os insumos pertencem ao produto filho ou a opcao escolhida.
5. Remocoes como `Sem queijo`, `Sem vinagrete` e `Sem maionese da casa` devem sair como `link_scope = no_physical_feedstock`.
6. Bebidas de revenda devem usar fonte unica por SKU/embalagem. Se o ERP exigir vinculo, o produto vendido deve apontar para o proprio insumo canonico de revenda, sem criar outro item com o mesmo nome.
7. Nao apagar itens duplicados/teste no ERP durante esta importacao. Apenas marcar no export como `blocked_review` ou `no_action`.

## Mapa ERP minimo conhecido

### Produtos com SKU equivalente ou alias necessario

| PWA | ERP atual | Status de importacao |
|---|---|---|
| `GYR-LAN-ALPHA` | `#1104 GYR-LAN-ALPHA Alpha Gyros (Fraldinha)` | mapear direto |
| `GYR-LAN-BETA` | `#1105 GYR-LAN-BETA Beta Gyros (Sobrecoxa e Peito de Frango)` | mapear direto |
| `GYR-LAN-GAMMA` | `#1106 GYR-LAN-GAMMA Gamma Gyros (Linguiça Toscana)` | mapear direto |
| `GYR-LAN-VEG` | `#1107 GYR-LAN-DELTA Delta Gyros (Antepasto de Berinjela) - Vegetariano` | alias obrigatorio |
| `GYR-MOL-VIN-60` | `#1327 GYR-MOL-VIN-60 Vinagrete da Casa - pote 60ml` | mapear direto |
| `GYR-MOL-BBQ-60` | `#1114 Barbecue - pote 60ml` | alias obrigatorio |
| `GYR-MOL-MAICSA-60` | `#1111 Maionese da Casa - pote 60ml` | alias obrigatorio |
| `GYR-MOL-MAICHM-60` | `#1113 Maionese de Chimichurri - pote 60ml` | alias obrigatorio |
| `GYR-MOL-MAIVRD-60` | `#1112 Maionese Verde - pote 60ml` | alias obrigatorio |
| `GYR-MOL-MAIDEF-60` | sem produto equivalente confirmado no ERP | bloquear ate criar/mapear produto |
| `GYR-SOB-CHU-6UN` | `#1109 Mini Churros de doce de leite - 6 unidades` | alias obrigatorio |
| `GYR-BAT-FRT-M150` | `#1108 Batata Frita Média` | alias obrigatorio e revisar peso comercial |
| `GYR-BAT-FRT-G400` | `#1880 Batata Frita Grande` | alias obrigatorio |
| `GYR-BAT-GRT-G290` | `#1116 Batata Gratinada - Grande` | alias obrigatorio e revisar peso comercial |
| `GYR-GRT-PROT-G340` | `#1115 Proteina Gratinada - Grande` | alias obrigatorio e revisar peso comercial |
| `GYR-BEB-AGUAGAS-510` | `#1147 Água Mineral Buonavita com gás 510 ml` | alias obrigatorio |
| `GYR-BEB-AGUA-510` | `#1148 Água Mineral Buonavita sem gás 510 ml` | alias obrigatorio |
| `GYR-BEB-BUD-330` | `#1149 Cerveja Budweiser` | alias obrigatorio |
| `GYR-BEB-HEI-330` | `#1150 Cerveja Heineken` | alias obrigatorio |
| `GYR-BEB-ITEA-LIM-450` | `#1131 Chá Ice Tea Leão Limão 450 ml` | alias obrigatorio |
| `GYR-BEB-ITEA-PES-450` | `#1132 Chá Ice Tea Leão Pêssego 450 ml` | alias obrigatorio |
| `GYR-BEB-COCA-350` | `#1135 Coca-Cola lata 350 ml` | alias obrigatorio |
| `GYR-BEB-COCA-2000` | `#1134 Coca-Cola PET 2 L` | alias obrigatorio |
| `GYR-BEB-COCAZ-350` | `#1137 Coca-Cola Sem Açúcar lata 350 ml` | alias obrigatorio |
| `GYR-BEB-FANTA-350` | `#1151 Fanta Laranja lata 350 ml` | alias obrigatorio |
| `GYR-BEB-GUAR-350` | `#1133 Guaraná Antarctica lata 350 ml` | alias obrigatorio |
| `GYR-BEB-H2O-500` | `#1152 H2O Limão sem açúcares PET 500 ml` | alias obrigatorio |
| `GYR-BEB-LIMO-500` | `#1153 H2O Limoneto sem açúcares PET 500 ml` | alias obrigatorio |
| `GYR-BEB-SCHW-350` | `#1154 Schweppes Citrus lata 350 ml` | alias obrigatorio |
| `GYR-BEB-SPR-350` | `#1155 Sprite lata 350 ml` | alias obrigatorio |
| `GYR-BEB-DVUVA-290` | `#1156 Suco Del Valle Uva lata 290 ml` | alias obrigatorio |
| `GYR-EXT-SACH-5` | `#1879 Pacote extra com 5 sachês` | alias obrigatorio |
| `GYR-BAT-GRT-M130` | sem produto equivalente confirmado no ERP | bloquear ate criar/mapear produto |
| `GYR-GRT-PROT-M180` | sem produto equivalente confirmado no ERP | bloquear ate criar/mapear produto |
| `GYR-CMB-ESS`, `GYR-CMB-CLA`, `GYR-CMB-CPL`, `GYR-CMB-FAM` | ERP atual usa `#1343 Combo Alpha`, `#1354 Combo Beta`, `#1368 Combo Gamma`, `#1348 Combo Delta` | nao importar automaticamente; requer matriz de equivalencia por regra comercial |
| `GYR-ALM-ALPHA`, `GYR-ALM-BETA`, `GYR-ALM-GAMMA`, `GYR-ALM-VEG` | categoria existe no ERP, mas produtos equivalentes nao confirmados | bloquear ate criar/mapear produtos |

### Grupos atuais do ERP que carregam insumos

| Produto ERP | Grupos ERP relevantes |
|---|---|
| `#1104 Alpha Gyros` | `#162 Escolha seu queijo`, `#97 Turbine seu Gyros`, `#98 Adicionais`, `#99 Deseja remover algo?`, `#100 Molhos extra à parte`, `#101 Escolha as Bebidas`, `#102 Sobremesa` |
| `#1105 Beta Gyros` | `#162 Escolha seu queijo`, `#97 Turbine seu Gyros`, `#98 Adicionais`, `#99 Deseja remover algo?`, `#100 Molhos extra à parte`, `#101 Escolha as Bebidas`, `#102 Sobremesa` |
| `#1106 Gamma Gyros` | `#162 Escolha seu queijo`, `#97 Turbine seu Gyros`, `#98 Adicionais`, `#99 Deseja remover algo?`, `#100 Molhos extra à parte`, `#101 Escolha as Bebidas`, `#102 Sobremesa` |
| `#1107 Delta Gyros` | `#162 Escolha seu queijo`, `#116 Adicionais na finalização do seu Gyros (Veg)`, `#97 Turbine seu Gyros`, `#99 Deseja remover algo?`, `#100 Molhos extra à parte`, `#101 Escolha as Bebidas`, `#102 Sobremesa` |
| `#1343 Combo Alpha`, `#1354 Combo Beta`, `#1368 Combo Gamma`, `#1348 Combo Delta` | `#97 Turbine seu Gyros`, `#194 Escolha sua batata`, `#99 Deseja remover algo?`, `#147 Escolha sua Bebida`, `#102 Sobremesa` |
| `#1108 Batata Frita Média`, `#1880 Batata Frita Grande` | `#197 Esolha o tempero da sua Batata`, `#100 Molhos extra à parte` |
| `#1116 Batata Gratinada - Grande` | `#197 Esolha o tempero da sua Batata`, `#98 Adicionais`, `#100 Molhos extra à parte` |
| `#1115 Proteina Gratinada - Grande` | `#125 Esolha sua proteína`, `#98 Adicionais`, `#100 Molhos extra à parte` |
| `#1117 Bebibas` | `#101 Escolha as Bebidas` |
| `#1326 Combo Gyros (Batata + Bebida)` | produto antigo/inativo operacional; nao usar como base de importacao sem confirmacao |

## Fontes canonicas para itens duplicados/revisao

| Familia | Itens ERP atuais | Decisao para importacao |
|---|---|---|
| Carne | `#1881 Carne Fraldinha`, `#1361 Carne (Fraldinha)`, `#1323 Carne Teste` | `#1881` e a fonte canonica; `#1361` e opcao/componente comercial que deve apontar para `#1881`; `#1323` fica `blocked_review` |
| Frango | `#1878 Frango (Peito e Sobrecoxa)`, `#1381 Peito de Frango`, `#1382 Sobrecoxa de Frango`, `#1378 Frango`, `#1322 Frango Teste` | `GYR-PREP-FRANGO-PEITO-SOBRECOXA` e o preparo canonico; no ERP atual ele pode ser representado por `#1878` apontando para `#1381` e `#1382`; `#1378` fica `blocked_review`; `#1322` fica `blocked_review` |
| Linguiça | `#1380 Linguiça Toscana Aurora`, `#1337 Linguica Toscana`, `#1370 Toscana` | `#1380` e a fonte canonica; `#1337` e opcao/componente comercial que deve apontar para `#1380`; `#1370` fica `blocked_review` |
| Churros | `#1109 Mini Churros de doce de leite - 6 unidades`, `#1138 Mini Churros Doce de Leite`, `#1139 Mini Churros Goiabada` | `#1109` e produto vendavel atual; `GYR-INS-MINI-CHURROS-DOCE-LEITE` e o insumo canonico de custo; `#1138` so deve ser usado se for confirmado como componente operacional; `#1139` fica `blocked_review` |

## Validacoes obrigatorias antes de gravar no ERP

O PWA deve bloquear a importacao se qualquer uma destas validacoes falhar:

1. `canonical_code` inexistente nas tabelas canonicas deste arquivo.
2. Linha `group_option` sem `product_group_id` ou sem `group_option_product_id`.
3. Produto PWA sem `erp_product_id` ou alias aprovado.
4. Combo PWA tentando importar custo achatado de produto filho diretamente no combo.
5. Preparos canonicos sendo substituidos pelos ingredientes internos no ERP atual.
6. Unidade diferente de `KG`, `UN` ou `L` sem regra explicita de conversao.
7. Mesmo `canonical_code` sendo criado mais de uma vez como produto ERP novo.
8. Item marcado como `blocked_review` sendo usado em linha `create_or_update_link`.
9. Valor importado usando apenas arredondamento visual do Markdown quando houver valor decimal original no JSON fonte.
10. Bebida, embalagem ou preparo sendo criado com nome novo quando ja houver codigo canonico equivalente.

## Revisao ampla ERP/PWA antes da importacao

Data da revisao: 2026-05-06.

Nenhuma importacao foi feita no ERP nesta revisao.

O dry-run do `#1104 Alpha Gyros` mostrou que o problema da mucarela na base nao e isolado. Sempre que o ERP modela uma escolha obrigatoria por grupo, qualquer insumo equivalente que esteja na base do PWA deve ser tratado como `blocked_review` ate o PWA exportar a ponte correta por `group_option`.

Regra adicional obrigatoria:

> Se um produto ERP possui grupo obrigatorio que representa parte fisica do produto, o importador nao pode importar essa mesma parte como `product_direct` na base. A linha deve ir para o `product_group_id`/`group_option_product_id` correspondente, ou ficar bloqueada.

### Insumos/produtos do tipo feedstock existentes no ERP

Hoje o ERP possui apenas estes itens como `type = feedstock` para o contexto Gyros:

| ERP product id | Nome ERP | Papel recomendado |
|---|---|---|
| `#1380` | Linguiça Toscana Aurora | fonte canonica atual de linguiça |
| `#1381` | Peito de Frango | insumo real de frango; usado para compor preparo de frango |
| `#1382` | Sobrecoxa de Frango | insumo real de frango; usado para compor preparo de frango |
| `#1881` | Carne Fraldinha | fonte canonica atual de fraldinha |
| `#1882` | Pão Francês com Parmesão | fonte canonica atual de pao |
| `#1883` | Manteiga com sal e alho | revisar: existe, mas unidade/custo divergem do PWA |

Nao foram encontrados no ERP, como feedstock canonico, itens para: guardanapo, papel acoplado, pote 60ml, bacon, catupiry, cheddar, mucarela, vinagrete base, maioneses base, barbecue base, antepasto base, saches, churros congelado e demais bebidas/embalagens. Esses itens devem ficar como `needs_canonical_erp_product` ate serem criados ou mapeados como fonte canonica.

### Vinculos de insumo existentes no ERP

| Linha ERP | Produto/opcao ERP | Grupo | Insumo ERP | Qtd atual | Custo atual | Decisao |
|---|---|---|---|---:|---:|---|
| `#1565` | `#1104 Alpha Gyros` | direto | `#1882 Pão Francês com Parmesão` | `1` | `R$ 1,899` | `skip_existing`; apenas arredondamento visual para `R$ 1,90` |
| `#1566` | `#1104 Alpha Gyros` | direto | `#1883 Manteiga com sal e alho` | `1` | `R$ 0,35` | `blocked_review`; PWA espera `0,02 KG` e `R$ 1,23` |
| `#866` | `#1337 Linguica Toscana` | `#97 Turbine seu Gyros` | `#1380 Linguiça Toscana Aurora` | `120` | `R$ 2,64` | `blocked_review`; PWA espera `0,15 KG` e `R$ 3,49` para extra |
| `#867` | `#1878 Frango (Peito e Sobrecoxa)` | `#97 Turbine seu Gyros` | `#1381 Peito de Frango` | `40` | `R$ 0,80` | `blocked_review`; PWA espera preparo final `0,15 KG` e `R$ 3,16` |
| `#868` | `#1878 Frango (Peito e Sobrecoxa)` | `#97 Turbine seu Gyros` | `#1382 Sobrecoxa de Frango` | `80` | `R$ 1,60` | `blocked_review`; PWA espera preparo final `0,15 KG` e `R$ 3,16` |
| `#1564` | `#1343 Combo Alpha Gyros` | direto | `#1881 Carne Fraldinha` | `150` | `R$ 4,00` | `blocked_review`; combo nao deve carregar carne direta se o custo pertence ao produto filho/composicao |

Antes de apagar qualquer linha do ERP, confirmar se ela tem uso historico, pedido aberto, ou se e apenas tentativa anterior de carga de custo. Para importacao nova, linhas `blocked_review` nao devem ser atualizadas automaticamente.

### Casos semelhantes encontrados

| Area | Produtos ERP/PWA afetados | Grupo obrigatorio ou selecionavel | Risco | Acao para o importador |
|---|---|---|---|---|
| Queijo dos lanches | `#1104/GYR-LAN-ALPHA`, `#1105/GYR-LAN-BETA`, `#1106/GYR-LAN-GAMMA`, `#1107/GYR-LAN-VEG alias GYR-LAN-DELTA` | ERP `#162 Escolha seu queijo` min `1`, max `1` | PWA traz queijo na base; importar direto duplica custo com a escolha obrigatoria | mover queijo base para `group_option` em `#162` ou bloquear se o PWA nao exportar quantidades explicitas por opcao |
| Tempero das batatas | `#1108/GYR-BAT-FRT-M150`, `#1880/GYR-BAT-FRT-G400`, `#1116/GYR-BAT-GRT-G290` | ERP `#197 Esolha o tempero da sua Batata` min `1`, max `3` | PWA traz sal na base e tambem tem grupo de tempero | nao importar sal direto quando o grupo de tempero representar a escolha obrigatoria; exportar `Sal`, `Lemon Pepper`, `Paprica` como `group_option` |
| Proteina gratinada | `#1115/GYR-GRT-PROT-G340` | ERP `#125 Esolha sua proteína` min `2`, max `2` | PWA traz frango na base e tambem tem escolha de proteina | nao importar frango direto se a proteina vem do grupo; custo deve ir para opcoes de `#125` |
| Queijo gratinado no PWA | `GYR-BAT-GRT-G290`, `GYR-BAT-GRT-M130`, `GYR-GRT-PROT-G340`, `GYR-GRT-PROT-M180` | PWA tem `Escolha o queijo gratinado`; ERP atual nao mostrou grupo equivalente para `#1115/#1116` | PWA tem variacao de queijo que o ERP nao modela hoje | bloquear importacao dessas opcoes ate criar/mapear grupo ERP ou decidir que mucarela e fixa na base |
| Combos | PWA `GYR-CMB-ESS/CLA/CPL/FAM`; ERP `#1343/#1354/#1368/#1348` | ERP usa `#194 Escolha sua batata`, `#147 Escolha sua Bebida` e produto/composicao do lanche | PWA traz custos achatados de lanche, batata e bebida na base do combo | nunca importar esses custos como direto no combo; usar `child_product_reference` e custos nos produtos filhos |
| Molhos extras | Grupo ERP `#100 Molhos extra a parte` | produtos filhos `#1111`, `#1112`, `#1113`, `#1114`, `#1327` | duplicar custo se o molho for importado no Alpha e tambem no produto pote 60ml | custo dos molhos fica no produto filho/opcao; Alpha so referencia a opcao |
| Bebidas | Grupo ERP `#101 Escolha as Bebidas` | produtos de revenda | duplicar custo por produto pai se cada lanche carregar bebida como insumo | custo fica no produto de bebida/canonico de revenda, nao no Alpha/Beta/Gamma/Delta |
| Sobremesa | Grupo ERP `#102 Sobremesa` | produto filho `#1109` | duplicar custo do churros em cada produto que oferece sobremesa | custo fica em `#1109`, produto pai so referencia |
| Almoço Executivo | PWA `GYR-ALM-*` | ERP nao confirmou produtos equivalentes | importar sem produto ERP criaria ou vincularia no lugar errado | manter `blocked_review` ate criar/mapear produtos ERP |

### Anomalias de dados do PWA detectadas

| Item PWA | Problema encontrado | Acao |
|---|---|---|
| `GYR-ALM-VEG Executivo Vegetariano de Berinjela` | a base atual aparece com `GYR-PREP-FRANGO-PEITO-SOBRECOXA 0,15 KG`, apesar do produto ser vegetariano de berinjela | `blocked_review`; confirmar se deveria ser `GYR-PREP-ANTEPASTO-BERINJELA` antes de criar/mapear no ERP |
| `GYR-CMB-ESS`, `GYR-CMB-CLA`, `GYR-CMB-CPL`, `GYR-CMB-FAM` | a base do PWA traz custos achatados de lanche/batata/bebida, incluindo frango/queijo/pao/vinagrete, enquanto o ERP usa composicao por grupos/produtos filhos | `blocked_review`; exportar como composicao, nao como insumos diretos do combo |
| `GYR-BAT-GRT-M130`, `GYR-GRT-PROT-M180` | produtos de tamanho medio existem no PWA, mas nao possuem equivalente ERP confirmado | `blocked_review`; criar ou mapear produto ERP antes de importar custos |

### Ajuste necessario no export do PWA

O PWA precisa exportar uma tabela de ponte final, nao apenas o Markdown de auditoria. Para cada produto testado, o export precisa separar:

| `link_scope` | Quando usar |
|---|---|
| `product_direct` | insumo fisico fixo do produto, sem grupo obrigatorio concorrente |
| `group_option` | insumo que pertence a uma opcao dentro de `product_group_id` |
| `child_product_reference` | combo, molho, bebida ou sobremesa que referencia produto filho com custo proprio |
| `no_physical_feedstock` | remocoes e opcoes sem consumo fisico |
| `blocked_review` | divergencia de unidade/custo, alias ausente ou risco de duplicidade |
| `needs_canonical_erp_product` | canonico existe no PWA, mas ainda nao existe/mapeou produto canonico no ERP |

## Insumos canonicos

### Insumos

| Codigo | Insumo | Unidade | Custo unitario |
|---|---|---:|---:|
| GYR-INS-ACUCAR-COM-CANELA | Acucar com canela | KG | R$ 12,00 |
| GYR-INS-AGUA-COM-GAS-510ML | Água com gás 510ml | UN | R$ 1,65 |
| GYR-INS-AGUA-MINERAL-510ML | Água mineral 510ml | UN | R$ 1,25 |
| GYR-INS-ALHO | Alho | KG | R$ 25,26 |
| GYR-INS-ARROZ-COZIDO | Arroz cozido | KG | R$ 9,69 |
| GYR-INS-AZEITE-DE-OLIVA | Azeite de oliva | L | R$ 65,00 |
| GYR-INS-BACON | Bacon em cubos | KG | R$ 25,47 |
| GYR-INS-BASE-DE-MAIONESE-QUERO | Base de maionese Quero | KG | R$ 8,00 |
| GYR-INS-BATATA-PRE-FRITA | Batata pré-frita | KG | R$ 7,36 |
| GYR-INS-BERINJELA | Berinjela | KG | R$ 9,73 |
| GYR-INS-BUDWEISER-LONG-NECK-330ML | Budweiser long neck 330ml | UN | R$ 5,96 |
| GYR-INS-CATUPIRY-ORIGINAL | Catupiry | KG | R$ 40,62 |
| GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | KG | R$ 33,33 |
| GYR-INS-CEBOLA | Cebola | KG | R$ 5,98 |
| GYR-INS-CEBOLA-ROXA | Cebola roxa | KG | R$ 15,00 |
| GYR-INS-CHEDDAR | Cheddar | KG | R$ 27,27 |
| GYR-INS-CHEIRO-VERDE | Cheiro-verde | KG | R$ 22,22 |
| GYR-INS-CHIMICHURRI | Chimichurri | KG | R$ 38,84 |
| GYR-INS-COCA-COLA-2L | Coca-Cola 2L | UN | R$ 10,95 |
| GYR-INS-DEL-VALLE-UVA-290ML | Del Valle Uva 290ml | UN | R$ 3,67 |
| GYR-INS-FAROFA-PRONTA | Farofa pronta | KG | R$ 17,98 |
| GYR-INS-FEIJAO-COZIDO | Feijão cozido | KG | R$ 12,24 |
| GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | KG | R$ 46,73 |
| GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | KG | R$ 21,04 |
| GYR-INS-FUMACA-EM-PO | Fumaca em po | KG | R$ 19,43 |
| GYR-INS-GARRAFA-450ML | Garrafa 450ml | UN | R$ 4,30 |
| GYR-INS-H2O-LIMAO-500ML | H2O limão 500ml | UN | R$ 4,68 |
| GYR-INS-HEINEKEN-LONG-NECK-330ML | Heineken long neck 330ml | UN | R$ 6,92 |
| GYR-INS-KETCHUP | Ketchup | KG | R$ 19,98 |
| GYR-INS-LEMON-PEPPER | Lemon pepper | KG | R$ 30,00 |
| GYR-INS-LIMAO-SUCO | Limao (suco) | L | R$ 11,11 |
| GYR-INS-LIMONETO-SEM-ACUCAR-500ML | Limoneto sem açúcar 500ml | UN | R$ 4,68 |
| GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | KG | R$ 23,30 |
| GYR-INS-LOURO | Louro | KG | R$ 274,50 |
| GYR-INS-MANJERICAO | Manjericão | KG | R$ 277,22 |
| GYR-INS-MANTEIGA-COM-SAL | Manteiga com sal | KG | R$ 65,00 |
| GYR-INS-MEL | Mel | KG | R$ 40,00 |
| GYR-INS-MINI-CHURROS-DOCE-LEITE | Mini churros congelado (doce de leite) | KG | R$ 30,51 |
| GYR-INS-MOLHO-BARBECUE-PRONTO | Molho barbecue pronto | L | R$ 13,90 |
| GYR-INS-MOSTARDA-AMARELA | Mostarda amarela | KG | R$ 64,95 |
| GYR-INS-QUEIJO-MUCARELA | Muçarela | KG | R$ 36,73 |
| GYR-INS-OREGANO | Orégano | KG | R$ 249,50 |
| GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | UN | R$ 1,90 |
| GYR-INS-PAPRICA | Paprica doce | KG | R$ 20,00 |
| GYR-INS-PIMENTA-CALABRESA | Pimenta calabresa | KG | R$ 139,80 |
| GYR-INS-PIMENTA-DO-REINO | Pimenta-do-reino | KG | R$ 69,68 |
| GYR-INS-PIMENTAO-AMARELO | Pimentão amarelo | KG | R$ 34,69 |
| GYR-INS-PIMENTAO-VERMELHO | Pimentão vermelho | KG | R$ 34,69 |
| GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | UN | R$ 3,47 |
| GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | UN | R$ 0,12 |
| GYR-INS-SAL | Sal | KG | R$ 8,00 |
| GYR-INS-SCHWEPPES-CITRUS-350ML | Schweppes Citrus 350ml | UN | R$ 3,87 |
| GYR-INS-SHOYU | Shoyu | L | R$ 29,98 |
| GYR-INS-SPRITE-350ML | Sprite 350ml | UN | R$ 3,66 |
| GYR-INS-TOMATE | Tomate | KG | R$ 9,57 |
| GYR-INS-TOMATE-SECO | Tomate seco | KG | R$ 99,80 |
| GYR-INS-VINAGRE | Vinagre | L | R$ 5,32 |

### Preparos canonicos

| Codigo | Insumo | Unidade | Custo unitario |
|---|---|---:|---:|
| GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | KG | R$ 61,63 |
| GYR-PREP-BARBECUE-BASE | Barbecue da casa | KG | R$ 17,07 |
| GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | KG | R$ 11,61 |
| GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | KG | R$ 35,82 |
| GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | KG | R$ 10,55 |
| GYR-PREP-MAIONESE-VERDE | Maionese Verde | KG | R$ 11,31 |
| GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | KG | R$ 61,39 |
| GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | KG | R$ 15,82 |

### Embalagens

| Codigo | Insumo | Unidade | Custo unitario |
|---|---|---:|---:|
| GYR-EMB-BANDEJA-ALUMINIO-M120-500ML | Bandeja aluminio M120 500ml | UN | R$ 0,67 |
| GYR-EMB-BANDEJA-ALUMINIO-M90-220ML | Bandeja aluminio M90 220ml | UN | R$ 0,47 |
| GYR-EMB-CAIXA-COMBO-FAMILIA | Caixa combo familia | UN | R$ 1,38 |
| GYR-EMB-CAIXA-MARMITA-BRANCA | Caixa marmita branca | UN | R$ 2,84 |
| GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | UN | R$ 0,15 |
| GYR-EMB-KIT-TALHERES | Kit talheres | UN | R$ 0,49 |
| GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | UN | R$ 0,07 |
| GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | UN | R$ 0,24 |
| GYR-EMB-POTE-REDONDO-145ML-COM-SOBRETAMPA | Pote redondo 145ml com sobretampa | UN | R$ 0,34 |
| GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO | Saco de papel hamburgao plastificado | UN | R$ 0,06 |
| GYR-EMB-SACO-DE-PAPEL-MONO-1-2-KG-PLASTIFICADO | Saco de papel mono 1/2 kg plastificado | UN | R$ 0,08 |
| GYR-EMB-SACO-LISO-BRANCO-MEDIO | Saco liso branco medio | UN | R$ 0,84 |

## Categorias do catalogo

| Categoria | Codigo | Ativa no PWA | Produtos ativos mapeados |
|---|---|---:|---:|
| Almoço Executivo | CAT_ALMOCO | sim | 4 |
| Base interna (não conta no cardápio) | CAT_BASE_INTERNA | nao | 0 |
| Batatas Fritas | CAT_BATATAS | sim | 2 |
| Bebidas | CAT_BEBIDAS | sim | 16 |
| Combos | CAT_COMBOS | sim | 4 |
| Combos Família | CAT_FAMILIA | nao | 0 |
| Gratinados | CAT_GRATINADOS | sim | 4 |
| Gyros da Casa | CAT_ASSINATURAS | sim | 4 |
| Molhos e Extras | CAT_MOLHOS | sim | 7 |
| Monte o seu Gyros (personalização controlada) | CAT_MONTE | nao | 0 |
| Sobremesas | CAT_SOBREMESAS | sim | 1 |

## Mapa do catalogo com insumos

Observacao: receitas internas que nao sao estoque canonico separado aparecem abertas somente para auditoria do custo. Para importacao no ERP, use os codigos canonicos desta tabela e evite duplicar produtos filhos de combos.

### Almoço Executivo

#### Executivo de Fraldinha

- SKU/codigo PWA: `GYR-ALM-ALPHA`
- Tipo: `menu`
- Categoria: Almoço Executivo

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Executivo de Fraldinha > Prato Alpha base > Arroz cozido | GYR-INS-ARROZ-COZIDO | Arroz cozido | 0,15 | KG | R$ 9,69 | R$ 1,45 | via ficha interna REC_PRATO_ALPHA |
| Executivo de Fraldinha > Caixa marmita branca | GYR-EMB-CAIXA-MARMITA-BRANCA | Caixa marmita branca | 1 | UN | R$ 2,84 | R$ 2,84 | embalagem |
| Executivo de Fraldinha > Prato Alpha base > Farofa pronta | GYR-INS-FAROFA-PRONTA | Farofa pronta | 0,04 | KG | R$ 17,98 | R$ 0,72 | via ficha interna REC_PRATO_ALPHA |
| Executivo de Fraldinha > Prato Alpha base > Feijão cozido | GYR-INS-FEIJAO-COZIDO | Feijão cozido | 0,1 | KG | R$ 12,24 | R$ 1,22 | via ficha interna REC_PRATO_ALPHA |
| Executivo de Fraldinha > Prato Alpha base > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | via ficha interna REC_PRATO_ALPHA |
| Executivo de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | embalagem |
| Executivo de Fraldinha > Kit talheres | GYR-EMB-KIT-TALHERES | Kit talheres | 1 | UN | R$ 0,49 | R$ 0,49 | embalagem |
| Executivo de Fraldinha > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 2 | UN | R$ 0,24 | R$ 0,47 | embalagem |
| Executivo de Fraldinha > Pote redondo 145ml com sobretampa | GYR-EMB-POTE-REDONDO-145ML-COM-SOBRETAMPA | Pote redondo 145ml com sobretampa | 1 | UN | R$ 0,34 | R$ 0,34 | embalagem |
| Executivo de Fraldinha > Prato Alpha base > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via ficha interna REC_PRATO_ALPHA |

**Grupos e opcoes**

Grupo: Proteína extra

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Fraldinha extra :: Executivo de Fraldinha > Proteína extra > Fraldinha extra > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | insumo |

Grupo: Molhos à parte

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Barbecue 60ml :: Executivo de Fraldinha > Molhos à parte > Barbecue 60ml > Barbecue 60ml > Barbecue da casa | GYR-PREP-BARBECUE-BASE | Barbecue da casa | 0,06 | KG | R$ 17,07 | R$ 1,02 | via produto filho GYR-MOL-BBQ-60 |
| Maionese de Chimichurri 60ml :: Executivo de Fraldinha > Molhos à parte > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri | GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | 0,06 | KG | R$ 11,61 | R$ 0,70 | via produto filho GYR-MOL-MAICHM-60 |
| Maionese da Casa 60ml :: Executivo de Fraldinha > Molhos à parte > Maionese da Casa 60ml > Maionese da Casa 60ml > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,06 | KG | R$ 35,82 | R$ 2,15 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Defumada 60ml :: Executivo de Fraldinha > Molhos à parte > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada | GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | 0,06 | KG | R$ 10,55 | R$ 0,63 | via produto filho GYR-MOL-MAIDEF-60 |
| Maionese Verde 60ml :: Executivo de Fraldinha > Molhos à parte > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde | GYR-PREP-MAIONESE-VERDE | Maionese Verde | 0,06 | KG | R$ 11,31 | R$ 0,68 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese da Casa 60ml :: Executivo de Fraldinha > Molhos à parte > Maionese da Casa 60ml > Maionese da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Verde 60ml :: Executivo de Fraldinha > Molhos à parte > Maionese Verde 60ml > Maionese Verde 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese de Chimichurri 60ml :: Executivo de Fraldinha > Molhos à parte > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICHM-60 |
| Barbecue 60ml :: Executivo de Fraldinha > Molhos à parte > Barbecue 60ml > Barbecue 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-BBQ-60 |
| Vinagrete da Casa 60ml :: Executivo de Fraldinha > Molhos à parte > Vinagrete da Casa 60ml > Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-VIN-60 |
| Maionese Defumada 60ml :: Executivo de Fraldinha > Molhos à parte > Maionese Defumada 60ml > Maionese Defumada 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIDEF-60 |
| Vinagrete da Casa 60ml :: Executivo de Fraldinha > Molhos à parte > Vinagrete da Casa 60ml > Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-MOL-VIN-60 |

#### Executivo de Frango

- SKU/codigo PWA: `GYR-ALM-BETA`
- Tipo: `menu`
- Categoria: Almoço Executivo

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Executivo de Frango > Prato Beta base > Arroz cozido | GYR-INS-ARROZ-COZIDO | Arroz cozido | 0,15 | KG | R$ 9,69 | R$ 1,45 | via ficha interna REC_PRATO_BETA |
| Executivo de Frango > Caixa marmita branca | GYR-EMB-CAIXA-MARMITA-BRANCA | Caixa marmita branca | 1 | UN | R$ 2,84 | R$ 2,84 | embalagem |
| Executivo de Frango > Prato Beta base > Farofa pronta | GYR-INS-FAROFA-PRONTA | Farofa pronta | 0,04 | KG | R$ 17,98 | R$ 0,72 | via ficha interna REC_PRATO_BETA |
| Executivo de Frango > Prato Beta base > Feijão cozido | GYR-INS-FEIJAO-COZIDO | Feijão cozido | 0,1 | KG | R$ 12,24 | R$ 1,22 | via ficha interna REC_PRATO_BETA |
| Executivo de Frango > Prato Beta base > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via ficha interna REC_PRATO_BETA |
| Executivo de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | embalagem |
| Executivo de Frango > Kit talheres | GYR-EMB-KIT-TALHERES | Kit talheres | 1 | UN | R$ 0,49 | R$ 0,49 | embalagem |
| Executivo de Frango > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 2 | UN | R$ 0,24 | R$ 0,47 | embalagem |
| Executivo de Frango > Pote redondo 145ml com sobretampa | GYR-EMB-POTE-REDONDO-145ML-COM-SOBRETAMPA | Pote redondo 145ml com sobretampa | 1 | UN | R$ 0,34 | R$ 0,34 | embalagem |
| Executivo de Frango > Prato Beta base > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via ficha interna REC_PRATO_BETA |

**Grupos e opcoes**

Grupo: Proteína extra

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Frango extra :: Executivo de Frango > Proteína extra > Frango extra > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | insumo |

Grupo: Molhos à parte

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Barbecue 60ml :: Executivo de Frango > Molhos à parte > Barbecue 60ml > Barbecue 60ml > Barbecue da casa | GYR-PREP-BARBECUE-BASE | Barbecue da casa | 0,06 | KG | R$ 17,07 | R$ 1,02 | via produto filho GYR-MOL-BBQ-60 |
| Maionese de Chimichurri 60ml :: Executivo de Frango > Molhos à parte > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri | GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | 0,06 | KG | R$ 11,61 | R$ 0,70 | via produto filho GYR-MOL-MAICHM-60 |
| Maionese da Casa 60ml :: Executivo de Frango > Molhos à parte > Maionese da Casa 60ml > Maionese da Casa 60ml > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,06 | KG | R$ 35,82 | R$ 2,15 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Defumada 60ml :: Executivo de Frango > Molhos à parte > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada | GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | 0,06 | KG | R$ 10,55 | R$ 0,63 | via produto filho GYR-MOL-MAIDEF-60 |
| Maionese Verde 60ml :: Executivo de Frango > Molhos à parte > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde | GYR-PREP-MAIONESE-VERDE | Maionese Verde | 0,06 | KG | R$ 11,31 | R$ 0,68 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese da Casa 60ml :: Executivo de Frango > Molhos à parte > Maionese da Casa 60ml > Maionese da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Verde 60ml :: Executivo de Frango > Molhos à parte > Maionese Verde 60ml > Maionese Verde 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese de Chimichurri 60ml :: Executivo de Frango > Molhos à parte > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICHM-60 |
| Barbecue 60ml :: Executivo de Frango > Molhos à parte > Barbecue 60ml > Barbecue 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-BBQ-60 |
| Vinagrete da Casa 60ml :: Executivo de Frango > Molhos à parte > Vinagrete da Casa 60ml > Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-VIN-60 |
| Maionese Defumada 60ml :: Executivo de Frango > Molhos à parte > Maionese Defumada 60ml > Maionese Defumada 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIDEF-60 |
| Vinagrete da Casa 60ml :: Executivo de Frango > Molhos à parte > Vinagrete da Casa 60ml > Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-MOL-VIN-60 |

#### Executivo de Linguiça Toscana

- SKU/codigo PWA: `GYR-ALM-GAMMA`
- Tipo: `menu`
- Categoria: Almoço Executivo

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Executivo de Linguiça Toscana > Prato Gamma base > Arroz cozido | GYR-INS-ARROZ-COZIDO | Arroz cozido | 0,15 | KG | R$ 9,69 | R$ 1,45 | via ficha interna REC_PRATO_GAMMA |
| Executivo de Linguiça Toscana > Caixa marmita branca | GYR-EMB-CAIXA-MARMITA-BRANCA | Caixa marmita branca | 1 | UN | R$ 2,84 | R$ 2,84 | embalagem |
| Executivo de Linguiça Toscana > Prato Gamma base > Farofa pronta | GYR-INS-FAROFA-PRONTA | Farofa pronta | 0,04 | KG | R$ 17,98 | R$ 0,72 | via ficha interna REC_PRATO_GAMMA |
| Executivo de Linguiça Toscana > Prato Gamma base > Feijão cozido | GYR-INS-FEIJAO-COZIDO | Feijão cozido | 0,1 | KG | R$ 12,24 | R$ 1,22 | via ficha interna REC_PRATO_GAMMA |
| Executivo de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | embalagem |
| Executivo de Linguiça Toscana > Kit talheres | GYR-EMB-KIT-TALHERES | Kit talheres | 1 | UN | R$ 0,49 | R$ 0,49 | embalagem |
| Executivo de Linguiça Toscana > Prato Gamma base > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | via ficha interna REC_PRATO_GAMMA |
| Executivo de Linguiça Toscana > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 2 | UN | R$ 0,24 | R$ 0,47 | embalagem |
| Executivo de Linguiça Toscana > Pote redondo 145ml com sobretampa | GYR-EMB-POTE-REDONDO-145ML-COM-SOBRETAMPA | Pote redondo 145ml com sobretampa | 1 | UN | R$ 0,34 | R$ 0,34 | embalagem |
| Executivo de Linguiça Toscana > Prato Gamma base > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via ficha interna REC_PRATO_GAMMA |

**Grupos e opcoes**

Grupo: Proteína extra

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Linguiça Toscana extra :: Executivo de Linguiça Toscana > Proteína extra > Linguiça Toscana extra > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | insumo |

Grupo: Molhos à parte

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Barbecue 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Barbecue 60ml > Barbecue 60ml > Barbecue da casa | GYR-PREP-BARBECUE-BASE | Barbecue da casa | 0,06 | KG | R$ 17,07 | R$ 1,02 | via produto filho GYR-MOL-BBQ-60 |
| Maionese de Chimichurri 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri | GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | 0,06 | KG | R$ 11,61 | R$ 0,70 | via produto filho GYR-MOL-MAICHM-60 |
| Maionese da Casa 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Maionese da Casa 60ml > Maionese da Casa 60ml > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,06 | KG | R$ 35,82 | R$ 2,15 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Defumada 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada | GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | 0,06 | KG | R$ 10,55 | R$ 0,63 | via produto filho GYR-MOL-MAIDEF-60 |
| Maionese Verde 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde | GYR-PREP-MAIONESE-VERDE | Maionese Verde | 0,06 | KG | R$ 11,31 | R$ 0,68 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese da Casa 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Maionese da Casa 60ml > Maionese da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Verde 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Maionese Verde 60ml > Maionese Verde 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese de Chimichurri 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICHM-60 |
| Barbecue 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Barbecue 60ml > Barbecue 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-BBQ-60 |
| Vinagrete da Casa 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Vinagrete da Casa 60ml > Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-VIN-60 |
| Maionese Defumada 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Maionese Defumada 60ml > Maionese Defumada 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIDEF-60 |
| Vinagrete da Casa 60ml :: Executivo de Linguiça Toscana > Molhos à parte > Vinagrete da Casa 60ml > Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-MOL-VIN-60 |

#### Executivo Vegetariano de Berinjela

- SKU/codigo PWA: `GYR-ALM-VEG`
- Tipo: `menu`
- Categoria: Almoço Executivo

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Executivo Vegetariano de Berinjela > Prato Beta base > Arroz cozido | GYR-INS-ARROZ-COZIDO | Arroz cozido | 0,15 | KG | R$ 9,69 | R$ 1,45 | via ficha interna REC_PRATO_BETA |
| Executivo Vegetariano de Berinjela > Caixa marmita branca | GYR-EMB-CAIXA-MARMITA-BRANCA | Caixa marmita branca | 1 | UN | R$ 2,84 | R$ 2,84 | embalagem |
| Executivo Vegetariano de Berinjela > Prato Beta base > Farofa pronta | GYR-INS-FAROFA-PRONTA | Farofa pronta | 0,04 | KG | R$ 17,98 | R$ 0,72 | via ficha interna REC_PRATO_BETA |
| Executivo Vegetariano de Berinjela > Prato Beta base > Feijão cozido | GYR-INS-FEIJAO-COZIDO | Feijão cozido | 0,1 | KG | R$ 12,24 | R$ 1,22 | via ficha interna REC_PRATO_BETA |
| Executivo Vegetariano de Berinjela > Prato Beta base > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via ficha interna REC_PRATO_BETA |
| Executivo Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | embalagem |
| Executivo Vegetariano de Berinjela > Kit talheres | GYR-EMB-KIT-TALHERES | Kit talheres | 1 | UN | R$ 0,49 | R$ 0,49 | embalagem |
| Executivo Vegetariano de Berinjela > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 2 | UN | R$ 0,24 | R$ 0,47 | embalagem |
| Executivo Vegetariano de Berinjela > Pote redondo 145ml com sobretampa | GYR-EMB-POTE-REDONDO-145ML-COM-SOBRETAMPA | Pote redondo 145ml com sobretampa | 1 | UN | R$ 0,34 | R$ 0,34 | embalagem |
| Executivo Vegetariano de Berinjela > Prato Beta base > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via ficha interna REC_PRATO_BETA |

**Grupos e opcoes**

Grupo: Proteína extra

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Antepasto de berinjela extra :: Executivo Vegetariano de Berinjela > Proteína extra > Antepasto de berinjela extra > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | preparo canonico |

Grupo: Molhos à parte

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Barbecue 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Barbecue 60ml > Barbecue 60ml > Barbecue da casa | GYR-PREP-BARBECUE-BASE | Barbecue da casa | 0,06 | KG | R$ 17,07 | R$ 1,02 | via produto filho GYR-MOL-BBQ-60 |
| Maionese de Chimichurri 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri | GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | 0,06 | KG | R$ 11,61 | R$ 0,70 | via produto filho GYR-MOL-MAICHM-60 |
| Maionese da Casa 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Maionese da Casa 60ml > Maionese da Casa 60ml > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,06 | KG | R$ 35,82 | R$ 2,15 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Defumada 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada | GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | 0,06 | KG | R$ 10,55 | R$ 0,63 | via produto filho GYR-MOL-MAIDEF-60 |
| Maionese Verde 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde | GYR-PREP-MAIONESE-VERDE | Maionese Verde | 0,06 | KG | R$ 11,31 | R$ 0,68 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese da Casa 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Maionese da Casa 60ml > Maionese da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Verde 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Maionese Verde 60ml > Maionese Verde 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese de Chimichurri 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICHM-60 |
| Barbecue 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Barbecue 60ml > Barbecue 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-BBQ-60 |
| Vinagrete da Casa 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Vinagrete da Casa 60ml > Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-VIN-60 |
| Maionese Defumada 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Maionese Defumada 60ml > Maionese Defumada 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIDEF-60 |
| Vinagrete da Casa 60ml :: Executivo Vegetariano de Berinjela > Molhos à parte > Vinagrete da Casa 60ml > Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-MOL-VIN-60 |

### Batatas Fritas

#### Batata Frita Grande 400g

- SKU/codigo PWA: `GYR-BAT-FRT-G400`
- Tipo: `menu`
- Categoria: Batatas Fritas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Batata Frita Grande 400g > Batata frita base G > Batata pré-frita | GYR-INS-BATATA-PRE-FRITA | Batata pré-frita | 0,4 | KG | R$ 7,36 | R$ 2,95 | via ficha interna REC_BATATA_G |
| Batata Frita Grande 400g > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 2 | UN | R$ 0,15 | R$ 0,31 | embalagem |
| Batata Frita Grande 400g > Saco de papel mono 1/2 kg plastificado | GYR-EMB-SACO-DE-PAPEL-MONO-1-2-KG-PLASTIFICADO | Saco de papel mono 1/2 kg plastificado | 1 | UN | R$ 0,08 | R$ 0,08 | embalagem |
| Batata Frita Grande 400g > Batata frita base G > Sal | GYR-INS-SAL | Sal | 0,008 | KG | R$ 8,00 | R$ 0,06 | via ficha interna REC_BATATA_G |

**Grupos e opcoes**

Grupo: Escolha o tempero

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Lemon Pepper :: Batata Frita Grande 400g > Escolha o tempero > Lemon Pepper > Lemon pepper | GYR-INS-LEMON-PEPPER | Lemon pepper | 0,003 | KG | R$ 30,00 | R$ 0,09 | insumo |
| Páprica :: Batata Frita Grande 400g > Escolha o tempero > Páprica > Paprica doce | GYR-INS-PAPRICA | Paprica doce | 0,003 | KG | R$ 20,00 | R$ 0,06 | insumo |

Opcoes sem insumo fisico: Sal.

Grupo: Adicione 1 molho

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Barbecue 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Barbecue 60ml > Barbecue 60ml > Barbecue da casa | GYR-PREP-BARBECUE-BASE | Barbecue da casa | 0,06 | KG | R$ 17,07 | R$ 1,02 | via produto filho GYR-MOL-BBQ-60 |
| Maionese de Chimichurri 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri | GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | 0,06 | KG | R$ 11,61 | R$ 0,70 | via produto filho GYR-MOL-MAICHM-60 |
| Maionese da Casa 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Maionese da Casa 60ml > Maionese da Casa 60ml > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,06 | KG | R$ 35,82 | R$ 2,15 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Defumada 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada | GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | 0,06 | KG | R$ 10,55 | R$ 0,63 | via produto filho GYR-MOL-MAIDEF-60 |
| Maionese Verde 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde | GYR-PREP-MAIONESE-VERDE | Maionese Verde | 0,06 | KG | R$ 11,31 | R$ 0,68 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese da Casa 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Maionese da Casa 60ml > Maionese da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Verde 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Maionese Verde 60ml > Maionese Verde 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese de Chimichurri 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICHM-60 |
| Barbecue 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Barbecue 60ml > Barbecue 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-BBQ-60 |
| Maionese Defumada 60ml :: Batata Frita Grande 400g > Adicione 1 molho > Maionese Defumada 60ml > Maionese Defumada 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIDEF-60 |

#### Batata Frita Média 200g

- SKU/codigo PWA: `GYR-BAT-FRT-M150`
- Tipo: `menu`
- Categoria: Batatas Fritas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Batata Frita Média 200g > Batata frita base M > Batata pré-frita | GYR-INS-BATATA-PRE-FRITA | Batata pré-frita | 0,2 | KG | R$ 7,36 | R$ 1,47 | via ficha interna REC_BATATA_P |
| Batata Frita Média 200g > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 2 | UN | R$ 0,15 | R$ 0,31 | embalagem |
| Batata Frita Média 200g > Saco de papel hamburgao plastificado | GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO | Saco de papel hamburgao plastificado | 1 | UN | R$ 0,06 | R$ 0,06 | embalagem |
| Batata Frita Média 200g > Batata frita base M > Sal | GYR-INS-SAL | Sal | 0,003 | KG | R$ 8,00 | R$ 0,02 | via ficha interna REC_BATATA_P |

**Grupos e opcoes**

Grupo: Escolha o tempero

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Lemon Pepper :: Batata Frita Média 200g > Escolha o tempero > Lemon Pepper > Lemon pepper | GYR-INS-LEMON-PEPPER | Lemon pepper | 0,003 | KG | R$ 30,00 | R$ 0,09 | insumo |
| Páprica :: Batata Frita Média 200g > Escolha o tempero > Páprica > Paprica doce | GYR-INS-PAPRICA | Paprica doce | 0,003 | KG | R$ 20,00 | R$ 0,06 | insumo |

Opcoes sem insumo fisico: Sal.

Grupo: Adicione 1 molho

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Barbecue 60ml :: Batata Frita Média 200g > Adicione 1 molho > Barbecue 60ml > Barbecue 60ml > Barbecue da casa | GYR-PREP-BARBECUE-BASE | Barbecue da casa | 0,06 | KG | R$ 17,07 | R$ 1,02 | via produto filho GYR-MOL-BBQ-60 |
| Maionese de Chimichurri 60ml :: Batata Frita Média 200g > Adicione 1 molho > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri | GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | 0,06 | KG | R$ 11,61 | R$ 0,70 | via produto filho GYR-MOL-MAICHM-60 |
| Maionese da Casa 60ml :: Batata Frita Média 200g > Adicione 1 molho > Maionese da Casa 60ml > Maionese da Casa 60ml > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,06 | KG | R$ 35,82 | R$ 2,15 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Defumada 60ml :: Batata Frita Média 200g > Adicione 1 molho > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada | GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | 0,06 | KG | R$ 10,55 | R$ 0,63 | via produto filho GYR-MOL-MAIDEF-60 |
| Maionese Verde 60ml :: Batata Frita Média 200g > Adicione 1 molho > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde | GYR-PREP-MAIONESE-VERDE | Maionese Verde | 0,06 | KG | R$ 11,31 | R$ 0,68 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese da Casa 60ml :: Batata Frita Média 200g > Adicione 1 molho > Maionese da Casa 60ml > Maionese da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Verde 60ml :: Batata Frita Média 200g > Adicione 1 molho > Maionese Verde 60ml > Maionese Verde 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese de Chimichurri 60ml :: Batata Frita Média 200g > Adicione 1 molho > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICHM-60 |
| Barbecue 60ml :: Batata Frita Média 200g > Adicione 1 molho > Barbecue 60ml > Barbecue 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-BBQ-60 |
| Maionese Defumada 60ml :: Batata Frita Média 200g > Adicione 1 molho > Maionese Defumada 60ml > Maionese Defumada 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIDEF-60 |

### Bebidas

#### Água Mineral com Gás

- SKU/codigo PWA: `GYR-BEB-AGUAGAS-510`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Água Mineral com Gás > Água com gás 510ml | GYR-INS-AGUA-COM-GAS-510ML | Água com gás 510ml | 1 | UN | R$ 1,65 | R$ 1,65 | insumo |

#### Água Mineral sem Gás

- SKU/codigo PWA: `GYR-BEB-AGUA-510`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Água Mineral sem Gás > Água mineral 510ml | GYR-INS-AGUA-MINERAL-510ML | Água mineral 510ml | 1 | UN | R$ 1,25 | R$ 1,25 | insumo |

#### Budweiser 330ml

- SKU/codigo PWA: `GYR-BEB-BUD-330`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Budweiser 330ml > Budweiser long neck 330ml | GYR-INS-BUDWEISER-LONG-NECK-330ML | Budweiser long neck 330ml | 1 | UN | R$ 5,96 | R$ 5,96 | insumo |

#### Chá Ice Tea Leão Limão 450ml

- SKU/codigo PWA: `GYR-BEB-ITEA-LIM-450`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Chá Ice Tea Leão Limão 450ml > Garrafa 450ml | GYR-INS-GARRAFA-450ML | Garrafa 450ml | 1 | UN | R$ 4,30 | R$ 4,30 | insumo |

#### Chá Ice Tea Leão Pêssego 450ml

- SKU/codigo PWA: `GYR-BEB-ITEA-PES-450`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Chá Ice Tea Leão Pêssego 450ml > Garrafa 450ml | GYR-INS-GARRAFA-450ML | Garrafa 450ml | 1 | UN | R$ 4,30 | R$ 4,30 | insumo |

#### Coca-Cola Lata 350ml

- SKU/codigo PWA: `GYR-BEB-COCA-350`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Coca-Cola Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | insumo |

#### Coca-Cola Original 2L

- SKU/codigo PWA: `GYR-BEB-COCA-2000`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Coca-Cola Original 2L > Coca-Cola 2L | GYR-INS-COCA-COLA-2L | Coca-Cola 2L | 1 | UN | R$ 10,95 | R$ 10,95 | insumo |

#### Coca-Cola Zero Lata 350ml

- SKU/codigo PWA: `GYR-BEB-COCAZ-350`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Coca-Cola Zero Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | insumo |

#### Fanta Laranja Lata 350ml

- SKU/codigo PWA: `GYR-BEB-FANTA-350`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Fanta Laranja Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | insumo |

#### Guaraná Antarctica Lata 350ml

- SKU/codigo PWA: `GYR-BEB-GUAR-350`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Guaraná Antarctica Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | insumo |

#### H2OH! 500ml

- SKU/codigo PWA: `GYR-BEB-H2O-500`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| H2OH! 500ml > H2O limão 500ml | GYR-INS-H2O-LIMAO-500ML | H2O limão 500ml | 1 | UN | R$ 4,68 | R$ 4,68 | insumo |

#### H2OH! Zero 500ml

- SKU/codigo PWA: `GYR-BEB-LIMO-500`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| H2OH! Zero 500ml > Limoneto sem açúcar 500ml | GYR-INS-LIMONETO-SEM-ACUCAR-500ML | Limoneto sem açúcar 500ml | 1 | UN | R$ 4,68 | R$ 4,68 | insumo |

#### Heineken 330ml

- SKU/codigo PWA: `GYR-BEB-HEI-330`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Heineken 330ml > Heineken long neck 330ml | GYR-INS-HEINEKEN-LONG-NECK-330ML | Heineken long neck 330ml | 1 | UN | R$ 6,92 | R$ 6,92 | insumo |

#### Schweppes Citrus 350ml

- SKU/codigo PWA: `GYR-BEB-SCHW-350`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Schweppes Citrus 350ml > Schweppes Citrus 350ml | GYR-INS-SCHWEPPES-CITRUS-350ML | Schweppes Citrus 350ml | 1 | UN | R$ 3,87 | R$ 3,87 | insumo |

#### Sprite 350ml

- SKU/codigo PWA: `GYR-BEB-SPR-350`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Sprite 350ml > Sprite 350ml | GYR-INS-SPRITE-350ML | Sprite 350ml | 1 | UN | R$ 3,66 | R$ 3,66 | insumo |

#### Suco Del Valle Uva 290ml

- SKU/codigo PWA: `GYR-BEB-DVUVA-290`
- Tipo: `bebida`
- Categoria: Bebidas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Suco Del Valle Uva 290ml > Del Valle Uva 290ml | GYR-INS-DEL-VALLE-UVA-290ML | Del Valle Uva 290ml | 1 | UN | R$ 3,67 | R$ 3,67 | insumo |

### Combos

#### Combo Clássico

- SKU/codigo PWA: `GYR-CMB-CLA`
- Tipo: `combo`
- Categoria: Combos

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Combo Clássico > Batata Frita Média 200g > Batata frita base M > Batata pré-frita | GYR-INS-BATATA-PRE-FRITA | Batata pré-frita | 0,2 | KG | R$ 7,36 | R$ 1,47 | via ficha interna REC_BATATA_P |
| Combo Clássico > Base interna — Lanche assinatura médio > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-BAS-LAN-MED |
| Combo Clássico > Base interna — Lanche assinatura médio > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-BAS-LAN-MED |
| Combo Clássico > Batata Frita Média 200g > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 2 | UN | R$ 0,15 | R$ 0,31 | via produto filho GYR-BAT-FRT-M150 |
| Combo Clássico > Base interna — Lanche assinatura médio > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-BAS-LAN-MED |
| Combo Clássico > Base interna — Lanche assinatura médio > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-BAS-LAN-MED |
| Combo Clássico > Base interna — Lanche assinatura médio > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,04 | KG | R$ 36,73 | R$ 1,47 | via produto filho GYR-BAS-LAN-MED |
| Combo Clássico > Base interna — Lanche assinatura médio > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 1 | UN | R$ 1,90 | R$ 1,90 | via ficha interna REC_PAO_PARMESAO |
| Combo Clássico > Base interna — Lanche assinatura médio > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-BAS-LAN-MED |
| Combo Clássico > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | insumo |
| Combo Clássico > Batata Frita Média 200g > Saco de papel hamburgao plastificado | GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO | Saco de papel hamburgao plastificado | 1 | UN | R$ 0,06 | R$ 0,06 | via produto filho GYR-BAT-FRT-M150 |
| Combo Clássico > Saco liso branco medio | GYR-EMB-SACO-LISO-BRANCO-MEDIO | Saco liso branco medio | 1 | UN | R$ 0,84 | R$ 0,84 | embalagem |
| Combo Clássico > Batata Frita Média 200g > Batata frita base M > Sal | GYR-INS-SAL | Sal | 0,003 | KG | R$ 8,00 | R$ 0,02 | via ficha interna REC_BATATA_P |
| Combo Clássico > Base interna — Lanche assinatura médio > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,04 | KG | R$ 15,82 | R$ 0,63 | via produto filho GYR-BAS-LAN-MED |

**Grupos e opcoes**

Grupo: Escolha seu Gyros

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gyros Vegetariano de Berinjela :: Combo Clássico > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | via produto filho GYR-LAN-VEG |
| Beta Gyros de Frango :: Combo Clássico > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,09 | KG | R$ 40,62 | R$ 3,66 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Clássico > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,09 | KG | R$ 33,33 | R$ 3,00 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Clássico > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Clássico > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-LAN-BETA |
| Alpha Gyros de Fraldinha :: Combo Clássico > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Clássico > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Clássico > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Clássico > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-VEG |
| Gamma Gyros de Linguiça Toscana :: Combo Clássico > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Clássico > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Clássico > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Clássico > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Clássico > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Clássico > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Clássico > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Clássico > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Clássico > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Clássico > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-ALPHA |
| Gyros Vegetariano de Berinjela :: Combo Clássico > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Clássico > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Pão Francês com Parmesão > Pão Francês com Parmesão / Beta Gyros de Frango :: Combo Clássico > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Pão Francês com Parmesão > Pão Francês com Parmesão / Gamma Gyros de Linguiça Toscana :: Combo Clássico > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 4 | UN | R$ 1,90 | R$ 7,59 | via ficha interna REC_PAO_PARMESAO |
| Alpha Gyros de Fraldinha :: Combo Clássico > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Clássico > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Clássico > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Clássico > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Clássico > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Clássico > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Clássico > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Clássico > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-VEG |

Grupo: Escolha sua Bebida 350ml

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Coca-Cola Lata 350ml :: Combo Clássico > Escolha sua Bebida 350ml > Coca-Cola Lata 350ml > Coca-Cola Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-COCA-350 |
| Coca-Cola Zero Lata 350ml :: Combo Clássico > Escolha sua Bebida 350ml > Coca-Cola Zero Lata 350ml > Coca-Cola Zero Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-COCAZ-350 |
| Guaraná Antarctica Lata 350ml :: Combo Clássico > Escolha sua Bebida 350ml > Guaraná Antarctica Lata 350ml > Guaraná Antarctica Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-GUAR-350 |
| Fanta Laranja Lata 350ml :: Combo Clássico > Escolha sua Bebida 350ml > Fanta Laranja Lata 350ml > Fanta Laranja Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-FANTA-350 |
| Schweppes Citrus 350ml :: Combo Clássico > Escolha sua Bebida 350ml > Schweppes Citrus 350ml > Schweppes Citrus 350ml > Schweppes Citrus 350ml | GYR-INS-SCHWEPPES-CITRUS-350ML | Schweppes Citrus 350ml | 1 | UN | R$ 3,87 | R$ 3,87 | via produto filho GYR-BEB-SCHW-350 |
| Sprite 350ml :: Combo Clássico > Escolha sua Bebida 350ml > Sprite 350ml > Sprite 350ml > Sprite 350ml | GYR-INS-SPRITE-350ML | Sprite 350ml | 1 | UN | R$ 3,66 | R$ 3,66 | via produto filho GYR-BEB-SPR-350 |

Grupo: Tempero da batata

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Lemon Pepper :: Combo Clássico > Tempero da batata > Lemon Pepper > Lemon pepper | GYR-INS-LEMON-PEPPER | Lemon pepper | 0,003 | KG | R$ 30,00 | R$ 0,09 | insumo |
| Páprica :: Combo Clássico > Tempero da batata > Páprica > Paprica doce | GYR-INS-PAPRICA | Paprica doce | 0,003 | KG | R$ 20,00 | R$ 0,06 | insumo |

Opcoes sem insumo fisico: Sal.

#### Combo Completo

- SKU/codigo PWA: `GYR-CMB-CPL`
- Tipo: `combo`
- Categoria: Combos

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Combo Completo > Batata Frita Média 200g > Batata frita base M > Batata pré-frita | GYR-INS-BATATA-PRE-FRITA | Batata pré-frita | 0,2 | KG | R$ 7,36 | R$ 1,47 | via ficha interna REC_BATATA_P |
| Combo Completo > Base interna — Lanche assinatura médio > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-BAS-LAN-MED |
| Combo Completo > Base interna — Lanche assinatura médio > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-BAS-LAN-MED |
| Combo Completo > Batata Frita Média 200g > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 2 | UN | R$ 0,15 | R$ 0,31 | via produto filho GYR-BAT-FRT-M150 |
| Combo Completo > Base interna — Lanche assinatura médio > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-BAS-LAN-MED |
| Combo Completo > Base interna — Lanche assinatura médio > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-BAS-LAN-MED |
| Combo Completo > Base interna — Lanche assinatura médio > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,04 | KG | R$ 36,73 | R$ 1,47 | via produto filho GYR-BAS-LAN-MED |
| Combo Completo > Base interna — Lanche assinatura médio > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 1 | UN | R$ 1,90 | R$ 1,90 | via ficha interna REC_PAO_PARMESAO |
| Combo Completo > Base interna — Lanche assinatura médio > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-BAS-LAN-MED |
| Combo Completo > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | insumo |
| Combo Completo > Batata Frita Média 200g > Saco de papel hamburgao plastificado | GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO | Saco de papel hamburgao plastificado | 1 | UN | R$ 0,06 | R$ 0,06 | via produto filho GYR-BAT-FRT-M150 |
| Combo Completo > Saco liso branco medio | GYR-EMB-SACO-LISO-BRANCO-MEDIO | Saco liso branco medio | 1 | UN | R$ 0,84 | R$ 0,84 | embalagem |
| Combo Completo > Batata Frita Média 200g > Batata frita base M > Sal | GYR-INS-SAL | Sal | 0,003 | KG | R$ 8,00 | R$ 0,02 | via ficha interna REC_BATATA_P |
| Combo Completo > Base interna — Lanche assinatura médio > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,04 | KG | R$ 15,82 | R$ 0,63 | via produto filho GYR-BAS-LAN-MED |

**Grupos e opcoes**

Grupo: Escolha seu Gyros

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gyros Vegetariano de Berinjela :: Combo Completo > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | via produto filho GYR-LAN-VEG |
| Beta Gyros de Frango :: Combo Completo > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,09 | KG | R$ 40,62 | R$ 3,66 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Completo > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,09 | KG | R$ 33,33 | R$ 3,00 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Completo > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Completo > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-LAN-BETA |
| Alpha Gyros de Fraldinha :: Combo Completo > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Completo > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Completo > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Completo > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-VEG |
| Gamma Gyros de Linguiça Toscana :: Combo Completo > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Completo > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Completo > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Completo > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Completo > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Completo > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Completo > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Completo > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Completo > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Completo > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-ALPHA |
| Gyros Vegetariano de Berinjela :: Combo Completo > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Completo > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Pão Francês com Parmesão > Pão Francês com Parmesão / Beta Gyros de Frango :: Combo Completo > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Pão Francês com Parmesão > Pão Francês com Parmesão / Gamma Gyros de Linguiça Toscana :: Combo Completo > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 4 | UN | R$ 1,90 | R$ 7,59 | via ficha interna REC_PAO_PARMESAO |
| Alpha Gyros de Fraldinha :: Combo Completo > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Completo > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Completo > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Completo > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Completo > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Completo > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Completo > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Completo > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-VEG |

Grupo: Escolha sua Bebida 350ml

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Coca-Cola Lata 350ml :: Combo Completo > Escolha sua Bebida 350ml > Coca-Cola Lata 350ml > Coca-Cola Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-COCA-350 |
| Coca-Cola Zero Lata 350ml :: Combo Completo > Escolha sua Bebida 350ml > Coca-Cola Zero Lata 350ml > Coca-Cola Zero Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-COCAZ-350 |
| Guaraná Antarctica Lata 350ml :: Combo Completo > Escolha sua Bebida 350ml > Guaraná Antarctica Lata 350ml > Guaraná Antarctica Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-GUAR-350 |
| Fanta Laranja Lata 350ml :: Combo Completo > Escolha sua Bebida 350ml > Fanta Laranja Lata 350ml > Fanta Laranja Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-FANTA-350 |
| Schweppes Citrus 350ml :: Combo Completo > Escolha sua Bebida 350ml > Schweppes Citrus 350ml > Schweppes Citrus 350ml > Schweppes Citrus 350ml | GYR-INS-SCHWEPPES-CITRUS-350ML | Schweppes Citrus 350ml | 1 | UN | R$ 3,87 | R$ 3,87 | via produto filho GYR-BEB-SCHW-350 |
| Sprite 350ml :: Combo Completo > Escolha sua Bebida 350ml > Sprite 350ml > Sprite 350ml > Sprite 350ml | GYR-INS-SPRITE-350ML | Sprite 350ml | 1 | UN | R$ 3,66 | R$ 3,66 | via produto filho GYR-BEB-SPR-350 |

Grupo: Tempero da batata

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Lemon Pepper :: Combo Completo > Tempero da batata > Lemon Pepper > Lemon pepper | GYR-INS-LEMON-PEPPER | Lemon pepper | 0,003 | KG | R$ 30,00 | R$ 0,09 | insumo |
| Páprica :: Combo Completo > Tempero da batata > Páprica > Paprica doce | GYR-INS-PAPRICA | Paprica doce | 0,003 | KG | R$ 20,00 | R$ 0,06 | insumo |

Opcoes sem insumo fisico: Sal.

Grupo: Finalize seu combo

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Mini Churros 6 un com Doce de Leite :: Combo Completo > Finalize seu combo > Mini Churros 6 un com Doce de Leite > Mini Churros 6 un com Doce de Leite > Acucar com canela | GYR-INS-ACUCAR-COM-CANELA | Acucar com canela | 0,008 | KG | R$ 12,00 | R$ 0,10 | via produto filho GYR-SOB-CHU-6UN |
| Barbecue 60ml :: Combo Completo > Finalize seu combo > Barbecue 60ml > Barbecue 60ml > Barbecue da casa | GYR-PREP-BARBECUE-BASE | Barbecue da casa | 0,06 | KG | R$ 17,07 | R$ 1,02 | via produto filho GYR-MOL-BBQ-60 |
| Maionese de Chimichurri 60ml :: Combo Completo > Finalize seu combo > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri | GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | 0,06 | KG | R$ 11,61 | R$ 0,70 | via produto filho GYR-MOL-MAICHM-60 |
| Maionese da Casa 60ml :: Combo Completo > Finalize seu combo > Maionese da Casa 60ml > Maionese da Casa 60ml > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,06 | KG | R$ 35,82 | R$ 2,15 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Defumada 60ml :: Combo Completo > Finalize seu combo > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada | GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | 0,06 | KG | R$ 10,55 | R$ 0,63 | via produto filho GYR-MOL-MAIDEF-60 |
| Maionese Verde 60ml :: Combo Completo > Finalize seu combo > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde | GYR-PREP-MAIONESE-VERDE | Maionese Verde | 0,06 | KG | R$ 11,31 | R$ 0,68 | via produto filho GYR-MOL-MAIVRD-60 |
| Mini Churros 6 un com Doce de Leite :: Combo Completo > Finalize seu combo > Mini Churros 6 un com Doce de Leite > Mini Churros 6 un com Doce de Leite > Mini churros congelado (doce de leite) | GYR-INS-MINI-CHURROS-DOCE-LEITE | Mini churros congelado (doce de leite) | 0,12 | KG | R$ 30,51 | R$ 3,66 | via produto filho GYR-SOB-CHU-6UN |
| Maionese da Casa 60ml :: Combo Completo > Finalize seu combo > Maionese da Casa 60ml > Maionese da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICSA-60 |
| Maionese Verde 60ml :: Combo Completo > Finalize seu combo > Maionese Verde 60ml > Maionese Verde 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIVRD-60 |
| Maionese de Chimichurri 60ml :: Combo Completo > Finalize seu combo > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAICHM-60 |
| Barbecue 60ml :: Combo Completo > Finalize seu combo > Barbecue 60ml > Barbecue 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-BBQ-60 |
| Maionese Defumada 60ml :: Combo Completo > Finalize seu combo > Maionese Defumada 60ml > Maionese Defumada 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-MAIDEF-60 |
| Mini Churros 6 un com Doce de Leite :: Combo Completo > Finalize seu combo > Mini Churros 6 un com Doce de Leite > Mini Churros 6 un com Doce de Leite > Saco de papel hamburgao plastificado | GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO | Saco de papel hamburgao plastificado | 1 | UN | R$ 0,06 | R$ 0,06 | via produto filho GYR-SOB-CHU-6UN |

#### Combo Essencial

- SKU/codigo PWA: `GYR-CMB-ESS`
- Tipo: `combo`
- Categoria: Combos

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Combo Essencial > Base interna — Lanche assinatura médio > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-BAS-LAN-MED |
| Combo Essencial > Base interna — Lanche assinatura médio > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-BAS-LAN-MED |
| Combo Essencial > Base interna — Lanche assinatura médio > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-BAS-LAN-MED |
| Combo Essencial > Base interna — Lanche assinatura médio > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-BAS-LAN-MED |
| Combo Essencial > Base interna — Lanche assinatura médio > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,04 | KG | R$ 36,73 | R$ 1,47 | via produto filho GYR-BAS-LAN-MED |
| Combo Essencial > Base interna — Lanche assinatura médio > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 1 | UN | R$ 1,90 | R$ 1,90 | via ficha interna REC_PAO_PARMESAO |
| Combo Essencial > Base interna — Lanche assinatura médio > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-BAS-LAN-MED |
| Combo Essencial > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | insumo |
| Combo Essencial > Saco liso branco medio | GYR-EMB-SACO-LISO-BRANCO-MEDIO | Saco liso branco medio | 1 | UN | R$ 0,84 | R$ 0,84 | embalagem |
| Combo Essencial > Base interna — Lanche assinatura médio > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,04 | KG | R$ 15,82 | R$ 0,63 | via produto filho GYR-BAS-LAN-MED |

**Grupos e opcoes**

Grupo: Escolha seu Gyros

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gyros Vegetariano de Berinjela :: Combo Essencial > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | via produto filho GYR-LAN-VEG |
| Beta Gyros de Frango :: Combo Essencial > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,09 | KG | R$ 40,62 | R$ 3,66 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Essencial > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,09 | KG | R$ 33,33 | R$ 3,00 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Essencial > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Essencial > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-LAN-BETA |
| Alpha Gyros de Fraldinha :: Combo Essencial > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Essencial > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Essencial > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Essencial > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-VEG |
| Gamma Gyros de Linguiça Toscana :: Combo Essencial > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Essencial > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Essencial > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Essencial > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Essencial > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Essencial > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Essencial > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Essencial > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Essencial > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Essencial > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-ALPHA |
| Gyros Vegetariano de Berinjela :: Combo Essencial > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Essencial > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Pão Francês com Parmesão > Pão Francês com Parmesão / Beta Gyros de Frango :: Combo Essencial > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Pão Francês com Parmesão > Pão Francês com Parmesão / Gamma Gyros de Linguiça Toscana :: Combo Essencial > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 4 | UN | R$ 1,90 | R$ 7,59 | via ficha interna REC_PAO_PARMESAO |
| Alpha Gyros de Fraldinha :: Combo Essencial > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Essencial > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Essencial > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Essencial > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Essencial > Escolha seu Gyros > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Essencial > Escolha seu Gyros > Beta Gyros de Frango > Beta Gyros de Frango > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Essencial > Escolha seu Gyros > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Essencial > Escolha seu Gyros > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-VEG |

Grupo: Escolha sua Bebida 350ml

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Coca-Cola Lata 350ml :: Combo Essencial > Escolha sua Bebida 350ml > Coca-Cola Lata 350ml > Coca-Cola Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-COCA-350 |
| Coca-Cola Zero Lata 350ml :: Combo Essencial > Escolha sua Bebida 350ml > Coca-Cola Zero Lata 350ml > Coca-Cola Zero Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-COCAZ-350 |
| Guaraná Antarctica Lata 350ml :: Combo Essencial > Escolha sua Bebida 350ml > Guaraná Antarctica Lata 350ml > Guaraná Antarctica Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-GUAR-350 |
| Fanta Laranja Lata 350ml :: Combo Essencial > Escolha sua Bebida 350ml > Fanta Laranja Lata 350ml > Fanta Laranja Lata 350ml > Refrigerante lata 350ml | GYR-INS-REFRIGERANTE-LATA-350ML | Refrigerante lata 350ml | 1 | UN | R$ 3,47 | R$ 3,47 | via produto filho GYR-BEB-FANTA-350 |
| Schweppes Citrus 350ml :: Combo Essencial > Escolha sua Bebida 350ml > Schweppes Citrus 350ml > Schweppes Citrus 350ml > Schweppes Citrus 350ml | GYR-INS-SCHWEPPES-CITRUS-350ML | Schweppes Citrus 350ml | 1 | UN | R$ 3,87 | R$ 3,87 | via produto filho GYR-BEB-SCHW-350 |
| Sprite 350ml :: Combo Essencial > Escolha sua Bebida 350ml > Sprite 350ml > Sprite 350ml > Sprite 350ml | GYR-INS-SPRITE-350ML | Sprite 350ml | 1 | UN | R$ 3,66 | R$ 3,66 | via produto filho GYR-BEB-SPR-350 |

#### Combo Família Gyros

- SKU/codigo PWA: `GYR-CMB-FAM`
- Tipo: `combo`
- Categoria: Combos

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Combo Família Gyros > Batata Frita Média 200g > Batata frita base M > Batata pré-frita | GYR-INS-BATATA-PRE-FRITA | Batata pré-frita | 0,8 | KG | R$ 7,36 | R$ 5,89 | via ficha interna REC_BATATA_P |
| Combo Família Gyros > Caixa combo familia | GYR-EMB-CAIXA-COMBO-FAMILIA | Caixa combo familia | 1 | UN | R$ 1,38 | R$ 1,38 | embalagem |
| Combo Família Gyros > Coca-Cola Original 2L > Coca-Cola 2L | GYR-INS-COCA-COLA-2L | Coca-Cola 2L | 1 | UN | R$ 10,95 | R$ 10,95 | via produto filho GYR-BEB-COCA-2000 |
| Combo Família Gyros > Base interna — Lanche assinatura médio > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,6 | KG | R$ 21,04 | R$ 12,63 | via produto filho GYR-BAS-LAN-MED |
| Combo Família Gyros > Base interna — Lanche assinatura médio > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 4 | UN | R$ 0,15 | R$ 0,62 | via produto filho GYR-BAS-LAN-MED |
| Combo Família Gyros > Batata Frita Média 200g > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 4 | UN | R$ 0,15 | R$ 0,62 | via produto filho GYR-BAT-FRT-M150 |
| Combo Família Gyros > Base interna — Lanche assinatura médio > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,04 | KG | R$ 35,82 | R$ 1,43 | via produto filho GYR-BAS-LAN-MED |
| Combo Família Gyros > Base interna — Lanche assinatura médio > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,08 | KG | R$ 61,39 | R$ 4,91 | via produto filho GYR-BAS-LAN-MED |
| Combo Família Gyros > Base interna — Lanche assinatura médio > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,16 | KG | R$ 36,73 | R$ 5,88 | via produto filho GYR-BAS-LAN-MED |
| Combo Família Gyros > Base interna — Lanche assinatura médio > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 16 | UN | R$ 1,90 | R$ 30,35 | via ficha interna REC_PAO_PARMESAO |
| Combo Família Gyros > Base interna — Lanche assinatura médio > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 4 | UN | R$ 0,07 | R$ 0,27 | via produto filho GYR-BAS-LAN-MED |
| Combo Família Gyros > Batata Frita Média 200g > Saco de papel hamburgao plastificado | GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO | Saco de papel hamburgao plastificado | 2 | UN | R$ 0,06 | R$ 0,12 | via produto filho GYR-BAT-FRT-M150 |
| Combo Família Gyros > Saco liso branco medio | GYR-EMB-SACO-LISO-BRANCO-MEDIO | Saco liso branco medio | 1 | UN | R$ 0,84 | R$ 0,84 | embalagem |
| Combo Família Gyros > Batata Frita Média 200g > Batata frita base M > Sal | GYR-INS-SAL | Sal | 0,012 | KG | R$ 8,00 | R$ 0,10 | via ficha interna REC_BATATA_P |
| Combo Família Gyros > Base interna — Lanche assinatura médio > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,16 | KG | R$ 15,82 | R$ 2,53 | via produto filho GYR-BAS-LAN-MED |

**Grupos e opcoes**

Grupo: Gyros 1

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 1 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | via produto filho GYR-LAN-VEG |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 1 > Beta Gyros de Frango > Beta Gyros de Frango > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,09 | KG | R$ 40,62 | R$ 3,66 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 1 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,09 | KG | R$ 33,33 | R$ 3,00 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 1 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 1 > Beta Gyros de Frango > Beta Gyros de Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-LAN-BETA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 1 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 1 > Beta Gyros de Frango > Beta Gyros de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 1 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 1 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-VEG |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 1 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 1 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 1 > Beta Gyros de Frango > Beta Gyros de Frango > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 1 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 1 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 1 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 1 > Beta Gyros de Frango > Beta Gyros de Frango > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 1 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 1 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 1 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-ALPHA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 1 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 1 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Pão Francês com Parmesão > Pão Francês com Parmesão / Beta Gyros de Frango :: Combo Família Gyros > Gyros 1 > Beta Gyros de Frango > Beta Gyros de Frango > Pão Francês com Parmesão > Pão Francês com Parmesão / Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 1 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 4 | UN | R$ 1,90 | R$ 7,59 | via ficha interna REC_PAO_PARMESAO |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 1 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 1 > Beta Gyros de Frango > Beta Gyros de Frango > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 1 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 1 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 1 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 1 > Beta Gyros de Frango > Beta Gyros de Frango > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 1 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 1 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-VEG |

Grupo: Gyros 2

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 2 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | via produto filho GYR-LAN-VEG |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 2 > Beta Gyros de Frango > Beta Gyros de Frango > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,09 | KG | R$ 40,62 | R$ 3,66 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 2 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,09 | KG | R$ 33,33 | R$ 3,00 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 2 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 2 > Beta Gyros de Frango > Beta Gyros de Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-LAN-BETA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 2 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 2 > Beta Gyros de Frango > Beta Gyros de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 2 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 2 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-VEG |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 2 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 2 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 2 > Beta Gyros de Frango > Beta Gyros de Frango > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 2 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 2 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 2 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 2 > Beta Gyros de Frango > Beta Gyros de Frango > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 2 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 2 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 2 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-ALPHA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 2 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 2 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Pão Francês com Parmesão > Pão Francês com Parmesão / Beta Gyros de Frango :: Combo Família Gyros > Gyros 2 > Beta Gyros de Frango > Beta Gyros de Frango > Pão Francês com Parmesão > Pão Francês com Parmesão / Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 2 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 4 | UN | R$ 1,90 | R$ 7,59 | via ficha interna REC_PAO_PARMESAO |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 2 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 2 > Beta Gyros de Frango > Beta Gyros de Frango > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 2 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 2 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 2 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 2 > Beta Gyros de Frango > Beta Gyros de Frango > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 2 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 2 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-VEG |

Grupo: Gyros 3

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 3 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | via produto filho GYR-LAN-VEG |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 3 > Beta Gyros de Frango > Beta Gyros de Frango > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,09 | KG | R$ 40,62 | R$ 3,66 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 3 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,09 | KG | R$ 33,33 | R$ 3,00 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 3 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 3 > Beta Gyros de Frango > Beta Gyros de Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-LAN-BETA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 3 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 3 > Beta Gyros de Frango > Beta Gyros de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 3 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 3 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-VEG |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 3 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 3 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 3 > Beta Gyros de Frango > Beta Gyros de Frango > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 3 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 3 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 3 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 3 > Beta Gyros de Frango > Beta Gyros de Frango > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 3 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 3 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 3 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-ALPHA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 3 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 3 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Pão Francês com Parmesão > Pão Francês com Parmesão / Beta Gyros de Frango :: Combo Família Gyros > Gyros 3 > Beta Gyros de Frango > Beta Gyros de Frango > Pão Francês com Parmesão > Pão Francês com Parmesão / Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 3 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 4 | UN | R$ 1,90 | R$ 7,59 | via ficha interna REC_PAO_PARMESAO |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 3 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 3 > Beta Gyros de Frango > Beta Gyros de Frango > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 3 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 3 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 3 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 3 > Beta Gyros de Frango > Beta Gyros de Frango > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 3 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 3 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-VEG |

Grupo: Gyros 4

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 4 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | via produto filho GYR-LAN-VEG |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 4 > Beta Gyros de Frango > Beta Gyros de Frango > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,09 | KG | R$ 40,62 | R$ 3,66 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 4 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,09 | KG | R$ 33,33 | R$ 3,00 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 4 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 4 > Beta Gyros de Frango > Beta Gyros de Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | via produto filho GYR-LAN-BETA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 4 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 4 > Beta Gyros de Frango > Beta Gyros de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 4 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 4 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | via produto filho GYR-LAN-VEG |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 4 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | via produto filho GYR-LAN-GAMMA |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 4 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 4 > Beta Gyros de Frango > Beta Gyros de Frango > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 4 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 4 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 4 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 4 > Beta Gyros de Frango > Beta Gyros de Frango > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 4 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 4 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 4 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-ALPHA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 4 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 4 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Pão Francês com Parmesão > Pão Francês com Parmesão / Beta Gyros de Frango :: Combo Família Gyros > Gyros 4 > Beta Gyros de Frango > Beta Gyros de Frango > Pão Francês com Parmesão > Pão Francês com Parmesão / Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 4 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 4 | UN | R$ 1,90 | R$ 7,59 | via ficha interna REC_PAO_PARMESAO |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 4 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 4 > Beta Gyros de Frango > Beta Gyros de Frango > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 4 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 4 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | via produto filho GYR-LAN-VEG |
| Alpha Gyros de Fraldinha :: Combo Família Gyros > Gyros 4 > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-ALPHA |
| Beta Gyros de Frango :: Combo Família Gyros > Gyros 4 > Beta Gyros de Frango > Beta Gyros de Frango > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-BETA |
| Gamma Gyros de Linguiça Toscana :: Combo Família Gyros > Gyros 4 > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | via produto filho GYR-LAN-GAMMA |
| Gyros Vegetariano de Berinjela :: Combo Família Gyros > Gyros 4 > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-LAN-VEG |

Grupo: Tempero das batatas do combo

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Lemon Pepper :: Combo Família Gyros > Tempero das batatas do combo > Lemon Pepper > Lemon pepper | GYR-INS-LEMON-PEPPER | Lemon pepper | 0,003 | KG | R$ 30,00 | R$ 0,09 | insumo |
| Páprica :: Combo Família Gyros > Tempero das batatas do combo > Páprica > Paprica doce | GYR-INS-PAPRICA | Paprica doce | 0,003 | KG | R$ 20,00 | R$ 0,06 | insumo |

Opcoes sem insumo fisico: Sal.

### Gratinados

#### Batata Gratinada Grande 400g

- SKU/codigo PWA: `GYR-BAT-GRT-G290`
- Tipo: `menu`
- Categoria: Gratinados

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Batata Gratinada Grande 400g > Bandeja aluminio M120 500ml | GYR-EMB-BANDEJA-ALUMINIO-M120-500ML | Bandeja aluminio M120 500ml | 1 | UN | R$ 0,67 | R$ 0,67 | embalagem |
| Batata Gratinada Grande 400g > Batata gratinada base G > Batata pré-frita | GYR-INS-BATATA-PRE-FRITA | Batata pré-frita | 0,29 | KG | R$ 7,36 | R$ 2,14 | via ficha interna REC_BATATA_GRAT_G |
| Batata Gratinada Grande 400g > Cobertura gratinada muçarela grande > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,18 | KG | R$ 36,73 | R$ 6,61 | via ficha interna REC_GRAT_MUC_G |
| Batata Gratinada Grande 400g > Batata gratinada base G > Sal | GYR-INS-SAL | Sal | 0,006 | KG | R$ 8,00 | R$ 0,05 | via ficha interna REC_BATATA_GRAT_G |

**Grupos e opcoes**

Grupo: Escolha o queijo gratinado

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Catupiry Original gratinado :: Batata Gratinada Grande 400g > Escolha o queijo gratinado > Catupiry Original gratinado > Cobertura gratinada catupiry grande > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,18 | KG | R$ 40,62 | R$ 7,31 | via ficha interna REC_GRAT_CAT_G |
| Catupiry 4 Queijos gratinado :: Batata Gratinada Grande 400g > Escolha o queijo gratinado > Catupiry 4 Queijos gratinado > Cobertura gratinada 4 queijos grande > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,18 | KG | R$ 33,33 | R$ 6,00 | via ficha interna REC_GRAT_4Q_G |
| Cheddar gratinado :: Batata Gratinada Grande 400g > Escolha o queijo gratinado > Cheddar gratinado > Cobertura gratinada cheddar grande > Cheddar | GYR-INS-CHEDDAR | Cheddar | 0,18 | KG | R$ 27,27 | R$ 4,91 | via ficha interna REC_GRAT_CHEDDAR_G |
| Muçarela gratinada :: Batata Gratinada Grande 400g > Escolha o queijo gratinado > Muçarela gratinada > Cobertura gratinada muçarela grande > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,18 | KG | R$ 36,73 | R$ 6,61 | via ficha interna REC_GRAT_MUC_G |

Grupo: Escolha o tempero

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Lemon Pepper :: Batata Gratinada Grande 400g > Escolha o tempero > Lemon Pepper > Lemon pepper | GYR-INS-LEMON-PEPPER | Lemon pepper | 0,003 | KG | R$ 30,00 | R$ 0,09 | insumo |
| Páprica :: Batata Gratinada Grande 400g > Escolha o tempero > Páprica > Paprica doce | GYR-INS-PAPRICA | Paprica doce | 0,003 | KG | R$ 20,00 | R$ 0,06 | insumo |

Opcoes sem insumo fisico: Sal.

Grupo: Adicionais

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Bacon :: Batata Gratinada Grande 400g > Adicionais > Bacon > Bacon em cubos | GYR-INS-BACON | Bacon em cubos | 0,03 | KG | R$ 25,47 | R$ 0,76 | insumo |

#### Batata Gratinada Média 200g

- SKU/codigo PWA: `GYR-BAT-GRT-M130`
- Tipo: `menu`
- Categoria: Gratinados

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Batata Gratinada Média 200g > Bandeja aluminio M90 220ml | GYR-EMB-BANDEJA-ALUMINIO-M90-220ML | Bandeja aluminio M90 220ml | 1 | UN | R$ 0,47 | R$ 0,47 | embalagem |
| Batata Gratinada Média 200g > Batata gratinada base M > Batata pré-frita | GYR-INS-BATATA-PRE-FRITA | Batata pré-frita | 0,13 | KG | R$ 7,36 | R$ 0,96 | via ficha interna REC_BATATA_GRAT_P |
| Batata Gratinada Média 200g > Cobertura gratinada muçarela pequena > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,06 | KG | R$ 36,73 | R$ 2,20 | via ficha interna REC_GRAT_MUC_P |
| Batata Gratinada Média 200g > Batata gratinada base M > Sal | GYR-INS-SAL | Sal | 0,003 | KG | R$ 8,00 | R$ 0,02 | via ficha interna REC_BATATA_GRAT_P |

**Grupos e opcoes**

Grupo: Escolha o queijo gratinado

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Catupiry Original gratinado :: Batata Gratinada Média 200g > Escolha o queijo gratinado > Catupiry Original gratinado > Cobertura gratinada catupiry pequena > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,06 | KG | R$ 40,62 | R$ 2,44 | via ficha interna REC_GRAT_CAT_P |
| Catupiry 4 Queijos gratinado :: Batata Gratinada Média 200g > Escolha o queijo gratinado > Catupiry 4 Queijos gratinado > Cobertura gratinada 4 queijos pequena > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,06 | KG | R$ 33,33 | R$ 2,00 | via ficha interna REC_GRAT_4Q_P |
| Cheddar gratinado :: Batata Gratinada Média 200g > Escolha o queijo gratinado > Cheddar gratinado > Cobertura gratinada cheddar pequena > Cheddar | GYR-INS-CHEDDAR | Cheddar | 0,06 | KG | R$ 27,27 | R$ 1,64 | via ficha interna REC_GRAT_CHEDDAR_P |
| Muçarela gratinada :: Batata Gratinada Média 200g > Escolha o queijo gratinado > Muçarela gratinada > Cobertura gratinada muçarela pequena > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,06 | KG | R$ 36,73 | R$ 2,20 | via ficha interna REC_GRAT_MUC_P |

Grupo: Escolha o tempero

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Lemon Pepper :: Batata Gratinada Média 200g > Escolha o tempero > Lemon Pepper > Lemon pepper | GYR-INS-LEMON-PEPPER | Lemon pepper | 0,003 | KG | R$ 30,00 | R$ 0,09 | insumo |
| Páprica :: Batata Gratinada Média 200g > Escolha o tempero > Páprica > Paprica doce | GYR-INS-PAPRICA | Paprica doce | 0,003 | KG | R$ 20,00 | R$ 0,06 | insumo |

Opcoes sem insumo fisico: Sal.

Grupo: Adicionais

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Bacon :: Batata Gratinada Média 200g > Adicionais > Bacon > Bacon em cubos | GYR-INS-BACON | Bacon em cubos | 0,03 | KG | R$ 25,47 | R$ 0,76 | insumo |

#### Proteína Gratinada Grande

- SKU/codigo PWA: `GYR-GRT-PROT-G340`
- Tipo: `menu`
- Categoria: Gratinados

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Proteína Gratinada Grande > Bandeja aluminio M120 500ml | GYR-EMB-BANDEJA-ALUMINIO-M120-500ML | Bandeja aluminio M120 500ml | 1 | UN | R$ 0,67 | R$ 0,67 | embalagem |
| Proteína Gratinada Grande > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,34 | KG | R$ 21,04 | R$ 7,15 | insumo |
| Proteína Gratinada Grande > Cobertura gratinada muçarela grande > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,18 | KG | R$ 36,73 | R$ 6,61 | via ficha interna REC_GRAT_MUC_G |

**Grupos e opcoes**

Grupo: Escolha a proteína

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Antepasto de berinjela :: Proteína Gratinada Grande > Escolha a proteína > Antepasto de berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,34 | KG | R$ 61,63 | R$ 20,95 | preparo canonico |
| Fraldinha :: Proteína Gratinada Grande > Escolha a proteína > Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,34 | KG | R$ 46,73 | R$ 15,89 | insumo |
| Frango :: Proteína Gratinada Grande > Escolha a proteína > Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,34 | KG | R$ 21,04 | R$ 7,15 | insumo |
| Linguiça Toscana :: Proteína Gratinada Grande > Escolha a proteína > Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,34 | KG | R$ 23,30 | R$ 7,92 | insumo |

Grupo: Escolha o queijo gratinado

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Catupiry Original gratinado :: Proteína Gratinada Grande > Escolha o queijo gratinado > Catupiry Original gratinado > Cobertura gratinada catupiry grande > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,18 | KG | R$ 40,62 | R$ 7,31 | via ficha interna REC_GRAT_CAT_G |
| Catupiry 4 Queijos gratinado :: Proteína Gratinada Grande > Escolha o queijo gratinado > Catupiry 4 Queijos gratinado > Cobertura gratinada 4 queijos grande > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,18 | KG | R$ 33,33 | R$ 6,00 | via ficha interna REC_GRAT_4Q_G |
| Cheddar gratinado :: Proteína Gratinada Grande > Escolha o queijo gratinado > Cheddar gratinado > Cobertura gratinada cheddar grande > Cheddar | GYR-INS-CHEDDAR | Cheddar | 0,18 | KG | R$ 27,27 | R$ 4,91 | via ficha interna REC_GRAT_CHEDDAR_G |
| Muçarela gratinada :: Proteína Gratinada Grande > Escolha o queijo gratinado > Muçarela gratinada > Cobertura gratinada muçarela grande > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,18 | KG | R$ 36,73 | R$ 6,61 | via ficha interna REC_GRAT_MUC_G |

Grupo: Adicionais

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Bacon :: Proteína Gratinada Grande > Adicionais > Bacon > Bacon em cubos | GYR-INS-BACON | Bacon em cubos | 0,03 | KG | R$ 25,47 | R$ 0,76 | insumo |

#### Proteína Gratinada Média

- SKU/codigo PWA: `GYR-GRT-PROT-M180`
- Tipo: `menu`
- Categoria: Gratinados

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Proteína Gratinada Média > Bandeja aluminio M90 220ml | GYR-EMB-BANDEJA-ALUMINIO-M90-220ML | Bandeja aluminio M90 220ml | 1 | UN | R$ 0,47 | R$ 0,47 | embalagem |
| Proteína Gratinada Média > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,18 | KG | R$ 21,04 | R$ 3,79 | insumo |
| Proteína Gratinada Média > Cobertura gratinada muçarela pequena > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,06 | KG | R$ 36,73 | R$ 2,20 | via ficha interna REC_GRAT_MUC_P |

**Grupos e opcoes**

Grupo: Escolha a proteína

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Antepasto de berinjela :: Proteína Gratinada Média > Escolha a proteína > Antepasto de berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,18 | KG | R$ 61,63 | R$ 11,09 | preparo canonico |
| Fraldinha :: Proteína Gratinada Média > Escolha a proteína > Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,18 | KG | R$ 46,73 | R$ 8,41 | insumo |
| Frango :: Proteína Gratinada Média > Escolha a proteína > Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,18 | KG | R$ 21,04 | R$ 3,79 | insumo |
| Linguiça Toscana :: Proteína Gratinada Média > Escolha a proteína > Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,18 | KG | R$ 23,30 | R$ 4,19 | insumo |

Grupo: Escolha o queijo gratinado

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Catupiry Original gratinado :: Proteína Gratinada Média > Escolha o queijo gratinado > Catupiry Original gratinado > Cobertura gratinada catupiry pequena > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,06 | KG | R$ 40,62 | R$ 2,44 | via ficha interna REC_GRAT_CAT_P |
| Catupiry 4 Queijos gratinado :: Proteína Gratinada Média > Escolha o queijo gratinado > Catupiry 4 Queijos gratinado > Cobertura gratinada 4 queijos pequena > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,06 | KG | R$ 33,33 | R$ 2,00 | via ficha interna REC_GRAT_4Q_P |
| Cheddar gratinado :: Proteína Gratinada Média > Escolha o queijo gratinado > Cheddar gratinado > Cobertura gratinada cheddar pequena > Cheddar | GYR-INS-CHEDDAR | Cheddar | 0,06 | KG | R$ 27,27 | R$ 1,64 | via ficha interna REC_GRAT_CHEDDAR_P |
| Muçarela gratinada :: Proteína Gratinada Média > Escolha o queijo gratinado > Muçarela gratinada > Cobertura gratinada muçarela pequena > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,06 | KG | R$ 36,73 | R$ 2,20 | via ficha interna REC_GRAT_MUC_P |

Grupo: Adicionais

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Bacon :: Proteína Gratinada Média > Adicionais > Bacon > Bacon em cubos | GYR-INS-BACON | Bacon em cubos | 0,03 | KG | R$ 25,47 | R$ 0,76 | insumo |

### Gyros da Casa

#### Alpha Gyros de Fraldinha

- SKU/codigo PWA: `GYR-LAN-ALPHA`
- Tipo: `menu`
- Categoria: Gyros da Casa

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Alpha Gyros de Fraldinha > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | insumo |
| Alpha Gyros de Fraldinha > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | embalagem |
| Alpha Gyros de Fraldinha > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | preparo canonico |
| Alpha Gyros de Fraldinha > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | preparo canonico |
| Alpha Gyros de Fraldinha > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | insumo |
| Alpha Gyros de Fraldinha > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 1 | UN | R$ 1,90 | R$ 1,90 | via ficha interna REC_PAO_PARMESAO |
| Alpha Gyros de Fraldinha > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | embalagem |
| Alpha Gyros de Fraldinha > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | preparo canonico |

**Grupos e opcoes**

Grupo: Extras no Gyros

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Bacon :: Alpha Gyros de Fraldinha > Extras no Gyros > Bacon > Bacon em cubos | GYR-INS-BACON | Bacon em cubos | 0,03 | KG | R$ 25,47 | R$ 0,76 | insumo |
| Catupiry Original gratinado :: Alpha Gyros de Fraldinha > Extras no Gyros > Catupiry Original gratinado > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,04 | KG | R$ 40,62 | R$ 1,62 | insumo |
| Catupiry 4 Queijos gratinado :: Alpha Gyros de Fraldinha > Extras no Gyros > Catupiry 4 Queijos gratinado > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,04 | KG | R$ 33,33 | R$ 1,33 | insumo |
| Cheddar gratinado :: Alpha Gyros de Fraldinha > Extras no Gyros > Cheddar gratinado > Cheddar | GYR-INS-CHEDDAR | Cheddar | 0,04 | KG | R$ 27,27 | R$ 1,09 | insumo |
| Fraldinha extra :: Alpha Gyros de Fraldinha > Extras no Gyros > Fraldinha extra > Fraldinha preparada | GYR-INS-CARNE-FRALDINHA | Fraldinha preparada | 0,15 | KG | R$ 46,73 | R$ 7,01 | insumo |
| Muçarela gratinada :: Alpha Gyros de Fraldinha > Extras no Gyros > Muçarela gratinada > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,04 | KG | R$ 36,73 | R$ 1,47 | insumo |
| Vinagrete da casa extra :: Alpha Gyros de Fraldinha > Extras no Gyros > Vinagrete da casa extra > Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-VIN-60 |
| Vinagrete da casa extra :: Alpha Gyros de Fraldinha > Extras no Gyros > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-MOL-VIN-60 |

Grupo: Remover ingredientes

Nenhum insumo fisico neste grupo.

Opcoes sem insumo fisico: Sem vinagrete, Sem queijo, Sem maionese da casa.

Grupo: Sachês (opcional)

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Ketchup (1 sachê) :: Alpha Gyros de Fraldinha > Sachês (opcional) > Ketchup (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) / Maionese (1 sachê) :: Alpha Gyros de Fraldinha > Sachês (opcional) > Maionese (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) / Mostarda (1 sachê) :: Alpha Gyros de Fraldinha > Sachês (opcional) > Mostarda (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 3 | UN | R$ 0,12 | R$ 0,36 | insumo |
| Pacote extra com 5 sachês :: Alpha Gyros de Fraldinha > Sachês (opcional) > Pacote extra com 5 sachês > Pacote extra com 5 sachês > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 5 | UN | R$ 0,12 | R$ 0,60 | via produto filho GYR-EXT-SACH-5 |

#### Beta Gyros de Frango

- SKU/codigo PWA: `GYR-LAN-BETA`
- Tipo: `menu`
- Categoria: Gyros da Casa

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Beta Gyros de Frango > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,09 | KG | R$ 40,62 | R$ 3,66 | insumo |
| Beta Gyros de Frango > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | insumo |
| Beta Gyros de Frango > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | embalagem |
| Beta Gyros de Frango > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | preparo canonico |
| Beta Gyros de Frango > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | preparo canonico |
| Beta Gyros de Frango > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 1 | UN | R$ 1,90 | R$ 1,90 | via ficha interna REC_PAO_PARMESAO |
| Beta Gyros de Frango > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | embalagem |
| Beta Gyros de Frango > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | preparo canonico |

**Grupos e opcoes**

Grupo: Extras no Gyros

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Bacon :: Beta Gyros de Frango > Extras no Gyros > Bacon > Bacon em cubos | GYR-INS-BACON | Bacon em cubos | 0,03 | KG | R$ 25,47 | R$ 0,76 | insumo |
| Catupiry Original gratinado :: Beta Gyros de Frango > Extras no Gyros > Catupiry Original gratinado > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,04 | KG | R$ 40,62 | R$ 1,62 | insumo |
| Catupiry 4 Queijos gratinado :: Beta Gyros de Frango > Extras no Gyros > Catupiry 4 Queijos gratinado > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,04 | KG | R$ 33,33 | R$ 1,33 | insumo |
| Cheddar gratinado :: Beta Gyros de Frango > Extras no Gyros > Cheddar gratinado > Cheddar | GYR-INS-CHEDDAR | Cheddar | 0,04 | KG | R$ 27,27 | R$ 1,09 | insumo |
| Frango extra :: Beta Gyros de Frango > Extras no Gyros > Frango extra > Frango preparado | GYR-PREP-FRANGO-PEITO-SOBRECOXA | Frango preparado | 0,15 | KG | R$ 21,04 | R$ 3,16 | insumo |
| Muçarela gratinada :: Beta Gyros de Frango > Extras no Gyros > Muçarela gratinada > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,04 | KG | R$ 36,73 | R$ 1,47 | insumo |
| Vinagrete da casa extra :: Beta Gyros de Frango > Extras no Gyros > Vinagrete da casa extra > Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-VIN-60 |
| Vinagrete da casa extra :: Beta Gyros de Frango > Extras no Gyros > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-MOL-VIN-60 |

Grupo: Remover ingredientes

Nenhum insumo fisico neste grupo.

Opcoes sem insumo fisico: Sem vinagrete, Sem queijo, Sem maionese da casa.

Grupo: Sachês (opcional)

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Ketchup (1 sachê) :: Beta Gyros de Frango > Sachês (opcional) > Ketchup (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) / Maionese (1 sachê) :: Beta Gyros de Frango > Sachês (opcional) > Maionese (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) / Mostarda (1 sachê) :: Beta Gyros de Frango > Sachês (opcional) > Mostarda (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 3 | UN | R$ 0,12 | R$ 0,36 | insumo |
| Pacote extra com 5 sachês :: Beta Gyros de Frango > Sachês (opcional) > Pacote extra com 5 sachês > Pacote extra com 5 sachês > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 5 | UN | R$ 0,12 | R$ 0,60 | via produto filho GYR-EXT-SACH-5 |

#### Gamma Gyros de Linguiça Toscana

- SKU/codigo PWA: `GYR-LAN-GAMMA`
- Tipo: `menu`
- Categoria: Gyros da Casa

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gamma Gyros de Linguiça Toscana > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,09 | KG | R$ 33,33 | R$ 3,00 | insumo |
| Gamma Gyros de Linguiça Toscana > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | embalagem |
| Gamma Gyros de Linguiça Toscana > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | insumo |
| Gamma Gyros de Linguiça Toscana > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | preparo canonico |
| Gamma Gyros de Linguiça Toscana > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | preparo canonico |
| Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 1 | UN | R$ 1,90 | R$ 1,90 | via ficha interna REC_PAO_PARMESAO |
| Gamma Gyros de Linguiça Toscana > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | embalagem |
| Gamma Gyros de Linguiça Toscana > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,03 | KG | R$ 15,82 | R$ 0,47 | preparo canonico |

**Grupos e opcoes**

Grupo: Extras no Gyros

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Bacon :: Gamma Gyros de Linguiça Toscana > Extras no Gyros > Bacon > Bacon em cubos | GYR-INS-BACON | Bacon em cubos | 0,03 | KG | R$ 25,47 | R$ 0,76 | insumo |
| Catupiry Original gratinado :: Gamma Gyros de Linguiça Toscana > Extras no Gyros > Catupiry Original gratinado > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,04 | KG | R$ 40,62 | R$ 1,62 | insumo |
| Catupiry 4 Queijos gratinado :: Gamma Gyros de Linguiça Toscana > Extras no Gyros > Catupiry 4 Queijos gratinado > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,04 | KG | R$ 33,33 | R$ 1,33 | insumo |
| Cheddar gratinado :: Gamma Gyros de Linguiça Toscana > Extras no Gyros > Cheddar gratinado > Cheddar | GYR-INS-CHEDDAR | Cheddar | 0,04 | KG | R$ 27,27 | R$ 1,09 | insumo |
| Linguiça Toscana extra :: Gamma Gyros de Linguiça Toscana > Extras no Gyros > Linguiça Toscana extra > Linguiça toscana preparada | GYR-INS-LINGUICA-TOSCANA-AURORA | Linguiça toscana preparada | 0,15 | KG | R$ 23,30 | R$ 3,49 | insumo |
| Muçarela gratinada :: Gamma Gyros de Linguiça Toscana > Extras no Gyros > Muçarela gratinada > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,04 | KG | R$ 36,73 | R$ 1,47 | insumo |
| Vinagrete da casa extra :: Gamma Gyros de Linguiça Toscana > Extras no Gyros > Vinagrete da casa extra > Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-VIN-60 |
| Vinagrete da casa extra :: Gamma Gyros de Linguiça Toscana > Extras no Gyros > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-MOL-VIN-60 |

Grupo: Remover ingredientes

Nenhum insumo fisico neste grupo.

Opcoes sem insumo fisico: Sem vinagrete, Sem queijo, Sem maionese da casa.

Grupo: Sachês (opcional)

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Ketchup (1 sachê) :: Gamma Gyros de Linguiça Toscana > Sachês (opcional) > Ketchup (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) / Maionese (1 sachê) :: Gamma Gyros de Linguiça Toscana > Sachês (opcional) > Maionese (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) / Mostarda (1 sachê) :: Gamma Gyros de Linguiça Toscana > Sachês (opcional) > Mostarda (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 3 | UN | R$ 0,12 | R$ 0,36 | insumo |
| Pacote extra com 5 sachês :: Gamma Gyros de Linguiça Toscana > Sachês (opcional) > Pacote extra com 5 sachês > Pacote extra com 5 sachês > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 5 | UN | R$ 0,12 | R$ 0,60 | via produto filho GYR-EXT-SACH-5 |

#### Gyros Vegetariano de Berinjela

- SKU/codigo PWA: `GYR-LAN-VEG`
- Tipo: `menu`
- Categoria: Gyros da Casa

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Gyros Vegetariano de Berinjela > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | preparo canonico |
| Gyros Vegetariano de Berinjela > Guardanapo sache 28x20,5 liso | GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO | Guardanapo sache 28x20,5 liso | 1 | UN | R$ 0,15 | R$ 0,15 | embalagem |
| Gyros Vegetariano de Berinjela > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,01 | KG | R$ 35,82 | R$ 0,36 | preparo canonico |
| Gyros Vegetariano de Berinjela > Manteiga com alho | GYR-PREP-MANTEIGA-SAL-ALHO | Manteiga com alho | 0,02 | KG | R$ 61,39 | R$ 1,23 | preparo canonico |
| Gyros Vegetariano de Berinjela > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,09 | KG | R$ 36,73 | R$ 3,31 | insumo |
| Gyros Vegetariano de Berinjela > Pão Francês com Parmesão > Pão Francês com Parmesão | GYR-INS-PAO-FRANCES-PARMESAO | Pão Francês com Parmesão | 1 | UN | R$ 1,90 | R$ 1,90 | via ficha interna REC_PAO_PARMESAO |
| Gyros Vegetariano de Berinjela > Papel acoplado mono frios 30x38 | GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38 | Papel acoplado mono frios 30x38 | 1 | UN | R$ 0,07 | R$ 0,07 | embalagem |
| Gyros Vegetariano de Berinjela > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | preparo canonico |

**Grupos e opcoes**

Grupo: Extras no Gyros

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Antepasto de berinjela extra :: Gyros Vegetariano de Berinjela > Extras no Gyros > Antepasto de berinjela extra > Antepasto de berinjela | GYR-PREP-ANTEPASTO-BERINJELA | Antepasto de berinjela | 0,15 | KG | R$ 61,63 | R$ 9,24 | preparo canonico |
| Catupiry Original gratinado :: Gyros Vegetariano de Berinjela > Extras no Gyros > Catupiry Original gratinado > Catupiry | GYR-INS-CATUPIRY-ORIGINAL | Catupiry | 0,04 | KG | R$ 40,62 | R$ 1,62 | insumo |
| Catupiry 4 Queijos gratinado :: Gyros Vegetariano de Berinjela > Extras no Gyros > Catupiry 4 Queijos gratinado > Catupiry Sabor 4 queijos | GYR-INS-CATUPIRY-4-QUEIJOS | Catupiry Sabor 4 queijos | 0,04 | KG | R$ 33,33 | R$ 1,33 | insumo |
| Cheddar gratinado :: Gyros Vegetariano de Berinjela > Extras no Gyros > Cheddar gratinado > Cheddar | GYR-INS-CHEDDAR | Cheddar | 0,04 | KG | R$ 27,27 | R$ 1,09 | insumo |
| Muçarela gratinada :: Gyros Vegetariano de Berinjela > Extras no Gyros > Muçarela gratinada > Muçarela | GYR-INS-QUEIJO-MUCARELA | Muçarela | 0,04 | KG | R$ 36,73 | R$ 1,47 | insumo |
| Vinagrete da casa extra :: Gyros Vegetariano de Berinjela > Extras no Gyros > Vinagrete da casa extra > Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | via produto filho GYR-MOL-VIN-60 |
| Vinagrete da casa extra :: Gyros Vegetariano de Berinjela > Extras no Gyros > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | via produto filho GYR-MOL-VIN-60 |

Grupo: Remover ingredientes

Nenhum insumo fisico neste grupo.

Opcoes sem insumo fisico: Sem vinagrete, Sem queijo, Sem maionese da casa.

Grupo: Sachês (opcional)

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Ketchup (1 sachê) :: Gyros Vegetariano de Berinjela > Sachês (opcional) > Ketchup (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) / Maionese (1 sachê) :: Gyros Vegetariano de Berinjela > Sachês (opcional) > Maionese (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) / Mostarda (1 sachê) :: Gyros Vegetariano de Berinjela > Sachês (opcional) > Mostarda (1 sachê) > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 3 | UN | R$ 0,12 | R$ 0,36 | insumo |
| Pacote extra com 5 sachês :: Gyros Vegetariano de Berinjela > Sachês (opcional) > Pacote extra com 5 sachês > Pacote extra com 5 sachês > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 5 | UN | R$ 0,12 | R$ 0,60 | via produto filho GYR-EXT-SACH-5 |

### Molhos e Extras

#### Barbecue 60ml

- SKU/codigo PWA: `GYR-MOL-BBQ-60`
- Tipo: `extra`
- Categoria: Molhos e Extras

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Barbecue 60ml > Barbecue da casa | GYR-PREP-BARBECUE-BASE | Barbecue da casa | 0,06 | KG | R$ 17,07 | R$ 1,02 | preparo canonico |
| Barbecue 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | embalagem |

#### Maionese da Casa 60ml

- SKU/codigo PWA: `GYR-MOL-MAICSA-60`
- Tipo: `extra`
- Categoria: Molhos e Extras

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Maionese da Casa 60ml > Maionese da Casa (Junior Grill) | GYR-PREP-MAIONESE-CASA | Maionese da Casa (Junior Grill) | 0,06 | KG | R$ 35,82 | R$ 2,15 | preparo canonico |
| Maionese da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | embalagem |

#### Maionese de Chimichurri 60ml

- SKU/codigo PWA: `GYR-MOL-MAICHM-60`
- Tipo: `extra`
- Categoria: Molhos e Extras

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Maionese de Chimichurri 60ml > Maionese Chimichurri | GYR-PREP-MAIONESE-CHIMICHURRI | Maionese Chimichurri | 0,06 | KG | R$ 11,61 | R$ 0,70 | preparo canonico |
| Maionese de Chimichurri 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | embalagem |

#### Maionese Defumada 60ml

- SKU/codigo PWA: `GYR-MOL-MAIDEF-60`
- Tipo: `extra`
- Categoria: Molhos e Extras

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Maionese Defumada 60ml > Maionese Defumada | GYR-PREP-MAIONESE-DEFUMADA | Maionese Defumada | 0,06 | KG | R$ 10,55 | R$ 0,63 | preparo canonico |
| Maionese Defumada 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | embalagem |

#### Maionese Verde 60ml

- SKU/codigo PWA: `GYR-MOL-MAIVRD-60`
- Tipo: `extra`
- Categoria: Molhos e Extras

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Maionese Verde 60ml > Maionese Verde | GYR-PREP-MAIONESE-VERDE | Maionese Verde | 0,06 | KG | R$ 11,31 | R$ 0,68 | preparo canonico |
| Maionese Verde 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | embalagem |

#### Pacote extra com 5 sachês

- SKU/codigo PWA: `GYR-EXT-SACH-5`
- Tipo: `extra`
- Categoria: Molhos e Extras

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Pacote extra com 5 sachês > Saches (ketchup/maionese/mostarda/pimenta) | GYR-INS-SACHES-MIX | Saches (ketchup/maionese/mostarda/pimenta) | 5 | UN | R$ 0,12 | R$ 0,60 | insumo |

#### Vinagrete da Casa 60ml

- SKU/codigo PWA: `GYR-MOL-VIN-60`
- Tipo: `extra`
- Categoria: Molhos e Extras

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Vinagrete da Casa 60ml > Pote 60ml branco G697 | GYR-EMB-POTE-60ML-BRANCO-G697 | Pote 60ml branco G697 | 1 | UN | R$ 0,24 | R$ 0,24 | embalagem |
| Vinagrete da Casa 60ml > Vinagrete da casa | GYR-PREP-VINAGRETE-BASE | Vinagrete da casa | 0,06 | KG | R$ 15,82 | R$ 0,95 | preparo canonico |

### Sobremesas

#### Mini Churros 6 un com Doce de Leite

- SKU/codigo PWA: `GYR-SOB-CHU-6UN`
- Tipo: `menu`
- Categoria: Sobremesas

**Base do produto**

| Contexto | Código canônico | Insumo / preparo / embalagem | Qtd. | Un. | Custo unit. | Custo total | Observação |
|---|---|---|---:|---:|---:|---:|---|
| Mini Churros 6 un com Doce de Leite > Acucar com canela | GYR-INS-ACUCAR-COM-CANELA | Acucar com canela | 0,008 | KG | R$ 12,00 | R$ 0,10 | insumo |
| Mini Churros 6 un com Doce de Leite > Mini churros congelado (doce de leite) | GYR-INS-MINI-CHURROS-DOCE-LEITE | Mini churros congelado (doce de leite) | 0,12 | KG | R$ 30,51 | R$ 3,66 | insumo |
| Mini Churros 6 un com Doce de Leite > Saco de papel hamburgao plastificado | GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO | Saco de papel hamburgao plastificado | 1 | UN | R$ 0,06 | R$ 0,06 | embalagem |
