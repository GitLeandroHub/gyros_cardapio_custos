# Arquitetura de navegacao - Engenharia de Processos

## Estado anterior

- A lateral tinha `Dashboard` e `Engenharia de Produtos`.
- A tela `Processos` ficava como aba interna da Engenharia de Produtos e Processos.
- A base de dados ja separava cadastros tecnicos, compras/evidencias e registros operacionais, mas a navegacao ainda misturava ficha tecnica e processo na mesma ancora lateral.

## Modelo desejado

- `Engenharia de Produtos` deve concentrar produto de venda, ingrediente, preparo, embalagem, revenda, compra/evidencia, fornecedor, pendencia e parametro.
- `Engenharia de Processos` deve ser a ancora propria para processo interno/externo, checklist, evidencia operacional, preparo auditavel, equipamento, rendimento real e perda real.
- Nesta etapa, a mudanca e somente de navegacao e intencao arquitetural.

## Mudancas aplicadas

- Criada a ancora lateral `Engenharia de Processos`.
- A pagina `operation` passa a acender essa ancora lateral.
- Removida a aba `Processos` da subnavegacao de `Engenharia de Produtos`.
- Criado cabecalho interno inicial de `Engenharia de Processos` com a aba `Processos` ativa.

## O que nao mudou

- Nenhum cadastro tecnico foi duplicado.
- Nenhum ingrediente, preparo, produto, compra ou evidencia mudou de papel.
- A tela de processos continua lendo a mesma base tecnica por baixo.
- Custos, exportacoes e fichas tecnicas continuam usando os mesmos dados.

## Produtos afetados

- Nenhum produto do catalogo foi alterado diretamente.
- O impacto esperado e apenas de navegacao/organizacao antes da portabilidade para o ERP.

