# Engenharia de Produtos para ERP de Restaurante

Este documento serve como norte para implementação da área de **Engenharia de Produtos** em um ERP de restaurante.

A premissa principal é:

> O **cardápio/catálogo não é a fonte-mãe** dos insumos, preparos e custos.  
> O cardápio é a camada comercial de publicação.  
> A fonte operacional deve ser a **Engenharia de Produtos**, composta por itens, fichas técnicas, custos e precificação.

---

## 1. Objetivo da funcionalidade

Criar uma área no ERP onde o restaurante consiga cadastrar, organizar e calcular:

- Insumos comprados.
- Embalagens.
- Preparos internos / semiacabados.
- Produtos finais de venda.
- Fichas técnicas.
- Receitas / modo de preparo.
- Custo técnico dos produtos.
- Preço sugerido e preço por canal.
- Relação dos produtos com cardápios/catálogos.

Essa área deve permitir que o sistema calcule corretamente custo, margem, CMV e precificação por canal de venda.

---

## 2. Princípio de arquitetura

A hierarquia correta deve ser:

```text
Insumos / Embalagens
        ↓
Preparos / Semiacabados
        ↓
Ficha técnica
        ↓
Produto de venda
        ↓
Cardápio / Catálogo / Canal
        ↓
Venda
        ↓
Baixa de estoque + CMV + Margem
```

O cardápio pode iniciar um fluxo de cadastro, mas não deve ser a fonte primária de custos.

Exemplo:

```text
Usuário cria no cardápio: "Pizza Marguerita Grande"
Sistema cria um Produto de Venda com status: "Ficha técnica pendente"
Depois o usuário completa insumos, preparo, embalagem, custo e preço.
```

---

## 3. Conceitos principais

### 3.1 Insumo

Item comprado e usado diretamente ou indiretamente em fichas técnicas.

Exemplos:

- Queijo muçarela.
- Farinha.
- Tomate.
- Carne.
- Óleo.
- Sal.

Campos esperados:

- Nome.
- Categoria.
- Unidade de compra.
- Unidade de uso.
- Fator de conversão.
- Fornecedor principal.
- Custo atual.
- Custo médio.
- Estoque atual.
- Perda padrão.
- Status: ativo/inativo.

---

### 3.2 Embalagem

Item comprado, normalmente usado em delivery, retirada ou apresentação do produto.

Pode ser tratado como um tipo próprio de item, e não apenas como categoria de insumo, porque impacta diretamente a precificação por canal.

Exemplos:

- Caixa de pizza.
- Sacola delivery.
- Pote descartável.
- Tampa.
- Lacre.
- Etiqueta.
- Talher descartável.
- Guardanapo.

Campos esperados:

- Nome.
- Unidade.
- Custo unitário.
- Estoque atual.
- Canais aplicáveis: salão, delivery próprio, marketplace.
- Produtos onde é usada.
- Status: ativo/inativo.

---

### 3.3 Preparo / Semiacabado

Item produzido internamente e usado em outros produtos.

Exemplos:

- Molho de tomate.
- Massa de pizza.
- Maionese da casa.
- Carne desfiada.
- Arroz cozido.
- Caldo base.

Um preparo possui ficha técnica própria e rendimento.

Campos esperados:

- Nome.
- Categoria.
- Unidade de rendimento.
- Quantidade de rendimento.
- Ingredientes.
- Perda no preparo.
- Modo de preparo.
- Custo calculado por unidade de rendimento.
- Produtos onde é usado.
- Status: ativo/inativo.

---

### 3.4 Produto de Venda

Produto que pode ser vendido ao cliente.

Exemplos:

- Pizza calabresa grande.
- Hambúrguer bacon.
- Prato executivo.
- Sobremesa.
- Combo.
- Refrigerante lata.

Campos esperados:

- Nome interno.
- Nome comercial.
- Categoria interna.
- Ficha técnica.
- Embalagem padrão por canal.
- Custo calculado.
- Preço sugerido.
- Preço por canal.
- Cardápios em que aparece.
- Status da ficha técnica.
- Status comercial.

---

### 3.5 Ficha Técnica

Composição técnica de um preparo ou produto de venda.

Uma ficha técnica pode pertencer a:

- Um preparo / semiacabado.
- Um produto de venda.

Ela não deve pertencer diretamente ao cardápio.

Campos esperados:

- Item dono da ficha técnica.
- Lista de componentes.
- Quantidade de cada componente.
- Unidade de uso.
- Perda percentual por componente, se aplicável.
- Rendimento final.
- Custo calculado.
- Modo de preparo.
- Observações operacionais.

Componentes possíveis:

- Insumo.
- Embalagem.
- Preparo.

---

### 3.6 Receita

Neste contexto, “receita” deve significar o modo de preparo/instrução operacional dentro da ficha técnica.

Evitar usar “receita” como sinônimo de produto, insumo ou ficha técnica, para não gerar ambiguidade.

---

### 3.7 Cardápio / Catálogo

Camada comercial de publicação dos produtos.

O cardápio organiza como os produtos aparecem para venda.

Campos esperados:

- Nome do cardápio.
- Canal: salão, delivery próprio, marketplace, QR Code, balcão etc.
- Categorias comerciais.
- Produtos publicados.
- Nome exibido.
- Descrição comercial.
- Foto.
- Preço por canal.
- Disponibilidade.
- Ordem de exibição.
- Promoções.
- Adicionais.

O cardápio deve consumir produtos de venda já cadastrados na Engenharia de Produtos.

---

## 4. Estrutura de telas recomendada

### 4.1 Menu principal sugerido

```text
ERP
├── Cardápios
├── Produtos e Engenharia
│   ├── Todos os itens
│   ├── Insumos
│   ├── Embalagens
│   ├── Preparos
│   ├── Produtos de venda
│   └── Fichas técnicas
├── Custos e Precificação
└── Estoque
```

O nome da área pode ser um destes:

- Engenharia de Produtos.
- Produtos e Engenharia.
- Produtos, Receitas e Custos.
- Fichas Técnicas e Insumos.

Recomendação: **Produtos e Engenharia** ou **Engenharia de Produtos**.

---

## 5. Tela central: Todos os Itens

Criar uma tela unificada para visualizar todos os itens operacionais.

Essa tela não deve se chamar apenas “Insumos”, porque também conterá preparos, produtos de venda e embalagens.

Nome recomendado da tela:

```text
Todos os Itens
```

ou

```text
Itens de Produção
```

### 5.1 Filtros

A tela deve ter filtros rápidos:

```text
[Todos]
[Insumos]
[Embalagens]
[Preparos]
[Produtos de venda]
[Com ficha técnica]
[Sem ficha técnica]
[Com erro de custo]
[Inativos]
```

### 5.2 Colunas da listagem

Colunas sugeridas:

| Coluna | Descrição |
|---|---|
| Nome | Nome do item |
| Tipo | Insumo, embalagem, preparo ou produto de venda |
| Categoria | Categoria interna |
| Unidade | Unidade principal do item |
| Custo | Custo atual ou calculado |
| Status da ficha técnica | Completa, pendente, incompleta, não aplicável |
| Estoque | Quantidade em estoque, se aplicável |
| Usado em | Quantos produtos/preparos usam este item |
| Atualização | Última atualização de custo |
| Status | Ativo/inativo |

### 5.3 Identificação visual

Usar tags/badges por tipo:

```text
[INSUMO] Queijo muçarela
[EMBALAGEM] Caixa pizza grande
[PREPARO] Molho de tomate
[PRODUTO] Pizza calabresa grande
```

Sugestão de cores:

- Insumo: cinza ou azul.
- Embalagem: roxo.
- Preparo: amarelo/laranja.
- Produto de venda: verde.

Evitar pintar a linha inteira com cores fortes. Preferir badges, ícones e agrupamentos opcionais.

### 5.4 Agrupamento visual opcional

Permitir visualizar agrupado por tipo:

```text
▼ Produtos de venda
  [PRODUTO] Pizza calabresa G
  [PRODUTO] Hambúrguer bacon

▼ Preparos
  [PREPARO] Molho de tomate
  [PREPARO] Massa de pizza

▼ Insumos
  [INSUMO] Queijo muçarela
  [INSUMO] Farinha

▼ Embalagens
  [EMBALAGEM] Caixa pizza G
  [EMBALAGEM] Sacola delivery
```

---

## 6. Tela de detalhe do item

A tela de detalhe deve ser única, mas adaptada conforme o tipo do item.

### 6.1 Detalhe de Insumo

Exibir abas:

```text
Dados gerais
Compra e conversão
Custo
Estoque
Onde é usado
Histórico
```

Campos principais:

- Nome.
- Categoria.
- Unidade de compra.
- Unidade de uso.
- Conversão.
- Custo de compra.
- Custo por unidade de uso.
- Fornecedor.
- Estoque.
- Perda padrão.
- Produtos/preparos onde é usado.

---

### 6.2 Detalhe de Embalagem

Exibir abas:

```text
Dados gerais
Custo
Estoque
Canais
Onde é usada
```

Campos principais:

- Nome.
- Unidade.
- Custo unitário.
- Estoque.
- Aplicação por canal.
- Produtos onde é usada.

---

### 6.3 Detalhe de Preparo

Exibir abas:

```text
Dados gerais
Ficha técnica
Modo de preparo
Custo
Onde é usado
Histórico
```

Campos principais:

- Nome.
- Rendimento.
- Unidade de rendimento.
- Componentes da ficha técnica.
- Modo de preparo.
- Perda.
- Custo total do lote.
- Custo por unidade de rendimento.
- Produtos onde é usado.

---

### 6.4 Detalhe de Produto de Venda

Exibir abas:

```text
Dados gerais
Ficha técnica
Embalagens
Custo
Precificação
Cardápios
Histórico
```

Campos principais:

- Nome interno.
- Nome comercial.
- Ficha técnica.
- Embalagens por canal.
- Custo técnico.
- Taxas.
- Impostos.
- Margem desejada.
- Preço sugerido.
- Preços por canal.
- Cardápios onde aparece.

---

## 7. Regras de custo

### 7.1 Custo de insumo

O sistema deve permitir conversão entre unidade de compra e unidade de uso.

Exemplo:

```text
Compra: 1 kg de queijo por R$ 48,00
Unidade de uso: grama
Custo por grama: R$ 0,048
```

Fórmula:

```text
custo_unitario_uso = custo_unidade_compra / fator_conversao
```

---

### 7.2 Custo de preparo

O custo de um preparo é a soma dos componentes da ficha técnica, ajustada por perdas e rendimento.

Exemplo:

```text
Molho de tomate
- Tomate: 1,2 kg
- Alho: 30 g
- Azeite: 50 ml
- Sal: 10 g
Rendimento final: 1 kg
```

Fórmula simplificada:

```text
custo_total_preparo = soma(custo_componentes)
custo_por_unidade_rendimento = custo_total_preparo / rendimento_final
```

---

### 7.3 Custo de produto de venda

O custo de um produto de venda é a soma de:

- Insumos diretos.
- Preparos utilizados.
- Embalagens aplicáveis.
- Perdas configuradas.

Fórmula simplificada:

```text
custo_produto = soma(insumos) + soma(preparos) + soma(embalagens) + perdas
```

---

### 7.4 Custo por canal

O mesmo produto pode ter custo diferente por canal por causa de embalagem, taxa e comissão.

Exemplo:

```text
Hambúrguer no salão:
- Custo técnico: R$ 12,32
- Embalagem: R$ 0,00

Hambúrguer no delivery:
- Custo técnico: R$ 12,32
- Embalagem: R$ 1,10

Hambúrguer no marketplace:
- Custo técnico: R$ 12,32
- Embalagem: R$ 1,10
- Comissão: 20%
```

---

## 8. Regras de precificação

A precificação deve considerar:

- Custo da ficha técnica.
- Custo de embalagem.
- Taxa de cartão.
- Comissão de marketplace.
- Impostos.
- Margem desejada.
- Arredondamento comercial.
- Preço por canal.

Fórmula conceitual:

```text
preco_venda = custo_total / (1 - percentual_taxas - percentual_impostos - margem_desejada)
```

Exemplo:

```text
Custo total: R$ 12,32
Taxas + impostos + margem: 45%
Preço sugerido: 12,32 / (1 - 0,45) = R$ 22,40
```

O sistema deve permitir ajuste manual do preço final.

Exibir sempre:

```text
Custo técnico
Custo com embalagem
Taxas
Impostos
Preço sugerido
Preço praticado
Margem estimada
```

---

## 9. Relação com cardápio

O cardápio deve publicar produtos de venda.

Um produto pode aparecer em vários cardápios.

Exemplo:

```text
Produto interno: Pizza Calabresa Grande

Cardápios:
- Salão: R$ 59,90
- Delivery próprio: R$ 64,90
- Marketplace: R$ 72,90
- Promoção terça-feira: R$ 49,90
```

O produto é o mesmo, mas o preço e a apresentação comercial podem mudar conforme o canal.

### 9.1 Campos específicos do cardápio

- Nome exibido.
- Descrição comercial.
- Foto.
- Categoria comercial.
- Ordem de exibição.
- Preço no canal.
- Disponibilidade.
- Destaque.
- Promoções.
- Adicionais.

### 9.2 Regra importante

Não cadastrar insumos diretamente no cardápio.

Caso o usuário crie um item novo pelo cardápio, o sistema deve criar um **Produto de Venda pendente**.

Status sugerido:

```text
Produto criado
Ficha técnica pendente
Custo indefinido
Precificação incompleta
```

---

## 10. Modelo de dados sugerido

Abaixo está um modelo conceitual. Adaptar conforme stack e banco do projeto.

### 10.1 Item

Representa qualquer item operacional.

```ts
type ItemType = 'input' | 'packaging' | 'preparation' | 'sellable_product'

type Item = {
  id: string
  name: string
  type: ItemType
  categoryId?: string
  baseUnit: string
  status: 'active' | 'inactive'
  createdAt: Date
  updatedAt: Date
}
```

---

### 10.2 Dados de compra/custo para insumos e embalagens

```ts
type PurchaseInfo = {
  id: string
  itemId: string
  purchaseUnit: string
  usageUnit: string
  conversionFactor: number
  currentCost: number
  averageCost?: number
  supplierId?: string
  defaultLossPercent?: number
}
```

---

### 10.3 Ficha técnica

```ts
type TechnicalSheet = {
  id: string
  ownerItemId: string
  yieldQuantity?: number
  yieldUnit?: string
  instructions?: string
  notes?: string
  status: 'complete' | 'incomplete' | 'pending_cost' | 'not_applicable'
  calculatedCost: number
  calculatedAt?: Date
}
```

---

### 10.4 Componentes da ficha técnica

```ts
type TechnicalSheetComponent = {
  id: string
  technicalSheetId: string
  componentItemId: string
  quantity: number
  unit: string
  lossPercent?: number
  costSnapshot?: number
  sortOrder: number
}
```

O componente pode ser:

- Insumo.
- Embalagem.
- Preparo.

Evitar permitir ciclos.

Exemplo de ciclo inválido:

```text
Molho A usa Molho B
Molho B usa Molho A
```

---

### 10.5 Produto de venda

```ts
type SellableProductInfo = {
  id: string
  itemId: string
  internalName: string
  commercialName?: string
  description?: string
  imageUrl?: string
  technicalSheetId?: string
  commercialStatus: 'draft' | 'ready' | 'published' | 'inactive'
}
```

---

### 10.6 Cardápio

```ts
type Menu = {
  id: string
  name: string
  channel: 'salon' | 'own_delivery' | 'marketplace' | 'qr_code' | 'counter'
  status: 'active' | 'inactive'
}
```

---

### 10.7 Item do cardápio

```ts
type MenuItem = {
  id: string
  menuId: string
  sellableProductItemId: string
  displayName: string
  description?: string
  imageUrl?: string
  categoryName?: string
  price: number
  available: boolean
  sortOrder: number
}
```

---

### 10.8 Precificação por canal

```ts
type ChannelPricing = {
  id: string
  sellableProductItemId: string
  channel: 'salon' | 'own_delivery' | 'marketplace' | 'qr_code' | 'counter'
  technicalCost: number
  packagingCost: number
  cardFeePercent?: number
  marketplaceFeePercent?: number
  taxPercent?: number
  desiredMarginPercent?: number
  suggestedPrice: number
  manualPrice?: number
  finalPrice: number
  estimatedMargin: number
}
```

---

## 11. Validações importantes

### 11.1 Insumos

- Não permitir custo negativo.
- Não permitir fator de conversão zero.
- Exigir unidade de compra e unidade de uso.
- Alertar quando item usado em ficha técnica estiver inativo.

### 11.2 Ficha técnica

- Não permitir componente sem quantidade.
- Não permitir quantidade zero ou negativa.
- Não permitir ciclos entre preparos.
- Alertar quando componente estiver sem custo.
- Alertar quando rendimento estiver ausente em preparo.
- Recalcular custo quando componente mudar.

### 11.3 Produto de venda

- Produto publicado deve ter ficha técnica completa, exceto produtos simples configurados explicitamente como “sem produção”, como bebida fechada.
- Produto sem custo deve mostrar alerta.
- Produto sem preço deve mostrar alerta.

### 11.4 Cardápio

- Cardápio só deve publicar produtos de venda.
- Não publicar insumo como item de cardápio.
- Permitir preço diferente por canal.
- Alertar quando preço praticado gerar margem negativa.

---

## 12. Estados/status sugeridos

### 12.1 Status da ficha técnica

```text
not_applicable     → Não se aplica, usado em insumos simples
pending            → Ainda não criada
incomplete         → Criada, mas faltam dados
pending_cost       → Tem composição, mas algum custo está ausente
complete           → Pronta e com custo calculado
```

### 12.2 Status comercial do produto

```text
draft       → Criado, mas incompleto
ready       → Pronto para entrar em cardápio
published   → Publicado em pelo menos um cardápio
inactive    → Inativo
```

---

## 13. UX recomendada

### 13.1 Botão principal da tela

```text
+ Novo item
```

Ao clicar, perguntar o tipo:

```text
O que você deseja cadastrar?
- Insumo
- Embalagem
- Preparo / Semiacabado
- Produto de venda
```

### 13.2 Criação guiada

Para produto de venda, usar etapas:

```text
1. Dados gerais
2. Ficha técnica
3. Embalagens
4. Custo
5. Precificação
6. Cardápios
```

Para preparo:

```text
1. Dados gerais
2. Ingredientes
3. Rendimento
4. Modo de preparo
5. Custo calculado
```

Para insumo:

```text
1. Dados gerais
2. Compra e conversão
3. Custo
4. Estoque
```

---

## 14. Casos de uso principais

### Caso 1: Cadastrar um insumo

```text
Usuário cadastra Queijo Muçarela
Compra em kg
Usa em gramas
Custo: R$ 48,00/kg
Sistema calcula custo por grama
```

### Caso 2: Cadastrar um preparo

```text
Usuário cadastra Molho de Tomate
Adiciona tomate, alho, azeite e sal
Define rendimento final de 1 kg
Sistema calcula custo por kg do molho
```

### Caso 3: Cadastrar um produto de venda

```text
Usuário cadastra Pizza Calabresa Grande
Adiciona massa, molho, queijo, calabresa e embalagem
Sistema calcula custo técnico
Usuário define margem desejada
Sistema sugere preço
Produto é publicado no cardápio
```

### Caso 4: Criar item pelo cardápio

```text
Usuário cria item "Hambúrguer Bacon" no cardápio
Sistema cria Produto de Venda com ficha técnica pendente
Sistema alerta: custo indefinido
Usuário completa ficha técnica depois
```

---

## 15. Critérios de aceite

A implementação deve ser considerada aceitável quando:

- Existe uma área de Engenharia de Produtos ou equivalente.
- A tela central lista insumos, embalagens, preparos e produtos de venda.
- Cada item tem um tipo claro.
- A ficha técnica é vinculada a preparo ou produto de venda.
- Insumos simples não possuem ficha técnica.
- Preparos podem ser usados dentro de produtos.
- Embalagens entram no custo do produto, especialmente por canal.
- O sistema calcula custo técnico dos produtos.
- O sistema exibe preço sugerido com base em custo, taxas, impostos e margem.
- O cardápio publica produtos de venda, não insumos.
- Um produto pode aparecer em vários cardápios com preços diferentes.
- Produtos criados pelo cardápio entram como produto de venda pendente, não como insumo.
- Existem alertas para ficha técnica incompleta, custo ausente e margem negativa.

---

## 16. Tarefas sugeridas para implementação

### Backend / Banco de dados

- Criar entidade `Item` com campo `type`.
- Criar estrutura de custo/compra para insumos e embalagens.
- Criar entidade de ficha técnica.
- Criar entidade de componentes da ficha técnica.
- Permitir componentes aninhados, como preparo dentro de produto.
- Bloquear ciclos entre preparos.
- Criar cálculo de custo técnico.
- Criar cálculo de preço sugerido.
- Criar relacionamento entre produto de venda e cardápio.

### Frontend

- Criar tela `Todos os Itens`.
- Criar filtros por tipo e status.
- Criar badges por tipo.
- Criar tela de detalhe adaptável ao tipo do item.
- Criar fluxo guiado de cadastro.
- Criar tela/aba de ficha técnica.
- Criar tela/aba de precificação.
- Criar visualização de onde o item é usado.
- Criar alertas de inconsistência.

### Integrações futuras

- Estoque.
- Compras.
- Fornecedores.
- PDV.
- Delivery próprio.
- Marketplaces.
- Relatórios de CMV.
- Relatórios de margem por produto/canal.

---

## 17. Prompt sugerido para o Codex

Use este prompt junto com este documento:

```text
Implemente a área de Engenharia de Produtos do ERP conforme o arquivo engenharia-produtos-erp-restaurante.md.

Antes de codar, analise a arquitetura atual do projeto, padrões de pastas, entidades existentes, componentes de UI, sistema de rotas e camada de persistência.

Depois proponha e implemente a menor versão funcional que contemple:

1. Cadastro/listagem unificada de itens com tipos: insumo, embalagem, preparo e produto de venda.
2. Tela de detalhe adaptável ao tipo do item.
3. Ficha técnica para preparos e produtos de venda.
4. Componentes da ficha técnica usando insumos, embalagens ou preparos.
5. Cálculo de custo técnico.
6. Estrutura inicial de precificação por canal.
7. Relação entre produto de venda e cardápio.
8. Validações para ficha técnica incompleta, custo ausente e item inativo.

Não derive os insumos a partir do cardápio. O cardápio deve consumir produtos de venda.

Mantenha compatibilidade com o padrão visual e arquitetural já existente no projeto.
```

---

## 18. Decisão final recomendada

Não criar uma tela chamada apenas “Insumos” para conter tudo.

Criar uma área chamada:

```text
Engenharia de Produtos
```

Com uma tela principal:

```text
Todos os Itens
```

E tipos internos:

```text
Insumo
Embalagem
Preparo / Semiacabado
Produto de venda
```

O cardápio/catálogo deve ser apenas a camada de publicação comercial.

