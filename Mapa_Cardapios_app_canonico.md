# Mapa de Cardapios Canonico Para o App

Fonte base:
- `/home/spawnbtc/Desktop/gyros_cost_pwa_v2/gyros_cost_pwa/Mapa_Cardapios_import.md`

Empresa alvo:
- `GYROS`

Objetivo:
- converter o mapa comercial do iFood para a estrutura real usada hoje pelo app;
- deixar explicito o que ja pode ser cadastrado sem interpretacao extra;
- isolar o que ainda precisa confirmacao antes de subir.

## Modelo Canonico do App

O app atual trabalha, na pratica, com estas entidades:

1. Categoria
- `name`
- `color`
- `icon`
- `context`
- `company`
- `parent`
- `extraData.sortOrder`
- `extraData.channel`

2. Produto
- `product`
- `description`
- `sku`
- `productUnit`
- `type`
- `productCondition`
- `price`
- `company`
- `active`
- `featured`

3. Vinculo produto-categoria
- `product`
- `category`

4. Grupo de produto
- `parentProduct`
- `people`
- `productGroup`
- `required`
- `minimum`
- `maximum`
- `groupOrder`
- `priceCalculation`

5. Item do grupo
- `product`
- `productGroup`
- `productChild`
- `productType`
- `price`
- `quantity`

## Convencoes deste Documento

- `status: ready`
  significa que a estrutura esta suficientemente definida para cadastro.
- `status: needs_confirmation`
  significa que ainda existe ambiguidade comercial ou tecnica.
- `channels`
  segue o conjunto suportado no app hoje:
  `default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger`
- `priceCalculation`
  usa os valores aceitos hoje:
  `sum, average, biggest, free`

## Decisoes de Normalizacao

Estas decisoes foram aplicadas para tornar o documento deterministico:

1. Todas as categorias serao marcadas para todos os canais de venda.
2. Todos os produtos finais serao cadastrados como `type: product`, salvo futura orientacao contraria.
3. Todos os grupos `Opcional` foram normalizados para:
- `required: false`
- `minimum: 0`
- `maximum: 99`
- `priceCalculation: sum`
4. Grupos de remocao com itens `R$ 0,00` foram normalizados com:
- `required: false`
- `minimum: 0`
- `maximum: 99`
- `priceCalculation: free`
5. Onde o card-base do produto esta em `R$ 0,00` e a escolha principal esta no grupo, o grupo principal foi tratado como:
- `required: true`
- `minimum: 1`
- `maximum: 1`, salvo indicacao clara de escolha multipla
- `priceCalculation: sum`
6. Onde o documento original nao permite inferencia segura, o item ficou em `needs_confirmation`.

## Estrutura Canonica

```yaml
company: GYROS
channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
categories:
  - name: string
    sortOrder: number
    channels: [channel]
    status: ready|needs_confirmation
    notes: [string]
    products:
      - name: string
        basePrice: number
        description: string
        type: product
        active: true
        featured: false
        status: ready|needs_confirmation
        notes: [string]
        groups:
          - name: string
            required: boolean
            minimum: number
            maximum: number
            priceCalculation: sum|average|biggest|free
            status: ready|needs_confirmation
            notes: [string]
            items:
              - name: string
                price: number
                quantity: 1
                productType: component
                status: ready|needs_confirmation
                notes: [string]
```

## Dados Canonicos

```yaml
company: GYROS
channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
categories:
  - name: Lanches
    sortOrder: 1
    channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
    status: needs_confirmation
    notes:
      - "A categoria esta clara, mas o grupo 'Turbine sua Refeicao' conflita com o preco base dos lanches."
    products:
      - name: Alpha Gyros
        basePrice: 49.90
        description: "Pao Frances (Com Parmesao), Carne (Fraldinha), Vinagrete, Queijo Mucarela Gratina..."
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes:
          - "Preco base definido."
          - "Grupo principal com opcoes pagas conflita com a descricao do produto base."
        groups:
          - name: Turbine sua Refeicao
            required: true
            minimum: 1
            maximum: 1
            priceCalculation: sum
            status: needs_confirmation
            notes:
              - "Conflito: o lanche ja parece vir com proteina no preco base."
              - "Pode ser upsell, substituicao ou composicao obrigatoria do item."
            items:
              - { name: "Antepasto de Berinjela", price: 99.00, quantity: 1, productType: component, status: needs_confirmation, notes: ["Valor suspeito; possivel 9.90."] }
              - { name: "Linguica Toscana", price: 17.00, quantity: 1, productType: component, status: needs_confirmation, notes: [] }
              - { name: "Frango (Peito e Sobrecoxa)", price: 16.00, quantity: 1, productType: component, status: needs_confirmation, notes: [] }
              - { name: "Carne (Fraldinha)", price: 35.00, quantity: 1, productType: component, status: needs_confirmation, notes: [] }
          - name: Adicionais
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: ["Grupo reutilizavel."]
            items:
              - { name: Bacon, price: 6.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Queijo Mucarela", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Catupiry Original", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Catupiry 4 queijos", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Cheddar, price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Deseja remover algo
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: free
            status: ready
            notes: ["Grupo de remocao com itens zerados."]
            items:
              - { name: "Remover Carne", price: 0.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Remover Vinagrete", price: 0.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Remover Queijo", price: 0.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Remover Maionese da Casa", price: 0.00, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Molhos
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: ["Grupo reutilizavel."]
            items:
              - { name: "Maionese da Casa", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Maionese Verde", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Maionese de Chimichurri", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Barbecue, price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Escolha as Bebidas
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: ["Grupo reutilizavel."]
            items:
              - { name: "Cha Ice Tea Leao Limao 450ml", price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Cha Ice Tea Leao Pessego 450ml", price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Fanta Guarana Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Garrafa 2 litros", price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Zero Garrafa 2 litros", price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Zero Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Sobremesas
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: ["Grupo reutilizavel."]
            items:
              - { name: "Mini Churros Doce de Leite", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }

      - name: Beta Gyros
        basePrice: 39.90
        description: "Pao Frances (Com Parmesao), Frango (Peito e Sobrecoxa), Vinagrete, Queijo Catupir..."
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes: ["Estrutura igual ao Alpha Gyros; mesmo conflito no grupo principal."]
        groups_ref: "Mesmo conjunto de grupos do Alpha Gyros"

      - name: Gamma Gyros
        basePrice: 38.90
        description: "Pao Frances (Com Parmesao), Linguica Toscana, Vinagrete, Queijo Catupiry sabor 4..."
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes: ["Estrutura igual ao Alpha Gyros; mesmo conflito no grupo principal."]
        groups_ref: "Mesmo conjunto de grupos do Alpha Gyros"

      - name: Vegetariano Gyros
        basePrice: 35.00
        description: "Pao Frances (Com Parmesao), Antepasto de Berinjela, Vinagrete, Queijo Mucarela..."
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes: ["Estrutura igual ao Alpha Gyros; mesmo conflito no grupo principal."]
        groups_ref: "Mesmo conjunto de grupos do Alpha Gyros"

  - name: Acompanhamentos
    sortOrder: 2
    channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
    status: ready
    notes: []
    products:
      - name: Batata Frita
        basePrice: 0.00
        description: ""
        type: product
        active: true
        featured: false
        status: ready
        notes: ["Produto base zerado; preco vem do grupo obrigatorio Tamanho."]
        groups:
          - name: Tamanho
            required: true
            minimum: 1
            maximum: 1
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: Grande, price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Pequena, price: 5.50, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Escolha o melhor tempero
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: Sal, price: 0.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Lemon Pepper", price: 1.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Paprica, price: 1.50, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Molhos
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: ["Duas opcoes foram inferidas por repeticao do grupo reutilizado no documento base."]
            items:
              - { name: "Maionese da Casa", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Maionese Verde", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Maionese de Chimichurri", price: 3.50, quantity: 1, productType: component, status: needs_confirmation, notes: ["Item inferido no documento base."] }
              - { name: Barbecue, price: 3.50, quantity: 1, productType: component, status: needs_confirmation, notes: ["Item inferido no documento base."] }

  - name: Sobremesas
    sortOrder: 3
    channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
    status: needs_confirmation
    notes:
      - "Mini Churros tem preco base igual ao preco dos sabores no grupo obrigatorio."
    products:
      - name: Mini Churros
        basePrice: 8.00
        description: ""
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes:
          - "Pode ser produto simples sem grupo."
          - "Ou base zero com grupo obrigatorio."
          - "Ou base 8.00 com grupo 'free'."
        groups:
          - name: Sobremesas
            required: true
            minimum: 1
            maximum: 1
            priceCalculation: sum
            status: needs_confirmation
            notes: ["Necessario decidir se os sabores somam ao preco base ou apenas selecionam a variacao."]
            items:
              - { name: "Mini Churros Doce de Leite", price: 8.00, quantity: 1, productType: component, status: needs_confirmation, notes: [] }

  - name: Almoco
    sortOrder: 4
    channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
    status: needs_confirmation
    notes:
      - "Categoria valida, mas produto principal esta incompleto."
    products:
      - name: Monte seu prato
        basePrice: 35.00
        description: ""
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes:
          - "Produto marcado como disponivel em periodo especifico no documento base."
          - "Existem 6 grupos, mas sem nomes e sem opcoes."
        groups: []

  - name: Molhos
    sortOrder: 5
    channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
    status: ready
    notes: []
    products:
      - { name: "Maionese da Casa", basePrice: 3.50, description: "", type: product, active: true, featured: false, status: ready, notes: [], groups: [] }
      - { name: "Maionese Verde", basePrice: 3.50, description: "", type: product, active: true, featured: false, status: ready, notes: [], groups: [] }
      - { name: "Maionese de Chimichurri", basePrice: 3.50, description: "", type: product, active: true, featured: false, status: ready, notes: [], groups: [] }
      - { name: "Barbecue", basePrice: 3.50, description: "", type: product, active: true, featured: false, status: ready, notes: [], groups: [] }

  - name: Porcoes Gratinadas
    sortOrder: 6
    channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
    status: needs_confirmation
    notes:
      - "Produto Proteinas esta bem definido, com uma ressalva no valor de Antepasto."
      - "Produto Batatas tem grupo 'Adicionais' marcado como obrigatorio; precisa confirmacao comercial."
    products:
      - name: Proteinas
        basePrice: 0.00
        description: ""
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes:
          - "Preco vem do grupo principal."
          - "Nome comercial pode precisar acento: Proteinas."
        groups:
          - name: Escolha 2 Proteinas
            required: true
            minimum: 2
            maximum: 2
            priceCalculation: sum
            status: needs_confirmation
            notes:
              - "O nome do grupo indica 2 escolhas; regra normalizada para 2/2."
            items:
              - { name: "Carne (Fraldinha)", price: 37.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Frango, price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Toscana, price: 17.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Antepasto de Berinjela", price: 99.00, quantity: 1, productType: component, status: needs_confirmation, notes: ["Valor suspeito; possivel 9.90."] }
          - name: Adicionais
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: Bacon, price: 6.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Queijo Mucarela", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Catupiry Original", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Catupiry 4 queijos", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Cheddar, price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Molhos
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: "Maionese da Casa", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Maionese Verde", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Maionese de Chimichurri", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Barbecue, price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Escolha as Bebidas
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: "Cha Ice Tea Leao Limao 450ml", price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Cha Ice Tea Leao Pessego 450ml", price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Fanta Guarana Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Garrafa 2 litros", price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Zero Garrafa 2 litros", price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Zero Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Sobremesas
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: "Mini Churros Doce de Leite", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }

      - name: Batatas
        basePrice: 0.00
        description: ""
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes:
          - "Nao existe grupo principal de tamanho neste produto, ao contrario da categoria Acompanhamentos."
          - "Grupo Adicionais aparece como obrigatorio no documento base."
        groups:
          - name: Escolha o melhor tempero
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: Sal, price: 0.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Lemon Pepper", price: 1.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Paprica, price: 1.50, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Adicionais
            required: true
            minimum: 1
            maximum: 99
            priceCalculation: sum
            status: needs_confirmation
            notes:
              - "Documento base marca como obrigatorio."
              - "Precisa validar se realmente exige uma cobertura."
            items:
              - { name: Bacon, price: 6.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Queijo Mucarela", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Catupiry Original", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Catupiry 4 queijos", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Cheddar, price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Molhos
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: "Maionese da Casa", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Maionese Verde", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Maionese de Chimichurri", price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: Barbecue, price: 3.50, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Escolha as Bebidas
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: "Cha Ice Tea Leao Limao 450ml", price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Cha Ice Tea Leao Pessego 450ml", price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Fanta Guarana Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Garrafa 2 litros", price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Zero Garrafa 2 litros", price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Zero Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
          - name: Sobremesas
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: ready
            notes: []
            items:
              - { name: "Mini Churros Doce de Leite", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }

  - name: Bebidas
    sortOrder: 7
    channels: [default, totem, delivery, ifood, 99food, whatsapp, instagram, keeta, messenger]
    status: needs_confirmation
    notes:
      - "Documento base traz nome 'Bebibas', provavelmente typo."
      - "Ha alerta de item e complemento sem preco."
    products:
      - name: Bebibas
        basePrice: 0.00
        description: ""
        type: product
        active: true
        featured: false
        status: needs_confirmation
        notes:
          - "Confirmar se o nome final e 'Bebidas'."
          - "Confirmar se a intencao e produto base zero com grupo de escolha."
        groups:
          - name: Escolha as Bebidas
            required: false
            minimum: 0
            maximum: 99
            priceCalculation: sum
            status: needs_confirmation
            notes:
              - "Grupo pode precisar ser obrigatorio com minimo 1."
            items:
              - { name: "Cha Ice Tea Leao Limao 450ml", price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Cha Ice Tea Leao Pessego 450ml", price: 10.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Fanta Guarana Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Garrafa 2 litros", price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Zero Garrafa 2 litros", price: 18.00, quantity: 1, productType: component, status: ready, notes: [] }
              - { name: "Coca Cola Zero Lata 350ml", price: 8.00, quantity: 1, productType: component, status: ready, notes: [] }
```

## Pendencias Antes de Subir

Estas pendencias bloqueiam uma subida totalmente automatica sem risco:

1. Confirmar a regra do grupo `Turbine sua Refeicao` nos lanches.
2. Confirmar se `Mini Churros`:
- e um produto simples sem grupo; ou
- e produto base zero com grupo obrigatorio; ou
- e produto base com grupo apenas seletor.
3. Completar os 6 grupos de `Monte seu prato`.
4. Corrigir ou confirmar `Antepasto de Berinjela = 99.00`.
5. Corrigir ou confirmar `Bebibas`.
6. Confirmar se o grupo de bebidas em `Bebibas` deve ser obrigatorio com `minimum: 1`.
7. Confirmar se `Batatas` em Porcoes Gratinadas realmente exige `Adicionais` obrigatorio.

## O Que Ja Esta Pronto

Sem necessidade de interpretacao adicional, ja estao praticamente prontos:

- categoria `Molhos`
- produto `Batata Frita` em `Acompanhamentos`
- grupos reutilizaveis `Adicionais`, `Molhos`, `Escolha as Bebidas`, `Sobremesas`
- grupo `Deseja remover algo`
- grupo `Escolha o melhor tempero`
- produto `Proteinas`, exceto o valor de `Antepasto de Berinjela`

## Recomendacao Operacional

Se a subida for feita ja pelo app existente, a ordem mais segura e:

1. Criar categorias.
2. Criar produtos simples reutilizaveis de molho, bebida, sobremesa e adicionais.
3. Criar produtos finais.
4. Vincular categoria de cada produto.
5. Criar grupos por produto.
6. Adicionar itens de cada grupo.
7. Validar os itens `needs_confirmation`.
8. Somente depois selecionar os produtos elegiveis na tela de integracao 99Food.
