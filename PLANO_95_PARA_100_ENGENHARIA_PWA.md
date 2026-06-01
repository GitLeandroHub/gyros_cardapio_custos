# Plano 95% para 100% - Engenharia PWA

Data: 2026-05-28

## Estado atual

O PWA esta em uma versao boa e utilizavel da Engenharia de Produtos e Processos.

A estrutura principal atual esta aprovada como base:

- Menu lateral simples: Dashboard e Engenharia de Produtos.
- Engenharia como fonte tecnica unica do PWA.
- Produtos de venda com ficha rica, foto, publicacao, preco, margem, composicao, grupos, embalagens e compras.
- Ingredientes, Preparos e Embalagens separados por papel tecnico real.
- Revenda separada de Ingredientes.
- Compras e evidencias como melhor visao de historico, comprovantes, fornecedores e precos comparaveis.
- Processos como local para fluxo operacional, sem misturar processo fisico com custo quando nao ha rendimento/custo proprio.

Esta fase nao e uma nova refatoracao ampla. E uma lapidacao cirurgica.

## Problema restante

Ainda existe uma diferenca de experiencia entre:

- visao de Engenharia do item;
- cadastro tecnico editavel do mesmo item.

O dado deveria ser entendido como unico, mas a UX ainda pode passar a sensacao de dois lugares diferentes.

Exemplo:

- `Antepasto de berinjela` em Preparos mostra leitura tecnica, familia, usos e custo.
- `Abrir cadastro tecnico` mostra o mesmo preparo em modo de manutencao, com rendimento, unidade ERP, custo ativo, fonte de custo e componentes.
- `Berinjela` aparece como ingrediente, como componente do preparo, como familia de compra e em Compras e evidencias.

Isso esta conceitualmente correto, mas a leitura precisa ficar mais clara e unificada.

## Modelo desejado

Cada item tecnico deve ter uma ficha unica de Engenharia.

Tipos:

- Produto de venda
- Ingrediente
- Preparo
- Embalagem
- Revenda
- Fornecedor
- Compra/evidencia
- Processo

Ao abrir um item, a ficha deve reunir:

- resumo tecnico;
- custo ativo;
- fonte do custo;
- rendimento, quando existir;
- unidade de compra e unidade ERP;
- componentes, quando existir;
- usos diretos e indiretos;
- historico de compra resumido;
- link para a visao mestre em Compras e evidencias;
- processo operacional vinculado;
- acoes de edicao no proprio contexto.

## Regra de UX

Nao deve parecer que existem dois registros.

Quando houver diferenca entre leitura e edicao, a interface deve deixar claro:

```text
Voce esta editando o mesmo item tecnico.
```

O botao `Abrir cadastro tecnico` deve evoluir para uma acao mais clara, como:

```text
Editar ficha tecnica
```

ou

```text
Editar dados tecnicos
```

## Compras e evidencias

`Compras e evidencias` continua sendo a visao mestre de auditoria.

Ingredientes, Preparos, Embalagens e Produtos de venda devem mostrar apenas o resumo relevante:

- status do custo;
- ultima compra ou fonte ativa;
- quantidade de compras encontradas;
- faixa historica quando fizer sentido;
- atalho para abrir a familia em Compras e evidencias.

Importante:

```text
Ter historico de compra nao significa que aquela compra ja alimenta o custo ativo.
```

Exemplo para Berinjela:

```text
Status do custo: Pesquisado / estimado
Historico encontrado: 2 compras
Acao sugerida: escolher compra como custo ativo ou fixar valor manual
```

## O que nao pode regredir

- Nao remover a ficha rica de Produtos de venda.
- Nao perder edicao rapida de quantidades em componentes de produto.
- Nao perder grupos obrigatorios e opcionais da ficha do produto.
- Nao misturar Revenda com Ingredientes.
- Nao voltar com `Insumos` como rotulo principal.
- Nao voltar com `Compras tecnicas`, `Gastos tecnicos` ou `Inputs tecnicos`.
- Nao deixar `Base de compra da porcao` como secao principal.
- Nao remover a organizacao dos Preparos por grupos operacionais.
- Nao reduzir Compras e evidencias para uma tabela pobre.
- Nao criar novos ingredientes a partir de nomes de notas sem revisao.

## Ajustes cirurgicos previstos

1. Trocar `Abrir cadastro tecnico` por uma acao mais clara.
2. Fazer a ficha de Engenharia do item incorporar os blocos bons do cadastro tecnico.
3. Manter o cadastro tecnico como modo de edicao, nao como uma area paralela.
4. Melhorar o status de custo de ingredientes estimados com historico encontrado.
5. Mostrar resumo de compras dentro da ficha do item, com atalho para Compras e evidencias.
6. Manter Compras e evidencias como mapa mestre.
7. Padronizar custo de preparos:
   - mostrar valor principal por kg/L/unidade;
   - mostrar valor por g/ml apenas como detalhe de calculo.
8. Garantir que clicar em componente leve para a ficha unificada do componente.
9. Em Preparos, tratar a composicao como receita padrao:
   - ingredientes e quantidades editaveis;
   - rendimento padrao editavel;
   - custo tecnico recalculado;
   - proporcao preservada como base da engenharia.

## Fora desta leva

Controle de producao real fica para Engenharia de Processos em etapa futura.

Nao implementar agora:

- producao diaria por lote;
- rendimento real por lote produzido;
- comparacao lote esperado x lote real;
- estoque de preparo produzido;
- baixa por lote;
- fotos e pesagens operacionais por lote.

## Criterio de aceite

A etapa so deve ser considerada pronta se:

- um preparo aberto nao parecer diferente do seu cadastro tecnico;
- um produto aberto tiver ficha completa, grupos e quantidades ajustaveis;
- um ingrediente aberto mostrar custo ativo, historico resumido e usos;
- uma compra/evidencia continuar mais rica que os resumos das fichas;
- o usuario conseguir entender onde editar sem procurar outra aba escondida;
- `node --check app.js` passar;
- `jq empty gyros-custos-cardapio.json` passar.

## Mini ajustes de leitura aplicados depois da revisao

Estado observado:

- Ingredientes mantinham custo, unidade e perda na lateral, mas a lista principal perdeu organizacao por familias reais.
- Preparos mantinham a organizacao operacional, mas cada card podia mostrar melhor rendimento, ERP, custo canonico e quantidade de componentes.

Modelo desejado:

- Ingredientes agrupados por familias operacionais reais: carnes, laticinios e frios, congelados/bases, hortifruti, cozinha/secos base, temperos/molhos/secos, bebidas/revenda, doceria e revisao.
- Cards de ingrediente com leitura rapida de procedencia, fornecedor, unidade, custo e perda.
- Cards de preparo mantendo os grupos existentes e exibindo rendimento, unidade ERP, custo canonico e componentes.

Alteracao feita:

- Ajuste limitado a leitura e agrupamento da Engenharia.
- Nenhum cadastro foi movido, criado ou desativado.
- Nenhuma regra de custo, composicao, precificacao ou exportacao ERP foi alterada.

Produtos afetados:

- Nenhum produto especifico foi alterado; a mudanca afeta apenas a exibicao de ingredientes e preparos ja existentes.

## Correcao final de leitura de custo canonico

Estado observado:

- A ficha de Ingredientes e Preparos ainda destacava custo por unidade pequena (`g` ou `ml`) como informacao principal.
- Isso fazia itens como Fraldinha aparecerem como `R$ 0,04 por g`, mesmo quando a decisao operacional e comercial e tomada por `kg`.
- Preparos como Sal e pimenta tambem apareciam como `R$ 0,02 por g`, quando o valor principal deveria ser o custo canonico por `kg`, `L` ou `un`.
- Historico de compra e fluxo operacional existem e devem continuar visiveis como apoio de auditoria.

Modelo desejado:

- Ingredientes: custo principal sempre em unidade canonica comparavel (`kg`, `L` ou `un`).
- Preparos: custo principal sempre por unidade canonica da receita (`kg`, `L` ou `un`), com custo por `g`/`ml` apenas como leitura de calculo.
- Embalagens: custo principal por `un`.
- Produtos de venda: continuam mostrando custo da ficha e componentes com suas quantidades.
- Historico de compra, fluxo operacional e custo ativo da Engenharia continuam presentes.

Alteracao planejada:

- Ajustar apenas a leitura das fichas e paineis de custo.
- Nao mover, criar ou desativar cadastros.
- Nao alterar composicoes, precos, regras de margem ou exportacao ERP.

Produtos afetados:

- Nenhum produto especifico sera alterado; os calculos existentes permanecem os mesmos. A mudanca e de apresentacao e clareza da fonte de custo.

## Ponte da tabela de custo ativo da Engenharia

Estado observado:

- A versao 95% tinha uma tabela de cadastro tecnico que ajudava a conferir varios itens de uma vez.
- A versao atual melhorou a ficha individual da Engenharia, mas a leitura em massa ficou menos eficiente.
- Hoje, ao clicar em `Editar ficha tecnica`, o usuario abre um modal. O modal e util para manutencao profunda, mas nao substitui uma tabela de decisao.
- Ingredientes e preparos ja mostram custo canonico nas fichas/cards, porem ainda falta uma tabela clara com o valor que realmente alimenta `Produtos de venda`.

Modelo desejado:

- Cada aba tecnica deve ter uma tabela de custo ativo, especialmente `Ingredientes`, `Preparos` e `Embalagens`.
- A tabela deve mostrar pelo menos:
  - item;
  - procedencia do custo ativo;
  - unidade canonica;
  - custo canonico ativo;
  - leitura de calculo quando houver unidade pequena (`g` ou `ml`);
  - fornecedor ou origem resumida quando fizer sentido;
  - status de auditoria/revisao.
- O custo canonico ativo e o valor usado para multiplicar as quantidades na ficha de `Produtos de venda` e nos grupos/adicionais.
- A quantidade continua pertencendo ao produto, grupo ou adicional.
- O custo ativo continua pertencendo ao ingrediente, preparo ou embalagem.
- O valor ativo pode vir de:
  - compra escolhida/fixada como referencia;
  - custo manual/acordado;
  - custo calculado pela receita;
  - estimativa;
  - fonte em revisao.
- A tabela nao deve assumir que a ultima compra e sempre o custo ativo. Ultima compra e historico; custo ativo e decisao tecnica.

Regra para edicao:

- A tabela deve permitir alterar rapidamente o custo ativo ou sua fonte, sem obrigar o usuario a abrir o modal completo.
- Ao salvar um custo ativo, todos os produtos, grupos e adicionais que consomem esse item devem recalcular imediatamente.
- O modal completo continua existindo para editar nome, pacote, rendimento, componentes, fornecedor, notas e demais campos tecnicos.
- A interface deve deixar claro quando o usuario esta alterando o custo usado no cardapio, e nao apenas um historico de compra.

Regra para preparos:

- Preparo interno usa custo calculado pela receita como padrao, mas precisa indicar status de auditoria quando rendimento, perdas ou processo ainda nao estiverem comprovados.
- A auditoria de preparo pertence a Engenharia de Processos: receita real, rendimento real, imagens, equipamentos, etapas, perdas e comprovacoes.
- Preparo comprado externamente pode ter custo ativo por compra ou custo manual, mas deve indicar origem externa e evidencia/revisao.
- `Custo calculado` e `custo ativo` podem coexistir: o calculado explica a ficha; o ativo pode ser fixado quando houver acordo operacional, parceiro ou decisao gerencial.

Cadastros movidos, criados ou desativados:

- Nenhum cadastro deve ser movido, criado ou desativado nesta etapa.
- Nenhum produto deve trocar componente nesta etapa.
- A mudanca inicial deve ser de leitura e edicao do custo ativo.
- Se forem necessarios novos campos, eles devem ser opcionais e compatíveis com a base atual:
  - `activeCostMode`;
  - `manualUnitCost`;
  - `activePurchaseItemId`;
  - campos equivalentes ja existentes ou reaproveitaveis para preparos.

Produtos afetados:

- Todos os produtos de venda sao afetados indiretamente porque usam os custos ativos dos itens tecnicos.
- A primeira validacao deve conferir pelo menos:
  - Alpha Gyros de Fraldinha;
  - Beta Gyros de Frango;
  - Gamma Gyros de Linguica Toscana;
  - Batata Frita Media 200g;
  - Batata Gratinada Grande 400g;
  - Maionese da Casa 60ml;
  - Vinagrete da Casa 60ml;
  - Executivo de Fraldinha.

Ordem sugerida de implementacao:

1. Criar uma tabela de custo ativo em `Ingredientes`, usando o mesmo custo que ja alimenta os produtos.
2. Repetir o padrao em `Preparos`, mostrando custo calculado, custo ativo, unidade canonica e status de auditoria.
3. Repetir em `Embalagens`, com unidade canonica `un`.
4. Adicionar edicao rapida de custo/fonte apenas depois da tabela estar correta.
5. Validar que alterar custo ativo recalcula `Produtos de venda` sem alterar quantidades.
6. Preservar `Compras e evidencias` como mapa mestre de auditoria, nao como tabela simplificada.

Criterio de aceite:

- A tabela de ingredientes mostra procedencia, unidade canonica e custo canonico ativo.
- A tabela de preparos mostra procedencia, unidade canonica, custo canonico ativo e custo calculado quando aplicavel.
- A tabela de embalagens mostra procedencia, unidade `un` e custo ativo.
- O valor exibido na tabela bate com o valor usado em `Produtos de venda`.
- O usuario entende se o custo vem de compra, manual, receita calculada, estimativa ou revisao.
- A edicao rapida de custo ativo recalcula produtos sem alterar ficha/quantidade.
- `node --check app.js` passa.
- `jq empty gyros-custos-cardapio.json` passa.
