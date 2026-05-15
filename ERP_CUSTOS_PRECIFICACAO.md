# ERP de Custos e Precificacao

## Status Atual da Base Canonica

Hoje o PWA ja pode ser tratado como fonte canonica destes campos:

- `code / sku` de categorias, insumos, embalagens, receitas, produtos, adicionais, fornecedores, pedidos e inputs;
- descricao curta de integracao;
- unidade padrao de ERP;
- status ativo/inativo;
- tipo comercial do produto;
- condicao do produto;
- canais de venda;
- fornecedores, compras e evidencia documental;
- export ERP normalizado em JSON;
- export de catalogo em CSV no formato do modelo de importacao.

Regra pratica:

- o `gyros-custos-cardapio.json` continua sendo a verdade da operacao;
- o `Exportar ERP` entrega a base normalizada por tabelas;
- o `Exportar CSV ERP` entrega o arquivo orientado a importacao comercial.

## Objetivo

Levar para o ERP o dominio que hoje esta consolidado no PWA de custos:

- insumos e embalagens com custo real de compra;
- receitas e transformacoes com rendimento;
- produtos finais com ficha tecnica por camadas;
- grupos comerciais e adicionais;
- precificacao automatica e manual;
- custos fixos como visao gerencial;
- compras, fornecedores e evidencia de custo.

O principio mais importante e este:

- o ERP nao deve copiar a tela do PWA;
- o ERP deve incorporar o modelo de negocio que o PWA ja provou.

## Regra de Governanca dos Campos

Campos que devem nascer no PWA e virar fonte de verdade:

- `code`
- `name`
- `description`
- `base_unit` / `erpUnit`
- `active`
- `category`
- `supplier`
- `pricing_mode`
- `product_type`
- `product_condition`

Campos que podem ser tratados como camada de traducao do ERP:

- nome exato da tabela de destino;
- nome exato das colunas do importador;
- defaults tecnicos do CSV;
- regras de flatten de grupos e itens;
- convencoes temporarias do sistema externo.

## O Que o PWA Ja Define Bem

O app atual ja separa corretamente:

1. Cadastro base
- ingredientes
- embalagens
- receitas
- produtos
- fornecedores
- compras

2. Engenharia de produto
- BOM de produto
- BOM de receita
- composicao por camadas
- uso de produto dentro de combo

3. Precificacao
- custo direto
- parte que entra no markup
- parte que so repassa custo
- preco automatico
- preco manual
- preco por canal

4. Gestao gerencial
- custos fixos
- rateio por item ativo ou por volume mensal
- visao por operacao

## Regra Canonica Recomendada Para o ERP

Separar em 4 blocos:

1. Engenharia
- define do que o item e feito
- calcula custo tecnico real

2. Comercial
- define como o item aparece para venda
- categorias
- grupos
- adicionais
- canais

3. Precificacao
- aplica markup
- aplica repasse
- aplica regra por canal
- aceita override manual

4. Suprimentos
- fornecedor
- compra
- historico de preco
- evidencia documental

## Modelo de Dados Recomendado

### 1. Insumos

Tabela: `erp_inputs`

Campos principais:
- `id`
- `company_id`
- `scope`
- `code`
- `name`
- `base_unit`
- `purchase_qty`
- `purchase_cost`
- `waste_pct`
- `supplier_id`
- `supplier_mode`
- `source_type`
- `source_reference`
- `active`
- `notes`

Regra:
- custo unitario real = `purchase_cost / purchase_qty`, ajustado por perda.

### 2. Embalagens

Tabela: `erp_packaging`

Campos principais:
- `id`
- `company_id`
- `scope`
- `code`
- `name`
- `base_unit`
- `purchase_qty`
- `purchase_cost`
- `supplier_id`
- `source_type`
- `source_reference`
- `active`
- `notes`

Regra:
- embalagem entra no custo do item, mas pode ser marcada como:
  - entra no markup
  - somente repasse

### 3. Receitas e Transformacoes

Tabela: `erp_recipes`

Campos principais:
- `id`
- `company_id`
- `scope`
- `code`
- `name`
- `recipe_type`
- `yield_qty`
- `yield_unit`
- `storage`
- `active`
- `notes`

Tabela: `erp_recipe_components`

Campos principais:
- `id`
- `recipe_id`
- `component_type`
- `component_id`
- `qty`
- `loss_pct_override`
- `notes`

Tipos de receita:
- `prep`
- `semi_finished`
- `transformation`
- `sauce`
- `base`

Regra:
- custo da receita = soma do custo dos componentes
- custo por unidade da receita = `custo_lote / rendimento`

### 4. Produtos de Engenharia

Tabela: `erp_product_items`

Campos principais:
- `id`
- `company_id`
- `scope`
- `code`
- `name`
- `product_type`
- `production_type`
- `base_unit`
- `active`
- `notes`

Tabela: `erp_product_components`

Campos principais:
- `id`
- `product_id`
- `component_type`
- `component_id`
- `qty`
- `pricing_mode`
- `sort_order`
- `notes`

Valores de `component_type`:
- `input`
- `packaging`
- `recipe`
- `product`

Valores de `pricing_mode`:
- `markup`
- `pass_through`

Regra:
- `markup`: custo compoe a base da precificacao
- `pass_through`: custo so e repassado, sem multiplicador

### 5. Produtos Comerciais

Tabela: `erp_catalog_products`

Campos principais:
- `id`
- `company_id`
- `scope`
- `code`
- `name`
- `description`
- `category_id`
- `engineering_product_id`
- `sale_type`
- `pricing_mode`
- `manual_sale_price`
- `active`
- `featured`
- `include_in_catalog_count`
- `notes`

Valores de `sale_type`:
- `menu`
- `combo`
- `extra`
- `drink`
- `base`

Observacao:
- quando o produto comercial e igual ao produto de engenharia, pode haver relacao 1:1;
- quando houver necessidade futura, o mesmo item de engenharia pode sustentar mais de uma oferta comercial.

### 6. Grupos Comerciais e Adicionais

Tabela: `erp_product_groups`

Campos principais:
- `id`
- `catalog_product_id`
- `name`
- `group_type`
- `required`
- `minimum`
- `maximum`
- `price_calculation`
- `sort_order`
- `active`
- `notes`

Valores de `group_type`:
- `addon`
- `removal`
- `choice`
- `combo_option`

Valores de `price_calculation`:
- `sum`
- `average`
- `biggest`
- `free`

Tabela: `erp_product_group_items`

Campos principais:
- `id`
- `group_id`
- `name`
- `engineering_product_id`
- `component_mode`
- `sale_price_mode`
- `sale_price_value`
- `qty`
- `sort_order`
- `active`
- `notes`

Valores de `sale_price_mode`:
- `auto`
- `manual`
- `free`
- `included`

Observacao critica:
- o grupo comercial nunca deve contaminar a BOM base do produto principal;
- ele deve ser um conjunto de opcoes de venda com custo proprio.

### 7. Precos Por Canal

Tabela: `erp_channel_prices`

Campos principais:
- `id`
- `catalog_product_id`
- `channel`
- `pricing_rule`
- `markup_pct_override`
- `multiplier`
- `fixed_increment`
- `manual_price`
- `rounding_rule`
- `active`

Sugestao de canais:
- `default`
- `delivery`
- `ifood`
- `totem`
- `whatsapp`

Regra recomendada:
- manter preco base interno;
- derivar preco por canal a partir do preco base;
- aceitar override por canal quando necessario.

### 8. Custos Fixos

Tabela: `erp_fixed_costs`

Campos principais:
- `id`
- `company_id`
- `scope`
- `name`
- `amount`
- `allocation_mode`
- `active`
- `notes`

Tabela: `erp_cost_settings`

Campos principais:
- `id`
- `company_id`
- `default_markup_pct`
- `fixed_allocation_mode`
- `shared_fixed_split_mode`
- `shared_fixed_split_manual_json`
- `operation_monthly_units_json`
- `ifood_multiplier`

Regra:
- custo fixo nao deve poluir a ficha tecnica;
- deve existir como simulacao gerencial e visao de contribuicao.

### 9. Fornecedores e Compras

Tabela: `erp_suppliers`

Campos principais:
- `id`
- `company_id`
- `scope`
- `name`
- `legal_name`
- `cnpj`
- `seller_name`
- `seller_phone`
- `seller_email`
- `payment_methods`
- `pix_key`
- `evidence_type`
- `evidence_source`
- `notes`

Tabela: `erp_purchase_orders`

Campos principais:
- `id`
- `company_id`
- `supplier_id`
- `date`
- `document_number`
- `payment_method`
- `payment_status`
- `total_amount`
- `notes`

Tabela: `erp_purchase_order_items`

Campos principais:
- `id`
- `purchase_order_id`
- `resource_type`
- `resource_id`
- `description`
- `qty`
- `unit`
- `unit_price`
- `total_price`

## Regras de Calculo Recomendadas

### 1. Custo unitario do insumo

```text
custo_unitario_real = (purchase_cost / purchase_qty) / (1 - waste_pct)
```

### 2. Custo da receita

```text
custo_lote = soma(componentes)
custo_por_unidade = custo_lote / yield_qty
```

### 3. Custo direto do produto

```text
custo_direto = soma(componentes do produto)
```

### 4. Base que entra no markup

```text
base_markup = soma(componentes pricing_mode = markup)
repasse = soma(componentes pricing_mode = pass_through)
```

### 5. Preco automatico base

```text
preco_base = (base_markup * multiplicador_markup) + repasse
```

Se o markup for 200%:

```text
multiplicador_markup = 3
```

### 6. Preco por canal

Exemplo iFood:

```text
preco_ifood = preco_base * 1.27
```

### 7. Margem operacional simplificada

```text
margem_pct = (preco_venda - custo_direto) / preco_venda
```

### 8. Visao gerencial com custo fixo

```text
custo_total_referencia = custo_direto + rateio_fixo
```

Importante:
- esse valor deve ser visao gerencial;
- ele nao precisa virar o custo tecnico da ficha.

## Telas Recomendadas No ERP

### Tela 1. Insumos

Objetivo:
- cadastrar materia-prima e insumos comprados

Campos principais:
- nome
- unidade base
- quantidade da compra
- custo da compra
- perda
- fornecedor
- procedencia do preco
- referencia documental

Indicadores:
- custo unitario real
- data da ultima compra
- variacao de preco

### Tela 2. Embalagens

Objetivo:
- centralizar itens nao alimentares que entram no CMV

Campos principais:
- nome
- lote de compra
- custo da compra
- custo unitario
- fornecedor

### Tela 3. Receitas e Transformacoes

Objetivo:
- montar vinagrete, maionese, molhos, prep de proteina, semiacabados

Blocos:
- cabecalho da receita
- componentes
- rendimento
- custo do lote
- custo unitario

Extras importantes:
- duplicar receita
- versionar receita
- inativar receita antiga

### Tela 4. Produto e Ficha Tecnica

Objetivo:
- montar o item base que gera o custo real

Blocos:
- dados do item
- componentes da BOM
- arvore de composicao
- custo direto
- base de markup
- repasse puro

Essa e a tela principal da engenharia do produto.

### Tela 5. Grupos Comerciais

Objetivo:
- representar adicionais, escolhas, remocoes e upsells

Blocos:
- nome do grupo
- obrigatoriedade
- minimo e maximo
- regra de preco
- itens do grupo

Cada item do grupo deve mostrar:
- custo
- preco sugerido
- preco configurado
- canal

### Tela 6. Precificacao

Objetivo:
- transformar custo em preco

Blocos:
- custo direto
- base de markup
- repasse
- markup padrao
- preco automatico
- preco manual
- preco por canal
- margem

Ideal:
- mostrar lado a lado:
  - custo direto
  - preco base
  - preco iFood
  - margem
  - custo com rateio fixo de referencia

### Tela 7. Fornecedores e Compras

Objetivo:
- dar sustentacao real ao custo

Blocos:
- cadastro do fornecedor
- pedidos
- itens comprados
- historico de preco
- anexos e evidencias

### Tela 8. Simulador Gerencial

Objetivo:
- apoiar decisao, nao engenharia

Blocos:
- custos fixos
- volume mensal
- custo fixo por venda
- margem de contribuicao
- preco de equilibrio
- comparativo entre canais

## API Recomendada

### Cadastros base

```http
GET    /api/erp/inputs
POST   /api/erp/inputs
PUT    /api/erp/inputs/:id

GET    /api/erp/packaging
POST   /api/erp/packaging
PUT    /api/erp/packaging/:id

GET    /api/erp/recipes
POST   /api/erp/recipes
PUT    /api/erp/recipes/:id
```

### Engenharia de produto

```http
GET    /api/erp/engineering-products
POST   /api/erp/engineering-products
PUT    /api/erp/engineering-products/:id
GET    /api/erp/engineering-products/:id/cost
```

Resposta sugerida para custo:

```json
{
  "productId": "prd_alpha",
  "directCost": 15.71,
  "passThroughCost": 0.22,
  "markupBaseCost": 15.49,
  "components": []
}
```

### Catalogo comercial

```http
GET    /api/erp/catalog-products
POST   /api/erp/catalog-products
PUT    /api/erp/catalog-products/:id

GET    /api/erp/catalog-products/:id/groups
POST   /api/erp/catalog-products/:id/groups
PUT    /api/erp/catalog-products/:id/groups/:groupId
```

### Precificacao

```http
GET    /api/erp/pricing/settings
PUT    /api/erp/pricing/settings

GET    /api/erp/catalog-products/:id/pricing-preview
PUT    /api/erp/catalog-products/:id/pricing
```

Resposta sugerida para preview:

```json
{
  "productId": "prd_alpha",
  "pricingMode": "auto",
  "directCost": 15.71,
  "passThroughCost": 0.22,
  "markupBaseCost": 15.49,
  "markupPct": 200,
  "autoSalePrice": 47.13,
  "channelPrices": {
    "default": 47.13,
    "ifood": 59.86
  },
  "marginPct": 66.66,
  "fixedCostReference": 4.82,
  "salePriceWithFixedReference": 61.59
}
```

### Compras

```http
GET    /api/erp/suppliers
POST   /api/erp/suppliers

GET    /api/erp/purchase-orders
POST   /api/erp/purchase-orders
GET    /api/erp/purchase-orders/:id
```

## O Que Entraria Na Fase 1

Escopo ideal de primeira entrega:

1. Insumos
2. Embalagens
3. Receitas
4. Produtos com BOM
5. Grupos e adicionais
6. Precificacao automatica
7. Preco por canal
8. Fornecedores e compras simples
9. Exportacao/importacao JSON

Isso ja reproduz quase todo o valor do PWA dentro do ERP.

## O Que Pode Ficar Para Fase 2

1. Versionamento formal de ficha tecnica
2. Historico de preco com curva temporal
3. Simulador avancado de margem
4. Multiplas operacoes com rateio inteligente
5. Integracao direta com PDV, iFood e estoque
6. Workflow de aprovacao de preco
7. Auditoria completa de alteracoes

## Ponto Critico de Governanca

No ERP, cada cadastro deve ter dono claro:

- compras mantem custo de compra;
- operacao/engenharia mantem receita e ficha tecnica;
- comercial mantem grupos e canal;
- financeiro acompanha custo fixo e margem.

Se tudo ficar na mesma tela, o modulo vira confuso rapido.

## Mapeamento Direto Do PWA Para ERP

O PWA atual ja pode ser convertido assim:

- `ingredients` -> `erp_inputs`
- `packaging` -> `erp_packaging`
- `recipes` -> `erp_recipes` + `erp_recipe_components`
- `products` -> `erp_catalog_products` e/ou `erp_product_items`
- `products.components` -> `erp_product_components`
- `products.addons` -> `erp_product_groups` + `erp_product_group_items`
- `fixedCosts` -> `erp_fixed_costs`
- `suppliers` -> `erp_suppliers`
- `purchaseOrders` -> `erp_purchase_orders`
- `purchaseItems` -> `erp_purchase_order_items`

## Recomendacao Final

Se eu estivesse desenhando isso com voce para producao, eu faria nesta ordem:

1. consolidar o modelo de dados canonico;
2. criar API de custo e preview de preco;
3. subir telas base de cadastro;
4. subir ficha tecnica e grupos comerciais;
5. subir tela de precificacao;
6. por ultimo, simulador gerencial e rateio fixo.

Assim o ERP nasce limpo:
- primeiro calcula certo;
- depois vende certo;
- depois analisa melhor.
