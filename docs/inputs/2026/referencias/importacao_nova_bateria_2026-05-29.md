# Importacao nova bateria de evidencias - 2026-05-29

## Estado atual antes da importacao

- A base ja possui ingredientes, preparos, embalagens, produtos de venda, compras, itens de compra, inputs e gastos separados por papel operacional.
- A tabela de custo ativo usa o cadastro tecnico como fonte principal quando o item esta em modo `Cadastro`, mas tambem permite selecionar evidencia, ultima compra, media historica ou valor manual.
- `Sal` e `Sal sache refinado 0,8g` ja existem como cadastros separados. `Sal e pimenta` existe como preparo que consome `Sal` e `Pimenta-do-reino`.
- Carnes ativas do Gyros permanecem restritas a `Fraldinha`, `Frango cru (peito e sobrecoxa)` / `Frango preparado` e `Linguica toscana`.

## Modelo desejado nesta bateria

- Registrar as 18 evidencias enviadas como inputs rastreaveis em `docs/inputs/2026/2026-05/nova-bateria-2026-05-29/`.
- Criar compras apenas quando o documento representa insumo, embalagem, bebida ou alimento comprado.
- Criar gastos operacionais para limpeza, utensilios ou itens que nao entram em ficha tecnica.
- Mapear nomes de nota para cadastros tecnicos existentes sempre que fizer sentido.
- Manter itens como salsicha, bisteca da copa, sacolas reutilizaveis e itens de limpeza como historico/revisao ou gasto, sem virarem insumos ativos do cardapio.

## Cadastros que serao atualizados

- `Pao Frances com Parmesao`: novas evidencias de Padaria Versailles.
- `Fraldinha`: novas compras Frigo Noronha e Fonte Nova; custo cadastral nao deve ser piorado se ja houver evidencia mais recente equivalente.
- `Frango cru (peito e sobrecoxa)`: novas evidencias de file de sobrecoxa entram como historico do blend, sem criar novo insumo.
- `Linguica toscana`: nova evidencia Fonte Nova de 2026-05-21 pode atualizar o custo cadastral por kg.
- `Catupiry`: nova NFC-e Tenda 2026-05-19 documenta bisnaga/pote a R$ 66,90 e substitui referencia anterior marcada como revisao.
- `Batata pre-frita`: nova NFC-e Tenda 2026-05-15 documenta batata congelada e pode atualizar o custo cadastral.
- `Tomate` e `Cebola`: novas compras de hortifruti podem atualizar o custo cadastral quando a unidade for kg.
- `Mini churros congelado`: nova evidencia Meus Congelados 2026-05-14 documenta a compra recorrente.
- `Saco liso branco medio`, `Guardanapo sache` e outros itens de embalagem recebem historico de compra; so atualizam custo quando a unidade estiver clara.
- `Sal`: permanece sem nova compra nesta bateria; deve sair de "fonte web" para pendencia/revisao explicita, sem misturar com o sache.

## Cadastros que nao serao criados

- Nao criar `Salsicha`, `Bisteca da copa` ou novas carnes apenas porque aparecem na nota do acougue. Elas entram como historico/revisao da compra, pois nao fazem parte da ficha tecnica vigente.
- Nao criar novos ingredientes para limpeza, fita adesiva, sacola reutilizavel, alcool gel, papel higienico ou similares.
- Nao criar preparo novo de fraldinha ou linguica; o processo continua operacional.

## Produtos do catalogo afetados

- Produtos e combos com `Fraldinha`, `Frango preparado`, `Linguica toscana`, `Batata pre-frita`, `Catupiry`, `Tomate`, `Cebola`, `Mini churros`, `Pao Frances com Parmesao` e embalagens relacionadas podem ter CMV recalculado se o custo cadastral ativo for atualizado.
- Produtos afetados incluem lanches Alpha/Beta/Gamma, executivos Alpha/Beta/Gamma, combos, batatas, gratinados, molhos com vinagrete, churros e entregas que usam embalagem.

