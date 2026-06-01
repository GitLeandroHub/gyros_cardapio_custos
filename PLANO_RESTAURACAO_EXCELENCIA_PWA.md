# Plano de restauracao da Engenharia de Produtos e Processos

## Objetivo

Restaurar o PWA para uma versao coerente, rica e enxuta da Engenharia de Produtos e Processos, sem voltar cegamente ao estado antigo e sem manter a simplificacao ruim da ultima rodada.

A meta nao e esconder complexidade essencial. A meta e ter uma unica fonte tecnica bem organizada, com leitura clara para produto, custo, compra, evidencia, preparo, embalagem, revenda e processo operacional.

## Estado atual

- O menu lateral ficou mais simples, mas a experiencia perdeu riqueza operacional.
- `Produtos de venda` e `Catalogo/publicacao` ficaram separados de forma confusa ou incompleta.
- A tela de produto perdeu leitura suficiente de grupos obrigatorios, adicionais, embalagens, quantidades editaveis e custo por camada.
- `Ingredientes` e `Preparos` ficaram mais pobres em organizacao visual do que a versao anterior.
- `Compras tecnicas`, `Gastos tecnicos` e `Inputs tecnicos` criaram linguagem artificial e duplicada.
- `Revenda` ainda esta ambigua quando o mesmo item aparece como ingrediente/comprado.
- Algumas partes boas continuam no codigo atual, mas a navegacao e a hierarquia nao estao expondo o melhor conjunto.
- O backup em `/home/spawnbtc/Desktop/two-apps/gyros_cost_pwa-old-backup` contem referencias importantes para recuperar a boa leitura anterior.

## Fontes de verdade para a restauracao

- Repositorio atual: deve preservar dados recentes, evidencias importadas, custos novos, ajustes de ingredientes, preparos, embalagens e produtos.
- Backup antigo: deve ser usado como referencia de UX e organizacao, especialmente nas partes que estavam melhores antes da ultima refatoracao.
- Nenhuma copia integral do backup deve ser feita sem revisao. A restauracao sera por trechos e comportamentos.

## Modelo desejado

### Menu lateral

O PWA deve ter poucos menus laterais.

- `Dashboard`
- `Engenharia de Produtos e Processos`

Dentro de Engenharia, as abas devem representar papeis reais:

- `Produtos de venda`
- `Ingredientes`
- `Preparos`
- `Embalagens`
- `Revenda`
- `Compras e evidencias`
- `Processos`
- `Fornecedores`
- `Pendencias`
- `Parametros`

`Produtos de venda` deve absorver a melhor parte de catalogo, publicacao, fotos, preco, ficha, grupos e custos. Nao deve existir outra tela concorrente com informacoes melhores sobre o mesmo produto.

### Produtos de venda

Cada produto deve mostrar, no mesmo lugar:

- foto, categoria, publicacao e status;
- preco praticado, preco sugerido, custo tecnico, margem e regra de preco;
- componentes fixos auditaveis;
- grupos obrigatorios que entram no custo minimo;
- adicionais opcionais que somam preco/custo quando escolhidos;
- embalagens e repasses;
- compras/evidencias relevantes;
- usos diretos e indiretos;
- ajuste rapido de quantidade da ficha, sem obrigar o usuario a abrir um cadastro profundo.

O produto deve continuar sendo a fonte das quantidades. O custo vem do item tecnico, mas a quantidade consumida na ficha pertence ao produto/grupo.

### Ingredientes

Ingredientes sao itens comprados ou controlados como estoque/custo base.

A tela precisa manter a riqueza de cadastro:

- unidade base;
- unidade canonica ERP;
- pacote/base de compra;
- perda;
- custo unitario ativo;
- fonte do custo;
- ultima compra;
- historico;
- evidencias;
- onde aparece;
- opcao de custo manual/fixado.

Nao devem aparecer aqui preparos, misturas ou produtos vendidos.

### Preparos

Preparos sao itens produzidos, misturados, porcionados ou finalizados antes de uso/venda.

A tela deve recuperar a organizacao por grupos operacionais:

- Temperos e misturas
- Molhos e maioneses preparados
- Proteinas preparadas
- Vegetais preparados
- Bases e acompanhamentos
- Outros preparos

Cada preparo deve mostrar rendimento, unidade, custo por kg/l/ml/un, fonte ativa, ingredientes da receita, usos e possibilidade de custo manual/fixado.

### Embalagens

Embalagens continuam como aba propria porque entram na ficha, no repasse ou no CMV.

Itens de higiene, manutencao, limpeza, SBP, maquinas e pecas nao devem virar embalagem. Eles ficam em compras/evidencias ou gastos/processos, conforme o caso.

### Revenda

Revenda deve ser somente item comprado pronto e vendido como produto comercial ou repassado por unidade, como bebidas.

Se um item comprado pronto e apenas usado como ingrediente/preparo, ele nao deve duplicar em revenda. Deve aparecer como ingrediente com papel claro.

### Compras e evidencias

Deve existir uma unica area rica para notas, pedidos, comprovantes, orcamentos, prints e historico de compra.

Ela deve ser auditavel e clicavel, mas nao deve criar insumos automaticamente sem revisao.

Termos artificiais como `Compras tecnicas`, `Inputs tecnicos` e `Gastos tecnicos` devem ser removidos ou absorvidos por:

- `Compras e evidencias`
- `Processos`
- `Pendencias`

### Processos

Processos devem descrever operacao, nao substituir custo/ficha.

Exemplos:

- recebimento;
- armazenamento;
- preparo interno;
- preparo externo;
- porcionamento;
- congelamento;
- refrigeracao;
- baixa operacional.

Processos nao devem ser usados para inflar a ficha tecnica nesta fase.

## O que nao pode acontecer

- Nao perder grupos obrigatorios ou adicionais na tela de produto.
- Nao deixar produto sem ajuste rapido de quantidade.
- Nao manter `Base de compra da porcao` como informacao principal se ela atrapalhar a leitura.
- Nao duplicar produto vendido entre catalogo e engenharia com informacoes divergentes.
- Nao duplicar revenda e ingrediente sem explicacao de papel.
- Nao substituir a tela rica de compras/evidencias por uma tabela pobre.
- Nao apagar evidencias, imagens, notas, docs ou historico recente.
- Nao fazer copia integral do backup por cima do trabalho atual.

## Ordem de execucao

1. Mapear diferencas entre o PWA atual e o backup nas funcoes de produto, catalogo, preparos, ingredientes, compras/evidencias e navegacao.
2. Restaurar a tela completa de `Produtos de venda`, juntando a organizacao antiga com o cadastro tecnico rico atual.
3. Reintegrar grupos obrigatorios, adicionais opcionais, embalagens e quantidades editaveis no produto.
4. Recuperar a organizacao visual de `Preparos` por grupos operacionais.
5. Enriquecer `Ingredientes` com a leitura boa do cadastro tecnico: pacote, custo ativo, perdas, evidencias, historico e usos.
6. Consolidar `Compras e evidencias` como a unica area de auditoria de compras, comprovantes, gastos e arquivos.
7. Resolver `Revenda` como papel real, sem duplicar item comprado que nao e vendido diretamente.
8. Ajustar nomes de menus e abas para ficarem intuitivos e sem termos artificiais.
9. Validar com `node --check app.js` e `jq empty gyros-custos-cardapio.json`.

## Checklist de aceite

- Alpha Gyros mostra ficha completa, com componentes fixos, grupos, adicionais, embalagens, custo, margem e quantidades ajustaveis.
- Produtos de venda ficam organizados por categorias do cardapio.
- Preparos ficam agrupados por tipo operacional.
- Ingredientes mostram custo ativo, fonte, pacote, perda, historico e usos.
- Compras/evidencias mostram arquivos clicaveis e historico rico.
- Revenda nao duplica ingredientes sem motivo.
- Itens de higiene, manutencao e maquinas nao entram em ingrediente/preparo/embalagem por acidente.
- O usuario consegue entender onde altera quantidade, onde altera custo e onde consulta evidencia.
