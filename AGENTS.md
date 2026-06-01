# Regras do Projeto Gyros PWA

Estas regras existem para evitar confusao entre compra, preparo, produto vendido, processo operacional e evidencia fiscal.

## Vocabulário obrigatório

- **Ingrediente**: item comprado ou controlado como insumo de estoque/custo. Exemplos: fraldinha, peito de frango, sobrecoxa, linguiça toscana, muçarela, batata pré-frita, arroz cru, feijão cru.
- **Preparo**: item com composição, receita, rendimento ou custo técnico próprio antes de ser vendido ou usado em produto. Exemplos: frango preparado, vinagrete, manteiga com alho, maioneses, antepasto, arroz cozido, feijão cozido, sal e pimenta, açúcar com canela.
- **Embalagem/descartável**: item usado na montagem, entrega, porcionamento ou consumo. Exemplos: papel acoplado, pote 60ml, bandeja, caixa, guardanapo, talheres.
- **Produto de venda / catálogo**: item vendido ao cliente. Exemplos: Alpha Gyros, Combo Clássico, Batata Frita Média, Maionese Verde 60ml, Coca-Cola Lata 350ml.
- **Processo operacional**: fluxo físico, rotina, etapa, local, equipamento ou forma de manipulação. Exemplo: receber, gelar, retirar tripa, montar espeto, assar, porcionar, selar a vácuo, estocar e dar baixa.
- **Evidência/compra/input**: comprovante, nota, pedido, orçamento ou linha de compra. Nomes de evidência não devem virar insumo ativo automaticamente.

## Regra principal

Nunca misturar estes níveis no mesmo cadastro ou lista sem indicar o papel de cada item.

Compra ou item controlado como estoque/custo entra como **Ingrediente**. Item com receita, composição, rendimento ou custo técnico separado entra como **Preparo**. Etapas como temperar, assar, porcionar, armazenar ou dar baixa podem ficar em **Processo operacional** quando não houver preparo/custo separado nesta fase. Produto vendido entra como **Produto de venda / catálogo**.

## Proteínas do Gyros

- A fraldinha deve ser tratada como item técnico único de ingrediente/custo nesta fase: `Fraldinha`.
- Temperar, montar espeto, assar, fatiar, porcionar e selar a fraldinha ficam no processo operacional, sem criar `Fraldinha preparada` enquanto não houver custo/rendimento separado.
- O frango comprado em blend, peito + sobrecoxa, deve ser ingrediente ou grupo de ingredientes de compra.
- O frango temperado/assado/pronto para servir deve ser preparo: `Frango preparado`.
- A linguiça toscana deve ser tratada como item técnico único de ingrediente/custo nesta fase: `Linguiça toscana`.
- Retirar tripa, montar espeto, assar e porcionar a linguiça ficam no processo operacional, sem criar `Linguiça toscana preparada` enquanto não houver custo/rendimento separado.
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
