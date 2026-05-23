# Regras do Projeto Gyros PWA

Estas regras existem para evitar confusao entre compra, preparo, produto vendido e evidencia fiscal.

## Vocabulário obrigatório

- **Ingrediente**: item comprado ou controlado como insumo de estoque. Exemplos: fraldinha bovina crua, peito de frango, sobrecoxa, linguiça toscana, muçarela, batata pré-frita.
- **Preparo**: item produzido, transformado, porcionado ou finalizado pela operação antes de ser vendido ou usado em produto. Exemplos: fraldinha preparada, frango preparado, linguiça toscana preparada, vinagrete, manteiga com alho, maioneses, antepasto.
- **Embalagem/descartável**: item usado na montagem, entrega, porcionamento ou consumo. Exemplos: papel acoplado, pote 60ml, bandeja, caixa, guardanapo, talheres.
- **Produto do catálogo**: item vendido ao cliente. Exemplos: Alpha Gyros, Combo Clássico, Batata Frita Média, Maionese Verde 60ml, Coca-Cola Lata 350ml.
- **Evidência/compra/input**: comprovante, nota, pedido, orçamento ou linha de compra. Nomes de evidência não devem virar insumo ativo automaticamente.

## Regra principal

Nunca misturar estes níveis no mesmo cadastro ou lista sem indicar o papel de cada item.

Compra crua entra como **Ingrediente**. Item temperado, assado, misturado, drenado, porcionado, montado ou pronto para servir entra como **Preparo**. Produto vendido entra como **Produto do catálogo**.

## Proteínas do Gyros

- A fraldinha comprada em mercado, açougue ou fornecedor deve ser tratada como ingrediente de compra, por exemplo: `Fraldinha bovina crua`.
- A fraldinha temperada/assada/pronta para servir deve ser tratada como preparo, por exemplo: `Fraldinha preparada`.
- O frango comprado em blend, peito + sobrecoxa, deve ser ingrediente ou grupo de ingredientes de compra.
- O frango temperado/assado/pronto para servir deve ser preparo: `Frango preparado`.
- A linguiça toscana, mesmo sem tempero extra, deve ser preparo se a operação remove tripa, monta espeto, assa ou porciona antes de servir: `Linguiça toscana preparada`.
- Bacon em cubos, quando usado diretamente como adicional, pode permanecer como ingrediente.

## Evidências e históricos

- `Contrafilé` é histórico/obsoleto se não estiver no cadastro ativo do cardápio ou na ficha técnica vigente.
- Nomes de nota como `Fraldinha bovina`, `Fraldinha bovina vácuo` ou similares devem ser mapeados para o ingrediente/preparo correto, não adicionados como novos insumos sem revisão.
- Itens antigos, testes e compras avulsas devem ficar em seção de histórico/revisão, nunca na lista principal de insumos ativos.

## Antes de editar dados do PWA

Antes de alterar `app.js`, `gyros-custos-cardapio.json` ou exportações ERP, primeiro documentar:

1. O estado atual do PWA.
2. O modelo desejado.
3. Quais cadastros serão movidos, criados ou desativados.
4. Quais produtos do catálogo serão afetados.

Sem essa ponte, editar o PWA pode duplicar custo ou quebrar ficha técnica.
