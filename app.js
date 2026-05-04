const SEED_DATA = {"meta":{"businessName":"Gyros Greek Barbecue","projectName":"PWA de Custos do Cardápio","version":1},"settings":{"targetMarginPct":68,"fixedAllocationMode":"custom_units","customMonthlyUnits":1200,"currency":"BRL","defaultMarkupPct":200,"sharedFixedSplitMode":"equal","sharedFixedSplitManual":{"gyros":100,"greguinho":0},"operationMonthlyUnits":{"gyros":1200,"greguinho":0},"greguinhoEnabled":false},"categories":[{"id":"cat_gyros","name":"Gyros da Casa","active":true,"scope":"gyros","code":"CAT_ASSINATURAS","description":"Lanches — Assinaturas (sem troca)","sortOrder":0},{"id":"cat_combos","name":"Combos","active":true,"scope":"gyros","code":"CAT_COMBOS","description":"Combos rápidos (sem configurar — só observação)","sortOrder":0},{"id":"cat_batatas","name":"Batatas Fritas","active":true,"scope":"gyros","code":"CAT_BATATAS","description":"Batatas (Fritas e Gratinadas)","sortOrder":0},{"id":"cat_gratinados","name":"Gratinados","active":true,"scope":"gyros","code":"CAT_GRATINADOS","description":"Porções Gratinadas (Carne)","sortOrder":0},{"id":"cat_almoco","name":"Almoço Executivo","active":true,"scope":"gyros","code":"CAT_ALMOCO","description":"Almoço (embalado por porções)","sortOrder":0},{"id":"cat_molhos","name":"Molhos e Extras","active":true,"scope":"gyros","code":"CAT_MOLHOS","description":"Molhos & Extras (à parte)","sortOrder":0},{"id":"cat_sobremesas","name":"Sobremesas","active":true,"scope":"gyros","code":"CAT_SOBREMESAS","description":"Sobremesas","sortOrder":0},{"id":"cat_bebidas","name":"Bebidas","active":true,"scope":"gyros","code":"CAT_BEBIDAS","description":"Bebidas","sortOrder":0},{"id":"cat_familia","name":"Combos Família","active":false,"scope":"gyros","code":"CAT_FAMILIA","description":"Combos Família","sortOrder":0},{"id":"cat_monte","name":"Monte o seu Gyros (personalização controlada)","active":false,"scope":"gyros","code":"CAT_MONTE","description":"Monte o seu Gyros (personalização controlada)","sortOrder":0},{"id":"cat_base_interna","name":"Base interna (não conta no cardápio)","active":false,"scope":"gyros","code":"CAT_BASE_INTERNA","description":"Base interna (não conta no cardápio)","sortOrder":0}],"ingredients":[{"id":"ing_pao_parmesao_pronto","name":"Pão Francês com Parmesão","baseUnit":"un","purchaseQty":1,"purchaseCost":1.8966,"wastePct":0,"supplier":"Padaria Versailles","supplierMode":"single","notes":"Pão francês com parmesão pronto, cerca de 90g, comprado direto pronto da Padaria Versailles.","scope":"gyros","sourceType":"documented","sourceReference":"Padaria Versailles: compra documentada em 31/03/2026 a R$ 2,50/un e compra reajustada em 11/04/2026 a R$ 1,8966/un","code":"ING_PAO_PARMESAO_PRONTO","description":"Pão francês com parmesão pronto, cerca de 90g, comprado direto pronto da Padaria Versailles.","erpUnit":"UN"},{"id":"ing_fraldinha","name":"Fraldinha preparada","baseUnit":"g","purchaseQty":1000,"purchaseCost":42.99,"wastePct":8,"supplier":"Açougue","notes":"Peso já cozido/preparado. Atualizado para R$ 42,99/kg.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_FRALDINHA","description":"Peso já cozido/preparado. Atualizado para R$ 42,99/kg.","erpUnit":"G"},{"id":"ing_frango","name":"Frango preparado","baseUnit":"g","purchaseQty":1000,"purchaseCost":19.99,"wastePct":5,"supplier":"Distribuidor","notes":"Peito e sobrecoxa. Atualizado para R$ 19,99/kg.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_FRANGO","description":"Peito e sobrecoxa. Atualizado para R$ 19,99/kg.","erpUnit":"G"},{"id":"ing_linguica","name":"Linguiça toscana preparada","baseUnit":"g","purchaseQty":1000,"purchaseCost":21.9,"wastePct":6,"supplier":"Açougue","notes":"Já pronta para montagem. Atualizado para R$ 19,99/kg.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_LINGUICA","description":"Já pronta para montagem. Atualizado para R$ 19,99/kg.","erpUnit":"G"},{"id":"ing_mucarela","name":"Muçarela","baseUnit":"g","purchaseQty":1000,"purchaseCost":36,"wastePct":2,"supplier":"Laticínio","notes":"Fatiada ou ralada","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_MUCARELA","description":"Fatiada ou ralada","erpUnit":"G"},{"id":"ing_catupiry","name":"Catupiry","baseUnit":"g","purchaseQty":1500,"purchaseCost":60.32,"wastePct":1,"supplier":"Laticínio","notes":"Bisnaga Catupiry 1,5kg","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_CATUPIRY","description":"Bisnaga Catupiry 1,5kg","erpUnit":"G"},{"id":"ing_cheddar","name":"Cheddar","baseUnit":"g","purchaseQty":1000,"purchaseCost":27,"wastePct":1,"supplier":"Laticínio","notes":"Molho/creme","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_CHEDDAR","description":"Molho/creme","erpUnit":"G"},{"id":"ing_4queijos","name":"Catupiry Sabor 4 queijos","baseUnit":"g","purchaseQty":1000,"purchaseCost":33,"wastePct":1,"supplier":"Laticínio","notes":"Base para gratinados","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_4QUEIJOS","description":"Base para gratinados","erpUnit":"G"},{"id":"ing_batata","name":"Batata pré-frita","baseUnit":"g","purchaseQty":14000,"purchaseCost":99.99,"wastePct":3,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Caixa com 7 pacotes de 2kg","scope":"gyros","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_BATATA","description":"Caixa com 7 pacotes de 2kg","erpUnit":"G"},{"id":"ing_tempero","name":"Sal","baseUnit":"g","purchaseQty":1000,"purchaseCost":8,"wastePct":0,"supplier":"Secos","notes":"Sal base para batata e cozinha; estimativa simples.","scope":"gyros","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_TEMPERO","description":"Sal base para batata e cozinha; estimativa simples.","erpUnit":"G"},{"id":"ing_arroz","name":"Arroz cozido","baseUnit":"g","purchaseQty":1000,"purchaseCost":9.5,"wastePct":2,"supplier":"Cozinha","notes":"Custo por kg pronto","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_ARROZ","description":"Custo por kg pronto","erpUnit":"G"},{"id":"ing_feijao","name":"Feijão cozido","baseUnit":"g","purchaseQty":1000,"purchaseCost":12,"wastePct":2,"supplier":"Cozinha","notes":"Custo por kg pronto","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_FEIJAO","description":"Custo por kg pronto","erpUnit":"G"},{"id":"ing_salada","name":"Salada antiga / folhas / tomate","baseUnit":"g","purchaseQty":1000,"purchaseCost":16,"wastePct":8,"supplier":"Hortifruti","notes":"Mantida so para historico. Os pratos agora usam vinagrete.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_SALADA","description":"Mantida so para historico. Os pratos agora usam vinagrete.","erpUnit":"G"},{"id":"ing_tomate","name":"Tomate","baseUnit":"g","purchaseQty":1000,"purchaseCost":9,"wastePct":6,"supplier":"Hortifruti","notes":"Para vinagrete","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_TOMATE","description":"Para vinagrete","erpUnit":"G"},{"id":"ing_cebola","name":"Cebola","baseUnit":"g","purchaseQty":1000,"purchaseCost":5.5,"wastePct":8,"supplier":"Hortifruti","notes":"Para vinagrete","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_CEBOLA","description":"Para vinagrete","erpUnit":"G"},{"id":"ing_pimentao","name":"Pimentão","baseUnit":"g","purchaseQty":1000,"purchaseCost":12,"wastePct":12,"supplier":"Hortifruti","notes":"Para vinagrete","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_PIMENTAO","description":"Para vinagrete","erpUnit":"G"},{"id":"ing_cheiro_verde","name":"Cheiro-verde","baseUnit":"g","purchaseQty":300,"purchaseCost":6,"wastePct":10,"supplier":"Hortifruti","notes":"Para vinagrete e maionese","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_CHEIRO_VERDE","description":"Para vinagrete e maionese","erpUnit":"G"},{"id":"ing_oleo_vinagre","name":"Azeite de oliva","baseUnit":"ml","purchaseQty":2000,"purchaseCost":130,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Galao 2L de azeite de oliva extra virgem","scope":"gyros","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_OLEO_VINAGRE","description":"Galao 2L de azeite de oliva extra virgem","erpUnit":"ML"},{"id":"ing_maionese_ind","name":"Base de maionese Quero","baseUnit":"g","purchaseQty":3000,"purchaseCost":24,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Maionese Grande Quero 3kg.","scope":"gyros","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_MAIONESE_IND","description":"Maionese Grande Quero 3kg.","erpUnit":"G"},{"id":"ing_alho","name":"Alho","baseUnit":"g","purchaseQty":1000,"purchaseCost":24,"wastePct":5,"supplier":"Hortifruti","notes":"Para maionese","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_ALHO","description":"Para maionese","erpUnit":"G"},{"id":"ing_limao","name":"Limao (suco)","baseUnit":"ml","purchaseQty":1000,"purchaseCost":10,"wastePct":10,"supplier":"Hortifruti","notes":"Base em ml para receitas e molhos","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_LIMAO","description":"Base em ml para receitas e molhos","erpUnit":"ML"},{"id":"ing_bbq","name":"Molho barbecue pronto","baseUnit":"ml","purchaseQty":2000,"purchaseCost":27.8,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Base pronta usada na receita do barbecue da casa.","scope":"gyros","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_BBQ","description":"Base pronta usada na receita do barbecue da casa.","erpUnit":"ML"},{"id":"ing_saches_mix","name":"Saches (ketchup/maionese/mostarda/pimenta)","baseUnit":"un","purchaseQty":866,"purchaseCost":104.51,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Mix medio comprado; revisar conforme a composicao real.","scope":"gyros","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_SACHES_MIX","description":"Mix medio comprado; revisar conforme a composicao real.","erpUnit":"UN"},{"id":"ing_massa_churros","name":"Mini churros congelado (doce de leite)","baseUnit":"g","purchaseQty":1000,"purchaseCost":29.9,"wastePct":2,"supplier":"Meus Congelados","notes":"Mini churros congelado ja recheado com doce de leite. Pacote de 1kg. Unidade aproximada de 20g.","scope":"gyros","sourceType":"manual","sourceReference":"Fornecedor informado pela operacao: Meus Congelados","lossPct":2,"code":"ING_MASSA_CHURROS","description":"Mini churros congelado ja recheado com doce de leite. Pacote de 1kg. Unidade aproximada de 20g.","erpUnit":"G"},{"id":"ing_rech_dl","name":"Doce de leite","baseUnit":"g","purchaseQty":1000,"purchaseCost":21,"wastePct":0,"supplier":"Doçaria","notes":"Recheio de churros e sobremesas.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","supplierMode":"single","code":"ING_RECH_DL","description":"Recheio de doce de leite para churros e sobremesas.","erpUnit":"G"},{"id":"ing_rech_choc","name":"Chocolate","baseUnit":"g","purchaseQty":1000,"purchaseCost":19,"wastePct":0,"supplier":"Doçaria","notes":"Recheio de churros e sobremesas.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","supplierMode":"single","code":"ING_RECH_CHOC","description":"Recheio de chocolate para churros e sobremesas.","erpUnit":"G"},{"id":"ing_rech_goi","name":"Goiabada","baseUnit":"g","purchaseQty":1000,"purchaseCost":14,"wastePct":0,"supplier":"Doçaria","notes":"Recheio de churros e sobremesas.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","supplierMode":"single","code":"ING_RECH_GOI","description":"Recheio de goiabada para churros e sobremesas.","erpUnit":"G"},{"id":"ing_refri_350","name":"Refrigerante lata 350ml","baseUnit":"un","purchaseQty":72,"purchaseCost":250.14,"wastePct":0,"supplier":"Bebidas","notes":"Media de Coca, Coca Zero, Fanta e Guarana em lata 350ml","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_REFRI_350","description":"Media de Coca, Coca Zero, Fanta e Guarana em lata 350ml","erpUnit":"UN"},{"id":"ing_garrafa_450","name":"Garrafa 450ml","baseUnit":"un","purchaseQty":12,"purchaseCost":51.6,"wastePct":0,"supplier":"Bebidas","notes":"Ice Tea 450ml nos sabores limao e pessego","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_GARRAFA_450","description":"Ice Tea 450ml nos sabores limao e pessego","erpUnit":"UN"},{"id":"ing_suco_natural","name":"Suco natural (garrafinha)","baseUnit":"un","purchaseQty":10,"purchaseCost":42,"wastePct":0,"supplier":"Produção","notes":"Custo médio por garrafinha","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_SUCO_NATURAL","description":"Custo médio por garrafinha","erpUnit":"UN"},{"id":"ing_manteiga","scope":"gyros","name":"Manteiga com sal","baseUnit":"g","purchaseQty":500,"purchaseCost":32.5,"wastePct":0,"supplier":"Mercado","notes":"Referencia de mercado: manteiga com sal 500g; revisar depois.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_MANTEIGA","description":"Referencia de mercado: manteiga com sal 500g; revisar depois.","erpUnit":"G"},{"id":"ing_mel","scope":"gyros","name":"Mel","baseUnit":"g","purchaseQty":500,"purchaseCost":20,"wastePct":0,"supplier":"Mercearia","notes":"Valor informado pelo usuario.","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_MEL","description":"Valor informado pelo usuario.","erpUnit":"G"},{"id":"ing_fumaca_po","scope":"gyros","name":"Fumaca em po","baseUnit":"g","purchaseQty":1000,"purchaseCost":19.43,"wastePct":0,"supplier":"Armazém São Vito","notes":"Compra inicial Zona Cerealista.","sourceType":"documented","sourceReference":"Pedido online Armazém São Vito nº 9678784","supplierMode":"multiple","code":"ING_FUMACA_PO","description":"Compra inicial Zona Cerealista.","erpUnit":"G"},{"id":"ing_mostarda_amarela","scope":"gyros","name":"Mostarda amarela","baseUnit":"g","purchaseQty":200,"purchaseCost":12.99,"wastePct":0,"supplier":"Mercado","notes":"Referencia de mercado: mostarda amarela squeeze 200g; revisar depois.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_MOSTARDA_AMARELA","description":"Referencia de mercado: mostarda amarela squeeze 200g; revisar depois.","erpUnit":"G"},{"id":"ing_lemon_pepper","scope":"gyros","name":"Lemon pepper","baseUnit":"g","purchaseQty":500,"purchaseCost":15,"wastePct":0,"supplier":"Zona Cerealista","notes":"Compra inicial Zona Cerealista.","sourceType":"documented","sourceReference":"Compra física na Zona Cerealista","supplierMode":"single","code":"ING_LEMON_PEPPER","description":"Compra inicial Zona Cerealista.","erpUnit":"G"},{"id":"ing_paprica_doce","scope":"gyros","name":"Paprica doce","baseUnit":"g","purchaseQty":500,"purchaseCost":10,"wastePct":0,"supplier":"Zona Cerealista","notes":"Compra inicial Zona Cerealista.","sourceType":"documented","sourceReference":"Compra física na Zona Cerealista","supplierMode":"single","code":"ING_PAPRICA_DOCE","description":"Compra inicial Zona Cerealista.","erpUnit":"G"},{"id":"ing_farofa_pronta","scope":"gyros","name":"Farofa pronta","baseUnit":"g","purchaseQty":500,"purchaseCost":8.99,"wastePct":0,"supplier":"Mercearia","notes":"Referencia de mercado: farofa temperada 500g; revisar depois.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_FAROFA_PRONTA","description":"Referencia de mercado: farofa temperada 500g; revisar depois.","erpUnit":"G"},{"id":"ing_ketchup","scope":"gyros","name":"Ketchup","baseUnit":"g","purchaseQty":1000,"purchaseCost":19.98,"wastePct":0,"supplier":"Mercearia","notes":"Referencia de mercado: ketchup 1kg; revisar depois.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_KETCHUP","description":"Referencia de mercado: ketchup 1kg; revisar depois.","erpUnit":"G"},{"id":"ing_agua_510","scope":"gyros","name":"Água mineral 510ml","baseUnit":"un","purchaseQty":12,"purchaseCost":15.05,"wastePct":0,"supplier":"Bebidas","notes":"Pacote com 12 unidades sem gás","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_AGUA_510","description":"Pacote com 12 unidades sem gás","erpUnit":"UN"},{"id":"ing_agua_gas_510","scope":"gyros","name":"Água com gás 510ml","baseUnit":"un","purchaseQty":12,"purchaseCost":19.75,"wastePct":0,"supplier":"Bebidas","notes":"Pacote com 12 unidades com gás","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_AGUA_GAS_510","description":"Pacote com 12 unidades com gás","erpUnit":"UN"},{"id":"ing_cerveja_bud_330","scope":"gyros","name":"Budweiser long neck 330ml","baseUnit":"un","purchaseQty":24,"purchaseCost":143,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Pacote com 24 unidades","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_CERVEJA_BUD_330","description":"Pacote com 24 unidades","erpUnit":"UN"},{"id":"ing_cerveja_heineken_330","scope":"gyros","name":"Heineken long neck 330ml","baseUnit":"un","purchaseQty":24,"purchaseCost":166,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Pacote com 24 unidades","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_CERVEJA_HEINEKEN_330","description":"Pacote com 24 unidades","erpUnit":"UN"},{"id":"ing_coca_2l","scope":"gyros","name":"Coca-Cola 2L","baseUnit":"un","purchaseQty":6,"purchaseCost":65.72,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Pacote com 6 unidades","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_COCA_2L","description":"Pacote com 6 unidades","erpUnit":"UN"},{"id":"ing_h2o_500","scope":"gyros","name":"H2O limão 500ml","baseUnit":"un","purchaseQty":12,"purchaseCost":56.1,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Pacote com 12 unidades","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_H2O_500","description":"Pacote com 12 unidades","erpUnit":"UN"},{"id":"ing_limoneto_500","scope":"gyros","name":"Limoneto sem açúcar 500ml","baseUnit":"un","purchaseQty":12,"purchaseCost":56.1,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"Pacote com 12 unidades","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_LIMONETO_500","description":"Pacote com 12 unidades","erpUnit":"UN"},{"id":"ing_schweppes_350","scope":"gyros","name":"Schweppes Citrus 350ml","baseUnit":"un","purchaseQty":6,"purchaseCost":23.19,"wastePct":0,"supplier":"Bebidas","notes":"Pacote com 6 unidades","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_SCHWEPPES_350","description":"Pacote com 6 unidades","erpUnit":"UN"},{"id":"ing_sprite_350","scope":"gyros","name":"Sprite 350ml","baseUnit":"un","purchaseQty":6,"purchaseCost":21.96,"wastePct":0,"supplier":"Bebidas","notes":"Pacote com 6 unidades","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_SPRITE_350","description":"Pacote com 6 unidades","erpUnit":"UN"},{"id":"ing_delvalle_uva_290","scope":"gyros","name":"Del Valle Uva 290ml","baseUnit":"un","purchaseQty":6,"purchaseCost":22.01,"wastePct":0,"supplier":"Bebidas","notes":"Pacote com 6 unidades","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_DELVALLE_UVA_290","description":"Pacote com 6 unidades","erpUnit":"UN"},{"id":"ing_bacon_cubos","scope":"gyros","name":"Bacon em cubos","baseUnit":"g","purchaseQty":2000,"purchaseCost":50.94,"wastePct":0,"supplier":"PMG Comércio de Frios e Laticínios","notes":"2 pacotes de 1kg","sourceType":"documented","sourceReference":"Venda PMG nº 8997086","supplierMode":"single","code":"ING_BACON_CUBOS","description":"2 pacotes de 1kg","erpUnit":"G"},{"id":"ing_oleo_algodao","scope":"gyros","name":"Óleo de algodão","baseUnit":"ml","purchaseQty":3600,"purchaseCost":36.16,"wastePct":0,"supplier":"Mercearia","notes":"4 frascos de 900ml","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_OLEO_ALGODAO","description":"4 frascos de 900ml","erpUnit":"ML"},{"id":"ing_sal_sache","scope":"gyros","name":"Sal sachê refinado 0,8g","baseUnit":"un","purchaseQty":1000,"purchaseCost":13.3,"wastePct":0,"supplier":"Descartáveis","notes":"Caixa com 1000 sachês","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_SAL_SACHE","description":"Caixa com 1000 sachês","erpUnit":"UN"},{"id":"ing_chimichurri","scope":"gyros","name":"Chimichurri","baseUnit":"g","purchaseQty":500,"purchaseCost":19.42,"wastePct":0,"supplier":"Armazém São Vito","notes":"Compra inicial informada pelo projeto: pacote com 500g","sourceType":"documented","sourceReference":"Pedido online Armazém São Vito nº 9678784","supplierMode":"single","code":"ING_CHIMICHURRI","description":"Compra inicial informada pelo projeto: pacote com 500g","erpUnit":"G"},{"id":"ing_pimenta_reino","scope":"gyros","name":"Pimenta-do-reino","baseUnit":"g","purchaseQty":500,"purchaseCost":34.84,"wastePct":0,"supplier":"Armazém São Vito","notes":"Pimenta-do-reino em grão, pacote de 500g, documentada em 25/02/2026.","sourceType":"documented","sourceReference":"Pedido online Armazém São Vito nº 9678784","code":"ING_PIMENTA_REINO","description":"Pimenta-do-reino em grão 500g","erpUnit":"G"},{"id":"ing_acucar_canela","name":"Acucar com canela","baseUnit":"g","purchaseQty":1000,"purchaseCost":12,"wastePct":0,"supplier":"Mercearia / referência web","notes":"Mistura simples para polvilhar o churros. Custo de referencia; revisar depois.","scope":"gyros","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_ACUCAR_CANELA","description":"Mistura simples para polvilhar o churros. Custo de referencia; revisar depois.","erpUnit":"G"},{"id":"ing_berinjela","scope":"gyros","name":"Berinjela","baseUnit":"g","purchaseQty":1000,"purchaseCost":7.98,"wastePct":18,"supplier":"Hortifruti / referência web","notes":"Valor estimado por kg para montar o antipasto de berinjela; revisar depois.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_BERINJELA","description":"Valor estimado por kg para montar o antipasto de berinjela; revisar depois.","erpUnit":"G"},{"id":"ing_vinagre","scope":"gyros","name":"Vinagre","baseUnit":"ml","purchaseQty":750,"purchaseCost":3.99,"wastePct":0,"supplier":"Mercearia / referência web","notes":"Usado só para o descanso da berinjela.","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_VINAGRE","description":"Usado só para o descanso da berinjela.","erpUnit":"ML"},{"id":"ing_pimentao_vermelho","scope":"gyros","name":"Pimentão vermelho","baseUnit":"g","purchaseQty":1000,"purchaseCost":29.49,"wastePct":15,"supplier":"Hortifruti / referência web","notes":"Estimativa de mercado para o antipasto de berinjela.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_PIMENTAO_VERMELHO","description":"Estimativa de mercado para o antipasto de berinjela.","erpUnit":"G"},{"id":"ing_pimentao_amarelo","scope":"gyros","name":"Pimentão amarelo","baseUnit":"g","purchaseQty":1000,"purchaseCost":29.49,"wastePct":15,"supplier":"Hortifruti / referência web","notes":"Estimativa de mercado para o antipasto de berinjela.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_PIMENTAO_AMARELO","description":"Estimativa de mercado para o antipasto de berinjela.","erpUnit":"G"},{"id":"ing_cebola_roxa","scope":"gyros","name":"Cebola roxa","baseUnit":"g","purchaseQty":1000,"purchaseCost":13.5,"wastePct":10,"supplier":"Hortifruti / referência web","notes":"Estimativa de mercado para o antipasto de berinjela.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_CEBOLA_ROXA","description":"Estimativa de mercado para o antipasto de berinjela.","erpUnit":"G"},{"id":"ing_tomate_seco","scope":"gyros","name":"Tomate seco","baseUnit":"g","purchaseQty":500,"purchaseCost":49.9,"wastePct":0,"supplier":"Mercearia / referência web","notes":"Estimativa intermediária para tomate seco; revisar depois.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_TOMATE_SECO","description":"Estimativa intermediária para tomate seco; revisar depois.","erpUnit":"G"},{"id":"ing_shoyu","scope":"gyros","name":"Shoyu","baseUnit":"ml","purchaseQty":500,"purchaseCost":14.99,"wastePct":0,"supplier":"Mercearia / referência web","notes":"Estimativa para molho shoyu tradicional 500ml.","sourceType":"estimated","sourceReference":"Pesquisa web / estimativa","code":"ING_SHOYU","description":"Estimativa para molho shoyu tradicional 500ml.","erpUnit":"ML"},{"id":"ing_manjericao","scope":"gyros","name":"Manjericão","baseUnit":"g","purchaseQty":20,"purchaseCost":4.99,"wastePct":10,"supplier":"Hortifruti / referência web","notes":"Maço pequeno.","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_MANJERICAO","description":"Maço pequeno.","erpUnit":"G"},{"id":"ing_louro","scope":"gyros","name":"Louro","baseUnit":"g","purchaseQty":20,"purchaseCost":5.49,"wastePct":0,"supplier":"Mercearia / referência web","notes":"Folhas secas.","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_LOURO","description":"Folhas secas.","erpUnit":"G"},{"id":"ing_oregano","scope":"gyros","name":"Orégano","baseUnit":"g","purchaseQty":20,"purchaseCost":4.99,"wastePct":0,"supplier":"Mercearia / referência web","notes":"Tempero seco.","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_OREGANO","description":"Tempero seco.","erpUnit":"G"},{"id":"ing_pimenta_calabresa","scope":"gyros","name":"Pimenta calabresa","baseUnit":"g","purchaseQty":50,"purchaseCost":6.99,"wastePct":0,"supplier":"Mercearia / referência web","notes":"Tempero seco.","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_PIMENTA_CALABRESA","description":"Tempero seco.","erpUnit":"G"},{"id":"ing_coca_zero_2l","scope":"gyros","name":"Coca-Cola Zero 2L","baseUnit":"un","purchaseQty":6,"purchaseCost":65.72,"wastePct":0,"supplier":"Bebidas","notes":"Sem compra específica ainda; custo espelhado provisoriamente na Coca-Cola 2L.","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","code":"ING_COCA_ZERO_2L","description":"Sem compra específica ainda; custo espelhado provisoriamente na Coca-Cola 2L.","erpUnit":"UN"},{"scope":"gyros","wastePct":0,"supplierMode":"single","erpUnit":"G","id":"ing_alho_po","name":"Alho em pó","baseUnit":"g","purchaseQty":500,"purchaseCost":11.85,"supplier":"Armazém São Vito","sourceType":"documented","sourceReference":"Pedido online Armazém São Vito nº 9678784","notes":"Pacote de 500g documentado em 25/02/2026.","description":"Alho em pó 500g"},{"scope":"gyros","wastePct":0,"supplierMode":"single","erpUnit":"G","id":"ing_cebola_po","name":"Cebola em pó","baseUnit":"g","purchaseQty":500,"purchaseCost":14.92,"supplier":"Armazém São Vito","sourceType":"documented","sourceReference":"Pedido online Armazém São Vito nº 9678784","notes":"Pacote de 500g documentado em 25/02/2026.","description":"Cebola em pó 500g"},{"scope":"gyros","wastePct":0,"supplierMode":"single","erpUnit":"G","id":"ing_caldo_galinha_po","name":"Caldo de galinha","baseUnit":"g","purchaseQty":1000,"purchaseCost":15.09,"supplier":"Armazém São Vito","sourceType":"documented","sourceReference":"Pedido online Armazém São Vito nº 9678784","notes":"Pacote de 1kg documentado em 25/02/2026.","description":"Caldo de galinha 1kg"},{"scope":"gyros","wastePct":0,"supplierMode":"single","erpUnit":"G","id":"ing_canela_moida","name":"Canela moída","baseUnit":"g","purchaseQty":200,"purchaseCost":5.19,"supplier":"Armazém São Vito","sourceType":"documented","sourceReference":"Pedido online Armazém São Vito nº 9678784","notes":"Pacote de 200g documentado em 25/02/2026.","description":"Canela moída 200g"}],"packaging":[{"id":"pkg_lanche","name":"Papel acoplado mono frios 30x38","purchaseQty":400,"purchaseCost":27,"notes":"Involucro de cada lanche do Gyros.","scope":"gyros","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_LANCHE","description":"Involucro de cada lanche do Gyros.","erpUnit":"UN"},{"id":"pkg_bat_p","name":"Saco de papel hamburgao plastificado","purchaseQty":100,"purchaseCost":5.95,"notes":"Batata M (200g) e churros.","scope":"gyros","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_BAT_P","description":"Batata M (200g) e churros.","erpUnit":"UN"},{"id":"pkg_bat_m","name":"Saco de papel mono 1/2 kg plastificado","purchaseQty":100,"purchaseCost":7.5,"notes":"Historico: antiga embalagem intermediaria.","scope":"gyros","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_BAT_M","description":"Historico: antiga embalagem intermediaria.","erpUnit":"UN"},{"id":"pkg_bat_g","name":"Saco de papel mono 1/2 kg plastificado","purchaseQty":100,"purchaseCost":7.5,"notes":"Batata G (400g).","scope":"gyros","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_BAT_G","description":"Batata G (400g).","erpUnit":"UN"},{"id":"pkg_almoco","name":"Caixa marmita branca","purchaseQty":150,"purchaseCost":426.09,"notes":"Estoque atual do Gyros; custo historico por unidade R$ 2,84.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","supplier":"","code":"PKG_ALMOCO","description":"Estoque atual do Gyros; custo historico por unidade R$ 2,84.","erpUnit":"UN"},{"id":"pkg_potinho_30","name":"Pote 60ml branco G697","purchaseQty":25,"purchaseCost":5.9,"notes":"Mantido como alias temporario do pote 60ml; revisar se seguira em uso.","scope":"gyros","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_POTINHO_30","description":"Mantido como alias temporario do pote 60ml; revisar se seguira em uso.","erpUnit":"UN"},{"id":"pkg_potinho_60","name":"Pote 60ml branco G697","purchaseQty":25,"purchaseCost":5.9,"notes":"Assumido pacote com 25 unidades; revisar quantidade real do fornecedor.","scope":"gyros","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_POTINHO_60","description":"Assumido pacote com 25 unidades; revisar quantidade real do fornecedor.","erpUnit":"UN"},{"id":"pkg_sobremesa","name":"Saco de papel hamburgao plastificado","purchaseQty":100,"purchaseCost":5.95,"notes":"Saquinho para churros.","scope":"gyros","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_SOBREMESA","description":"Saquinho para churros.","erpUnit":"UN"},{"id":"pkg_sacola_delivery","name":"Saco liso branco medio","purchaseQty":400,"purchaseCost":335,"notes":"Samppael, incluindo frete rateado.","scope":"gyros","sourceType":"documented","sourceReference":"Pedido de venda Samppel nº 10002","supplier":"Samppel","supplierMode":"single","code":"PKG_SACOLA_DELIVERY","description":"Samppael, incluindo frete rateado.","erpUnit":"UN"},{"id":"pkg_guardanapo","name":"Guardanapo sache 28x20,5 liso","purchaseQty":250,"purchaseCost":38.5,"notes":"Usado no almoco; lanches podem migrar depois se desejado.","scope":"gyros","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_GUARDANAPO","description":"Usado no almoco; lanches podem migrar depois se desejado.","erpUnit":"UN"},{"id":"pkg_combo_familia","name":"Caixa combo familia","purchaseQty":50,"purchaseCost":69,"notes":"Sem alteracao nesta rodada.","scope":"gyros","sourceType":"documented","sourceReference":"Lista de compras, nota fiscal ou orçamento","supplier":"","code":"PKG_COMBO_FAMILIA","description":"Sem alteracao nesta rodada.","erpUnit":"UN"},{"id":"pkg_talher_kit","scope":"gyros","name":"Kit talheres","purchaseQty":50,"purchaseCost":24.5,"notes":"Para pratos de almoco do Gyros.","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_TALHER_KIT","description":"Para pratos de almoco do Gyros.","erpUnit":"UN"},{"id":"pkg_potinho_feijao","scope":"gyros","name":"Pote redondo 145ml com sobretampa","purchaseQty":24,"purchaseCost":8.2,"notes":"Para feijao do almoco.","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_POTINHO_FEIJAO","description":"Para feijao do almoco.","erpUnit":"UN"},{"id":"pkg_bandeja_m90","scope":"gyros","name":"Bandeja aluminio M90 220ml","purchaseQty":100,"purchaseCost":46.9,"notes":"Porcao de 220ml para 200g de batata ou proteina gratinada.","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_BANDEJA_M90","description":"Porcao de 220ml para 200g de batata ou proteina gratinada.","erpUnit":"UN"},{"id":"pkg_bandeja_m120","scope":"gyros","name":"Bandeja aluminio M120 500ml","purchaseQty":100,"purchaseCost":66.9,"notes":"Porcao de 500ml para 400g de batata ou proteina gratinada.","sourceType":"documented","sourceReference":"Orçamento Bom Clima nº 343","supplier":"Bom Clima Embalagens","supplierMode":"single","code":"PKG_BANDEJA_M120","description":"Porcao de 500ml para 400g de batata ou proteina gratinada.","erpUnit":"UN"}],"recipes":[{"id":"rec_pao_parmesao","name":"Pão Francês com Parmesão","yieldQty":1,"yieldUnit":"un","storage":"Produção do lanche","notes":"Pão francês com parmesão pronto do fornecedor. A manteiga com alho entra na hora de finalizar o lanche.","components":[{"refType":"ingredient","refId":"ing_pao_parmesao_pronto","qty":1}],"scope":"gyros","code":"REC_PAO_PARMESAO","description":"Pão francês com parmesão pronto do fornecedor. A manteiga com alho entra na hora de finalizar o lanche."},{"id":"rec_vinagrete","name":"Vinagrete da casa","yieldQty":600,"yieldUnit":"ml","storage":"Descanso refrigerado","notes":"Tomate, cebola, limao, cheiro-verde, azeite, sal e pimenta","components":[{"refType":"ingredient","refId":"ing_tomate","qty":300},{"refType":"ingredient","refId":"ing_cebola","qty":150},{"refType":"ingredient","refId":"ing_cheiro_verde","qty":50},{"refType":"ingredient","refId":"ing_oleo_vinagre","qty":60},{"refType":"ingredient","refId":"ing_limao","qty":60},{"refType":"ingredient","refId":"ing_tempero","qty":6}],"scope":"gyros","code":"REC_VINAGRETE","description":"Tomate, cebola, limao, cheiro-verde, azeite, sal e pimenta"},{"id":"rec_maionese","name":"Maionese Grill","yieldQty":440,"yieldUnit":"g","storage":"Descanso refrigerado","notes":"Assumido: 400g base de maionese Quero + 24g de fumaca em po + 15g de mostarda amarela.","components":[{"refType":"ingredient","refId":"ing_maionese_ind","qty":400},{"refType":"ingredient","refId":"ing_fumaca_po","qty":24},{"refType":"ingredient","refId":"ing_mostarda_amarela","qty":15}],"scope":"gyros","code":"REC_MAIONESE","description":"Assumido: 400g base de maionese Quero + 24g de fumaca em po + 15g de mostarda amarela."},{"id":"rec_batata_p","name":"Batata frita base M","yieldQty":1,"yieldUnit":"un","storage":"Quente / fritadeira","notes":"Porcao M de 200g, sal padrao.","components":[{"refType":"ingredient","refId":"ing_batata","qty":150},{"refType":"ingredient","refId":"ing_tempero","qty":3}],"scope":"gyros","code":"REC_BATATA_P","description":"Porcao M de 200g, sal padrao."},{"id":"rec_batata_m","name":"Batata frita base media (historico 120g)","yieldQty":1,"yieldUnit":"un","storage":"Quente / fritadeira","notes":"Receita antiga mantida apenas para historico.","components":[{"refType":"ingredient","refId":"ing_batata","qty":120},{"refType":"ingredient","refId":"ing_tempero","qty":3}],"scope":"gyros","code":"REC_BATATA_M","description":"Receita antiga mantida apenas para historico."},{"id":"rec_batata_g","name":"Batata frita base G","yieldQty":1,"yieldUnit":"un","storage":"Quente / fritadeira","notes":"Porcao G de 400g, sal padrao.","components":[{"refType":"ingredient","refId":"ing_batata","qty":400},{"refType":"ingredient","refId":"ing_tempero","qty":8}],"scope":"gyros","code":"REC_BATATA_G","description":"Porcao G de 400g, sal padrao."},{"id":"rec_batata_grat_p","name":"Batata gratinada base M","yieldQty":1,"yieldUnit":"un","storage":"Quente / fritadeira","notes":"Base da gratinada M com 100g de batata.","components":[{"refType":"ingredient","refId":"ing_batata","qty":130},{"refType":"ingredient","refId":"ing_tempero","qty":2.6}],"scope":"gyros","code":"REC_BATATA_GRAT_P","description":"Base da gratinada M com 100g de batata."},{"id":"rec_batata_grat_g","name":"Batata gratinada base G","yieldQty":1,"yieldUnit":"un","storage":"Quente / fritadeira","notes":"Base da gratinada G com 220g de batata.","components":[{"refType":"ingredient","refId":"ing_batata","qty":290},{"refType":"ingredient","refId":"ing_tempero","qty":5.8}],"scope":"gyros","code":"REC_BATATA_GRAT_G","description":"Base da gratinada G com 220g de batata."},{"id":"rec_grat_muc","name":"Cobertura gratinada muçarela","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrão para gratinar","components":[{"refType":"ingredient","refId":"ing_mucarela","qty":45}],"scope":"gyros","code":"REC_GRAT_MUC","description":"Cobertura padrão para gratinar"},{"id":"rec_grat_cat","name":"Cobertura gratinada catupiry","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura com catupiry","components":[{"refType":"ingredient","refId":"ing_catupiry","qty":50}],"scope":"gyros","code":"REC_GRAT_CAT","description":"Cobertura com catupiry"},{"id":"rec_grat_cheddar","name":"Cobertura gratinada cheddar","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura com cheddar","components":[{"refType":"ingredient","refId":"ing_cheddar","qty":50}],"scope":"gyros","code":"REC_GRAT_CHEDDAR","description":"Cobertura com cheddar"},{"id":"rec_grat_4q","name":"Cobertura gratinada 4 queijos","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura com mix 4 queijos","components":[{"refType":"ingredient","refId":"ing_4queijos","qty":50}],"scope":"gyros","code":"REC_GRAT_4Q","description":"Cobertura com mix 4 queijos"},{"id":"rec_prato_alpha","name":"Prato Alpha base","yieldQty":1,"yieldUnit":"un","storage":"Montagem almoço","notes":"Prato com fraldinha, feijao em pote e vinagrete/farofa em potes de 60ml.","components":[{"refType":"ingredient","refId":"ing_arroz","qty":150},{"refType":"ingredient","refId":"ing_feijao","qty":100},{"refType":"recipe","refId":"rec_vinagrete","qty":60},{"refType":"ingredient","refId":"ing_farofa_pronta","qty":40},{"refType":"ingredient","refId":"ing_fraldinha","qty":150}],"scope":"gyros","code":"REC_PRATO_ALPHA","description":"Prato com fraldinha, feijao em pote e vinagrete/farofa em potes de 60ml."},{"id":"rec_prato_beta","name":"Prato Beta base","yieldQty":1,"yieldUnit":"un","storage":"Montagem almoço","notes":"Prato com frango, feijao em pote e vinagrete/farofa em potes de 60ml.","components":[{"refType":"ingredient","refId":"ing_arroz","qty":150},{"refType":"ingredient","refId":"ing_feijao","qty":100},{"refType":"recipe","refId":"rec_vinagrete","qty":60},{"refType":"ingredient","refId":"ing_farofa_pronta","qty":40},{"refType":"ingredient","refId":"ing_frango","qty":150}],"scope":"gyros","code":"REC_PRATO_BETA","description":"Prato com frango, feijao em pote e vinagrete/farofa em potes de 60ml."},{"id":"rec_prato_gamma","name":"Prato Gamma base","yieldQty":1,"yieldUnit":"un","storage":"Montagem almoço","notes":"Prato com linguica, feijao em pote e vinagrete/farofa em potes de 60ml.","components":[{"refType":"ingredient","refId":"ing_arroz","qty":150},{"refType":"ingredient","refId":"ing_feijao","qty":100},{"refType":"recipe","refId":"rec_vinagrete","qty":60},{"refType":"ingredient","refId":"ing_farofa_pronta","qty":40},{"refType":"ingredient","refId":"ing_linguica","qty":150}],"scope":"gyros","code":"REC_PRATO_GAMMA","description":"Prato com linguica, feijao em pote e vinagrete/farofa em potes de 60ml."},{"id":"rec_manteiga_alho","scope":"gyros","name":"Manteiga com alho","yieldQty":530,"yieldUnit":"g","storage":"Geladeira / producao do lanche","notes":"Assumido: 500g de manteiga + 30g de alho triturado (3 colheres cheias).","components":[{"refType":"ingredient","refId":"ing_manteiga","qty":500},{"refType":"ingredient","refId":"ing_alho","qty":30}],"code":"REC_MANTEIGA_ALHO","description":"Assumido: 500g de manteiga + 30g de alho triturado (3 colheres cheias)."},{"id":"rec_barbecue_casa","scope":"gyros","name":"Barbecue da casa","yieldQty":3150,"yieldUnit":"g","storage":"Molheira / refrigerado","notes":"Receita: 2kg de molho barbecue pronto + 1kg de ketchup + 150g de mel.","components":[{"refType":"ingredient","refId":"ing_bbq","qty":2000},{"refType":"ingredient","refId":"ing_ketchup","qty":1000},{"refType":"ingredient","refId":"ing_mel","qty":150}],"code":"REC_BARBECUE_CASA","description":"Receita: 2kg de molho barbecue pronto + 1kg de ketchup + 150g de mel."},{"id":"rec_tempero_batata_plus","scope":"gyros","name":"Tempero premium para batata","yieldQty":100,"yieldUnit":"g","storage":"Seco / mise en place","notes":"Assumido 50% lemon pepper e 50% paprica doce; usar apenas como adicional opcional.","components":[{"refType":"ingredient","refId":"ing_lemon_pepper","qty":50},{"refType":"ingredient","refId":"ing_paprica_doce","qty":50}],"code":"REC_TEMPERO_BATATA_PLUS","description":"Assumido 50% lemon pepper e 50% paprica doce; usar apenas como adicional opcional."},{"id":"rec_grat_muc_p","scope":"gyros","name":"Cobertura gratinada muçarela pequena","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrao para porcao M; revisar depois se necessario.","components":[{"refType":"ingredient","refId":"ing_mucarela","qty":90}],"code":"REC_GRAT_MUC_P","description":"Cobertura padrao para porcao M; revisar depois se necessario."},{"id":"rec_grat_cat_p","scope":"gyros","name":"Cobertura gratinada catupiry pequena","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrao para porcao M; revisar depois se necessario.","components":[{"refType":"ingredient","refId":"ing_catupiry","qty":90}],"code":"REC_GRAT_CAT_P","description":"Cobertura padrao para porcao M; revisar depois se necessario."},{"id":"rec_grat_4q_p","scope":"gyros","name":"Cobertura gratinada 4 queijos pequena","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrao para porcao M; revisar depois se necessario.","components":[{"refType":"ingredient","refId":"ing_4queijos","qty":90}],"code":"REC_GRAT_4Q_P","description":"Cobertura padrao para porcao M; revisar depois se necessario."},{"id":"rec_grat_cheddar_p","scope":"gyros","name":"Cobertura gratinada cheddar pequena","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrao para porcao M; revisar depois se necessario.","components":[{"refType":"ingredient","refId":"ing_cheddar","qty":90}],"code":"REC_GRAT_CHEDDAR_P","description":"Cobertura padrao para porcao M; revisar depois se necessario."},{"id":"rec_grat_muc_g","scope":"gyros","name":"Cobertura gratinada muçarela grande","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrao para porcao G; revisar depois se necessario.","components":[{"refType":"ingredient","refId":"ing_mucarela","qty":180}],"code":"REC_GRAT_MUC_G","description":"Cobertura padrao para porcao G; revisar depois se necessario."},{"id":"rec_grat_cat_g","scope":"gyros","name":"Cobertura gratinada catupiry grande","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrao para porcao G; revisar depois se necessario.","components":[{"refType":"ingredient","refId":"ing_catupiry","qty":180}],"code":"REC_GRAT_CAT_G","description":"Cobertura padrao para porcao G; revisar depois se necessario."},{"id":"rec_grat_4q_g","scope":"gyros","name":"Cobertura gratinada 4 queijos grande","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrao para porcao G; revisar depois se necessario.","components":[{"refType":"ingredient","refId":"ing_4queijos","qty":180}],"code":"REC_GRAT_4Q_G","description":"Cobertura padrao para porcao G; revisar depois se necessario."},{"id":"rec_grat_cheddar_g","scope":"gyros","name":"Cobertura gratinada cheddar grande","yieldQty":1,"yieldUnit":"un","storage":"Salamandra","notes":"Cobertura padrao para porcao G; revisar depois se necessario.","components":[{"refType":"ingredient","refId":"ing_cheddar","qty":180}],"code":"REC_GRAT_CHEDDAR_G","description":"Cobertura padrao para porcao G; revisar depois se necessario."},{"id":"rec_maionese_chimichurri","scope":"gyros","name":"Maionese Chimichurri","yieldQty":440,"yieldUnit":"g","storage":"Descanso refrigerado","notes":"Mesmo padrao da Grill: 400g de base + chimichurri + mostarda amarela.","components":[{"refType":"ingredient","refId":"ing_maionese_ind","qty":400},{"refType":"ingredient","refId":"ing_chimichurri","qty":24},{"refType":"ingredient","refId":"ing_mostarda_amarela","qty":15}],"code":"REC_MAIONESE_CHIMICHURRI","description":"Mesmo padrao da Grill: 400g de base + chimichurri + mostarda amarela."},{"id":"rec_maionese_verde","scope":"gyros","name":"Maionese Verde","yieldQty":470,"yieldUnit":"g","storage":"Descanso refrigerado","notes":"Base de maionese com mostarda, alho, limao, cheiro-verde, sal e pimenta-do-reino.","components":[{"refType":"ingredient","refId":"ing_maionese_ind","qty":400},{"refType":"ingredient","refId":"ing_mostarda_amarela","qty":15},{"refType":"ingredient","refId":"ing_alho","qty":6},{"refType":"ingredient","refId":"ing_limao","qty":15},{"refType":"ingredient","refId":"ing_cheiro_verde","qty":30},{"refType":"ingredient","refId":"ing_tempero","qty":2},{"refType":"ingredient","refId":"ing_pimenta_reino","qty":2}],"code":"REC_MAIONESE_VERDE","description":"Base de maionese com mostarda, alho, limao, cheiro-verde, sal e pimenta-do-reino."},{"id":"rec_berinjela_antepasto","scope":"gyros","name":"Antepasto de berinjela","yieldQty":2500,"yieldUnit":"g","storage":"Refrigerado / preparo","notes":"Receita baseada nas anotações: berinjela, pimentões, cebola roxa, tomate seco, shoyu, manjericão, louro, orégano, pimenta calabresa, azeite e vinagre de descanso.","components":[{"refType":"ingredient","refId":"ing_berinjela","qty":3000},{"refType":"ingredient","refId":"ing_vinagre","qty":45},{"refType":"ingredient","refId":"ing_tempero","qty":12},{"refType":"ingredient","refId":"ing_pimentao_vermelho","qty":450},{"refType":"ingredient","refId":"ing_pimentao_amarelo","qty":450},{"refType":"ingredient","refId":"ing_cebola_roxa","qty":500},{"refType":"ingredient","refId":"ing_tomate_seco","qty":500},{"refType":"ingredient","refId":"ing_shoyu","qty":250},{"refType":"ingredient","refId":"ing_manjericao","qty":20},{"refType":"ingredient","refId":"ing_louro","qty":2},{"refType":"ingredient","refId":"ing_oregano","qty":8},{"refType":"ingredient","refId":"ing_pimenta_calabresa","qty":6},{"refType":"ingredient","refId":"ing_oleo_vinagre","qty":300}],"code":"REC_BERINJELA_ANTEPASTO","description":"Receita baseada nas anotações: berinjela, pimentões, cebola roxa, tomate seco, shoyu, manjericão, louro, orégano, pimenta calabresa, azeite e vinagre de descanso."}],"products":[{"id":"prd_alpha","name":"Alpha Gyros de Fraldinha","categoryId":"cat_gyros","type":"menu","salePrice":47.13,"active":true,"includeInCatalogCount":true,"notes":"Base alinhada ao cardápio enviado","components":[{"refType":"recipe","refId":"rec_pao_parmesao","qty":1},{"refType":"ingredient","refId":"ing_fraldinha","qty":150},{"refType":"recipe","refId":"rec_manteiga_alho","qty":5},{"refType":"ingredient","refId":"ing_mucarela","qty":90},{"refType":"recipe","refId":"rec_vinagrete","qty":60},{"refType":"recipe","refId":"rec_maionese","qty":10},{"refType":"packaging","refId":"pkg_lanche","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"add_gyr_bacon","name":"Bacon","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":4,"notes":"","components":[{"refType":"ingredient","refId":"ing_bacon_cubos","qty":30}],"code":"GYR-ADD-LAN-BACON","description":"Bacon","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_muc","name":"Muçarela gratinada","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":5,"notes":"","components":[{"refType":"ingredient","refId":"ing_mucarela","qty":40}],"code":"GYR-ADD-LAN-MUCG","description":"Muçarela gratinada","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_cat","name":"Catupiry Original gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":5,"notes":"","components":[{"refType":"ingredient","refId":"ing_catupiry","qty":40}],"code":"GYR-ADD-LAN-CATG","description":"Catupiry Original gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_4q","name":"Catupiry 4 Queijos gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":6,"notes":"","components":[{"refType":"ingredient","refId":"ing_4queijos","qty":40}],"code":"GYR-ADD-LAN-C4QG","description":"Catupiry 4 Queijos gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_che","name":"Cheddar gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":6,"notes":"","components":[{"refType":"ingredient","refId":"ing_cheddar","qty":40}],"code":"GYR-ADD-LAN-CHEDG","description":"Cheddar gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_prot","name":"Fraldinha extra","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":11,"notes":"","components":[{"refType":"ingredient","refId":"ing_fraldinha","qty":150}],"code":"GYR-ADD-LAN-PROT","description":"Fraldinha extra","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_vin","name":"Vinagrete da casa extra","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":2.5,"notes":"","components":[{"refType":"product","refId":"prd_vinagrete_extra","qty":1}],"code":"GYR-ADD-LAN-VIN60","description":"Vinagrete da casa extra","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"rm_vin","name":"Sem vinagrete","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-VIN","description":"Sem vinagrete","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"rm_que","name":"Sem queijo","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-QUE","description":"Sem queijo","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"rm_mai","name":"Sem maionese da casa","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-MAI","description":"Sem maionese da casa","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"s_ketchup","name":"Ketchup (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-KET","description":"Ketchup (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_maio","name":"Maionese (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-MAI","description":"Maionese (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_most","name":"Mostarda (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-MOS","description":"Mostarda (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_pack5","name":"Pacote extra com 5 sachês","group":"Sachês (opcional)","chargeMode":"extra","salePriceDelta":2,"notes":"","components":[{"refType":"product","refId":"prd_sache5","qty":1}],"code":"GYR-SCH-5","description":"Pacote extra com 5 sachês","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true}],"code":"GYR-LAN-ALPHA","description":"Pão Francês com Parmesão, fraldinha, vinagrete, muçarela gratinada e maionese da casa.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_beta","name":"Beta Gyros de Frango","categoryId":"cat_gyros","type":"menu","salePrice":36.49,"active":true,"includeInCatalogCount":true,"notes":"Base alinhada ao cardápio enviado","components":[{"refType":"recipe","refId":"rec_pao_parmesao","qty":1},{"refType":"ingredient","refId":"ing_frango","qty":150},{"refType":"recipe","refId":"rec_manteiga_alho","qty":5},{"refType":"ingredient","refId":"ing_catupiry","qty":90},{"refType":"recipe","refId":"rec_vinagrete","qty":30},{"refType":"recipe","refId":"rec_maionese","qty":10},{"refType":"packaging","refId":"pkg_lanche","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"add_gyr_bacon","name":"Bacon","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":4,"notes":"","components":[{"refType":"ingredient","refId":"ing_bacon_cubos","qty":30}],"code":"GYR-ADD-LAN-BACON","description":"Bacon","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_muc","name":"Muçarela gratinada","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":5,"notes":"","components":[{"refType":"ingredient","refId":"ing_mucarela","qty":40}],"code":"GYR-ADD-LAN-MUCG","description":"Muçarela gratinada","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_cat","name":"Catupiry Original gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":5,"notes":"","components":[{"refType":"ingredient","refId":"ing_catupiry","qty":40}],"code":"GYR-ADD-LAN-CATG","description":"Catupiry Original gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_4q","name":"Catupiry 4 Queijos gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":6,"notes":"","components":[{"refType":"ingredient","refId":"ing_4queijos","qty":40}],"code":"GYR-ADD-LAN-C4QG","description":"Catupiry 4 Queijos gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_che","name":"Cheddar gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":6,"notes":"","components":[{"refType":"ingredient","refId":"ing_cheddar","qty":40}],"code":"GYR-ADD-LAN-CHEDG","description":"Cheddar gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_prot","name":"Frango extra","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":9,"notes":"","components":[{"refType":"ingredient","refId":"ing_frango","qty":150}],"code":"GYR-ADD-LAN-PROT","description":"Frango extra","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_vin","name":"Vinagrete da casa extra","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":2.5,"notes":"","components":[{"refType":"product","refId":"prd_vinagrete_extra","qty":1}],"code":"GYR-ADD-LAN-VIN60","description":"Vinagrete da casa extra","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"rm_vin","name":"Sem vinagrete","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-VIN","description":"Sem vinagrete","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"rm_que","name":"Sem queijo","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-QUE","description":"Sem queijo","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"rm_mai","name":"Sem maionese da casa","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-MAI","description":"Sem maionese da casa","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"s_ketchup","name":"Ketchup (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-KET","description":"Ketchup (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_maio","name":"Maionese (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-MAI","description":"Maionese (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_most","name":"Mostarda (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-MOS","description":"Mostarda (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_pack5","name":"Pacote extra com 5 sachês","group":"Sachês (opcional)","chargeMode":"extra","salePriceDelta":2,"notes":"","components":[{"refType":"product","refId":"prd_sache5","qty":1}],"code":"GYR-SCH-5","description":"Pacote extra com 5 sachês","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true}],"code":"GYR-LAN-BETA","description":"Pão Francês com Parmesão, frango, vinagrete, catupiry gratinado e maionese da casa.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_gamma","name":"Gamma Gyros de Linguiça Toscana","categoryId":"cat_gyros","type":"menu","salePrice":33.73,"active":true,"includeInCatalogCount":true,"notes":"Base alinhada ao cardápio enviado","components":[{"refType":"recipe","refId":"rec_pao_parmesao","qty":1},{"refType":"ingredient","refId":"ing_linguica","qty":150},{"refType":"recipe","refId":"rec_manteiga_alho","qty":5},{"refType":"ingredient","refId":"ing_4queijos","qty":90},{"refType":"recipe","refId":"rec_vinagrete","qty":30},{"refType":"recipe","refId":"rec_maionese","qty":10},{"refType":"packaging","refId":"pkg_lanche","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"add_gyr_bacon","name":"Bacon","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":4,"notes":"","components":[{"refType":"ingredient","refId":"ing_bacon_cubos","qty":30}],"code":"GYR-ADD-LAN-BACON","description":"Bacon","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_muc","name":"Muçarela gratinada","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":5,"notes":"","components":[{"refType":"ingredient","refId":"ing_mucarela","qty":40}],"code":"GYR-ADD-LAN-MUCG","description":"Muçarela gratinada","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_cat","name":"Catupiry Original gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":5,"notes":"","components":[{"refType":"ingredient","refId":"ing_catupiry","qty":40}],"code":"GYR-ADD-LAN-CATG","description":"Catupiry Original gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_4q","name":"Catupiry 4 Queijos gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":6,"notes":"","components":[{"refType":"ingredient","refId":"ing_4queijos","qty":40}],"code":"GYR-ADD-LAN-C4QG","description":"Catupiry 4 Queijos gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_che","name":"Cheddar gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":6,"notes":"","components":[{"refType":"ingredient","refId":"ing_cheddar","qty":40}],"code":"GYR-ADD-LAN-CHEDG","description":"Cheddar gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_prot","name":"Linguiça Toscana extra","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":9,"notes":"","components":[{"refType":"ingredient","refId":"ing_linguica","qty":150}],"code":"GYR-ADD-LAN-PROT","description":"Linguiça Toscana extra","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_vin","name":"Vinagrete da casa extra","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":2.5,"notes":"","components":[{"refType":"product","refId":"prd_vinagrete_extra","qty":1}],"code":"GYR-ADD-LAN-VIN60","description":"Vinagrete da casa extra","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"rm_vin","name":"Sem vinagrete","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-VIN","description":"Sem vinagrete","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"rm_que","name":"Sem queijo","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-QUE","description":"Sem queijo","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"rm_mai","name":"Sem maionese da casa","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-MAI","description":"Sem maionese da casa","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"s_ketchup","name":"Ketchup (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-KET","description":"Ketchup (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_maio","name":"Maionese (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-MAI","description":"Maionese (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_most","name":"Mostarda (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-MOS","description":"Mostarda (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_pack5","name":"Pacote extra com 5 sachês","group":"Sachês (opcional)","chargeMode":"extra","salePriceDelta":2,"notes":"","components":[{"refType":"product","refId":"prd_sache5","qty":1}],"code":"GYR-SCH-5","description":"Pacote extra com 5 sachês","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true}],"code":"GYR-LAN-GAMMA","description":"Pão Francês com Parmesão, linguiça toscana, vinagrete, catupiry 4 queijos gratinado e maionese da casa.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_vegetariano","scope":"gyros","name":"Gyros Vegetariano de Berinjela","categoryId":"cat_gyros","type":"menu","pricingMode":"auto","salePrice":49.92,"active":true,"includeInCatalogCount":true,"notes":"Pão Francês com Parmesão, antepasto de berinjela, vinagrete, muçarela gratinada e maionese grill.","components":[{"refType":"recipe","refId":"rec_pao_parmesao","qty":1},{"refType":"recipe","refId":"rec_berinjela_antepasto","qty":150},{"refType":"recipe","refId":"rec_manteiga_alho","qty":5},{"refType":"ingredient","refId":"ing_mucarela","qty":90},{"refType":"recipe","refId":"rec_vinagrete","qty":60},{"refType":"recipe","refId":"rec_maionese","qty":10},{"refType":"packaging","refId":"pkg_lanche","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":1}],"addons":[{"id":"add_gyr_muc","name":"Muçarela gratinada","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":5,"notes":"","components":[{"refType":"ingredient","refId":"ing_mucarela","qty":40}],"code":"GYR-ADD-LAN-MUCG","description":"Muçarela gratinada","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_cat","name":"Catupiry Original gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":5,"notes":"","components":[{"refType":"ingredient","refId":"ing_catupiry","qty":40}],"code":"GYR-ADD-LAN-CATG","description":"Catupiry Original gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_4q","name":"Catupiry 4 Queijos gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":6,"notes":"","components":[{"refType":"ingredient","refId":"ing_4queijos","qty":40}],"code":"GYR-ADD-LAN-C4QG","description":"Catupiry 4 Queijos gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_che","name":"Cheddar gratinado","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":6,"notes":"","components":[{"refType":"ingredient","refId":"ing_cheddar","qty":40}],"code":"GYR-ADD-LAN-CHEDG","description":"Cheddar gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_prot","name":"Antepasto de berinjela extra","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":7,"notes":"","components":[{"refType":"recipe","refId":"rec_berinjela_antepasto","qty":150}],"code":"GYR-ADD-LAN-PROT","description":"Antepasto de berinjela extra","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"add_gyr_vin","name":"Vinagrete da casa extra","group":"Extras no Gyros","chargeMode":"extra","salePriceDelta":2.5,"notes":"","components":[{"refType":"product","refId":"prd_vinagrete_extra","qty":1}],"code":"GYR-ADD-LAN-VIN60","description":"Vinagrete da casa extra","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"rm_vin","name":"Sem vinagrete","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-VIN","description":"Sem vinagrete","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"rm_que","name":"Sem queijo","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-QUE","description":"Sem queijo","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"rm_mai","name":"Sem maionese da casa","group":"Remover ingredientes","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-RMV-MAI","description":"Sem maionese da casa","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":3,"active":true},{"id":"s_ketchup","name":"Ketchup (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-KET","description":"Ketchup (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_maio","name":"Maionese (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-MAI","description":"Maionese (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_most","name":"Mostarda (1 sachê)","group":"Sachês (opcional)","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":1}],"code":"GYR-SCH-MOS","description":"Mostarda (1 sachê)","erpUnit":"UN","salePriceMode":"auto","groupType":"addon","priceCalculation":"free","required":false,"minimum":0,"maximum":2,"active":true},{"id":"s_pack5","name":"Pacote extra com 5 sachês","group":"Sachês (opcional)","chargeMode":"extra","salePriceDelta":2,"notes":"","components":[{"refType":"product","refId":"prd_sache5","qty":1}],"code":"GYR-SCH-5","description":"Pacote extra com 5 sachês","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true}],"code":"GYR-LAN-VEG","description":"Pão Francês com Parmesão, antepasto de berinjela, vinagrete, muçarela gratinada e maionese da casa.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo1","name":"Combo Essencial","categoryId":"cat_combos","type":"combo","salePrice":37.62,"active":true,"includeInCatalogCount":true,"notes":"Estrutura comercial v3: 1 Gyros à escolha + 1 refrigerante 350ml.","components":[{"refType":"product","refId":"prd_base_lanche_medio","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-CMB-ESS","description":"1 Gyros à escolha + 1 refrigerante 350ml.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"],"addons":[{"id":"escolha_seu_gyros_prd_alpha","name":"Alpha Gyros de Fraldinha","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_alpha","qty":1}],"code":"GYR-GRP-ALPHA","description":"Alpha Gyros de Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_beta","name":"Beta Gyros de Frango","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_beta","qty":1}],"code":"GYR-GRP-BETA","description":"Beta Gyros de Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_gamma","name":"Gamma Gyros de Linguiça Toscana","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_gamma","qty":1}],"code":"GYR-GRP-GAMMA","description":"Gamma Gyros de Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_vegetariano","name":"Gyros Vegetariano de Berinjela","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_vegetariano","qty":1}],"code":"GYR-GRP-VEG","description":"Gyros Vegetariano de Berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_coca","name":"Coca-Cola Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_coca","qty":1}],"code":"GYR-BEB-COCA350","description":"Coca-Cola Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_coca_zero","name":"Coca-Cola Zero Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_coca_zero","qty":1}],"code":"GYR-BEB-COCAZ350","description":"Coca-Cola Zero Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_guarana_350","name":"Guaraná Antarctica Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_guarana_350","qty":1}],"code":"GYR-BEB-GUAR350","description":"Guaraná Antarctica Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_fanta","name":"Fanta Laranja Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_fanta","qty":1}],"code":"GYR-BEB-FANTA350","description":"Fanta Laranja Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_schweppes_350","name":"Schweppes Citrus 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_schweppes_350","qty":1}],"code":"GYR-BEB-SCHW350","description":"Schweppes Citrus 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_sprite_350","name":"Sprite 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_sprite_350","qty":1}],"code":"GYR-BEB-SPR350","description":"Sprite 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true}]},{"id":"prd_combo2","name":"Combo Clássico","categoryId":"cat_combos","type":"combo","salePrice":43.35,"active":true,"includeInCatalogCount":true,"notes":"Estrutura comercial v3: 1 Gyros à escolha + 1 batata média + 1 refrigerante 350ml.","components":[{"refType":"product","refId":"prd_base_lanche_medio","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-CMB-CLA","description":"1 Gyros à escolha + 1 batata média + 1 refrigerante 350ml.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"],"addons":[{"id":"escolha_seu_gyros_prd_alpha","name":"Alpha Gyros de Fraldinha","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_alpha","qty":1}],"code":"GYR-GRP-ALPHA","description":"Alpha Gyros de Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_beta","name":"Beta Gyros de Frango","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_beta","qty":1}],"code":"GYR-GRP-BETA","description":"Beta Gyros de Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_gamma","name":"Gamma Gyros de Linguiça Toscana","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_gamma","qty":1}],"code":"GYR-GRP-GAMMA","description":"Gamma Gyros de Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_vegetariano","name":"Gyros Vegetariano de Berinjela","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_vegetariano","qty":1}],"code":"GYR-GRP-VEG","description":"Gyros Vegetariano de Berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_coca","name":"Coca-Cola Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_coca","qty":1}],"code":"GYR-BEB-COCA350","description":"Coca-Cola Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_coca_zero","name":"Coca-Cola Zero Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_coca_zero","qty":1}],"code":"GYR-BEB-COCAZ350","description":"Coca-Cola Zero Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_guarana_350","name":"Guaraná Antarctica Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_guarana_350","qty":1}],"code":"GYR-BEB-GUAR350","description":"Guaraná Antarctica Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_fanta","name":"Fanta Laranja Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_fanta","qty":1}],"code":"GYR-BEB-FANTA350","description":"Fanta Laranja Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_schweppes_350","name":"Schweppes Citrus 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_schweppes_350","qty":1}],"code":"GYR-BEB-SCHW350","description":"Schweppes Citrus 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_sprite_350","name":"Sprite 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_sprite_350","qty":1}],"code":"GYR-BEB-SPR350","description":"Sprite 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"tempero_da_batata_sal","name":"Sal","group":"Tempero da batata","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-TMP-SAL","description":"Tempero padrão","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"tempero_da_batata_lp","name":"Lemon Pepper","group":"Tempero da batata","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_lemon_pepper","qty":3}],"code":"GYR-TMP-LPEP","description":"Lemon Pepper","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"tempero_da_batata_pap","name":"Páprica","group":"Tempero da batata","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_paprica_doce","qty":3}],"code":"GYR-TMP-PAPR","description":"Páprica","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true}]},{"id":"prd_combo3","name":"Combo Completo","categoryId":"cat_combos","type":"combo","salePrice":48.04,"active":true,"includeInCatalogCount":true,"notes":"Estrutura comercial v3: 1 Gyros à escolha + 1 batata média + 1 refrigerante 350ml + 1 finalização.","components":[{"refType":"product","refId":"prd_base_lanche_medio","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-CMB-CPL","description":"1 Gyros à escolha + 1 batata média + 1 refrigerante 350ml + 1 molho 60ml ou mini churros.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"],"addons":[{"id":"escolha_seu_gyros_prd_alpha","name":"Alpha Gyros de Fraldinha","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_alpha","qty":1}],"code":"GYR-GRP-ALPHA","description":"Alpha Gyros de Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_beta","name":"Beta Gyros de Frango","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_beta","qty":1}],"code":"GYR-GRP-BETA","description":"Beta Gyros de Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_gamma","name":"Gamma Gyros de Linguiça Toscana","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_gamma","qty":1}],"code":"GYR-GRP-GAMMA","description":"Gamma Gyros de Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_seu_gyros_prd_vegetariano","name":"Gyros Vegetariano de Berinjela","group":"Escolha seu Gyros","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_vegetariano","qty":1}],"code":"GYR-GRP-VEG","description":"Gyros Vegetariano de Berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_coca","name":"Coca-Cola Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_coca","qty":1}],"code":"GYR-BEB-COCA350","description":"Coca-Cola Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_coca_zero","name":"Coca-Cola Zero Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_coca_zero","qty":1}],"code":"GYR-BEB-COCAZ350","description":"Coca-Cola Zero Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_guarana_350","name":"Guaraná Antarctica Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_guarana_350","qty":1}],"code":"GYR-BEB-GUAR350","description":"Guaraná Antarctica Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_fanta","name":"Fanta Laranja Lata 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_fanta","qty":1}],"code":"GYR-BEB-FANTA350","description":"Fanta Laranja Lata 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_schweppes_350","name":"Schweppes Citrus 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_schweppes_350","qty":1}],"code":"GYR-BEB-SCHW350","description":"Schweppes Citrus 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_sua_bebida_350ml_prd_sprite_350","name":"Sprite 350ml","group":"Escolha sua Bebida 350ml","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_sprite_350","qty":1}],"code":"GYR-BEB-SPR350","description":"Sprite 350ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"tempero_da_batata_sal","name":"Sal","group":"Tempero da batata","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-TMP-SAL","description":"Tempero padrão","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"tempero_da_batata_lp","name":"Lemon Pepper","group":"Tempero da batata","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_lemon_pepper","qty":3}],"code":"GYR-TMP-LPEP","description":"Lemon Pepper","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"tempero_da_batata_pap","name":"Páprica","group":"Tempero da batata","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_paprica_doce","qty":3}],"code":"GYR-TMP-PAPR","description":"Páprica","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"final_molho_casa","name":"Maionese da Casa 60ml","group":"Finalize seu combo","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_molho_extra","qty":1}],"code":"GYR-CMB-FIN-MAICSA","description":"Maionese da Casa 60ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"final_molho_verde","name":"Maionese Verde 60ml","group":"Finalize seu combo","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_maionese_verde_extra","qty":1}],"code":"GYR-CMB-FIN-MAIVRD","description":"Maionese Verde 60ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"final_molho_chimi","name":"Maionese de Chimichurri 60ml","group":"Finalize seu combo","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_maionese_chimichurri_extra","qty":1}],"code":"GYR-CMB-FIN-MAICHM","description":"Maionese de Chimichurri 60ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"final_bbq","name":"Barbecue 60ml","group":"Finalize seu combo","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_barbecue_extra","qty":1}],"code":"GYR-CMB-FIN-BBQ","description":"Barbecue 60ml","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"final_churros","name":"Mini Churros 6 un com Doce de Leite","group":"Finalize seu combo","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_churros","qty":1}],"code":"GYR-CMB-FIN-CHUR","description":"Mini Churros 6 un com Doce de Leite","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true}]},{"id":"prd_combo_familia","name":"Combo Família Gyros","categoryId":"cat_combos","type":"combo","salePrice":130.74,"active":true,"includeInCatalogCount":true,"notes":"Estrutura comercial v3: 4 gyros à escolha + 2 batatas médias + 1 Coca-Cola Original 2L.","components":[{"refType":"product","refId":"prd_base_lanche_medio","qty":4},{"refType":"product","refId":"prd_bat_p","qty":2},{"refType":"product","refId":"prd_coca_2l","qty":1},{"refType":"packaging","refId":"pkg_combo_familia","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-CMB-FAM","description":"4 gyros à escolha + 2 batatas médias + 1 Coca-Cola Original 2L.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"],"addons":[{"id":"gyros_1_prd_alpha","name":"Alpha Gyros de Fraldinha","group":"Gyros 1","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_alpha","qty":1}],"code":"GYR-GRP-ALPHA","description":"Alpha Gyros de Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_1_prd_beta","name":"Beta Gyros de Frango","group":"Gyros 1","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_beta","qty":1}],"code":"GYR-GRP-BETA","description":"Beta Gyros de Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_1_prd_gamma","name":"Gamma Gyros de Linguiça Toscana","group":"Gyros 1","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_gamma","qty":1}],"code":"GYR-GRP-GAMMA","description":"Gamma Gyros de Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_1_prd_vegetariano","name":"Gyros Vegetariano de Berinjela","group":"Gyros 1","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_vegetariano","qty":1}],"code":"GYR-GRP-VEG","description":"Gyros Vegetariano de Berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_2_prd_alpha","name":"Alpha Gyros de Fraldinha","group":"Gyros 2","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_alpha","qty":1}],"code":"GYR-GRP-ALPHA","description":"Alpha Gyros de Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_2_prd_beta","name":"Beta Gyros de Frango","group":"Gyros 2","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_beta","qty":1}],"code":"GYR-GRP-BETA","description":"Beta Gyros de Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_2_prd_gamma","name":"Gamma Gyros de Linguiça Toscana","group":"Gyros 2","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_gamma","qty":1}],"code":"GYR-GRP-GAMMA","description":"Gamma Gyros de Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_2_prd_vegetariano","name":"Gyros Vegetariano de Berinjela","group":"Gyros 2","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_vegetariano","qty":1}],"code":"GYR-GRP-VEG","description":"Gyros Vegetariano de Berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_3_prd_alpha","name":"Alpha Gyros de Fraldinha","group":"Gyros 3","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_alpha","qty":1}],"code":"GYR-GRP-ALPHA","description":"Alpha Gyros de Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_3_prd_beta","name":"Beta Gyros de Frango","group":"Gyros 3","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_beta","qty":1}],"code":"GYR-GRP-BETA","description":"Beta Gyros de Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_3_prd_gamma","name":"Gamma Gyros de Linguiça Toscana","group":"Gyros 3","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_gamma","qty":1}],"code":"GYR-GRP-GAMMA","description":"Gamma Gyros de Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_3_prd_vegetariano","name":"Gyros Vegetariano de Berinjela","group":"Gyros 3","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_vegetariano","qty":1}],"code":"GYR-GRP-VEG","description":"Gyros Vegetariano de Berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_4_prd_alpha","name":"Alpha Gyros de Fraldinha","group":"Gyros 4","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_alpha","qty":1}],"code":"GYR-GRP-ALPHA","description":"Alpha Gyros de Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_4_prd_beta","name":"Beta Gyros de Frango","group":"Gyros 4","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_beta","qty":1}],"code":"GYR-GRP-BETA","description":"Beta Gyros de Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_4_prd_gamma","name":"Gamma Gyros de Linguiça Toscana","group":"Gyros 4","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_gamma","qty":1}],"code":"GYR-GRP-GAMMA","description":"Gamma Gyros de Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"gyros_4_prd_vegetariano","name":"Gyros Vegetariano de Berinjela","group":"Gyros 4","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"product","refId":"prd_vegetariano","qty":1}],"code":"GYR-GRP-VEG","description":"Gyros Vegetariano de Berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"tempero_das_batatas_do_combo_sal","name":"Sal","group":"Tempero das batatas do combo","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-TMP-SAL","description":"Tempero padrão","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"tempero_das_batatas_do_combo_lp","name":"Lemon Pepper","group":"Tempero das batatas do combo","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_lemon_pepper","qty":3}],"code":"GYR-TMP-LPEP","description":"Lemon Pepper","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"tempero_das_batatas_do_combo_pap","name":"Páprica","group":"Tempero das batatas do combo","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_paprica_doce","qty":3}],"code":"GYR-TMP-PAPR","description":"Páprica","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true}]},{"id":"prd_bat_p","name":"Batata Frita Média 200g","categoryId":"cat_batatas","type":"menu","salePrice":5.62,"active":true,"includeInCatalogCount":true,"notes":"Batata frita média 150g com opção de tempero e molho à parte.","components":[{"refType":"recipe","refId":"rec_batata_p","qty":1},{"refType":"packaging","refId":"pkg_bat_p","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":2}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"escolha_o_tempero_sal","name":"Sal","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-TMP-SAL","description":"Tempero padrão","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"escolha_o_tempero_lp","name":"Lemon Pepper","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_lemon_pepper","qty":3}],"code":"GYR-TMP-LPEP","description":"Lemon Pepper","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"escolha_o_tempero_pap","name":"Páprica","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_paprica_doce","qty":3}],"code":"GYR-TMP-PAPR","description":"Páprica","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"adicione_1_molho_prd_molho_extra","name":"Maionese da Casa 60ml","group":"Adicione 1 molho","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_molho_extra","qty":1}],"code":"GYR-MOL-MAICSA","description":"Maionese da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"adicione_1_molho_prd_maionese_verde_extra","name":"Maionese Verde 60ml","group":"Adicione 1 molho","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_verde_extra","qty":1}],"code":"GYR-MOL-MAIVRD","description":"Maionese Verde 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"adicione_1_molho_prd_maionese_chimichurri_extra","name":"Maionese de Chimichurri 60ml","group":"Adicione 1 molho","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_chimichurri_extra","qty":1}],"code":"GYR-MOL-MAICHM","description":"Maionese de Chimichurri 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"adicione_1_molho_prd_barbecue_extra","name":"Barbecue 60ml","group":"Adicione 1 molho","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_barbecue_extra","qty":1}],"code":"GYR-MOL-BBQ60","description":"Barbecue 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true}],"code":"GYR-BAT-FRT-M150","description":"Batata frita média 150g com opção de tempero e molho à parte.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_g","name":"Batata Frita Grande 400g","categoryId":"cat_batatas","type":"menu","salePrice":10.18,"active":true,"includeInCatalogCount":true,"notes":"Batata frita grande 400g com opção de tempero e molho à parte.","components":[{"refType":"recipe","refId":"rec_batata_g","qty":1},{"refType":"packaging","refId":"pkg_bat_g","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":2}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"escolha_o_tempero_sal","name":"Sal","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-TMP-SAL","description":"Tempero padrão","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"escolha_o_tempero_lp","name":"Lemon Pepper","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_lemon_pepper","qty":3}],"code":"GYR-TMP-LPEP","description":"Lemon Pepper","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"escolha_o_tempero_pap","name":"Páprica","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_paprica_doce","qty":3}],"code":"GYR-TMP-PAPR","description":"Páprica","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"adicione_1_molho_prd_molho_extra","name":"Maionese da Casa 60ml","group":"Adicione 1 molho","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_molho_extra","qty":1}],"code":"GYR-MOL-MAICSA","description":"Maionese da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"adicione_1_molho_prd_maionese_verde_extra","name":"Maionese Verde 60ml","group":"Adicione 1 molho","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_verde_extra","qty":1}],"code":"GYR-MOL-MAIVRD","description":"Maionese Verde 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"adicione_1_molho_prd_maionese_chimichurri_extra","name":"Maionese de Chimichurri 60ml","group":"Adicione 1 molho","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_chimichurri_extra","qty":1}],"code":"GYR-MOL-MAICHM","description":"Maionese de Chimichurri 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"adicione_1_molho_prd_barbecue_extra","name":"Barbecue 60ml","group":"Adicione 1 molho","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_barbecue_extra","qty":1}],"code":"GYR-MOL-BBQ60","description":"Barbecue 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true}],"code":"GYR-BAT-FRT-G400","description":"Batata frita grande 400g com opção de tempero e molho à parte.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_prot_grat_m","name":"Proteína Gratinada Média","categoryId":"cat_gratinados","type":"menu","salePrice":61,"active":true,"includeInCatalogCount":true,"notes":"Porção média de proteína gratinada com 180g.","components":[{"refType":"ingredient","refId":"ing_frango","qty":180},{"refType":"recipe","refId":"rec_grat_muc_p","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m90","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"prd_prot_grat_m_frald","name":"Fraldinha","group":"Escolha a proteína","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_fraldinha","qty":180}],"code":"GYR-GRT-PROT-FRALD","description":"Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_prot_grat_m_frango","name":"Frango","group":"Escolha a proteína","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_frango","qty":180}],"code":"GYR-GRT-PROT-FRANG","description":"Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_prot_grat_m_tosc","name":"Linguiça Toscana","group":"Escolha a proteína","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_linguica","qty":180}],"code":"GYR-GRT-PROT-TOSC","description":"Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_prot_grat_m_beri","name":"Antepasto de berinjela","group":"Escolha a proteína","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_berinjela_antepasto","qty":180}],"code":"GYR-GRT-PROT-BERI","description":"Antepasto de berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_prot_grat_m_muc","name":"Muçarela gratinada","group":"Escolha o queijo gratinado","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_muc_p","qty":1}],"code":"GYR-GRT-QUE-MUC","description":"Muçarela gratinada","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_prot_grat_m_cat","name":"Catupiry Original gratinado","group":"Escolha o queijo gratinado","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_cat_p","qty":1}],"code":"GYR-GRT-QUE-CAT","description":"Catupiry Original gratinado","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_prot_grat_m_4q","name":"Catupiry 4 Queijos gratinado","group":"Escolha o queijo gratinado","chargeMode":"extra","salePriceDelta":1,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_4q_p","qty":1}],"code":"GYR-GRT-QUE-4Q","description":"Catupiry 4 Queijos gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_prot_grat_m_che","name":"Cheddar gratinado","group":"Escolha o queijo gratinado","chargeMode":"extra","salePriceDelta":1,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_cheddar_p","qty":1}],"code":"GYR-GRT-QUE-CHED","description":"Cheddar gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_prot_grat_m_bacon","name":"Bacon","group":"Adicionais","chargeMode":"extra","salePriceDelta":4,"notes":"","components":[{"refType":"ingredient","refId":"ing_bacon_cubos","qty":30}],"code":"GYR-GRT-ADD-BACON","description":"Bacon","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true}],"code":"GYR-GRT-PROT-M180","description":"Porção média de proteína gratinada com 180g.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_carne_grat","name":"Proteína Gratinada Grande","categoryId":"cat_gratinados","type":"menu","salePrice":61,"active":true,"includeInCatalogCount":true,"notes":"Porção grande de proteína gratinada com 340g.","components":[{"refType":"ingredient","refId":"ing_frango","qty":340},{"refType":"recipe","refId":"rec_grat_muc_g","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m120","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"prd_carne_grat_frald","name":"Fraldinha","group":"Escolha a proteína","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_fraldinha","qty":340}],"code":"GYR-GRT-PROT-FRALD","description":"Fraldinha","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_carne_grat_frango","name":"Frango","group":"Escolha a proteína","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_frango","qty":340}],"code":"GYR-GRT-PROT-FRANG","description":"Frango","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_carne_grat_tosc","name":"Linguiça Toscana","group":"Escolha a proteína","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_linguica","qty":340}],"code":"GYR-GRT-PROT-TOSC","description":"Linguiça Toscana","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_carne_grat_beri","name":"Antepasto de berinjela","group":"Escolha a proteína","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_berinjela_antepasto","qty":340}],"code":"GYR-GRT-PROT-BERI","description":"Antepasto de berinjela","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_carne_grat_muc","name":"Muçarela gratinada","group":"Escolha o queijo gratinado","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_muc_g","qty":1}],"code":"GYR-GRT-QUE-MUC","description":"Muçarela gratinada","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_carne_grat_cat","name":"Catupiry Original gratinado","group":"Escolha o queijo gratinado","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_cat_g","qty":1}],"code":"GYR-GRT-QUE-CAT","description":"Catupiry Original gratinado","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_carne_grat_4q","name":"Catupiry 4 Queijos gratinado","group":"Escolha o queijo gratinado","chargeMode":"extra","salePriceDelta":1,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_4q_g","qty":1}],"code":"GYR-GRT-QUE-4Q","description":"Catupiry 4 Queijos gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_carne_grat_che","name":"Cheddar gratinado","group":"Escolha o queijo gratinado","chargeMode":"extra","salePriceDelta":1,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_cheddar_g","qty":1}],"code":"GYR-GRT-QUE-CHED","description":"Cheddar gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_carne_grat_bacon","name":"Bacon","group":"Adicionais","chargeMode":"extra","salePriceDelta":4,"notes":"","components":[{"refType":"ingredient","refId":"ing_bacon_cubos","qty":30}],"code":"GYR-GRT-ADD-BACON","description":"Bacon","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true}],"code":"GYR-GRT-PROT-G340","description":"Porção grande de proteína gratinada com 340g.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_p","name":"Batata Gratinada Média 200g","categoryId":"cat_gratinados","type":"menu","salePrice":15.84,"active":true,"includeInCatalogCount":true,"notes":"Batata frita média 130g com queijo gratinado.","components":[{"refType":"recipe","refId":"rec_batata_grat_p","qty":1},{"refType":"recipe","refId":"rec_grat_muc_p","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m90","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"prd_bat_grat_p_muc","name":"Muçarela gratinada","group":"Escolha o queijo gratinado","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_muc_p","qty":1}],"code":"GYR-GRT-QUE-MUC","description":"Muçarela gratinada","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_bat_grat_p_cat","name":"Catupiry Original gratinado","group":"Escolha o queijo gratinado","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_cat_p","qty":1}],"code":"GYR-GRT-QUE-CAT","description":"Catupiry Original gratinado","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_bat_grat_p_4q","name":"Catupiry 4 Queijos gratinado","group":"Escolha o queijo gratinado","chargeMode":"extra","salePriceDelta":1,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_4q_p","qty":1}],"code":"GYR-GRT-QUE-4Q","description":"Catupiry 4 Queijos gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_bat_grat_p_che","name":"Cheddar gratinado","group":"Escolha o queijo gratinado","chargeMode":"extra","salePriceDelta":1,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_cheddar_p","qty":1}],"code":"GYR-GRT-QUE-CHED","description":"Cheddar gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_o_tempero_sal","name":"Sal","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-TMP-SAL","description":"Tempero padrão","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"escolha_o_tempero_lp","name":"Lemon Pepper","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_lemon_pepper","qty":3}],"code":"GYR-TMP-LPEP","description":"Lemon Pepper","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"escolha_o_tempero_pap","name":"Páprica","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_paprica_doce","qty":3}],"code":"GYR-TMP-PAPR","description":"Páprica","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"prd_bat_grat_p_bacon","name":"Bacon","group":"Adicionais","chargeMode":"extra","salePriceDelta":4,"notes":"","components":[{"refType":"ingredient","refId":"ing_bacon_cubos","qty":30}],"code":"GYR-GRT-ADD-BACON","description":"Bacon","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true}],"code":"GYR-BAT-GRT-M130","description":"Batata frita média 130g com queijo gratinado.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_g","name":"Batata Gratinada Grande 400g","categoryId":"cat_gratinados","type":"menu","salePrice":30.87,"active":true,"includeInCatalogCount":true,"notes":"Batata frita grande 290g com queijo gratinado.","components":[{"refType":"recipe","refId":"rec_batata_grat_g","qty":1},{"refType":"recipe","refId":"rec_grat_muc_g","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m120","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"prd_bat_grat_g_muc","name":"Muçarela gratinada","group":"Escolha o queijo gratinado","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_muc_g","qty":1}],"code":"GYR-GRT-QUE-MUC","description":"Muçarela gratinada","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_bat_grat_g_cat","name":"Catupiry Original gratinado","group":"Escolha o queijo gratinado","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_cat_g","qty":1}],"code":"GYR-GRT-QUE-CAT","description":"Catupiry Original gratinado","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_bat_grat_g_4q","name":"Catupiry 4 Queijos gratinado","group":"Escolha o queijo gratinado","chargeMode":"extra","salePriceDelta":1,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_4q_g","qty":1}],"code":"GYR-GRT-QUE-4Q","description":"Catupiry 4 Queijos gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":true,"minimum":1,"maximum":1,"active":true},{"id":"prd_bat_grat_g_che","name":"Cheddar gratinado","group":"Escolha o queijo gratinado","chargeMode":"extra","salePriceDelta":1,"notes":"","components":[{"refType":"recipe","refId":"rec_grat_cheddar_g","qty":1}],"code":"GYR-GRT-QUE-CHED","description":"Cheddar gratinado","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":true,"minimum":1,"maximum":1,"active":true},{"id":"escolha_o_tempero_sal","name":"Sal","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[],"code":"GYR-TMP-SAL","description":"Tempero padrão","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"escolha_o_tempero_lp","name":"Lemon Pepper","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_lemon_pepper","qty":3}],"code":"GYR-TMP-LPEP","description":"Lemon Pepper","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"escolha_o_tempero_pap","name":"Páprica","group":"Escolha o tempero","chargeMode":"included","salePriceDelta":0,"notes":"","components":[{"refType":"ingredient","refId":"ing_paprica_doce","qty":3}],"code":"GYR-TMP-PAPR","description":"Páprica","erpUnit":"UN","salePriceMode":"auto","groupType":"choice","priceCalculation":"free","required":false,"minimum":0,"maximum":1,"active":true},{"id":"prd_bat_grat_g_bacon","name":"Bacon","group":"Adicionais","chargeMode":"extra","salePriceDelta":4,"notes":"","components":[{"refType":"ingredient","refId":"ing_bacon_cubos","qty":30}],"code":"GYR-GRT-ADD-BACON","description":"Bacon","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true}],"code":"GYR-BAT-GRT-G290","description":"Batata frita grande 290g com queijo gratinado.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_prato_alpha","name":"Executivo de Fraldinha","categoryId":"cat_almoco","type":"menu","salePrice":45.2,"active":true,"includeInCatalogCount":true,"notes":"Almoco com feijao em pote, vinagrete e farofa em potes de 60ml.","components":[{"refType":"recipe","refId":"rec_prato_alpha","qty":1},{"refType":"packaging","refId":"pkg_almoco","qty":1,"pricingMode":"pass_through"},{"refType":"packaging","refId":"pkg_potinho_feijao","qty":1},{"refType":"packaging","refId":"pkg_potinho_60","qty":2},{"refType":"packaging","refId":"pkg_guardanapo","qty":1},{"refType":"packaging","refId":"pkg_talher_kit","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"prd_prato_alpha_extra","name":"Fraldinha extra","group":"Proteína extra","chargeMode":"extra","salePriceDelta":11,"notes":"","components":[{"refType":"ingredient","refId":"ing_fraldinha","qty":150}],"code":"GYR-ALM-EXT-PROT","description":"Fraldinha extra","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"molhos_à_parte_prd_molho_extra","name":"Maionese da Casa 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_molho_extra","qty":1}],"code":"GYR-MOL-MAICSA","description":"Maionese da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_maionese_verde_extra","name":"Maionese Verde 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_verde_extra","qty":1}],"code":"GYR-MOL-MAIVRD","description":"Maionese Verde 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_maionese_chimichurri_extra","name":"Maionese de Chimichurri 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_chimichurri_extra","qty":1}],"code":"GYR-MOL-MAICHM","description":"Maionese de Chimichurri 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_barbecue_extra","name":"Barbecue 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_barbecue_extra","qty":1}],"code":"GYR-MOL-BBQ60","description":"Barbecue 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_vinagrete_extra","name":"Vinagrete da Casa 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":2.5,"notes":"","components":[{"refType":"product","refId":"prd_vinagrete_extra","qty":1}],"code":"GYR-MOL-VIN60","description":"Vinagrete da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true}],"code":"GYR-ALM-ALPHA","description":"Prato executivo com acompanhamentos da casa e fraldinha.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_prato_beta","name":"Executivo de Frango","categoryId":"cat_almoco","type":"menu","salePrice":34.94,"active":true,"includeInCatalogCount":true,"notes":"Almoco com feijao em pote, vinagrete e farofa em potes de 60ml.","components":[{"refType":"recipe","refId":"rec_prato_beta","qty":1},{"refType":"packaging","refId":"pkg_almoco","qty":1,"pricingMode":"pass_through"},{"refType":"packaging","refId":"pkg_potinho_feijao","qty":1},{"refType":"packaging","refId":"pkg_potinho_60","qty":2},{"refType":"packaging","refId":"pkg_guardanapo","qty":1},{"refType":"packaging","refId":"pkg_talher_kit","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"prd_prato_beta_extra","name":"Frango extra","group":"Proteína extra","chargeMode":"extra","salePriceDelta":9,"notes":"","components":[{"refType":"ingredient","refId":"ing_frango","qty":150}],"code":"GYR-ALM-EXT-PROT","description":"Frango extra","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"molhos_à_parte_prd_molho_extra","name":"Maionese da Casa 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_molho_extra","qty":1}],"code":"GYR-MOL-MAICSA","description":"Maionese da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_maionese_verde_extra","name":"Maionese Verde 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_verde_extra","qty":1}],"code":"GYR-MOL-MAIVRD","description":"Maionese Verde 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_maionese_chimichurri_extra","name":"Maionese de Chimichurri 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_chimichurri_extra","qty":1}],"code":"GYR-MOL-MAICHM","description":"Maionese de Chimichurri 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_barbecue_extra","name":"Barbecue 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_barbecue_extra","qty":1}],"code":"GYR-MOL-BBQ60","description":"Barbecue 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_vinagrete_extra","name":"Vinagrete da Casa 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":2.5,"notes":"","components":[{"refType":"product","refId":"prd_vinagrete_extra","qty":1}],"code":"GYR-MOL-VIN60","description":"Vinagrete da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true}],"code":"GYR-ALM-BETA","description":"Prato executivo com acompanhamentos da casa e frango.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_prato_gamma","name":"Executivo de Linguiça Toscana","categoryId":"cat_almoco","type":"menu","salePrice":34.14,"active":true,"includeInCatalogCount":true,"notes":"Almoco com feijao em pote, vinagrete e farofa em potes de 60ml.","components":[{"refType":"recipe","refId":"rec_prato_gamma","qty":1},{"refType":"packaging","refId":"pkg_almoco","qty":1,"pricingMode":"pass_through"},{"refType":"packaging","refId":"pkg_potinho_feijao","qty":1},{"refType":"packaging","refId":"pkg_potinho_60","qty":2},{"refType":"packaging","refId":"pkg_guardanapo","qty":1},{"refType":"packaging","refId":"pkg_talher_kit","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"prd_prato_gamma_extra","name":"Linguiça Toscana extra","group":"Proteína extra","chargeMode":"extra","salePriceDelta":9,"notes":"","components":[{"refType":"ingredient","refId":"ing_linguica","qty":150}],"code":"GYR-ALM-EXT-PROT","description":"Linguiça Toscana extra","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"molhos_à_parte_prd_molho_extra","name":"Maionese da Casa 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_molho_extra","qty":1}],"code":"GYR-MOL-MAICSA","description":"Maionese da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_maionese_verde_extra","name":"Maionese Verde 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_verde_extra","qty":1}],"code":"GYR-MOL-MAIVRD","description":"Maionese Verde 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_maionese_chimichurri_extra","name":"Maionese de Chimichurri 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_chimichurri_extra","qty":1}],"code":"GYR-MOL-MAICHM","description":"Maionese de Chimichurri 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_barbecue_extra","name":"Barbecue 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_barbecue_extra","qty":1}],"code":"GYR-MOL-BBQ60","description":"Barbecue 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_vinagrete_extra","name":"Vinagrete da Casa 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":2.5,"notes":"","components":[{"refType":"product","refId":"prd_vinagrete_extra","qty":1}],"code":"GYR-MOL-VIN60","description":"Vinagrete da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true}],"code":"GYR-ALM-GAMMA","description":"Prato executivo com acompanhamentos da casa e linguiça toscana.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_prato_veg","name":"Executivo Vegetariano de Berinjela","categoryId":"cat_almoco","type":"menu","salePrice":34.94,"active":true,"includeInCatalogCount":true,"notes":"Prato executivo com acompanhamentos da casa e antepasto de berinjela.","components":[{"refType":"recipe","refId":"rec_prato_beta","qty":1},{"refType":"packaging","refId":"pkg_almoco","qty":1,"pricingMode":"pass_through"},{"refType":"packaging","refId":"pkg_potinho_feijao","qty":1},{"refType":"packaging","refId":"pkg_potinho_60","qty":2},{"refType":"packaging","refId":"pkg_guardanapo","qty":1},{"refType":"packaging","refId":"pkg_talher_kit","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[{"id":"prd_prato_veg_extra","name":"Antepasto de berinjela extra","group":"Proteína extra","chargeMode":"extra","salePriceDelta":7,"notes":"","components":[{"refType":"recipe","refId":"rec_berinjela_antepasto","qty":150}],"code":"GYR-ALM-EXT-PROT","description":"Antepasto de berinjela extra","erpUnit":"UN","salePriceMode":"manual","groupType":"choice","priceCalculation":"sum","required":false,"minimum":0,"maximum":1,"active":true},{"id":"molhos_à_parte_prd_molho_extra","name":"Maionese da Casa 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_molho_extra","qty":1}],"code":"GYR-MOL-MAICSA","description":"Maionese da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_maionese_verde_extra","name":"Maionese Verde 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_verde_extra","qty":1}],"code":"GYR-MOL-MAIVRD","description":"Maionese Verde 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_maionese_chimichurri_extra","name":"Maionese de Chimichurri 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_maionese_chimichurri_extra","qty":1}],"code":"GYR-MOL-MAICHM","description":"Maionese de Chimichurri 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_barbecue_extra","name":"Barbecue 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":3.5,"notes":"","components":[{"refType":"product","refId":"prd_barbecue_extra","qty":1}],"code":"GYR-MOL-BBQ60","description":"Barbecue 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true},{"id":"molhos_à_parte_prd_vinagrete_extra","name":"Vinagrete da Casa 60ml","group":"Molhos à parte","chargeMode":"extra","salePriceDelta":2.5,"notes":"","components":[{"refType":"product","refId":"prd_vinagrete_extra","qty":1}],"code":"GYR-MOL-VIN60","description":"Vinagrete da Casa 60ml","erpUnit":"UN","salePriceMode":"manual","groupType":"addon","priceCalculation":"sum","required":false,"minimum":0,"maximum":2,"active":true}],"code":"GYR-ALM-VEG","description":"Prato executivo com acompanhamentos da casa e antepasto de berinjela.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_molho_extra","name":"Maionese da Casa 60ml","categoryId":"cat_molhos","type":"extra","salePrice":2.61,"active":true,"includeInCatalogCount":true,"notes":"Molho padrao do lanche vendido a parte.","components":[{"refType":"recipe","refId":"rec_maionese","qty":60},{"refType":"packaging","refId":"pkg_potinho_60","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-MOL-MAIGRL-60","description":"Molho extra em potinho de 60ml.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_maionese_verde_extra","scope":"gyros","name":"Maionese Verde 60ml","categoryId":"cat_molhos","type":"extra","pricingMode":"auto","salePrice":2.77,"active":true,"includeInCatalogCount":true,"notes":"Potinho extra com maionese verde.","components":[{"refType":"recipe","refId":"rec_maionese_verde","qty":60},{"refType":"packaging","refId":"pkg_potinho_60","qty":1}],"addons":[],"code":"GYR-MOL-MAIVRD-60","description":"Molho extra em potinho de 60ml.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_maionese_chimichurri_extra","scope":"gyros","name":"Maionese de Chimichurri 60ml","categoryId":"cat_molhos","type":"extra","pricingMode":"auto","salePrice":2.8,"active":true,"includeInCatalogCount":true,"notes":"Potinho extra com maionese chimichurri.","components":[{"refType":"recipe","refId":"rec_maionese_chimichurri","qty":60},{"refType":"packaging","refId":"pkg_potinho_60","qty":1}],"addons":[],"code":"GYR-MOL-MAICHM-60","description":"Molho extra em potinho de 60ml.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_barbecue_extra","scope":"gyros","name":"Barbecue 60ml","categoryId":"cat_molhos","type":"extra","salePrice":3.78,"pricingMode":"auto","active":true,"includeInCatalogCount":true,"notes":"Barbecue da casa vendido a parte.","components":[{"refType":"recipe","refId":"rec_barbecue_casa","qty":60},{"refType":"packaging","refId":"pkg_potinho_60","qty":1}],"code":"GYR-MOL-BBQ-60","description":"Molho extra em potinho de 60ml.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_vinagrete_extra","name":"Vinagrete da Casa 60ml","categoryId":"cat_molhos","type":"extra","salePrice":3.56,"active":true,"includeInCatalogCount":true,"notes":"Use 60ml para extra à parte","components":[{"refType":"recipe","refId":"rec_vinagrete","qty":60},{"refType":"packaging","refId":"pkg_potinho_60","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-MOL-VIN-60","description":"Molho extra em potinho de 60ml.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_sache5","name":"Pacote extra com 5 sachês","categoryId":"cat_molhos","type":"extra","salePrice":1.81,"active":true,"includeInCatalogCount":true,"notes":"Ketchup, maionese e mostarda","components":[{"refType":"ingredient","refId":"ing_saches_mix","qty":5}],"pricingMode":"auto","scope":"gyros","code":"GYR-EXT-SACH-5","description":"Ketchup, maionese e mostarda","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_churros","name":"Mini Churros 6 un com Doce de Leite","categoryId":"cat_sobremesas","type":"menu","salePrice":11.45,"active":true,"includeInCatalogCount":true,"notes":"Porcao padrao com 6 mini churros congelados ja recheados com doce de leite, polvilhados com acucar e canela.","components":[{"refType":"ingredient","refId":"ing_massa_churros","qty":120},{"refType":"ingredient","refId":"ing_acucar_canela","qty":8},{"refType":"packaging","refId":"pkg_sobremesa","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-SOB-CHU-6UN","description":"Sobremesa com 6 mini churros de doce de leite.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_agua_gas_510","scope":"gyros","name":"Água Mineral com Gás","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":4.94,"active":true,"includeInCatalogCount":true,"notes":"Água mineral com gás 510ml","components":[{"refType":"ingredient","refId":"ing_agua_gas_510","qty":1}],"addons":[],"code":"GYR-BEB-AGUAGAS-510","description":"Água mineral com gás 510ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_agua_510","scope":"gyros","name":"Água Mineral sem Gás","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":3.76,"active":true,"includeInCatalogCount":true,"notes":"Água sem gás 510ml","components":[{"refType":"ingredient","refId":"ing_agua_510","qty":1}],"addons":[],"code":"GYR-BEB-AGUA-510","description":"Água sem gás 510ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_coca","name":"Coca-Cola Lata 350ml","categoryId":"cat_bebidas","type":"bebida","salePrice":10.42,"active":true,"includeInCatalogCount":true,"notes":"Lata 350ml","components":[{"refType":"ingredient","refId":"ing_refri_350","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-BEB-COCA-350","description":"Lata 350ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_coca_zero","name":"Coca-Cola Zero Lata 350ml","categoryId":"cat_bebidas","type":"bebida","salePrice":10.42,"active":true,"includeInCatalogCount":true,"notes":"Lata 350ml","components":[{"refType":"ingredient","refId":"ing_refri_350","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-BEB-COCAZ-350","description":"Lata 350ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_guarana_350","scope":"gyros","name":"Guaraná Antarctica Lata 350ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":10.42,"active":true,"includeInCatalogCount":true,"notes":"Usa o custo médio da família de refrigerante lata 350ml.","components":[{"refType":"ingredient","refId":"ing_refri_350","qty":1}],"addons":[],"code":"GYR-BEB-GUAR-350","description":"Usa o custo médio da família de refrigerante lata 350ml.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_fanta","name":"Fanta Laranja Lata 350ml","categoryId":"cat_bebidas","type":"bebida","salePrice":10.42,"active":true,"includeInCatalogCount":true,"notes":"Lata 350ml","components":[{"refType":"ingredient","refId":"ing_refri_350","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-BEB-FANTA-350","description":"Lata 350ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_schweppes_350","scope":"gyros","name":"Schweppes Citrus 350ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":11.6,"active":true,"includeInCatalogCount":true,"notes":"Lata 350ml","components":[{"refType":"ingredient","refId":"ing_schweppes_350","qty":1}],"addons":[],"code":"GYR-BEB-SCHW-350","description":"Lata 350ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_sprite_350","scope":"gyros","name":"Sprite 350ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":10.98,"active":true,"includeInCatalogCount":true,"notes":"Lata 350ml","components":[{"refType":"ingredient","refId":"ing_sprite_350","qty":1}],"addons":[],"code":"GYR-BEB-SPR-350","description":"Lata 350ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_ice_tea_limao_450","scope":"gyros","name":"Chá Ice Tea Leão Limão 450ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":12.9,"active":true,"includeInCatalogCount":true,"notes":"Separado para refletir o cardápio do iFood.","components":[{"refType":"ingredient","refId":"ing_garrafa_450","qty":1}],"addons":[],"code":"GYR-BEB-ITEA-LIM-450","description":"Separado para refletir o cardápio do iFood.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_ice_tea_pessego_450","scope":"gyros","name":"Chá Ice Tea Leão Pêssego 450ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":12.9,"active":true,"includeInCatalogCount":true,"notes":"Separado para refletir o cardápio do iFood.","components":[{"refType":"ingredient","refId":"ing_garrafa_450","qty":1}],"addons":[],"code":"GYR-BEB-ITEA-PES-450","description":"Separado para refletir o cardápio do iFood.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bud_330","scope":"gyros","name":"Budweiser 330ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":17.88,"active":true,"includeInCatalogCount":true,"notes":"Long neck 330ml","components":[{"refType":"ingredient","refId":"ing_cerveja_bud_330","qty":1}],"addons":[],"code":"GYR-BEB-BUD-330","description":"Long neck 330ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_heineken_330","scope":"gyros","name":"Heineken 330ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":20.75,"active":true,"includeInCatalogCount":true,"notes":"Long neck 330ml","components":[{"refType":"ingredient","refId":"ing_cerveja_heineken_330","qty":1}],"addons":[],"code":"GYR-BEB-HEI-330","description":"Long neck 330ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_h2o_500","scope":"gyros","name":"H2OH! 500ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":14.02,"active":true,"includeInCatalogCount":true,"notes":"Garrafa PET 500ml","components":[{"refType":"ingredient","refId":"ing_h2o_500","qty":1}],"addons":[],"code":"GYR-BEB-H2O-500","description":"Garrafa PET 500ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_limoneto_500","scope":"gyros","name":"H2OH! Zero 500ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":14.02,"active":true,"includeInCatalogCount":true,"notes":"Garrafa PET 500ml","components":[{"refType":"ingredient","refId":"ing_limoneto_500","qty":1}],"addons":[],"code":"GYR-BEB-LIMO-500","description":"Garrafa PET 500ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_delvalle_uva_290","scope":"gyros","name":"Suco Del Valle Uva 290ml","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":11.01,"active":true,"includeInCatalogCount":true,"notes":"Lata 290ml","components":[{"refType":"ingredient","refId":"ing_delvalle_uva_290","qty":1}],"addons":[],"code":"GYR-BEB-DVUVA-290","description":"Lata 290ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_coca_2l","scope":"gyros","name":"Coca-Cola Original 2L","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":32.86,"active":true,"includeInCatalogCount":true,"notes":"Garrafa PET 2 litros","components":[{"refType":"ingredient","refId":"ing_coca_2l","qty":1}],"addons":[],"code":"GYR-BEB-COCA-2000","description":"Garrafa PET 2 litros","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_base_lanche_medio","name":"Base interna — Lanche assinatura médio","categoryId":"cat_base_interna","type":"base","salePrice":30.41,"active":false,"includeInCatalogCount":false,"notes":"Base interna media usada como referencia para combos familia.","components":[{"refType":"recipe","refId":"rec_pao_parmesao","qty":1},{"refType":"ingredient","refId":"ing_frango","qty":150},{"refType":"recipe","refId":"rec_manteiga_alho","qty":5},{"refType":"ingredient","refId":"ing_mucarela","qty":40},{"refType":"recipe","refId":"rec_vinagrete","qty":40},{"refType":"recipe","refId":"rec_maionese","qty":10},{"refType":"packaging","refId":"pkg_lanche","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-BAS-LAN-MED","description":"Base interna media usada como referencia para combos familia.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_base_prato_medio","name":"Base interna — Prato médio","categoryId":"cat_base_interna","type":"base","salePrice":34.94,"active":false,"includeInCatalogCount":false,"notes":"Base interna media usada como referencia para combos familia de almoco.","components":[{"refType":"ingredient","refId":"ing_arroz","qty":150},{"refType":"ingredient","refId":"ing_feijao","qty":100},{"refType":"recipe","refId":"rec_vinagrete","qty":60},{"refType":"ingredient","refId":"ing_farofa_pronta","qty":40},{"refType":"ingredient","refId":"ing_frango","qty":150},{"refType":"packaging","refId":"pkg_almoco","qty":1,"pricingMode":"pass_through"},{"refType":"packaging","refId":"pkg_potinho_feijao","qty":1},{"refType":"packaging","refId":"pkg_potinho_60","qty":2},{"refType":"packaging","refId":"pkg_guardanapo","qty":1},{"refType":"packaging","refId":"pkg_talher_kit","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-BAS-ALM-MED","description":"Base interna media usada como referencia para combos familia de almoco.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_almoco_familia","name":"Almoço Família","categoryId":"cat_familia","type":"combo","salePrice":161.37,"active":false,"includeInCatalogCount":false,"notes":"3 pratos + 1 Coca-Cola 2L.","components":[{"refType":"product","refId":"prd_base_prato_medio","qty":3},{"refType":"product","refId":"prd_coca_2l","qty":1},{"refType":"packaging","refId":"pkg_combo_familia","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-FAM-ALM-3P-2L","description":"3 pratos + 1 Coca-Cola 2L.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_g_lp","scope":"gyros","name":"Batata frita temperada — Grande (240g) • Lemon Pepper (historico)","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":10.54,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir custo correto sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_g","qty":1},{"refType":"ingredient","refId":"ing_lemon_pepper","qty":4},{"refType":"packaging","refId":"pkg_bat_g","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":2}],"code":"PRD_BAT_G_LP","description":"Variante vendavel separada, para refletir custo correto sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_g_pap","scope":"gyros","name":"Batata frita temperada — Grande (240g) • Páprica doce (historico)","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":10.42,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir custo correto sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_g","qty":1},{"refType":"ingredient","refId":"ing_paprica_doce","qty":4},{"refType":"packaging","refId":"pkg_bat_g","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":2}],"code":"PRD_BAT_G_PAP","description":"Variante vendavel separada, para refletir custo correto sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_m","name":"Batata frita temperada — Media (historico 120g)","categoryId":"cat_batatas","type":"menu","salePrice":3.87,"active":false,"includeInCatalogCount":false,"notes":"Item antigo mantido apenas para historico.","components":[{"refType":"recipe","refId":"rec_batata_m","qty":1},{"refType":"packaging","refId":"pkg_bat_m","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":2}],"pricingMode":"auto","scope":"gyros","code":"PRD_BAT_M","description":"Item antigo mantido apenas para historico.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_p_lp","scope":"gyros","name":"Batata frita temperada — Pequena (130g) • Lemon Pepper (historico)","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":5.8,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir custo correto sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_p","qty":1},{"refType":"ingredient","refId":"ing_lemon_pepper","qty":2},{"refType":"packaging","refId":"pkg_bat_p","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":2}],"code":"PRD_BAT_P_LP","description":"Variante vendavel separada, para refletir custo correto sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_p_pap","scope":"gyros","name":"Batata frita temperada — Pequena (130g) • Páprica doce (historico)","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":5.74,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir custo correto sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_p","qty":1},{"refType":"ingredient","refId":"ing_paprica_doce","qty":2},{"refType":"packaging","refId":"pkg_bat_p","qty":1},{"refType":"packaging","refId":"pkg_guardanapo","qty":2}],"code":"PRD_BAT_P_PAP","description":"Variante vendavel separada, para refletir custo correto sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_g_cat","scope":"gyros","name":"Batata gratinada — Grande (M120 500ml) • Catupiry","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":32.97,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_g","qty":1},{"refType":"recipe","refId":"rec_grat_cat_g","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m120","qty":1}],"code":"PRD_BAT_GRAT_G_CAT","description":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_g_4q","scope":"gyros","name":"Batata gratinada — Grande (M120 500ml) • Catupiry sabor 4 queijos","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":29.03,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_g","qty":1},{"refType":"recipe","refId":"rec_grat_4q_g","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m120","qty":1}],"code":"PRD_BAT_GRAT_G_4Q","description":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_g_che","scope":"gyros","name":"Batata gratinada — Grande (M120 500ml) • Cheddar","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":25.76,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_g","qty":1},{"refType":"recipe","refId":"rec_grat_cheddar_g","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m120","qty":1}],"code":"PRD_BAT_GRAT_G_CHE","description":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_m","name":"Batata gratinada — Media (historico 120g)","categoryId":"cat_batatas","type":"menu","salePrice":9.69,"active":false,"includeInCatalogCount":false,"notes":"Item antigo mantido apenas para historico.","components":[{"refType":"recipe","refId":"rec_batata_m","qty":1},{"refType":"recipe","refId":"rec_grat_muc","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m120","qty":1}],"pricingMode":"auto","scope":"gyros","code":"PRD_BAT_GRAT_M","description":"Item antigo mantido apenas para historico.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_p_cat","scope":"gyros","name":"Batata gratinada — Pequena (M90 220ml) • Catupiry (historico)","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":16.89,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_p","qty":1},{"refType":"recipe","refId":"rec_grat_cat_p","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m90","qty":1}],"code":"PRD_BAT_GRAT_P_CAT","description":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_p_4q","scope":"gyros","name":"Batata gratinada — Pequena (M90 220ml) • Catupiry sabor 4 queijos (historico)","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":14.92,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_p","qty":1},{"refType":"recipe","refId":"rec_grat_4q_p","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m90","qty":1}],"code":"PRD_BAT_GRAT_P_4Q","description":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_bat_grat_p_che","scope":"gyros","name":"Batata gratinada — Pequena (M90 220ml) • Cheddar (historico)","categoryId":"cat_batatas","type":"menu","pricingMode":"auto","salePrice":13.28,"active":false,"includeInCatalogCount":false,"notes":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","components":[{"refType":"recipe","refId":"rec_batata_p","qty":1},{"refType":"recipe","refId":"rec_grat_cheddar_p","qty":1},{"refType":"packaging","refId":"pkg_bandeja_m90","qty":1}],"code":"PRD_BAT_GRAT_P_CHE","description":"Variante vendavel separada, para refletir troca de queijo sem motor de opcionais. Historico: substituido pela modelagem de adicionais do item base.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_coca_zero_2l","scope":"gyros","name":"Coca-Cola Zero 2L","categoryId":"cat_bebidas","type":"bebida","pricingMode":"auto","salePrice":32.86,"active":false,"includeInCatalogCount":false,"notes":"Produto separado para refletir o cardápio do iFood.","components":[{"refType":"ingredient","refId":"ing_coca_zero_2l","qty":1}],"addons":[],"code":"GYR-BEB-COCAZ-2000","description":"Produto separado para refletir o cardápio do iFood.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo1_alpha","name":"Combo 1 — Alpha + Batata M (200g)","categoryId":"cat_combos","type":"combo","salePrice":55.26,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Alpha como item principal.","components":[{"refType":"product","refId":"prd_alpha","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB1-ALPHA","description":"Combo fechado com Alpha como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo1_beta","name":"Combo 1 — Beta + Batata M (200g)","categoryId":"cat_combos","type":"combo","salePrice":44.62,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Beta como item principal.","components":[{"refType":"product","refId":"prd_beta","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB1-BETA","description":"Combo fechado com Beta como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo1_gamma","name":"Combo 1 — Gamma + Batata M (200g)","categoryId":"cat_combos","type":"combo","salePrice":41.86,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Gamma como item principal.","components":[{"refType":"product","refId":"prd_gamma","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB1-GAMMA","description":"Combo fechado com Gamma como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo2_alpha","name":"Combo 2 — Alpha + Bebida 350ml","categoryId":"cat_combos","type":"combo","salePrice":60.07,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Alpha como item principal.","components":[{"refType":"product","refId":"prd_alpha","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB2-ALPHA","description":"Combo fechado com Alpha como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo2_beta","name":"Combo 2 — Beta + Bebida 350ml","categoryId":"cat_combos","type":"combo","salePrice":49.43,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Beta como item principal.","components":[{"refType":"product","refId":"prd_beta","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB2-BETA","description":"Combo fechado com Beta como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo2_gamma","name":"Combo 2 — Gamma + Bebida 350ml","categoryId":"cat_combos","type":"combo","salePrice":46.66,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Gamma como item principal.","components":[{"refType":"product","refId":"prd_gamma","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB2-GAMMA","description":"Combo fechado com Gamma como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo3_alpha","name":"Combo 3 — Alpha + Batata M + Bebida 350ml","categoryId":"cat_combos","type":"combo","salePrice":65.68,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Alpha como item principal.","components":[{"refType":"product","refId":"prd_alpha","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB3-ALPHA","description":"Combo fechado com Alpha como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo3_beta","name":"Combo 3 — Beta + Batata M + Bebida 350ml","categoryId":"cat_combos","type":"combo","salePrice":55.05,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Beta como item principal.","components":[{"refType":"product","refId":"prd_beta","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB3-BETA","description":"Combo fechado com Beta como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo3_gamma","name":"Combo 3 — Gamma + Batata M + Bebida 350ml","categoryId":"cat_combos","type":"combo","salePrice":52.28,"active":false,"includeInCatalogCount":false,"notes":"Combo fechado com Gamma como item principal.","components":[{"refType":"product","refId":"prd_gamma","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CMB3-GAMMA","description":"Combo fechado com Gamma como item principal.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo_almoco_alpha","name":"Combo Almoço — Alpha + Bebida + Batata M","categoryId":"cat_almoco","type":"combo","salePrice":69.43,"active":false,"includeInCatalogCount":false,"notes":"Combo almoço fechado com Alpha — Fraldinha.","components":[{"refType":"product","refId":"prd_prato_alpha","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CALM-ALPHA","description":"Combo almoço fechado com Alpha — Fraldinha.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo_almoco_beta","name":"Combo Almoço — Beta + Bebida + Batata M","categoryId":"cat_almoco","type":"combo","salePrice":59.17,"active":false,"includeInCatalogCount":false,"notes":"Combo almoço fechado com Beta — Frango.","components":[{"refType":"product","refId":"prd_prato_beta","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CALM-BETA","description":"Combo almoço fechado com Beta — Frango.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo_almoco_gamma","name":"Combo Almoço — Gamma + Bebida + Batata M","categoryId":"cat_almoco","type":"combo","salePrice":58.37,"active":false,"includeInCatalogCount":false,"notes":"Combo almoço fechado com Gamma — Linguiça.","components":[{"refType":"product","refId":"prd_prato_gamma","qty":1},{"refType":"product","refId":"prd_bat_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","addons":[],"code":"GYR-CALM-GAMMA","description":"Combo almoço fechado com Gamma — Linguiça.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_combo_almoco","name":"Combo Almoço — Prato + Bebida + Mini batata (80g)","categoryId":"cat_almoco","type":"combo","salePrice":58.25,"active":false,"includeInCatalogCount":false,"notes":"Combo almoco usando prato real do Gyros. Historico: substituido por combos de almoco separados em Alpha, Beta e Gamma.","components":[{"refType":"product","refId":"prd_prato_beta","qty":1},{"refType":"recipe","refId":"rec_batata_p","qty":1},{"refType":"ingredient","refId":"ing_refri_350","qty":1},{"refType":"packaging","refId":"pkg_bat_p","qty":1},{"refType":"packaging","refId":"pkg_sacola_delivery","qty":1}],"pricingMode":"auto","scope":"gyros","code":"PRD_COMBO_ALMOCO","description":"Combo almoco usando prato real do Gyros. Historico: substituido por combos de almoco separados em Alpha, Beta e Gamma.","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_garrafa_450","name":"Garrafa 450ml (pêssego ou limão)","categoryId":"cat_bebidas","type":"bebida","salePrice":12.9,"active":false,"includeInCatalogCount":false,"notes":"Bebida 450ml","components":[{"refType":"ingredient","refId":"ing_garrafa_450","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-BEB-CHA-450","description":"Bebida 450ml","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]},{"id":"prd_suco_natural","name":"Suco natural (garrafinha)","categoryId":"cat_bebidas","type":"bebida","salePrice":12.6,"active":false,"includeInCatalogCount":false,"notes":"Produção própria","components":[{"refType":"ingredient","refId":"ing_suco_natural","qty":1}],"pricingMode":"auto","scope":"gyros","code":"GYR-BEB-SUC-NAT","description":"Produção própria","erpUnit":"UN","productCondition":"new","erpProductType":"custom","salesChannels":["default","delivery","ifood"]}],"fixedCosts":[{"id":"fix_aluguel","name":"Aluguel","amount":1000,"notes":"Rateado por item ativo do cardápio","scope":"gyros","code":"FIX_ALUGUEL","description":"Rateado por item ativo do cardápio"},{"id":"fix_folha","name":"Funcionários / pró-labore","amount":6000,"notes":"Rateado por item ativo do cardápio","scope":"gyros","code":"FIX_FOLHA","description":"Rateado por item ativo do cardápio"},{"id":"fix_energia","name":"Energia + gás + água","amount":1800,"notes":"Rateado por item ativo do cardápio","scope":"gyros","code":"FIX_ENERGIA","description":"Rateado por item ativo do cardápio"},{"id":"fix_ifood","name":"Software / taxas / operação","amount":950,"notes":"Rateado por item ativo do cardápio","scope":"gyros","code":"FIX_IFOOD","description":"Rateado por item ativo do cardápio"},{"id":"fix_outros","name":"Outros custos fixos","amount":900,"notes":"Contabilidade, manutenção, internet etc.","scope":"gyros","code":"FIX_OUTROS","description":"Contabilidade, manutenção, internet etc."}],"suppliers":[{"id":"sup_padaria","scope":"gyros","name":"Padaria Versailles","legalName":"Padaria Versailles","cnpj":"","sellerName":"","sellerPhone":"(11) 2451-9022","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Debito"],"notes":"Fornecedor principal dos pães prontos do Gyros, com histórico confirmado de Pão Francês com Parmesão.","address":"Av. Dr. Timóteo Penteado, 2312 - Picanço","cep":"07094-000","city":"Guarulhos","state":"SP","evidenceType":"documented","evidenceSource":"Fornecedor confirmado por histórico operacional e comprovantes importados em docs/inputs/2026","code":"SUP_PADARIA","description":"Fornecedor atual dos pães do Gyros"},{"id":"sup_laticinio","scope":"gyros","name":"Laticínio","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_LATICINIO","description":"Laticínio"},{"id":"sup_acougue","scope":"gyros","name":"Açougue","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_ACOUGUE","description":"Açougue"},{"id":"sup_distribuidor","scope":"gyros","name":"Distribuidor","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_DISTRIBUIDOR","description":"Distribuidor"},{"id":"sup_congelados","scope":"gyros","name":"Meus Congelados","legalName":"Meus Congelados","cnpj":"","sellerName":"Carol","sellerPhone":"(11) 94036-9300","sellerEmail":"contato@meuscongelados.com.br","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"Fornecedor atual do mini churros congelado recheado com doce de leite.","evidenceType":"review","evidenceSource":"Contato e referencia operacional do fornecedor; confirmar com pedido, nota ou comprovante","address":"Avenida Marechal Argolo Ferrao, 51 - Vila Sabrina","city":"Sao Paulo","state":"SP","cep":"","code":"SUP_CONGELADOS","description":"Fornecedor atual do mini churros congelado recheado com doce de leite."},{"id":"sup_secos","scope":"gyros","name":"Secos","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"estimated","evidenceSource":"Fornecedor ligado a custos pesquisados / estimados","code":"SUP_SECOS","description":"Secos"},{"id":"sup_cozinha","scope":"gyros","name":"Cozinha","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_COZINHA","description":"Cozinha"},{"id":"sup_hortifruti","scope":"gyros","name":"Hortifruti","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_HORTIFRUTI","description":"Hortifruti"},{"id":"sup_mercearia","scope":"gyros","name":"Mercearia","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_MERCEARIA","description":"Mercearia"},{"id":"sup_descartaveis","scope":"gyros","name":"Descartáveis","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_DESCARTAVEIS","description":"Descartáveis"},{"id":"sup_docaria","scope":"gyros","name":"Doçaria","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_DOCARIA","description":"Doçaria"},{"id":"sup_bebidas","scope":"gyros","name":"Bebidas","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_BEBIDAS","description":"Bebidas"},{"id":"sup_producao","scope":"gyros","name":"Produção","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"review","evidenceSource":"Fornecedor inferido a partir da base atual; revisar com nota, orçamento ou contato","code":"SUP_PRODUCAO","description":"Produção"},{"id":"sup_mercado","scope":"gyros","name":"Mercado","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"estimated","evidenceSource":"Fornecedor ligado a custos pesquisados / estimados","code":"SUP_MERCADO","description":"Mercado"},{"id":"sup_zona_cerealista","scope":"gyros","name":"Zona Cerealista","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"documented","evidenceSource":"Fornecedor identificado em nota, lista de compras ou orçamento","code":"SUP_ZONA_CEREALISTA","description":"Zona Cerealista"},{"id":"sup_mercado_referencia_web","scope":"gyros","name":"Mercado / referência web","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"estimated","evidenceSource":"Fornecedor ligado a custos pesquisados / estimados","code":"SUP_MERCADO_REFERENCIA_WEB","description":"Mercado / referência web"},{"id":"sup_mercearia_referencia_web","scope":"gyros","name":"Mercearia / referência web","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"estimated","evidenceSource":"Fornecedor ligado a custos pesquisados / estimados","code":"SUP_MERCEARIA_REFERENCIA_WEB","description":"Mercearia / referência web"},{"id":"sup_hortifruti_referencia_web","scope":"gyros","name":"Hortifruti / referência web","legalName":"","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"estimated","evidenceSource":"Fornecedor ligado a custos pesquisados / estimados","code":"SUP_HORTIFRUTI_REFERENCIA_WEB","description":"Hortifruti / referência web"},{"id":"sup_samppael","scope":"gyros","name":"Samppel","legalName":"Samppel Comércio de Embalagens Ltda","cnpj":"00.018.403/0001-68","sellerName":"Carla Patricia Lima Costa da Silva","sellerPhone":"(11) 3931-0750","sellerEmail":"contato@samppel.com.br","pixKey":"","pixKeyType":"aleatoria","paymentMethods":["PIX"],"notes":"","evidenceType":"documented","evidenceSource":"Pedido de venda PV 10002 / documento do fornecedor","address":"Rua Antônio Carlos de Paiva Camelo, 401 - Polvilho","cep":"07793-870","city":"Cajamar","state":"SP","code":"SUP_SAMPPAEL","description":"Samppel"},{"id":"sup_pmg","scope":"gyros","name":"PMG Comércio de Frios e Laticínios","legalName":"PMG Comércio de Frios e Laticínios","cnpj":"","sellerName":"PMG","sellerPhone":"(11) 5645-0000","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartão de crédito","Cartao De Credito"],"notes":"Fornecedor comprovado por venda nº 8997086","evidenceType":"documented","evidenceSource":"Nota/lista oficial PMG - Venda nº 8997086","code":"SUP_PMG","description":"Fornecedor comprovado por venda nº 8997086","address":"","cep":"","city":"","state":""},{"id":"sup_bom_clima","scope":"gyros","name":"Bom Clima Embalagens Ltda","legalName":"Bom Clima Embalagens Ltda","cnpj":"55.912.329/0001-10","sellerName":"João Victor","sellerPhone":"(11) 93357-8279 / (11) 99651-4848","sellerEmail":"bomclima@bomclimaembalagens.com","pixKey":"","pixKeyType":"","paymentMethods":["PIX","Dinheiro"],"notes":"Fornecedor comprovado por orçamento nº 343","address":"Avenida João Bernardo Medeiros, 369 - Jardim Bom Clima","cep":"07197-010","city":"Guarulhos","state":"SP","evidenceType":"documented","evidenceSource":"Orçamento 343 / Bom Clima Embalagens","code":"SUP_BOM_CLIMA","description":"Fornecedor comprovado por orçamento nº 343"},{"id":"sup_armazem_sao_vito","scope":"gyros","name":"Armazém São Vito","legalName":"Armazém São Vito","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","address":"","cep":"","city":"","state":"","pixKey":"","pixKeyType":"","paymentMethods":["PIX"],"notes":"Fornecedor de secos e temperos da Zona Cerealista com pedido documentado em 25/02/2026.","evidenceType":"documented","evidenceSource":"Fornecedor confirmado por captura de pedido online usada no histórico de compras","code":"SUP_ARMAZEM_SAO_VITO","description":"Canal online de compra de secos na região da Zona Cerealista."},{"id":"sup_chaveiro-benizio","scope":"gyros","name":"Chaveiro Benízio","legalName":"Chaveiro Benízio","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["A Vista"],"notes":"Fornecedor criado a partir do documento Cópias de chaves tetras.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_CHAVEIRO_BENIZIO","description":"Chaveiro Benízio"},{"id":"sup_mercado-fonte-nova-recreio","scope":"gyros","name":"Mercado Fonte Nova Recreio Ltda","legalName":"Mercado Fonte Nova Recreio Ltda","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Debito","Dinheiro","Cartao De Credito"],"notes":"Fornecedor criado a partir do documento Mercado Fonte Nova - hortifruti 31/03.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_MERCADO_FONTE_NOVA_RECREIO_LTDA","description":"Mercado Fonte Nova Recreio Ltda"},{"id":"sup_fornecedor-nao-identificado-comanda-manual-laranjinha-it","scope":"gyros","name":"Fornecedor não identificado (comanda manual + Laranjinha Itaú)","legalName":"Fornecedor não identificado (comanda manual + Laranjinha Itaú)","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Debito"],"notes":"Fornecedor criado a partir do documento Churros.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_FORNECEDOR_NAO_IDENTIFICADO_COMANDA_","description":"Fornecedor não identificado (comanda manual + Laranjinha Itaú)"},{"id":"sup_tenda-atacado-vl-galvao","scope":"gyros","name":"Tenda Atacado Ltda (VL Galvão)","legalName":"Tenda Atacado Ltda (VL Galvão)","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Debito"],"notes":"Fornecedor criado a partir do documento Tenda Atacado - hortifruti e azeite.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_TENDA_ATACADO_LTDA_VL_GALVAO","description":"Tenda Atacado Ltda (VL Galvão)"},{"id":"sup_cnd-27-de-utilidades","scope":"gyros","name":"CND 27 Comércio de Utilidades Ltda","legalName":"CND 27 Comércio de Utilidades Ltda","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Credito A Vista"],"notes":"Fornecedor criado a partir do documento Moedor manual e processador.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_CND_27_COMERCIO_DE_UTILIDADES_LTDA","description":"CND 27 Comércio de Utilidades Ltda"},{"id":"sup_mercado-fonte-nova-gop","scope":"gyros","name":"Mercado Fonte Nova GOP","legalName":"Mercado Fonte Nova GOP","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Credito"],"notes":"Fornecedor criado a partir do documento Fonte Nova GOP - água, Sprite e cola.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_MERCADO_FONTE_NOVA_GOP","description":"Mercado Fonte Nova GOP"},{"id":"sup_urca-de-bebidas-e-alimentos","scope":"gyros","name":"URCA Com. de Bebidas e Alimentos","legalName":"URCA Com. de Bebidas e Alimentos","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["TEF","Debito A Vista","Credito A Vista"],"notes":"Fornecedor criado a partir do documento Seleta Tricolor 700 ml.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_URCA_COM_DE_BEBIDAS_E_ALIMENTOS","description":"URCA Com. de Bebidas e Alimentos"},{"id":"sup_ikoa-plast-edido-2025-embalagens-em-geral","scope":"gyros","name":"IKOA Plast Comércio / EDIDO 2025 Embalagens em Geral","legalName":"IKOA Plast Comércio / EDIDO 2025 Embalagens em Geral","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Credito A Vista"],"notes":"Fornecedor criado a partir do documento Airpack Mussi 70B.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_IKOA_PLAST_COMERCIO_EDIDO_2025_EMBAL","description":"IKOA Plast Comércio / EDIDO 2025 Embalagens em Geral"},{"id":"sup_casa-de-carne-boi-preto","scope":"gyros","name":"Casa de Carne Boi Preto","legalName":"Casa de Carne Boi Preto","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Dinheiro","Credito"],"notes":"Fornecedor criado a partir do documento Casa de Carne Boi Preto - diversos.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_CASA_DE_CARNE_BOI_PRETO_LTDA","description":"Casa de Carne Boi Preto Ltda"},{"id":"sup_sendas","scope":"gyros","name":"Sendas Distribuidora S/A","legalName":"Sendas Distribuidora S/A","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Debito","Cartao De Credito","Passai"],"notes":"Fornecedor criado a partir do documento Sendas 11/04 - mercado misto.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_SENDAS_DISTRIBUIDORA_S_A","description":"Sendas Distribuidora S/A"},{"id":"sup_mercado-leonice","scope":"gyros","name":"Mercado Leonice","legalName":"Mercado Leonice","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao"],"notes":"Fornecedor criado a partir do documento Tomate Débora.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_MERCADO_LEONICE","description":"Mercado Leonice"},{"id":"sup_dilson-rosa","scope":"gyros","name":"Dilson Rosa EPP","legalName":"Dilson Rosa EPP","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Nao Informado"],"notes":"Fornecedor criado a partir do documento Peças para queimador.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_DILSON_ROSA_EPP","description":"Dilson Rosa EPP"},{"id":"sup_js-de-coifas","scope":"gyros","name":"JS Comércio de Coifas","legalName":"JS Comércio de Coifas","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Credito Em 10 Parcelas"],"notes":"Fornecedor criado a partir do documento Mesa inox.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_JS_COMERCIO_DE_COIFAS","description":"JS Comércio de Coifas"},{"id":"sup_bvs-sucessoinfo","scope":"gyros","name":"BVS SucessoInfo","legalName":"BVS SucessoInfo","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Visa Electron","Visa Parcelado"],"notes":"Fornecedor criado a partir do documento Tablet 10\".","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_BVS_SUCESSOINFO","description":"BVS SucessoInfo"},{"id":"sup_temper-condimentos-e-embalagens","scope":"gyros","name":"Temper Condimentos e Embalagens Ltda","legalName":"Temper Condimentos e Embalagens Ltda","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Nao Informado"],"notes":"Fornecedor criado a partir do documento Temperos secos.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_TEMPER_CONDIMENTOS_E_EMBALAGENS_LTDA","description":"Temper Condimentos e Embalagens Ltda"},{"id":"sup_mc1-commerce-nacionais-e-importados","scope":"gyros","name":"MC1 Commerce Nacionais e Importados","legalName":"MC1 Commerce Nacionais e Importados","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Debito"],"notes":"Fornecedor criado a partir do documento Adaptador Dako.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_MC1_COMMERCE_NACIONAIS_E_IMPORTADOS","description":"MC1 Commerce Nacionais e Importados"},{"id":"sup_frigo-noronha","scope":"gyros","name":"Frigo Noronha","legalName":"Frigo Noronha","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Credito 1x"],"notes":"Fornecedor criado a partir do documento Fraldinha e fraldinha grill.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_FRIGO_NORONHA","description":"Frigo Noronha"},{"id":"sup_laticinios-catupiry","scope":"gyros","name":"Laticínios Catupiry Ltda","legalName":"Laticínios Catupiry Ltda","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Debito"],"notes":"Fornecedor criado a partir do documento Requeijão 4 queijos profissional.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_LATICINIOS_CATUPIRY_LTDA","description":"Laticínios Catupiry Ltda"},{"id":"sup_construdecor-sodimac-guarulhos","scope":"gyros","name":"Construdecor S/A (Sodimac Guarulhos)","legalName":"Construdecor S/A (Sodimac Guarulhos)","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Credito"],"notes":"Fornecedor criado a partir do documento Prolongador e extensão.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_CONSTRUDECOR_S_A_SODIMAC_GUARULHOS","description":"Construdecor S/A (Sodimac Guarulhos)"},{"id":"sup_poupaki-atacadista","scope":"gyros","name":"Poupaki Atacadista Ltda","legalName":"Poupaki Atacadista Ltda","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["TEF","Carteira Digital","PIX"],"notes":"Fornecedor criado a partir do documento Poupaki 19/04 - carnes e laticínios.","address":"Av. Guarulhos, 2753 - Gopouva, Guarulhos - SP, 07022-020","cep":"07022-020","city":"Guarulhos","state":"SP","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_POUPAKI_ATACADISTA_LTDA","description":"Poupaki Atacadista Ltda"},{"id":"sup_supermercados-irmaos-lopes","scope":"gyros","name":"Supermercados Irmãos Lopes Ltda","legalName":"Supermercados Irmãos Lopes Ltda","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Carteira Digital","PIX"],"notes":"Fornecedor criado a partir do documento Irmãos Lopes - hortifruti e Coca-Cola 2L.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_SUPERMERCADOS_IRMAOS_LOPES_LTDA","description":"Supermercados Irmãos Lopes Ltda"},{"id":"sup_dusk-moon-variedades","scope":"gyros","name":"DUSK MOON VARIEDADES LTDA","legalName":"DUSK MOON VARIEDADES LTDA","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Mercado Livre"],"notes":"Fornecedor criado a partir do documento TV Stick Android.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_DUSK_MOON_VARIEDADES_LTDA","description":"DUSK MOON VARIEDADES LTDA"},{"id":"sup_lucciolar-home","scope":"gyros","name":"LUCCIOLAR HOME LTDA","legalName":"LUCCIOLAR HOME LTDA","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Mercado Livre"],"notes":"Fornecedor criado a partir do documento Suporte para celular ou tablet.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_LUCCIOLAR_HOME_LTDA","description":"LUCCIOLAR HOME LTDA"},{"id":"sup_descomparar","scope":"gyros","name":"DESCOMPARAR LTDA","legalName":"DESCOMPARAR LTDA","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Mercado Livre"],"notes":"Fornecedor criado a partir do documento Cartão de memória 32GB.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_DESCOMPARAR_LTDA","description":"DESCOMPARAR LTDA"},{"id":"sup_salamandra","scope":"gyros","name":"Salamandra","legalName":"Salamandra","cnpj":"","sellerName":"Editar","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Credito Parcelado Emissor"],"notes":"Compra da salamandra realizada via Facebook Negócios.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_SALAMANDRA","description":"Salamandra"},{"id":"sup_supermercado-x","scope":"gyros","name":"Supermercado X","legalName":"Supermercado X","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Credito"],"notes":"Fornecedor criado a partir do documento Supermercado X - muçarela e mercearia.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_SUPERMERCADO_X","description":"Supermercado X"},{"id":"sup_ikoa-plast","scope":"gyros","name":"IKOA Plast","legalName":"IKOA Plast","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Nao Se Aplica"],"notes":"Fornecedor criado a partir do documento Orçamento 2025.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_IKOA_PLAST","description":"IKOA Plast"},{"id":"sup_casamarela","scope":"gyros","name":"Casamarela","legalName":"Casamarela","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Nao Se Aplica"],"notes":"Fornecedor criado a partir do documento Orçamento 786668.","address":"Av. Celso Garcia - Brás, São Paulo - SP, 03019-010","cep":"03019-010","city":"Sao Paulo","state":"SP","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_CASAMARELA","description":"Casamarela"},{"id":"sup_or-inox-equipamentos","scope":"gyros","name":"OR INOX Equipamentos Industriais","legalName":"OR INOX Equipamentos Industriais","cnpj":"","sellerName":"","sellerPhone":"","sellerEmail":"","pixKey":"","pixKeyType":"","paymentMethods":["Cartao De Credito"],"notes":"Fornecedor criado a partir do documento Rechaud banho-maria.","address":"","cep":"","city":"","state":"","evidenceType":"documented","evidenceSource":"Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs","code":"SUP_OR_INOX_EQUIPAMENTOS_INDUSTRIAIS","description":"OR INOX Equipamentos Industriais"}],"purchaseOrders":[{"id":"ord_import_sup_laticinio","scope":"gyros","supplierId":"sup_laticinio","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":156.32,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_acougue","scope":"gyros","supplierId":"sup_acougue","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":130.94,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_distribuidor","scope":"gyros","supplierId":"sup_distribuidor","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":31,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_congelados","scope":"gyros","supplierId":"sup_congelados","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":129.89,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_cozinha","scope":"gyros","supplierId":"sup_cozinha","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":21.5,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_hortifruti","scope":"gyros","supplierId":"sup_hortifruti","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":82.5,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_mercearia","scope":"gyros","supplierId":"sup_mercearia","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":237.96,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_descartaveis","scope":"gyros","supplierId":"sup_descartaveis","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":13.3,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_docaria","scope":"gyros","supplierId":"sup_docaria","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":54,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_bebidas","scope":"gyros","supplierId":"sup_bebidas","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":956.3400000000001,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_producao","scope":"gyros","supplierId":"sup_producao","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":42,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_zona_cerealista","scope":"gyros","supplierId":"sup_zona_cerealista","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":63.85,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_hortifruti_referencia_web","scope":"gyros","supplierId":"sup_hortifruti_referencia_web","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":4.99,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_mercearia_referencia_web","scope":"gyros","supplierId":"sup_mercearia_referencia_web","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":21.46,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_import_sup_samppael","scope":"gyros","supplierId":"sup_samppael","label":"Base importada do PWA","date":"","documentNumber":"","paymentMethod":"","paymentStatus":"paid","totalAmount":335,"notes":"Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.","evidenceType":"documented","evidenceSource":"Lista de compras, notas e custos oficiais já incorporados na base"},{"id":"ord_pmg_8997086","scope":"gyros","supplierId":"sup_pmg","label":"Compra PMG nº 8997086","date":"2026-03-12","documentNumber":"8997086 / DANFE 5669620","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":1657.55,"notes":"Pedido PMG reconciliado com a DANFE 5669620 (ref. 8997086). A DANFE foi confirmada como a referência fiscal correta, e o pedido original foi mantido como evidência complementar.","evidenceType":"documented","evidenceSource":"Pedido original + DANFE 5669620 conferidos manualmente","code":"PO_PMG_8997086","supplierName":"PMG Comércio de Frios e Laticínios","inputIds":["inp_pmg_8997086","inp_pmg_danfe_5669620"]},{"id":"ord_bom_clima_343","scope":"gyros","supplierId":"sup_bom_clima","label":"Orçamento Bom Clima","date":"2026-03-02","documentNumber":"343","paymentMethod":"PIX","paymentStatus":"paid","totalAmount":399.35,"notes":"Orçamento Bom Clima Embalagens","evidenceType":"documented","evidenceSource":"Orçamento nº 343 / Bom Clima Embalagens"},{"id":"ord_samppel_10002","scope":"gyros","supplierId":"sup_samppael","label":"Pedido Samppel","date":"2026-03-04","documentNumber":"PV 10002","paymentMethod":"PIX","paymentStatus":"paid","totalAmount":335,"notes":"Pedido de venda Samppel","evidenceType":"documented","evidenceSource":"Pedido de venda nº 10002 / Samppel"},{"id":"ord_armazem_sao_vito_9678784","scope":"gyros","supplierId":"sup_armazem_sao_vito","label":"Pedido online Armazém São Vito","date":"2026-02-25","documentNumber":"9678784","paymentMethod":"PIX","paymentStatus":"paid","totalAmount":129.89,"notes":"Pedido online confirmado e tratado como compra paga, com itens secos usados na operação.","evidenceType":"documented","evidenceSource":"Captura de tela do pedido online + conferência manual dos itens"},{"id":"ord_2026-03-25-chaveiro-benizio-70-00","code":"PO_2026_03_25_CHAVEIRO_BENIZIO_70_00","scope":"gyros","supplierId":"sup_chaveiro-benizio","supplierName":"Chaveiro Benízio","label":"Cópias de chaves tetras","date":"2026-03-25","documentNumber":"","paymentMethod":"À vista","paymentStatus":"paid","totalAmount":70,"inputIds":["inp_2026-03-25-chaveiro-benizio-70-00"],"notes":"Compra importada de comprovante / nota em 2026-03-25.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-31-padaria-versailles-375-00","code":"PO_2026_03_31_PADARIA_VERSAILLES_375_00","scope":"gyros","supplierId":"sup_padaria","supplierName":"Padaria Versailles","label":"Pão Francês com Parmesão","date":"2026-03-31","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":375,"inputIds":["inp_2026-03-31-padaria-versailles-375-00"],"notes":"Primeira compra documentada do Pão Francês com Parmesão pronto: 150 unidades a R$ 2,50 por unidade.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-31-mercado-fonte-nova-37-59","code":"PO_2026_03_31_MERCADO_FONTE_NOVA_37_59","scope":"gyros","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","label":"Mercado Fonte Nova - hortifruti 31/03","date":"2026-03-31","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":37.59,"inputIds":["inp_2026-03-31-mercado-fonte-nova-37-59"],"notes":"Compra importada de comprovante / nota em 2026-03-31.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-01-comanda-churros-119-60","code":"PO_2026_04_01_COMANDA_CHURROS_119_60","scope":"gyros","supplierId":"sup_fornecedor-nao-identificado-comanda-manual-laranjinha-it","supplierName":"Fornecedor não identificado (comanda manual + Laranjinha Itaú)","label":"Churros","date":"2026-04-01","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":119.6,"inputIds":["inp_2026-04-01-comanda-churros-119-60"],"notes":"Compra importada de comprovante / nota em 2026-04-01.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-01-tenda-atacado-67-08","code":"PO_2026_04_01_TENDA_ATACADO_67_08","scope":"gyros","supplierId":"sup_tenda-atacado-vl-galvao","supplierName":"Tenda Atacado Ltda (VL Galvão)","label":"Tenda Atacado - hortifruti e azeite","date":"2026-04-01","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":67.08,"inputIds":["inp_2026-04-01-tenda-atacado-67-08"],"notes":"Compra importada de comprovante / nota em 2026-04-01.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-06-cnd-27-49-98","code":"PO_2026_04_06_CND_27_49_98","scope":"gyros","supplierId":"sup_cnd-27-de-utilidades","supplierName":"CND 27 Comércio de Utilidades Ltda","label":"Moedor manual e processador","date":"2026-04-06","documentNumber":"","paymentMethod":"Cartão de crédito à vista","paymentStatus":"paid","totalAmount":49.98,"inputIds":["inp_2026-04-06-cnd-27-49-98"],"notes":"Compra importada de comprovante / nota em 2026-04-06.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-08-fonte-nova-gop-23-26","code":"PO_2026_04_08_FONTE_NOVA_GOP_23_26","scope":"gyros","supplierId":"sup_mercado-fonte-nova-gop","supplierName":"Mercado Fonte Nova GOP","label":"Fonte Nova GOP - água, Sprite e cola","date":"2026-04-08","documentNumber":"","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":23.26,"inputIds":["inp_2026-04-08-fonte-nova-gop-23-26"],"notes":"Compra importada de comprovante / nota em 2026-04-08.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-09-fonte-nova-fraldinha-44-63","code":"PO_2026_04_09_FONTE_NOVA_FRALDINHA_44_63","scope":"gyros","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","label":"Fraldinha bovina","date":"2026-04-09","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":44.63,"inputIds":["inp_2026-04-09-fonte-nova-fraldinha-44-63"],"notes":"Compra importada de comprovante / nota em 2026-04-09.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-10-ikoa-plast-59-10","code":"PO_2026_04_10_IKOA_PLAST_59_10","scope":"gyros","supplierId":"sup_ikoa-plast-edido-2025-embalagens-em-geral","supplierName":"IKOA Plast Comércio / EDIDO 2025 Embalagens em Geral","label":"Airpack Mussi 70B","date":"2026-04-10","documentNumber":"","paymentMethod":"Cartão de crédito à vista","paymentStatus":"paid","totalAmount":59.1,"inputIds":["inp_2026-04-10-ikoa-plast-59-10"],"notes":"Compra importada de comprovante / nota em 2026-04-10.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-10-boi-preto-337-99","code":"PO_2026_04_10_BOI_PRETO_337_99","scope":"gyros","supplierId":"sup_casa-de-carne-boi-preto","supplierName":"Casa de Carne Boi Preto Ltda","label":"Casa de Carne Boi Preto - fraldinha e sobrecoxa","date":"2026-04-10","documentNumber":"","paymentMethod":"Dinheiro","paymentStatus":"paid","totalAmount":337.99,"inputIds":["inp_2026-04-10-boi-preto-337-99"],"notes":"Compra importada de comprovante / nota em 2026-04-10.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-11-sendas-619-40","code":"PO_2026_04_11_SENDAS_619_40","scope":"gyros","supplierId":"sup_sendas","supplierName":"Sendas Distribuidora S/A","label":"Sendas 11/04 - mercado misto","date":"2026-04-11","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":619.4,"inputIds":["inp_2026-04-11-sendas-619-40"],"notes":"Compra importada de comprovante / nota em 2026-04-11.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-11-fonte-nova-117-31","code":"PO_2026_04_11_FONTE_NOVA_117_31","scope":"gyros","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","label":"Mercado Fonte Nova - contrafilé","date":"2026-04-11","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":117.31,"inputIds":["inp_2026-04-11-fonte-nova-117-31"],"notes":"Compra importada de comprovante / nota em 2026-04-11.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-11-padaria-versailles-189-66","code":"PO_2026_04_11_PADARIA_VERSAILLES_189_66","scope":"gyros","supplierId":"sup_padaria","supplierName":"Padaria Versailles","label":"Pão Francês com Parmesão","date":"2026-04-11","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":189.66,"inputIds":["inp_2026-04-11-padaria-versailles-189-66"],"notes":"Compra reajustada do Pão Francês com Parmesão pronto: 100 unidades por R$ 189,66, equivalente a R$ 1,8966 por unidade.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-11-mercado-leonice-10-79","code":"PO_2026_04_11_MERCADO_LEONICE_10_79","scope":"gyros","supplierId":"sup_mercado-leonice","supplierName":"Mercado Leonice","label":"Tomate Débora","date":"2026-04-11","documentNumber":"","paymentMethod":"Cartão","paymentStatus":"paid","totalAmount":10.79,"inputIds":["inp_2026-04-11-mercado-leonice-10-79"],"notes":"Compra importada de comprovante / nota em 2026-04-11.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-01-29-dilson-rosa-233-00","code":"PO_2026_01_29_DILSON_ROSA_233_00","scope":"gyros","supplierId":"sup_dilson-rosa","supplierName":"Dilson Rosa EPP","label":"Peças para queimador","date":"2026-01-29","documentNumber":"","paymentMethod":"Não informado","paymentStatus":"paid","totalAmount":233,"inputIds":["inp_2026-01-29-dilson-rosa-233-00"],"notes":"Compra importada de comprovante / nota em 2026-01-29.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-02-02-js-coifas-1470-00","code":"PO_2026_02_02_JS_COIFAS_1470_00","scope":"gyros","supplierId":"sup_js-de-coifas","supplierName":"JS Comércio de Coifas","label":"Mesa inox","date":"2026-02-02","documentNumber":"","paymentMethod":"Crédito em 10 parcelas","paymentStatus":"paid","totalAmount":1470,"inputIds":["inp_2026-02-02-js-coifas-1470-00"],"notes":"Comprovante PagBank com identificação manual de mesa inox.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-02-02-orinox-690-00","code":"PO_2026_02_02_ORINOX_690_00","scope":"gyros","supplierId":"sup_or-inox-equipamentos","supplierName":"OR INOX Equipamentos Industriais","label":"Rechaud banho-maria","date":"2026-02-02","documentNumber":"","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":690,"inputIds":["inp_2026-02-02-orinox-690-00"],"notes":"Compra importada de comprovante / nota em 2026-02-02.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-02-03-bvs-tablet-500-00","code":"PO_2026_02_03_BVS_TABLET_500_00","scope":"gyros","supplierId":"sup_bvs-sucessoinfo","supplierName":"BVS SucessoInfo","label":"Tablet 10\"","date":"2026-02-03","documentNumber":"","paymentMethod":"Visa Electron + Visa parcelado","paymentStatus":"paid","totalAmount":500,"inputIds":["inp_2026-02-03-bvs-tablet-500-00"],"notes":"Compra importada de comprovante / nota em 2026-02-03.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-02-03-salamandra-2874-84","code":"PO_2026_02_03_SALAMANDRA_2874_84","scope":"gyros","supplierId":"sup_salamandra","supplierName":"Salamandra","label":"Salamandra","date":"2026-02-03","documentNumber":"","paymentMethod":"Crédito parcelado emissor","paymentStatus":"paid","totalAmount":2874.84,"inputIds":["inp_2026-02-03-salamandra-2874-84"],"notes":"Comprovante financeiro com valor base de R$ 2.338,91 e total financiado de R$ 2.874,84 em 6 parcelas.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-02-18-bom-clima-15-50","code":"PO_2026_02_18_BOM_CLIMA_15_50","scope":"gyros","supplierId":"sup_bom_clima","supplierName":"Bom Clima Embalagens Ltda","label":"Limpa Inox 750 ml","date":"2026-02-18","documentNumber":"","paymentMethod":"Dinheiro","paymentStatus":"paid","totalAmount":15.5,"inputIds":["inp_2026-02-18-bom-clima-15-50"],"notes":"Compra importada de comprovante / nota em 2026-02-18.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-02-18-temper-condimentos-25-00","code":"PO_2026_02_18_TEMPER_CONDIMENTOS_25_00","scope":"gyros","supplierId":"sup_temper-condimentos-e-embalagens","supplierName":"Temper Condimentos e Embalagens Ltda","label":"Temperos secos","date":"2026-02-18","documentNumber":"","paymentMethod":"Não informado","paymentStatus":"paid","totalAmount":33,"inputIds":["inp_2026-02-18-temper-condimentos-25-00"],"notes":"Valores individuais confirmados manualmente como corretos pela operação.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-02-27-fonte-nova-47-33","code":"PO_2026_02_27_FONTE_NOVA_47_33","scope":"gyros","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","label":"Limpeza e utilidades","date":"2026-02-27","documentNumber":"","paymentMethod":"Dinheiro","paymentStatus":"paid","totalAmount":47.33,"inputIds":["inp_2026-02-27-fonte-nova-47-33"],"notes":"Compra importada de comprovante / nota em 2026-02-27.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-05-mc1-adaptador-18-00","code":"PO_2026_03_05_MC1_ADAPTADOR_18_00","scope":"gyros","supplierId":"sup_mc1-commerce-nacionais-e-importados","supplierName":"MC1 Commerce Nacionais e Importados","label":"Adaptador Dako","date":"2026-03-05","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":18,"inputIds":["inp_2026-03-05-mc1-adaptador-18-00"],"notes":"Compra importada de comprovante / nota em 2026-03-05.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-05-mc1-fita-32-00","code":"PO_2026_03_05_MC1_FITA_32_00","scope":"gyros","supplierId":"sup_mc1-commerce-nacionais-e-importados","supplierName":"MC1 Commerce Nacionais e Importados","label":"Fita dupla face 3M","date":"2026-03-05","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":32,"inputIds":["inp_2026-03-05-mc1-fita-32-00"],"notes":"Compra importada de comprovante / nota em 2026-03-05.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-05-mc1-gas-69-00","code":"PO_2026_03_05_MC1_GAS_69_00","scope":"gyros","supplierId":"sup_mc1-commerce-nacionais-e-importados","supplierName":"MC1 Commerce Nacionais e Importados","label":"Cola silicone e regulador de gás","date":"2026-03-05","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":69,"inputIds":["inp_2026-03-05-mc1-gas-69-00"],"notes":"Compra importada de comprovante / nota em 2026-03-05.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-14-frigo-noronha-168-26","code":"PO_2026_03_14_FRIGO_NORONHA_168_26","scope":"gyros","supplierId":"sup_frigo-noronha","supplierName":"Frigo Noronha","label":"Fraldinha e fraldinha grill","date":"2026-03-14","documentNumber":"","paymentMethod":"Crédito (1x)","paymentStatus":"paid","totalAmount":168.26,"inputIds":["inp_2026-03-14-frigo-noronha-168-26"],"notes":"Compra importada de comprovante / nota em 2026-03-14.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-14-supermercado-x-85-79","code":"PO_2026_03_14_SUPERMERCADO_X_85_79","scope":"gyros","supplierId":"sup_supermercado-x","supplierName":"Supermercado X","label":"Supermercado X - muçarela e mercearia","date":"2026-03-14","documentNumber":"","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":85.79,"inputIds":["inp_2026-03-14-supermercado-x-85-79"],"notes":"Compra importada de comprovante / nota em 2026-03-14.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-18-laticinios-catupiry-74-98","code":"PO_2026_03_18_LATICINIOS_CATUPIRY_74_98","scope":"gyros","supplierId":"sup_laticinios-catupiry","supplierName":"Laticínios Catupiry Ltda","label":"Requeijão 4 queijos profissional","date":"2026-03-18","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":74.98,"inputIds":["inp_2026-03-18-laticinios-catupiry-74-98"],"notes":"Compra importada de comprovante / nota em 2026-03-18.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-28-mc1-extensoes-137-70","code":"PO_2026_03_28_MC1_EXTENSOES_137_70","scope":"gyros","supplierId":"sup_mc1-commerce-nacionais-e-importados","supplierName":"MC1 Commerce Nacionais e Importados","label":"Extensões e adaptador","date":"2026-03-28","documentNumber":"","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":137.7,"inputIds":["inp_2026-03-28-mc1-extensoes-137-70"],"notes":"Compra importada de comprovante / nota em 2026-03-28.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-02-sendas-628-07","code":"PO_2026_04_02_SENDAS_628_07","scope":"gyros","supplierId":"sup_sendas","supplierName":"Sendas Distribuidora S/A","label":"Sendas 02/04 - compra grande","date":"2026-04-02","documentNumber":"","paymentMethod":"Cartão de crédito / Passaí","paymentStatus":"paid","totalAmount":628.07,"inputIds":["inp_2026-04-02-sendas-628-07"],"notes":"Compra importada de comprovante / nota em 2026-04-02.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-06-boi-preto-346-70","code":"PO_2026_04_06_BOI_PRETO_346_70","scope":"gyros","supplierId":"sup_casa-de-carne-boi-preto","supplierName":"Casa de Carne Boi Preto","label":"Casa de Carne Boi Preto - pedido manual","date":"2026-04-06","documentNumber":"","paymentMethod":"Crédito","paymentStatus":"paid","totalAmount":346.7,"inputIds":["inp_2026-04-06-boi-preto-346-70"],"notes":"Compra importada de comprovante / nota em 2026-04-06.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-09-sodimac-168-90","code":"PO_2026_04_09_SODIMAC_168_90","scope":"gyros","supplierId":"sup_construdecor-sodimac-guarulhos","supplierName":"Construdecor S/A (Sodimac Guarulhos)","label":"Prolongador e extensão","date":"2026-04-09","documentNumber":"","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":168.9,"inputIds":["inp_2026-04-09-sodimac-168-90"],"notes":"Compra importada de comprovante / nota em 2026-04-09.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-09-fonte-nova-27-19","code":"PO_2026_04_09_FONTE_NOVA_27_19","scope":"gyros","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","label":"Detergente, água sanitária e hortifruti","date":"2026-04-09","documentNumber":"","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":27.19,"inputIds":["inp_2026-04-09-fonte-nova-27-19"],"notes":"Compra importada de comprovante / nota em 2026-04-09.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-10-sendas-104-23","code":"PO_2026_04_10_SENDAS_104_23","scope":"gyros","supplierId":"sup_sendas","supplierName":"Sendas Distribuidora S/A","label":"Sendas 10/04 - bebidas e tomate","date":"2026-04-10","documentNumber":"","paymentMethod":"Cartão de crédito / Passaí","paymentStatus":"paid","totalAmount":104.23,"inputIds":["inp_2026-04-10-sendas-104-23"],"notes":"Compra importada de comprovante / nota em 2026-04-10.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-10-urca-63-36","code":"PO_2026_04_10_URCA_63_36","scope":"gyros","supplierId":"sup_urca-de-bebidas-e-alimentos","supplierName":"URCA Com. de Bebidas e Alimentos","label":"Guaraná e Guaraviton","date":"2026-04-10","documentNumber":"","paymentMethod":"TEF / crédito à vista","paymentStatus":"paid","totalAmount":63.36,"inputIds":["inp_2026-04-10-urca-63-36"],"notes":"Compra importada de comprovante / nota em 2026-04-10.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-19-poupaki-427-65","code":"PO_2026_04_19_POUPAKI_427_65","scope":"gyros","supplierId":"sup_poupaki-atacadista","supplierName":"Poupaki Atacadista Ltda","label":"Poupaki 19/04 - carnes e laticínios","date":"2026-04-19","documentNumber":"","paymentMethod":"TEF / carteira digital","paymentStatus":"paid","totalAmount":427.65,"inputIds":["inp_2026-04-19-poupaki-427-65"],"notes":"Cupom relido com imagem mais nítida. A linha 12 foi confirmada como Toalha Umedecida Upa Bebe 140 unidades por R$ 6,99, e a linguiça toscana Aurora foi confirmada por R$ 92,50.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-21-irmaos-lopes-62-44","code":"PO_2026_04_21_IRMAOS_LOPES_62_44","scope":"gyros","supplierId":"sup_supermercados-irmaos-lopes","supplierName":"Supermercados Irmãos Lopes Ltda","label":"Irmãos Lopes - hortifruti e Coca-Cola 2L","date":"2026-04-21","documentNumber":"","paymentMethod":"Carteira digital / PIX","paymentStatus":"paid","totalAmount":62.44,"inputIds":["inp_2026-04-21-irmaos-lopes-62-44"],"notes":"Compra importada de comprovante / nota em 2026-04-21.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-22-poupaki-245-00","code":"PO_2026_04_22_POUPAKI_245_00","scope":"gyros","supplierId":"sup_poupaki-atacadista","supplierName":"Poupaki Atacadista Ltda","label":"Poupaki 22/04 - muçarela, cerveja e chá","date":"2026-04-22","documentNumber":"","paymentMethod":"TEF / carteira digital / PIX","paymentStatus":"paid","totalAmount":245,"inputIds":["inp_2026-04-22-poupaki-245-00"],"notes":"Compra importada de comprovante / nota em 2026-04-22.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-22-interfolhas-papel-15-00","code":"PO_2026_04_22_INTERFOLHAS_PAPEL_15_00","scope":"gyros","supplierId":"","supplierName":"Fornecedor não identificado (PagBank)","label":"Interfolhas papel","date":"2026-04-22","documentNumber":"","paymentMethod":"PIX","paymentStatus":"paid","totalAmount":15,"inputIds":["inp_2026-04-22-interfolhas-papel-15-00"],"notes":"Comprovante PagBank com identificação manual “Interfolhas papel”.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-04-15-pmg-9096638","code":"PO_2026_04_15_PMG_9096638","scope":"gyros","supplierId":"sup_pmg","supplierName":"PMG Comércio de Frios e Laticínios","label":"Compra PMG nº 9096638","date":"2026-04-15","documentNumber":"9096638","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":1177.29,"inputIds":["inp_2026-04-15-pmg-9096638"],"notes":"Pedido PMG com recompra de batata, maionese, bacon, cheddar e bebidas em abril.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-14-mercado-livre-tv-stick-112-00","code":"PO_2026_03_14_MERCADO_LIVRE_TV_STICK_112_00","scope":"gyros","supplierId":"sup_dusk-moon-variedades","supplierName":"DUSK MOON VARIEDADES LTDA","label":"TV Stick Android","date":"2026-03-14","documentNumber":"5680460288","paymentMethod":"Mercado Livre","paymentStatus":"paid","totalAmount":112,"inputIds":["inp_2026-03-14-mercado-livre-tv-stick-112-00"],"notes":"Compra importada de comprovante / nota em 2026-03-14.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-15-mercado-livre-suporte-celular-39-16","code":"PO_2026_03_15_MERCADO_LIVRE_SUPORTE_CELULAR_39_16","scope":"gyros","supplierId":"sup_lucciolar-home","supplierName":"LUCCIOLAR HOME LTDA","label":"Suporte para celular ou tablet","date":"2026-03-15","documentNumber":"5682666768","paymentMethod":"Mercado Livre","paymentStatus":"paid","totalAmount":39.16,"inputIds":["inp_2026-03-15-mercado-livre-suporte-celular-39-16"],"notes":"Compra importada de comprovante / nota em 2026-03-15.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"ord_2026-03-15-mercado-livre-cartao-memoria-20-90","code":"PO_2026_03_15_MERCADO_LIVRE_CARTAO_MEMORIA_20_90","scope":"gyros","supplierId":"sup_descomparar","supplierName":"DESCOMPARAR LTDA","label":"Cartão de memória 32GB","date":"2026-03-15","documentNumber":"5682666803","paymentMethod":"Mercado Livre","paymentStatus":"paid","totalAmount":20.9,"inputIds":["inp_2026-03-15-mercado-livre-cartao-memoria-20-90"],"notes":"Compra importada de comprovante / nota em 2026-03-15.","evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"}],"purchaseItems":[{"id":"pit_ing_mucarela","orderId":"ord_import_sup_laticinio","supplierId":"sup_laticinio","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela","qty":1000,"unit":"g","unitPrice":0.036,"totalPrice":36,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_catupiry","orderId":"ord_import_sup_laticinio","supplierId":"sup_laticinio","resourceType":"ingredient","resourceId":"ing_catupiry","description":"Catupiry","qty":1500,"unit":"g","unitPrice":0.04021333333333333,"totalPrice":60.32,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_cheddar","orderId":"ord_import_sup_laticinio","supplierId":"sup_laticinio","resourceType":"ingredient","resourceId":"ing_cheddar","description":"Cheddar","qty":1000,"unit":"g","unitPrice":0.027,"totalPrice":27,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_4queijos","orderId":"ord_import_sup_laticinio","supplierId":"sup_laticinio","resourceType":"ingredient","resourceId":"ing_4queijos","description":"Catupiry Sabor 4 queijos","qty":1000,"unit":"g","unitPrice":0.033,"totalPrice":33,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_fraldinha","orderId":"ord_import_sup_acougue","supplierId":"sup_acougue","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha preparada","qty":1000,"unit":"g","unitPrice":0.051,"totalPrice":51,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_linguica","orderId":"ord_import_sup_acougue","supplierId":"sup_acougue","resourceType":"ingredient","resourceId":"ing_linguica","description":"Linguiça toscana preparada","qty":1000,"unit":"g","unitPrice":0.029,"totalPrice":29,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_bacon_cubos","orderId":"ord_import_sup_acougue","supplierId":"sup_acougue","resourceType":"ingredient","resourceId":"ing_bacon_cubos","description":"Bacon em cubos","qty":2000,"unit":"g","unitPrice":0.02547,"totalPrice":50.94,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_frango","orderId":"ord_import_sup_distribuidor","supplierId":"sup_distribuidor","resourceType":"ingredient","resourceId":"ing_frango","description":"Frango preparado","qty":1000,"unit":"g","unitPrice":0.031,"totalPrice":31,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_batata","orderId":"ord_import_sup_congelados","supplierId":"sup_congelados","resourceType":"ingredient","resourceId":"ing_batata","description":"Batata pré-frita","qty":14000,"unit":"g","unitPrice":0.0071421428571428565,"totalPrice":99.99,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_massa_churros","orderId":"ord_import_sup_congelados","supplierId":"sup_congelados","resourceType":"ingredient","resourceId":"ing_massa_churros","description":"Mini churros congelado (doce de leite)","qty":1000,"unit":"g","unitPrice":0.0299,"totalPrice":29.9,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_arroz","orderId":"ord_import_sup_cozinha","supplierId":"sup_cozinha","resourceType":"ingredient","resourceId":"ing_arroz","description":"Arroz cozido","qty":1000,"unit":"g","unitPrice":0.0095,"totalPrice":9.5,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_feijao","orderId":"ord_import_sup_cozinha","supplierId":"sup_cozinha","resourceType":"ingredient","resourceId":"ing_feijao","description":"Feijão cozido","qty":1000,"unit":"g","unitPrice":0.012,"totalPrice":12,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_salada","orderId":"ord_import_sup_hortifruti","supplierId":"sup_hortifruti","resourceType":"ingredient","resourceId":"ing_salada","description":"Salada antiga / folhas / tomate","qty":1000,"unit":"g","unitPrice":0.016,"totalPrice":16,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_tomate","orderId":"ord_import_sup_hortifruti","supplierId":"sup_hortifruti","resourceType":"ingredient","resourceId":"ing_tomate","description":"Tomate","qty":1000,"unit":"g","unitPrice":0.009,"totalPrice":9,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_cebola","orderId":"ord_import_sup_hortifruti","supplierId":"sup_hortifruti","resourceType":"ingredient","resourceId":"ing_cebola","description":"Cebola","qty":1000,"unit":"g","unitPrice":0.0055,"totalPrice":5.5,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_pimentao","orderId":"ord_import_sup_hortifruti","supplierId":"sup_hortifruti","resourceType":"ingredient","resourceId":"ing_pimentao","description":"Pimentão","qty":1000,"unit":"g","unitPrice":0.012,"totalPrice":12,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_cheiro_verde","orderId":"ord_import_sup_hortifruti","supplierId":"sup_hortifruti","resourceType":"ingredient","resourceId":"ing_cheiro_verde","description":"Cheiro-verde","qty":300,"unit":"g","unitPrice":0.02,"totalPrice":6,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_alho","orderId":"ord_import_sup_hortifruti","supplierId":"sup_hortifruti","resourceType":"ingredient","resourceId":"ing_alho","description":"Alho","qty":1000,"unit":"g","unitPrice":0.024,"totalPrice":24,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_limao","orderId":"ord_import_sup_hortifruti","supplierId":"sup_hortifruti","resourceType":"ingredient","resourceId":"ing_limao","description":"Limao (suco)","qty":1000,"unit":"ml","unitPrice":0.01,"totalPrice":10,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_oleo_vinagre","orderId":"ord_import_sup_mercearia","supplierId":"sup_mercearia","resourceType":"ingredient","resourceId":"ing_oleo_vinagre","description":"Azeite de oliva","qty":2000,"unit":"ml","unitPrice":0.065,"totalPrice":130,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_maionese_ind","orderId":"ord_import_sup_mercearia","supplierId":"sup_mercearia","resourceType":"ingredient","resourceId":"ing_maionese_ind","description":"Base de maionese Quero","qty":3000,"unit":"g","unitPrice":0.008,"totalPrice":24,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_bbq","orderId":"ord_import_sup_mercearia","supplierId":"sup_mercearia","resourceType":"ingredient","resourceId":"ing_bbq","description":"Molho barbecue pronto","qty":2000,"unit":"ml","unitPrice":0.013900000000000001,"totalPrice":27.8,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_mel","orderId":"ord_import_sup_mercearia","supplierId":"sup_mercearia","resourceType":"ingredient","resourceId":"ing_mel","description":"Mel","qty":500,"unit":"g","unitPrice":0.04,"totalPrice":20,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_oleo_algodao","orderId":"ord_import_sup_mercearia","supplierId":"sup_mercearia","resourceType":"ingredient","resourceId":"ing_oleo_algodao","description":"Óleo de algodão","qty":3600,"unit":"ml","unitPrice":0.010044444444444443,"totalPrice":36.16,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_sal_sache","orderId":"ord_import_sup_descartaveis","supplierId":"sup_descartaveis","resourceType":"ingredient","resourceId":"ing_sal_sache","description":"Sal sachê refinado 0,8g","qty":1000,"unit":"un","unitPrice":0.013300000000000001,"totalPrice":13.3,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_rech_dl","orderId":"ord_import_sup_docaria","supplierId":"sup_docaria","resourceType":"ingredient","resourceId":"ing_rech_dl","description":"Doce de leite","qty":1000,"unit":"g","unitPrice":0.021,"totalPrice":21,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_rech_choc","orderId":"ord_import_sup_docaria","supplierId":"sup_docaria","resourceType":"ingredient","resourceId":"ing_rech_choc","description":"Chocolate","qty":1000,"unit":"g","unitPrice":0.019,"totalPrice":19,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_rech_goi","orderId":"ord_import_sup_docaria","supplierId":"sup_docaria","resourceType":"ingredient","resourceId":"ing_rech_goi","description":"Goiabada","qty":1000,"unit":"g","unitPrice":0.014,"totalPrice":14,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_refri_350","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"ingredient","resourceId":"ing_refri_350","description":"Refrigerante lata 350ml","qty":72,"unit":"un","unitPrice":3.4741666666666666,"totalPrice":250.14,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_garrafa_450","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"ingredient","resourceId":"ing_garrafa_450","description":"Garrafa 450ml","qty":12,"unit":"un","unitPrice":4.3,"totalPrice":51.6,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_agua_510","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"ingredient","resourceId":"ing_agua_510","description":"Água mineral 510ml","qty":12,"unit":"un","unitPrice":1.2541666666666667,"totalPrice":15.05,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_agua_gas_510","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_agua_gas_510","description":"Água com gás 510ml","qty":12,"unit":"un","unitPrice":1.6458333333333333,"totalPrice":19.75,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_cerveja_bud_330","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_bud_330","description":"Budweiser long neck 330ml","qty":24,"unit":"un","unitPrice":5.958333333333333,"totalPrice":143,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_cerveja_heineken_330","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_heineken_330","description":"Heineken long neck 330ml","qty":24,"unit":"un","unitPrice":6.916666666666667,"totalPrice":166,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_coca_2l","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_coca_2l","description":"Coca-Cola 2L","qty":6,"unit":"un","unitPrice":10.953333333333333,"totalPrice":65.72,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_h2o_500","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_h2o_500","description":"H2O limão 500ml","qty":12,"unit":"un","unitPrice":4.675,"totalPrice":56.1,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_limoneto_500","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_coca_zero","description":"Limoneto sem açúcar 500ml","qty":12,"unit":"un","unitPrice":4.675,"totalPrice":56.1,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_schweppes_350","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_schweppes_350","description":"Schweppes Citrus 350ml","qty":6,"unit":"un","unitPrice":3.865,"totalPrice":23.19,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_sprite_350","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_sprite_350","description":"Sprite 350ml","qty":6,"unit":"un","unitPrice":3.66,"totalPrice":21.96,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_delvalle_uva_290","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_delvalle_uva_290","description":"Del Valle Uva 290ml","qty":6,"unit":"un","unitPrice":3.6683333333333334,"totalPrice":22.01,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_coca_zero_2l","orderId":"ord_import_sup_bebidas","supplierId":"sup_bebidas","resourceType":"product","resourceId":"prd_coca_zero_2l","description":"Coca-Cola Zero 2L","qty":6,"unit":"un","unitPrice":10.953333333333333,"totalPrice":65.72,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_suco_natural","orderId":"ord_import_sup_producao","supplierId":"sup_producao","resourceType":"ingredient","resourceId":"ing_suco_natural","description":"Suco natural (garrafinha)","qty":10,"unit":"un","unitPrice":4.2,"totalPrice":42,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_fumaca_po","orderId":"ord_import_sup_zona_cerealista","supplierId":"sup_zona_cerealista","resourceType":"ingredient","resourceId":"ing_fumaca_po","description":"Fumaca em po","qty":1000,"unit":"g","unitPrice":0.01943,"totalPrice":19.43,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_lemon_pepper","orderId":"ord_import_sup_zona_cerealista","supplierId":"sup_zona_cerealista","resourceType":"ingredient","resourceId":"ing_lemon_pepper","description":"Lemon pepper","qty":500,"unit":"g","unitPrice":0.03,"totalPrice":15,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_paprica_doce","orderId":"ord_import_sup_zona_cerealista","supplierId":"sup_zona_cerealista","resourceType":"ingredient","resourceId":"ing_paprica_doce","description":"Paprica doce","qty":500,"unit":"g","unitPrice":0.02,"totalPrice":10,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_chimichurri","orderId":"ord_import_sup_zona_cerealista","supplierId":"sup_zona_cerealista","resourceType":"ingredient","resourceId":"ing_chimichurri","description":"Chimichurri","qty":500,"unit":"g","unitPrice":0.038840000000000006,"totalPrice":19.42,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_manjericao","orderId":"ord_import_sup_hortifruti_referencia_web","supplierId":"sup_hortifruti_referencia_web","resourceType":"ingredient","resourceId":"ing_manjericao","description":"Manjericão","qty":20,"unit":"g","unitPrice":0.2495,"totalPrice":4.99,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_vinagre","orderId":"ord_import_sup_mercearia_referencia_web","supplierId":"sup_mercearia_referencia_web","resourceType":"ingredient","resourceId":"ing_vinagre","description":"Vinagre","qty":750,"unit":"ml","unitPrice":0.00532,"totalPrice":3.99,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_louro","orderId":"ord_import_sup_mercearia_referencia_web","supplierId":"sup_mercearia_referencia_web","resourceType":"ingredient","resourceId":"ing_louro","description":"Louro","qty":20,"unit":"g","unitPrice":0.2745,"totalPrice":5.49,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_oregano","orderId":"ord_import_sup_mercearia_referencia_web","supplierId":"sup_mercearia_referencia_web","resourceType":"ingredient","resourceId":"ing_oregano","description":"Orégano","qty":20,"unit":"g","unitPrice":0.2495,"totalPrice":4.99,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_ing_pimenta_calabresa","orderId":"ord_import_sup_mercearia_referencia_web","supplierId":"sup_mercearia_referencia_web","resourceType":"ingredient","resourceId":"ing_pimenta_calabresa","description":"Pimenta calabresa","qty":50,"unit":"g","unitPrice":0.1398,"totalPrice":6.99,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_pkg_sacola_delivery","orderId":"ord_import_sup_samppael","supplierId":"sup_samppael","resourceType":"packaging","resourceId":"pkg_sacola_delivery","description":"Saco liso branco medio","qty":400,"unit":"un","unitPrice":0.8375,"totalPrice":335,"evidenceType":"documented","evidenceSource":"Lista de compras, nota fiscal ou orçamento"},{"id":"pit_bomclima_pote60","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_potinho_30","description":"Pote 60ml branco G697","qty":25,"unit":"un","unitPrice":0.23600000000000002,"totalPrice":5.9,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_guard_sache","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_guardanapo","description":"Guardanapo sache 28x20,5 liso","qty":250,"unit":"un","unitPrice":0.154,"totalPrice":38.5,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_talher","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_talher_kit","description":"Kit talheres","qty":50,"unit":"un","unitPrice":0.49,"totalPrice":24.5,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_pote145","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_potinho_feijao","description":"Pote redondo 145ml com sobretampa","qty":24,"unit":"un","unitPrice":0.3416666666666666,"totalPrice":8.2,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_m90","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_bandeja_m90","description":"Bandeja aluminio M90 220ml","qty":100,"unit":"un","unitPrice":0.469,"totalPrice":46.9,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_m120","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_bandeja_m120","description":"Bandeja aluminio M120 500ml","qty":100,"unit":"un","unitPrice":0.669,"totalPrice":66.9,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_bat_p","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_bat_p","description":"Saco de papel hamburgao plastificado","qty":100,"unit":"un","unitPrice":0.059500000000000004,"totalPrice":5.95,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_bat_m","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_bat_m","description":"Saco de papel mono 1/2 kg plastificado","qty":100,"unit":"un","unitPrice":0.075,"totalPrice":7.5,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_bat_g","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_bat_g","description":"Saco de papel mono 1/2 kg plastificado","qty":100,"unit":"un","unitPrice":0.075,"totalPrice":7.5,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_sobremesa","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_sobremesa","description":"Saco de papel hamburgao plastificado","qty":100,"unit":"un","unitPrice":0.059500000000000004,"totalPrice":5.95,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_bomclima_lanche","orderId":"ord_bom_clima_343","supplierId":"sup_bom_clima","resourceType":"packaging","resourceId":"pkg_lanche","description":"Papel acoplado mono frios 30x38","qty":400,"unit":"un","unitPrice":0.0675,"totalPrice":27,"evidenceType":"documented","evidenceSource":"Orçamento Bom Clima nº 343"},{"id":"pit_samppel_sacola","orderId":"ord_samppel_10002","supplierId":"sup_samppael","resourceType":"packaging","resourceId":"pkg_sacola_delivery","description":"Saco liso branco medio","qty":400,"unit":"un","unitPrice":0.75,"totalPrice":300,"evidenceType":"documented","evidenceSource":"Pedido de venda Samppel nº 10002"},{"id":"pit_samppel_frete","orderId":"ord_samppel_10002","supplierId":"sup_samppael","resourceType":"packaging","resourceId":"","description":"Frete","qty":1,"unit":"un","unitPrice":35,"totalPrice":35,"evidenceType":"documented","evidenceSource":"Pedido de venda Samppel nº 10002"},{"id":"pit_saovito_chimichurri","orderId":"ord_armazem_sao_vito_9678784","supplierId":"sup_armazem_sao_vito","resourceType":"ingredient","resourceId":"ing_chimichurri","description":"Chimichurri 500g","qty":500,"unit":"g","unitPrice":0.038840000000000006,"totalPrice":19.42,"evidenceType":"review","evidenceSource":"Captura de tela do pedido online"},{"id":"pit_saovito_fumaca","orderId":"ord_armazem_sao_vito_9678784","supplierId":"sup_armazem_sao_vito","resourceType":"ingredient","resourceId":"ing_fumaca_po","description":"Fumaça em pó 1kg","qty":1000,"unit":"g","unitPrice":0.01943,"totalPrice":19.43,"evidenceType":"review","evidenceSource":"Captura de tela do pedido online"},{"id":"pit_saovito_alho_po","orderId":"ord_armazem_sao_vito_9678784","supplierId":"sup_armazem_sao_vito","resourceType":"ingredient","resourceId":"ing_alho_po","description":"Alho em pó 500g","qty":500,"unit":"g","unitPrice":0.0237,"totalPrice":11.85,"evidenceType":"review","evidenceSource":"Captura de tela do pedido online"},{"id":"pit_saovito_cebola_po","orderId":"ord_armazem_sao_vito_9678784","supplierId":"sup_armazem_sao_vito","resourceType":"ingredient","resourceId":"ing_cebola_po","description":"Cebola em pó 500g","qty":500,"unit":"g","unitPrice":0.02984,"totalPrice":14.92,"evidenceType":"review","evidenceSource":"Captura de tela do pedido online"},{"id":"pit_saovito_caldo_galinha","orderId":"ord_armazem_sao_vito_9678784","supplierId":"sup_armazem_sao_vito","resourceType":"ingredient","resourceId":"ing_caldo_galinha_po","description":"Caldo de galinha 1kg","qty":1000,"unit":"g","unitPrice":0.01509,"totalPrice":15.09,"evidenceType":"review","evidenceSource":"Captura de tela do pedido online"},{"id":"pit_saovito_pimenta_reino","orderId":"ord_armazem_sao_vito_9678784","supplierId":"sup_armazem_sao_vito","resourceType":"ingredient","resourceId":"ing_pimenta_reino","description":"Pimenta do reino em grão 500g","qty":500,"unit":"g","unitPrice":0.06968,"totalPrice":34.84,"evidenceType":"review","evidenceSource":"Captura de tela do pedido online"},{"id":"pit_saovito_canela","orderId":"ord_armazem_sao_vito_9678784","supplierId":"sup_armazem_sao_vito","resourceType":"ingredient","resourceId":"ing_canela_moida","description":"Canela moída 200g","qty":200,"unit":"g","unitPrice":0.02595,"totalPrice":5.19,"evidenceType":"review","evidenceSource":"Captura de tela do pedido online"},{"id":"pit_ord-pmg-8997086-1-coca-cola-pet-2l","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_coca_2l","description":"Coca-Cola PET 2L","qty":1,"unit":"caixa","unitPrice":65.72,"totalPrice":65.72,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-2-coca-cola-lata-350ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_coca","description":"Coca-Cola lata 350ml","qty":2,"unit":"caixa","unitPrice":41.21,"totalPrice":82.42,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-3-coca-cola-sem-acucar-lata-350ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_coca_zero","description":"Coca-Cola sem açúcar lata 350ml","qty":2,"unit":"caixa","unitPrice":41.39,"totalPrice":82.78,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-4-fanta-laranja-lata-350ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_fanta","description":"Fanta Laranja lata 350ml","qty":1,"unit":"caixa","unitPrice":42.67,"totalPrice":42.67,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-5-guarana-antarctica-lata-350ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_guarana_350","description":"Guaraná Antarctica lata 350ml","qty":2,"unit":"caixa","unitPrice":41.83,"totalPrice":83.66,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-6-requeijao-catupiry-sem-amido-1-5kg","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_catupiry","description":"Requeijão Catupiry sem amido 1,5kg","qty":2,"unit":"un","unitPrice":60.32,"totalPrice":120.64,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-7-h2oh-500ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_h2o_500","description":"H2OH! 500ml","qty":1,"unit":"caixa","unitPrice":56.1,"totalPrice":56.1,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-8-schweppes-citrus-lata-350ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_schweppes_350","description":"Schweppes Citrus lata 350ml","qty":1,"unit":"caixa","unitPrice":23.19,"totalPrice":23.19,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-9-budweiser-long-neck-330ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_bud_330","description":"Budweiser long neck 330ml","qty":1,"unit":"caixa","unitPrice":143,"totalPrice":143,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-10-heineken-long-neck-330ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_heineken_330","description":"Heineken long neck 330ml","qty":1,"unit":"caixa","unitPrice":166,"totalPrice":166,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-11-h2oh-zero-500ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_limoneto_500","description":"H2OH! Zero 500ml","qty":1,"unit":"caixa","unitPrice":56.1,"totalPrice":56.1,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-12-sprite-lata-350ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_sprite_350","description":"Sprite lata 350ml","qty":1,"unit":"caixa","unitPrice":21.96,"totalPrice":21.96,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-13-suco-del-valle-uva-290ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_delvalle_uva_290","description":"Suco Del Valle Uva 290ml","qty":1,"unit":"caixa","unitPrice":22.01,"totalPrice":22.01,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-14-molho-barbecue-ekma-3-5kg","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_bbq","description":"Molho barbecue EKMA 3,5kg","qty":1,"unit":"un","unitPrice":27.8,"totalPrice":27.8,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-15-maionese-grande-quero-3kg","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_maionese_ind","description":"Maionese grande Quero 3kg","qty":3,"unit":"balde","unitPrice":24,"totalPrice":72,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-16-batata-pre-frita-bem-brasil-2kg","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_batata","description":"Batata pré-frita Bem Brasil 2kg","qty":1,"unit":"caixa","unitPrice":99.99,"totalPrice":99.99,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-17-cha-ice-tea-leao-pessego-450ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_ice_tea_pessego_450","description":"Chá Ice Tea Leão pêssego 450ml","qty":1,"unit":"caixa","unitPrice":25.8,"totalPrice":25.8,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-18-cha-ice-tea-leao-limao-450ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_ice_tea_limao_450","description":"Chá Ice Tea Leão limão 450ml","qty":1,"unit":"caixa","unitPrice":25.8,"totalPrice":25.8,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-19-azeite-gallo-2l","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_oleo_vinagre","description":"Azeite Gallo 2L","qty":1,"unit":"un","unitPrice":130,"totalPrice":130,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-20-banha-coopavel-1kg","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"other","resourceId":"itm_banha_coopavel_1kg","description":"Banha Coopavel 1kg","qty":6,"unit":"un","unitPrice":11.7,"totalPrice":70.2,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-21-agua-buonavita-com-gas-510ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_agua_gas_510","description":"Água Buonavita com gás 510ml","qty":1,"unit":"caixa","unitPrice":19.75,"totalPrice":19.75,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-22-agua-buonavita-sem-gas-510ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_agua_510","description":"Água Buonavita sem gás 510ml","qty":1,"unit":"caixa","unitPrice":15.05,"totalPrice":15.05,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-23-sal-sache-refinado-lebre-0-8g","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_saches_mix","description":"Sal sachê refinado Lebre 0,8g","qty":1,"unit":"caixa","unitPrice":13.3,"totalPrice":13.3,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-24-catchup-heinz-sache-7g","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_saches_mix","description":"Catchup Heinz sachê 7g","qty":2,"unit":"caixa","unitPrice":18.79,"totalPrice":37.58,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-25-mostarda-heinz-sache-5g","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_saches_mix","description":"Mostarda Heinz sachê 5g","qty":1,"unit":"caixa","unitPrice":18.79,"totalPrice":18.79,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-26-mostarda-ekma-sache-7g","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_saches_mix","description":"Mostarda EKMA sachê 7g","qty":1,"unit":"caixa","unitPrice":12.57,"totalPrice":12.57,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-27-catchup-ekma-sache-7g","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_saches_mix","description":"Catchup EKMA sachê 7g","qty":1,"unit":"caixa","unitPrice":12.57,"totalPrice":12.57,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-28-molho-de-pimenta-vermelha-sache-ceper","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_saches_mix","description":"Molho de pimenta vermelha sachê Cepêra 5ml","qty":1,"unit":"caixa","unitPrice":23,"totalPrice":23,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-29-oleo-de-algodao-900ml","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_oleo_algodao","description":"Óleo de algodão 900ml","qty":4,"unit":"frasco","unitPrice":9.04,"totalPrice":36.16,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-pmg-8997086-30-bacon-em-cubos-perdigao-1kg","orderId":"ord_pmg_8997086","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_bacon_cubos","description":"Bacon em cubos Perdigão 1kg","qty":2,"unit":"pacote","unitPrice":25.47,"totalPrice":50.94,"evidenceType":"documented","evidenceSource":"DANFE PMG 5669620 / ref. 8997086"},{"id":"pit_ord-2026-03-25-chaveiro-benizio-70-00-1-2-copias-de-chav","orderId":"ord_2026-03-25-chaveiro-benizio-70-00","supplierId":"sup_chaveiro-benizio","scope":"gyros","resourceType":"other","resourceId":"itm_2-copias-de-chaves-tetras","description":"2 cópias de chaves tetras","qty":2,"unit":"un","unitPrice":35,"totalPrice":70,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-31-padaria-versailles-375-00-1-pao-com-parme","orderId":"ord_2026-03-31-padaria-versailles-375-00","supplierId":"sup_padaria","scope":"gyros","resourceType":"ingredient","resourceId":"ing_pao_parmesao_pronto","description":"Pão Francês com Parmesão","qty":150,"unit":"un","unitPrice":2.5,"totalPrice":375,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-31-mercado-fonte-nova-37-59-1-sal-refinado-1","orderId":"ord_2026-03-31-mercado-fonte-nova-37-59","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_sal-refinado-1kg","description":"Sal refinado 1kg","qty":1,"unit":"un","unitPrice":3.59,"totalPrice":3.59,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-31-mercado-fonte-nova-37-59-2-cebola-naciona","orderId":"ord_2026-03-31-mercado-fonte-nova-37-59","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"ingredient","resourceId":"ing_cebola","description":"cebola nacional","qty":1,"unit":"un","unitPrice":4.74,"totalPrice":4.74,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-31-mercado-fonte-nova-37-59-3-limao-taiti","orderId":"ord_2026-03-31-mercado-fonte-nova-37-59","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_limao-taiti","description":"limão taiti","qty":1,"unit":"un","unitPrice":5.9,"totalPrice":5.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-31-mercado-fonte-nova-37-59-4-salsa-cheiro","orderId":"ord_2026-03-31-mercado-fonte-nova-37-59","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"ingredient","resourceId":"ing_cheiro_verde","description":"salsa/cheiro","qty":1,"unit":"un","unitPrice":7.98,"totalPrice":7.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-31-mercado-fonte-nova-37-59-5-tomate-italian","orderId":"ord_2026-03-31-mercado-fonte-nova-37-59","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"ingredient","resourceId":"ing_tomate","description":"tomate italiano","qty":1,"unit":"un","unitPrice":15.38,"totalPrice":15.38,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-01-comanda-churros-119-60-1-churros","orderId":"ord_2026-04-01-comanda-churros-119-60","supplierId":"sup_fornecedor-nao-identificado-comanda-manual-laranjinha-it","scope":"gyros","resourceType":"ingredient","resourceId":"ing_massa_churros","description":"Churros","qty":4,"unit":"un","unitPrice":29.9,"totalPrice":119.6,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-01-tenda-atacado-67-08-1-berinjela","orderId":"ord_2026-04-01-tenda-atacado-67-08","supplierId":"sup_tenda-atacado-vl-galvao","scope":"gyros","resourceType":"ingredient","resourceId":"ing_berinjela","description":"Berinjela","qty":1,"unit":"un","unitPrice":14.47,"totalPrice":14.47,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-01-tenda-atacado-67-08-2-pimentao-vermelho","orderId":"ord_2026-04-01-tenda-atacado-67-08","supplierId":"sup_tenda-atacado-vl-galvao","scope":"gyros","resourceType":"ingredient","resourceId":"ing_pimentao_vermelho","description":"pimentão vermelho","qty":1,"unit":"un","unitPrice":9.83,"totalPrice":9.83,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-01-tenda-atacado-67-08-3-pimentao-amarelo","orderId":"ord_2026-04-01-tenda-atacado-67-08","supplierId":"sup_tenda-atacado-vl-galvao","scope":"gyros","resourceType":"ingredient","resourceId":"ing_pimentao_amarelo","description":"pimentão amarelo","qty":1,"unit":"un","unitPrice":10.79,"totalPrice":10.79,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-01-tenda-atacado-67-08-4-alho-triturado-sele","orderId":"ord_2026-04-01-tenda-atacado-67-08","supplierId":"sup_tenda-atacado-vl-galvao","scope":"gyros","resourceType":"ingredient","resourceId":"ing_alho","description":"alho triturado Select c/ sal","qty":1,"unit":"un","unitPrice":7.05,"totalPrice":7.05,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-01-tenda-atacado-67-08-5-azeite-extra-virgem","orderId":"ord_2026-04-01-tenda-atacado-67-08","supplierId":"sup_tenda-atacado-vl-galvao","scope":"gyros","resourceType":"ingredient","resourceId":"ing_oleo_vinagre","description":"azeite extra virgem Select 500ml","qty":1,"unit":"un","unitPrice":24.7,"totalPrice":24.7,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-01-tenda-atacado-67-08-6-sacola-reutilizavel","orderId":"ord_2026-04-01-tenda-atacado-67-08","supplierId":"sup_tenda-atacado-vl-galvao","scope":"gyros","resourceType":"other","resourceId":"itm_sacola-reutilizavel","description":"sacola reutilizável","qty":1,"unit":"un","unitPrice":0.24,"totalPrice":0.24,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-06-cnd-27-49-98-1-moedor-manual","orderId":"ord_2026-04-06-cnd-27-49-98","supplierId":"sup_cnd-27-de-utilidades","scope":"gyros","resourceType":"other","resourceId":"itm_moedor-manual","description":"Moedor manual","qty":1,"unit":"un","unitPrice":34.99,"totalPrice":34.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-06-cnd-27-49-98-2-processador-de-alimentos","orderId":"ord_2026-04-06-cnd-27-49-98","supplierId":"sup_cnd-27-de-utilidades","scope":"gyros","resourceType":"other","resourceId":"itm_processador-de-alimentos","description":"processador de alimentos","qty":1,"unit":"un","unitPrice":14.99,"totalPrice":14.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-08-fonte-nova-gop-23-26-1-agua-lindoya-1-5l","orderId":"ord_2026-04-08-fonte-nova-gop-23-26","supplierId":"sup_mercado-fonte-nova-gop","scope":"gyros","resourceType":"other","resourceId":"itm_agua-lindoya-1-5l","description":"Água Lindoya 1,5L","qty":1,"unit":"un","unitPrice":7.18,"totalPrice":7.18,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-08-fonte-nova-gop-23-26-2-sprite-pet-2l","orderId":"ord_2026-04-08-fonte-nova-gop-23-26","supplierId":"sup_mercado-fonte-nova-gop","scope":"gyros","resourceType":"other","resourceId":"itm_sprite_2l","description":"Sprite PET 2L","qty":1,"unit":"un","unitPrice":9.99,"totalPrice":9.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-08-fonte-nova-gop-23-26-3-cola-super-bonder-","orderId":"ord_2026-04-08-fonte-nova-gop-23-26","supplierId":"sup_mercado-fonte-nova-gop","scope":"gyros","resourceType":"other","resourceId":"itm_cola-super-bonder-3g","description":"cola Super Bonder 3g","qty":1,"unit":"un","unitPrice":6.09,"totalPrice":6.09,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-09-fonte-nova-fraldinha-44-63-1-fraldinha-bo","orderId":"ord_2026-04-09-fonte-nova-fraldinha-44-63","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha bovina","qty":1.116,"unit":"kg","unitPrice":39.99,"totalPrice":44.63,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-ikoa-plast-59-10-1-airpack-mussi-70b-pct-","orderId":"ord_2026-04-10-ikoa-plast-59-10","supplierId":"sup_ikoa-plast-edido-2025-embalagens-em-geral","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Airpack Mussi 70B pct c/ 50 unidades","qty":3,"unit":"un","unitPrice":19.7,"totalPrice":59.1,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-boi-preto-337-99-1-fraldinha-volume-1","orderId":"ord_2026-04-10-boi-preto-337-99","supplierId":"sup_casa-de-carne-boi-preto","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha - volume 1","qty":3.056,"unit":"kg","unitPrice":42.99,"totalPrice":131.38,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-boi-preto-337-99-2-fraldinha-volume-2","orderId":"ord_2026-04-10-boi-preto-337-99","supplierId":"sup_casa-de-carne-boi-preto","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha - volume 2","qty":2.216,"unit":"kg","unitPrice":42.99,"totalPrice":95.27,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-boi-preto-337-99-3-fraldinha-volume-3","orderId":"ord_2026-04-10-boi-preto-337-99","supplierId":"sup_casa-de-carne-boi-preto","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha - volume 3","qty":2.084,"unit":"kg","unitPrice":42.99,"totalPrice":89.59,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-boi-preto-337-99-4-sobrecoxa-de-frango","orderId":"ord_2026-04-10-boi-preto-337-99","supplierId":"sup_casa-de-carne-boi-preto","scope":"gyros","resourceType":"ingredient","resourceId":"ing_frango","description":"Sobrecoxa de frango","qty":1.088,"unit":"kg","unitPrice":19.99,"totalPrice":21.75,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-1-linguica-toscana-aurora-f","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_linguica","description":"Linguiça toscana Aurora FC","qty":3.032,"unit":"kg","unitPrice":24.9,"totalPrice":75.49,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-2-bife-de-frango-itabom-fc","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_frango","description":"Bife de frango Itabom FC","qty":2.204,"unit":"kg","unitPrice":24.55,"totalPrice":54.1,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-3-mucarela-do-valle-fatiada","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela do Valle fatiada","qty":0.78,"unit":"kg","unitPrice":50.99,"totalPrice":39.77,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-4-salsa-e-cebolinha","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_cheiro_verde","description":"Salsa e cebolinha","qty":2,"unit":"un","unitPrice":2.99,"totalPrice":5.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-5-requeijao-catupiry-1-5kg","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_catupiry","description":"Requeijão Catupiry 1,5kg","qty":1,"unit":"un","unitPrice":66.4,"totalPrice":66.4,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-6-saleiro-santana-clear","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_saleiro_santana_clear","description":"Saleiro Santana clear","qty":3,"unit":"un","unitPrice":1.59,"totalPrice":4.77,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-7-bisnaga-plastica-350-most","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_bisnaga_plastica_350","description":"Bisnaga plástica 350 most","qty":1,"unit":"un","unitPrice":3.29,"totalPrice":3.29,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-8-esponja-multiuso-c-4","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_esponja_multiuso_c4","description":"Esponja multiuso c/4","qty":2,"unit":"un","unitPrice":3.49,"totalPrice":6.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-9-esponja-scotch-brite-meta","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_esponja_scotch_brite_metallic","description":"Esponja Scotch-Brite metallic","qty":2,"unit":"un","unitPrice":8.09,"totalPrice":16.18,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-10-alcool-gel-luar-500ml","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_alcool_gel_luar_500","description":"Álcool gel Luar 500ml","qty":2,"unit":"un","unitPrice":7.99,"totalPrice":15.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-11-veja-multi-500ml-azul","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_veja_multi_500_azul","description":"Veja Multi 500ml azul","qty":2,"unit":"un","unitPrice":5.49,"totalPrice":10.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-12-funil-plasdu","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_funil_plasdu","description":"Funil Plasdu","qty":1,"unit":"un","unitPrice":4.59,"totalPrice":4.59,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-13-detergente-limpol-5l-neu","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_detergente_limpol_5l","description":"Detergente Limpol 5L neutro","qty":1,"unit":"un","unitPrice":19.9,"totalPrice":19.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-14-azeite-andor-500ml","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_oleo_vinagre","description":"Azeite Andor 500ml","qty":1,"unit":"un","unitPrice":26.9,"totalPrice":26.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-15-pote-praf-red-500ml","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_pote_praf_red_500ml","description":"Pote Praf Red 500ml","qty":1,"unit":"un","unitPrice":32.19,"totalPrice":32.19,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-16-toalha-kitchen-2r","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_toalha_kitchen_2r","description":"Toalha Kitchen 2R","qty":1,"unit":"un","unitPrice":5.49,"totalPrice":5.49,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-17-coca-cola-350ml","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"product","resourceId":"prd_coca","description":"Coca-Cola 350ml","qty":24,"unit":"un","unitPrice":4.09,"totalPrice":98.16,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-18-coca-cola-zero-350ml","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"product","resourceId":"prd_coca_zero","description":"Coca-Cola Zero 350ml","qty":24,"unit":"un","unitPrice":4.09,"totalPrice":98.16,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-19-sprite-2l","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_sprite_2l","description":"Sprite 2L","qty":1,"unit":"un","unitPrice":9.79,"totalPrice":9.79,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-sendas-619-40-20-toalha-yuri-fit-1000","orderId":"ord_2026-04-11-sendas-619-40","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_toalha_yuri_fit_1000","description":"Toalha Yuri Fit 1000","qty":1,"unit":"un","unitPrice":24.3,"totalPrice":24.3,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-fonte-nova-117-31-1-prod-diversos-flv-kg","orderId":"ord_2026-04-11-fonte-nova-117-31","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_prod_diversos_flv","description":"Prod. diversos FLV kg","qty":1.82,"unit":"kg","unitPrice":3.99,"totalPrice":7.26,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-fonte-nova-117-31-2-contrafile-a-vacuo-kg","orderId":"ord_2026-04-11-fonte-nova-117-31","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_contrafile_vacuo","description":"Contrafilé a vácuo kg","qty":2.752,"unit":"kg","unitPrice":39.99,"totalPrice":110.05,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-padaria-versailles-189-66-1-pao-com-parme","orderId":"ord_2026-04-11-padaria-versailles-189-66","supplierId":"sup_padaria","scope":"gyros","resourceType":"ingredient","resourceId":"ing_pao_parmesao_pronto","description":"Pão Francês com Parmesão (~90g)","qty":100,"unit":"un","unitPrice":1.8966,"totalPrice":189.66,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-11-mercado-leonice-10-79-1-tomate-debora","orderId":"ord_2026-04-11-mercado-leonice-10-79","supplierId":"sup_mercado-leonice","scope":"gyros","resourceType":"ingredient","resourceId":"ing_tomate","description":"Tomate Débora","qty":0.9,"unit":"kg","unitPrice":11.99,"totalPrice":10.79,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-01-29-dilson-rosa-233-00-1-flexivel-aco-malha-l","orderId":"ord_2026-01-29-dilson-rosa-233-00","supplierId":"sup_dilson-rosa","scope":"gyros","resourceType":"other","resourceId":"itm_flexivel-aco-malha-lonada-m-f-1-2-x-1-00m-2-un","description":"Flexível aço malha/lonada M/F 1/2 x 1,00m (2 un)","qty":2,"unit":"un","unitPrice":38.5,"totalPrice":77,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-01-29-dilson-rosa-233-00-2-tela-inox-queimador-","orderId":"ord_2026-01-29-dilson-rosa-233-00","supplierId":"sup_dilson-rosa","scope":"gyros","resourceType":"other","resourceId":"itm_tela-inox-queimador-2250-klrs-6-un","description":"tela inox queimador 2250 KLRS (6 un)","qty":6,"unit":"un","unitPrice":13,"totalPrice":78,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-01-29-dilson-rosa-233-00-3-moldura-p-queimador-","orderId":"ord_2026-01-29-dilson-rosa-233-00","supplierId":"sup_dilson-rosa","scope":"gyros","resourceType":"other","resourceId":"itm_moldura-p-queimador-2-250-kcal-h-6-un","description":"moldura p/ queimador 2.250 Kcal/h (6 un)","qty":6,"unit":"un","unitPrice":13,"totalPrice":78,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-02-js-coifas-1470-00-1-mesa-inox","orderId":"ord_2026-02-02-js-coifas-1470-00","supplierId":"sup_js-de-coifas","scope":"gyros","resourceType":"other","resourceId":"itm_mesa_inox","description":"Mesa inox","qty":1,"unit":"un","unitPrice":1470,"totalPrice":1470,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-02-orinox-690-00-1-rechaud-banho-maria-3-cub","orderId":"ord_2026-02-02-orinox-690-00","supplierId":"sup_or-inox-equipamentos","scope":"gyros","resourceType":"other","resourceId":"itm_rechaud-banho-maria-3-cubas-de-5-litros-110v","description":"Rechaud banho-maria 3 cubas de 5 litros, 110V","qty":1,"unit":"un","unitPrice":690,"totalPrice":690,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-03-bvs-tablet-500-00-1-tablet-10","orderId":"ord_2026-02-03-bvs-tablet-500-00","supplierId":"sup_bvs-sucessoinfo","scope":"gyros","resourceType":"other","resourceId":"itm_tablet-10","description":"Tablet 10\"","qty":1,"unit":"un","unitPrice":500,"totalPrice":500,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-03-salamandra-2874-84-1-salamandra","orderId":"ord_2026-02-03-salamandra-2874-84","supplierId":"sup_salamandra","scope":"gyros","resourceType":"other","resourceId":"itm_salamandra","description":"Salamandra","qty":1,"unit":"un","unitPrice":2338.91,"totalPrice":2338.91,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-03-salamandra-2874-84-2-juros-financiamento-","orderId":"ord_2026-02-03-salamandra-2874-84","supplierId":"sup_salamandra","scope":"gyros","resourceType":"other","resourceId":"itm_juros_financiamento_salamandra","description":"Juros / financiamento do parcelamento","qty":1,"unit":"un","unitPrice":535.93,"totalPrice":535.93,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-18-bom-clima-15-50-1-limpa-inox-750-ml","orderId":"ord_2026-02-18-bom-clima-15-50","supplierId":"sup_bom_clima","scope":"gyros","resourceType":"other","resourceId":"itm_limpa-inox-750-ml","description":"Limpa Inox 750 ml","qty":1,"unit":"un","unitPrice":15.5,"totalPrice":15.5,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-18-temper-condimentos-25-00-1-p-doce-defumad","orderId":"ord_2026-02-18-temper-condimentos-25-00","supplierId":"sup_temper-condimentos-e-embalagens","scope":"gyros","resourceType":"ingredient","resourceId":"ing_paprica_doce","description":"P. doce defumado","qty":1,"unit":"un","unitPrice":10,"totalPrice":10,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-18-temper-condimentos-25-00-2-lemon-pepper","orderId":"ord_2026-02-18-temper-condimentos-25-00","supplierId":"sup_temper-condimentos-e-embalagens","scope":"gyros","resourceType":"ingredient","resourceId":"ing_lemon_pepper","description":"lemon pepper","qty":1,"unit":"un","unitPrice":15,"totalPrice":15,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-18-temper-condimentos-25-00-3-fumaca-em-po","orderId":"ord_2026-02-18-temper-condimentos-25-00","supplierId":"sup_temper-condimentos-e-embalagens","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fumaca_po","description":"fumaça em pó","qty":1,"unit":"un","unitPrice":8,"totalPrice":8,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-27-fonte-nova-47-33-1-rodo-condor-40-cm","orderId":"ord_2026-02-27-fonte-nova-47-33","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_rodo-condor-40-cm","description":"Rodo Condor 40 cm","qty":1,"unit":"un","unitPrice":19.99,"totalPrice":19.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-27-fonte-nova-47-33-2-saco-xadrez-4-un","orderId":"ord_2026-02-27-fonte-nova-47-33","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_saco-xadrez-4-un","description":"saco xadrez (4 un)","qty":4,"unit":"un","unitPrice":5.49,"totalPrice":21.96,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-27-fonte-nova-47-33-3-viking-palhinha-750-ml","orderId":"ord_2026-02-27-fonte-nova-47-33","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_viking-palhinha-750-ml","description":"Viking palhinha 750 ml","qty":1,"unit":"un","unitPrice":2.79,"totalPrice":2.79,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-02-27-fonte-nova-47-33-4-detergente-ype-coco-50","orderId":"ord_2026-02-27-fonte-nova-47-33","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_detergente-ype-coco-500-ml","description":"detergente Ypê coco 500 ml","qty":1,"unit":"un","unitPrice":2.59,"totalPrice":2.59,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-05-mc1-adaptador-18-00-1-adaptador-dako-x-1-","orderId":"ord_2026-03-05-mc1-adaptador-18-00","supplierId":"sup_mc1-commerce-nacionais-e-importados","scope":"gyros","resourceType":"other","resourceId":"itm_adaptador-dako-x-1-2-macho-fresado","description":"Adaptador Dako x 1/2 macho fresado","qty":1,"unit":"un","unitPrice":18,"totalPrice":18,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-05-mc1-fita-32-00-1-fita-dupla-face-3m-extre","orderId":"ord_2026-03-05-mc1-fita-32-00","supplierId":"sup_mc1-commerce-nacionais-e-importados","scope":"gyros","resourceType":"other","resourceId":"itm_fita-dupla-face-3m-extrema-24mm-x-2m","description":"Fita dupla face 3M Extrema 24mm x 2m","qty":1,"unit":"un","unitPrice":32,"totalPrice":32,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-05-mc1-gas-69-00-1-cola-silicone-50g-tekbond","orderId":"ord_2026-03-05-mc1-gas-69-00","supplierId":"sup_mc1-commerce-nacionais-e-importados","scope":"gyros","resourceType":"other","resourceId":"itm_cola-silicone-50g-tekbond-alta-temperatura-vermelha","description":"Cola silicone 50g Tekbond alta temperatura vermelha","qty":1,"unit":"un","unitPrice":14,"totalPrice":14,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-05-mc1-gas-69-00-2-regulador-gas-alianca-gd-","orderId":"ord_2026-03-05-mc1-gas-69-00","supplierId":"sup_mc1-commerce-nacionais-e-importados","scope":"gyros","resourceType":"other","resourceId":"itm_regulador-gas-alianca-gd-506-01","description":"regulador gás aliança GD.506/01","qty":1,"unit":"un","unitPrice":55,"totalPrice":55,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-14-frigo-noronha-168-26-1-fraldinha","orderId":"ord_2026-03-14-frigo-noronha-168-26","supplierId":"sup_frigo-noronha","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha","qty":1.31,"unit":"kg","unitPrice":52.98,"totalPrice":69.4,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-14-frigo-noronha-168-26-2-fraldinha-grill","orderId":"ord_2026-03-14-frigo-noronha-168-26","supplierId":"sup_frigo-noronha","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha grill","qty":1.236,"unit":"kg","unitPrice":79.98,"totalPrice":98.86,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-14-supermercado-x-85-79-1-mucarela-bandeja-k","orderId":"ord_2026-03-14-supermercado-x-85-79","supplierId":"sup_supermercado-x","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela bandeja / kg","qty":1,"unit":"un","unitPrice":37.33,"totalPrice":37.33,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-14-supermercado-x-85-79-2-manti-italico-c-s-","orderId":"ord_2026-03-14-supermercado-x-85-79","supplierId":"sup_supermercado-x","scope":"gyros","resourceType":"other","resourceId":"itm_manti_italico_200g","description":"Manti Itálico c/s 200g","qty":1,"unit":"un","unitPrice":10.99,"totalPrice":10.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-14-supermercado-x-85-79-3-azeite-de-oliva-qu","orderId":"ord_2026-03-14-supermercado-x-85-79","supplierId":"sup_supermercado-x","scope":"gyros","resourceType":"ingredient","resourceId":"ing_oleo_vinagre","description":"Azeite de oliva Quattro 500ml","qty":1,"unit":"un","unitPrice":24.99,"totalPrice":24.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-14-supermercado-x-85-79-4-ketchup-quero-trad","orderId":"ord_2026-03-14-supermercado-x-85-79","supplierId":"sup_supermercado-x","scope":"gyros","resourceType":"ingredient","resourceId":"ing_ketchup","description":"Ketchup Quero Trad 400g","qty":1,"unit":"un","unitPrice":7.49,"totalPrice":7.49,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-14-supermercado-x-85-79-5-alho-triturado-200","orderId":"ord_2026-03-14-supermercado-x-85-79","supplierId":"sup_supermercado-x","scope":"gyros","resourceType":"ingredient","resourceId":"ing_alho","description":"Alho triturado 200g","qty":1,"unit":"un","unitPrice":4.99,"totalPrice":4.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-18-laticinios-catupiry-74-98-1-requeijao-ori","orderId":"ord_2026-03-18-laticinios-catupiry-74-98","supplierId":"sup_laticinios-catupiry","scope":"gyros","resourceType":"ingredient","resourceId":"ing_4queijos","description":"Requeijão original 4 queijos profissional 1,01 kg","qty":2,"unit":"un","unitPrice":37.49,"totalPrice":74.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-28-mc1-extensoes-137-70-1-extensao-tecnica-0","orderId":"ord_2026-03-28-mc1-extensoes-137-70","supplierId":"sup_mc1-commerce-nacionais-e-importados","scope":"gyros","resourceType":"other","resourceId":"itm_extensao-tecnica-0-75-m-2p-t-10a-br-2-un","description":"Extensão técnica 0,75 m 2P+T 10A BR (2 un)","qty":2,"unit":"un","unitPrice":27.9,"totalPrice":55.8,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-28-mc1-extensoes-137-70-2-extensao-iluminaca","orderId":"ord_2026-03-28-mc1-extensoes-137-70","supplierId":"sup_mc1-commerce-nacionais-e-importados","scope":"gyros","resourceType":"other","resourceId":"itm_extensao-iluminacao-pl-05-mts-branca","description":"extensão/iluminação PL 05 MTS branca","qty":1,"unit":"un","unitPrice":29.9,"totalPrice":29.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-28-mc1-extensoes-137-70-3-adaptador-de-viage","orderId":"ord_2026-03-28-mc1-extensoes-137-70","supplierId":"sup_mc1-commerce-nacionais-e-importados","scope":"gyros","resourceType":"other","resourceId":"itm_adaptador-de-viagem-rapido-5-1a-c-8-micro-2-usb","description":"adaptador de viagem rápido 5.1A c/ 8 micro 2 USB","qty":2,"unit":"un","unitPrice":26,"totalPrice":52,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-1-caixa-biopratika-r310","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_caixa_biopratika_r310","description":"Caixa Biopratika R310","qty":4,"unit":"un","unitPrice":5.49,"totalPrice":21.96,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-2-saco-assai-58x70-verde","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_saco_assai_58x70","description":"Saco Assaí 58x70 verde","qty":4,"unit":"un","unitPrice":0.25,"totalPrice":1,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-3-caixa-pleion-c-r-512","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_caixa_pleion_cr512","description":"Caixa Pleion c/r 512","qty":1,"unit":"un","unitPrice":12.9,"totalPrice":12.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-4-luva-vabene-c-100","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_luva_vabene_100","description":"Luva Vabene c/100","qty":3,"unit":"un","unitPrice":2.25,"totalPrice":6.75,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-5-esponja-scotch-multiuso-c","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_esponja_scotch_multiuso_c4","description":"Esponja Scotch multiuso c/4","qty":1,"unit":"un","unitPrice":6.6,"totalPrice":6.6,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-6-touca-bompack-c-100","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_touca_bompack_100","description":"Touca Bompack c/100","qty":1,"unit":"un","unitPrice":9.9,"totalPrice":9.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-7-guard-scott-fs-c-50","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_guard_scott_fs50","description":"Guard Scott FS c/50","qty":2,"unit":"un","unitPrice":1.79,"totalPrice":3.58,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-8-luva-bompack-hair","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_luva_bompack_hair","description":"Luva Bompack hair","qty":2,"unit":"un","unitPrice":4.15,"totalPrice":8.3,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-9-saco-p-lixo-betty-jeitosa","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_saco_lixo_betty_jeitosa","description":"Saco p/ lixo Betty Jeitosa","qty":1,"unit":"un","unitPrice":21,"totalPrice":21,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-10-mucarela-piracanjuba-fat","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela Piracanjuba fatiada","qty":3.386,"unit":"kg","unitPrice":48,"totalPrice":162.49,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-11-caixa-biopratika-r430","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_caixa_biopratika_r430","description":"Caixa Biopratika R430","qty":2,"unit":"un","unitPrice":25.9,"totalPrice":51.8,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-12-acucar-refinado-1kg","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_acucar_refinado_1kg","description":"Açúcar refinado 1kg","qty":2,"unit":"un","unitPrice":3.75,"totalPrice":7.5,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-13-li-cal-fres-ajro-2-5","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_li_cal_fres_ajro_25","description":"LI CAL FRES AJRO 2,5","qty":2,"unit":"un","unitPrice":49,"totalPrice":98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-14-farofa-yoki-800g","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_farofa_pronta","description":"Farofa Yoki 800g","qty":2,"unit":"un","unitPrice":6.99,"totalPrice":13.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-15-alho-pic-kamar-1kg","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_alho","description":"Alho pic Kamar 1kg","qty":1,"unit":"un","unitPrice":12.9,"totalPrice":12.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-16-cheddar-polenghi-1-5kg","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_cheddar","description":"Cheddar Polenghi 1,5kg","qty":1,"unit":"un","unitPrice":47.5,"totalPrice":47.5,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-17-feijao-carioca-solito-1k","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_feijao_carioca_solito_1kg","description":"Feijão carioca Solito 1kg","qty":5,"unit":"un","unitPrice":7.49,"totalPrice":37.45,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-18-mant-tour-p-c-500g","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_mant_tour_pc_500g","description":"MANT TOUR P/C 500g","qty":1,"unit":"un","unitPrice":21,"totalPrice":21,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-19-mel-holanda-200g","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mel","description":"Mel Holanda 200g","qty":1,"unit":"un","unitPrice":11,"totalPrice":11,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-20-alc-cope-500g-bact","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_alc_cope_500_bact","description":"ALC COPE 500g bact","qty":1,"unit":"un","unitPrice":9.9,"totalPrice":9.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-21-oleo-soya-pet-900ml","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_oleo_soya_pet_900ml","description":"Óleo Soya PET 900ml","qty":2,"unit":"un","unitPrice":7.49,"totalPrice":14.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-22-cat-quero-1-15kg","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_cat_quero_115kg","description":"CAT Quero 1,15kg","qty":1,"unit":"un","unitPrice":15.45,"totalPrice":15.45,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-23-detergente-ype-500ml-cle","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_detergente_ype_clear_500","description":"Detergente Ypê 500ml clear","qty":1,"unit":"un","unitPrice":2.35,"totalPrice":2.35,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-24-arroz-saboroso-5kg","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_arroz_saboroso_5kg","description":"Arroz Saboroso 5kg","qty":2,"unit":"un","unitPrice":14.99,"totalPrice":29.98,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-02-sendas-628-07-25-ajuste-de-desconto-do-cu","orderId":"ord_2026-04-02-sendas-628-07","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_ajuste_desconto_sendas_0204","description":"Ajuste de desconto do cupom","qty":1,"unit":"un","unitPrice":-0.2,"totalPrice":-0.2,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-06-boi-preto-346-70-1-fraldinha","orderId":"ord_2026-04-06-boi-preto-346-70","supplierId":"sup_casa-de-carne-boi-preto","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha","qty":5.564,"unit":"kg","unitPrice":42.99,"totalPrice":239.2,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-06-boi-preto-346-70-2-sobrecoxa-de-frango-de","orderId":"ord_2026-04-06-boi-preto-346-70","supplierId":"sup_casa-de-carne-boi-preto","scope":"gyros","resourceType":"ingredient","resourceId":"ing_frango","description":"Sobrecoxa de frango desossada","qty":2.578,"unit":"kg","unitPrice":19.99,"totalPrice":51.53,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-06-boi-preto-346-70-3-peito-de-frango","orderId":"ord_2026-04-06-boi-preto-346-70","supplierId":"sup_casa-de-carne-boi-preto","scope":"gyros","resourceType":"ingredient","resourceId":"ing_frango","description":"Peito de frango","qty":2.8,"unit":"kg","unitPrice":19.99,"totalPrice":55.97,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-09-sodimac-168-90-1-prolongador-pp-hard","orderId":"ord_2026-04-09-sodimac-168-90","supplierId":"sup_construdecor-sodimac-guarulhos","scope":"gyros","resourceType":"other","resourceId":"itm_prolongador-pp-hard","description":"Prolongador PP Hard","qty":1,"unit":"un","unitPrice":139,"totalPrice":139,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-09-sodimac-168-90-2-extensao-3-tomadas-slim","orderId":"ord_2026-04-09-sodimac-168-90","supplierId":"sup_construdecor-sodimac-guarulhos","scope":"gyros","resourceType":"other","resourceId":"itm_extensao-3-tomadas-slim","description":"extensão 3 tomadas Slim","qty":1,"unit":"un","unitPrice":29.9,"totalPrice":29.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-09-fonte-nova-27-19-1-detergente-ype-clear-5","orderId":"ord_2026-04-09-fonte-nova-27-19","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_detergente-ype-clear-500-ml-2-un","description":"Detergente Ypê Clear 500 ml (2 un)","qty":2,"unit":"un","unitPrice":2.59,"totalPrice":5.18,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-09-fonte-nova-27-19-2-agua-san-suprema-2l","orderId":"ord_2026-04-09-fonte-nova-27-19","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"other","resourceId":"itm_agua-san-suprema-2l","description":"água san suprema 2L","qty":1,"unit":"un","unitPrice":4.99,"totalPrice":4.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-09-fonte-nova-27-19-3-salsa-e-cebolinha","orderId":"ord_2026-04-09-fonte-nova-27-19","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"ingredient","resourceId":"ing_cheiro_verde","description":"salsa e cebolinha","qty":1,"unit":"un","unitPrice":5.99,"totalPrice":5.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-09-fonte-nova-27-19-4-tomate-italiano","orderId":"ord_2026-04-09-fonte-nova-27-19","supplierId":"sup_mercado-fonte-nova-recreio","scope":"gyros","resourceType":"ingredient","resourceId":"ing_tomate","description":"tomate italiano","qty":1,"unit":"un","unitPrice":11.03,"totalPrice":11.03,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-sendas-104-23-1-agua-petropolis-sem-gas-1","orderId":"ord_2026-04-10-sendas-104-23","supplierId":"sup_sendas","scope":"gyros","resourceType":"product","resourceId":"prd_agua_510","description":"Água Petrópolis sem gás 1,5L","qty":6,"unit":"un","unitPrice":1.89,"totalPrice":11.34,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-sendas-104-23-2-tomate-italiano","orderId":"ord_2026-04-10-sendas-104-23","supplierId":"sup_sendas","scope":"gyros","resourceType":"ingredient","resourceId":"ing_tomate","description":"Tomate italiano","qty":1,"unit":"un","unitPrice":24.66,"totalPrice":24.66,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-sendas-104-23-3-manti-frizzo-500g","orderId":"ord_2026-04-10-sendas-104-23","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_manti_frizzo_500g","description":"Manti Frizzo 500g","qty":1,"unit":"un","unitPrice":18.9,"totalPrice":18.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-sendas-104-23-4-coca-cola-350-ml","orderId":"ord_2026-04-10-sendas-104-23","supplierId":"sup_sendas","scope":"gyros","resourceType":"product","resourceId":"prd_coca","description":"Coca-Cola 350 ml","qty":12,"unit":"un","unitPrice":4.29,"totalPrice":51.48,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-sendas-104-23-5-sacola","orderId":"ord_2026-04-10-sendas-104-23","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_sacola_sendas_1004","description":"Sacola","qty":1,"unit":"un","unitPrice":0.25,"totalPrice":0.25,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-sendas-104-23-6-ajuste-de-desconto-do-cup","orderId":"ord_2026-04-10-sendas-104-23","supplierId":"sup_sendas","scope":"gyros","resourceType":"other","resourceId":"itm_ajuste_desconto_sendas_1004","description":"Ajuste de desconto do cupom","qty":1,"unit":"un","unitPrice":-2.4,"totalPrice":-2.4,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-urca-63-36-1-guarana-antarctica-lata-350m","orderId":"ord_2026-04-10-urca-63-36","supplierId":"sup_urca-de-bebidas-e-alimentos","scope":"gyros","resourceType":"product","resourceId":"prd_guarana_350","description":"Guaraná Antarctica lata 350ml","qty":12,"unit":"un","unitPrice":2.79,"totalPrice":33.48,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-10-urca-63-36-2-guaraviton-acai","orderId":"ord_2026-04-10-urca-63-36","supplierId":"sup_urca-de-bebidas-e-alimentos","scope":"gyros","resourceType":"other","resourceId":"itm_guaraviton_acai","description":"Guaraviton Açaí","qty":12,"unit":"un","unitPrice":2.49,"totalPrice":29.88,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-1-fraldinha-bovina-vacuo-1","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha bovina vácuo (1,140 kg)","qty":1.14,"unit":"kg","unitPrice":42.99,"totalPrice":49,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-2-fraldinha-bovina-vacuo-1","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha bovina vácuo (1,205 kg)","qty":1.205,"unit":"kg","unitPrice":42.99,"totalPrice":51.8,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-3-fraldinha-bovina-vacuo-1","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha bovina vácuo (1,190 kg)","qty":1.19,"unit":"kg","unitPrice":42.99,"totalPrice":51.15,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-4-fraldinha-bovina-vacuo-0","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_fraldinha","description":"Fraldinha bovina vácuo (0,735 kg)","qty":0.735,"unit":"kg","unitPrice":42.99,"totalPrice":31.59,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-5-manteiga-italac-com-sal-","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"other","resourceId":"itm_manti_italic_500g","description":"Manteiga Italac com sal 500g","qty":1,"unit":"un","unitPrice":19.9,"totalPrice":19.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-6-agua-mineral-5l","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"other","resourceId":"itm_agua_mineral_poupaki_5l","description":"Água mineral 5L","qty":1,"unit":"un","unitPrice":10.79,"totalPrice":10.79,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-7-mucarela-piracanjuba-fat","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela Piracanjuba fatiada (0,133 kg)","qty":0.133,"unit":"kg","unitPrice":54.9,"totalPrice":7.3,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-8-mucarela-piracanjuba-fat","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela Piracanjuba fatiada (0,148 kg)","qty":0.148,"unit":"kg","unitPrice":54.9,"totalPrice":8.12,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-9-mucarela-piracanjuba-fat","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela Piracanjuba fatiada (0,128 kg)","qty":0.128,"unit":"kg","unitPrice":54.9,"totalPrice":7.02,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-10-mucarela-piracanjuba-fa","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela Piracanjuba fatiada (0,133 kg)","qty":0.133,"unit":"kg","unitPrice":54.9,"totalPrice":7.3,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-11-requeijao-catupiry-250g","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_catupiry","description":"Requeijão Catupiry 250g","qty":1,"unit":"un","unitPrice":17.29,"totalPrice":17.29,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-12-toalha-umedecida-upa-be","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"other","resourceId":"itm_toalha_umedecida_upa_bebe_140","description":"Toalha Umedecida Upa Bebe 140 unidades","qty":1,"unit":"un","unitPrice":6.99,"totalPrice":6.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-13-requeijao-catupiry-1-5k","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_catupiry","description":"Requeijão Catupiry 1,5kg","qty":1,"unit":"un","unitPrice":66.9,"totalPrice":66.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-19-poupaki-427-65-14-linguica-toscana-aurora","orderId":"ord_2026-04-19-poupaki-427-65","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_linguica","description":"Linguiça Toscana Aurora","qty":1,"unit":"caixa","unitPrice":92.5,"totalPrice":92.5,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-21-irmaos-lopes-62-44-1-coca-cola-pet-2l","orderId":"ord_2026-04-21-irmaos-lopes-62-44","supplierId":"sup_supermercados-irmaos-lopes","scope":"gyros","resourceType":"product","resourceId":"prd_coca_2l","description":"Coca-Cola PET 2L","qty":1,"unit":"un","unitPrice":11.99,"totalPrice":11.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-21-irmaos-lopes-62-44-2-berinjela","orderId":"ord_2026-04-21-irmaos-lopes-62-44","supplierId":"sup_supermercados-irmaos-lopes","scope":"gyros","resourceType":"ingredient","resourceId":"ing_berinjela","description":"berinjela","qty":1,"unit":"un","unitPrice":11.03,"totalPrice":11.03,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-21-irmaos-lopes-62-44-3-tomate-salada","orderId":"ord_2026-04-21-irmaos-lopes-62-44","supplierId":"sup_supermercados-irmaos-lopes","scope":"gyros","resourceType":"ingredient","resourceId":"ing_tomate","description":"tomate salada","qty":1,"unit":"un","unitPrice":12.49,"totalPrice":12.49,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-21-irmaos-lopes-62-44-4-salsa-cebolinha","orderId":"ord_2026-04-21-irmaos-lopes-62-44","supplierId":"sup_supermercados-irmaos-lopes","scope":"gyros","resourceType":"ingredient","resourceId":"ing_cheiro_verde","description":"salsa/cebolinha","qty":1,"unit":"un","unitPrice":2.99,"totalPrice":2.99,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-21-irmaos-lopes-62-44-5-pimentao-amarelo","orderId":"ord_2026-04-21-irmaos-lopes-62-44","supplierId":"sup_supermercados-irmaos-lopes","scope":"gyros","resourceType":"ingredient","resourceId":"ing_pimentao_amarelo","description":"pimentão amarelo","qty":1,"unit":"un","unitPrice":10.96,"totalPrice":10.96,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-21-irmaos-lopes-62-44-6-pimentao-verde","orderId":"ord_2026-04-21-irmaos-lopes-62-44","supplierId":"sup_supermercados-irmaos-lopes","scope":"gyros","resourceType":"other","resourceId":"itm_pimentao-verde","description":"pimentão verde","qty":1,"unit":"un","unitPrice":10.21,"totalPrice":10.21,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-21-irmaos-lopes-62-44-7-limao-taiti","orderId":"ord_2026-04-21-irmaos-lopes-62-44","supplierId":"sup_supermercados-irmaos-lopes","scope":"gyros","resourceType":"other","resourceId":"itm_limao-taiti","description":"limão taiti","qty":1,"unit":"un","unitPrice":2.77,"totalPrice":2.77,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-22-poupaki-245-00-1-queijo-mucarela-aurora-f","orderId":"ord_2026-04-22-poupaki-245-00","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Queijo muçarela Aurora fatiado","qty":1.014,"unit":"kg","unitPrice":54.9,"totalPrice":55.66,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-22-poupaki-245-00-2-mucarela-piracanjuba-fat","orderId":"ord_2026-04-22-poupaki-245-00","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_mucarela","description":"Muçarela Piracanjuba fatiada","qty":0.683,"unit":"kg","unitPrice":54.89,"totalPrice":37.49,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-22-poupaki-245-00-3-cerveja-amstel-355ml","orderId":"ord_2026-04-22-poupaki-245-00","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"other","resourceId":"itm_amstel_355ml","description":"Cerveja Amstel 355ml","qty":12,"unit":"un","unitPrice":4.99,"totalPrice":59.88,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-22-poupaki-245-00-4-cerveja-heineken-330ml","orderId":"ord_2026-04-22-poupaki-245-00","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"product","resourceId":"prd_heineken_330","description":"Cerveja Heineken 330ml","qty":6,"unit":"un","unitPrice":6.13,"totalPrice":36.78,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-22-poupaki-245-00-5-cha-ice-tea-leao-450ml","orderId":"ord_2026-04-22-poupaki-245-00","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"product","resourceId":"prd_garrafa_450","description":"Chá Ice Tea Leão 450ml","qty":4,"unit":"un","unitPrice":3.79,"totalPrice":15.16,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-22-poupaki-245-00-6-schweppes-citrus-350ml","orderId":"ord_2026-04-22-poupaki-245-00","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"product","resourceId":"prd_schweppes_350","description":"Schweppes Citrus 350ml","qty":6,"unit":"un","unitPrice":3.79,"totalPrice":22.74,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-22-poupaki-245-00-7-requeijao-catupiry-250g","orderId":"ord_2026-04-22-poupaki-245-00","supplierId":"sup_poupaki-atacadista","scope":"gyros","resourceType":"ingredient","resourceId":"ing_catupiry","description":"Requeijão Catupiry 250g","qty":1,"unit":"un","unitPrice":17.29,"totalPrice":17.29,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-22-interfolhas-papel-15-00-1-interfolhas-pap","orderId":"ord_2026-04-22-interfolhas-papel-15-00","supplierId":"","scope":"gyros","resourceType":"packaging","resourceId":"pkg_lanche","description":"Interfolhas papel","qty":1,"unit":"un","unitPrice":15,"totalPrice":15,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-1-azeite-de-oliva-cocinero-50","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_oleo_vinagre","description":"Azeite de oliva Cocinero 500ml","qty":1,"unit":"frasco","unitPrice":26,"totalPrice":26,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-2-bacon-em-cubos-perdigao-1kg","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_bacon_cubos","description":"Bacon em cubos Perdigão 1kg","qty":1,"unit":"pacote","unitPrice":23,"totalPrice":23,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-3-batata-pre-frita-bem-brasil","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_batata","description":"Batata pré-frita Bem Brasil 2kg","qty":3,"unit":"caixa","unitPrice":99.99,"totalPrice":299.97,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-4-maionese-grande-quero-3kg","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_maionese_ind","description":"Maionese grande Quero 3kg","qty":2,"unit":"balde","unitPrice":23.9,"totalPrice":47.8,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-5-maionese-grill-junior-1-1kg","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_maionese_ind","description":"Maionese Grill Junior 1,1kg","qty":15,"unit":"bag","unitPrice":39.4,"totalPrice":591,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-6-manteiga-com-sal-ipanema-50","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_manteiga","description":"Manteiga com sal Ipanema 500g","qty":2,"unit":"un","unitPrice":23.5,"totalPrice":47,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-7-molho-queijo-cheddar-poleng","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_cheddar","description":"Molho queijo cheddar Polenghi 1,5kg","qty":2,"unit":"bisnaga","unitPrice":47,"totalPrice":94,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-8-oleo-de-algodao-elogiata-90","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"ingredient","resourceId":"ing_oleo_algodao","description":"Óleo de algodão Elogiata 900ml","qty":3,"unit":"frasco","unitPrice":9.04,"totalPrice":27.12,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-04-15-pmg-9096638-9-sprite-lata-350ml","orderId":"ord_2026-04-15-pmg-9096638","supplierId":"sup_pmg","scope":"gyros","resourceType":"product","resourceId":"prd_sprite_350","description":"Sprite lata 350ml","qty":1,"unit":"caixa","unitPrice":21.4,"totalPrice":21.4,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-14-mercado-livre-tv-stick-112-00-1-tv-stick-","orderId":"ord_2026-03-14-mercado-livre-tv-stick-112-00","supplierId":"sup_dusk-moon-variedades","scope":"gyros","resourceType":"other","resourceId":"itm_tv_stick_android_tvr3","description":"TV Stick Wifi Smart TV Android HDMI Fire TV Stick TVR3","qty":1,"unit":"un","unitPrice":112,"totalPrice":112,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-15-mercado-livre-suporte-celular-39-16-1-sup","orderId":"ord_2026-03-15-mercado-livre-suporte-celular-39-16","supplierId":"sup_lucciolar-home","scope":"gyros","resourceType":"other","resourceId":"itm_suporte_celular_parede","description":"Suporte universal para celular ou tablet de parede com fita - branco","qty":2,"unit":"un","unitPrice":19.58,"totalPrice":39.16,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"},{"id":"pit_ord-2026-03-15-mercado-livre-cartao-memoria-20-90-1-cart","orderId":"ord_2026-03-15-mercado-livre-cartao-memoria-20-90","supplierId":"sup_descomparar","scope":"gyros","resourceType":"other","resourceId":"itm_cartao_memoria_32gb","description":"Cartão de memória 32GB para câmeras Wi-Fi e drones","qty":1,"unit":"un","unitPrice":20.9,"totalPrice":20.9,"evidenceType":"documented","evidenceSource":"Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026"}],"inputs":[{"id":"inp_pmg_8997086","scope":"gyros","title":"Pedido PMG nº 8997086","inputType":"order","sourceChannel":"other","supplierId":"sup_pmg","supplierName":"PMG Comércio de Frios e Laticínios","documentNumber":"8997086","date":"2026-03-12","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":1298.9,"fileLabel":"CANTINHO DO BOM RETIRO 1.pdf","filePath":"docs/inputs/CANTINHO_DO_BOM_RETIRO_1.pdf","fileUrl":"","notes":"Pedido original PMG salvo anteriormente. Mantido como evidência complementar da DANFE 5669620 (ref. 8997086).","evidenceType":"documented","evidenceSource":"Pedido original salvo em docs/inputs e reconciliado com DANFE fiscal importada","code":"INP_PMG_8997086","description":"Compra grande de bebidas, batata, maionese, barbecue e outros itens."},{"id":"inp_bom_clima_343","scope":"gyros","title":"Orçamento Bom Clima nº 343","inputType":"quote","sourceChannel":"other","supplierId":"sup_bom_clima","supplierName":"Bom Clima Embalagens","documentNumber":"343","date":"2026-03-02","paymentMethod":"PIX","paymentStatus":"pending","totalAmount":399.35,"fileLabel":"Orcamento_343_T_D_SANTANA_RESTAURANTE.pdf","filePath":"docs/inputs/Orcamento_343_T_D_SANTANA_RESTAURANTE.pdf","fileUrl":"","notes":"Orçamento de embalagens e descartáveis.","evidenceType":"documented","evidenceSource":"PDF oficial do fornecedor","code":"INP_BOM_CLIMA_343","description":"Orçamento de embalagens e descartáveis."},{"id":"inp_samppel_10002","scope":"gyros","title":"Pedido Samppel PV 10002","inputType":"order","sourceChannel":"other","supplierId":"sup_samppael","supplierName":"Samppel","documentNumber":"PV 10002","date":"2026-03-04","paymentMethod":"PIX","paymentStatus":"paid","totalAmount":335,"fileLabel":"PV 10002.pdf","filePath":"docs/inputs/PV_10002.pdf","fileUrl":"","notes":"Pedido de sacola delivery e frete.","evidenceType":"documented","evidenceSource":"PDF oficial do fornecedor","code":"INP_SAMPPEL_10002","description":"Pedido de sacola delivery e frete."},{"id":"inp_sao_vito_9678784","scope":"gyros","title":"Pedido online Armazém São Vito","inputType":"screenshot","sourceChannel":"online","supplierId":"sup_armazem_sao_vito","supplierName":"Armazém São Vito","documentNumber":"9678784","date":"2026-02-25","paymentMethod":"PIX","paymentStatus":"paid","totalAmount":129.89,"fileLabel":"Print do pedido online 9678784","filePath":"","fileUrl":"https://checkout.saovito.com/MinhaConta/Pedido/","notes":"Pedido online visualizado pela operação. Alguns itens ainda serão cadastrados depois.","evidenceType":"review","evidenceSource":"Captura de tela do pedido online","code":"INP_SAO_VITO_9678784","description":"Pedido online visualizado pela operação. Alguns itens ainda serão cadastrados depois."},{"id":"inp_meus_congelados_site","scope":"gyros","title":"Site Meus Congelados - Mini Churros Doce de Leite 1kg","inputType":"screenshot","sourceChannel":"online","supplierId":"sup_congelados","supplierName":"Meus Congelados","documentNumber":"","date":"","paymentMethod":"PIX","paymentStatus":"paid","totalAmount":29.9,"fileLabel":"Referencia visual do site do fornecedor","filePath":"","fileUrl":"","notes":"Produto congelado ja recheado com doce de leite. Unidade operacional aproximada de 20g.","evidenceType":"review","evidenceSource":"Print/site informado pela operacao; confirmar pedido formal quando houver","code":"INP_MEUS_CONGELADOS_SITE","description":"Produto congelado ja recheado com doce de leite. Unidade operacional aproximada de 20g."},{"id":"inp_pmg_danfe_5669620","scope":"gyros","title":"Nota fiscal PMG Comércio de Frios e Laticínios nº 5669620","inputType":"invoice","sourceChannel":"other","supplierId":"sup_pmg","supplierName":"PMG Comércio de Frios e Laticínios","documentNumber":"5669620","date":"2026-03-12","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":1657.55,"fileLabel":"2026-03-12-pmg-danfe-5669620.pdf","filePath":"docs/inputs/2026/2026-03/2026-03-12-pmg-danfe-5669620.pdf","filePaths":["docs/inputs/2026/2026-03/2026-03-12-pmg-danfe-5669620.pdf"],"fileUrl":"","notes":"DANFE fiscal referente ao pedido/venda 8997086. Usada para reconciliar o pedido PMG já existente na base.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_12_PMG_DANFE_5669620","description":"DANFE PMG 5669620 (ref. 8997086)"},{"id":"inp_2026-03-25-chaveiro-benizio-70-00","scope":"gyros","title":"Comprovante Cópias de chaves tetras","inputType":"payment_receipt","sourceChannel":"physical_store","supplierId":"sup_chaveiro-benizio","supplierName":"Chaveiro Benízio","documentNumber":"","date":"2026-03-25","paymentMethod":"À vista","paymentStatus":"paid","totalAmount":70,"fileLabel":"2026-03-25-chaveiro-benizio-70-00.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-25-chaveiro-benizio-70-00.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-25-chaveiro-benizio-70-00.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_25_CHAVEIRO_BENIZIO_70_00","description":"Cópias de chaves tetras"},{"id":"inp_2026-03-31-padaria-versailles-375-00","scope":"gyros","title":"Nota fiscal Pão Francês com Parmesão","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_padaria","supplierName":"Padaria Versailles","documentNumber":"","date":"2026-03-31","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":375,"fileLabel":"2026-03-31-padaria-versailles-375-00.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-31-padaria-versailles-375-00.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-31-padaria-versailles-375-00.jpeg"],"fileUrl":"","notes":"Primeira compra documentada do Pão Francês com Parmesão pronto na Padaria Versailles: 150 unidades a R$ 2,50 por unidade.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_31_PADARIA_VERSAILLES_375_00","description":"Pão Francês com Parmesão"},{"id":"inp_2026-03-31-mercado-fonte-nova-37-59","scope":"gyros","title":"Nota fiscal Mercado Fonte Nova - hortifruti 31/03","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","documentNumber":"","date":"2026-03-31","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":37.59,"fileLabel":"2026-03-31-mercado-fonte-nova-37-59.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-31-mercado-fonte-nova-37-59.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-31-mercado-fonte-nova-37-59.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_31_MERCADO_FONTE_NOVA_37_59","description":"Mercado Fonte Nova - hortifruti 31/03"},{"id":"inp_2026-04-01-comanda-churros-119-60","scope":"gyros","title":"Comprovante Churros","inputType":"payment_receipt","sourceChannel":"physical_store","supplierId":"sup_fornecedor-nao-identificado-comanda-manual-laranjinha-it","supplierName":"Fornecedor não identificado (comanda manual + Laranjinha Itaú)","documentNumber":"","date":"2026-04-01","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":119.6,"fileLabel":"2026-04-01-comanda-churros-119-60.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-01-comanda-churros-119-60.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-01-comanda-churros-119-60.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_01_COMANDA_CHURROS_119_60","description":"Churros"},{"id":"inp_2026-04-01-tenda-atacado-67-08","scope":"gyros","title":"Nota fiscal Tenda Atacado - hortifruti e azeite","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_tenda-atacado-vl-galvao","supplierName":"Tenda Atacado Ltda (VL Galvão)","documentNumber":"","date":"2026-04-01","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":67.08,"fileLabel":"2026-04-01-tenda-atacado-67-08.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-01-tenda-atacado-67-08.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-01-tenda-atacado-67-08.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_01_TENDA_ATACADO_67_08","description":"Tenda Atacado - hortifruti e azeite"},{"id":"inp_2026-04-06-cnd-27-49-98","scope":"gyros","title":"Nota fiscal Moedor manual e processador","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_cnd-27-de-utilidades","supplierName":"CND 27 Comércio de Utilidades Ltda","documentNumber":"","date":"2026-04-06","paymentMethod":"Cartão de crédito à vista","paymentStatus":"paid","totalAmount":49.98,"fileLabel":"2026-04-06-cnd-27-49-98.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-06-cnd-27-49-98.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-06-cnd-27-49-98.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_06_CND_27_49_98","description":"Moedor manual e processador"},{"id":"inp_2026-04-08-fonte-nova-gop-23-26","scope":"gyros","title":"Nota fiscal Fonte Nova GOP - água, Sprite e cola","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mercado-fonte-nova-gop","supplierName":"Mercado Fonte Nova GOP","documentNumber":"","date":"2026-04-08","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":23.26,"fileLabel":"2026-04-08-fonte-nova-gop-23-26.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-08-fonte-nova-gop-23-26.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-08-fonte-nova-gop-23-26.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_08_FONTE_NOVA_GOP_23_26","description":"Fonte Nova GOP - água, Sprite e cola"},{"id":"inp_2026-04-09-fonte-nova-fraldinha-44-63","scope":"gyros","title":"Nota fiscal Fraldinha bovina","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","documentNumber":"","date":"2026-04-09","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":44.63,"fileLabel":"2026-04-09-fonte-nova-fraldinha-44-63.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-09-fonte-nova-fraldinha-44-63.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-09-fonte-nova-fraldinha-44-63.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_09_FONTE_NOVA_FRALDINHA_44_63","description":"Fraldinha bovina"},{"id":"inp_2026-04-10-ikoa-plast-59-10","scope":"gyros","title":"Pedido Airpack Mussi 70B","inputType":"order","sourceChannel":"physical_store","supplierId":"sup_ikoa-plast-edido-2025-embalagens-em-geral","supplierName":"IKOA Plast Comércio / EDIDO 2025 Embalagens em Geral","documentNumber":"","date":"2026-04-10","paymentMethod":"Cartão de crédito à vista","paymentStatus":"paid","totalAmount":59.1,"fileLabel":"2026-04-10-ikoa-plast-59-10.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-10-ikoa-plast-59-10.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-10-ikoa-plast-59-10.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_10_IKOA_PLAST_59_10","description":"Airpack Mussi 70B"},{"id":"inp_2026-04-10-boi-preto-337-99","scope":"gyros","title":"Pedido Casa de Carne Boi Preto - fraldinha e sobrecoxa","inputType":"order","sourceChannel":"physical_store","supplierId":"sup_casa-de-carne-boi-preto","supplierName":"Casa de Carne Boi Preto Ltda","documentNumber":"","date":"2026-04-10","paymentMethod":"Dinheiro","paymentStatus":"paid","totalAmount":337.99,"fileLabel":"2026-04-10-boi-preto-337-99.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-10-boi-preto-337-99.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-10-boi-preto-337-99.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_10_BOI_PRETO_337_99","description":"Casa de Carne Boi Preto - fraldinha e sobrecoxa"},{"id":"inp_2026-04-11-sendas-619-40","scope":"gyros","title":"Nota fiscal Sendas 11/04 - mercado misto","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_sendas","supplierName":"Sendas Distribuidora S/A","documentNumber":"","date":"2026-04-11","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":619.4,"fileLabel":"2026-04-11-sendas-619-40.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-11-sendas-619-40.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-11-sendas-619-40.jpeg","docs/inputs/2026/2026-04/2026-04-11-sendas-619-40-p2.jpeg"],"fileUrl":"","notes":"Arquivos complementares: docs/inputs/2026/2026-04/2026-04-11-sendas-619-40-p2.jpeg","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_11_SENDAS_619_40","description":"Sendas 11/04 - mercado misto"},{"id":"inp_2026-04-11-fonte-nova-117-31","scope":"gyros","title":"Nota fiscal Mercado Fonte Nova - contrafilé","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","documentNumber":"","date":"2026-04-11","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":117.31,"fileLabel":"2026-04-11-fonte-nova-117-31.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-11-fonte-nova-117-31.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-11-fonte-nova-117-31.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_11_FONTE_NOVA_117_31","description":"Mercado Fonte Nova - contrafilé"},{"id":"inp_2026-04-11-padaria-versailles-189-66","scope":"gyros","title":"Nota fiscal Pão Francês com Parmesão","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_padaria","supplierName":"Padaria Versailles","documentNumber":"","date":"2026-04-11","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":189.66,"fileLabel":"2026-04-11-padaria-versailles-189-66.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-11-padaria-versailles-189-66.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-11-padaria-versailles-189-66.jpeg"],"fileUrl":"","notes":"Compra reajustada do Pão Francês com Parmesão pronto na Padaria Versailles: 100 unidades por R$ 189,66 no total, equivalente a R$ 1,8966 por unidade.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_11_PADARIA_VERSAILLES_189_66","description":"Pão Francês com Parmesão"},{"id":"inp_2026-04-11-mercado-leonice-10-79","scope":"gyros","title":"Comprovante Tomate Débora","inputType":"payment_receipt","sourceChannel":"physical_store","supplierId":"sup_mercado-leonice","supplierName":"Mercado Leonice","documentNumber":"","date":"2026-04-11","paymentMethod":"Cartão","paymentStatus":"paid","totalAmount":10.79,"fileLabel":"2026-04-11-mercado-leonice-10-79.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-11-mercado-leonice-10-79.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-11-mercado-leonice-10-79.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_11_MERCADO_LEONICE_10_79","description":"Tomate Débora"},{"id":"inp_2026-01-29-dilson-rosa-233-00","scope":"gyros","title":"Pedido Peças para queimador","inputType":"order","sourceChannel":"physical_store","supplierId":"sup_dilson-rosa","supplierName":"Dilson Rosa EPP","documentNumber":"","date":"2026-01-29","paymentMethod":"Não informado","paymentStatus":"paid","totalAmount":233,"fileLabel":"2026-01-29-dilson-rosa-233-00.jpeg","filePath":"docs/inputs/2026/2026-01/2026-01-29-dilson-rosa-233-00.jpeg","filePaths":["docs/inputs/2026/2026-01/2026-01-29-dilson-rosa-233-00.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_01_29_DILSON_ROSA_233_00","description":"Peças para queimador"},{"id":"inp_2026-02-02-js-coifas-1470-00","scope":"gyros","title":"Comprovante Mesa inox","inputType":"payment_receipt","sourceChannel":"physical_store","supplierId":"sup_js-de-coifas","supplierName":"JS Comércio de Coifas","documentNumber":"","date":"2026-02-02","paymentMethod":"Crédito em 10 parcelas","paymentStatus":"paid","totalAmount":1470,"fileLabel":"2026-02-02-js-coifas-1470-00.jpeg","filePath":"docs/inputs/2026/2026-02/2026-02-02-js-coifas-1470-00.jpeg","filePaths":["docs/inputs/2026/2026-02/2026-02-02-js-coifas-1470-00.jpeg"],"fileUrl":"","notes":"Comprovante PagBank com identificação manual de mesa inox.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_02_02_JS_COIFAS_1470_00","description":"Mesa inox"},{"id":"inp_2026-02-02-orinox-690-00","scope":"gyros","title":"Pedido Rechaud banho-maria","inputType":"order","sourceChannel":"physical_store","supplierId":"sup_or-inox-equipamentos","supplierName":"OR INOX Equipamentos Industriais","documentNumber":"","date":"2026-02-02","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":690,"fileLabel":"2026-02-02-orinox-690-00.jpeg","filePath":"docs/inputs/2026/2026-02/2026-02-02-orinox-690-00.jpeg","filePaths":["docs/inputs/2026/2026-02/2026-02-02-orinox-690-00.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_02_02_ORINOX_690_00","description":"Rechaud banho-maria"},{"id":"inp_2026-02-03-bvs-tablet-500-00","scope":"gyros","title":"Nota fiscal Tablet 10\"","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_bvs-sucessoinfo","supplierName":"BVS SucessoInfo","documentNumber":"","date":"2026-02-03","paymentMethod":"Visa Electron + Visa parcelado","paymentStatus":"paid","totalAmount":500,"fileLabel":"2026-02-03-bvs-tablet-500-00.jpeg","filePath":"docs/inputs/2026/2026-02/2026-02-03-bvs-tablet-500-00.jpeg","filePaths":["docs/inputs/2026/2026-02/2026-02-03-bvs-tablet-500-00.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_02_03_BVS_TABLET_500_00","description":"Tablet 10\""},{"id":"inp_2026-02-03-salamandra-2874-84","scope":"gyros","title":"Comprovante Salamandra","inputType":"payment_receipt","sourceChannel":"online","supplierId":"sup_salamandra","supplierName":"Salamandra","documentNumber":"","date":"2026-02-03","paymentMethod":"Crédito parcelado emissor","paymentStatus":"paid","totalAmount":2874.84,"fileLabel":"2026-02-03-salamandra-2874-84.jpeg","filePath":"docs/inputs/2026/2026-02/2026-02-03-salamandra-2874-84.jpeg","filePaths":["docs/inputs/2026/2026-02/2026-02-03-salamandra-2874-84.jpeg"],"fileUrl":"","notes":"Comprovante financeiro com valor base de R$ 2.338,91 e total financiado de R$ 2.874,84 em 6 parcelas.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_02_03_SALAMANDRA_2874_84","description":"Salamandra"},{"id":"inp_2026-02-18-bom-clima-15-50","scope":"gyros","title":"Nota fiscal Limpa Inox 750 ml","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_bom_clima","supplierName":"Bom Clima Embalagens Ltda","documentNumber":"","date":"2026-02-18","paymentMethod":"Dinheiro","paymentStatus":"paid","totalAmount":15.5,"fileLabel":"2026-02-18-bom-clima-15-50.jpeg","filePath":"docs/inputs/2026/2026-02/2026-02-18-bom-clima-15-50.jpeg","filePaths":["docs/inputs/2026/2026-02/2026-02-18-bom-clima-15-50.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_02_18_BOM_CLIMA_15_50","description":"Limpa Inox 750 ml"},{"id":"inp_2026-02-18-temper-condimentos-25-00","scope":"gyros","title":"Pedido Temperos secos","inputType":"order","sourceChannel":"physical_store","supplierId":"sup_temper-condimentos-e-embalagens","supplierName":"Temper Condimentos e Embalagens Ltda","documentNumber":"","date":"2026-02-18","paymentMethod":"Não informado","paymentStatus":"paid","totalAmount":33,"fileLabel":"2026-02-18-temper-condimentos-25-00.jpeg","filePath":"docs/inputs/2026/2026-02/2026-02-18-temper-condimentos-25-00.jpeg","filePaths":["docs/inputs/2026/2026-02/2026-02-18-temper-condimentos-25-00.jpeg"],"fileUrl":"","notes":"Valores individuais confirmados manualmente como corretos pela operação.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_02_18_TEMPER_CONDIMENTOS_25_00","description":"Temperos secos"},{"id":"inp_2026-02-27-fonte-nova-47-33","scope":"gyros","title":"Nota fiscal Limpeza e utilidades","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","documentNumber":"","date":"2026-02-27","paymentMethod":"Dinheiro","paymentStatus":"paid","totalAmount":47.33,"fileLabel":"2026-02-27-fonte-nova-47-33.jpeg","filePath":"docs/inputs/2026/2026-02/2026-02-27-fonte-nova-47-33.jpeg","filePaths":["docs/inputs/2026/2026-02/2026-02-27-fonte-nova-47-33.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_02_27_FONTE_NOVA_47_33","description":"Limpeza e utilidades"},{"id":"inp_2026-03-05-mc1-adaptador-18-00","scope":"gyros","title":"Nota fiscal Adaptador Dako","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mc1-commerce-nacionais-e-importados","supplierName":"MC1 Commerce Nacionais e Importados","documentNumber":"","date":"2026-03-05","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":18,"fileLabel":"2026-03-05-mc1-adaptador-18-00.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-05-mc1-adaptador-18-00.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-05-mc1-adaptador-18-00.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_05_MC1_ADAPTADOR_18_00","description":"Adaptador Dako"},{"id":"inp_2026-03-05-mc1-fita-32-00","scope":"gyros","title":"Nota fiscal Fita dupla face 3M","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mc1-commerce-nacionais-e-importados","supplierName":"MC1 Commerce Nacionais e Importados","documentNumber":"","date":"2026-03-05","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":32,"fileLabel":"2026-03-05-mc1-fita-32-00.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-05-mc1-fita-32-00.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-05-mc1-fita-32-00.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_05_MC1_FITA_32_00","description":"Fita dupla face 3M"},{"id":"inp_2026-03-05-mc1-gas-69-00","scope":"gyros","title":"Nota fiscal Cola silicone e regulador de gás","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mc1-commerce-nacionais-e-importados","supplierName":"MC1 Commerce Nacionais e Importados","documentNumber":"","date":"2026-03-05","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":69,"fileLabel":"2026-03-05-mc1-gas-69-00.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-05-mc1-gas-69-00.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-05-mc1-gas-69-00.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_05_MC1_GAS_69_00","description":"Cola silicone e regulador de gás"},{"id":"inp_2026-03-14-frigo-noronha-168-26","scope":"gyros","title":"Pedido Fraldinha e fraldinha grill","inputType":"order","sourceChannel":"physical_store","supplierId":"sup_frigo-noronha","supplierName":"Frigo Noronha","documentNumber":"","date":"2026-03-14","paymentMethod":"Crédito (1x)","paymentStatus":"paid","totalAmount":168.26,"fileLabel":"2026-03-14-frigo-noronha-168-26.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-14-frigo-noronha-168-26.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-14-frigo-noronha-168-26.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_14_FRIGO_NORONHA_168_26","description":"Fraldinha e fraldinha grill"},{"id":"inp_2026-03-14-supermercado-x-85-79","scope":"gyros","title":"Nota fiscal Supermercado X - muçarela e mercearia","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_supermercado-x","supplierName":"Supermercado X","documentNumber":"","date":"2026-03-14","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":85.79,"fileLabel":"2026-03-14-supermercado-x-85-79.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-14-supermercado-x-85-79.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-14-supermercado-x-85-79.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_14_SUPERMERCADO_X_85_79","description":"Supermercado X - muçarela e mercearia"},{"id":"inp_2026-03-18-laticinios-catupiry-74-98","scope":"gyros","title":"Nota fiscal Requeijão 4 queijos profissional","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_laticinios-catupiry","supplierName":"Laticínios Catupiry Ltda","documentNumber":"","date":"2026-03-18","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":74.98,"fileLabel":"2026-03-18-laticinios-catupiry-74-98.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-18-laticinios-catupiry-74-98.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-18-laticinios-catupiry-74-98.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_18_LATICINIOS_CATUPIRY_74_98","description":"Requeijão 4 queijos profissional"},{"id":"inp_2026-03-28-mc1-extensoes-137-70","scope":"gyros","title":"Nota fiscal Extensões e adaptador","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mc1-commerce-nacionais-e-importados","supplierName":"MC1 Commerce Nacionais e Importados","documentNumber":"","date":"2026-03-28","paymentMethod":"Cartão de débito","paymentStatus":"paid","totalAmount":137.7,"fileLabel":"2026-03-28-mc1-extensoes-137-70.jpeg","filePath":"docs/inputs/2026/2026-03/2026-03-28-mc1-extensoes-137-70.jpeg","filePaths":["docs/inputs/2026/2026-03/2026-03-28-mc1-extensoes-137-70.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_28_MC1_EXTENSOES_137_70","description":"Extensões e adaptador"},{"id":"inp_2026-04-02-sendas-628-07","scope":"gyros","title":"Nota fiscal Sendas 02/04 - compra grande","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_sendas","supplierName":"Sendas Distribuidora S/A","documentNumber":"","date":"2026-04-02","paymentMethod":"Cartão de crédito / Passaí","paymentStatus":"paid","totalAmount":628.07,"fileLabel":"2026-04-02-sendas-628-07.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-02-sendas-628-07.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-02-sendas-628-07.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_02_SENDAS_628_07","description":"Sendas 02/04 - compra grande"},{"id":"inp_2026-04-06-boi-preto-346-70","scope":"gyros","title":"Pedido Casa de Carne Boi Preto - pedido manual","inputType":"order","sourceChannel":"physical_store","supplierId":"sup_casa-de-carne-boi-preto","supplierName":"Casa de Carne Boi Preto","documentNumber":"","date":"2026-04-06","paymentMethod":"Crédito","paymentStatus":"paid","totalAmount":346.7,"fileLabel":"2026-04-06-boi-preto-346-70.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-06-boi-preto-346-70.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-06-boi-preto-346-70.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_06_BOI_PRETO_346_70","description":"Casa de Carne Boi Preto - pedido manual"},{"id":"inp_2026-04-07-orcamento-2025-128-20","scope":"gyros","title":"Orçamento Orçamento 2025","inputType":"quote","sourceChannel":"physical_store","supplierId":"sup_ikoa-plast","supplierName":"IKOA Plast","documentNumber":"","date":"2026-04-07","paymentMethod":"Não se aplica","paymentStatus":"pending","totalAmount":128.2,"fileLabel":"2026-04-07-orcamento-2025-128-20.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-07-orcamento-2025-128-20.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-07-orcamento-2025-128-20.jpeg"],"fileUrl":"","notes":"Documento de orçamento com anotações manuais “142,50” e “pedra -> 14,30”.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_07_ORCAMENTO_2025_128_20","description":"Orçamento 2025"},{"id":"inp_2026-04-09-sodimac-168-90","scope":"gyros","title":"Nota fiscal Prolongador e extensão","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_construdecor-sodimac-guarulhos","supplierName":"Construdecor S/A (Sodimac Guarulhos)","documentNumber":"","date":"2026-04-09","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":168.9,"fileLabel":"2026-04-09-sodimac-168-90.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-09-sodimac-168-90.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-09-sodimac-168-90.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_09_SODIMAC_168_90","description":"Prolongador e extensão"},{"id":"inp_2026-04-09-fonte-nova-27-19","scope":"gyros","title":"Nota fiscal Detergente, água sanitária e hortifruti","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_mercado-fonte-nova-recreio","supplierName":"Mercado Fonte Nova Recreio Ltda","documentNumber":"","date":"2026-04-09","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":27.19,"fileLabel":"2026-04-09-fonte-nova-27-19.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-09-fonte-nova-27-19.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-09-fonte-nova-27-19.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_09_FONTE_NOVA_27_19","description":"Detergente, água sanitária e hortifruti"},{"id":"inp_2026-04-10-sendas-104-23","scope":"gyros","title":"Nota fiscal Sendas 10/04 - bebidas e tomate","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_sendas","supplierName":"Sendas Distribuidora S/A","documentNumber":"","date":"2026-04-10","paymentMethod":"Cartão de crédito / Passaí","paymentStatus":"paid","totalAmount":104.23,"fileLabel":"2026-04-10-sendas-104-23.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-10-sendas-104-23.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-10-sendas-104-23.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_10_SENDAS_104_23","description":"Sendas 10/04 - bebidas e tomate"},{"id":"inp_2026-04-10-urca-63-36","scope":"gyros","title":"Nota fiscal Guaraná e Guaraviton","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_urca-de-bebidas-e-alimentos","supplierName":"URCA Com. de Bebidas e Alimentos","documentNumber":"","date":"2026-04-10","paymentMethod":"TEF / crédito à vista","paymentStatus":"paid","totalAmount":63.36,"fileLabel":"2026-04-10-urca-63-36.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-10-urca-63-36.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-10-urca-63-36.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_10_URCA_63_36","description":"Guaraná e Guaraviton"},{"id":"inp_2026-04-15-orcamento-786668-106-37","scope":"gyros","title":"Orçamento Orçamento 786668","inputType":"quote","sourceChannel":"physical_store","supplierId":"sup_casamarela","supplierName":"Casamarela","documentNumber":"","date":"2026-04-15","paymentMethod":"Não se aplica","paymentStatus":"pending","totalAmount":106.37,"fileLabel":"2026-04-15-orcamento-786668-106-37.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-15-orcamento-786668-106-37.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-15-orcamento-786668-106-37.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_15_ORCAMENTO_786668_106_37","description":"Orçamento 786668"},{"id":"inp_2026-04-19-poupaki-427-65","scope":"gyros","title":"Nota fiscal Poupaki 19/04 - carnes e laticínios","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_poupaki-atacadista","supplierName":"Poupaki Atacadista Ltda","documentNumber":"","date":"2026-04-19","paymentMethod":"TEF / carteira digital","paymentStatus":"paid","totalAmount":427.65,"fileLabel":"2026-04-19-poupaki-427-65.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-19-poupaki-427-65.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-19-poupaki-427-65.jpeg"],"fileUrl":"","notes":"Cupom relido com imagem mais nítida. A linha 12 foi confirmada como Toalha Umedecida Upa Bebe 140 unidades por R$ 6,99, e a linguiça toscana Aurora foi confirmada por R$ 92,50.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_19_POUPAKI_427_65","description":"Poupaki 19/04 - carnes e laticínios"},{"id":"inp_2026-04-21-irmaos-lopes-62-44","scope":"gyros","title":"Nota fiscal Irmãos Lopes - hortifruti e Coca-Cola 2L","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_supermercados-irmaos-lopes","supplierName":"Supermercados Irmãos Lopes Ltda","documentNumber":"","date":"2026-04-21","paymentMethod":"Carteira digital / PIX","paymentStatus":"paid","totalAmount":62.44,"fileLabel":"2026-04-21-irmaos-lopes-62-44.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-21-irmaos-lopes-62-44.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-21-irmaos-lopes-62-44.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_21_IRMAOS_LOPES_62_44","description":"Irmãos Lopes - hortifruti e Coca-Cola 2L"},{"id":"inp_2026-04-22-poupaki-245-00","scope":"gyros","title":"Nota fiscal Poupaki 22/04 - muçarela, cerveja e chá","inputType":"invoice","sourceChannel":"physical_store","supplierId":"sup_poupaki-atacadista","supplierName":"Poupaki Atacadista Ltda","documentNumber":"","date":"2026-04-22","paymentMethod":"TEF / carteira digital / PIX","paymentStatus":"paid","totalAmount":245,"fileLabel":"2026-04-22-poupaki-245-00.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-22-poupaki-245-00.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-22-poupaki-245-00.jpeg"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_22_POUPAKI_245_00","description":"Poupaki 22/04 - muçarela, cerveja e chá"},{"id":"inp_2026-04-22-interfolhas-papel-15-00","scope":"gyros","title":"Comprovante Interfolhas papel","inputType":"payment_receipt","sourceChannel":"physical_store","supplierId":"","supplierName":"Fornecedor não identificado (PagBank)","documentNumber":"","date":"2026-04-22","paymentMethod":"PIX","paymentStatus":"paid","totalAmount":15,"fileLabel":"2026-04-22-interfolhas-papel-15-00.jpeg","filePath":"docs/inputs/2026/2026-04/2026-04-22-interfolhas-papel-15-00.jpeg","filePaths":["docs/inputs/2026/2026-04/2026-04-22-interfolhas-papel-15-00.jpeg"],"fileUrl":"","notes":"Comprovante PagBank com identificação manual “Interfolhas papel”.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_22_INTERFOLHAS_PAPEL_15_00","description":"Interfolhas papel"},{"id":"inp_2026-04-15-pmg-9096638","scope":"gyros","title":"Pedido PMG Comércio de Frios e Laticínios nº 9096638","inputType":"order","sourceChannel":"other","supplierId":"sup_pmg","supplierName":"PMG Comércio de Frios e Laticínios","documentNumber":"9096638","date":"2026-04-15","paymentMethod":"Cartão de crédito","paymentStatus":"paid","totalAmount":1177.29,"fileLabel":"2026-04-15-pmg-9096638.pdf","filePath":"docs/inputs/2026/2026-04/2026-04-15-pmg-9096638.pdf","filePaths":["docs/inputs/2026/2026-04/2026-04-15-pmg-9096638.pdf"],"fileUrl":"","notes":"Pedido PMG com recompra de batata, maionese, bacon, cheddar e bebidas em abril.","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_04_15_PMG_9096638","description":"Compra PMG nº 9096638"},{"id":"inp_2026-03-14-mercado-livre-tv-stick-112-00","scope":"gyros","title":"Nota fiscal DUSK MOON VARIEDADES LTDA nº 5680460288","inputType":"invoice","sourceChannel":"online","supplierId":"sup_dusk-moon-variedades","supplierName":"DUSK MOON VARIEDADES LTDA","documentNumber":"5680460288","date":"2026-03-14","paymentMethod":"Mercado Livre","paymentStatus":"paid","totalAmount":112,"fileLabel":"2026-03-14-mercado-livre-tv-stick-112-00.pdf","filePath":"docs/inputs/2026/2026-03/2026-03-14-mercado-livre-tv-stick-112-00.pdf","filePaths":["docs/inputs/2026/2026-03/2026-03-14-mercado-livre-tv-stick-112-00.pdf"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_14_MERCADO_LIVRE_TV_STICK_112_00","description":"TV Stick Android"},{"id":"inp_2026-03-15-mercado-livre-suporte-celular-39-16","scope":"gyros","title":"Nota fiscal LUCCIOLAR HOME LTDA nº 5682666768","inputType":"invoice","sourceChannel":"online","supplierId":"sup_lucciolar-home","supplierName":"LUCCIOLAR HOME LTDA","documentNumber":"5682666768","date":"2026-03-15","paymentMethod":"Mercado Livre","paymentStatus":"paid","totalAmount":39.16,"fileLabel":"2026-03-15-mercado-livre-suporte-celular-39-16.pdf","filePath":"docs/inputs/2026/2026-03/2026-03-15-mercado-livre-suporte-celular-39-16.pdf","filePaths":["docs/inputs/2026/2026-03/2026-03-15-mercado-livre-suporte-celular-39-16.pdf"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_15_MERCADO_LIVRE_SUPORTE_CELULAR_39_16","description":"Suporte para celular ou tablet"},{"id":"inp_2026-03-15-mercado-livre-cartao-memoria-20-90","scope":"gyros","title":"Nota fiscal DESCOMPARAR LTDA nº 5682666803","inputType":"invoice","sourceChannel":"online","supplierId":"sup_descomparar","supplierName":"DESCOMPARAR LTDA","documentNumber":"5682666803","date":"2026-03-15","paymentMethod":"Mercado Livre","paymentStatus":"paid","totalAmount":20.9,"fileLabel":"2026-03-15-mercado-livre-cartao-memoria-20-90.pdf","filePath":"docs/inputs/2026/2026-03/2026-03-15-mercado-livre-cartao-memoria-20-90.pdf","filePaths":["docs/inputs/2026/2026-03/2026-03-15-mercado-livre-cartao-memoria-20-90.pdf"],"fileUrl":"","notes":"","evidenceType":"documented","evidenceSource":"Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026","code":"INP_2026_03_15_MERCADO_LIVRE_CARTAO_MEMORIA_20_90","description":"Cartão de memória 32GB"}],"expenseEntries":[]};
const STORAGE_KEY = 'gyros-cmv-pwa-v1';
const OFFICIAL_DB_HASH_KEY = 'gyros-cmv-official-hash-v1';
const OFFICIAL_DB_URL = './gyros-custos-cardapio.json';
const pageMeta = {
  dashboard: { title: 'Dashboard', subtitle: 'Visão geral do custo, do cardápio ativo e do rateio fixo.' },
  catalog: { title: 'Catálogo', subtitle: 'Itens finais do cardápio, combos e composição por camadas.' },
  ledger: { title: 'Lançamentos', subtitle: 'Compras e gastos organizados por data, período e evidência.' },
  resources: { title: 'Cadastros', subtitle: 'Ingredientes, preparos, embalagens, custos fixos e parâmetros.' }
};

const state = {
  page: 'catalog',
  operationView: 'gyros',
  resourceTab: 'ingredients',
  selectedProductId: null,
  selectedResourceId: null,
  selectedLedgerEntryId: null,
  selectedLedgerItemId: null,
  modal: null,
  confirmDialog: null,
  deferredPrompt: null,
  mobileNavOpen: false,
  lastSavedAt: null,
  filterText: '',
  filterCategory: 'all',
  ledgerViewMode: 'items',
  ledgerLayoutMode: 'split',
  ledgerPreset: 'all',
  ledgerStartDate: '',
  ledgerEndDate: '',
  ledgerType: 'all',
  ledgerSupplierId: 'all',
  ledgerPaymentStatus: 'all',
  ledgerItemSearch: '',
  ledgerItemResourceType: 'all',
  catalogDetailTab: 'resumo'
};

const OPERATIONS = [
  { id: 'gyros', label: 'Gyros' },
  { id: 'greguinho', label: 'Greguinho' },
  { id: 'consolidated', label: 'Consolidado' }
];

function greguinhoEnabled() {
  return db?.settings?.greguinhoEnabled !== false;
}

function availableOperations() {
  return greguinhoEnabled() ? OPERATIONS : OPERATIONS.filter(item => item.id === 'gyros');
}

function patchRecord(list, id, changes) {
  const item = (list || []).find(entry => entry.id === id);
  if (item) Object.assign(item, changes);
  return item;
}

function applyPurchaseUpdates(target) {
  if (!target) return target;

  patchRecord(target.ingredients, 'ing_batata', {
    purchaseQty: 14000,
    purchaseCost: 99.99,
    notes: 'Caixa com 7 pacotes de 2kg'
  });
  patchRecord(target.ingredients, 'ing_refri_350', {
    purchaseQty: 72,
    purchaseCost: 250.14,
    notes: 'Media de Coca, Coca Zero, Fanta e Guarana em lata 350ml'
  });
  patchRecord(target.ingredients, 'ing_garrafa_450', {
    purchaseQty: 12,
    purchaseCost: 51.60,
    notes: 'Ice Tea 450ml nos sabores limao e pessego'
  });
  patchRecord(target.ingredients, 'ing_maionese_ind', {
    purchaseQty: 3000,
    purchaseCost: 24.00,
    notes: 'Balde 3kg da compra mais recente'
  });
  patchRecord(target.ingredients, 'ing_catupiry', {
    purchaseQty: 1500,
    purchaseCost: 60.32,
    notes: 'Bisnaga Catupiry 1,5kg'
  });
  patchRecord(target.ingredients, 'ing_bbq', {
    purchaseQty: 3500,
    purchaseCost: 27.80,
    notes: 'Galão 3,5kg da compra mais recente'
  });
  patchRecord(target.ingredients, 'ing_saches_mix', {
    purchaseQty: 866,
    purchaseCost: 104.51,
    notes: 'Media comprada de saches de ketchup, mostarda e pimenta'
  });
  patchRecord(target.ingredients, 'ing_oleo_vinagre', {
    name: 'Azeite de oliva',
    purchaseQty: 2000,
    purchaseCost: 130.00,
    notes: 'Galao 2L de azeite de oliva extra virgem'
  });
  patchRecord(target.ingredients, 'ing_limao', {
    name: 'Limao (suco)',
    notes: 'Base em ml para receitas e molhos'
  });
  patchRecord(target.ingredients, 'ing_tempero', {
    name: 'Sal e pimenta',
    notes: 'Rateio simples para temperos secos'
  });
  patchRecord(target.ingredients, 'ing_salada', {
    name: 'Salada antiga / folhas / tomate',
    notes: 'Mantida so para historico. Os pratos agora usam vinagrete.'
  });

  const vinagrete = patchRecord(target.recipes, 'rec_vinagrete', {
    yieldQty: 600,
    yieldUnit: 'ml',
    storage: 'Descanso refrigerado',
    notes: 'Tomate, cebola, limao, cheiro-verde, azeite, sal e pimenta'
  });
  if (vinagrete) {
    vinagrete.components = [
      { refType: 'ingredient', refId: 'ing_tomate', qty: 300 },
      { refType: 'ingredient', refId: 'ing_cebola', qty: 150 },
      { refType: 'ingredient', refId: 'ing_cheiro_verde', qty: 50 },
      { refType: 'ingredient', refId: 'ing_oleo_vinagre', qty: 60 },
      { refType: 'ingredient', refId: 'ing_limao', qty: 60 },
      { refType: 'ingredient', refId: 'ing_tempero', qty: 6 }
    ];
  }

  ['rec_prato_alpha', 'rec_prato_beta', 'rec_prato_gamma'].forEach(recipeId => {
    const recipe = (target.recipes || []).find(item => item.id === recipeId);
    if (!recipe) return;
    recipe.components = (recipe.components || []).map(component => {
      if (component.refType === 'ingredient' && component.refId === 'ing_salada') {
        return { refType: 'recipe', refId: 'rec_vinagrete', qty: 80 };
      }
      return component;
    });
    if (!String(recipe.notes || '').includes('Salada ajustada para usar o vinagrete da casa.')) {
      recipe.notes = `${recipe.notes || ''}${recipe.notes ? ' ' : ''}Salada ajustada para usar o vinagrete da casa.`.trim();
    }
  });

  return target;
}

applyPurchaseUpdates(SEED_DATA);

function applyOperationalPortionUpdates(target) {
  if (!target) return target;
  [
    ['rec_grat_muc_p', 'ing_mucarela'],
    ['rec_grat_cat_p', 'ing_catupiry'],
    ['rec_grat_4q_p', 'ing_4queijos'],
    ['rec_grat_cheddar_p', 'ing_cheddar']
  ].forEach(([recipeId, ingredientId]) => {
    const recipe = patchRecord(target.recipes, recipeId, {
      yieldQty: 1,
      yieldUnit: 'un'
    });
    if (!recipe) return;
    recipe.components = [{ refType: 'ingredient', refId: ingredientId, qty: 60 }];
    const note = 'Cobertura operacional pequena ajustada para 60g de queijo.';
    if (!String(recipe.notes || '').includes(note)) {
      recipe.notes = `${recipe.notes || ''}${recipe.notes ? ' ' : ''}${note}`.trim();
    }
  });
  return target;
}

applyOperationalPortionUpdates(SEED_DATA);

function applyPricingRules(target) {
  if (!target) return target;
  target.settings = target.settings || {};
  if (!Number.isFinite(num(target.settings.defaultMarkupPct)) || num(target.settings.defaultMarkupPct) <= 0) {
    target.settings.defaultMarkupPct = 200;
  }
  (target.products || []).forEach(product => {
    if (!product.pricingMode) {
      product.pricingMode = 'auto';
    }
    if (!Array.isArray(product.addons)) {
      product.addons = [];
    }
    if (!Array.isArray(product.components)) {
      product.components = [];
    }
    product.components.forEach(component => {
      component.pricingMode = componentPricingMode(component.pricingMode);
    });
    product.addons.forEach(addon => {
      if (!addon.id) addon.id = uid('add');
      if (!Array.isArray(addon.components)) addon.components = [];
      if (!addon.chargeMode) addon.chargeMode = 'extra';
      if (!Number.isFinite(num(addon.salePriceDelta))) addon.salePriceDelta = 0;
    });
  });
  return target;
}

applyPricingRules(SEED_DATA);

function legacyScopeForRecord(type, record) {
  if (record?.scope) return record.scope;
  if (type === 'categories') return 'shared';
  if (type === 'fixedCosts') return 'shared';
  if (type === 'products') return record?.categoryId === 'cat_bebidas' ? 'shared' : 'gyros';
  if (type === 'ingredients') {
    return ['ing_refri_350', 'ing_garrafa_450', 'ing_suco_natural'].includes(record?.id) ? 'shared' : 'gyros';
  }
  return 'gyros';
}

function applyMultiOperationRules(target) {
  if (!target) return target;
  target.settings = target.settings || {};
  if (!target.settings.sharedFixedSplitMode) target.settings.sharedFixedSplitMode = 'equal';
  if (!target.settings.sharedFixedSplitManual) target.settings.sharedFixedSplitManual = { gyros: 50, greguinho: 50 };
  if (!target.settings.operationMonthlyUnits) {
    target.settings.operationMonthlyUnits = {
      gyros: num(target.settings.customMonthlyUnits) || 1200,
      greguinho: 1200
    };
  }
  if (typeof target.settings.greguinhoEnabled !== 'boolean') target.settings.greguinhoEnabled = true;

  ['categories', 'ingredients', 'recipes', 'packaging', 'products', 'fixedCosts'].forEach(type => {
    (target[type] || []).forEach(record => {
      if (!record.scope) record.scope = legacyScopeForRecord(type, record);
    });
  });
  return target;
}

applyMultiOperationRules(SEED_DATA);

let db = loadDb();

function deepClone(x) { return JSON.parse(JSON.stringify(x)); }
function qs(s, root=document) { return root.querySelector(s); }
function qsa(s, root=document) { return [...root.querySelectorAll(s)]; }
function byId(type, id) { return (db[type] || []).find(x => x.id === id) || null; }
function uid(prefix) { return `${prefix}_${Math.random().toString(36).slice(2,8)}`; }
function brl(v) { return (Number(v)||0).toLocaleString('pt-BR', {style:'currency', currency:'BRL'}); }
function num(v) { return Number(v || 0); }
function safe(v) { return Number.isFinite(v) ? v : 0; }
function pct(v) { return `${safe(v).toFixed(1)}%`; }
function escapeHtml(s='') { return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function decimal(v) {
  return Number(v || 0).toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}

function normalizeDb(target) {
  return ensureCanonicalFields(normalizeFinancialData(normalizeSupplierData(applyMultiOperationRules(applyPricingRules(applyOperationalPortionUpdates(applyPurchaseUpdates(target)))))));
}

function procurementEvidenceType(record = {}) {
  const text = `${record.sourceReference || ''} ${record.notes || ''}`.toLowerCase();
  if (record.sourceType) return record.sourceType;
  if (record.evidenceType) return record.evidenceType;
  if (text.includes('manual')) return 'manual';
  if (text.includes('referência web') || text.includes('referencia web') || text.includes('estimativa') || text.includes('pesquisa') || text.includes('revisar')) return 'estimated';
  return 'documented';
}

function procurementEvidenceLabel(type) {
  if (type === 'estimated') return 'Pesquisado / estimado';
  if (type === 'manual') return 'Manual / revisar';
  if (type === 'review') return 'Revisão';
  return 'Comprovado';
}

function procurementEvidenceClass(type) {
  if (type === 'estimated') return 'evidence-estimated';
  if (type === 'manual') return 'evidence-review';
  if (type === 'review') return 'evidence-review';
  return 'evidence-documented';
}

function normalizePaymentMethods(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value || '').split(',').map(item => item.trim()).filter(Boolean);
}

function slugify(value='') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function canonicalCode(prefix, seed='') {
  const normalized = slugify(seed);
  return `${prefix}_${normalized || 'sem_codigo'}`.toUpperCase();
}

const PRODUCT_SKU_OVERRIDES = {
  prd_alpha: 'GYR-LAN-ALPHA',
  prd_beta: 'GYR-LAN-BETA',
  prd_gamma: 'GYR-LAN-GAMMA',
  prd_vegetariano: 'GYR-LAN-VEG',
  prd_bat_p: 'GYR-BAT-FRT-M200',
  prd_bat_g: 'GYR-BAT-FRT-G400',
  prd_bat_grat_p: 'GYR-BAT-GRT-M100',
  prd_bat_grat_g: 'GYR-BAT-GRT-G220',
  prd_carne_grat: 'GYR-GRT-CAR-G220',
  prd_prato_alpha: 'GYR-ALM-ALPHA',
  prd_prato_beta: 'GYR-ALM-BETA',
  prd_prato_gamma: 'GYR-ALM-GAMMA',
  prd_churros: 'GYR-SOB-CHU-6UN',
  prd_molho_extra: 'GYR-MOL-MAIGRL-60',
  prd_maionese_verde_extra: 'GYR-MOL-MAIVRD-60',
  prd_maionese_chimichurri_extra: 'GYR-MOL-MAICHM-60',
  prd_vinagrete_extra: 'GYR-MOL-VIN-60',
  prd_barbecue_extra: 'GYR-MOL-BBQ-60',
  prd_sache5: 'GYR-EXT-SACH-5',
  prd_coca: 'GYR-BEB-COCA-350',
  prd_coca_zero: 'GYR-BEB-COCAZ-350',
  prd_fanta: 'GYR-BEB-FANTA-350',
  prd_guarana_350: 'GYR-BEB-GUAR-350',
  prd_garrafa_450: 'GYR-BEB-CHA-450',
  prd_ice_tea_limao_450: 'GYR-BEB-ITEA-LIM-450',
  prd_ice_tea_pessego_450: 'GYR-BEB-ITEA-PES-450',
  prd_suco_natural: 'GYR-BEB-SUC-NAT',
  prd_agua_510: 'GYR-BEB-AGUA-510',
  prd_agua_gas_510: 'GYR-BEB-AGUAGAS-510',
  prd_bud_330: 'GYR-BEB-BUD-330',
  prd_heineken_330: 'GYR-BEB-HEI-330',
  prd_coca_2l: 'GYR-BEB-COCA-2000',
  prd_coca_zero_2l: 'GYR-BEB-COCAZ-2000',
  prd_h2o_500: 'GYR-BEB-H2O-500',
  prd_limoneto_500: 'GYR-BEB-LIMO-500',
  prd_schweppes_350: 'GYR-BEB-SCHW-350',
  prd_sprite_350: 'GYR-BEB-SPR-350',
  prd_delvalle_uva_290: 'GYR-BEB-DVUVA-290',
  prd_combo1_alpha: 'GYR-CMB1-ALPHA',
  prd_combo1_beta: 'GYR-CMB1-BETA',
  prd_combo1_gamma: 'GYR-CMB1-GAMMA',
  prd_combo2_alpha: 'GYR-CMB2-ALPHA',
  prd_combo2_beta: 'GYR-CMB2-BETA',
  prd_combo2_gamma: 'GYR-CMB2-GAMMA',
  prd_combo3_alpha: 'GYR-CMB3-ALPHA',
  prd_combo3_beta: 'GYR-CMB3-BETA',
  prd_combo3_gamma: 'GYR-CMB3-GAMMA',
  prd_combo_almoco_alpha: 'GYR-CALM-ALPHA',
  prd_combo_almoco_beta: 'GYR-CALM-BETA',
  prd_combo_almoco_gamma: 'GYR-CALM-GAMMA',
  prd_combo_familia: 'GYR-FAM-LAN-3L-2L',
  prd_almoco_familia: 'GYR-FAM-ALM-3P-2L',
  prd_base_lanche_medio: 'GYR-BAS-LAN-MED',
  prd_base_prato_medio: 'GYR-BAS-ALM-MED'
};

const CATEGORY_VIEW_META = {
  cat_gyros: { sortOrder: 1, accent: 'Assinaturas' },
  cat_combos: { sortOrder: 2, accent: 'Combos' },
  cat_batatas: { sortOrder: 3, accent: 'Batatas Fritas' },
  cat_gratinados: { sortOrder: 4, accent: 'Gratinados' },
  cat_almoco: { sortOrder: 5, accent: 'Executivos' },
  cat_molhos: { sortOrder: 6, accent: 'Molhos e Extras' },
  cat_sobremesas: { sortOrder: 7, accent: 'Sobremesas' },
  cat_bebidas: { sortOrder: 8, accent: 'Bebidas' }
};

const SUBGROUP_VIEW_META = {
  sg_gyros_assinaturas: { categoryId: 'cat_gyros', name: 'Gyros da Casa', sortOrder: 1 },
  sg_combos_individuais: { categoryId: 'cat_combos', name: 'Combos Individuais', sortOrder: 1 },
  sg_combos_familia: { categoryId: 'cat_combos', name: 'Combos Família', sortOrder: 2 },
  sg_bat_fritas: { categoryId: 'cat_batatas', name: 'Batatas Fritas', sortOrder: 1 },
  sg_grat_prot: { categoryId: 'cat_gratinados', name: 'Proteínas Gratinadas', sortOrder: 1 },
  sg_grat_bat: { categoryId: 'cat_gratinados', name: 'Batata Gratinada', sortOrder: 2 },
  sg_exec: { categoryId: 'cat_almoco', name: 'Executivos', sortOrder: 1 },
  sg_molhos: { categoryId: 'cat_molhos', name: 'Molhos e Vinagrete à Parte', sortOrder: 1 },
  sg_sobremesas: { categoryId: 'cat_sobremesas', name: 'Doces', sortOrder: 1 },
  sg_beb_aguas: { categoryId: 'cat_bebidas', name: 'Águas', sortOrder: 1 },
  sg_beb_refri: { categoryId: 'cat_bebidas', name: 'Refrigerantes 350ml', sortOrder: 2 },
  sg_beb_outros: { categoryId: 'cat_bebidas', name: 'Outras Bebidas', sortOrder: 3 }
};

const PRODUCT_VIEW_META = {
  prd_alpha: { subgroupId: 'sg_gyros_assinaturas', sortOrder: 1, catalogItemId: 'i_gyro_alpha' },
  prd_beta: { subgroupId: 'sg_gyros_assinaturas', sortOrder: 2, catalogItemId: 'i_gyro_beta' },
  prd_gamma: { subgroupId: 'sg_gyros_assinaturas', sortOrder: 3, catalogItemId: 'i_gyro_gamma' },
  prd_vegetariano: { subgroupId: 'sg_gyros_assinaturas', sortOrder: 4, catalogItemId: 'i_gyro_veg' },
  prd_combo1: { subgroupId: 'sg_combos_individuais', sortOrder: 1, catalogItemId: 'i_combo_essencial' },
  prd_combo2: { subgroupId: 'sg_combos_individuais', sortOrder: 2, catalogItemId: 'i_combo_classico' },
  prd_combo3: { subgroupId: 'sg_combos_individuais', sortOrder: 3, catalogItemId: 'i_combo_completo' },
  prd_combo_familia: { subgroupId: 'sg_combos_familia', sortOrder: 4, catalogItemId: 'i_combo_fam_gyros' },
  prd_bat_p: { subgroupId: 'sg_bat_fritas', sortOrder: 1, catalogItemId: 'i_bat_media' },
  prd_bat_g: { subgroupId: 'sg_bat_fritas', sortOrder: 2, catalogItemId: 'i_bat_grande' },
  prd_prot_grat_m: { subgroupId: 'sg_grat_prot', sortOrder: 1, catalogItemId: 'i_prot_grat_media' },
  prd_carne_grat: { subgroupId: 'sg_grat_prot', sortOrder: 2, catalogItemId: 'i_prot_grat_grande' },
  prd_bat_grat_p: { subgroupId: 'sg_grat_bat', sortOrder: 3, catalogItemId: 'i_bat_grat_media' },
  prd_bat_grat_g: { subgroupId: 'sg_grat_bat', sortOrder: 4, catalogItemId: 'i_bat_grat_grande' },
  prd_prato_alpha: { subgroupId: 'sg_exec', sortOrder: 1, catalogItemId: 'i_exec_fraldinha' },
  prd_prato_beta: { subgroupId: 'sg_exec', sortOrder: 2, catalogItemId: 'i_exec_frango' },
  prd_prato_gamma: { subgroupId: 'sg_exec', sortOrder: 3, catalogItemId: 'i_exec_linguica' },
  prd_prato_veg: { subgroupId: 'sg_exec', sortOrder: 4, catalogItemId: 'i_exec_veg' },
  prd_molho_extra: { subgroupId: 'sg_molhos', sortOrder: 1, catalogItemId: 'i_molho_maio_casa' },
  prd_maionese_verde_extra: { subgroupId: 'sg_molhos', sortOrder: 2, catalogItemId: 'i_molho_maio_verde' },
  prd_maionese_chimichurri_extra: { subgroupId: 'sg_molhos', sortOrder: 3, catalogItemId: 'i_molho_chimi' },
  prd_barbecue_extra: { subgroupId: 'sg_molhos', sortOrder: 4, catalogItemId: 'i_molho_bbq' },
  prd_vinagrete_extra: { subgroupId: 'sg_molhos', sortOrder: 5, catalogItemId: 'i_vina_casa' },
  prd_sache5: { subgroupId: 'sg_molhos', sortOrder: 6, catalogItemId: 'i_pacote_saches' },
  prd_churros: { subgroupId: 'sg_sobremesas', sortOrder: 1, catalogItemId: 'i_sob_churros' },
  prd_agua_gas_510: { subgroupId: 'sg_beb_aguas', sortOrder: 1, catalogItemId: 'i_beb_agua_gas' },
  prd_agua_510: { subgroupId: 'sg_beb_aguas', sortOrder: 2, catalogItemId: 'i_beb_agua_sem' },
  prd_coca: { subgroupId: 'sg_beb_refri', sortOrder: 1, catalogItemId: 'i_beb_coca_350' },
  prd_coca_zero: { subgroupId: 'sg_beb_refri', sortOrder: 2, catalogItemId: 'i_beb_cz_350' },
  prd_guarana_350: { subgroupId: 'sg_beb_refri', sortOrder: 3, catalogItemId: 'i_beb_gua_350' },
  prd_fanta: { subgroupId: 'sg_beb_refri', sortOrder: 4, catalogItemId: 'i_beb_fanta_350' },
  prd_schweppes_350: { subgroupId: 'sg_beb_refri', sortOrder: 5, catalogItemId: 'i_beb_schw_350' },
  prd_sprite_350: { subgroupId: 'sg_beb_refri', sortOrder: 6, catalogItemId: 'i_beb_sprite_350' },
  prd_ice_tea_limao_450: { subgroupId: 'sg_beb_outros', sortOrder: 1, catalogItemId: 'i_beb_ice_limao' },
  prd_ice_tea_pessego_450: { subgroupId: 'sg_beb_outros', sortOrder: 2, catalogItemId: 'i_beb_ice_pessego' },
  prd_bud_330: { subgroupId: 'sg_beb_outros', sortOrder: 3, catalogItemId: 'i_beb_bud' },
  prd_heineken_330: { subgroupId: 'sg_beb_outros', sortOrder: 4, catalogItemId: 'i_beb_hei' },
  prd_h2o_500: { subgroupId: 'sg_beb_outros', sortOrder: 5, catalogItemId: 'i_beb_h2o' },
  prd_limoneto_500: { subgroupId: 'sg_beb_outros', sortOrder: 6, catalogItemId: 'i_beb_h2o_zero' },
  prd_delvalle_uva_290: { subgroupId: 'sg_beb_outros', sortOrder: 7, catalogItemId: 'i_beb_suco_uva' },
  prd_coca_2l: { subgroupId: 'sg_beb_outros', sortOrder: 8, catalogItemId: 'i_beb_coca_2l' }
};

const CATEGORY_IMAGE_OVERRIDES = {
  cat_gyros: 'assets/cardapio/categories/gyros-da-casa.png',
  cat_combos: 'assets/cardapio/categories/capa-categoria-combos.png',
  cat_batatas: 'assets/cardapio/categories/batatas-fritas.png',
  cat_gratinados: 'assets/cardapio/categories/gratinados.png',
  cat_almoco: 'assets/cardapio/categories/almoco-executivo.png',
  cat_molhos: 'assets/cardapio/categories/molhos-e-vinagrete-a-parte.png',
  cat_sobremesas: 'assets/cardapio/categories/sobremesas.png',
  cat_bebidas: 'assets/cardapio/categories/bebidas.png'
};

const PRODUCT_IMAGE_OVERRIDES = {
  prd_alpha: 'assets/cardapio/products/gyr-lan-alpha.png',
  prd_beta: 'assets/cardapio/products/gyr-lan-beta.png',
  prd_gamma: 'assets/cardapio/products/gyr-lan-gamma.png',
  prd_vegetariano: 'assets/cardapio/products/gyr-lan-veg.png',
  prd_combo1: 'assets/cardapio/products/gyr-cmb3-alpha.png',
  prd_combo2: 'assets/cardapio/products/gyr-cmb3-beta.png',
  prd_combo3: 'assets/cardapio/products/gyr-cmb3-gamma.png',
  prd_bat_p: 'assets/cardapio/products/gyr-bat-frt-m200.png',
  prd_bat_g: 'assets/cardapio/products/gyr-bat-frt-g400.png',
  prd_prot_grat_m: 'assets/cardapio/products/gyr-grt-prot-m.png',
  prd_carne_grat: 'assets/cardapio/products/gyr-grt-prot-g.png',
  prd_bat_grat_p: 'assets/cardapio/products/gyr-bat-grt-m100.png',
  prd_bat_grat_g: 'assets/cardapio/products/gyr-bat-grt-g220.png',
  prd_prato_alpha: 'assets/cardapio/products/gyr-alm-alpha.png',
  prd_prato_beta: 'assets/cardapio/products/gyr-alm-beta.png',
  prd_prato_gamma: 'assets/cardapio/products/gyr-alm-gamma.png',
  prd_prato_veg: 'assets/cardapio/products/gyr-alm-veg.png',
  prd_molho_extra: 'assets/cardapio/products/gyr-mol-maigrl-60.png',
  prd_maionese_verde_extra: 'assets/cardapio/products/gyr-mol-maivrd-60.png',
  prd_maionese_chimichurri_extra: 'assets/cardapio/products/gyr-mol-maichm-60.png',
  prd_barbecue_extra: 'assets/cardapio/products/gyr-mol-bbq-60.png',
  prd_vinagrete_extra: 'assets/cardapio/products/gyr-mol-vin-60.png',
  prd_churros: 'assets/cardapio/products/gyr-sob-chu-6un.png',
  prd_agua_gas_510: 'assets/cardapio/products/gyr-beb-aguagas-510.webp',
  prd_agua_510: 'assets/cardapio/products/gyr-beb-agua-510.webp',
  prd_coca: 'assets/cardapio/products/gyr-beb-coca-350.jpg',
  prd_coca_zero: 'assets/cardapio/products/gyr-beb-cocaz-350.webp',
  prd_guarana_350: 'assets/cardapio/products/gyr-beb-guar-350.jpg',
  prd_fanta: 'assets/cardapio/products/gyr-beb-fanta-350.webp',
  prd_schweppes_350: 'assets/cardapio/products/gyr-beb-schw-350.webp',
  prd_sprite_350: 'assets/cardapio/products/gyr-beb-spr-350.png',
  prd_ice_tea_limao_450: 'assets/cardapio/products/gyr-beb-itea-lim-450.jpg',
  prd_ice_tea_pessego_450: 'assets/cardapio/products/gyr-beb-itea-pes-450.jpg',
  prd_bud_330: 'assets/cardapio/products/gyr-beb-bud-330.jpg',
  prd_heineken_330: 'assets/cardapio/products/gyr-beb-hei-330.webp',
  prd_h2o_500: 'assets/cardapio/products/gyr-beb-h2o-500.jpg',
  prd_limoneto_500: 'assets/cardapio/products/gyr-beb-limo-500.webp',
  prd_delvalle_uva_290: 'assets/cardapio/products/gyr-beb-dvuva-290.webp',
  prd_coca_2l: 'assets/cardapio/products/gyr-beb-coca-2000.webp'
};

const RESOURCE_IMAGE_OVERRIDES = {
  'ingredient:ing_fraldinha': 'assets/cardapio/products/gyr-add-fraldinha.png',
  'ingredient:ing_frango': 'assets/cardapio/products/gyr-add-frango.png',
  'ingredient:ing_linguica': 'assets/cardapio/products/gyr-add-linguica.png',
  'recipe:rec_berinjela_antepasto': 'assets/cardapio/products/gyr-add-berinjela.png',
  'ingredient:ing_bacon_cubos': 'assets/cardapio/products/gyr-add-bacon.png',
  'ingredient:ing_mucarela': 'assets/cardapio/products/gyr-add-mucarela-gratinada.png',
  'recipe:rec_grat_muc': 'assets/cardapio/products/gyr-add-mucarela-gratinada.png',
  'recipe:rec_grat_muc_p': 'assets/cardapio/products/gyr-add-mucarela-gratinada.png',
  'recipe:rec_grat_muc_g': 'assets/cardapio/products/gyr-add-mucarela-gratinada.png',
  'ingredient:ing_catupiry': 'assets/cardapio/products/gyr-add-catupiry-original.png',
  'recipe:rec_grat_cat': 'assets/cardapio/products/gyr-add-catupiry-original.png',
  'recipe:rec_grat_cat_p': 'assets/cardapio/products/gyr-add-catupiry-original.png',
  'recipe:rec_grat_cat_g': 'assets/cardapio/products/gyr-add-catupiry-original.png',
  'ingredient:ing_4queijos': 'assets/cardapio/products/gyr-add-catupiry-4q.png',
  'recipe:rec_grat_4q': 'assets/cardapio/products/gyr-add-catupiry-4q.png',
  'recipe:rec_grat_4q_p': 'assets/cardapio/products/gyr-add-catupiry-4q.png',
  'recipe:rec_grat_4q_g': 'assets/cardapio/products/gyr-add-catupiry-4q.png',
  'ingredient:ing_cheddar': 'assets/cardapio/products/gyr-add-cheddar-polenghi.png',
  'recipe:rec_grat_cheddar': 'assets/cardapio/products/gyr-add-cheddar-polenghi.png',
  'recipe:rec_grat_cheddar_p': 'assets/cardapio/products/gyr-add-cheddar-polenghi.png',
  'recipe:rec_grat_cheddar_g': 'assets/cardapio/products/gyr-add-cheddar-polenghi.png',
  'ingredient:ing_saches_mix': 'assets/cardapio/products/gyr-mol-saches-5un.png',
  'product:prd_sache5': 'assets/cardapio/products/gyr-mol-saches-5un.png'
};

const ADDON_IMAGE_OVERRIDES = {
  bacon: 'assets/cardapio/products/gyr-add-bacon.png',
  mucarela: 'assets/cardapio/products/gyr-add-mucarela-gratinada.png',
  muçarela: 'assets/cardapio/products/gyr-add-mucarela-gratinada.png',
  catupiry_4q: 'assets/cardapio/products/gyr-add-catupiry-4q.png',
  '4_queijos': 'assets/cardapio/products/gyr-add-catupiry-4q.png',
  catupiry: 'assets/cardapio/products/gyr-add-catupiry-original.png',
  cheddar: 'assets/cardapio/products/gyr-add-cheddar-polenghi.png',
  fraldinha: 'assets/cardapio/products/gyr-add-fraldinha.png',
  frango: 'assets/cardapio/products/gyr-add-frango.png',
  linguica: 'assets/cardapio/products/gyr-add-linguica.png',
  linguiça: 'assets/cardapio/products/gyr-add-linguica.png',
  berinjela: 'assets/cardapio/products/gyr-add-berinjela.png',
  saches: 'assets/cardapio/products/gyr-mol-saches-5un.png',
  sachês: 'assets/cardapio/products/gyr-mol-saches-5un.png'
};

function isLegacySku(code = '', kind = 'default') {
  if (!code) return true;
  if (kind === 'product') return /^PRD_/.test(code);
  if (kind === 'addon') return /^ADD_/.test(code);
  return false;
}

function productSku(product = {}) {
  return PRODUCT_SKU_OVERRIDES[product.id] || canonicalCode('PRD', product.id || product.name);
}

function addonContextCode(product = {}) {
  if (product.categoryId === 'cat_almoco' || product.categoryId === 'cat_gratinados') return 'ALM';
  if (product.categoryId === 'cat_batatas') return 'BAT';
  return 'LAN';
}

function addonToken(addon = {}) {
  const source = `${addon.id || ''} ${addon.name || ''} ${addon.group || ''}`;
  const normalized = slugify(source);
  const tokenMap = [
    ['antepasto_de_berinjela', 'BERI'],
    ['linguica_toscana', 'TOSC'],
    ['frango', 'FRANGO'],
    ['fraldinha', 'FRALD'],
    ['bacon', 'BACON'],
    ['queijo_mucarela', 'MUC'],
    ['catupiry_4_queijos', 'C4Q'],
    ['catupiry_original', 'CAT'],
    ['cheddar', 'CHED'],
    ['maionese_da_casa', 'MAICSA'],
    ['maionese_verde', 'MAIVRD'],
    ['maionese_de_chimichurri', 'MAICHM'],
    ['barbecue', 'BBQ'],
    ['coca_cola_zero_2l', 'COCAZ2L'],
    ['coca_cola_zero_350ml', 'COCAZ350'],
    ['coca_cola_2l', 'COCA2L'],
    ['coca_cola_350ml', 'COCA350'],
    ['guarana_antarctica_350ml', 'GUAR350'],
    ['cha_ice_tea_leao_limao_450ml', 'ITEAL450'],
    ['cha_ice_tea_leao_pessego_450ml', 'ITEAP450'],
    ['lemon_pepper', 'LPEP'],
    ['paprica', 'PAPR'],
    ['sal', 'SAL']
  ];
  const matched = tokenMap.find(([needle]) => normalized.includes(needle));
  if (matched) return matched[1];
  return canonicalCode('ADD', addon.id || addon.name).replace(/^ADD_/, '').slice(0, 18);
}

function addonSku(product = {}, addon = {}) {
  const context = addonContextCode(product);
  const group = String(addon.group || '').toLowerCase();
  const token = addonToken(addon);
  if (group.includes('molho')) return `GYR-MOL-${context}-${token}`;
  if (group.includes('bebida')) return `GYR-BEB-${context}-${token}`;
  if (group.includes('tempero')) return `GYR-TMP-${context}-${token}`;
  if (group.includes('turbine') || token === 'BERI' || token === 'TOSC' || token === 'FRANGO' || token === 'FRALD') return `GYR-PROT-${context}-${token}`;
  return `GYR-ADD-${context}-${token}`;
}

function ensureCanonicalFields(target) {
  if (!target) return target;

  (target.categories || []).forEach(item => {
    item.code = item.code || canonicalCode('CAT', item.id || item.name);
  });

  (target.ingredients || []).forEach(item => {
    item.code = item.code || canonicalCode('ING', item.id || item.name);
    item.description = item.description || item.notes || '';
    item.erpUnit = item.erpUnit || String(item.baseUnit || 'UN').toUpperCase();
  });

  (target.packaging || []).forEach(item => {
    item.code = item.code || canonicalCode('PKG', item.id || item.name);
    item.description = item.description || item.notes || '';
    item.erpUnit = item.erpUnit || 'UN';
  });

  (target.recipes || []).forEach(item => {
    item.code = item.code || canonicalCode('REC', item.id || item.name);
    item.description = item.description || item.notes || '';
  });

  (target.products || []).forEach(item => {
    if (isLegacySku(item.code, 'product')) item.code = productSku(item);
    item.description = item.description || item.notes || '';
    item.erpUnit = item.erpUnit || 'UN';
    item.productCondition = item.productCondition || 'new';
    item.erpProductType = item.erpProductType || (item.type === 'drink' ? 'component' : 'custom');
    item.salesChannels = Array.isArray(item.salesChannels) && item.salesChannels.length ? item.salesChannels : ['default', 'delivery', 'ifood'];
    item.addons = Array.isArray(item.addons) ? item.addons : [];
    item.addons.forEach(addon => {
      if (isLegacySku(addon.code, 'addon')) addon.code = addonSku(item, addon);
      addon.description = addon.description || addon.notes || '';
      addon.erpUnit = addon.erpUnit || 'UN';
      addon.salePriceMode = addon.salePriceMode || 'auto';
      addon.groupType = addon.groupType || (addon.chargeMode === 'included' ? 'included' : 'addon');
      addon.priceCalculation = addon.priceCalculation || (addon.chargeMode === 'included' ? 'included' : 'sum');
      if (typeof addon.active === 'undefined') addon.active = true;
    });
  });

  (target.suppliers || []).forEach(item => {
    item.code = item.code || canonicalCode('SUP', item.id || item.name);
  });

  (target.fixedCosts || []).forEach(item => {
    item.code = item.code || canonicalCode('FIX', item.id || item.name);
  });

  (target.inputs || []).forEach(item => {
    item.code = item.code || canonicalCode('INP', item.id || item.title);
    item.description = item.description || item.notes || '';
  });

  (target.purchaseOrders || []).forEach(item => {
    item.code = item.code || canonicalCode('PO', item.id || item.invoiceNumber || item.date);
  });

  (target.purchaseItems || []).forEach(item => {
    item.code = item.code || canonicalCode('POI', item.id || item.description || item.resourceId);
  });

  (target.expenseEntries || []).forEach(item => {
    item.code = item.code || canonicalCode('EXP', item.id || item.label || item.date);
  });

  return target;
}

function isNamedDocumentedSupplier(name='') {
  const normalized = slugify(name);
  return ['zona_cerealista', 'samppael', 'samppel', 'bom_clima', 'shopee', 'pmg', 'armazem_sao_vito', 'sao_vito'].includes(normalized);
}

function supplierModeLabel(value='single') {
  return value === 'multiple' ? 'Múltiplos fornecedores' : 'Fornecedor único';
}

function normalizeSupplierData(target) {
  if (!target) return target;
  target.suppliers = Array.isArray(target.suppliers) ? target.suppliers : [];
  target.purchaseOrders = Array.isArray(target.purchaseOrders) ? target.purchaseOrders : [];
  target.purchaseItems = Array.isArray(target.purchaseItems) ? target.purchaseItems : [];
  target.inputs = Array.isArray(target.inputs) ? target.inputs : [];

  ['ingredients', 'packaging'].forEach(type => {
    (target[type] || []).forEach(record => {
      if (!record.sourceType) record.sourceType = procurementEvidenceType(record);
      if (!record.sourceReference) {
        record.sourceReference = record.sourceType === 'estimated'
          ? 'Pesquisa web / estimativa'
          : 'Lista de compras, nota fiscal ou orçamento';
      }
      if (type === 'packaging' && typeof record.supplier !== 'string') record.supplier = '';
    });
  });

  const supplierNames = new Set();
  ['ingredients', 'packaging'].forEach(type => {
    (target[type] || []).forEach(record => {
      const supplierName = String(record.supplier || '').trim();
      if (supplierName) supplierNames.add(supplierName);
    });
  });

  supplierNames.forEach(name => {
    const id = `sup_${slugify(name)}`;
    const existing = (target.suppliers || []).find(item => item.id === id);
    const related = [
      ...(target.ingredients || []).filter(item => String(item.supplier || '').trim() === name),
      ...(target.packaging || []).filter(item => String(item.supplier || '').trim() === name)
    ];
    const documentedCount = related.filter(item => procurementEvidenceType(item) === 'documented').length;
    const estimatedCount = related.filter(item => procurementEvidenceType(item) === 'estimated').length;
    const defaultEvidenceType = name.toLowerCase().includes('referência web') || name.toLowerCase().includes('referencia web')
      ? 'estimated'
      : isNamedDocumentedSupplier(name)
        ? 'documented'
        : documentedCount > 0 && estimatedCount === 0
          ? 'review'
          : estimatedCount > 0 && documentedCount === 0
            ? 'estimated'
            : 'review';
    const payload = {
      id,
      scope: 'gyros',
      name,
      legalName: existing?.legalName || '',
      cnpj: existing?.cnpj || '',
      sellerName: existing?.sellerName || '',
      sellerPhone: existing?.sellerPhone || '',
      sellerEmail: existing?.sellerEmail || '',
      address: existing?.address || '',
      cep: existing?.cep || '',
      city: existing?.city || '',
      state: existing?.state || '',
      pixKey: existing?.pixKey || '',
      pixKeyType: existing?.pixKeyType || 'aleatoria',
      paymentMethods: normalizePaymentMethods(existing?.paymentMethods || ['PIX']),
      notes: existing?.notes || '',
      evidenceType: existing?.evidenceType || defaultEvidenceType,
      evidenceSource: existing?.evidenceSource || (defaultEvidenceType === 'documented' ? 'Fornecedor identificado em nota, lista de compras ou orçamento' : defaultEvidenceType === 'estimated' ? 'Fornecedor ligado a custos pesquisados / estimados' : 'Fornecedor inferido a partir da base atual; revisar com documento ou contato')
    };
    if (existing) Object.assign(existing, payload);
    else target.suppliers.push(payload);
  });

  const evidencePriority = { documented: 3, review: 2, manual: 2, estimated: 1 };
  const mergedSuppliers = [];
  const supplierAliasMap = new Map();
  (target.suppliers || []).forEach(supplier => {
    const key = slugify(supplier.name);
    const existing = mergedSuppliers.find(item => slugify(item.name) === key);
    if (!existing) {
      mergedSuppliers.push(supplier);
      return;
    }
    const keepExisting = (evidencePriority[existing.evidenceType] || 0) >= (evidencePriority[supplier.evidenceType] || 0);
    const primary = keepExisting ? existing : supplier;
    const secondary = keepExisting ? supplier : existing;
    Object.keys(secondary).forEach(field => {
      const current = primary[field];
      const incoming = secondary[field];
      if ((current === '' || current == null || (Array.isArray(current) && !current.length)) && incoming != null && incoming !== '' && (!Array.isArray(incoming) || incoming.length)) {
        primary[field] = incoming;
      }
    });
    primary.paymentMethods = normalizePaymentMethods([...(primary.paymentMethods || []), ...(secondary.paymentMethods || [])]);
    supplierAliasMap.set(secondary.id, primary.id);
    if (!keepExisting) {
      const idx = mergedSuppliers.indexOf(existing);
      if (idx >= 0) mergedSuppliers[idx] = primary;
    }
  });
  target.suppliers = mergedSuppliers;
  if (supplierAliasMap.size) {
    (target.purchaseOrders || []).forEach(order => {
      if (supplierAliasMap.has(order.supplierId)) order.supplierId = supplierAliasMap.get(order.supplierId);
    });
    (target.purchaseItems || []).forEach(item => {
      if (supplierAliasMap.has(item.supplierId)) item.supplierId = supplierAliasMap.get(item.supplierId);
    });
    (target.inputs || []).forEach(item => {
      if (supplierAliasMap.has(item.supplierId)) item.supplierId = supplierAliasMap.get(item.supplierId);
    });
  }

  if (!target.purchaseOrders.length && !target.purchaseItems.length) {
    target.suppliers.forEach(supplier => {
      const linkedIngredients = (target.ingredients || []).filter(item => item.supplier === supplier.name && procurementEvidenceType(item) === 'documented');
      const linkedPackaging = (target.packaging || []).filter(item => item.supplier === supplier.name && procurementEvidenceType(item) === 'documented');
      const linked = [...linkedIngredients.map(item => ({ ...item, recordType: 'ingredients' })), ...linkedPackaging.map(item => ({ ...item, recordType: 'packaging' }))];
      if (!linked.length) return;
      const orderId = `ord_import_${supplier.id}`;
      target.purchaseOrders.push({
        id: orderId,
        scope: supplier.scope || 'gyros',
        supplierId: supplier.id,
        label: 'Base importada do PWA',
        date: '',
        documentNumber: '',
        paymentMethod: '',
        paymentStatus: 'paid',
        totalAmount: linked.reduce((sum, item) => sum + num(item.purchaseCost), 0),
        notes: 'Histórico inicial gerado a partir dos custos oficiais já cadastrados no PWA.',
        evidenceType: 'documented',
        evidenceSource: 'Lista de compras, notas e custos oficiais já incorporados na base'
      });
      linked.forEach(item => {
        target.purchaseItems.push({
          id: `pit_${slugify(item.id)}`,
          orderId,
          supplierId: supplier.id,
          resourceType: item.recordType === 'ingredients' ? 'ingredient' : 'packaging',
          resourceId: item.id,
          description: item.name,
          qty: num(item.purchaseQty),
          unit: item.baseUnit || 'un',
          unitPrice: num(item.purchaseCost) / Math.max(1, num(item.purchaseQty)),
          totalPrice: num(item.purchaseCost),
          evidenceType: procurementEvidenceType(item),
          evidenceSource: item.sourceReference || 'Lista de compras, notas e custos oficiais já incorporados na base'
        });
      });
    });
  }

  return target;
}

function normalizeFinancialData(target) {
  if (!target) return target;

  target.purchaseOrders = Array.isArray(target.purchaseOrders) ? target.purchaseOrders : [];
  target.purchaseItems = Array.isArray(target.purchaseItems) ? target.purchaseItems : [];
  target.expenseEntries = Array.isArray(target.expenseEntries) ? target.expenseEntries : [];
  target.inputs = Array.isArray(target.inputs) ? target.inputs : [];

  const supplierById = new Map((target.suppliers || []).map(item => [item.id, item]));
  const fixedCostById = new Map((target.fixedCosts || []).map(item => [item.id, item]));
  const resourceMeta = (resourceType, resourceId) => {
    if (resourceType === 'ingredient') {
      const item = (target.ingredients || []).find(entry => entry.id === resourceId);
      return item ? { name: item.name, unit: item.baseUnit || 'un', unitPrice: ingredientUnitCost(item) } : null;
    }
    if (resourceType === 'packaging') {
      const item = (target.packaging || []).find(entry => entry.id === resourceId);
      return item ? { name: item.name, unit: item.baseUnit || 'un', unitPrice: packagingUnitCost(item) } : null;
    }
    if (resourceType === 'product') {
      const item = (target.products || []).find(entry => entry.id === resourceId);
      return item ? { name: item.name, unit: item.erpUnit || 'UN', unitPrice: 0 } : null;
    }
    return null;
  };
  const inferLinkedInputs = (record) => {
    const orderInputs = Array.isArray(record.inputIds) ? record.inputIds.filter(Boolean) : [];
    if (orderInputs.length) return [...new Set(orderInputs)];
    const documentToken = slugify(record.documentNumber || record.invoiceNumber || '');
    const supplierToken = slugify(record.supplierName || supplierById.get(record.supplierId || '')?.name || '');
    const totalAmount = num(record.totalAmount);
    const linked = (target.inputs || []).filter(input => {
      const inputSupplierToken = slugify(input.supplierName || supplierById.get(input.supplierId || '')?.name || '');
      const sameSupplier = supplierToken && inputSupplierToken && supplierToken === inputSupplierToken;
      const sameDocument = documentToken && slugify(input.documentNumber || '') === documentToken;
      const sameDate = record.date && input.date && record.date === input.date;
      const sameAmount = totalAmount > 0 && Math.abs(num(input.totalAmount) - totalAmount) < 0.01;
      return sameSupplier && ((sameDocument && sameDate) || (sameDocument && sameAmount) || (sameDate && sameAmount));
    }).map(input => input.id);
    return [...new Set(linked)];
  };

  target.purchaseOrders.forEach(order => {
    const supplier = supplierById.get(order.supplierId || '');
    order.scope = order.scope || supplier?.scope || 'gyros';
    order.supplierId = order.supplierId || '';
    order.supplierName = order.supplierName || supplier?.name || '';
    order.label = order.label || order.supplierName || 'Compra';
    order.documentNumber = order.documentNumber || order.invoiceNumber || '';
    order.date = order.date || '';
    order.paymentMethod = order.paymentMethod || '';
    order.paymentStatus = order.paymentStatus || 'paid';
    order.totalAmount = num(order.totalAmount);
    order.inputIds = inferLinkedInputs(order);
    order.evidenceType = order.evidenceType || procurementEvidenceType(order);
    order.evidenceSource = order.evidenceSource || (order.inputIds.length
      ? 'Evidência vinculada em inputs'
      : 'Compra cadastrada manualmente; vincule nota, comprovante ou pedido');
  });

  target.purchaseItems.forEach(item => {
    const order = target.purchaseOrders.find(entry => entry.id === item.orderId);
    const supplier = supplierById.get(item.supplierId || order?.supplierId || '');
    const meta = resourceMeta(item.resourceType, item.resourceId);
    item.orderId = item.orderId || '';
    item.supplierId = item.supplierId || order?.supplierId || '';
    item.description = item.description || meta?.name || 'Item de compra';
    item.unit = item.unit || meta?.unit || 'un';
    item.qty = num(item.qty);
    item.unitPrice = num(item.unitPrice || meta?.unitPrice);
    item.totalPrice = num(item.totalPrice) || (num(item.qty) * num(item.unitPrice));
    item.evidenceType = item.evidenceType || order?.evidenceType || procurementEvidenceType(item);
    item.evidenceSource = item.evidenceSource || order?.evidenceSource || 'Item vinculado ao lançamento de compra';
    if (supplier && !item.scope) item.scope = supplier.scope || 'gyros';
  });

  target.expenseEntries.forEach(entry => {
    const supplier = supplierById.get(entry.supplierId || '');
    const fixedCost = fixedCostById.get(entry.fixedCostId || '');
    entry.scope = entry.scope || fixedCost?.scope || supplier?.scope || 'gyros';
    entry.category = entry.category || 'other';
    entry.supplierId = entry.supplierId || '';
    entry.supplierName = entry.supplierName || supplier?.name || '';
    entry.fixedCostId = entry.fixedCostId || '';
    entry.label = entry.label || fixedCost?.name || 'Gasto operacional';
    entry.documentNumber = entry.documentNumber || '';
    entry.date = entry.date || '';
    entry.referencePeriod = entry.referencePeriod || '';
    entry.paymentMethod = entry.paymentMethod || '';
    entry.paymentStatus = entry.paymentStatus || 'pending';
    entry.totalAmount = num(entry.totalAmount);
    entry.inputIds = inferLinkedInputs(entry);
    entry.evidenceType = entry.evidenceType || procurementEvidenceType(entry);
    entry.evidenceSource = entry.evidenceSource || (entry.inputIds.length
      ? 'Evidência vinculada em inputs'
      : 'Gasto cadastrado manualmente; vincule comprovante, boleto ou nota');
  });

  return target;
}

function isLocalDevHost() {
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0';
}

function hashString(str='') {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return String(hash);
}

function loadDb() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(SEED_DATA);
    const parsed = JSON.parse(raw);
    const before = JSON.stringify(parsed);
    const patched = normalizeDb(parsed);
    const after = JSON.stringify(patched);
    if (before !== after) localStorage.setItem(STORAGE_KEY, after);
    return patched;
  } catch (err) {
    console.error(err);
    return deepClone(SEED_DATA);
  }
}

async function loadOfficialDb() {
  try {
    const response = await fetch(`${OFFICIAL_DB_URL}?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return normalizeDb(await response.json());
  } catch (err) {
    console.warn('Nao consegui carregar a base oficial do projeto.', err);
    return null;
  }
}

async function syncOfficialDb() {
  const officialDb = await loadOfficialDb();
  if (!officialDb) return null;

  const officialJson = JSON.stringify(officialDb);
  const officialHash = hashString(officialJson);
  const currentHash = localStorage.getItem(OFFICIAL_DB_HASH_KEY);
  const hasLocalDb = !!localStorage.getItem(STORAGE_KEY);

  if (isLocalDevHost()) {
    db = deepClone(officialDb);
    localStorage.setItem(STORAGE_KEY, officialJson);
    localStorage.setItem(OFFICIAL_DB_HASH_KEY, officialHash);
    state.lastSavedAt = new Date();
    return 'dev-sync';
  }

  if (!hasLocalDb || currentHash !== officialHash) {
    db = deepClone(officialDb);
    localStorage.setItem(STORAGE_KEY, officialJson);
    localStorage.setItem(OFFICIAL_DB_HASH_KEY, officialHash);
    state.lastSavedAt = new Date();
    return hasLocalDb ? 'updated' : 'loaded';
  }

  return 'current';
}

async function disableServiceWorkerForLocalDev() {
  if (!isLocalDevHost() || !('serviceWorker' in navigator)) return;
  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map(reg => reg.unregister()));
  } catch (err) {
    console.warn('Nao consegui remover service workers antigos no localhost.', err);
  }
  try {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map(key => caches.delete(key)));
    }
  } catch (err) {
    console.warn('Nao consegui limpar caches antigos no localhost.', err);
  }
}

function saveDb() {
  db = normalizeDb(db);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  state.lastSavedAt = new Date();
  renderAll();
}

function savedStatusText() {
  if (!state.lastSavedAt) return 'Base pronta';
  return `Salvo ${state.lastSavedAt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
}

function renderSavedStatus() {
  const el = qs('#savedStatus');
  if (el) el.textContent = savedStatusText();
}

function normalizedLedgerViewMode(value = '') {
  return value === 'timeline' ? 'timeline' : 'items';
}

function normalizedLedgerLayoutMode(value = '') {
  return value === 'table' ? 'table' : 'split';
}

function applyUrlStateFromSearch() {
  const url = new URL(window.location.href);
  const page = url.searchParams.get('page');
  if (['dashboard', 'catalog', 'ledger', 'resources'].includes(page)) state.page = page;

  const operationView = url.searchParams.get('op');
  if (availableOperations().find(item => item.id === operationView)) state.operationView = operationView;

  state.ledgerViewMode = normalizedLedgerViewMode(url.searchParams.get('ledgerView') || state.ledgerViewMode);
  state.ledgerLayoutMode = normalizedLedgerLayoutMode(url.searchParams.get('ledgerLayout') || state.ledgerLayoutMode);

  const preset = url.searchParams.get('ledgerPreset');
  if (preset) state.ledgerPreset = preset;
  state.ledgerStartDate = url.searchParams.get('ledgerStart') || state.ledgerStartDate;
  state.ledgerEndDate = url.searchParams.get('ledgerEnd') || state.ledgerEndDate;
  state.ledgerType = url.searchParams.get('ledgerType') || state.ledgerType;
  state.ledgerSupplierId = url.searchParams.get('ledgerSupplier') || state.ledgerSupplierId;
  state.ledgerPaymentStatus = url.searchParams.get('ledgerPayment') || state.ledgerPaymentStatus;
  state.ledgerItemSearch = url.searchParams.get('ledgerItemSearch') || state.ledgerItemSearch;
  state.ledgerItemResourceType = url.searchParams.get('ledgerItemResourceType') || state.ledgerItemResourceType;
}

function buildLedgerViewUrl(overrides = {}) {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  params.set('page', overrides.page || state.page);
  params.set('op', overrides.operationView || state.operationView);
  params.set('ledgerView', normalizedLedgerViewMode(overrides.ledgerViewMode || state.ledgerViewMode));
  params.set('ledgerLayout', normalizedLedgerLayoutMode(overrides.ledgerLayoutMode || state.ledgerLayoutMode));
  params.set('ledgerPreset', overrides.ledgerPreset || state.ledgerPreset);
  params.set('ledgerStart', overrides.ledgerStartDate ?? state.ledgerStartDate ?? '');
  params.set('ledgerEnd', overrides.ledgerEndDate ?? state.ledgerEndDate ?? '');
  params.set('ledgerType', overrides.ledgerType || state.ledgerType);
  params.set('ledgerSupplier', overrides.ledgerSupplierId || state.ledgerSupplierId);
  params.set('ledgerPayment', overrides.ledgerPaymentStatus || state.ledgerPaymentStatus);
  params.set('ledgerItemSearch', overrides.ledgerItemSearch ?? state.ledgerItemSearch ?? '');
  params.set('ledgerItemResourceType', overrides.ledgerItemResourceType || state.ledgerItemResourceType);
  return url.toString();
}

function openLedgerViewInNewTab() {
  const url = buildLedgerViewUrl({
    page: 'ledger',
    ledgerViewMode: 'items',
    ledgerLayoutMode: 'table'
  });
  window.open(url, '_blank', 'noopener');
}

function operationLabel(operationId = state.operationView) {
  return availableOperations().find(item => item.id === operationId)?.label || 'Operação';
}

function operationShortLabel(operationId) {
  return operationId === 'shared' ? 'Compartilhado' : operationLabel(operationId);
}

function renderOperationSelector() {
  const el = qs('#operationView');
  if (!el) return;
  const options = availableOperations();
  if (!options.find(item => item.id === state.operationView)) state.operationView = 'gyros';
  el.innerHTML = options
    .map(item => `<option value="${item.id}" ${state.operationView === item.id ? 'selected' : ''}>${item.label}</option>`)
    .join('');
  el.style.display = options.length > 1 ? 'inline-flex' : 'none';
  el.onchange = (e) => {
    state.operationView = e.target.value;
    state.filterCategory = 'all';
    state.selectedProductId = null;
    state.selectedResourceId = null;
    renderAll();
  };
}

function scopeVisible(scope, operationView = state.operationView) {
  if (!greguinhoEnabled()) return (scope || 'gyros') === 'gyros';
  if (operationView === 'consolidated') return true;
  return scope === 'shared' || scope === operationView;
}

function scopeVisibleForOwner(scope, ownerScope = state.operationView) {
  if (!greguinhoEnabled()) return (scope || 'gyros') === 'gyros';
  if (ownerScope === 'consolidated') return true;
  if (ownerScope === 'shared') return scope === 'shared';
  return scope === 'shared' || scope === ownerScope;
}

function scopeBadge(scope) {
  if (!greguinhoEnabled()) return 'Gyros';
  return scope === 'shared' ? 'Compartilhado' : operationShortLabel(scope);
}

function scopeTag(scope) {
  return `<span class="tag">${escapeHtml(scopeBadge(scope))}</span>`;
}

function visibleRecords(type, operationView = state.operationView) {
  return (db[type] || []).filter(record => scopeVisible(record.scope || legacyScopeForRecord(type, record), operationView));
}

function recordsForOwnerScope(type, ownerScope = state.operationView) {
  return (db[type] || []).filter(record => scopeVisibleForOwner(record.scope || legacyScopeForRecord(type, record), ownerScope));
}

function sharedFixedSplitFactor(operationId) {
  if (!greguinhoEnabled()) return 1;
  if (operationId === 'consolidated') return 1;
  const manual = db.settings.sharedFixedSplitManual || { gyros: 50, greguinho: 50 };
  const mode = db.settings.sharedFixedSplitMode || 'equal';
  if (mode === 'manual') {
    const total = Math.max(1, num(manual.gyros) + num(manual.greguinho));
    return num(manual[operationId]) / total;
  }
  if (mode === 'volume') {
    const units = db.settings.operationMonthlyUnits || {};
    const total = Math.max(1, num(units.gyros) + num(units.greguinho));
    return num(units[operationId]) / total;
  }
  return 0.5;
}

function totalFixedCosts(operationView = state.operationView) {
  return (db.fixedCosts || []).reduce((sum, item) => {
    const scope = item.scope || legacyScopeForRecord('fixedCosts', item);
    if (!greguinhoEnabled()) return sum + num(item.amount);
    if (operationView === 'consolidated') return sum + num(item.amount);
    if (scope === 'shared') return sum + (num(item.amount) * sharedFixedSplitFactor(operationView));
    if (scope === operationView) return sum + num(item.amount);
    return sum;
  }, 0);
}

function monthlyUnitsForOperation(operationView = state.operationView) {
  const units = db.settings.operationMonthlyUnits || {};
  if (!greguinhoEnabled()) return num(units.gyros) || num(db.settings.customMonthlyUnits) || 0;
  if (operationView === 'consolidated') return num(units.gyros) + num(units.greguinho);
  return num(units[operationView]);
}

function setPage(page) {
  state.page = page;
  closeMobileNav();
  renderAll();
}

function jumpToCatalog({ filterText = '', categoryId = 'all', productId = null } = {}) {
  state.page = 'catalog';
  state.filterText = filterText;
  state.filterCategory = categoryId;
  state.selectedProductId = productId;
  closeMobileNav();
  renderAll();
}

function openMobileNav() {
  state.mobileNavOpen = true;
  qs('#sidebar')?.classList.add('show');
  qs('#sidebarBackdrop')?.classList.add('show');
  document.body.classList.add('nav-open');
}

function closeMobileNav() {
  state.mobileNavOpen = false;
  qs('#sidebar')?.classList.remove('show');
  qs('#sidebarBackdrop')?.classList.remove('show');
  document.body.classList.remove('nav-open');
}

function showToast(title, message = '', tone = 'info') {
  const stack = qs('#toastStack');
  if (!stack) return;
  const el = document.createElement('div');
  el.className = `toast ${tone}`;
  el.innerHTML = `<strong>${escapeHtml(title)}</strong>${message ? `<p>${escapeHtml(message)}</p>` : ''}`;
  stack.appendChild(el);
  window.setTimeout(() => {
    el.remove();
  }, 3200);
}

function renderConfirmDialog() {
  const wrap = qs('#confirmWrap');
  if (!wrap) return;
  if (!state.confirmDialog) {
    wrap.classList.remove('show');
    wrap.setAttribute('aria-hidden', 'true');
    return;
  }
  qs('#confirmTitle').textContent = state.confirmDialog.title || 'Confirmar ação';
  qs('#confirmSubtitle').textContent = state.confirmDialog.subtitle || '';
  qs('#confirmMessage').textContent = state.confirmDialog.message || '';
  wrap.classList.add('show');
  wrap.setAttribute('aria-hidden', 'false');
}

function askConfirm({ title = 'Confirmar ação', subtitle = '', message = '' }) {
  return new Promise(resolve => {
    state.confirmDialog = { title, subtitle, message, resolve };
    renderConfirmDialog();
  });
}

function closeConfirmDialog(result) {
  if (!state.confirmDialog) return;
  const { resolve } = state.confirmDialog;
  state.confirmDialog = null;
  renderConfirmDialog();
  resolve(Boolean(result));
}

function activeCatalogProducts(operationView = state.operationView) {
  return db.products.filter(p =>
    p.active !== false &&
    p.includeInCatalogCount !== false &&
    byId('categories', p.categoryId)?.active !== false &&
    scopeVisible(p.scope || legacyScopeForRecord('products', p), operationView)
  );
}

function fixedSharePerCatalogItem(operationView = state.operationView) {
  if (db.settings.fixedAllocationMode === 'custom_units') {
    return totalFixedCosts(operationView) / Math.max(1, monthlyUnitsForOperation(operationView));
  }
  return totalFixedCosts(operationView) / Math.max(1, activeCatalogProducts(operationView).length);
}

function ingredientUnitCost(item) {
  if (!item) return 0;
  const raw = num(item.purchaseCost) / Math.max(1, num(item.purchaseQty));
  const factor = 1 - (num(item.wastePct) / 100);
  return factor > 0 ? raw / factor : raw;
}

function packagingUnitCost(item) {
  if (!item) return 0;
  return num(item.purchaseCost) / Math.max(1, num(item.purchaseQty));
}

function categoryName(id) {
  return byId('categories', id)?.name || 'Sem categoria';
}

function categoryViewMeta(id) {
  return CATEGORY_VIEW_META[id] || {};
}

function productViewMeta(product = {}) {
  return PRODUCT_VIEW_META[product.id] || {};
}

function subgroupIdForProduct(product = {}) {
  return product.subgroupId || productViewMeta(product).subgroupId || '';
}

function subgroupMetaForProduct(product = {}) {
  return SUBGROUP_VIEW_META[subgroupIdForProduct(product)] || {};
}

function subgroupNameForProduct(product = {}) {
  return subgroupMetaForProduct(product).name || product.subgroupName || 'Sem grupo';
}

function catalogPathLabel(product = {}) {
  return `${categoryName(product.categoryId)} / ${subgroupNameForProduct(product)}`;
}

function categoryImageSrc(categoryId = '') {
  return CATEGORY_IMAGE_OVERRIDES[categoryId] || '';
}

function productImageSrc(product = {}) {
  return PRODUCT_IMAGE_OVERRIDES[product.id] || categoryImageSrc(product.categoryId);
}

function resourceImageSrc(refType = '', refId = '') {
  return RESOURCE_IMAGE_OVERRIDES[`${refType}:${refId}`] || '';
}

function addonImageSrc(addon = {}) {
  const nodes = flattenNodes(addon.nodes || []);
  const fromNode = nodes.map(node => resourceImageSrc(node.refType, node.refId)).find(Boolean);
  if (fromNode) return fromNode;
  const text = `${addon.id || ''} ${addon.name || ''}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const key = Object.keys(ADDON_IMAGE_OVERRIDES).find(token => text.includes(token.normalize('NFD').replace(/[\u0300-\u036f]/g, '')));
  return key ? ADDON_IMAGE_OVERRIDES[key] : '';
}

function visualPlaceholderLabel(product = {}) {
  return String(product.name || categoryName(product.categoryId) || 'GYR').split(/\s+/).slice(0, 2).map(word => word[0]).join('').toUpperCase();
}

function renderProductImage(product = {}, className = 'catalog-thumb') {
  const src = productImageSrc(product);
  if (!src) return `<div class="${className} image-placeholder">${escapeHtml(visualPlaceholderLabel(product))}</div>`;
  return `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(product.name || 'Produto do cardápio')}" loading="lazy">`;
}

function productSortKey(product = {}) {
  return [
    categoryViewMeta(product.categoryId).sortOrder || 999,
    subgroupMetaForProduct(product).sortOrder || 999,
    productViewMeta(product).sortOrder || 999,
    product.name || ''
  ];
}

function compareCatalogProducts(a, b) {
  const left = productSortKey(a);
  const right = productSortKey(b);
  for (let i = 0; i < left.length; i += 1) {
    if (left[i] < right[i]) return -1;
    if (left[i] > right[i]) return 1;
  }
  return 0;
}

function defaultMarkupPct() {
  return Math.max(0, num(db.settings.defaultMarkupPct || 200));
}

function markupMultiplier() {
  return 1 + (defaultMarkupPct() / 100);
}

function ifoodMultiplier() {
  return 1.27;
}

function targetMarginFromMarkupPct() {
  const mult = markupMultiplier();
  return mult > 0 ? ((mult - 1) / mult) * 100 : 0;
}

function productPricingMode(product) {
  return product?.pricingMode === 'manual' ? 'manual' : 'auto';
}

function autoSalePriceFromCost(totalCost) {
  return totalCost * markupMultiplier();
}

function pricingRuleLabel(product) {
  return productPricingMode(product) === 'manual'
    ? 'Preço manual'
    : `Automático: ${defaultMarkupPct()}% sobre o custo direto (custo x ${markupMultiplier().toFixed(2)})`;
}

function componentTypeLabel(refType) {
  return { ingredient:'Ingrediente', recipe:'Preparo', packaging:'Embalagem', product:'Item/Combo' }[refType] || refType;
}

function addonChargeModeLabel(mode) {
  return mode === 'included' ? 'absorvido no item' : 'cobrado à parte';
}

function componentPricingMode(mode) {
  return mode === 'pass_through' ? 'pass_through' : 'markup';
}

function componentPricingModeLabel(mode) {
  return componentPricingMode(mode) === 'pass_through' ? 'só repassar custo' : 'entrar no markup';
}

function unitLabelForRef(refType, refId) {
  if (refType === 'ingredient') return byId('ingredients', refId)?.baseUnit || '';
  if (refType === 'recipe') return byId('recipes', refId)?.yieldUnit || '';
  if (refType === 'packaging') return 'embalagem';
  if (refType === 'product') return byId('products', refId)?.erpUnit || 'un';
  return '';
}

function formatQtyWithUnit(qty = 0, unit = '') {
  if (!unit) return decimal(qty);
  if (unit === 'un' && num(qty) === 1) return '1 un';
  if (unit === 'embalagem' && num(qty) === 1) return '1 embalagem';
  return `${decimal(qty)} ${unit}`;
}

function recipeYieldLabel(recipe) {
  if (!recipe) return '';
  return `${decimal(recipe.yieldQty)} ${recipe.yieldUnit}`;
}

function usageLabelForNode(node) {
  return formatQtyWithUnit(node.qty, node.unit || unitLabelForRef(node.refType, node.refId));
}

function topLevelPortions(nodes = []) {
  return (nodes || []).map(node => ({
    name: node.title,
    usage: usageLabelForNode(node),
    type: componentTypeLabel(node.refType),
    cost: node.cost
  }));
}

function portionSummaryText(items = []) {
  return items.map(item => `${item.name}: ${item.usage}`).join(' • ');
}

function statusClass(marginPct) {
  if (marginPct >= 60) return 'good';
  if (marginPct >= 40) return 'warn';
  return 'bad';
}

function resolveNode(refType, refId, qty=1, stack=[]) {
  const key = `${refType}:${refId}`;
  if (stack.includes(key)) {
    return { refType, refId, qty, title:`Ciclo detectado: ${key}`, cost:0, meta:'Revise a composição', children:[] };
  }
  const nextStack = [...stack, key];

  if (refType === 'ingredient') {
    const item = byId('ingredients', refId);
    const unitCost = ingredientUnitCost(item);
    return {
      refType, refId, qty, title:item?.name || refId,
      cost: unitCost * qty,
      unitCost,
      unit: item?.baseUnit || '',
      meta: item ? `custo unitário ${brl(unitCost)} por ${item.baseUnit}` : 'Ingrediente não encontrado',
      children: []
    };
  }
  if (refType === 'packaging') {
    const item = byId('packaging', refId);
    const unitCost = packagingUnitCost(item);
    return {
      refType, refId, qty, title:item?.name || refId,
      cost: unitCost * qty,
      unitCost,
      unit: 'embalagem',
      meta: item ? `embalagem • custo unitário ${brl(unitCost)}` : 'Embalagem não encontrada',
      children: []
    };
  }
  if (refType === 'recipe') {
    const rec = byId('recipes', refId);
    if (!rec) return { refType, refId, qty, title:refId, cost:0, meta:'Preparo não encontrado', children:[] };
    const children = rec.components.map(c => resolveNode(c.refType, c.refId, num(c.qty), nextStack));
    const batchCost = children.reduce((sum, child) => sum + child.cost, 0);
    const unitCost = batchCost / Math.max(1, num(rec.yieldQty));
    return {
      refType, refId, qty, title:rec.name,
      cost: unitCost * qty,
      unitCost,
      unit: rec.yieldUnit,
      meta:`rendimento ${recipeYieldLabel(rec)} • lote ${brl(batchCost)} • custo ${brl(unitCost)} por ${rec.yieldUnit}`,
      children
    };
  }
  if (refType === 'product') {
    const item = byId('products', refId);
    if (!item) return { refType, refId, qty, title:refId, cost:0, meta:'Item não encontrado', children:[] };
    const children = item.components.map(c => resolveNode(c.refType, c.refId, num(c.qty), nextStack));
    const directCost = children.reduce((sum, child) => sum + child.cost, 0);
    return {
      refType, refId, qty, title:item.name,
      cost: directCost * qty,
      unitCost: directCost,
      unit: item.erpUnit || 'un',
      meta:`${item.type} • custo direto ${brl(directCost)}`,
      children
    };
  }
  return { refType, refId, qty, title:refId, cost:0, meta:'Tipo desconhecido', children:[] };
}

function resolveComponentList(components = [], stack = []) {
  return (components || []).map(c => ({
    ...resolveNode(c.refType, c.refId, num(c.qty), stack),
    pricingMode: componentPricingMode(c.pricingMode),
    sourceComponent: c
  }));
}

function computeAddon(addon, ownerKey = 'addon') {
  const nodes = resolveComponentList(addon.components || [], [ownerKey]);
  const directCost = nodes.reduce((sum, n) => sum + n.cost, 0);
  const suggestedSalePrice = autoSalePriceFromCost(directCost);
  const configuredSalePrice = num(addon.salePriceDelta);
  const freeChoice = addon.priceCalculation === 'free' || addon.priceCalculation === 'included';
  const effectiveSalePrice = freeChoice ? 0 : (configuredSalePrice > 0 ? configuredSalePrice : suggestedSalePrice);
  return {
    ...addon,
    nodes,
    directCost,
    suggestedSalePrice,
    configuredSalePrice,
    effectiveSalePrice,
    ifoodSalePrice: freeChoice ? 0 : effectiveSalePrice * ifoodMultiplier()
  };
}

function groupComputedAddons(addons = []) {
  const groups = new Map();
  (addons || []).forEach((addon, index) => {
    const key = addon.group || 'Adicionais';
    if (!groups.has(key)) {
      groups.set(key, {
        id: `group_${slugify(key)}_${index}`,
        name: key,
        required: addon.required === true,
        minimum: addon.minimum != null ? num(addon.minimum) : (addon.required ? 1 : 0),
        maximum: addon.maximum != null ? num(addon.maximum) : 1,
        priceCalculation: addon.priceCalculation || 'sum',
        chargeMode: addon.chargeMode || 'extra',
        groupType: addon.groupType || 'addon',
        items: []
      });
    }
    groups.get(key).items.push(addon);
  });
  return [...groups.values()];
}

function addonGroupRuleLabel(group) {
  const min = num(group.minimum);
  const max = num(group.maximum);
  if (group.required && min === 1 && max === 1) return 'obrigatorio • escolha 1';
  if (group.required) return `obrigatorio • escolha ${min} a ${max}`;
  if (min > 0 || max > 1) return `opcional • escolha ${min} a ${max}`;
  return 'opcional';
}

function addonGroupPriceLabel(group) {
  if (group.priceCalculation === 'included' || group.priceCalculation === 'free' || group.chargeMode === 'included') {
    return 'sem cobrar a parte';
  }
  return 'soma no preco final';
}

function computeProduct(productId, operationView = state.operationView) {
  const product = byId('products', productId);
  if (!product) return null;
  const nodes = resolveComponentList(product.components, [`product:${productId}`]);
  const directCost = nodes.reduce((sum, n) => sum + n.cost, 0);
  const passThroughCost = nodes.reduce((sum, n) => sum + (n.pricingMode === 'pass_through' ? n.cost : 0), 0);
  const markupBaseCost = Math.max(0, directCost - passThroughCost);
  const fixedCost = product.includeInCatalogCount === false || product.active === false ? 0 : fixedSharePerCatalogItem(operationView);
  const totalCost = directCost + fixedCost;
  const pricingMode = productPricingMode(product);
  const autoSalePrice = autoSalePriceFromCost(markupBaseCost) + passThroughCost;
  const autoSalePriceWithFixed = autoSalePriceFromCost(totalCost);
  const salePrice = pricingMode === 'manual' ? num(product.salePrice) : autoSalePrice;
  const ifoodSalePrice = salePrice * ifoodMultiplier();
  const marginPct = salePrice > 0 ? ((salePrice - directCost) / salePrice) * 100 : 0;
  const markup = directCost > 0 ? salePrice / directCost : 0;
  const addons = (product.addons || []).map((addon, index) => computeAddon(addon, `product:${productId}:addon:${addon.id || index}`));
  return { product, nodes, addons, directCost, passThroughCost, markupBaseCost, fixedCost, totalCost, salePrice, ifoodSalePrice, marginPct, markup, autoSalePrice, autoSalePriceWithFixed, pricingMode };
}

function ledgerEntryKey(source, id) {
  return `${source}:${id}`;
}

function isoDateToday() {
  return new Date().toISOString().slice(0, 10);
}

function isoDateOffset(baseIso, days) {
  const date = new Date(`${baseIso}T12:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function startOfMonthIso(baseIso) {
  const [year, month] = baseIso.split('-');
  return `${year}-${month}-01`;
}

function startOfYearIso(baseIso) {
  return `${baseIso.slice(0, 4)}-01-01`;
}

function ledgerRange() {
  const today = isoDateToday();
  if (state.ledgerPreset === 'month') return { start: startOfMonthIso(today), end: today };
  if (state.ledgerPreset === 'days30') return { start: isoDateOffset(today, -29), end: today };
  if (state.ledgerPreset === 'days90') return { start: isoDateOffset(today, -89), end: today };
  if (state.ledgerPreset === 'year') return { start: startOfYearIso(today), end: today };
  if (state.ledgerPreset === 'custom') return { start: state.ledgerStartDate || '', end: state.ledgerEndDate || '' };
  return { start: '', end: '' };
}

function ledgerEntries(operationView = state.operationView) {
  const purchaseEntries = visibleRecords('purchaseOrders', operationView).map(order => {
    const supplier = byId('suppliers', order.supplierId);
    const items = supplierOrderItems(order.id);
    return {
      key: ledgerEntryKey('purchaseOrders', order.id),
      source: 'purchaseOrders',
      kind: 'purchase',
      category: 'Compra com fornecedor',
      id: order.id,
      label: order.label || supplier?.name || order.supplierName || 'Compra',
      supplierId: order.supplierId || '',
      supplierName: supplier?.name || order.supplierName || '',
      date: order.date || '',
      referencePeriod: order.date ? monthKey(order.date) : '',
      totalAmount: num(order.totalAmount),
      paymentStatus: order.paymentStatus || 'pending',
      paymentMethod: order.paymentMethod || '',
      documentNumber: order.documentNumber || '',
      evidenceType: order.evidenceType || procurementEvidenceType(order),
      evidenceCount: linkedInputs(order.inputIds || []).length,
      itemCount: items.length,
      record: order
    };
  });

  const expenseEntries = visibleRecords('expenseEntries', operationView).map(entry => {
    const supplier = byId('suppliers', entry.supplierId);
    return {
      key: ledgerEntryKey('expenseEntries', entry.id),
      source: 'expenseEntries',
      kind: 'expense',
      category: expenseCategoryLabel(entry.category),
      id: entry.id,
      label: entry.label || 'Gasto operacional',
      supplierId: entry.supplierId || '',
      supplierName: supplier?.name || entry.supplierName || '',
      date: entry.date || '',
      referencePeriod: entry.referencePeriod || monthKey(entry.date),
      totalAmount: num(entry.totalAmount),
      paymentStatus: entry.paymentStatus || 'pending',
      paymentMethod: entry.paymentMethod || '',
      documentNumber: entry.documentNumber || '',
      evidenceType: entry.evidenceType || procurementEvidenceType(entry),
      evidenceCount: linkedInputs(entry.inputIds || []).length,
      itemCount: 0,
      record: entry
    };
  });

  return [...purchaseEntries, ...expenseEntries].sort((a, b) => {
    if (a.date && b.date && a.date !== b.date) return b.date.localeCompare(a.date);
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return String(a.label || '').localeCompare(String(b.label || ''));
  });
}

function filteredLedgerEntries() {
  const range = ledgerRange();
  return ledgerEntries().filter(entry => {
    const typeOk = state.ledgerType === 'all' || entry.kind === state.ledgerType;
    const supplierOk = state.ledgerSupplierId === 'all' || entry.supplierId === state.ledgerSupplierId;
    const paymentOk = state.ledgerPaymentStatus === 'all' || entry.paymentStatus === state.ledgerPaymentStatus;
    const startOk = !range.start || (entry.date && entry.date >= range.start);
    const endOk = !range.end || (entry.date && entry.date <= range.end);
    const dateOk = (!range.start && !range.end) || (startOk && endOk);
    return typeOk && supplierOk && paymentOk && dateOk;
  });
}

function ledgerPurchaseItemEntries(operationView = state.operationView) {
  return buildPurchaseFamilyEntries(ledgerPurchaseOccurrenceEntries(operationView));
}

function filteredLedgerPurchaseOccurrences() {
  const range = ledgerRange();
  const search = slugify(state.ledgerItemSearch || '');
  return ledgerPurchaseOccurrenceEntries().filter(entry => {
    const supplierOk = state.ledgerSupplierId === 'all' || entry.supplierId === state.ledgerSupplierId;
    const resourceOk = state.ledgerItemResourceType === 'all' || entry.resourceType === state.ledgerItemResourceType;
    const startOk = !range.start || (entry.date && entry.date >= range.start);
    const endOk = !range.end || (entry.date && entry.date <= range.end);
    const dateOk = (!range.start && !range.end) || (startOk && endOk);
    const searchHaystack = slugify([
      entry.familyName,
      entry.categoryName,
      entry.description,
      entry.supplierName,
      entry.orderLabel,
      entry.documentNumber,
      entry.supplierProductSummary,
      ...(entry.rawDescriptions || []),
      ...(entry.lineItems || []).map(item => item.description)
    ].filter(Boolean).join(' '));
    const searchOk = !search || searchHaystack.includes(search);
    return supplierOk && resourceOk && dateOk && searchOk;
  });
}

function filteredLedgerPurchaseItemEntries() {
  return buildPurchaseFamilyEntries(filteredLedgerPurchaseOccurrences());
}

function renderLedgerEntryDetail(entry) {
  if (!entry) return '<div class="empty">Selecione um lançamento.</div>';
  if (entry.source === 'purchaseOrders') return renderPurchaseOrderDetailHtml(entry.record);
  return renderExpenseEntryDetailHtml(entry.record);
}

function renderLedgerPurchaseHistoryTable(rows = [], emptyMessage = 'Sem histórico para este item.') {
  return rows.length
    ? `<table><thead><tr><th>Data</th><th>Fornecedor / local</th><th>Produto no comprovante</th><th>Apresentação / pack</th><th>Unitário</th><th>Comparável</th><th>Total</th><th>Evidências</th></tr></thead><tbody>${rows.map(row => `<tr><td>${formatDate(row.date)}</td><td><strong>${escapeHtml(row.supplierName || '—')}</strong><div class="small muted">${escapeHtml(row.documentNumber || row.order?.id || 'Sem documento')}</div></td><td>${escapeHtml(row.supplierProductSummary || row.supplierProductLabel || row.description || '—')}<div class="small muted">${row.lineCount > 1 ? `${row.lineCount} linha(s) fiscais` : '1 linha fiscal'}</div></td><td>${escapeHtml(row.presentationLabel || `${decimal(row.qty)} ${row.unit || 'un'}`)}</td><td>${escapeHtml(row.unitPriceLabel || brl(row.unitPrice))}</td><td><strong>${escapeHtml(row.comparisonLabel || row.unitPriceLabel || '—')}</strong></td><td>${brl(row.totalAmount)}</td><td>${renderEvidenceLinks(row.evidenceInputs || [], 4)}</td></tr>`).join('')}</tbody></table>`
    : `<div class="empty" style="padding:16px;">${emptyMessage}</div>`;
}

function renderLedgerPurchaseLineItemsTable(rows = [], emptyMessage = 'Sem linhas fiscais para este produto.') {
  return rows.length
    ? `<table><thead><tr><th>Produto no cupom / nota</th><th>Apresentação</th><th>Unitário</th><th>Valor da linha</th></tr></thead><tbody>${rows.map(row => `<tr><td><strong>${escapeHtml(row.description || 'Item')}</strong></td><td>${escapeHtml(row.presentationLabel || `${decimal(row.qty)} ${row.unit || 'un'}`)}</td><td>${escapeHtml(row.unitPriceLabel || brl(row.unitPrice))}</td><td>${brl(row.totalAmount)}</td></tr>`).join('')}</tbody></table>`
    : `<div class="empty" style="padding:16px;">${emptyMessage}</div>`;
}

function renderLedgerPurchaseItemDetail(entry) {
  if (!entry) return '<div class="empty">Selecione uma família de compra.</div>';
  const latestPurchase = entry.latestPurchase || entry.occurrences?.[0] || null;
  const latestLines = latestPurchase?.lineItems || [];
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Família de compra</span>${scopeTag(entry.scope || 'gyros')}${evidenceTag(latestPurchase || entry)}<span class="tag">${escapeHtml(entry.categoryName || 'Outros')}</span></div><h3>${escapeHtml(entry.familyName || entry.description || 'Item comprado')}</h3><p>${escapeHtml(entry.notes || 'Leitura agrupada por família de produto. Aqui você acompanha datas, fornecedores, preços e arquivos da mesma compra recorrente sem espalhar o histórico em várias linhas soltas.')}</p></div><div class="detail-actions">${latestPurchase ? `<button class="btn ghost" data-action="edit-resource" data-type="purchaseOrders" data-id="${latestPurchase.order?.id || ''}">Editar última compra</button>` : ''}</div></div><div class="info-grid"><div class="info-cell"><div class="k">Categoria</div><div class="v" style="font-size:15px">${escapeHtml(entry.categoryName || 'Outros')}</div></div><div class="info-cell"><div class="k">Compras registradas</div><div class="v">${entry.occurrenceCount || 0}</div><div class="small muted" style="margin-top:6px;">${(entry.lineItems || []).length} linha(s) fiscais no total.</div></div><div class="info-cell"><div class="k">Fornecedores / locais</div><div class="v" style="font-size:15px">${escapeHtml(entry.supplierSummary || '—')}</div></div><div class="info-cell"><div class="k">Última compra</div><div class="v">${formatDate(entry.latestDate)}</div><div class="small muted" style="margin-top:6px;">${escapeHtml(entry.latestSupplierName || '—')}</div></div><div class="info-cell"><div class="k">Último preço comparável</div><div class="v">${escapeHtml(entry.latestComparisonLabel || '—')}</div></div><div class="info-cell"><div class="k">Faixa histórica</div><div class="v">${escapeHtml(entry.comparisonRangeLabel || '—')}</div></div><div class="info-cell"><div class="k">Total histórico</div><div class="v">${brl(entry.totalAmount)}</div></div><div class="info-cell"><div class="k">Arquivos de evidência</div><div class="v">${entry.evidenceCount}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(latestPurchase?.evidenceType || procurementEvidenceType(latestPurchase || entry))}">${escapeHtml(latestPurchase?.evidenceSource || entry.evidenceSource || 'Sem referência')}</span></div><div class="stack" style="margin-top:16px;"><section class="panel"><div class="panel-head"><div><h3>Compras desta família</h3><p>Mesma família em fornecedores, datas, packs e preços diferentes.</p></div></div><div class="panel-body" style="padding:0 0 8px 0; overflow:auto;">${renderLedgerPurchaseHistoryTable(entry.occurrences || [], 'Esta ainda é a única compra cadastrada para esta família.')}</div></section><section class="panel"><div class="panel-head"><div><h3>Arquivos e comprovantes</h3><p>Links reais dos arquivos já salvos em inputs para cada compra desta família.</p></div></div><div class="panel-body kpi-list">${(entry.occurrences || []).length ? entry.occurrences.map(item => `<div class="cost-node ${procurementEvidenceClass(item.evidenceType || procurementEvidenceType(item))}"><div class="top"><div><div class="name">${formatDate(item.date)} • ${escapeHtml(item.supplierName || 'Fornecedor não identificado')}</div><div class="meta">${escapeHtml(item.supplierProductSummary || item.description || 'Item')} • ${escapeHtml(item.presentationLabel || `${decimal(item.qty)} ${item.unit || 'un'}`)} • ${escapeHtml(item.comparisonLabel || item.unitPriceLabel || '—')}</div></div><div><strong>${brl(item.totalAmount)}</strong></div></div>${renderEvidenceLinks(item.evidenceInputs || [], 8)}</div>`).join('') : '<div class="empty">Nenhum comprovante vinculado ainda para esta família.</div>'}</div></section><section class="panel"><div class="panel-head"><div><h3>Linhas fiscais da compra mais recente</h3><p>Pesos, packs e descrições individuais que formaram a compra mais nova desta família.</p></div></div><div class="panel-body" style="padding:0 0 8px 0; overflow:auto;">${renderLedgerPurchaseLineItemsTable(latestLines, 'Sem linhas fiscais para a compra mais recente.')}</div></section><section class="panel"><div class="panel-head"><div><h3>Nomes encontrados nos comprovantes</h3><p>Como esta família apareceu escrita nas notas, cupons e pedidos.</p></div></div><div class="panel-body">${entry.rawDescriptions?.length ? `<div class="pill-line">${entry.rawDescriptions.map(label => `<span class="tag">${escapeHtml(label)}</span>`).join('')}</div>` : '<div class="empty">Sem descrições textuais adicionais.</div>'}</div></section></div>`;
}

function renderLedgerPurchaseFamiliesTable(entries = []) {
  if (!entries.length) {
    return `<table><thead><tr><th>Produto</th><th>Histórico recente</th><th>Preço comparável</th><th>Fornecedores</th><th>Valor pago</th><th>Evidências</th></tr></thead><tbody><tr><td colspan="6"><div class="empty">Nenhuma família de compra encontrada no período selecionado.</div></td></tr></tbody></table>`;
  }
  let currentCategory = '';
  const rows = [];
  entries.forEach(entry => {
    if (entry.categoryName !== currentCategory) {
      currentCategory = entry.categoryName;
      rows.push(`<tr><td colspan="6" style="background:rgba(15,23,42,.78); border-top:1px solid var(--line);"><strong>${escapeHtml(currentCategory)}</strong><div class="small muted">Famílias agrupadas para leitura gerencial deste grupo.</div></td></tr>`);
    }
    rows.push(`<tr data-ledger-item="${entry.key}" class="${state.selectedLedgerItemId===entry.key?'active':''}"><td><strong>${escapeHtml(entry.familyName || entry.description || 'Item')}</strong><div class="small muted">${entry.occurrenceCount || 0} compra(s) • ${(entry.lineItems || []).length} linha(s) fiscais${entry.resourceType && entry.resourceType !== 'other' ? ` • ${escapeHtml(resourceTypeLabel(entry.resourceType))}` : ''}</div></td><td>${entry.historySummaryHtml || '<span class="small muted">Sem histórico.</span>'}</td><td><strong>${escapeHtml(entry.latestComparisonLabel || '—')}</strong><div class="small muted">Faixa ${escapeHtml(entry.comparisonRangeLabel || '—')}</div></td><td><strong>${entry.supplierNames?.length || 0}</strong><div class="small muted">${escapeHtml(entry.supplierSummary || 'Sem fornecedor')}</div></td><td><strong>${brl(entry.totalAmount)}</strong><div class="small muted">Última ${brl(entry.latestPurchase?.totalAmount || 0)} • ${entry.occurrenceCount || 0} compra(s)</div></td><td>${renderEvidenceLinks(entry.evidenceInputs || [], 3)}</td></tr>`);
  });
  return `<table><thead><tr><th>Produto</th><th>Histórico recente</th><th>Preço comparável</th><th>Fornecedores</th><th>Valor pago</th><th>Evidências</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
}

function renderLedger() {
  const isItemView = state.ledgerViewMode === 'items';
  const isTableLayout = isItemView && state.ledgerLayoutMode === 'table';
  const itemFacts = isItemView ? filteredLedgerPurchaseOccurrences() : [];
  const allItemFacts = isItemView ? ledgerPurchaseOccurrenceEntries() : [];
  const entries = isItemView ? buildPurchaseFamilyEntries(itemFacts) : filteredLedgerEntries();
  const allEntries = isItemView ? ledgerPurchaseItemEntries() : ledgerEntries();
  if (isItemView) {
    if (!state.selectedLedgerItemId || !entries.find(entry => entry.key === state.selectedLedgerItemId)) {
      state.selectedLedgerItemId = entries[0]?.key || null;
    }
  } else if (!state.selectedLedgerEntryId || !entries.find(entry => entry.key === state.selectedLedgerEntryId)) {
    state.selectedLedgerEntryId = entries[0]?.key || null;
  }
  const selected = isItemView
    ? entries.find(entry => entry.key === state.selectedLedgerItemId) || null
    : entries.find(entry => entry.key === state.selectedLedgerEntryId) || null;
  const range = ledgerRange();
  const amountSource = isItemView ? itemFacts : entries;
  const totalAmount = amountSource.reduce((sum, entry) => sum + entry.totalAmount, 0);
  const paidAmount = amountSource.filter(entry => entry.paymentStatus === 'paid').reduce((sum, entry) => sum + entry.totalAmount, 0);
  const openAmount = amountSource.filter(entry => entry.paymentStatus !== 'paid').reduce((sum, entry) => sum + entry.totalAmount, 0);
  const undatedEntries = (isItemView ? allItemFacts : allEntries).filter(entry => !entry.date);
  const undatedAmount = undatedEntries.reduce((sum, entry) => sum + entry.totalAmount, 0);
  const repeatedKeys = isItemView
    ? entries.filter(entry => (entry.occurrenceCount || 0) > 1).length
    : [...entries.reduce((map, entry) => {
      const key = entry.historyKey || entry.key;
      if (!map.has(key)) map.set(key, 0);
      map.set(key, map.get(key) + 1);
      return map;
    }, new Map()).values()].filter(count => count > 1).length;
  const supplierCount = new Set((isItemView ? itemFacts : entries).map(entry => entry.supplierName || entry.supplierId).filter(Boolean)).size;
  const monthlySummary = [...(isItemView ? itemFacts : entries).reduce((map, entry) => {
    const key = entry.referencePeriod || monthKey(entry.date) || 'sem_data';
    if (!map.has(key)) map.set(key, { key, total: 0, count: 0, paid: 0 });
    const item = map.get(key);
    item.total += entry.totalAmount;
    item.count += 1;
    if (entry.paymentStatus === 'paid') item.paid += entry.totalAmount;
    return map;
  }, new Map()).values()].sort((a, b) => {
    if (a.key === 'sem_data') return 1;
    if (b.key === 'sem_data') return -1;
    return String(b.key).localeCompare(String(a.key));
  }).slice(0, 6);
  const supplierSummary = [...(isItemView ? itemFacts : entries).reduce((map, entry) => {
    const key = entry.supplierName || 'Sem fornecedor';
    if (!map.has(key)) map.set(key, { name: key, total: 0, count: 0 });
    const item = map.get(key);
    item.total += entry.totalAmount;
    item.count += 1;
    return map;
  }, new Map()).values()].sort((a, b) => b.total - a.total).slice(0, 6);
  const ledgerTableHtml = isItemView
    ? renderLedgerPurchaseFamiliesTable(entries)
    : `<table><thead><tr><th>Lançamento</th><th>Tipo</th><th>Fornecedor</th><th>Data</th><th>Pagamento</th><th>Valor</th><th>Evidências</th></tr></thead><tbody>${entries.length ? entries.map(entry => `<tr data-ledger-entry="${entry.key}" class="${state.selectedLedgerEntryId===entry.key?'active':''}"><td><strong>${escapeHtml(entry.label)}</strong><div class="small muted">${escapeHtml(entry.documentNumber || entry.id)}</div></td><td>${escapeHtml(entry.category)}</td><td>${escapeHtml(entry.supplierName || '—')}</td><td>${formatDate(entry.date)}</td><td><span class="status ${paymentStatusTone(entry.paymentStatus)}">${paymentStatusLabel(entry.paymentStatus)}</span><div class="small muted">${escapeHtml(entry.paymentMethod || '—')}</div></td><td>${brl(entry.totalAmount)}</td><td>${entry.evidenceCount}</td></tr>`).join('') : `<tr><td colspan="7"><div class="empty">Nenhum lançamento encontrado no período selecionado.</div></td></tr>`}</tbody></table>`;
  const ledgerDetailHtml = isItemView ? renderLedgerPurchaseItemDetail(selected) : renderLedgerEntryDetail(selected);

  qs('#page-ledger').innerHTML = `
    <div class="stack">
      <section class="panel hero-panel">
        <div class="panel-body hero-grid">
          <div class="hero-copy">
            <span class="tag">${isItemView ? 'Famílias de compra com histórico' : 'Gastos por data e período'}</span>
            <h3>${entries.length ? `${entries.length} ${isItemView ? 'família(s) de produto' : 'lançamento(s)'} no filtro atual` : isItemView ? 'Nenhuma família de compra encontrada neste filtro' : 'Nenhum lançamento encontrado neste filtro'}</h3>
            <p>${isItemView ? 'Aqui o app agrupa compras semelhantes por categoria e família de produto. Assim a leitura fica mais humana: mesma muçarela, mesmo catupiry, mesma carne ou mesma embalagem aparecem juntos, com histórico por fornecedor, data, pack, preço comparável e links reais dos comprovantes.' : 'Esta leitura junta compras com fornecedor e gastos operacionais em uma linha do tempo única. A ideia é simples: cada saída de caixa relevante precisa carregar data, valor, responsável e evidência ligada ao diretório docs/inputs.'}</p>
            <div class="hero-actions">
              <button class="btn primary" id="ledgerNewPurchase">Nova compra</button>
              <button class="btn ghost" id="ledgerNewExpense">Novo gasto</button>
            </div>
          </div>
          <div class="hero-summary">
            <div class="summary-card"><strong>${brl(totalAmount)}</strong><span>Total filtrado${range.start || range.end ? ` • ${formatDate(range.start)} a ${formatDate(range.end)}` : ' • todo o histórico visível'}.</span></div>
            <div class="summary-card"><strong>${isItemView ? brl(totalAmount) : brl(paidAmount)}</strong><span>${isItemView ? 'Valor pago acumulado das famílias visíveis.' : 'Pago no filtro atual.'}</span></div>
            <div class="summary-card"><strong>${isItemView ? supplierCount : undatedEntries.length}</strong><span>${isItemView ? 'Fornecedor(es) participam do recorte atual.' : `Lançamentos ainda sem data (${brl(undatedAmount)}).`}</span></div>
          </div>
        </div>
      </section>
      <section class="panel">
        <div class="panel-head"><div><h3>Filtros e visão</h3><p>${isItemView ? 'Use esta visão para comparar a mesma família de compra do cardápio em fornecedores diferentes, com datas, packs, valores e comprovantes no mesmo lugar.' : 'Recorte por período, tipo, fornecedor e status de pagamento.'}</p></div><div class="tabs"><button class="${state.ledgerViewMode==='timeline'?'active':''}" data-ledger-view="timeline">Timeline financeira</button><button class="${state.ledgerViewMode==='items'?'active':''}" data-ledger-view="items">Mapa de compras</button></div></div>
        <div class="panel-body">
          <div class="stack">
            <div class="filter-row"><select class="select" id="ledgerPreset"><option value="all" ${state.ledgerPreset==='all'?'selected':''}>Todo o histórico</option><option value="month" ${state.ledgerPreset==='month'?'selected':''}>Mês atual</option><option value="days30" ${state.ledgerPreset==='days30'?'selected':''}>Últimos 30 dias</option><option value="days90" ${state.ledgerPreset==='days90'?'selected':''}>Últimos 90 dias</option><option value="year" ${state.ledgerPreset==='year'?'selected':''}>Ano atual</option><option value="custom" ${state.ledgerPreset==='custom'?'selected':''}>Período personalizado</option></select><input class="input" id="ledgerStart" type="date" value="${escapeHtml(range.start || state.ledgerStartDate || '')}"><input class="input" id="ledgerEnd" type="date" value="${escapeHtml(range.end || state.ledgerEndDate || '')}">${!isItemView ? `<select class="select" id="ledgerType"><option value="all">Todos os tipos</option><option value="purchase" ${state.ledgerType==='purchase'?'selected':''}>Compras</option><option value="expense" ${state.ledgerType==='expense'?'selected':''}>Gastos</option></select>` : ''}<select class="select" id="ledgerSupplier"><option value="all">Todos os fornecedores</option>${visibleRecords('suppliers').map(item => `<option value="${item.id}" ${state.ledgerSupplierId===item.id?'selected':''}>${escapeHtml(item.name)}</option>`).join('')}</select>${!isItemView ? `<select class="select" id="ledgerPayment"><option value="all">Todos os status</option><option value="paid" ${state.ledgerPaymentStatus==='paid'?'selected':''}>Pago</option><option value="scheduled" ${state.ledgerPaymentStatus==='scheduled'?'selected':''}>Agendado</option><option value="pending" ${state.ledgerPaymentStatus==='pending'?'selected':''}>Pendente</option></select>` : ''}</div>
            ${isItemView ? `<div class="filter-row"><input class="input" id="ledgerItemSearch" value="${escapeHtml(state.ledgerItemSearch || '')}" placeholder="Buscar família, comprovante, fornecedor ou descrição do item"><select class="select" id="ledgerItemResourceType"><option value="all">Todos os tipos de item</option><option value="ingredient" ${state.ledgerItemResourceType==='ingredient'?'selected':''}>Ingredientes</option><option value="packaging" ${state.ledgerItemResourceType==='packaging'?'selected':''}>Embalagens</option><option value="product" ${state.ledgerItemResourceType==='product'?'selected':''}>Produtos</option><option value="other" ${state.ledgerItemResourceType==='other'?'selected':''}>Compras avulsas / livres</option></select></div>` : ''}
            <div class="grid-4">
              <div class="metric"><div class="label">${isItemView ? 'Famílias mapeadas' : 'Lançamentos filtrados'}</div><div class="value">${entries.length}</div><div class="sub">${isItemView ? 'Cada linha junta a mesma família ao longo do histórico.' : 'Compras e gastos no recorte atual.'}</div></div>
              <div class="metric"><div class="label">${isItemView ? 'Valor histórico pago' : 'Aberto / a pagar'}</div><div class="value">${isItemView ? brl(totalAmount) : brl(openAmount)}</div><div class="sub">${isItemView ? 'Tudo o que já foi desembolsado para as famílias deste recorte.' : 'Tudo que ainda não está marcado como pago.'}</div></div>
              <div class="metric"><div class="label">${isItemView ? 'Média por ocorrência' : 'Ticket médio'}</div><div class="value">${amountSource.length ? brl(totalAmount / amountSource.length) : '—'}</div><div class="sub">${isItemView ? 'Média das compras encontradas dentro do filtro.' : 'Valor médio por lançamento.'}</div></div>
              <div class="metric"><div class="label">${isItemView ? 'Famílias com recompra' : 'Sem data'}</div><div class="value">${isItemView ? repeatedKeys : undatedEntries.length}</div><div class="sub">${isItemView ? `${supplierCount} fornecedor(es) aparecem no recorte atual.` : 'Prioridade de saneamento para fechar o histórico.'}</div></div>
            </div>
          </div>
        </div>
      </section>
      <section class="panel">
        <div class="panel-head"><div><h3>${isItemView ? 'Mapa geral de compras' : 'Timeline financeira'}</h3><p>${isItemView ? 'Clique em uma família para ver cada compra, com fornecedor, data, pack, valor pago e links dos comprovantes.' : 'Clique em um lançamento para ver itens, evidências e metadados.'}</p></div>${isItemView ? `<div class="tabs"><button class="${state.ledgerLayoutMode==='split'?'active':''}" data-ledger-layout="split">Painel lateral</button><button class="${state.ledgerLayoutMode==='table'?'active':''}" data-ledger-layout="table">Tabela ampla</button><button class="btn ghost" id="ledgerOpenNewTab">Abrir em nova aba</button></div>` : ''}</div>
        <div class="panel-body">
          ${isTableLayout ? `<div class="stack"><div class="panel" style="box-shadow:none;"><div class="panel-body" style="padding:0 0 8px 0; overflow:auto;">${ledgerTableHtml}</div></div><div class="panel" style="box-shadow:none;"><div class="panel-body" id="ledgerDetail">${ledgerDetailHtml}</div></div></div>` : `<div class="split"><div class="panel" style="box-shadow:none;"><div class="panel-body" style="padding:0 0 8px 0; overflow:auto;">${ledgerTableHtml}</div></div><div class="panel" style="box-shadow:none;"><div class="panel-body" id="ledgerDetail">${ledgerDetailHtml}</div></div></div>`}
        </div>
      </section>
      <div class="grid-2">
        <section class="panel"><div class="panel-head"><div><h3>Resumo por mês</h3><p>Leitura rápida dos meses mais recentes no filtro atual.</p></div></div><div class="panel-body kpi-list">${monthlySummary.length ? monthlySummary.map(item => `<div class="kpi-row"><div><strong>${item.key === 'sem_data' ? 'Sem data' : formatMonthKey(item.key)}</strong><div class="small muted">${item.count} ${isItemView ? 'compra(s)' : 'lançamento(s)'}</div></div><div style="text-align:right"><div><strong>${brl(item.total)}</strong></div><div class="small muted">Pago ${brl(item.paid)}</div></div></div>`).join('') : '<div class="empty">Sem dados suficientes para resumir por mês.</div>'}</div></section>
        <section class="panel"><div class="panel-head"><div><h3>Concentração por fornecedor</h3><p>Quem mais pesa no gasto filtrado agora.</p></div></div><div class="panel-body kpi-list">${supplierSummary.length ? supplierSummary.map(item => `<div class="kpi-row"><div><strong>${escapeHtml(item.name)}</strong><div class="small muted">${item.count} ${isItemView ? 'compra(s)' : 'lançamento(s)'}</div></div><div><strong>${brl(item.total)}</strong></div></div>`).join('') : '<div class="empty">Sem dados suficientes para resumir por fornecedor.</div>'}</div></section>
      </div>
    </div>`;

  qs('#ledgerPreset').onchange = (e) => {
    state.ledgerPreset = e.target.value;
    if (state.ledgerPreset !== 'custom') {
      state.ledgerStartDate = '';
      state.ledgerEndDate = '';
    }
    renderLedger();
  };
  qs('#ledgerStart').onchange = (e) => {
    state.ledgerPreset = 'custom';
    state.ledgerStartDate = e.target.value;
    renderLedger();
  };
  qs('#ledgerEnd').onchange = (e) => {
    state.ledgerPreset = 'custom';
    state.ledgerEndDate = e.target.value;
    renderLedger();
  };
  if (qs('#ledgerType')) qs('#ledgerType').onchange = (e) => {
    state.ledgerType = e.target.value;
    renderLedger();
  };
  qs('#ledgerSupplier').onchange = (e) => {
    state.ledgerSupplierId = e.target.value;
    renderLedger();
  };
  if (qs('#ledgerPayment')) qs('#ledgerPayment').onchange = (e) => {
    state.ledgerPaymentStatus = e.target.value;
    renderLedger();
  };
  if (qs('#ledgerItemSearch')) qs('#ledgerItemSearch').oninput = (e) => {
    state.ledgerItemSearch = e.target.value;
    renderLedger();
  };
  if (qs('#ledgerItemResourceType')) qs('#ledgerItemResourceType').onchange = (e) => {
    state.ledgerItemResourceType = e.target.value;
    renderLedger();
  };
  qs('#ledgerNewPurchase').onclick = () => openEntityModal('purchaseOrders');
  qs('#ledgerNewExpense').onclick = () => openEntityModal('expenseEntries');
  qsa('[data-ledger-view]').forEach(btn => btn.onclick = () => {
    state.ledgerViewMode = btn.dataset.ledgerView;
    if (state.ledgerViewMode === 'items' && state.ledgerType === 'expense') state.ledgerType = 'all';
    renderLedger();
  });
  qsa('[data-ledger-layout]').forEach(btn => btn.onclick = () => {
    state.ledgerLayoutMode = normalizedLedgerLayoutMode(btn.dataset.ledgerLayout);
    renderLedger();
  });
  qsa('[data-ledger-entry]').forEach(row => row.onclick = (event) => {
    if (event.target.closest('a, button')) return;
    state.selectedLedgerEntryId = row.dataset.ledgerEntry;
    renderLedger();
  });
  qsa('[data-ledger-item]').forEach(row => row.onclick = (event) => {
    if (event.target.closest('a, button')) return;
    state.selectedLedgerItemId = row.dataset.ledgerItem;
    renderLedger();
  });
  if (qs('#ledgerOpenNewTab')) qs('#ledgerOpenNewTab').onclick = openLedgerViewInNewTab;
  bindDetailActions();
}

function renderNav() {
  const navItems = [
    ['dashboard','Dashboard'],
    ['catalog','Catálogo'],
    ['ledger','Lançamentos'],
    ['resources','Cadastros']
  ];
  qs('#nav').innerHTML = navItems.map(([id,label]) => `
    <button class="${state.page===id?'active':''}" data-page="${id}">
      <span>${label}</span>
      <span class="tag">${id==='catalog' ? activeCatalogProducts().length+' itens' : id==='ledger' ? ledgerEntries().length+' lanç.' : id==='resources' ? 'BOM' : 'visão geral'}</span>
    </button>`).join('');
  qsa('#nav button').forEach(btn => btn.onclick = () => setPage(btn.dataset.page));
}

function renderSideStats() {
  const active = activeCatalogProducts(state.operationView);
  const avg = active.length ? active.map(p => computeProduct(p.id, state.operationView)?.totalCost || 0).reduce((a,b)=>a+b,0) / active.length : 0;
  qs('#sideStats').innerHTML = `
    <div class="mini-card"><div class="label">Operação em foco</div><div class="value" style="font-size:18px">${operationLabel()}</div></div>
    <div class="mini-card"><div class="label">Itens ativos no cardápio</div><div class="value">${active.length}</div></div>
    <div class="mini-card"><div class="label">Rateio fixo por item</div><div class="value">${brl(fixedSharePerCatalogItem(state.operationView))}</div></div>
    <div class="mini-card"><div class="label">Custo médio total</div><div class="value">${brl(avg)}</div></div>`;
}

function renderPageMeta() {
  const meta = pageMeta[state.page];
  qs('#pageTitle').textContent = meta.title;
  qs('#pageSubtitle').textContent = `${meta.subtitle} Visão atual: ${operationLabel()}.`;
  qsa('.page').forEach(p => p.classList.remove('active'));
  qs(`#page-${state.page}`).classList.add('active');
  renderOperationSelector();
  renderSavedStatus();
}

function renderDashboard() {
  const active = activeCatalogProducts(state.operationView);
  const computed = active.map(p => computeProduct(p.id, state.operationView)).filter(Boolean);
  const totalItems = active.length;
  const totalFixed = totalFixedCosts(state.operationView);
  const avgMargin = computed.length ? computed.reduce((sum,c)=>sum+c.marginPct,0)/computed.length : 0;
  const avgAutoGap = computed.length ? computed.reduce((sum,c)=>sum+(c.autoSalePrice-c.directCost),0)/computed.length : 0;
  const lowMargin = [...computed].sort((a,b)=>a.marginPct-b.marginPct).slice(0,5);
  const highCost = [...computed].sort((a,b)=>b.totalCost-a.totalCost).slice(0,6);
  const urgent = computed.filter(c => c.marginPct < 40);
  const nearGoal = computed.filter(c => c.marginPct >= 40 && c.marginPct < targetMarginFromMarkupPct());
  const healthiest = [...computed].sort((a,b)=>b.marginPct-a.marginPct).slice(0,1)[0] || null;
  const cats = visibleRecords('categories', state.operationView).filter(c => c.active !== false).map(cat => {
    const count = active.filter(p => p.categoryId === cat.id).length;
    const avgCost = count ? active.filter(p => p.categoryId === cat.id).map(p => computeProduct(p.id, state.operationView)?.totalCost||0).reduce((a,b)=>a+b,0)/count : 0;
    return { cat, count, avgCost };
  }).filter(x => x.count > 0);

  qs('#page-dashboard').innerHTML = `
    <div class="stack">
      <section class="panel hero-panel">
        <div class="panel-body hero-grid">
          <div class="hero-copy">
            <span class="tag">Leitura rápida do momento</span>
            <h3>${urgent.length ? `${urgent.length} item(ns) pedem correção agora` : 'Sua operação está sem itens críticos agora'}</h3>
            <p>${urgent.length ? `A margem média sem rateio fixo ainda está em ${pct(avgMargin)} e os itens abaixo de 40% concentram o maior risco de preço e rentabilidade em ${operationLabel().toLowerCase()}.` : `A margem média sem rateio fixo está em ${pct(avgMargin)}. A regra padrão de preço está em ${defaultMarkupPct()}% sobre o custo direto, ou seja, custo x ${markupMultiplier().toFixed(2)}. No iFood, o app ainda soma 27% sobre esse valor.`}</p>
            <div class="hero-actions">
              <button class="btn primary" id="dashReviewUrgent">${urgent.length ? 'Revisar itens críticos' : 'Abrir catálogo'}</button>
              <button class="btn ghost" id="dashOpenSettings">Ajustar meta e rateio</button>
            </div>
          </div>
          <div class="hero-summary">
            <div class="summary-card"><strong>${urgent.length}</strong><span>Itens abaixo de 40% de margem sem rateio em ${operationLabel().toLowerCase()}.</span></div>
            <div class="summary-card"><strong>${nearGoal.length}</strong><span>Itens próximos da regra ideal, mas ainda abaixo dela.</span></div>
            <div class="summary-card"><strong>${healthiest ? escapeHtml(healthiest.product.name) : 'Sem destaque'}</strong><span>${healthiest ? `Melhor margem atual: ${pct(healthiest.marginPct)}` : 'Cadastre itens para ver destaques.'}</span></div>
          </div>
        </div>
      </section>
      <div class="action-strip">
        <div class="action-card"><div class="eyebrow">Prioridade</div><div class="big">${urgent.length}</div><div class="small muted">Itens abaixo da faixa mínima de conforto.</div><div class="pill-line"><button class="btn ghost" data-dashboard-action="urgent">Abrir lista</button></div></div>
        <div class="action-card"><div class="eyebrow">Reprecificação</div><div class="big">${brl(avgAutoGap)}</div><div class="small muted">Lucro bruto médio usando a regra automática sobre o custo direto.</div><div class="pill-line"><button class="btn ghost" data-dashboard-action="expensive">Ver maiores custos</button></div></div>
        <div class="action-card"><div class="eyebrow">Cadastro base</div><div class="big">${visibleRecords('ingredients').length + visibleRecords('recipes').length + visibleRecords('packaging').length}</div><div class="small muted">Cadastros visíveis para esta operação.</div><div class="pill-line"><button class="btn ghost" data-dashboard-action="resources">Abrir cadastros</button></div></div>
      </div>
      <div class="grid-4">
        <div class="metric"><div class="label">Itens finais ativos</div><div class="value">${totalItems}</div><div class="sub">Contagem usada no rateio automático.</div></div>
        <div class="metric"><div class="label">Custos fixos mensais</div><div class="value">${brl(totalFixed)}</div><div class="sub">${state.operationView === 'consolidated' ? 'Soma de custos compartilhados e exclusivos.' : `Parcela alocada para ${operationLabel().toLowerCase()}.`}</div></div>
        <div class="metric"><div class="label">Rateio fixo por item</div><div class="value">${brl(fixedSharePerCatalogItem(state.operationView))}</div><div class="sub">Modo: ${db.settings.fixedAllocationMode === 'catalog_items' ? 'por item ativo do cardápio' : 'por unidades mensais'}.</div></div>
        <div class="metric"><div class="label">Margem média atual</div><div class="value">${pct(avgMargin)}</div><div class="sub">Calculada sobre o custo direto. Regra: ${defaultMarkupPct()}% sobre o custo = custo x ${markupMultiplier().toFixed(2)}. iFood = preço base x ${ifoodMultiplier().toFixed(2)}.</div></div>
      </div>
      <div class="grid-2">
        <section class="panel"><div class="panel-head"><div><h3>Alertas de margem</h3><p>Itens que mais precisam de atenção.</p></div></div><div class="panel-body kpi-list">${lowMargin.length ? lowMargin.map(c => `<div class="kpi-row clickable" data-jump-product="${c.product.id}"><div><strong>${escapeHtml(c.product.name)}</strong><div class="small muted">${categoryName(c.product.categoryId)}</div></div><div style="text-align:right"><div class="status ${statusClass(c.marginPct)}"><strong>${pct(c.marginPct)}</strong></div><div class="small muted">Preço ${brl(c.salePrice)} • custo direto ${brl(c.directCost)}</div></div></div>`).join('') : '<div class="empty">Nenhum item ativo.</div>'}</div></section>
        <section class="panel"><div class="panel-head"><div><h3>Maior impacto de custo</h3><p>Itens mais caros para produzir hoje.</p></div></div><div class="panel-body kpi-list">${highCost.length ? highCost.map(c => `<div class="kpi-row clickable" data-jump-product="${c.product.id}"><div><strong>${escapeHtml(c.product.name)}</strong><div class="small muted">${categoryName(c.product.categoryId)}</div></div><div style="text-align:right"><div><strong>${brl(c.totalCost)}</strong></div><div class="small muted">Preço pela regra atual: ${brl(c.autoSalePrice)}</div></div></div>`).join('') : '<div class="empty">Nenhum item ativo.</div>'}</div></section>
      </div>
      <div class="grid-2">
        <section class="panel"><div class="panel-head"><div><h3>Resumo por categoria</h3><p>Quantidade de itens e custo médio total.</p></div></div><div class="panel-body cat-grid">${cats.map(({cat,count,avgCost}) => `<div class="cat-card"><h4>${escapeHtml(cat.name)}</h4><p>${count} item(ns) ativos</p><div class="pill-line"><span class="tag">custo médio ${brl(avgCost)}</span></div></div>`).join('')}</div></section>
        <section class="panel"><div class="panel-head"><div><h3>Lógica do custo</h3><p>Como o PWA calcula o custo final.</p></div></div><div class="panel-body"><div class="note">1. Ingredientes, preparos, embalagens e produtos podem ser exclusivos de uma operação ou compartilhados.<br>2. O custo fixo mensal e o rateio fixo continuam visíveis como referência gerencial.<br>3. Nesta fase, o preço de venda automático e a margem principal usam o custo direto do item, sem rateio fixo.<br>4. O campo <strong>preço com rateio fixo</strong> aparece só para consulta gerencial e não é o preço principal em uso.<br>5. A regra principal segue ${defaultMarkupPct()}% sobre o custo direto, ou seja, custo x ${markupMultiplier().toFixed(2)}. O <strong>preço iFood</strong> pega esse valor base e aplica mais 27%.</div><div class="pill-line"><span class="tag">Lucro bruto medio pela regra: ${brl(avgAutoGap)}</span><span class="tag">Preparos visíveis: ${visibleRecords('recipes').length}</span><span class="tag">Ingredientes visíveis: ${visibleRecords('ingredients').length}</span><span class="tag">Embalagens visíveis: ${visibleRecords('packaging').length}</span></div></div></section>
      </div>
    </div>`;

  const urgentBtn = qs('#dashReviewUrgent');
  if (urgentBtn) urgentBtn.onclick = () => {
    const target = lowMargin[0]?.product;
    jumpToCatalog({ productId: target?.id || null, categoryId: target?.categoryId || 'all' });
  };
  const settingsBtn = qs('#dashOpenSettings');
  if (settingsBtn) settingsBtn.onclick = () => {
    state.page = 'resources';
    state.resourceTab = 'settings';
    state.selectedResourceId = null;
    closeMobileNav();
    renderAll();
  };
  qsa('[data-dashboard-action="urgent"]').forEach(btn => btn.onclick = () => {
    const target = lowMargin[0]?.product;
    jumpToCatalog({ productId: target?.id || null, categoryId: target?.categoryId || 'all' });
  });
  qsa('[data-dashboard-action="expensive"]').forEach(btn => btn.onclick = () => {
    const target = highCost[0]?.product;
    jumpToCatalog({ productId: target?.id || null, categoryId: target?.categoryId || 'all' });
  });
  qsa('[data-dashboard-action="resources"]').forEach(btn => btn.onclick = () => {
    state.page = 'resources';
    state.resourceTab = 'ingredients';
    state.selectedResourceId = null;
    closeMobileNav();
    renderAll();
  });
  qsa('[data-jump-product]').forEach(row => row.onclick = () => jumpToCatalog({ productId: row.dataset.jumpProduct }));
}

function renderTree(nodes) {
  return `<div class="cost-tree">${nodes.map(node => `
    <div class="cost-node ${node.pricingMode === 'pass_through' ? 'pass-through' : ''}">
      <div class="top"><div><div class="name">${escapeHtml(node.title)}</div><div class="meta">${escapeHtml(componentTypeLabel(node.refType))} • usa ${escapeHtml(usageLabelForNode(node))}${node.meta ? ' • ' + escapeHtml(node.meta) : ''}${node.pricingMode ? ' • ' + escapeHtml(componentPricingModeLabel(node.pricingMode)) : ''}</div></div><div><strong>${brl(node.cost)}</strong></div></div>
      ${node.children?.length ? `<div class="children">${renderTree(node.children)}</div>` : ''}
    </div>`).join('')}</div>`;
}

function nodeIcon(node = {}) {
  if (node.refType === 'packaging') return 'PKG';
  if (node.refType === 'recipe') return 'PRE';
  if (node.refType === 'product') return 'ITM';
  return 'INS';
}

function flattenNodes(nodes = []) {
  return (nodes || []).flatMap(node => [node, ...flattenNodes(node.children || [])]);
}

function renderVisualNode(node = {}) {
  const img = resourceImageSrc(node.refType, node.refId);
  const thumb = img
    ? `<img class="visual-thumb" src="${escapeHtml(img)}" alt="${escapeHtml(node.title || 'Insumo')}" loading="lazy">`
    : `<div class="visual-icon">${escapeHtml(nodeIcon(node))}</div>`;
  return `<div class="visual-node">
    ${thumb}
    <div><strong>${escapeHtml(node.title)}</strong><div class="small muted">${escapeHtml(componentTypeLabel(node.refType))} • usa ${escapeHtml(usageLabelForNode(node))}${node.pricingMode ? ` • ${escapeHtml(componentPricingModeLabel(node.pricingMode))}` : ''}</div></div>
    <div style="text-align:right"><strong>${brl(node.cost)}</strong><div class="small muted">${escapeHtml(node.refType === 'packaging' ? 'embalagem' : node.refType === 'recipe' ? 'preparo' : node.refType === 'product' ? 'item' : 'insumo')}</div></div>
  </div>`;
}

function addonSaleLabel(addon = {}) {
  if (safe(addon.effectiveSalePrice) > 0) return brl(addon.effectiveSalePrice);
  if (addon.chargeMode === 'included' || addon.priceCalculation === 'free') return 'Incluído';
  return brl(0);
}

function renderVisualNodeList(nodes = [], empty = 'Nada mapeado nesta camada.') {
  return nodes.length ? `<div class="visual-list">${nodes.map(renderVisualNode).join('')}</div>` : `<div class="empty">${escapeHtml(empty)}</div>`;
}

function productLinkedPurchaseFamilies(product = {}) {
  const resourceIds = new Set(flattenNodes(resolveComponentList(product.components || [], [`product:${product.id}:purchase-view`]))
    .filter(node => ['ingredient', 'packaging', 'product'].includes(node.refType))
    .map(node => node.refId));
  return buildPurchaseFamilyEntries(ledgerPurchaseOccurrenceEntries().filter(item => resourceIds.has(item.resourceId))).slice(0, 8);
}

function renderProductDetailTabs(activeTab) {
  const tabs = [
    ['resumo', 'Resumo'],
    ['composicao', 'Composição'],
    ['adicionais', 'Adicionais'],
    ['embalagens', 'Embalagens'],
    ['compras', 'Compras']
  ];
  return `<div class="detail-tabs">${tabs.map(([id, label]) => `<button class="${activeTab === id ? 'active' : ''}" data-catalog-tab="${id}">${label}</button>`).join('')}</div>`;
}

function renderProductSummaryTab(c, basePortions, addonGroups) {
  const p = c.product;
  return `<div class="stack">
    <div class="price-edit-strip">
      <div class="info-cell"><div class="k">Preço de venda</div><div class="v">${brl(c.salePrice)}</div></div>
      <div class="info-cell"><div class="k">Custo direto</div><div class="v">${brl(c.directCost)}</div></div>
      <div class="info-cell"><div class="k">Margem sem rateio</div><div class="v status ${statusClass(c.marginPct)}">${pct(c.marginPct)}</div></div>
    </div>
    <div class="info-grid">
      <div class="info-cell"><div class="k">Preço iFood</div><div class="v">${brl(c.ifoodSalePrice)}</div></div>
      <div class="info-cell"><div class="k">Preço pela regra atual</div><div class="v">${brl(c.autoSalePrice)}</div></div>
      <div class="info-cell"><div class="k">Base que entra no markup</div><div class="v">${brl(c.markupBaseCost)}</div></div>
      <div class="info-cell"><div class="k">Só repassa custo</div><div class="v">${brl(c.passThroughCost)}</div></div>
      <div class="info-cell"><div class="k">Porções de base</div><div class="v">${basePortions.length}</div></div>
      <div class="info-cell"><div class="k">Grupos de escolha</div><div class="v">${addonGroups.length}</div></div>
      <div class="info-cell"><div class="k">Regra de preço</div><div class="v" style="font-size:15px">${escapeHtml(pricingRuleLabel(p))}</div></div>
      <div class="info-cell"><div class="k">Caminho no cardápio</div><div class="v" style="font-size:15px">${escapeHtml(catalogPathLabel(p))}</div></div>
    </div>
    <section><div class="catalog-section-head"><div><h3>Leitura operacional</h3><p>Porções principais para revisar preço sem entrar na árvore técnica.</p></div></div>${renderVisualNodeList(c.nodes || [])}</section>
  </div>`;
}

function renderProductCompositionTab(c) {
  const topNodes = c.nodes || [];
  const ingredientNodes = flattenNodes(topNodes).filter(node => node.refType === 'ingredient');
  const recipeNodes = flattenNodes(topNodes).filter(node => node.refType === 'recipe');
  return `<div class="stack">
    <section><div class="catalog-section-head"><div><h3>Camadas principais</h3><p>O que entra diretamente no item vendido.</p></div></div>${renderVisualNodeList(topNodes)}</section>
    <section><div class="catalog-section-head"><div><h3>Preparos usados</h3><p>Receitas internas que transformam insumos em base operacional.</p></div></div>${renderVisualNodeList(recipeNodes, 'Este item não usa preparo interno.')}</section>
    <section><div class="catalog-section-head"><div><h3>Insumos finais da composição</h3><p>Ingredientes que aparecem por trás dos preparos e porções.</p></div></div>${renderVisualNodeList(ingredientNodes, 'Nenhum ingrediente direto encontrado.')}</section>
    <section><div class="catalog-section-head"><div><h3>Árvore técnica completa</h3><p>Visão detalhada para auditoria de custo.</p></div></div>${renderTree(topNodes)}</section>
  </div>`;
}

function renderProductAddonsTab(c) {
  const addonGroups = groupComputedAddons(c.addons || []);
  if (!addonGroups.length) return '<div class="empty">Este item não possui adicionais ou escolhas.</div>';
  return `<div class="group-stack">${addonGroups.map(group => `
    <div class="group-card">
      <div class="group-head">
        <div><div class="small muted">Grupo do cardápio</div><h4>${escapeHtml(group.name)}</h4><p>${escapeHtml(addonGroupRuleLabel(group))} • ${group.items.length} opção(ões) • ${escapeHtml(addonGroupPriceLabel(group))}</p></div>
        <div class="legend"><span class="tag">${escapeHtml(group.groupType || 'addon')}</span>${group.required ? '<span class="tag">obrigatório</span>' : '<span class="tag">opcional</span>'}</div>
      </div>
      <div class="catalog-grid">${group.items.map(addon => `
        <div class="library-card">
          <div class="addon-card-head">
            ${addonImageSrc(addon) ? `<img class="addon-thumb" src="${escapeHtml(addonImageSrc(addon))}" alt="${escapeHtml(addon.name || 'Adicional')}" loading="lazy">` : `<div class="addon-thumb visual-icon">${escapeHtml(nodeIcon((addon.nodes || [])[0] || {}))}</div>`}
            <div>
              <div class="k">${escapeHtml(addon.chargeMode === 'included' ? 'incluído na escolha' : 'adicional')}</div>
              <div class="v">${escapeHtml(addon.name)}</div>
            </div>
          </div>
          <div class="small muted" style="margin-top:6px;">${escapeHtml(portionSummaryText(topLevelPortions(addon.nodes || [])) || 'Sem porção detalhada')}</div>
          <div class="price-edit-strip" style="grid-template-columns:repeat(2,minmax(0,1fr));">
            <div class="info-cell"><div class="k">Custo</div><div class="v">${brl(addon.directCost)}</div></div>
            <div class="info-cell"><div class="k">Venda</div><div class="v">${escapeHtml(addonSaleLabel(addon))}</div></div>
          </div>
          ${addon.nodes?.length ? `<div style="margin-top:10px;">${renderVisualNodeList(addon.nodes)}</div>` : ''}
        </div>`).join('')}</div>
    </div>`).join('')}</div>`;
}

function renderProductPackagingTab(c) {
  const packagingNodes = flattenNodes(c.nodes || []).filter(node => node.refType === 'packaging');
  return `<div class="stack">
    <section><div class="catalog-section-head"><div><h3>Embalagens do item</h3><p>Itens descartáveis que entram no CMV e precisam bater com a operação real.</p></div></div>${renderVisualNodeList(packagingNodes, 'Nenhuma embalagem mapeada neste item.')}</section>
    <div class="library-grid">${packagingNodes.map(node => {
      const item = byId('packaging', node.refId) || {};
      return `<div class="library-card"><div class="k">Embalagem</div><div class="v">${escapeHtml(node.title)}</div><div class="small muted" style="margin-top:6px;">Fornecedor: ${escapeHtml(item.supplier || '—')}</div><div class="small muted">Pacote: ${decimal(item.purchaseQty)} un • custo unitário ${brl(packagingUnitCost(item))}</div></div>`;
    }).join('')}</div>
  </div>`;
}

function renderProductPurchasesTab(c) {
  const families = productLinkedPurchaseFamilies(c.product);
  return `<div class="stack">
    ${renderResourcePurchaseHistory('product', c.product.id, 'Ainda não há compras históricas vinculadas diretamente a este item do cardápio.')}
    <section><div class="catalog-section-head"><div><h3>Famílias de compra ligadas à composição</h3><p>Insumos e embalagens que sustentam este produto, já agrupados por nome operacional.</p></div></div>
      ${families.length ? `<div class="library-grid">${families.map(entry => `<div class="library-card"><div class="k">${escapeHtml(entry.categoryName || 'Compra')}</div><div class="v">${escapeHtml(entry.familyName || entry.description || 'Item')}</div><div class="small muted" style="margin-top:6px;">${entry.occurrenceCount || 0} compra(s) • ${escapeHtml(entry.supplierSummary || 'sem fornecedor')}</div><div style="margin-top:10px;"><strong>${escapeHtml(entry.latestComparisonLabel || '—')}</strong></div></div>`).join('')}</div>` : '<div class="empty">Ainda não encontrei compras ligadas às camadas deste item.</div>'}
    </section>
  </div>`;
}

function renderProductDetailHtml(c) {
  const p = c.product;
  const scope = p.scope || legacyScopeForRecord('products', p);
  const addonGroups = groupComputedAddons(c.addons || []);
  const requiredGroups = addonGroups.filter(group => group.required).length;
  const basePortions = topLevelPortions(c.nodes || []);
  const activeTab = ['resumo', 'composicao', 'adicionais', 'embalagens', 'compras'].includes(state.catalogDetailTab) ? state.catalogDetailTab : 'resumo';
  const tabHtml = {
    resumo: renderProductSummaryTab(c, basePortions, addonGroups),
    composicao: renderProductCompositionTab(c),
    adicionais: renderProductAddonsTab(c),
    embalagens: renderProductPackagingTab(c),
    compras: renderProductPurchasesTab(c)
  }[activeTab];
  return `
    <div class="catalog-detail-hero">
      ${renderProductImage(p, 'catalog-thumb')}
      <div>
        <div class="legend">${scopeTag(scope)}<span class="tag">${escapeHtml(categoryName(p.categoryId))}</span><span class="tag">${escapeHtml(subgroupNameForProduct(p))}</span><span class="tag">SKU ${escapeHtml(p.code || '—')}</span></div>
        <h3 style="margin:10px 0 6px;">${escapeHtml(p.name)}</h3>
        <p class="muted" style="margin:0;">${escapeHtml(p.description || p.notes || 'Sem observação cadastrada.')}</p>
        <div class="pill-line">
          <span class="tag">${escapeHtml(catalogPathLabel(p))}</span>
          <span class="tag">base: ${basePortions.length} camada(s)</span>
          <span class="tag">adicionais: ${(c.addons || []).length}</span>
          <span class="tag">obrigatórios: ${requiredGroups}</span>
        </div>
      </div>
    </div>
    <div class="detail-actions" style="margin-top:14px;"><button class="btn ghost" data-action="duplicate-product" data-id="${p.id}">Duplicar</button><button class="btn primary" data-action="edit-product" data-id="${p.id}">Editar item e preço</button><button class="btn danger" data-action="delete-product" data-id="${p.id}">Excluir</button></div>
    ${renderProductDetailTabs(activeTab)}
    ${tabHtml}`;
}

function renderCatalog() {
  const categories = visibleRecords('categories', state.operationView).filter(c => c.active !== false && c.id !== 'cat_base_interna');
  const products = activeCatalogProducts(state.operationView).filter(p => {
    const text = state.filterText.trim().toLowerCase();
    const categoryOk = state.filterCategory === 'all' || p.categoryId === state.filterCategory;
    const textOk = !text || [p.name, p.notes, categoryName(p.categoryId), subgroupNameForProduct(p), scopeBadge(p.scope || legacyScopeForRecord('products', p))].join(' ').toLowerCase().includes(text);
    return categoryOk && textOk;
  }).sort(compareCatalogProducts);
  const categorySummary = categories
    .map(category => {
      const categoryProducts = products.filter(product => product.categoryId === category.id);
      if (!categoryProducts.length) return '';
      const groups = [...new Set(categoryProducts.map(product => subgroupNameForProduct(product)))];
      return `<div class="cat-card"><h4>${escapeHtml(category.name)}</h4><p>${categoryProducts.length} item(ns) ativos • ${groups.length} grupo(s) espelhando o PDV atual.</p><div class="pill-line">${groups.map(group => `<span class="tag">${escapeHtml(group)}</span>`).join('')}</div></div>`;
    })
    .filter(Boolean)
    .join('');
  if (!state.selectedProductId || !products.find(p => p.id === state.selectedProductId)) state.selectedProductId = products[0]?.id || null;
  const selected = state.selectedProductId ? computeProduct(state.selectedProductId, state.operationView) : null;
  const groupedProducts = [...products.reduce((map, product) => {
    const key = `${categoryName(product.categoryId)}::${subgroupNameForProduct(product)}`;
    if (!map.has(key)) map.set(key, { categoryId: product.categoryId, categoryName: categoryName(product.categoryId), groupName: subgroupNameForProduct(product), products: [] });
    map.get(key).products.push(product);
    return map;
  }, new Map()).values()];

  qs('#page-catalog').innerHTML = `
    <div class="stack">
      <section class="panel"><div class="panel-head"><div><h3>Espelho do cardápio atual</h3><p>Cada categoria abaixo já aparece com os grupos que vieram do PDV. Isso facilita conferir se custo, preço e montagem estão batendo com o catálogo real.</p></div></div><div class="panel-body"><div class="cat-grid">${categorySummary || '<div class="empty">Nenhum item ativo para resumir.</div>'}</div></div></section>
      <section class="panel"><div class="panel-head"><div><h3>Catálogo visual para revisão de preços</h3><p>Produtos, combos e bebidas aparecem com imagem, custo e margem. Clique em um card para ver composição, adicionais, embalagens e compras ligadas.</p></div><div class="filter-row"><input class="input" id="catalogSearch" placeholder="Buscar item, grupo, nota, categoria ou escopo" value="${escapeHtml(state.filterText)}"><select class="select" id="catalogCategory"><option value="all">Todas as categorias</option>${categories.sort((a, b) => (categoryViewMeta(a.id).sortOrder || 999) - (categoryViewMeta(b.id).sortOrder || 999)).map(cat => `<option value="${cat.id}" ${state.filterCategory===cat.id?'selected':''}>${escapeHtml(cat.name)}</option>`).join('')}</select><button class="btn primary" id="addProductBtn">Novo item / combo</button></div></div><div class="panel-body"><div class="catalog-layout"><div class="stack">${groupedProducts.length ? groupedProducts.map(group => `<section><div class="catalog-section-head"><div><h3>${escapeHtml(group.groupName)}</h3><p>${escapeHtml(group.categoryName)} • ${group.products.length} item(ns)</p></div><span class="tag">${escapeHtml(categoryViewMeta(group.categoryId).accent || 'cardápio')}</span></div><div class="catalog-grid">${group.products.map(p => { const c = computeProduct(p.id, state.operationView); return `<article class="catalog-card ${state.selectedProductId===p.id?'active':''}" data-product-id="${p.id}">${renderProductImage(p)}<div><div class="legend" style="margin-bottom:6px;"><span class="tag">${escapeHtml(p.type)}</span><span class="tag">${escapeHtml(productViewMeta(p).catalogItemId || p.id)}</span></div><h4>${escapeHtml(p.name)}</h4><p>${escapeHtml(p.description || p.notes || catalogPathLabel(p))}</p><div class="catalog-price-row"><div><strong>${brl(c.salePrice)}</strong><div class="small muted">iFood ${brl(c.ifoodSalePrice)}</div></div><div style="text-align:right"><div class="small muted">custo ${brl(c.totalCost)}</div><div class="status ${statusClass(c.marginPct)}">${pct(c.marginPct)}</div></div></div></div></article>`; }).join('')}</div></section>`).join('') : '<div class="empty">Nenhum item encontrado.</div>'}</div><div class="panel" style="box-shadow:none;"><div class="panel-body" id="catalogDetail">${selected ? renderProductDetailHtml(selected) : '<div class="empty">Selecione um item para ver o detalhamento.</div>'}</div></div></div></div></section>
    </div>`;

  qs('#catalogSearch').oninput = (e) => { state.filterText = e.target.value; renderCatalog(); };
  qs('#catalogCategory').onchange = (e) => { state.filterCategory = e.target.value; renderCatalog(); };
  qs('#addProductBtn').onclick = () => openEntityModal('products');
  qsa('[data-product-id]').forEach(row => row.onclick = () => { state.selectedProductId = row.dataset.productId; renderCatalog(); });
  qsa('[data-catalog-tab]').forEach(btn => btn.onclick = () => { state.catalogDetailTab = btn.dataset.catalogTab; renderCatalog(); });
  bindDetailActions();
}

function resourceSubtitle(tab) {
  return {
    ingredients: 'Preço de compra, quantidade base, perdas e custo unitário.',
    recipes: 'Preparos com rendimento. Ex.: vinagrete, maionese, bases.',
    packaging: 'Tudo que entra no CMV final além da comida.',
    suppliers: 'Quem fornece, como recebe e o que já foi comprado com custo comprovado ou estimado.',
    purchaseOrders: 'Compras com fornecedor, data, volumes, preços unitários e vínculo com evidências.',
    expenseEntries: 'Gastos operacionais datados para ler o caixa por período.',
    inputs: 'Notas, orçamentos, pedidos, comprovantes e listas que sustentam os custos.',
    fixedCosts: 'Rateio mensal que sobe para o custo final dos itens.',
    settings: 'Markup padrão, escopo das operações e rateio dos custos compartilhados.'
  }[tab] || '';
}

function evidenceTag(record = {}) {
  const type = procurementEvidenceType(record);
  return `<span class="tag ${procurementEvidenceClass(type)}">${procurementEvidenceLabel(type)}</span>`;
}

function supplierLinkedRecords(supplier) {
  if (!supplier) return [];
  return [
    ...visibleRecords('ingredients').filter(item => String(item.supplier || '').trim() === supplier.name).map(item => ({ type: 'ingredient', item })),
    ...visibleRecords('packaging').filter(item => String(item.supplier || '').trim() === supplier.name).map(item => ({ type: 'packaging', item }))
  ];
}

function supplierOrders(supplierId) {
  return (db.purchaseOrders || []).filter(order => order.supplierId === supplierId);
}

function supplierOrderItems(orderId) {
  return (db.purchaseItems || []).filter(item => item.orderId === orderId);
}

function supplierInputs(supplier) {
  if (!supplier) return [];
  return (db.inputs || []).filter(item => item.supplierId === supplier.id || slugify(item.supplierName || '') === slugify(supplier.name));
}

function paymentStatusLabel(value='') {
  return {
    pending: 'Pendente',
    pendente: 'Pendente',
    scheduled: 'Agendado',
    agendado: 'Agendado',
    paid: 'Pago',
    pago: 'Pago'
  }[value] || 'Pendente';
}

function inputTypeLabel(value='') {
  return {
    invoice: 'Nota fiscal',
    purchase_list: 'Lista de compras',
    quote: 'Orçamento',
    payment_receipt: 'Comprovante',
    order: 'Pedido',
    screenshot: 'Captura / print',
    other: 'Outro'
  }[value] || 'Outro';
}

function inputChannelLabel(value='') {
  return {
    online: 'Online',
    physical_store: 'Loja física',
    whatsapp: 'WhatsApp',
    email: 'E-mail',
    phone: 'Telefone',
    other: 'Outro'
  }[value] || 'Outro';
}

function expenseCategoryLabel(value='') {
  return {
    rent: 'Aluguel',
    payroll: 'Folha / pró-labore',
    utilities: 'Energia / água / gás',
    taxes: 'Impostos / taxas',
    logistics: 'Frete / logística',
    maintenance: 'Manutenção',
    marketing: 'Marketing',
    software: 'Software / serviços',
    supplier_purchase: 'Compra sem itemização',
    other: 'Outro gasto'
  }[value] || 'Outro gasto';
}

function paymentStatusTone(value='') {
  if (value === 'paid' || value === 'pago') return 'good';
  if (value === 'scheduled' || value === 'agendado') return 'warn';
  return 'bad';
}

function formatDate(value='') {
  if (!value) return 'Sem data';
  const [year, month, day] = String(value).split('-');
  if (!year || !month || !day) return value;
  return `${day}/${month}/${year}`;
}

function monthKey(value='') {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(String(value))) return '';
  return String(value).slice(0, 7);
}

function formatMonthKey(value='') {
  if (!value || !/^\d{4}-\d{2}$/.test(String(value))) return 'Sem mês';
  const [year, month] = value.split('-');
  return `${month}/${year}`;
}

function linkedInputs(ids = []) {
  return [...new Set((ids || []).filter(Boolean))].map(id => byId('inputs', id)).filter(Boolean);
}

function inputAttachmentFiles(item = {}) {
  return [...new Set([...(Array.isArray(item.filePaths) ? item.filePaths : []), item.filePath, item.fileUrl].filter(Boolean))];
}

function renderInputLinks(item = {}, marginTop = 12) {
  const files = inputAttachmentFiles(item);
  if (!files.length) return '';
  return `<div class="pill-line" style="margin-top:${marginTop}px;">${files.map((file, index) => {
    const isUrl = /^https?:\/\//i.test(file);
    const label = files.length > 1 ? `${isUrl ? 'Abrir link' : `Abrir arquivo ${index + 1}`}` : `Abrir ${isUrl ? 'link' : 'arquivo'}`;
    return `<a class="btn ghost" href="${escapeHtml(file)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }).join('')}</div>`;
}

function purchaseItemResource(item = {}) {
  if (item.resourceType === 'ingredient') return byId('ingredients', item.resourceId);
  if (item.resourceType === 'packaging') return byId('packaging', item.resourceId);
  if (item.resourceType === 'product') return byId('products', item.resourceId);
  return null;
}

function basenameFromPath(value = '') {
  return String(value || '').split(/[\\/]/).filter(Boolean).pop() || '';
}

function truncateText(value = '', max = 24) {
  const text = String(value || '').trim();
  if (text.length <= max) return text;
  return `${text.slice(0, Math.max(0, max - 3)).trim()}...`;
}

function cleanPurchaseDisplayName(value = '') {
  const cleaned = String(value || '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\b\d+[.,]?\d*\s*(kg|g|gr|gramas?|ml|l|lt|litros?|un|unidades?|caixa|cx)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned || String(value || '').trim() || 'Item';
}

function evidenceLinkRecords(inputs = []) {
  const seen = new Set();
  return [...inputs]
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
    .flatMap(input => {
      const labelBase = input.documentNumber || input.fileLabel || basenameFromPath(input.filePath || input.fileUrl || '') || input.title || 'arquivo';
      const shortBase = truncateText(labelBase.replace(/\.[^.]+$/, ''), 18) || 'arquivo';
      const prefix = input.date ? formatDate(input.date).slice(0, 5) : '';
      return inputAttachmentFiles(input).map((file, index) => {
        const href = String(file || '').trim();
        if (!href || seen.has(href)) return null;
        seen.add(href);
        const label = [prefix, inputAttachmentFiles(input).length > 1 ? `${shortBase} ${index + 1}` : shortBase].filter(Boolean).join(' • ');
        return { href, label };
      }).filter(Boolean);
    });
}

function renderEvidenceLinks(inputs = [], maxLinks = 3) {
  const records = evidenceLinkRecords(inputs);
  if (!records.length) return '<span class="small muted">Sem arquivo</span>';
  const visible = records.slice(0, maxLinks);
  return `<div class="pill-line" style="margin-top:0;">${visible.map(record => `<a class="btn ghost" href="${escapeHtml(record.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(record.label)}</a>`).join('')}${records.length > maxLinks ? `<span class="tag">+${records.length - maxLinks}</span>` : ''}</div>`;
}

const PURCHASE_CATEGORY_ORDER = {
  'Carnes': 1,
  'Laticínios e frios': 2,
  'Padaria e bases': 3,
  'Temperos, molhos e secos': 4,
  'Hortifruti e base': 5,
  'Bebidas do cardápio': 6,
  'Bebidas fora do cardápio': 7,
  'Embalagens e descartáveis': 8,
  'Limpeza e higiene': 9,
  'Equipamentos e utilidades': 10,
  'Elétricos e eletrônicos': 11,
  'Compras avulsas': 12,
  'Outros': 13
};

const PURCHASE_RESOURCE_FAMILY = {
  ing_fraldinha: { familyName: 'Fraldinha', categoryName: 'Carnes', compareKind: 'mass' },
  ing_frango: { familyName: 'Frango', categoryName: 'Carnes', compareKind: 'mass' },
  ing_linguica: { familyName: 'Linguiça toscana', categoryName: 'Carnes', compareKind: 'mass' },
  ing_mucarela: { familyName: 'Muçarela', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  ing_catupiry: { familyName: 'Catupiry original', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  ing_4queijos: { familyName: '4 queijos', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  ing_cheddar: { familyName: 'Cheddar', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  ing_pao_parmesao_pronto: { familyName: 'Pão Francês com Parmesão', categoryName: 'Padaria e bases', compareKind: 'unit' },
  ing_maionese_ind: { familyName: 'Maionese', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  ing_bbq: { familyName: 'Barbecue', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  ing_batata: { familyName: 'Batata', categoryName: 'Hortifruti e base', compareKind: 'mass' },
  ing_chimichurri: { familyName: 'Chimichurri', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  ing_alho_po: { familyName: 'Alho em pó', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  ing_cebola_po: { familyName: 'Cebola em pó', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  ing_caldo_galinha_po: { familyName: 'Caldo de galinha', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  ing_canela_moida: { familyName: 'Canela moída', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  ing_fumaca_po: { familyName: 'Fumaça em pó', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  ing_pimenta_reino: { familyName: 'Pimenta-do-reino', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  prd_agua_510: { familyName: 'Água Mineral sem Gás', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_agua_gas_510: { familyName: 'Água Mineral com Gás', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_coca: { familyName: 'Coca-Cola Lata 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_coca_zero: { familyName: 'Coca-Cola Zero Lata 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_fanta: { familyName: 'Fanta Laranja Lata 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_guarana_350: { familyName: 'Guaraná Antarctica Lata 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_schweppes_350: { familyName: 'Schweppes Citrus 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_sprite_350: { familyName: 'Sprite 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_ice_tea_limao_450: { familyName: 'Chá Ice Tea Leão Limão 450ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_ice_tea_pessego_450: { familyName: 'Chá Ice Tea Leão Pêssego 450ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_garrafa_450: { familyName: 'Garrafa 450ml (pêssego ou limão)', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_bud_330: { familyName: 'Budweiser 330ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_heineken_330: { familyName: 'Heineken 330ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_h2o_500: { familyName: 'H2OH! 500ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_limoneto_500: { familyName: 'H2OH! Zero 500ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_delvalle_uva_290: { familyName: 'Suco Del Valle Uva 290ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_coca_2l: { familyName: 'Coca-Cola Original 2L', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  prd_coca_zero_2l: { familyName: 'Coca-Cola Zero 2L', categoryName: 'Bebidas do cardápio', compareKind: 'unit' }
};

const PURCHASE_FAMILY_RULES = [
  { pattern: /pao.*parmesao|pao_frances|pao-frances|pao frances|baguete.*parm|parm-mus/, familyName: 'Pão Francês com Parmesão', categoryName: 'Padaria e bases', compareKind: 'unit' },
  { pattern: /catupiry.*4_queijos|4_queijos.*catupiry/, familyName: 'Catupiry 4 queijos', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  { pattern: /catupiry|requeijao/, familyName: 'Catupiry original', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  { pattern: /mucarela|mu[cç]arela|mussarela/, familyName: 'Muçarela', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  { pattern: /4_queijos|quatro_queijos/, familyName: '4 queijos', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  { pattern: /cheddar/, familyName: 'Cheddar', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  { pattern: /fraldinha/, familyName: 'Fraldinha', categoryName: 'Carnes', compareKind: 'mass' },
  { pattern: /contrafile|contrafile/, familyName: 'Contrafilé', categoryName: 'Carnes', compareKind: 'mass' },
  { pattern: /sobrecoxa/, familyName: 'Sobrecoxa de frango', categoryName: 'Carnes', compareKind: 'mass' },
  { pattern: /peito_de_frango|peito_frango/, familyName: 'Peito de frango', categoryName: 'Carnes', compareKind: 'mass' },
  { pattern: /linguica/, familyName: 'Linguiça toscana', categoryName: 'Carnes', compareKind: 'mass' },
  { pattern: /maionese/, familyName: 'Maionese', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /barbecue|bbq/, familyName: 'Barbecue', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /azeite/, familyName: 'Azeite', categoryName: 'Temperos, molhos e secos', compareKind: 'volume' },
  { pattern: /chimichurri/, familyName: 'Chimichurri', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /alho.*po/, familyName: 'Alho em pó', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /cebola.*po/, familyName: 'Cebola em pó', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /fumaca/, familyName: 'Fumaça em pó', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /caldo.*galinha/, familyName: 'Caldo de galinha', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /pimenta.*reino/, familyName: 'Pimenta-do-reino', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /canela/, familyName: 'Canela moída', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /paprica|lemon-pepper|farofa|sal-refinado|mostarda|ketchup|catchup|molho|sache|pimenta/, familyName: 'Temperos e molhos', categoryName: 'Temperos, molhos e secos', compareKind: 'mass' },
  { pattern: /batata|tomate|cebola|limao|cheiro_verde|hortifruti/, familyName: 'Hortifruti e base', categoryName: 'Hortifruti e base', compareKind: 'mass' },
  { pattern: /coca-cola.*2l.*zero|coca_zero_2l/, familyName: 'Coca-Cola Zero 2L', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /coca-cola.*2l|coca_2l/, familyName: 'Coca-Cola Original 2L', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /coca-cola.*350.*zero|coca_zero/, familyName: 'Coca-Cola Zero Lata 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /coca-cola.*350|prd_coca|coca-350/, familyName: 'Coca-Cola Lata 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /guarana/, familyName: 'Guaraná Antarctica Lata 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /fanta/, familyName: 'Fanta Laranja Lata 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /schweppes/, familyName: 'Schweppes Citrus 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /sprite.*2l/, familyName: 'Sprite 2L', categoryName: 'Bebidas fora do cardápio', compareKind: 'unit' },
  { pattern: /sprite/, familyName: 'Sprite 350ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /ice-tea.*pessego|cha.*ice.*pessego/, familyName: 'Chá Ice Tea Leão Pêssego 450ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /ice-tea.*limao|cha.*ice.*limao/, familyName: 'Chá Ice Tea Leão Limão 450ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /garrafa_450|ice-tea|cha.*ice/, familyName: 'Garrafa 450ml (pêssego ou limão)', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /h2o.*limao/, familyName: 'H2OH! 500ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /limoneto/, familyName: 'H2OH! Zero 500ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /del.?valle/, familyName: 'Suco Del Valle Uva 290ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /heineken/, familyName: 'Heineken 330ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /budweiser/, familyName: 'Budweiser 330ml', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /agua.*510.*com-gas|agua_gas_510/, familyName: 'Água Mineral com Gás', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /agua.*510|agua_510/, familyName: 'Água Mineral sem Gás', categoryName: 'Bebidas do cardápio', compareKind: 'unit' },
  { pattern: /agua.*1-5l|agua.*1,5l|lindoya|petropolis/, familyName: 'Água 1,5L', categoryName: 'Bebidas fora do cardápio', compareKind: 'unit' },
  { pattern: /guaraviton/, familyName: 'Guaraviton', categoryName: 'Bebidas fora do cardápio', compareKind: 'unit' },
  { pattern: /amstel/, familyName: 'Amstel 355ml', categoryName: 'Bebidas fora do cardápio', compareKind: 'unit' },
  { pattern: /limpol|detergente|veja|esponja|alcool_gel|toalha|scotch|multiuso|umedecida/, familyName: 'Limpeza e higiene', categoryName: 'Limpeza e higiene', compareKind: 'unit' },
  { pattern: /bisnaga|pote|guardanapo|sacola|caixa|marmita|potinho|tampa/, familyName: 'Embalagens e descartáveis', categoryName: 'Embalagens e descartáveis', compareKind: 'unit' },
  { pattern: /rechaud|salamandra|mesa-inox|mesa inox|queimador|moldura|tela inox|concha|faca|medidor|luva termica|suporte|regulador|cola silicone|flexivel/, familyName: 'Equipamentos e utilidades', categoryName: 'Equipamentos e utilidades', compareKind: 'unit' },
  { pattern: /tablet|tv-stick|tv stick|cartao de memoria|memoria|adaptador|extensao|prolongador/, familyName: 'Elétricos e eletrônicos', categoryName: 'Elétricos e eletrônicos', compareKind: 'unit' }
];

function purchaseCategorySortOrder(categoryName = '') {
  return PURCHASE_CATEGORY_ORDER[categoryName] || 999;
}

function parsePurchaseMeasureFromText(text = '', preferredKind = 'mass') {
  const matches = [...String(text || '').matchAll(/(\d+(?:[.,]\d+)?)\s*(kg|g|gr|gramas?|ml|l|lt|litros?|un|unidades?)/gi)];
  if (!matches.length) return null;
  const normalized = matches.map(match => {
    const rawUnit = String(match[2] || '').toLowerCase();
    const value = Number(String(match[1] || '').replace(',', '.'));
    if (!Number.isFinite(value)) return null;
    if (['kg'].includes(rawUnit)) return { amount: value, unit: 'kg', kind: 'mass' };
    if (['g', 'gr', 'grama', 'gramas'].includes(rawUnit)) return { amount: value / 1000, unit: 'kg', kind: 'mass' };
    if (['l', 'lt', 'litro', 'litros'].includes(rawUnit)) return { amount: value, unit: 'L', kind: 'volume' };
    if (['ml'].includes(rawUnit)) return { amount: value / 1000, unit: 'L', kind: 'volume' };
    return { amount: value, unit: 'un', kind: 'unit' };
  }).filter(Boolean);
  return normalized.find(item => item.kind === preferredKind) || normalized[0] || null;
}

function purchaseComparableMeasure(entry = {}, compareKind = '') {
  const unit = slugify(entry.unit || '');
  const qty = num(entry.qty);
  if (compareKind === 'mass') {
    if (unit === 'kg') return qty > 0 ? { amount: qty, unit: 'kg' } : null;
    if (unit === 'g') return qty > 0 ? { amount: qty / 1000, unit: 'kg' } : null;
    const parsed = parsePurchaseMeasureFromText(entry.description, 'mass');
    if (parsed && qty > 0) return { amount: qty * parsed.amount, unit: parsed.unit };
    return null;
  }
  if (compareKind === 'volume') {
    if (unit === 'l' || unit === 'lt') return qty > 0 ? { amount: qty, unit: 'L' } : null;
    if (unit === 'ml') return qty > 0 ? { amount: qty / 1000, unit: 'L' } : null;
    const parsed = parsePurchaseMeasureFromText(entry.description, 'volume');
    if (parsed && qty > 0) return { amount: qty * parsed.amount, unit: parsed.unit };
    return null;
  }
  if (compareKind === 'unit') {
    if (['un', 'und', 'unid', 'unidade', 'unidades'].includes(unit)) return qty > 0 ? { amount: qty, unit: 'un' } : null;
    const parsed = parsePurchaseMeasureFromText(entry.description, 'unit');
    if (parsed && qty > 0) return { amount: qty * parsed.amount, unit: parsed.unit };
    return qty > 0 ? { amount: qty, unit: 'un' } : null;
  }
  return null;
}

function formatComparisonLabel(price = 0, unit = '') {
  if (!Number.isFinite(price) || price <= 0 || !unit) return '—';
  return `${brl(price)} / ${unit}`;
}

function purchaseFamilyInfo(entry = {}) {
  const resourceOverride = PURCHASE_RESOURCE_FAMILY[entry.resourceId] || null;
  const normalized = slugify([entry.description, entry.resource?.name, entry.resourceId].filter(Boolean).join(' '));
  const matchedRule = PURCHASE_FAMILY_RULES.find(rule => rule.pattern.test(normalized));
  const productCategoryName = entry.resourceType === 'product' && entry.resource?.categoryId === 'cat_bebidas'
    ? 'Bebidas do cardápio'
    : '';
  const familyName = matchedRule?.familyName || resourceOverride?.familyName || cleanPurchaseDisplayName(entry.resource?.name || entry.description || 'Item');
  const categoryName = matchedRule?.categoryName || resourceOverride?.categoryName || productCategoryName || (entry.resourceType === 'packaging' ? 'Embalagens e descartáveis' : entry.resourceType === 'ingredient' ? 'Compras avulsas' : 'Outros');
  const compareKind = matchedRule?.compareKind || resourceOverride?.compareKind || (entry.resourceType === 'packaging' ? 'unit' : 'unit');
  return {
    familyName,
    familyKey: slugify(`${categoryName}_${familyName}`),
    categoryName,
    compareKind
  };
}

function purchaseItemHistoryKey(item = {}) {
  const normalizedDescription = slugify(item.description || item.resourceId || item.id || '');
  if (item.resourceType && item.resourceType !== 'other') {
    return item.resourceId ? `${item.resourceType}:${item.resourceId}` : `${item.resourceType}:${normalizedDescription || 'sem_referencia'}`;
  }
  return normalizedDescription ? `other:${normalizedDescription}` : '';
}

function purchaseItemContext(item = {}) {
  const order = byId('purchaseOrders', item.orderId);
  const supplier = byId('suppliers', order?.supplierId || item.supplierId || '');
  const resource = purchaseItemResource(item);
  const description = String(item.description || resource?.name || 'Item de compra').trim();
  const family = purchaseFamilyInfo({ ...item, resource, description });
  const totalAmount = num(item.totalPrice) || (num(item.qty) * num(item.unitPrice));
  const comparable = purchaseComparableMeasure({ ...item, description }, family.compareKind);
  const comparisonPrice = comparable?.amount ? totalAmount / comparable.amount : 0;
  const presentationLabel = `${decimal(item.qty)} ${item.unit || 'un'}`.trim();
  const unitPriceLabel = `${brl(item.unitPrice)}${item.unit ? ` / ${item.unit}` : ''}`;
  const evidenceInputs = linkedInputs(order?.inputIds || []);
  return {
    ...item,
    key: `purchaseItem:${item.id || `${item.orderId || 'sem_ordem'}:${slugify(description) || 'item'}`}`,
    label: description,
    description,
    resource,
    internalResourceLabel: resource?.name || family.familyName,
    resourceLabel: resource?.name || family.familyName,
    familyKey: family.familyKey,
    familyName: family.familyName,
    categoryName: family.categoryName,
    compareKind: family.compareKind,
    presentationLabel,
    unitPriceLabel,
    comparisonUnit: comparable?.unit || '',
    comparisonQty: comparable?.amount || 0,
    comparisonPrice,
    comparisonLabel: comparisonPrice ? formatComparisonLabel(comparisonPrice, comparable.unit) : unitPriceLabel,
    historyKey: family.familyKey || purchaseItemHistoryKey({ ...item, description }),
    order,
    orderKey: order ? ledgerEntryKey('purchaseOrders', order.id) : '',
    supplier,
    supplierId: order?.supplierId || item.supplierId || '',
    supplierName: supplier?.name || order?.supplierName || '',
    date: order?.date || '',
    referencePeriod: order?.date ? monthKey(order.date) : '',
    orderLabel: order?.label || supplier?.name || order?.supplierName || 'Compra',
    paymentStatus: order?.paymentStatus || 'paid',
    paymentMethod: order?.paymentMethod || '',
    documentNumber: order?.documentNumber || '',
    totalPrice: totalAmount,
    totalAmount,
    paidLineAmount: totalAmount,
    scope: order?.scope || item.scope || 'gyros',
    evidenceInputs,
    evidenceCount: evidenceInputs.length,
    evidenceType: item.evidenceType || order?.evidenceType || procurementEvidenceType(order || item),
    evidenceSource: item.evidenceSource || order?.evidenceSource || 'Compra cadastrada na base local'
  };
}

function ledgerPurchaseItemRawEntries(operationView = state.operationView) {
  return visibleRecords('purchaseOrders', operationView)
    .flatMap(order => supplierOrderItems(order.id).map(item => purchaseItemContext(item)));
}

function purchaseItemGroupBaseKey(entry = {}) {
  if (entry.resourceId) return `${entry.resourceType}:${entry.resourceId}`;
  if (entry.historyKey) return entry.historyKey;
  return `${entry.resourceType || 'other'}:${slugify(entry.description || entry.id || 'item')}`;
}

function summarizeSupplierProductLines(lineItems = []) {
  const labels = [...new Set(lineItems.map(item => String(item.description || '').trim()).filter(Boolean))];
  if (!labels.length) return 'Item';
  if (labels.length === 1) return labels[0];
  return `${labels[0]} + ${labels.length - 1} variação(ões)`;
}

function summarizePresentationLabel(lineItems = []) {
  if (!lineItems.length) return '—';
  if (lineItems.length === 1) return lineItems[0].presentationLabel || `${decimal(lineItems[0].qty)} ${lineItems[0].unit || 'un'}`;
  const units = [...new Set(lineItems.map(item => item.unit || '').filter(Boolean))];
  const descriptions = [...new Set(lineItems.map(item => String(item.description || '').trim()).filter(Boolean))];
  const totalQty = lineItems.reduce((sum, item) => sum + num(item.qty), 0);
  if (units.length === 1 && String(units[0]).toLowerCase() === 'un' && descriptions.length > 1) return `${lineItems.length} packs / apresentações`;
  if (units.length === 1) return `${lineItems.length} volumes • ${decimal(totalQty)} ${units[0]}`;
  return `${lineItems.length} apresentações`;
}

function summarizeUnitPriceLabel(lineItems = []) {
  if (!lineItems.length) return '—';
  const prices = lineItems.map(item => num(item.unitPrice));
  const units = [...new Set(lineItems.map(item => item.unit || '').filter(Boolean))];
  const uniquePairs = [...new Set(lineItems.map(item => `${num(item.unitPrice).toFixed(4)}|${item.unit || ''}`))];
  if (uniquePairs.length === 1) return lineItems[0].unitPriceLabel || brl(lineItems[0].unitPrice);
  if (units.length === 1 && String(units[0]).toLowerCase() === 'un') return `${lineItems.length} preços / packs`;
  if (units.length === 1) return `de ${brl(Math.min(...prices))} a ${brl(Math.max(...prices))}${units[0] ? ` / ${units[0]}` : ''}`;
  return `${lineItems.length} preços / packs`;
}

function sortLedgerPurchaseEntries(entries = []) {
  return [...entries].sort((a, b) => {
    const categoryDelta = purchaseCategorySortOrder(a.categoryName) - purchaseCategorySortOrder(b.categoryName);
    if (categoryDelta !== 0) return categoryDelta;
    if (a.date && b.date && a.date !== b.date) return b.date.localeCompare(a.date);
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return String(a.familyName || a.description || a.label || '').localeCompare(String(b.familyName || b.description || b.label || ''));
  });
}

function summarizeSupplierNames(names = [], max = 3) {
  const visible = names.filter(Boolean);
  if (!visible.length) return 'Sem fornecedor';
  if (visible.length <= max) return visible.join(', ');
  return `${visible.slice(0, max).join(', ')} + ${visible.length - max}`;
}

function purchaseComparisonRangeLabel(entries = []) {
  const comparable = entries
    .filter(entry => num(entry.comparisonPrice) > 0 && entry.comparisonUnit)
    .map(entry => ({ price: num(entry.comparisonPrice), unit: entry.comparisonUnit }));
  if (!comparable.length) return '—';
  const units = [...new Set(comparable.map(entry => entry.unit))];
  if (units.length !== 1) return comparable[0] ? formatComparisonLabel(comparable[0].price, comparable[0].unit) : '—';
  const prices = comparable.map(entry => entry.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (Math.abs(min - max) < 0.0001) return formatComparisonLabel(max, units[0]);
  return `de ${brl(min)} a ${brl(max)} / ${units[0]}`;
}

function renderLedgerOccurrenceSummary(rows = [], maxRows = 3) {
  if (!rows.length) return '<span class="small muted">Sem compras ainda.</span>';
  const visible = rows.slice(0, maxRows);
  return `${visible.map(row => `<div><strong>${formatDate(row.date)}</strong> • ${escapeHtml(row.supplierName || '—')} • ${escapeHtml(row.presentationLabel || `${decimal(row.qty)} ${row.unit || 'un'}`)} • ${escapeHtml(row.comparisonLabel || row.unitPriceLabel || '—')} • ${brl(row.totalAmount)}</div>`).join('')}${rows.length > maxRows ? `<div class="small muted">+${rows.length - maxRows} compra(s) no histórico desta família.</div>` : ''}`;
}

function uniqueInputs(inputs = []) {
  const seen = new Set();
  return inputs.filter(input => {
    const key = input.id || input.documentNumber || input.filePath || input.fileUrl || input.title;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function groupLedgerPurchaseEntries(entries = []) {
  const map = new Map();
  entries.forEach(entry => {
    const groupKey = `${entry.order?.id || entry.orderId || 'sem_ordem'}:${entry.historyKey || entry.familyKey || purchaseItemGroupBaseKey(entry)}`;
    if (!map.has(groupKey)) {
      map.set(groupKey, {
        ...entry,
        key: `purchaseItemGroup:${groupKey}`,
        id: groupKey,
        lineItems: [],
        lineCount: 0,
        variantCount: 0,
        supplierProductLabel: '',
        supplierProductSummary: '',
        totalAmount: 0,
        totalPrice: 0,
        paidLineAmount: 0,
        comparisonQty: 0,
        comparisonUnit: ''
      });
    }
    const grouped = map.get(groupKey);
    grouped.lineItems.push(entry);
    grouped.lineCount += 1;
    grouped.totalAmount += num(entry.totalAmount);
    grouped.totalPrice += num(entry.totalAmount);
    grouped.paidLineAmount += num(entry.paidLineAmount || entry.totalAmount);
    if (num(entry.comparisonQty) > 0 && entry.comparisonUnit) {
      if (!grouped.comparisonUnit || grouped.comparisonUnit === entry.comparisonUnit) {
        grouped.comparisonUnit = entry.comparisonUnit;
        grouped.comparisonQty += num(entry.comparisonQty);
      } else {
        grouped.comparisonUnit = '';
        grouped.comparisonQty = 0;
      }
    }
  });

  return sortLedgerPurchaseEntries([...map.values()].map(grouped => {
    const lineItems = [...grouped.lineItems].sort((a, b) => String(a.description || '').localeCompare(String(b.description || '')) || num(a.qty) - num(b.qty));
    const rawDescriptions = [...new Set(lineItems.map(item => String(item.description || '').trim()).filter(Boolean))];
    const first = lineItems[0] || grouped;
    const comparisonUnit = grouped.comparisonUnit || first.comparisonUnit || '';
    const comparisonQty = comparisonUnit
      ? lineItems.filter(item => item.comparisonUnit === comparisonUnit).reduce((sum, item) => sum + num(item.comparisonQty), 0)
      : 0;
    const comparisonPrice = comparisonQty > 0 ? grouped.totalAmount / comparisonQty : 0;
    return {
      ...grouped,
      lineItems,
      rawDescriptions,
      lineCount: lineItems.length,
      variantCount: rawDescriptions.length,
      description: first.familyName || grouped.familyName || grouped.resource?.name || grouped.internalResourceLabel || first.description || 'Item',
      familyName: first.familyName || grouped.familyName || grouped.resource?.name || grouped.internalResourceLabel || first.description || 'Item',
      supplierProductLabel: first.description || grouped.resource?.name || grouped.internalResourceLabel || 'Item',
      supplierProductSummary: summarizeSupplierProductLines(lineItems),
      presentationLabel: summarizePresentationLabel(lineItems),
      unitPriceLabel: summarizeUnitPriceLabel(lineItems),
      qty: lineItems.reduce((sum, item) => sum + num(item.qty), 0),
      unit: [...new Set(lineItems.map(item => item.unit || '').filter(Boolean))].length === 1 ? (lineItems[0]?.unit || '') : '',
      historyKey: first.historyKey || grouped.historyKey,
      label: first.familyName || grouped.resource?.name || grouped.internalResourceLabel || first.description || grouped.label,
      categoryName: first.categoryName || grouped.categoryName || 'Outros',
      comparisonQty,
      comparisonUnit,
      comparisonPrice,
      comparisonLabel: comparisonPrice > 0 ? formatComparisonLabel(comparisonPrice, comparisonUnit) : summarizeUnitPriceLabel(lineItems)
    };
  }));
}

function ledgerPurchaseOccurrenceEntries(operationView = state.operationView) {
  return groupLedgerPurchaseEntries(ledgerPurchaseItemRawEntries(operationView));
}

function buildPurchaseFamilyEntries(entries = []) {
  const map = new Map();
  entries.forEach(entry => {
    const familyKey = entry.historyKey || entry.familyKey || purchaseItemGroupBaseKey(entry);
    if (!map.has(familyKey)) {
      map.set(familyKey, {
        key: `purchaseFamily:${familyKey}`,
        id: familyKey,
        historyKey: familyKey,
        familyName: entry.familyName || entry.description || 'Item',
        categoryName: entry.categoryName || 'Outros',
        resourceType: entry.resourceType || 'other',
        resourceId: entry.resourceId || '',
        compareKind: entry.compareKind || '',
        occurrences: [],
        totalAmount: 0,
        paidAmount: 0,
        openAmount: 0
      });
    }
    const family = map.get(familyKey);
    family.occurrences.push(entry);
    family.totalAmount += num(entry.totalAmount);
    if (entry.paymentStatus === 'paid') family.paidAmount += num(entry.totalAmount);
    else family.openAmount += num(entry.totalAmount);
  });

  return sortLedgerPurchaseEntries([...map.values()].map(family => {
    const occurrences = sortLedgerPurchaseEntries(family.occurrences);
    const latestPurchase = occurrences[0] || null;
    const supplierNames = [...new Set(occurrences.map(item => item.supplierName).filter(Boolean))];
    const evidenceInputs = uniqueInputs(occurrences.flatMap(item => item.evidenceInputs || []));
    const rawDescriptions = [...new Set(occurrences.flatMap(item => item.rawDescriptions || [item.supplierProductSummary || item.description]).filter(Boolean))];
    const lineItems = occurrences.flatMap(item => item.lineItems || []);
    const latestComparable = occurrences.find(item => num(item.comparisonPrice) > 0 && item.comparisonUnit) || latestPurchase;
    return {
      ...family,
      ...latestPurchase,
      key: `purchaseFamily:${family.id}`,
      id: family.id,
      historyKey: family.historyKey,
      description: family.familyName,
      label: family.familyName,
      categoryName: family.categoryName,
      occurrences,
      occurrenceCount: occurrences.length,
      supplierNames,
      supplierSummary: summarizeSupplierNames(supplierNames),
      evidenceInputs,
      evidenceCount: evidenceInputs.length,
      rawDescriptions,
      lineItems,
      totalAmount: family.totalAmount,
      paidAmount: family.paidAmount,
      openAmount: family.openAmount,
      paymentStatus: family.openAmount > 0 ? (family.paidAmount > 0 ? 'scheduled' : 'pending') : 'paid',
      paymentMethod: occurrences.length === 1 ? latestPurchase?.paymentMethod || '' : 'Múltiplas formas',
      latestPurchase,
      latestDate: latestPurchase?.date || '',
      latestSupplierName: latestPurchase?.supplierName || '',
      latestComparisonLabel: latestComparable?.comparisonLabel || latestPurchase?.unitPriceLabel || '—',
      comparisonRangeLabel: purchaseComparisonRangeLabel(occurrences),
      historySummaryHtml: renderLedgerOccurrenceSummary(occurrences, 3)
    };
  }));
}

function purchaseHistoryRows(resourceType = '', resourceId = '', excludeOrderId = '') {
  return (db.purchaseItems || [])
    .filter(item => item.resourceType === resourceType && item.resourceId === resourceId && (!excludeOrderId || item.orderId !== excludeOrderId))
    .map(item => purchaseItemContext(item))
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')) || String(b.orderId || '').localeCompare(String(a.orderId || '')));
}

function purchaseHistoryRowsByKey(historyKey = '', excludeGroupKey = '') {
  if (!historyKey) return [];
  return groupLedgerPurchaseEntries(ledgerPurchaseItemRawEntries())
    .filter(item => item.historyKey === historyKey && (!excludeGroupKey || item.key !== excludeGroupKey))
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')) || String(b.orderId || '').localeCompare(String(a.orderId || '')));
}

function purchaseHistoryHint(item, currentOrderId = '') {
  if (!item?.resourceType || !item?.resourceId || item.resourceType === 'other') return '';
  const history = purchaseHistoryRows(item.resourceType, item.resourceId, currentOrderId);
  if (!history.length) return `<div class="small muted" style="margin-top:8px;">Primeiro registro histórico deste item na base.</div>`;
  const latest = history[0];
  return `<div class="small muted" style="margin-top:8px;">${history.length} compra(s) anterior(es) deste mesmo recurso. Última: ${formatDate(latest.date)} • ${escapeHtml(latest.supplierName || 'Fornecedor não vinculado')} • ${decimal(latest.qty)} ${escapeHtml(latest.unit || 'un')} • unit ${brl(latest.unitPrice)}</div>`;
}

function renderResourcePurchaseHistory(resourceType, resourceId, emptyMessage = 'Ainda não há compras históricas vinculadas.') {
  const rows = purchaseHistoryRows(resourceType, resourceId);
  return `<section class="panel" style="margin-top:16px;"><div class="panel-head"><div><h3>Histórico de compra</h3><p>Mesmo recurso visto em datas, fornecedores e preços diferentes.</p></div></div><div class="panel-body" style="padding:0 0 8px 0; overflow:auto;">${rows.length ? `<table><thead><tr><th>Data</th><th>Fornecedor</th><th>Lançamento</th><th>Volume</th><th>Preço unit.</th><th>Total</th><th>Evidências</th></tr></thead><tbody>${rows.map(row => `<tr><td>${formatDate(row.date)}</td><td>${escapeHtml(row.supplierName || '—')}</td><td><strong>${escapeHtml(row.orderLabel)}</strong><div class="small muted">${escapeHtml(row.description || 'Item')}</div></td><td>${decimal(row.qty)} ${escapeHtml(row.unit || 'un')}</td><td>${brl(row.unitPrice)}</td><td>${brl(row.totalPrice)}</td><td>${row.evidenceCount}</td></tr>`).join('')}</tbody></table>` : `<div class="empty" style="padding:16px;">${emptyMessage}</div>`}</div></section>`;
}

function renderIngredientDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione um ingrediente.</div>';
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Ingrediente</span>${scopeTag(item.scope || legacyScopeForRecord('ingredients', item))}${evidenceTag(item)}<span class="tag">SKU interno ${escapeHtml(item.code || '—')}</span></div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description || item.notes||'')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="ingredients" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="ingredients" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">SKU interno</div><div class="v" style="font-size:15px">${escapeHtml(item.code || '—')}</div></div><div class="info-cell"><div class="k">Fornecedor</div><div class="v">${escapeHtml(item.supplier||'—')}</div></div><div class="info-cell"><div class="k">Modelo de compra</div><div class="v" style="font-size:15px">${supplierModeLabel(item.supplierMode)}</div></div><div class="info-cell"><div class="k">Unidade base</div><div class="v">${item.baseUnit}</div></div><div class="info-cell"><div class="k">Preço de compra</div><div class="v">${brl(item.purchaseCost)}</div></div><div class="info-cell"><div class="k">Quantidade do pacote</div><div class="v">${item.purchaseQty} ${item.baseUnit}</div></div><div class="info-cell"><div class="k">Perda</div><div class="v">${pct(item.wastePct)}</div></div><div class="info-cell"><div class="k">Custo unitário real</div><div class="v">${brl(ingredientUnitCost(item))}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(procurementEvidenceType(item))}">${escapeHtml(item.sourceReference || 'Sem referência')}</span></div>${renderResourcePurchaseHistory('ingredient', item.id, 'Ainda não há compras históricas vinculadas a este ingrediente.')}`;
}
function renderRecipeDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione um preparo.</div>';
  const node = resolveNode('recipe', item.id, 1, []);
  const batchCost = node.children.reduce((s,x)=>s+x.cost,0);
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Preparo</span>${scopeTag(item.scope || legacyScopeForRecord('recipes', item))}<span class="tag">SKU interno ${escapeHtml(item.code || '—')}</span></div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description || item.notes||'')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="recipes" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="recipes" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">SKU interno</div><div class="v" style="font-size:15px">${escapeHtml(item.code || '—')}</div></div><div class="info-cell"><div class="k">Rendimento</div><div class="v">${item.yieldQty} ${item.yieldUnit}</div></div><div class="info-cell"><div class="k">Armazenamento</div><div class="v">${escapeHtml(item.storage||'—')}</div></div><div class="info-cell"><div class="k">Custo do lote</div><div class="v">${brl(batchCost)}</div></div><div class="info-cell"><div class="k">Custo por unidade</div><div class="v">${brl(node.unitCost)}</div></div></div><div style="margin-top:16px;"><h3 style="font-size:15px; margin:0 0 10px;">Componentes</h3>${renderTree(node.children)}</div>`;
}
function renderPackagingDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione uma embalagem.</div>';
  const evidenceType = procurementEvidenceType(item);
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Embalagem</span>${scopeTag(item.scope || legacyScopeForRecord('packaging', item))}${evidenceTag(item)}<span class="tag">SKU interno ${escapeHtml(item.code || '—')}</span></div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description || item.notes||'')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="packaging" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="packaging" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">SKU interno</div><div class="v" style="font-size:15px">${escapeHtml(item.code || '—')}</div></div><div class="info-cell"><div class="k">Fornecedor</div><div class="v">${escapeHtml(item.supplier || '—')}</div></div><div class="info-cell"><div class="k">Modelo de compra</div><div class="v" style="font-size:15px">${supplierModeLabel(item.supplierMode)}</div></div><div class="info-cell"><div class="k">Pacote de compra</div><div class="v">${item.purchaseQty} un</div></div><div class="info-cell"><div class="k">Preço do pacote</div><div class="v">${brl(item.purchaseCost)}</div></div><div class="info-cell"><div class="k">Custo unitário</div><div class="v">${brl(packagingUnitCost(item))}</div></div><div class="info-cell"><div class="k">Tipo</div><div class="v">Descartável</div></div><div class="info-cell"><div class="k">Procedência do custo</div><div class="v" style="font-size:15px">${procurementEvidenceLabel(evidenceType)}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(evidenceType)}">${escapeHtml(item.sourceReference || 'Sem referência')}</span></div>${renderResourcePurchaseHistory('packaging', item.id, 'Ainda não há compras históricas vinculadas a esta embalagem.')}`;
}

function renderInputDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione um input.</div>';
  const supplier = item.supplierId ? byId('suppliers', item.supplierId) : null;
  const files = inputAttachmentFiles(item);
  const fileOrigin = files.some(file => /^https?:\/\//i.test(file)) && !files.some(file => !/^https?:\/\//i.test(file))
    ? 'Link externo'
    : files.length
      ? 'Arquivo local do projeto'
      : 'Sem arquivo';
  const fileLabel = files.length > 1
    ? `${files.length} arquivos vinculados`
    : item.fileLabel || files[0] || '—';
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Input</span>${scopeTag(item.scope || 'gyros')}${evidenceTag(item)}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.notes || 'Registro de apoio para nota, orçamento, pedido, comprovante ou lista de compras.')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="inputs" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="inputs" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">Tipo</div><div class="v">${inputTypeLabel(item.inputType)}</div></div><div class="info-cell"><div class="k">Canal</div><div class="v">${inputChannelLabel(item.sourceChannel)}</div></div><div class="info-cell"><div class="k">Fornecedor</div><div class="v">${escapeHtml(supplier?.name || item.supplierName || '—')}</div></div><div class="info-cell"><div class="k">Documento / pedido</div><div class="v">${escapeHtml(item.documentNumber || '—')}</div></div><div class="info-cell"><div class="k">Data</div><div class="v">${escapeHtml(item.date || '—')}</div></div><div class="info-cell"><div class="k">Pagamento</div><div class="v">${escapeHtml(item.paymentMethod || '—')}${item.paymentStatus ? ` • ${paymentStatusLabel(item.paymentStatus)}` : ''}</div></div><div class="info-cell"><div class="k">Valor total</div><div class="v">${item.totalAmount ? brl(item.totalAmount) : '—'}</div></div><div class="info-cell"><div class="k">Arquivo / referência</div><div class="v" style="font-size:15px">${escapeHtml(fileLabel)}</div><div class="small muted" style="margin-top:6px;">${escapeHtml(fileOrigin)}</div></div></div>${renderInputLinks(item, 12)}<div class="pill-line"><span class="tag ${procurementEvidenceClass(item.evidenceType || procurementEvidenceType(item))}">${escapeHtml(item.evidenceSource || 'Sem referência')}</span></div>`;
}

function renderPurchaseOrderDetailHtml(order) {
  if (!order) return '<div class="empty">Selecione uma compra.</div>';
  const supplier = order.supplierId ? byId('suppliers', order.supplierId) : null;
  const items = supplierOrderItems(order.id);
  const evidenceInputs = linkedInputs(order.inputIds || []);
  const subtotal = items.reduce((sum, item) => sum + num(item.totalPrice), 0);
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Compra</span>${scopeTag(order.scope || 'gyros')}${evidenceTag(order)}<span class="tag">SKU interno ${escapeHtml(order.code || '—')}</span></div><h3>${escapeHtml(order.label || 'Compra')}</h3><p>${escapeHtml(order.notes || 'Lançamento de compra com data, fornecedor, itens, volumes e preço unitário.')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="purchaseOrders" data-id="${order.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="purchaseOrders" data-id="${order.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">Fornecedor</div><div class="v">${escapeHtml(supplier?.name || order.supplierName || '—')}</div></div><div class="info-cell"><div class="k">Documento</div><div class="v">${escapeHtml(order.documentNumber || '—')}</div></div><div class="info-cell"><div class="k">Data</div><div class="v">${formatDate(order.date)}</div></div><div class="info-cell"><div class="k">Pagamento</div><div class="v status ${paymentStatusTone(order.paymentStatus)}">${escapeHtml(order.paymentMethod || '—')} • ${paymentStatusLabel(order.paymentStatus)}</div></div><div class="info-cell"><div class="k">Subtotal dos itens</div><div class="v">${items.length ? brl(subtotal) : '—'}</div></div><div class="info-cell"><div class="k">Total do lançamento</div><div class="v">${brl(order.totalAmount)}</div></div><div class="info-cell"><div class="k">Itens</div><div class="v">${items.length}</div></div><div class="info-cell"><div class="k">Evidências vinculadas</div><div class="v">${evidenceInputs.length}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(order.evidenceType || procurementEvidenceType(order))}">${escapeHtml(order.evidenceSource || 'Sem referência')}</span></div><div class="stack" style="margin-top:16px;"><section class="panel"><div class="panel-head"><div><h3>Itens da compra</h3><p>Volumes, preço unitário e leitura de recompra do lançamento.</p></div></div><div class="panel-body kpi-list">${items.length ? items.map(item => `<div class="cost-node ${procurementEvidenceClass(item.evidenceType || procurementEvidenceType(item))}"><div class="top"><div><div class="name">${escapeHtml(item.description || 'Item')}</div><div class="meta">${escapeHtml(resourceTypeLabel(item.resourceType || 'other'))} • ${decimal(item.qty)} ${escapeHtml(item.unit || 'un')} • unit ${brl(item.unitPrice)}</div>${purchaseHistoryHint(item, order.id)}</div><div><strong>${brl(item.totalPrice)}</strong></div></div></div>`).join('') : '<div class="empty">Nenhum item de compra cadastrado neste lançamento.</div>'}</div></section><section class="panel"><div class="panel-head"><div><h3>Evidências</h3><p>Notas, comprovantes e arquivos vinculados ao lançamento.</p></div></div><div class="panel-body kpi-list">${evidenceInputs.length ? evidenceInputs.map(input => `<div class="cost-node ${procurementEvidenceClass(input.evidenceType || procurementEvidenceType(input))}"><div class="top"><div><div class="name">${escapeHtml(input.title)}</div><div class="meta">${inputTypeLabel(input.inputType)} • ${formatDate(input.date)} • ${escapeHtml(input.documentNumber || 'Sem documento')}</div></div><div><strong>${input.totalAmount ? brl(input.totalAmount) : '—'}</strong></div></div>${renderInputLinks(input, 10)}</div>`).join('') : '<div class="empty">Nenhum input vinculado ainda. Use a aba Inputs para guardar PDFs, comprovantes e prints em docs/inputs.</div>'}</div></section></div>`;
}

function renderExpenseEntryDetailHtml(entry) {
  if (!entry) return '<div class="empty">Selecione um gasto.</div>';
  const supplier = entry.supplierId ? byId('suppliers', entry.supplierId) : null;
  const fixedCost = entry.fixedCostId ? byId('fixedCosts', entry.fixedCostId) : null;
  const evidenceInputs = linkedInputs(entry.inputIds || []);
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Gasto</span>${scopeTag(entry.scope || 'gyros')}${evidenceTag(entry)}<span class="tag">SKU interno ${escapeHtml(entry.code || '—')}</span></div><h3>${escapeHtml(entry.label || 'Gasto operacional')}</h3><p>${escapeHtml(entry.notes || 'Lançamento operacional com data, categoria, pagamento e evidências.')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="expenseEntries" data-id="${entry.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="expenseEntries" data-id="${entry.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">Categoria</div><div class="v" style="font-size:15px">${expenseCategoryLabel(entry.category)}</div></div><div class="info-cell"><div class="k">Data</div><div class="v">${formatDate(entry.date)}</div></div><div class="info-cell"><div class="k">Período de referência</div><div class="v" style="font-size:15px">${entry.referencePeriod ? formatMonthKey(entry.referencePeriod) : '—'}</div></div><div class="info-cell"><div class="k">Pagamento</div><div class="v status ${paymentStatusTone(entry.paymentStatus)}">${escapeHtml(entry.paymentMethod || '—')} • ${paymentStatusLabel(entry.paymentStatus)}</div></div><div class="info-cell"><div class="k">Fornecedor</div><div class="v">${escapeHtml(supplier?.name || entry.supplierName || '—')}</div></div><div class="info-cell"><div class="k">Custo fixo vinculado</div><div class="v" style="font-size:15px">${escapeHtml(fixedCost?.name || '—')}</div></div><div class="info-cell"><div class="k">Documento</div><div class="v">${escapeHtml(entry.documentNumber || '—')}</div></div><div class="info-cell"><div class="k">Valor total</div><div class="v">${brl(entry.totalAmount)}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(entry.evidenceType || procurementEvidenceType(entry))}">${escapeHtml(entry.evidenceSource || 'Sem referência')}</span></div><section class="panel" style="margin-top:16px;"><div class="panel-head"><div><h3>Evidências</h3><p>Arquivos e comprovantes ligados a este gasto.</p></div></div><div class="panel-body kpi-list">${evidenceInputs.length ? evidenceInputs.map(input => `<div class="cost-node ${procurementEvidenceClass(input.evidenceType || procurementEvidenceType(input))}"><div class="top"><div><div class="name">${escapeHtml(input.title)}</div><div class="meta">${inputTypeLabel(input.inputType)} • ${formatDate(input.date)} • ${escapeHtml(input.documentNumber || 'Sem documento')}</div></div><div><strong>${input.totalAmount ? brl(input.totalAmount) : '—'}</strong></div></div>${renderInputLinks(input, 10)}</div>`).join('') : '<div class="empty">Nenhum input vinculado ainda a este gasto.</div>'}</div></section>`;
}

function renderSupplierDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione um fornecedor.</div>';
  const linked = supplierLinkedRecords(item);
  const orders = supplierOrders(item.id).sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  const inputs = supplierInputs(item);
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Fornecedor</span>${scopeTag(item.scope || 'gyros')}${evidenceTag(item)}</div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.notes || 'Cadastro de fornecedor, vendedor e formas de pagamento.')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="suppliers" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="suppliers" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">Razão social</div><div class="v">${escapeHtml(item.legalName || '—')}</div></div><div class="info-cell"><div class="k">CNPJ</div><div class="v">${escapeHtml(item.cnpj || '—')}</div></div><div class="info-cell"><div class="k">Vendedor</div><div class="v">${escapeHtml(item.sellerName || '—')}</div></div><div class="info-cell"><div class="k">Contato</div><div class="v">${escapeHtml(item.sellerPhone || item.sellerEmail || '—')}</div></div><div class="info-cell"><div class="k">Endereço</div><div class="v" style="font-size:15px">${escapeHtml(item.address || '—')}</div></div><div class="info-cell"><div class="k">CEP / cidade</div><div class="v" style="font-size:15px">${escapeHtml([item.cep, item.city, item.state].filter(Boolean).join(' • ') || '—')}</div></div><div class="info-cell"><div class="k">Chave PIX</div><div class="v">${escapeHtml(item.pixKey || '—')}</div></div><div class="info-cell"><div class="k">Tipo da chave PIX</div><div class="v">${escapeHtml(item.pixKeyType || '—')}</div></div><div class="info-cell"><div class="k">Formas de pagamento</div><div class="v" style="font-size:15px">${escapeHtml(normalizePaymentMethods(item.paymentMethods).join(', ') || '—')}</div></div><div class="info-cell"><div class="k">Origem do cadastro</div><div class="v" style="font-size:15px">${procurementEvidenceLabel(item.evidenceType || procurementEvidenceType(item))}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(item.evidenceType || procurementEvidenceType(item))}">${escapeHtml(item.evidenceSource || 'Sem referência')}</span></div><div class="stack" style="margin-top:16px;"><section class="evidence-panel ${procurementEvidenceClass(item.evidenceType || procurementEvidenceType(item))}"><h3 style="font-size:15px; margin:0 0 10px;">Itens vinculados</h3>${linked.length ? linked.map(({ type, item: linkedItem }) => `<div class="kpi-row"><div><strong>${escapeHtml(linkedItem.name)}</strong><div class="small muted">${type === 'ingredient' ? 'Ingrediente' : 'Embalagem'} • ${supplierModeLabel(linkedItem.supplierMode)} • ${escapeHtml(linkedItem.notes || '')}</div><div class="pill-line">${evidenceTag(linkedItem)}</div></div><div style="text-align:right"><div><strong>${type === 'ingredient' ? brl(ingredientUnitCost(linkedItem)) : brl(packagingUnitCost(linkedItem))}</strong></div><div class="small muted">${escapeHtml(linkedItem.sourceReference || 'Sem referência')}</div></div></div>`).join('') : '<div class="empty">Nenhum ingrediente ou embalagem vinculado a este fornecedor.</div>'}</section><section class="panel"><div class="panel-head"><div><h3>Inputs vinculados</h3><p>Arquivos, capturas, notas, orçamentos e listas associados a este fornecedor.</p></div></div><div class="panel-body kpi-list">${inputs.length ? inputs.map(input => `<div class="cost-node ${procurementEvidenceClass(input.evidenceType || procurementEvidenceType(input))}"><div class="top"><div><div class="name">${escapeHtml(input.title)}</div><div class="meta">${inputTypeLabel(input.inputType)} • ${inputChannelLabel(input.sourceChannel)} • ${escapeHtml(input.documentNumber || 'Sem número')} • ${escapeHtml(input.date || 'Sem data')}</div></div><div><strong>${input.totalAmount ? brl(input.totalAmount) : '—'}</strong></div></div>${renderInputLinks(input, 10)}</div>`).join('') : '<div class="empty">Nenhum input vinculado ainda para este fornecedor.</div>'}</div></section><section class="panel"><div class="panel-head"><div><h3>Pedidos / histórico de compra</h3><p>Registro cronológico do que já foi comprado com este fornecedor.</p></div></div><div class="panel-body kpi-list">${orders.length ? orders.map(order => `<div class="cost-node ${procurementEvidenceClass(order.evidenceType || procurementEvidenceType(order))}"><div class="top"><div><div class="name">${escapeHtml(order.label || 'Pedido')}</div><div class="meta">${formatDate(order.date)} • ${escapeHtml(order.documentNumber || 'Sem documento')} • ${escapeHtml(order.paymentMethod || 'Forma não informada')} • ${paymentStatusLabel(order.paymentStatus)}</div></div><div><strong>${brl(order.totalAmount)}</strong></div></div><div class="children">${supplierOrderItems(order.id).map(row => `<div class="cost-node ${procurementEvidenceClass(row.evidenceType || procurementEvidenceType(row))}"><div class="top"><div><div class="name">${escapeHtml(row.description)}</div><div class="meta">${escapeHtml(decimal(row.qty))} ${escapeHtml(row.unit || 'un')} • unit ${brl(row.unitPrice)}</div>${purchaseHistoryHint(row, order.id)}</div><div><strong>${brl(row.totalPrice)}</strong></div></div></div>`).join('')}</div></div>`).join('') : '<div class="empty">Nenhum pedido registrado ainda para este fornecedor.</div>'}</div></section></div>`;
}
function renderFixedCostDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione um custo fixo.</div>';
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Custo fixo</span>${scopeTag(item.scope || legacyScopeForRecord('fixedCosts', item))}</div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.notes||'')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="fixedCosts" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="fixedCosts" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">Valor mensal</div><div class="v">${brl(item.amount)}</div></div><div class="info-cell"><div class="k">Rateio atual por item</div><div class="v">${brl(fixedSharePerCatalogItem(state.operationView))}</div></div></div>`;
}

function renderSettingsHtml() {
  const manual = db.settings.sharedFixedSplitManual || { gyros: 50, greguinho: 50 };
  const units = db.settings.operationMonthlyUnits || { gyros: 1200, greguinho: 1200 };
  if (!greguinhoEnabled()) {
    return `<div class="detail-header"><div><div class="tag">Parâmetros</div><h3>Regra de preço e rateio</h3><p>Configure markup e rateio do Gyros.</p></div></div><div class="stack"><div class="field"><label>Markup padrão (%) sobre o custo</label><input id="settingDefaultMarkup" type="number" step="1" value="${defaultMarkupPct()}"></div><div class="note">Exemplo profissional e claro: se você colocar <strong>200%</strong>, o app entende que quer vender <strong>200% acima do custo direto</strong>. Isso vira <strong>custo x 3</strong> no preço base e gera uma margem aproximada de <strong>${pct(targetMarginFromMarkupPct())}</strong> sobre a venda. O preço <strong>iFood</strong> aplica mais 27% sobre esse valor base.</div><div class="field"><label>Modo de rateio fixo</label><select id="settingAllocationMode"><option value="catalog_items" ${db.settings.fixedAllocationMode==='catalog_items'?'selected':''}>Dividir pela quantidade de itens ativos do cardápio</option><option value="custom_units" ${db.settings.fixedAllocationMode==='custom_units'?'selected':''}>Dividir por unidades mensais informadas</option></select></div><div class="field"><label>Volume mensal estimado do Gyros</label><input id="settingUnitsGyros" type="number" step="1" value="${num(units.gyros)}"></div><div class="note">Como so o Gyros esta ativo agora, todos os custos fixos entram integralmente nesta operacao. Eles seguem visiveis como referencia, mas nao entram na margem principal nem no preco automatico desta fase.</div><div><button class="btn primary" id="saveSettingsBtn">Salvar parâmetros</button></div></div>`;
  }
  return `<div class="detail-header"><div><div class="tag">Parâmetros</div><h3>Regra de preço e rateio</h3><p>Configure markup, operações e divisão dos custos compartilhados.</p></div></div><div class="stack"><div class="field"><label>Markup padrão (%) sobre o custo</label><input id="settingDefaultMarkup" type="number" step="1" value="${defaultMarkupPct()}"></div><div class="note">Exemplo profissional e claro: se você colocar <strong>200%</strong>, o app entende que quer vender <strong>200% acima do custo direto</strong>. Isso vira <strong>custo x 3</strong> no preço base e gera uma margem aproximada de <strong>${pct(targetMarginFromMarkupPct())}</strong> sobre a venda. O preço <strong>iFood</strong> aplica mais 27% sobre esse valor base.</div><div class="field"><label>Modo de rateio fixo</label><select id="settingAllocationMode"><option value="catalog_items" ${db.settings.fixedAllocationMode==='catalog_items'?'selected':''}>Dividir pela quantidade de itens ativos do cardápio</option><option value="custom_units" ${db.settings.fixedAllocationMode==='custom_units'?'selected':''}>Dividir por unidades mensais informadas</option></select></div><div class="field"><label>Divisão dos custos compartilhados</label><select id="settingSharedSplitMode"><option value="equal" ${db.settings.sharedFixedSplitMode==='equal'?'selected':''}>50/50 entre Gyros e Greguinho</option><option value="manual" ${db.settings.sharedFixedSplitMode==='manual'?'selected':''}>Percentual manual</option><option value="volume" ${db.settings.sharedFixedSplitMode==='volume'?'selected':''}>Por volume mensal estimado</option></select></div><div class="form-grid"><div class="field"><label>Volume mensal Gyros</label><input id="settingUnitsGyros" type="number" step="1" value="${num(units.gyros)}"></div><div class="field"><label>Volume mensal Greguinho</label><input id="settingUnitsGreguinho" type="number" step="1" value="${num(units.greguinho)}"></div><div class="field"><label>Manual Gyros (%)</label><input id="settingManualGyros" type="number" step="1" value="${num(manual.gyros)}"></div><div class="field"><label>Manual Greguinho (%)</label><input id="settingManualGreguinho" type="number" step="1" value="${num(manual.greguinho)}"></div></div><div class="note">Padrão atual: <strong>${db.settings.sharedFixedSplitMode === 'manual' ? `manual ${num(manual.gyros)}% / ${num(manual.greguinho)}%` : db.settings.sharedFixedSplitMode === 'volume' ? 'por volume mensal estimado' : '50/50'}</strong>. Nesta fase, o markup automático principal usa o custo direto; o preço com rateio fica como referência gerencial.</div><div><button class="btn primary" id="saveSettingsBtn">Salvar parâmetros</button></div></div>`;
}

function renderSettingsSummaryHtml() {
  const active = activeCatalogProducts(state.operationView);
  const computed = active.map(item => computeProduct(item.id, state.operationView)).filter(Boolean);
  const monthlyUnitsConfig = db.settings.operationMonthlyUnits || { gyros: 1200, greguinho: 1200 };
  const monthlyUnits = Math.max(0, num(state.operationView === 'greguinho' ? monthlyUnitsConfig.greguinho : monthlyUnitsConfig.gyros));
  const fixedMonthly = totalFixedCosts(state.operationView);
  const avgDirectCost = computed.length ? computed.reduce((sum, item) => sum + item.directCost, 0) / computed.length : 0;
  const avgSalePrice = computed.length ? computed.reduce((sum, item) => sum + item.salePrice, 0) / computed.length : 0;
  const avgContribution = computed.length ? computed.reduce((sum, item) => sum + (item.salePrice - item.directCost), 0) / computed.length : 0;
  const fixedPerSale = monthlyUnits > 0 ? fixedMonthly / monthlyUnits : 0;
  const breakEvenUnits = avgContribution > 0 ? fixedMonthly / avgContribution : 0;
  const contributionMarginPct = avgSalePrice > 0 ? (avgContribution / avgSalePrice) * 100 : 0;
  const breakEvenRevenue = contributionMarginPct > 0 ? fixedMonthly / (contributionMarginPct / 100) : 0;
  const projectedVariableOutflow = monthlyUnits * avgDirectCost;
  const projectedMonthlyOperatingNeed = fixedMonthly + projectedVariableOutflow;
  const allocationLabel = db.settings.fixedAllocationMode === 'custom_units'
    ? 'Baseado no volume mensal informado'
    : 'Baseado na quantidade de itens ativos do catálogo';

  return `
    <div class="stack">
      <section class="panel hero-panel" style="box-shadow:none;">
        <div class="panel-body">
          <div class="eyebrow">Leitura financeira</div>
          <h3 style="margin:6px 0 8px; font-size:24px;">Fluxo, ponto de equilíbrio e giro da operação</h3>
          <p class="note" style="font-size:14px;">A lógica aqui é de dono: no fim, quem paga a conta é a unidade <strong>vendida</strong>, não tudo o que está disponível para vender. Por isso o app cruza custo direto, despesas fixas e volume mensal estimado para mostrar a leitura mais útil de caixa e viabilidade.</p>
        </div>
      </section>
      <div class="grid-2">
        <div class="metric"><div class="label">Custos fixos mensais</div><div class="value">${brl(fixedMonthly)}</div><div class="sub">Soma dos custos fixos cadastrados para ${operationLabel()}.</div></div>
        <div class="metric"><div class="label">Volume mensal estimado</div><div class="value">${monthlyUnits ? monthlyUnits.toLocaleString('pt-BR') : '—'}</div><div class="sub">${allocationLabel}.</div></div>
        <div class="metric"><div class="label">Contribuição média por venda</div><div class="value">${brl(avgContribution)}</div><div class="sub">Preço base médio menos custo direto médio: ${pct(contributionMarginPct)} de margem de contribuição.</div></div>
        <div class="metric"><div class="label">Rateio fixo técnico por venda</div><div class="value">${monthlyUnits > 0 ? brl(fixedPerSale) : '—'}</div><div class="sub">Custos fixos mensais divididos pelo volume mensal projetado.</div></div>
      </div>
      <div class="grid-2">
        <div class="panel">
          <div class="panel-head"><div><h3>Ponto de equilíbrio</h3><p>Quantas vendas médias a operação precisa para pagar os custos fixos.</p></div></div>
          <div class="panel-body">
            <div class="info-grid">
              <div class="info-cell"><div class="k">Unidades para empatar</div><div class="v">${breakEvenUnits > 0 ? Math.ceil(breakEvenUnits).toLocaleString('pt-BR') : '—'}</div></div>
              <div class="info-cell"><div class="k">Faturamento mínimo</div><div class="v">${breakEvenRevenue > 0 ? brl(breakEvenRevenue) : '—'}</div></div>
            </div>
            <div class="note" style="margin-top:12px;">Conta usada: <strong>custos fixos ÷ contribuição média por venda</strong>. É uma leitura técnica para responder “quantas vendas/mês preciso para a operação se pagar?”.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-head"><div><h3>Giro operacional do mês</h3><p>Leitura de caixa para sustentar o plano mensal informado.</p></div></div>
          <div class="panel-body">
            <div class="info-grid">
              <div class="info-cell"><div class="k">Custo direto médio por venda</div><div class="v">${brl(avgDirectCost)}</div></div>
              <div class="info-cell"><div class="k">Preço base médio</div><div class="v">${brl(avgSalePrice)}</div></div>
              <div class="info-cell"><div class="k">Necessidade variável do mês</div><div class="v">${monthlyUnits > 0 ? brl(projectedVariableOutflow) : '—'}</div></div>
              <div class="info-cell"><div class="k">Necessidade total do mês</div><div class="v">${monthlyUnits > 0 ? brl(projectedMonthlyOperatingNeed) : brl(fixedMonthly)}</div></div>
            </div>
            <div class="note" style="margin-top:12px;">Aqui o app soma <strong>custo direto projetado</strong> para o volume informado com os <strong>custos fixos mensais</strong>. Isso não substitui DRE nem fluxo de caixa, mas já dá uma leitura bem “shark tank” do tamanho da operação.</div>
          </div>
        </div>
      </div>
      <section class="panel">
        <div class="panel-head"><div><h3>Como pensar isso na prática</h3><p>Regra simples para tomada de decisão.</p></div></div>
        <div class="panel-body">
          <div class="note">1. O cardápio pode ter muitos itens, mas o que importa no final é o volume real vendido.</div>
          <div class="note">2. Cada venda precisa cobrir o próprio custo direto e contribuir para pagar os custos fixos do mês.</div>
          <div class="note">3. Quando o volume sobe, o custo fixo por venda cai. Quando o volume cai, o custo fixo por venda sobe.</div>
          <div class="note">4. Por isso a precificação, o mix vendido e a projeção de unidades mensais precisam andar juntos.</div>
        </div>
      </section>
    </div>`;
}

function renderResourceTable(tab) {
  if (tab === 'ingredients') {
    return `<table><thead><tr><th>Ingrediente</th><th>Escopo</th><th>Procedência</th><th>Fornecedor</th><th>Unidade</th><th>Custo unitário</th><th>Perda</th></tr></thead><tbody>${visibleRecords('ingredients').map(item => `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.name)}</strong><div class="small muted">${supplierModeLabel(item.supplierMode)}</div></td><td>${scopeTag(item.scope || legacyScopeForRecord('ingredients', item))}</td><td>${evidenceTag(item)}</td><td>${escapeHtml(item.supplier||'')}</td><td>${item.baseUnit}</td><td>${brl(ingredientUnitCost(item))}</td><td>${pct(item.wastePct)}</td></tr>`).join('')}</tbody></table>`;
  }
  if (tab === 'recipes') {
    return `<table><thead><tr><th>Preparo</th><th>Escopo</th><th>Rendimento</th><th>Custo por unidade</th><th>Componentes</th></tr></thead><tbody>${visibleRecords('recipes').map(item => { const node = resolveNode('recipe', item.id, 1, []); return `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.name)}</strong><div class="small muted">${escapeHtml(item.storage||'')}</div></td><td>${scopeTag(item.scope || legacyScopeForRecord('recipes', item))}</td><td>${item.yieldQty} ${item.yieldUnit}</td><td>${brl(node.unitCost)}</td><td>${item.components.length}</td></tr>`; }).join('')}</tbody></table>`;
  }
  if (tab === 'packaging') {
    return `<table><thead><tr><th>Embalagem</th><th>Escopo</th><th>Procedência</th><th>Fornecedor</th><th>Pacote</th><th>Custo unitário</th><th>Nota</th></tr></thead><tbody>${visibleRecords('packaging').map(item => `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.name)}</strong><div class="small muted">${supplierModeLabel(item.supplierMode)}</div></td><td>${scopeTag(item.scope || legacyScopeForRecord('packaging', item))}</td><td>${evidenceTag(item)}</td><td>${escapeHtml(item.supplier || '')}</td><td>${item.purchaseQty} un</td><td>${brl(packagingUnitCost(item))}</td><td class="small muted">${escapeHtml(item.notes||'')}</td></tr>`).join('')}</tbody></table>`;
  }
  if (tab === 'suppliers') {
    return `<table><thead><tr><th>Fornecedor</th><th>Procedência</th><th>Registros</th><th>Vendedor</th><th>PIX</th><th>Pagamento</th></tr></thead><tbody>${visibleRecords('suppliers').map(item => { const linkedCount = supplierLinkedRecords(item).length; return `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.name)}</strong><div class="small muted">${escapeHtml(item.legalName || item.cnpj || '')}</div></td><td>${evidenceTag(item)}</td><td>${linkedCount}</td><td>${escapeHtml(item.sellerName || '—')}</td><td>${escapeHtml(item.pixKey || '—')}</td><td class="small muted">${escapeHtml(normalizePaymentMethods(item.paymentMethods).join(', ') || '—')}</td></tr>`; }).join('')}</tbody></table>`;
  }
  if (tab === 'purchaseOrders') {
    return `<table><thead><tr><th>Compra</th><th>Fornecedor</th><th>Data</th><th>Itens</th><th>Total</th><th>Pagamento</th><th>Evidência</th></tr></thead><tbody>${visibleRecords('purchaseOrders').map(item => { const supplier = byId('suppliers', item.supplierId); const items = supplierOrderItems(item.id); return `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.label || 'Compra')}</strong><div class="small muted">${escapeHtml(item.documentNumber || item.code || '')}</div></td><td>${escapeHtml(supplier?.name || item.supplierName || '—')}</td><td>${formatDate(item.date)}</td><td>${items.length}</td><td>${brl(item.totalAmount)}</td><td><span class="status ${paymentStatusTone(item.paymentStatus)}">${paymentStatusLabel(item.paymentStatus)}</span><div class="small muted">${escapeHtml(item.paymentMethod || '—')}</div></td><td>${evidenceTag(item)}</td></tr>`; }).join('')}</tbody></table>`;
  }
  if (tab === 'expenseEntries') {
    return `<table><thead><tr><th>Gasto</th><th>Categoria</th><th>Data</th><th>Fornecedor</th><th>Valor</th><th>Pagamento</th><th>Evidência</th></tr></thead><tbody>${visibleRecords('expenseEntries').map(item => { const supplier = byId('suppliers', item.supplierId); return `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.label || 'Gasto operacional')}</strong><div class="small muted">${escapeHtml(item.documentNumber || item.code || '')}</div></td><td>${expenseCategoryLabel(item.category)}</td><td>${formatDate(item.date)}</td><td>${escapeHtml(supplier?.name || item.supplierName || '—')}</td><td>${brl(item.totalAmount)}</td><td><span class="status ${paymentStatusTone(item.paymentStatus)}">${paymentStatusLabel(item.paymentStatus)}</span><div class="small muted">${escapeHtml(item.paymentMethod || '—')}</div></td><td>${evidenceTag(item)}</td></tr>`; }).join('')}</tbody></table>`;
  }
  if (tab === 'inputs') {
    return `<table><thead><tr><th>Input</th><th>Tipo</th><th>Canal</th><th>Fornecedor</th><th>Data</th><th>Valor</th><th>Procedência</th></tr></thead><tbody>${visibleRecords('inputs').map(item => `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.title)}</strong><div class="small muted">${escapeHtml(item.documentNumber || item.fileLabel || '')}</div></td><td>${inputTypeLabel(item.inputType)}</td><td>${inputChannelLabel(item.sourceChannel)}</td><td>${escapeHtml(byId('suppliers', item.supplierId)?.name || item.supplierName || '—')}</td><td>${escapeHtml(item.date || '—')}</td><td>${item.totalAmount ? brl(item.totalAmount) : '—'}</td><td>${evidenceTag(item)}</td></tr>`).join('')}</tbody></table>`;
  }
  if (tab === 'fixedCosts') {
    return `<table><thead><tr><th>Custo fixo</th><th>Escopo</th><th>Valor mensal</th><th>Observação</th></tr></thead><tbody>${visibleRecords('fixedCosts').map(item => `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.name)}</strong></td><td>${scopeTag(item.scope || legacyScopeForRecord('fixedCosts', item))}</td><td>${brl(item.amount)}</td><td class="small muted">${escapeHtml(item.notes||'')}</td></tr>`).join('')}</tbody></table>`;
  }
  return '<div class="empty">Sem tabela.</div>';
}

function renderResources() {
  const tabs = [['ingredients','Ingredientes'],['recipes','Preparos'],['packaging','Embalagens'],['suppliers','Fornecedores'],['purchaseOrders','Compras'],['expenseEntries','Gastos'],['inputs','Inputs'],['fixedCosts','Custos fixos'],['settings','Parâmetros']];
  const list = state.resourceTab === 'settings' ? [] : visibleRecords(state.resourceTab, state.operationView);
  if (state.resourceTab !== 'settings' && (!state.selectedResourceId || !list.find(x => x.id === state.selectedResourceId))) state.selectedResourceId = list[0]?.id || null;
  let detailHtml = '<div class="empty">Selecione um registro.</div>';
  if (state.resourceTab === 'ingredients') detailHtml = state.selectedResourceId ? renderIngredientDetailHtml(byId('ingredients', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'recipes') detailHtml = state.selectedResourceId ? renderRecipeDetailHtml(byId('recipes', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'packaging') detailHtml = state.selectedResourceId ? renderPackagingDetailHtml(byId('packaging', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'suppliers') detailHtml = state.selectedResourceId ? renderSupplierDetailHtml(byId('suppliers', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'purchaseOrders') detailHtml = state.selectedResourceId ? renderPurchaseOrderDetailHtml(byId('purchaseOrders', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'expenseEntries') detailHtml = state.selectedResourceId ? renderExpenseEntryDetailHtml(byId('expenseEntries', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'inputs') detailHtml = state.selectedResourceId ? renderInputDetailHtml(byId('inputs', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'fixedCosts') detailHtml = state.selectedResourceId ? renderFixedCostDetailHtml(byId('fixedCosts', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'settings') detailHtml = renderSettingsHtml();

  qs('#page-resources').innerHTML = `
    <div class="stack"><section class="panel"><div class="panel-head"><div><h3>Cadastros-base</h3><p>O jeito mais prático de manter a BOM viva e consistente.</p></div><div class="tabs">${tabs.map(([id,label]) => `<button class="${state.resourceTab===id?'active':''}" data-tab="${id}">${label}</button>`).join('')}</div></div><div class="panel-body"><div class="split"><div class="panel" style="box-shadow:none;"><div class="panel-head"><div><h3>${tabs.find(t => t[0]===state.resourceTab)?.[1] || ''}</h3><p>${resourceSubtitle(state.resourceTab)}</p></div>${state.resourceTab !== 'settings' ? `<button class="btn primary" id="addResourceBtn">Novo</button>` : ''}</div><div class="panel-body" style="padding:0 0 8px 0; overflow:auto;">${state.resourceTab === 'settings' ? renderSettingsSummaryHtml() : renderResourceTable(state.resourceTab)}</div></div><div class="panel" style="box-shadow:none;"><div class="panel-body" id="resourceDetail">${detailHtml}</div></div></div></div></section></div>`;

  qsa('[data-tab]').forEach(btn => btn.onclick = () => { state.resourceTab = btn.dataset.tab; state.selectedResourceId = null; renderResources(); });
  qsa('[data-resource-id]').forEach(row => row.onclick = () => { state.selectedResourceId = row.dataset.resourceId; renderResources(); });
  if (qs('#addResourceBtn')) qs('#addResourceBtn').onclick = () => openEntityModal(state.resourceTab);
  bindDetailActions();
  bindSettingsActions();
}

function bindDetailActions() {
  qsa('[data-action="edit-product"]').forEach(btn => btn.onclick = () => openEntityModal('products', byId('products', btn.dataset.id)));
  qsa('[data-action="duplicate-product"]').forEach(btn => btn.onclick = () => {
    const original = byId('products', btn.dataset.id);
    if (!original) return;
    const copy = deepClone(original);
    copy.id = uid('prd');
    copy.name = `${original.name} (cópia)`;
    db.products.unshift(copy);
    state.selectedProductId = copy.id;
    saveDb();
    showToast('Item duplicado', 'A cópia foi criada e selecionada para revisão.', 'success');
  });
  qsa('[data-action="delete-product"]').forEach(btn => btn.onclick = () => deleteRecord('products', btn.dataset.id, 'Excluir este item do cardápio?', 'Essa ação remove a composição e o histórico local deste item.'));
  qsa('[data-action="edit-resource"]').forEach(btn => btn.onclick = () => openEntityModal(btn.dataset.type, byId(btn.dataset.type, btn.dataset.id)));
  qsa('[data-action="delete-resource"]').forEach(btn => btn.onclick = () => deleteRecord(btn.dataset.type, btn.dataset.id, 'Excluir este cadastro?', 'Se ele estiver em uso em alguma BOM, será removido mesmo assim da base local.'));
}

function bindSettingsActions() {
  const saveBtn = qs('#saveSettingsBtn');
  if (!saveBtn) return;
  saveBtn.onclick = () => {
    db.settings.defaultMarkupPct = num(qs('#settingDefaultMarkup').value);
    db.settings.fixedAllocationMode = qs('#settingAllocationMode').value;
    if (greguinhoEnabled()) {
      db.settings.sharedFixedSplitMode = qs('#settingSharedSplitMode').value;
      db.settings.operationMonthlyUnits = {
        gyros: num(qs('#settingUnitsGyros').value),
        greguinho: num(qs('#settingUnitsGreguinho').value)
      };
      db.settings.sharedFixedSplitManual = {
        gyros: num(qs('#settingManualGyros').value),
        greguinho: num(qs('#settingManualGreguinho').value)
      };
    } else {
      db.settings.operationMonthlyUnits = { gyros: num(qs('#settingUnitsGyros').value), greguinho: 0 };
      db.settings.sharedFixedSplitMode = 'equal';
      db.settings.sharedFixedSplitManual = { gyros: 100, greguinho: 0 };
    }
    db.settings.customMonthlyUnits = monthlyUnitsForOperation('consolidated');
    saveDb();
    showToast('Parâmetros salvos', greguinhoEnabled() ? `Markup padrão em ${defaultMarkupPct()}% e rateio compartilhado em modo ${db.settings.sharedFixedSplitMode}.` : `Markup padrão em ${defaultMarkupPct()}% com Gyros como única operação ativa.`, 'success');
  };
}

async function deleteRecord(type, id, message, subtitle='') {
  const confirmed = await askConfirm({ title:'Confirmar exclusão', subtitle, message });
  if (!confirmed) return;
  if (type === 'suppliers') {
    const orderIds = (db.purchaseOrders || []).filter(item => item.supplierId === id).map(item => item.id);
    db.purchaseOrders = (db.purchaseOrders || []).filter(item => item.supplierId !== id);
    db.purchaseItems = (db.purchaseItems || []).filter(item => !orderIds.includes(item.orderId) && item.supplierId !== id);
    (db.inputs || []).forEach(item => { if (item.supplierId === id) item.supplierId = ''; });
    (db.expenseEntries || []).forEach(item => {
      if (item.supplierId === id) {
        item.supplierName = item.supplierName || byId('suppliers', id)?.name || '';
        item.supplierId = '';
      }
    });
  }
  if (type === 'purchaseOrders') {
    db.purchaseItems = (db.purchaseItems || []).filter(item => item.orderId !== id);
  }
  if (type === 'inputs') {
    (db.purchaseOrders || []).forEach(item => {
      item.inputIds = (item.inputIds || []).filter(inputId => inputId !== id);
    });
    (db.expenseEntries || []).forEach(item => {
      item.inputIds = (item.inputIds || []).filter(inputId => inputId !== id);
    });
  }
  db[type] = db[type].filter(x => x.id !== id);
  if (type === 'products' && state.selectedProductId === id) state.selectedProductId = null;
  if (type === 'purchaseOrders') state.selectedLedgerItemId = null;
  if (type === 'purchaseOrders' || type === 'expenseEntries') state.selectedLedgerEntryId = null;
  if (type === state.resourceTab && state.selectedResourceId === id) state.selectedResourceId = null;
  saveDb();
  showToast('Registro excluído', 'A base local foi atualizada.', 'success');
}

function defaultRecord(type) {
  const defaultScope = 'gyros';
  if (type === 'ingredients') return { id:uid('ing'), code:'', description:'', erpUnit:'G', scope:defaultScope, name:'', baseUnit:'g', purchaseQty:1000, purchaseCost:0, wastePct:0, supplier:'', supplierMode:'single', sourceType:'documented', sourceReference:'Lista de compras, nota fiscal ou orçamento', notes:'' };
  if (type === 'recipes') return { id:uid('rec'), code:'', description:'', scope:defaultScope, name:'', yieldQty:1, yieldUnit:'un', storage:'', notes:'', components:[] };
  if (type === 'packaging') return { id:uid('pkg'), code:'', description:'', erpUnit:'UN', scope:defaultScope, name:'', purchaseQty:100, purchaseCost:0, supplier:'', supplierMode:'single', sourceType:'documented', sourceReference:'Lista de compras, nota fiscal ou orçamento', notes:'' };
  if (type === 'suppliers') return { id:uid('sup'), code:'', scope:defaultScope, name:'', legalName:'', cnpj:'', sellerName:'', sellerPhone:'', sellerEmail:'', address:'', cep:'', city:'', state:'', pixKey:'', pixKeyType:'aleatoria', paymentMethods:['PIX'], notes:'', evidenceType:'review', evidenceSource:'Cadastro criado manualmente; revisar com nota, orçamento ou contato do fornecedor' };
  if (type === 'purchaseOrders') return { id:uid('ord'), code:'', scope:defaultScope, supplierId:'', supplierName:'', label:'', date:'', documentNumber:'', paymentMethod:'', paymentStatus:'pending', totalAmount:0, inputIds:[], notes:'', evidenceType:'review', evidenceSource:'Compra criada manualmente; vincule nota fiscal, comprovante ou pedido', items:[] };
  if (type === 'expenseEntries') return { id:uid('exp'), code:'', scope:defaultScope, category:'other', supplierId:'', supplierName:'', fixedCostId:'', label:'', date:'', referencePeriod:'', documentNumber:'', paymentMethod:'', paymentStatus:'pending', totalAmount:0, inputIds:[], notes:'', evidenceType:'review', evidenceSource:'Gasto criado manualmente; vincule comprovante, nota ou boleto' };
  if (type === 'inputs') return { id:uid('inp'), code:'', description:'', scope:defaultScope, title:'', inputType:'other', sourceChannel:'other', supplierId:'', supplierName:'', documentNumber:'', date:'', paymentMethod:'', paymentStatus:'pending', totalAmount:0, fileLabel:'', filePath:'', fileUrl:'', notes:'', evidenceType:'review', evidenceSource:'Input criado manualmente; anexar referência ou caminho do arquivo' };
  if (type === 'fixedCosts') return { id:uid('fix'), code:'', scope:defaultScope, name:'', amount:0, notes:'' };
  if (type === 'products') return { id:uid('prd'), code:'', description:'', erpUnit:'UN', productCondition:'new', erpProductType:'custom', salesChannels:['default','delivery','ifood'], scope:defaultScope, name:'', categoryId:db.categories.find(c=>c.active!==false)?.id || '', type:'menu', pricingMode:'auto', salePrice:0, active:true, includeInCatalogCount:true, notes:'', components:[], addons:[] };
  return { id:uid('row') };
}

function modalEntityName(type) {
  return { ingredients:'ingrediente', recipes:'preparo', packaging:'embalagem', suppliers:'fornecedor', purchaseOrders:'compra', expenseEntries:'gasto', inputs:'input', fixedCosts:'custo fixo', products:'item / combo' }[type] || 'cadastro';
}
function modalSubtitle(type) {
  return { ingredients:'Defina custo de compra, unidade-base, fornecedor e procedência.', recipes:'Cadastre rendimento e componentes do preparo.', packaging:'Toda embalagem que entra no custo final, com fornecedor e procedência.', suppliers:'Dados do fornecedor, vendedor, PIX e formas de pagamento.', purchaseOrders:'Registre a compra com data, fornecedor, itens, volumes, preço unitário e evidências.', expenseEntries:'Registre o gasto operacional com data, categoria, valor e comprovantes.', inputs:'Cadastre notas, prints, listas, pedidos, comprovantes e referências do custo.', fixedCosts:'Valores mensais que serão rateados.', products:'Item final, extra, bebida, base interna ou combo. O preco pode seguir a regra automatica ou ser manual.' }[type] || '';
}

function scopeSelectOptions(selectedScope = 'gyros', fixedCost = false) {
  if (!greguinhoEnabled()) {
    return `<option value="gyros" selected>Gyros</option>`;
  }
  if (fixedCost) {
    return `<option value="shared" ${selectedScope==='shared'?'selected':''}>Compartilhado</option><option value="gyros" ${selectedScope==='gyros'?'selected':''}>Gyros</option><option value="greguinho" ${selectedScope==='greguinho'?'selected':''}>Greguinho</option>`;
  }
  return `<option value="gyros" ${selectedScope==='gyros'?'selected':''}>Gyros</option><option value="greguinho" ${selectedScope==='greguinho'?'selected':''}>Greguinho</option><option value="shared" ${selectedScope==='shared'?'selected':''}>Compartilhado</option>`;
}

function purchaseResourceRecords(refType, ownerScope = state.modal?.data?.scope || state.operationView) {
  if (refType === 'ingredient') return recordsForOwnerScope('ingredients', ownerScope);
  if (refType === 'packaging') return recordsForOwnerScope('packaging', ownerScope);
  if (refType === 'product') return recordsForOwnerScope('products', ownerScope);
  return [];
}

function purchaseResourceMeta(refType, refId) {
  if (refType === 'ingredient') {
    const item = byId('ingredients', refId);
    return item ? { name: item.name, unit: item.baseUnit || 'un', unitPrice: ingredientUnitCost(item) } : null;
  }
  if (refType === 'packaging') {
    const item = byId('packaging', refId);
    return item ? { name: item.name, unit: item.baseUnit || 'un', unitPrice: packagingUnitCost(item) } : null;
  }
  if (refType === 'product') {
    const item = byId('products', refId);
    const computed = item ? computeProduct(item.id, state.modal?.data?.scope || state.operationView) : null;
    return item ? { name: item.name, unit: item.erpUnit || 'UN', unitPrice: computed?.directCost || 0 } : null;
  }
  return null;
}

function purchaseItemsSubtotal(items = []) {
  return (items || []).reduce((sum, item) => sum + (num(item.qty) * num(item.unitPrice)), 0);
}

function linkedInputChecklistHtml(selectedIds = [], supplierId = '') {
  const inputs = visibleRecords('inputs', state.modal?.data?.scope || state.operationView)
    .filter(item => !supplierId || item.supplierId === supplierId || !item.supplierId)
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  if (!inputs.length) return '<div class="empty">Nenhum input visível para vincular agora.</div>';
  return `<div class="component-list">${inputs.map(item => `<label class="cost-node" style="display:block; cursor:pointer;"><div class="top"><div><div class="name"><input type="checkbox" data-input-link="${item.id}" ${selectedIds.includes(item.id) ? 'checked' : ''} style="margin-right:8px;">${escapeHtml(item.title)}</div><div class="meta">${inputTypeLabel(item.inputType)} • ${formatDate(item.date)} • ${escapeHtml(item.documentNumber || 'Sem documento')}</div></div><div><strong>${item.totalAmount ? brl(item.totalAmount) : '—'}</strong></div></div></label>`).join('')}</div>`;
}

function purchaseItemRowHtml(item, index) {
  const refType = item.resourceType || 'ingredient';
  const options = purchaseResourceRecords(refType, state.modal?.data?.scope || state.operationView);
  return `<div class="component-row purchase-item-row" data-purchase-item-index="${index}"><div class="field"><label>Tipo</label><select data-purchase-item-field="resourceType">${[['ingredient','Ingrediente'],['packaging','Embalagem'],['product','Produto'],['other','Outro']].map(([value, label]) => `<option value="${value}" ${refType===value?'selected':''}>${label}</option>`).join('')}</select></div><div class="field"><label>Referência</label>${refType === 'other' ? `<input data-purchase-item-field="resourceId" value="${escapeHtml(item.resourceId || '')}" placeholder="Código livre / externo">` : `<select data-purchase-item-field="resourceId">${options.map(option => `<option value="${option.id}" ${item.resourceId===option.id?'selected':''}>${escapeHtml(option.name)} (${scopeBadge(option.scope || legacyScopeForRecord(refType === 'ingredient' ? 'ingredients' : refType === 'packaging' ? 'packaging' : 'products', option))})</option>`).join('')}</select>`}</div><div class="field"><label>Descrição</label><input data-purchase-item-field="description" value="${escapeHtml(item.description || '')}" placeholder="Nome do item na compra"></div><div class="field"><label>Qtd / volume</label><input type="number" step="0.01" data-purchase-item-field="qty" value="${num(item.qty)}"></div><div class="field"><label>Unidade</label><input data-purchase-item-field="unit" value="${escapeHtml(item.unit || '')}" placeholder="g, ml, un, kg..."></div><div class="field"><label>Preço unitário</label><input type="number" step="0.0001" data-purchase-item-field="unitPrice" value="${num(item.unitPrice)}"></div><div class="field"><label>Total calculado</label><div class="info-cell"><div class="v" style="font-size:15px">${brl(num(item.qty) * num(item.unitPrice))}</div></div></div><button class="btn danger" type="button" data-remove-purchase-item="${index}">Remover</button></div>`;
}

function openEntityModal(type, record=null) {
  const data = deepClone(record || defaultRecord(type));
  if (type === 'purchaseOrders') {
    data.items = (db.purchaseItems || []).filter(item => item.orderId === data.id).map(item => ({
      id: item.id,
      resourceType: item.resourceType || 'ingredient',
      resourceId: item.resourceId || '',
      description: item.description || '',
      qty: num(item.qty),
      unit: item.unit || '',
      unitPrice: num(item.unitPrice)
    }));
    data.inputIds = Array.isArray(data.inputIds) ? data.inputIds : [];
  }
  if (type === 'expenseEntries') {
    data.inputIds = Array.isArray(data.inputIds) ? data.inputIds : [];
  }
  state.modal = { type, isEdit:!!record, data };
  renderModal();
  qs('#modalWrap').classList.add('show');
}

function closeModal() {
  state.modal = null;
  qs('#modalWrap').classList.remove('show');
}

function componentPricingOptions(selectedMode = 'markup') {
  const mode = componentPricingMode(selectedMode);
  return `<option value="markup" ${mode==='markup'?'selected':''}>Entrar no markup</option><option value="pass_through" ${mode==='pass_through'?'selected':''}>Só repassar custo</option>`;
}

function componentRowHtml(comp, index) {
  const refType = comp.refType || 'ingredient';
  const typeMap = { ingredient: 'ingredients', recipe: 'recipes', packaging: 'packaging', product: 'products' };
  const ownerScope = state.modal?.data?.scope || state.operationView;
  const options = refType === 'ingredient'
    ? recordsForOwnerScope('ingredients', ownerScope)
    : refType === 'recipe'
    ? recordsForOwnerScope('recipes', ownerScope)
    : refType === 'packaging'
      ? recordsForOwnerScope('packaging', ownerScope)
      : recordsForOwnerScope('products', ownerScope);
  const pricingHint = refType === 'packaging'
    ? 'Para embalagens como a caixa marmita, você pode só repassar o custo.'
    : 'Por padrão, esse custo entra na base do markup.';
  return `<div class="component-row" data-index="${index}"><div class="field"><label>Tipo</label><select data-comp-field="refType">${['ingredient','recipe','packaging','product'].map(v => `<option value="${v}" ${refType===v?'selected':''}>${componentTypeLabel(v)}</option>`).join('')}</select></div><div class="field"><label>Referência</label><select data-comp-field="refId">${options.map(item => `<option value="${item.id}" ${comp.refId===item.id?'selected':''}>${escapeHtml(item.name)} (${scopeBadge(item.scope || legacyScopeForRecord(typeMap[refType], item))})</option>`).join('')}</select></div><div class="field"><label>Qtd</label><input type="number" step="0.01" data-comp-field="qty" value="${comp.qty}"></div><div class="field"><label>Como precificar</label><select data-comp-field="pricingMode">${componentPricingOptions(comp.pricingMode)}</select><div class="small muted">${pricingHint}</div></div><button class="btn danger" type="button" data-remove-component="${index}">Remover</button></div>`;
}

function addonComponentRowHtml(addon, comp, addonIndex, compIndex) {
  const refType = comp.refType || 'ingredient';
  const typeMap = { ingredient: 'ingredients', recipe: 'recipes', packaging: 'packaging', product: 'products' };
  const ownerScope = state.modal?.data?.scope || state.operationView;
  const options = refType === 'ingredient'
    ? recordsForOwnerScope('ingredients', ownerScope)
    : refType === 'recipe'
      ? recordsForOwnerScope('recipes', ownerScope)
      : refType === 'packaging'
        ? recordsForOwnerScope('packaging', ownerScope)
        : recordsForOwnerScope('products', ownerScope);
  return `<div class="component-row" data-addon-index="${addonIndex}" data-addon-comp-index="${compIndex}"><div class="field"><label>Tipo</label><select data-addon-comp-field="refType">${['ingredient','recipe','packaging','product'].map(v => `<option value="${v}" ${refType===v?'selected':''}>${componentTypeLabel(v)}</option>`).join('')}</select></div><div class="field"><label>Referência</label><select data-addon-comp-field="refId">${options.map(item => `<option value="${item.id}" ${comp.refId===item.id?'selected':''}>${escapeHtml(item.name)} (${scopeBadge(item.scope || legacyScopeForRecord(typeMap[refType], item))})</option>`).join('')}</select></div><div class="field"><label>Qtd</label><input type="number" step="0.01" data-addon-comp-field="qty" value="${comp.qty}"></div><button class="btn danger" type="button" data-remove-addon-component="${addonIndex}:${compIndex}">Remover</button></div>`;
}

function addonCardHtml(addon, index) {
  const chargeMode = addon.chargeMode === 'included' ? 'included' : 'extra';
  return `<div class="cost-node" data-addon-card="${index}">
    <div class="form-grid">
      <div class="field"><label>Nome do adicional</label><input data-addon-field="name" data-addon-index="${index}" value="${escapeHtml(addon.name || '')}"></div>
      <div class="field"><label>Grupo</label><input data-addon-field="group" data-addon-index="${index}" value="${escapeHtml(addon.group || '')}" placeholder="Ex.: Tempero, queijo, molho"></div>
      <div class="field"><label>Como tratar no preço</label><select data-addon-field="chargeMode" data-addon-index="${index}"><option value="extra" ${chargeMode === 'extra' ? 'selected' : ''}>Cobrado à parte</option><option value="included" ${chargeMode === 'included' ? 'selected' : ''}>Absorvido no item</option></select></div>
      <div class="field"><label>Repasse configurado</label><input type="number" step="0.01" data-addon-field="salePriceDelta" data-addon-index="${index}" value="${num(addon.salePriceDelta)}" placeholder="0 = usar sugestão pelo markup"></div>
      <div class="field" style="grid-column:1/-1"><label>Notas</label><input data-addon-field="notes" data-addon-index="${index}" value="${escapeHtml(addon.notes || '')}" placeholder="Opcional. Ex.: escolha 1, adicional premium, etc."></div>
    </div>
    <div class="field"><label>Componentes do adicional</label><div class="note">Aqui entra só o custo opcional. Ex.: 2g de lemon pepper, cobertura cheddar, potinho extra.</div><div class="component-list">${(addon.components || []).map((comp, compIndex) => addonComponentRowHtml(addon, comp, index, compIndex)).join('') || '<div class="empty">Nenhum componente neste adicional.</div>'}</div><div class="pill-line" style="margin-top:10px;"><button class="btn ghost" type="button" data-add-addon-component="${index}">Adicionar componente ao adicional</button><button class="btn danger" type="button" data-remove-addon="${index}">Remover adicional</button></div></div>
  </div>`;
}

function modalComplexForm(data, isProduct) {
  const pricingMode = data.pricingMode === 'manual' ? 'manual' : 'auto';
  const addonsHtml = isProduct ? `<div class="field" style="margin-top:16px;"><label>Adicionais e escolhas opcionais</label><div class="note">Use esta área para mapear custos opcionais que podem ser repassados ou absorvidos depois. Isso evita duplicar produtos só por causa de um adicional.</div><div class="component-list" id="addonList">${(data.addons || []).map((addon, index) => addonCardHtml(addon, index)).join('') || '<div class="empty">Nenhum adicional ainda.</div>'}</div><button class="btn ghost" id="addAddonBtn" type="button">Adicionar adicional</button></div>` : '';
  return `<div class="form-grid"><div class="field"><label>Nome</label><input data-field="name" value="${escapeHtml(data.name)}"></div><div class="field"><label>${isProduct ? 'SKU' : 'SKU interno'}</label><input data-field="code" value="${escapeHtml(data.code || '')}" placeholder="${isProduct ? 'Ex.: GYR-LAN-ALPHA' : 'Código interno / ERP'}"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope)}</select></div>${isProduct ? `<div class="field"><label>Categoria</label><select data-field="categoryId">${db.categories.map(c => `<option value="${c.id}" ${data.categoryId===c.id?'selected':''}>${escapeHtml(c.name)}</option>`).join('')}</select></div>` : `<div class="field"><label>Armazenamento / etapa</label><input data-field="storage" value="${escapeHtml(data.storage||'')}"></div>`}${isProduct ? `<div class="field"><label>Tipo</label><select data-field="type">${['menu','combo','extra','bebida','base'].map(v => `<option value="${v}" ${data.type===v?'selected':''}>${v}</option>`).join('')}</select></div>` : `<div class="field"><label>Rendimento</label><input type="number" step="0.01" data-field="yieldQty" value="${data.yieldQty}"></div>`}${isProduct ? `<div class="field"><label>Unidade ERP</label><input data-field="erpUnit" value="${escapeHtml(data.erpUnit || 'UN')}"></div>` : `<div class="field"><label>Unidade do rendimento</label><select data-field="yieldUnit">${['g','ml','un'].map(v => `<option value="${v}" ${data.yieldUnit===v?'selected':''}>${v}</option>`).join('')}</select></div>`}${isProduct ? `<div class="field" style="grid-column:1/-1"><label>Descrição curta</label><input data-field="description" value="${escapeHtml(data.description || '')}" placeholder="Descrição comercial / ERP"></div>` : `<div class="field" style="grid-column:1/-1"><label>Descrição curta</label><input data-field="description" value="${escapeHtml(data.description || '')}" placeholder="Descrição interna / ERP"></div>`}${isProduct ? `<div class="field"><label>Regra de preco</label><select data-field="pricingMode"><option value="auto" ${pricingMode==='auto'?'selected':''}>Automatica pelo markup padrao</option><option value="manual" ${pricingMode==='manual'?'selected':''}>Preco manual</option></select></div>` : ''}${isProduct ? `<div class="field"><label>${pricingMode === 'manual' ? 'Preco de venda manual' : 'Preco pela regra padrao'}</label><input type="number" step="0.01" data-field="salePrice" value="${data.salePrice}" ${pricingMode === 'manual' ? '' : 'disabled'}></div><div class="field"><label>Explicacao da regra</label><div class="note">${pricingMode === 'manual' ? 'Este item ignora a regra automatica e usa o valor digitado por voce.' : `Com markup padrao de ${defaultMarkupPct()}%, o app vende ${defaultMarkupPct()}% acima do custo direto, ou seja, custo x ${markupMultiplier().toFixed(2)}. Componentes marcados como <strong>só repassar custo</strong> entram no preço apenas pelo valor que custam, sem multiplicar para lucro. O preco iFood soma mais 27% sobre esse valor base.`}</div></div>` : ''}${isProduct ? `<div class="field"><label>Ativo no cardápio</label><select data-field="active"><option value="true" ${data.active!==false?'selected':''}>Sim</option><option value="false" ${data.active===false?'selected':''}>Não</option></select></div><div class="field"><label>Conta no rateio fixo</label><select data-field="includeInCatalogCount"><option value="true" ${data.includeInCatalogCount!==false?'selected':''}>Sim</option><option value="false" ${data.includeInCatalogCount===false?'selected':''}>Não</option></select></div>` : ''}<div class="field" style="grid-column:1/-1"><label>Notas</label><textarea data-field="notes">${escapeHtml(data.notes||'')}</textarea></div></div><div class="field"><label>Componentes da BOM</label><div class="note">Use ingrediente, preparo, embalagem ou até outro item. Isso cobre lanches, pratos, molhos, vinagrete e combos por camadas. Em embalagens como a caixa marmita, você pode marcar <strong>só repassar custo</strong> para não aplicar o markup x3 sobre ela.</div><div class="component-list" id="componentList">${(data.components||[]).map((comp, index) => componentRowHtml(comp, index)).join('') || '<div class="empty">Nenhum componente ainda.</div>'}</div><button class="btn ghost" id="addComponentBtn" type="button">Adicionar componente</button></div>${addonsHtml}`;
}

function modalBodyHtml(type, data) {
  if (type === 'ingredients') return `<div class="form-grid"><div class="field"><label>Nome</label><input data-field="name" value="${escapeHtml(data.name)}"></div><div class="field"><label>SKU interno</label><input data-field="code" value="${escapeHtml(data.code || '')}" placeholder="Ex.: ING_PAO_FRANCES"></div><div class="field"><label>Descrição curta</label><input data-field="description" value="${escapeHtml(data.description || '')}" placeholder="Descrição para ERP / integração"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope)}</select></div><div class="field"><label>Fornecedor</label><input data-field="supplier" value="${escapeHtml(data.supplier||'')}"></div><div class="field"><label>Modelo de fornecedor</label><select data-field="supplierMode"><option value="single" ${data.supplierMode !== 'multiple' ? 'selected' : ''}>Fornecedor único</option><option value="multiple" ${data.supplierMode === 'multiple' ? 'selected' : ''}>Múltiplos fornecedores</option></select></div><div class="field"><label>Unidade-base</label><select data-field="baseUnit">${['g','ml','un'].map(u => `<option value="${u}" ${data.baseUnit===u?'selected':''}>${u}</option>`).join('')}</select></div><div class="field"><label>Unidade ERP</label><input data-field="erpUnit" value="${escapeHtml(data.erpUnit || '')}"></div><div class="field"><label>Quantidade do pacote</label><input type="number" step="0.01" data-field="purchaseQty" value="${data.purchaseQty}"></div><div class="field"><label>Preço de compra</label><input type="number" step="0.01" data-field="purchaseCost" value="${data.purchaseCost}"></div><div class="field"><label>Perda (%)</label><input type="number" step="0.01" data-field="wastePct" value="${data.wastePct}"></div><div class="field"><label>Procedência do custo</label><select data-field="sourceType"><option value="documented" ${data.sourceType === 'documented' ? 'selected' : ''}>Fonte real / comprovada</option><option value="manual" ${data.sourceType === 'manual' ? 'selected' : ''}>Manual / revisar</option><option value="estimated" ${data.sourceType === 'estimated' ? 'selected' : ''}>Pesquisado / estimado</option></select></div><div class="field" style="grid-column:1/-1"><label>Fonte / referência</label><input data-field="sourceReference" value="${escapeHtml(data.sourceReference || '')}" placeholder="Ex.: Nota fiscal 123, lista de compras, orçamento, informação manual"></div><div class="field" style="grid-column:1/-1"><label>Notas</label><textarea data-field="notes">${escapeHtml(data.notes||'')}</textarea></div></div>`;
  if (type === 'packaging') return `<div class="form-grid"><div class="field"><label>Nome</label><input data-field="name" value="${escapeHtml(data.name)}"></div><div class="field"><label>SKU interno</label><input data-field="code" value="${escapeHtml(data.code || '')}" placeholder="Ex.: PKG_POTE_60ML"></div><div class="field"><label>Descrição curta</label><input data-field="description" value="${escapeHtml(data.description || '')}" placeholder="Descrição para ERP / integração"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope)}</select></div><div class="field"><label>Fornecedor</label><input data-field="supplier" value="${escapeHtml(data.supplier||'')}"></div><div class="field"><label>Modelo de fornecedor</label><select data-field="supplierMode"><option value="single" ${data.supplierMode !== 'multiple' ? 'selected' : ''}>Fornecedor único</option><option value="multiple" ${data.supplierMode === 'multiple' ? 'selected' : ''}>Múltiplos fornecedores</option></select></div><div class="field"><label>Unidade ERP</label><input data-field="erpUnit" value="${escapeHtml(data.erpUnit || 'UN')}"></div><div class="field"><label>Quantidade do pacote</label><input type="number" step="1" data-field="purchaseQty" value="${data.purchaseQty}"></div><div class="field"><label>Preço do pacote</label><input type="number" step="0.01" data-field="purchaseCost" value="${data.purchaseCost}"></div><div class="field"><label>Procedência do custo</label><select data-field="sourceType"><option value="documented" ${data.sourceType === 'documented' ? 'selected' : ''}>Fonte real / comprovada</option><option value="manual" ${data.sourceType === 'manual' ? 'selected' : ''}>Manual / revisar</option><option value="estimated" ${data.sourceType === 'estimated' ? 'selected' : ''}>Pesquisado / estimado</option></select></div><div class="field" style="grid-column:1/-1"><label>Fonte / referência</label><input data-field="sourceReference" value="${escapeHtml(data.sourceReference || '')}" placeholder="Ex.: Nota fiscal 123, lista de compras, orçamento, informação manual"></div><div class="field" style="grid-column:1/-1"><label>Notas</label><textarea data-field="notes">${escapeHtml(data.notes||'')}</textarea></div></div>`;
  if (type === 'suppliers') return `<div class="form-grid"><div class="field"><label>Nome fantasia</label><input data-field="name" value="${escapeHtml(data.name)}"></div><div class="field"><label>SKU interno</label><input data-field="code" value="${escapeHtml(data.code || '')}" placeholder="Ex.: SUP_PMG"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope)}</select></div><div class="field"><label>Razão social</label><input data-field="legalName" value="${escapeHtml(data.legalName || '')}"></div><div class="field"><label>CNPJ</label><input data-field="cnpj" value="${escapeHtml(data.cnpj || '')}"></div><div class="field"><label>Nome do vendedor</label><input data-field="sellerName" value="${escapeHtml(data.sellerName || '')}"></div><div class="field"><label>Telefone / WhatsApp</label><input data-field="sellerPhone" value="${escapeHtml(data.sellerPhone || '')}"></div><div class="field"><label>E-mail</label><input data-field="sellerEmail" value="${escapeHtml(data.sellerEmail || '')}"></div><div class="field"><label>Endereço</label><input data-field="address" value="${escapeHtml(data.address || '')}"></div><div class="field"><label>CEP</label><input data-field="cep" value="${escapeHtml(data.cep || '')}"></div><div class="field"><label>Cidade</label><input data-field="city" value="${escapeHtml(data.city || '')}"></div><div class="field"><label>UF</label><input data-field="state" value="${escapeHtml(data.state || '')}"></div><div class="field"><label>Chave PIX</label><input data-field="pixKey" value="${escapeHtml(data.pixKey || '')}"></div><div class="field"><label>Tipo da chave PIX</label><select data-field="pixKeyType">${['aleatoria','cnpj','cpf','email','telefone'].map(v => `<option value="${v}" ${data.pixKeyType===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="field"><label>Formas de pagamento</label><input data-field="paymentMethods" value="${escapeHtml(normalizePaymentMethods(data.paymentMethods).join(', '))}" placeholder="PIX, Boleto, Cartão de crédito"></div><div class="field"><label>Procedência do cadastro</label><select data-field="evidenceType"><option value="documented" ${data.evidenceType === 'documented' ? 'selected' : ''}>Fonte real / comprovada</option><option value="review" ${data.evidenceType === 'review' ? 'selected' : ''}>Manual / revisar</option><option value="estimated" ${data.evidenceType === 'estimated' ? 'selected' : ''}>Pesquisado / estimado</option></select></div><div class="field"><label>Fonte / referência</label><input data-field="evidenceSource" value="${escapeHtml(data.evidenceSource || '')}" placeholder="Ex.: nota fiscal, orçamento, contato do vendedor"></div><div class="field" style="grid-column:1/-1"><label>Observações</label><textarea data-field="notes">${escapeHtml(data.notes||'')}</textarea></div></div><div class="note">Use <strong>Formas de pagamento</strong> para registrar PIX, boleto e cartão de crédito. O status do pagamento fica no histórico do pedido, como <strong>agendado</strong> ou <strong>pago</strong>.</div>`;
  if (type === 'purchaseOrders') return `<div class="form-grid"><div class="field"><label>Título da compra</label><input data-field="label" value="${escapeHtml(data.label || '')}" placeholder="Ex.: Compra PMG março"></div><div class="field"><label>SKU interno</label><input data-field="code" value="${escapeHtml(data.code || '')}" placeholder="Ex.: PO_PMG_2026_03_12"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope)}</select></div><div class="field"><label>Fornecedor vinculado</label><select data-field="supplierId"><option value="">Sem vínculo</option>${visibleRecords('suppliers').map(item => `<option value="${item.id}" ${data.supplierId===item.id?'selected':''}>${escapeHtml(item.name)}</option>`).join('')}</select></div><div class="field"><label>Nome livre do fornecedor</label><input data-field="supplierName" value="${escapeHtml(data.supplierName || '')}" placeholder="Use quando ainda não houver cadastro"></div><div class="field"><label>Documento / pedido</label><input data-field="documentNumber" value="${escapeHtml(data.documentNumber || '')}" placeholder="NF, PV, pedido..."></div><div class="field"><label>Data</label><input type="date" data-field="date" value="${escapeHtml(data.date || '')}"></div><div class="field"><label>Forma de pagamento</label><input data-field="paymentMethod" value="${escapeHtml(data.paymentMethod || '')}" placeholder="PIX, boleto, cartão..."></div><div class="field"><label>Status do pagamento</label><select data-field="paymentStatus">${[['pending','Pendente'],['scheduled','Agendado'],['paid','Pago']].map(([v,l]) => `<option value="${v}" ${data.paymentStatus===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Total do lançamento</label><input type="number" step="0.01" data-field="totalAmount" value="${num(data.totalAmount)}"></div><div class="field"><label>Procedência</label><select data-field="evidenceType"><option value="documented" ${data.evidenceType === 'documented' ? 'selected' : ''}>Fonte real / comprovada</option><option value="review" ${data.evidenceType === 'review' ? 'selected' : ''}>Manual / revisar</option><option value="estimated" ${data.evidenceType === 'estimated' ? 'selected' : ''}>Pesquisado / estimado</option></select></div><div class="field"><label>Fonte / referência</label><input data-field="evidenceSource" value="${escapeHtml(data.evidenceSource || '')}" placeholder="Ex.: NF em PDF, pedido, comprovante PIX"></div><div class="field" style="grid-column:1/-1"><label>Observações</label><textarea data-field="notes">${escapeHtml(data.notes || '')}</textarea></div></div><div class="field"><label>Itens comprados</label><div class="note">Aqui entram produtos comprados, volumes e preços unitários. O subtotal calculado ajuda a bater a nota com o total do lançamento.</div><div class="component-list" id="purchaseItemList">${(data.items || []).map((item, index) => purchaseItemRowHtml(item, index)).join('') || '<div class="empty">Nenhum item ainda.</div>'}</div><div class="pill-line"><button class="btn ghost" id="addPurchaseItemBtn" type="button">Adicionar item</button><span class="tag">Subtotal calculado ${brl(purchaseItemsSubtotal(data.items || []))}</span></div></div><div class="field"><label>Vincular evidências já cadastradas</label><div class="note">Use primeiro a aba Inputs para guardar PDFs, notas, comprovantes e prints em docs/inputs, depois vincule aqui.</div>${linkedInputChecklistHtml(data.inputIds || [], data.supplierId || '')}</div>`;
  if (type === 'expenseEntries') return `<div class="form-grid"><div class="field"><label>Título do gasto</label><input data-field="label" value="${escapeHtml(data.label || '')}" placeholder="Ex.: Conta de energia março"></div><div class="field"><label>SKU interno</label><input data-field="code" value="${escapeHtml(data.code || '')}" placeholder="Ex.: EXP_ENERGIA_2026_03"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope, true)}</select></div><div class="field"><label>Categoria</label><select data-field="category">${[['rent','Aluguel'],['payroll','Folha / pró-labore'],['utilities','Energia / água / gás'],['taxes','Impostos / taxas'],['logistics','Frete / logística'],['maintenance','Manutenção'],['marketing','Marketing'],['software','Software / serviços'],['supplier_purchase','Compra sem itemização'],['other','Outro gasto']].map(([v,l]) => `<option value="${v}" ${data.category===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Fornecedor vinculado</label><select data-field="supplierId"><option value="">Sem vínculo</option>${visibleRecords('suppliers').map(item => `<option value="${item.id}" ${data.supplierId===item.id?'selected':''}>${escapeHtml(item.name)}</option>`).join('')}</select></div><div class="field"><label>Nome livre do fornecedor</label><input data-field="supplierName" value="${escapeHtml(data.supplierName || '')}" placeholder="Opcional"></div><div class="field"><label>Custo fixo vinculado</label><select data-field="fixedCostId"><option value="">Sem vínculo</option>${visibleRecords('fixedCosts').map(item => `<option value="${item.id}" ${data.fixedCostId===item.id?'selected':''}>${escapeHtml(item.name)}</option>`).join('')}</select></div><div class="field"><label>Documento</label><input data-field="documentNumber" value="${escapeHtml(data.documentNumber || '')}" placeholder="Boleto, recibo, NF..."></div><div class="field"><label>Data do lançamento</label><input type="date" data-field="date" value="${escapeHtml(data.date || '')}"></div><div class="field"><label>Período de referência</label><input type="month" data-field="referencePeriod" value="${escapeHtml(data.referencePeriod || '')}"></div><div class="field"><label>Forma de pagamento</label><input data-field="paymentMethod" value="${escapeHtml(data.paymentMethod || '')}" placeholder="PIX, débito, boleto..."></div><div class="field"><label>Status do pagamento</label><select data-field="paymentStatus">${[['pending','Pendente'],['scheduled','Agendado'],['paid','Pago']].map(([v,l]) => `<option value="${v}" ${data.paymentStatus===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Valor total</label><input type="number" step="0.01" data-field="totalAmount" value="${num(data.totalAmount)}"></div><div class="field"><label>Procedência</label><select data-field="evidenceType"><option value="documented" ${data.evidenceType === 'documented' ? 'selected' : ''}>Fonte real / comprovada</option><option value="review" ${data.evidenceType === 'review' ? 'selected' : ''}>Manual / revisar</option><option value="estimated" ${data.evidenceType === 'estimated' ? 'selected' : ''}>Pesquisado / estimado</option></select></div><div class="field"><label>Fonte / referência</label><input data-field="evidenceSource" value="${escapeHtml(data.evidenceSource || '')}" placeholder="Ex.: comprovante PIX, boleto pago, recibo"></div><div class="field" style="grid-column:1/-1"><label>Observações</label><textarea data-field="notes">${escapeHtml(data.notes || '')}</textarea></div></div><div class="field"><label>Vincular evidências já cadastradas</label><div class="note">Use esta área para amarrar o gasto ao comprovante, boleto ou nota já guardado em Inputs.</div>${linkedInputChecklistHtml(data.inputIds || [], data.supplierId || '')}</div>`;
  if (type === 'inputs') return `<div class="form-grid"><div class="field"><label>Título</label><input data-field="title" value="${escapeHtml(data.title || '')}"></div><div class="field"><label>SKU interno</label><input data-field="code" value="${escapeHtml(data.code || '')}" placeholder="Ex.: INP_PMG_8997086"></div><div class="field"><label>Descrição curta</label><input data-field="description" value="${escapeHtml(data.description || '')}" placeholder="Descrição para ERP / integração"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope)}</select></div><div class="field"><label>Tipo do input</label><select data-field="inputType">${[['invoice','Nota fiscal'],['purchase_list','Lista de compras'],['quote','Orçamento'],['payment_receipt','Comprovante'],['order','Pedido'],['screenshot','Captura / print'],['other','Outro']].map(([v,l]) => `<option value="${v}" ${data.inputType===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Canal</label><select data-field="sourceChannel">${[['online','Online'],['physical_store','Loja física'],['whatsapp','WhatsApp'],['email','E-mail'],['phone','Telefone'],['other','Outro']].map(([v,l]) => `<option value="${v}" ${data.sourceChannel===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Fornecedor vinculado</label><select data-field="supplierId"><option value="">Sem vínculo</option>${visibleRecords('suppliers').map(item => `<option value="${item.id}" ${data.supplierId===item.id?'selected':''}>${escapeHtml(item.name)}</option>`).join('')}</select></div><div class="field"><label>Nome livre do fornecedor</label><input data-field="supplierName" value="${escapeHtml(data.supplierName || '')}" placeholder="Use quando ainda não houver cadastro do fornecedor"></div><div class="field"><label>Número do documento</label><input data-field="documentNumber" value="${escapeHtml(data.documentNumber || '')}"></div><div class="field"><label>Data</label><input type="date" data-field="date" value="${escapeHtml(data.date || '')}"></div><div class="field"><label>Forma de pagamento</label><input data-field="paymentMethod" value="${escapeHtml(data.paymentMethod || '')}" placeholder="PIX, boleto, cartão..."></div><div class="field"><label>Status do pagamento</label><select data-field="paymentStatus">${[['pending','Pendente'],['scheduled','Agendado'],['paid','Pago']].map(([v,l]) => `<option value="${v}" ${data.paymentStatus===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Valor total</label><input type="number" step="0.01" data-field="totalAmount" value="${num(data.totalAmount)}"></div><div class="field"><label>Nome do arquivo</label><input data-field="fileLabel" value="${escapeHtml(data.fileLabel || '')}" placeholder="Ex.: PV 10002.pdf"></div><div class="field"><label>Caminho do arquivo</label><input data-field="filePath" value="${escapeHtml(data.filePath || '')}" placeholder="/caminho/ou/pasta/do/arquivo"></div><div class="field"><label>URL / referência</label><input data-field="fileUrl" value="${escapeHtml(data.fileUrl || '')}" placeholder="Link do site, drive ou sistema"></div><div class="field"><label>Procedência</label><select data-field="evidenceType"><option value="documented" ${data.evidenceType === 'documented' ? 'selected' : ''}>Fonte real / comprovada</option><option value="review" ${data.evidenceType === 'review' ? 'selected' : ''}>Manual / revisar</option><option value="estimated" ${data.evidenceType === 'estimated' ? 'selected' : ''}>Pesquisado / estimado</option></select></div><div class="field" style="grid-column:1/-1"><label>Fonte / referência</label><input data-field="evidenceSource" value="${escapeHtml(data.evidenceSource || '')}" placeholder="Ex.: print do site, nota fiscal, orçamento, comprovante PIX"></div><div class="field" style="grid-column:1/-1"><label>Observações</label><textarea data-field="notes">${escapeHtml(data.notes || '')}</textarea></div></div><div class="note">Use esta aba para guardar o rastro do custo: nota fiscal, pedido online, print, orçamento, lista de compras ou comprovante.</div>`;
  if (type === 'fixedCosts') return `<div class="form-grid"><div class="field"><label>Nome</label><input data-field="name" value="${escapeHtml(data.name)}"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope, true)}</select></div><div class="field"><label>Valor mensal</label><input type="number" step="0.01" data-field="amount" value="${data.amount}"></div><div class="field" style="grid-column:1/-1"><label>Notas</label><textarea data-field="notes">${escapeHtml(data.notes||'')}</textarea></div></div>`;
  if (type === 'recipes') return modalComplexForm(data, false);
  if (type === 'products') return modalComplexForm(data, true);
  return '';
}

function renderModal() {
  if (!state.modal) return;
  const {type, isEdit, data} = state.modal;
  qs('#modalTitle').textContent = `${isEdit ? 'Editar' : 'Novo'} ${modalEntityName(type)}`;
  qs('#modalSubtitle').textContent = modalSubtitle(type);
  qs('#modalBody').innerHTML = modalBodyHtml(type, data);
  bindModalFields();
}

function bindModalFields() {
  qsa('[data-field]', qs('#modalBody')).forEach(el => el.oninput = el.onchange = () => {
    const key = el.dataset.field;
    let value = el.value;
    if (['purchaseQty','purchaseCost','wastePct','amount','yieldQty','salePrice','totalAmount'].includes(key)) value = num(value);
    if (['active','includeInCatalogCount'].includes(key)) value = value === 'true';
    state.modal.data[key] = value;
    if (key === 'supplierId') {
      const supplier = byId('suppliers', value);
      if (supplier && (!state.modal.data.supplierName || state.modal.type !== 'inputs')) {
        state.modal.data.supplierName = supplier.name;
      }
    }
    if (key === 'fixedCostId' && state.modal.type === 'expenseEntries') {
      const fixedCost = byId('fixedCosts', value);
      if (fixedCost && !String(state.modal.data.label || '').trim()) state.modal.data.label = fixedCost.name;
    }
    if (key === 'pricingMode' || (key === 'scope' && ['purchaseOrders', 'expenseEntries', 'products', 'recipes'].includes(state.modal.type)) || (key === 'supplierId' && ['purchaseOrders', 'expenseEntries'].includes(state.modal.type)) || (key === 'fixedCostId' && state.modal.type === 'expenseEntries')) renderModal();
  });

  const addBtn = qs('#addComponentBtn');
  if (addBtn) addBtn.onclick = () => {
    state.modal.data.components = state.modal.data.components || [];
    state.modal.data.components.push({refType:'ingredient', refId: recordsForOwnerScope('ingredients', state.modal.data.scope)[0]?.id || '', qty:1, pricingMode:'markup'});
    renderModal();
  };

  const addAddonBtn = qs('#addAddonBtn');
  if (addAddonBtn) addAddonBtn.onclick = () => {
    state.modal.data.addons = state.modal.data.addons || [];
    state.modal.data.addons.push({
      id: uid('add'),
      name: '',
      group: '',
      chargeMode: 'extra',
      salePriceDelta: 0,
      notes: '',
      components: [{ refType:'ingredient', refId: recordsForOwnerScope('ingredients', state.modal.data.scope)[0]?.id || '', qty:1 }]
    });
    renderModal();
  };

  qsa('[data-remove-component]', qs('#modalBody')).forEach(btn => btn.onclick = () => {
    state.modal.data.components.splice(Number(btn.dataset.removeComponent), 1);
    renderModal();
  });

  qsa('[data-remove-addon]', qs('#modalBody')).forEach(btn => btn.onclick = () => {
    state.modal.data.addons.splice(Number(btn.dataset.removeAddon), 1);
    renderModal();
  });

  qsa('[data-add-addon-component]', qs('#modalBody')).forEach(btn => btn.onclick = () => {
    const addon = state.modal.data.addons[Number(btn.dataset.addAddonComponent)];
    addon.components = addon.components || [];
    addon.components.push({ refType:'ingredient', refId: recordsForOwnerScope('ingredients', state.modal.data.scope)[0]?.id || '', qty:1 });
    renderModal();
  });

  qsa('[data-remove-addon-component]', qs('#modalBody')).forEach(btn => btn.onclick = () => {
    const [addonIndex, compIndex] = btn.dataset.removeAddonComponent.split(':').map(Number);
    state.modal.data.addons[addonIndex].components.splice(compIndex, 1);
    renderModal();
  });

  const addPurchaseItemBtn = qs('#addPurchaseItemBtn');
  if (addPurchaseItemBtn) addPurchaseItemBtn.onclick = () => {
    state.modal.data.items = state.modal.data.items || [];
    const first = purchaseResourceRecords('ingredient', state.modal.data.scope)[0];
    const meta = first ? purchaseResourceMeta('ingredient', first.id) : null;
    state.modal.data.items.push({
      id: uid('pit'),
      resourceType: 'ingredient',
      resourceId: first?.id || '',
      description: meta?.name || '',
      qty: 1,
      unit: meta?.unit || 'un',
      unitPrice: meta?.unitPrice || 0
    });
    renderModal();
  };

  qsa('[data-remove-purchase-item]', qs('#modalBody')).forEach(btn => btn.onclick = () => {
    state.modal.data.items.splice(Number(btn.dataset.removePurchaseItem), 1);
    renderModal();
  });

  qsa('.component-row[data-purchase-item-index]', qs('#modalBody')).forEach(row => {
    const index = Number(row.dataset.purchaseItemIndex);
    qsa('[data-purchase-item-field]', row).forEach(input => input.onchange = () => {
      const key = input.dataset.purchaseItemField;
      let value = input.value;
      if (['qty', 'unitPrice'].includes(key)) value = num(value);
      const current = state.modal.data.items[index];
      current[key] = value;
      if (key === 'resourceType') {
        const nextOptions = purchaseResourceRecords(value, state.modal.data.scope);
        current.resourceId = value === 'other' ? '' : (nextOptions[0]?.id || '');
        const meta = purchaseResourceMeta(current.resourceType, current.resourceId);
        current.description = meta?.name || '';
        current.unit = meta?.unit || 'un';
        current.unitPrice = meta?.unitPrice || 0;
        renderModal();
        return;
      }
      if (key === 'resourceId' && current.resourceType !== 'other') {
        const meta = purchaseResourceMeta(current.resourceType, value);
        if (meta) {
          current.description = meta.name;
          current.unit = meta.unit;
          if (!num(current.unitPrice)) current.unitPrice = meta.unitPrice || 0;
        }
        renderModal();
        return;
      }
      if (['qty', 'unitPrice'].includes(key)) renderModal();
    });
  });

  qsa('[data-input-link]', qs('#modalBody')).forEach(input => input.onchange = () => {
    const selected = qsa('[data-input-link]:checked', qs('#modalBody')).map(item => item.dataset.inputLink);
    state.modal.data.inputIds = selected;
  });

  qsa('.component-row', qs('#modalBody')).forEach(row => {
    if (row.dataset.addonIndex) return;
    if (row.dataset.purchaseItemIndex) return;
    const index = Number(row.dataset.index);
    qsa('[data-comp-field]', row).forEach(input => input.oninput = input.onchange = () => {
      const key = input.dataset.compField;
      let value = input.value;
      if (key === 'qty') value = num(value);
      if (key === 'pricingMode') value = componentPricingMode(value);
      state.modal.data.components[index][key] = value;
      if (key === 'refType') {
        const list = value === 'ingredient'
          ? recordsForOwnerScope('ingredients', state.modal.data.scope)
          : value === 'recipe'
            ? recordsForOwnerScope('recipes', state.modal.data.scope)
            : value === 'packaging'
              ? recordsForOwnerScope('packaging', state.modal.data.scope)
              : recordsForOwnerScope('products', state.modal.data.scope);
        state.modal.data.components[index].refId = list[0]?.id || '';
        renderModal();
      }
    });
  });

  qsa('[data-addon-field]', qs('#modalBody')).forEach(input => input.oninput = input.onchange = () => {
    const addonIndex = Number(input.dataset.addonIndex);
    const key = input.dataset.addonField;
    let value = input.value;
    if (key === 'salePriceDelta') value = num(value);
    state.modal.data.addons[addonIndex][key] = value;
  });

  qsa('[data-addon-comp-field]', qs('#modalBody')).forEach(input => input.oninput = input.onchange = () => {
    const row = input.closest('[data-addon-index]');
    const addonIndex = Number(row.dataset.addonIndex);
    const compIndex = Number(row.dataset.addonCompIndex);
    const key = input.dataset.addonCompField;
    let value = input.value;
    if (key === 'qty') value = num(value);
    state.modal.data.addons[addonIndex].components[compIndex][key] = value;
    if (key === 'refType') {
      const list = value === 'ingredient'
        ? recordsForOwnerScope('ingredients', state.modal.data.scope)
        : value === 'recipe'
          ? recordsForOwnerScope('recipes', state.modal.data.scope)
          : value === 'packaging'
            ? recordsForOwnerScope('packaging', state.modal.data.scope)
            : recordsForOwnerScope('products', state.modal.data.scope);
      state.modal.data.addons[addonIndex].components[compIndex].refId = list[0]?.id || '';
      renderModal();
    }
  });
}

function saveModal() {
  if (!state.modal) return;
  const {type, data} = state.modal;
  if (type === 'purchaseOrders' && !String(data.label || '').trim()) {
    data.label = data.supplierName ? `Compra ${data.supplierName}` : 'Compra';
  }
  if (type === 'expenseEntries' && !String(data.label || '').trim()) {
    data.label = data.supplierName ? `Gasto ${data.supplierName}` : expenseCategoryLabel(data.category || 'other');
  }
  const mainLabel = type === 'inputs'
    ? data.title
    : type === 'purchaseOrders' || type === 'expenseEntries'
      ? data.label
      : data.name;
  if (!String(mainLabel || '').trim()) { showToast('Nome obrigatório', 'Preencha o nome antes de salvar.', 'error'); return; }
  if (type === 'products') {
    data.components = (data.components || []).map(comp => ({
      ...comp,
      qty: num(comp.qty),
      pricingMode: componentPricingMode(comp.pricingMode)
    })).filter(comp => comp.refId && comp.qty > 0);
  }
  if (type === 'suppliers') {
    data.paymentMethods = normalizePaymentMethods(data.paymentMethods);
  }
  if (type === 'purchaseOrders') {
    data.inputIds = [...new Set((data.inputIds || []).filter(Boolean))];
    data.totalAmount = num(data.totalAmount) || purchaseItemsSubtotal(data.items || []);
    data.items = (data.items || []).map(item => ({
      id: item.id || uid('pit'),
      orderId: data.id,
      supplierId: data.supplierId || '',
      resourceType: item.resourceType || 'other',
      resourceId: item.resourceId || '',
      description: item.description || purchaseResourceMeta(item.resourceType, item.resourceId)?.name || 'Item de compra',
      qty: num(item.qty),
      unit: item.unit || purchaseResourceMeta(item.resourceType, item.resourceId)?.unit || 'un',
      unitPrice: num(item.unitPrice),
      totalPrice: num(item.qty) * num(item.unitPrice),
      evidenceType: data.evidenceType || procurementEvidenceType(data),
      evidenceSource: data.evidenceSource || 'Compra cadastrada manualmente'
    })).filter(item => item.description && item.qty > 0);
  }
  if (type === 'expenseEntries') {
    data.inputIds = [...new Set((data.inputIds || []).filter(Boolean))];
    data.totalAmount = num(data.totalAmount);
  }
  const list = db[type];
  const idx = list.findIndex(x => x.id === data.id);
  if (type === 'purchaseOrders') {
    const payload = deepClone({ ...data });
    delete payload.items;
    if (idx >= 0) list[idx] = payload; else list.unshift(payload);
    db.purchaseItems = (db.purchaseItems || []).filter(item => item.orderId !== data.id).concat(deepClone(data.items || []));
    state.selectedLedgerEntryId = `purchaseOrders:${data.id}`;
    state.selectedLedgerItemId = data.items?.[0]?.id ? `purchaseItem:${data.items[0].id}` : null;
  } else {
    if (idx >= 0) list[idx] = deepClone(data); else list.unshift(deepClone(data));
    if (type === 'expenseEntries') state.selectedLedgerEntryId = `expenseEntries:${data.id}`;
  }
  if (type === 'products') state.selectedProductId = data.id;
  if (type === state.resourceTab) state.selectedResourceId = data.id;
  closeModal();
  saveDb();
  showToast(idx >= 0 ? 'Cadastro atualizado' : 'Cadastro criado', `O ${modalEntityName(type)} foi salvo na base local.`, 'success');
}

function renderAll() {
  renderNav();
  renderSideStats();
  renderPageMeta();
  renderDashboard();
  renderCatalog();
  renderLedger();
  renderResources();
  renderConfirmDialog();
}

function exportFile(content, filename, mimeType = 'application/json') {
  const blob = new Blob([content], {type: mimeType});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function resourceTypeLabel(type) {
  return {
    ingredient: 'Ingrediente',
    packaging: 'Embalagem',
    recipe: 'Preparo',
    product: 'Produto',
    other: 'Outro',
    ingredients: 'Ingrediente',
    packaging: 'Embalagem',
    recipes: 'Preparo',
    products: 'Produto'
  }[type] || type;
}

function csvEscape(value) {
  const text = value == null ? '' : String(value);
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function csvLine(values) {
  return values.map(csvEscape).join(',');
}

function buildErpExport() {
  const exportedAt = new Date().toISOString();
  const operation = state.operationView || 'gyros';

  const supplierRows = (db.suppliers || []).map(supplier => {
    const linkedIngredients = (db.ingredients || []).filter(item => item.supplier === supplier.name).length;
    const linkedPackaging = (db.packaging || []).filter(item => item.supplier === supplier.name).length;
    const linkedInputs = (db.inputs || []).filter(item => item.supplierId === supplier.id || item.supplierName === supplier.name).length;
    const linkedOrders = (db.purchaseOrders || []).filter(item => item.supplierId === supplier.id).length;
    return {
      id: supplier.id,
      code: supplier.code || '',
      scope: supplier.scope || 'gyros',
      nome: supplier.name || '',
      razao_social: supplier.legalName || '',
      cnpj: supplier.cnpj || '',
      vendedor: supplier.sellerName || '',
      telefone: supplier.sellerPhone || '',
      email: supplier.sellerEmail || '',
      endereco: supplier.address || '',
      cep: supplier.cep || '',
      cidade: supplier.city || '',
      estado: supplier.state || '',
      chave_pix: supplier.pixKey || '',
      tipo_chave_pix: supplier.pixKeyType || '',
      formas_pagamento: normalizePaymentMethods(supplier.paymentMethods).join(' | '),
      procedencia: procurementEvidenceLabel(procurementEvidenceType(supplier)),
      observacoes: supplier.notes || '',
      evidencia: supplier.evidenceSource || '',
      registros_vinculados: linkedIngredients + linkedPackaging,
      pedidos_vinculados: linkedOrders,
      inputs_vinculados: linkedInputs
    };
  });

  const ingredientRows = (db.ingredients || []).map(item => ({
    id: item.id,
    code: item.code || '',
    nome: item.name || '',
    descricao: item.description || item.notes || '',
    escopo: item.scope || 'gyros',
    categoria: item.category || '',
    unidade_base: item.baseUnit || '',
    unidade_erp: item.erpUnit || String(item.baseUnit || '').toUpperCase(),
    quantidade_compra: num(item.purchaseQty),
    custo_compra: num(item.purchaseCost),
    custo_unitario_real: ingredientUnitCost(item),
    perda_pct: num(item.wastePct),
    fornecedor_principal: item.supplier || '',
    modelo_fornecedor: supplierModeLabel(item.supplierMode),
    procedencia: procurementEvidenceLabel(procurementEvidenceType(item)),
    referencia_preco: item.sourceReference || '',
    observacoes: item.notes || ''
  }));

  const packagingRows = (db.packaging || []).map(item => ({
    id: item.id,
    code: item.code || '',
    nome: item.name || '',
    descricao: item.description || item.notes || '',
    escopo: item.scope || 'gyros',
    unidade_base: item.baseUnit || 'embalagem',
    unidade_erp: item.erpUnit || 'UN',
    quantidade_compra: num(item.purchaseQty),
    custo_compra: num(item.purchaseCost),
    custo_unitario_real: packagingUnitCost(item),
    fornecedor_principal: item.supplier || '',
    modelo_fornecedor: supplierModeLabel(item.supplierMode),
    procedencia: procurementEvidenceLabel(procurementEvidenceType(item)),
    referencia_preco: item.sourceReference || '',
    observacoes: item.notes || ''
  }));

  const recipeRows = (db.recipes || []).map(recipe => {
    const nodes = resolveComponentList(recipe.components || [], [`recipe_export:${recipe.id}`]);
    const batchCost = nodes.reduce((sum, node) => sum + node.cost, 0);
    const unitCost = batchCost / Math.max(1, num(recipe.yieldQty));
    return {
      id: recipe.id,
      code: recipe.code || '',
      nome: recipe.name || '',
      descricao: recipe.description || recipe.notes || '',
      escopo: recipe.scope || 'gyros',
      rendimento_qtd: num(recipe.yieldQty),
      rendimento_unidade: recipe.yieldUnit || '',
      custo_lote: batchCost,
      custo_por_unidade: unitCost,
      armazenamento: recipe.storage || '',
      observacoes: recipe.notes || ''
    };
  });

  const productRows = (db.products || []).map(product => {
    const computed = computeProduct(product.id, operation);
    return {
      id: product.id,
      code: product.code || '',
      nome: product.name || '',
      descricao: product.description || product.notes || '',
      escopo: product.scope || 'gyros',
      categoria: categoryName(product.categoryId),
      categoria_code: byId('categories', product.categoryId)?.code || '',
      tipo: product.type || '',
      erp_product_type: product.erpProductType || (product.type === 'drink' ? 'component' : 'custom'),
      product_condition: product.productCondition || 'new',
      unidade_erp: product.erpUnit || 'UN',
      ativo: product.active !== false,
      conta_no_catalogo: product.includeInCatalogCount !== false,
      modo_preco: productPricingMode(product),
      custo_direto: computed?.directCost || 0,
      custo_repassado: computed?.passThroughCost || 0,
      base_markup: computed?.markupBaseCost || 0,
      preco_venda: computed?.salePrice || 0,
      preco_ifood: computed?.ifoodSalePrice || 0,
      preco_com_rateio_referencia: computed?.autoSalePriceWithFixed || 0,
      rateio_fixo: computed?.fixedCost || 0,
      custo_total_referencia: computed?.totalCost || 0,
      margem_sem_rateio_pct: computed?.marginPct || 0,
      markup_atual_x: computed?.markup || 0,
      regra_preco: pricingRuleLabel(product),
      observacoes: product.notes || ''
    };
  });

  const fichaTecnicaRows = [];
  (db.products || []).forEach(product => {
    (product.components || []).forEach((component, index) => {
      const node = resolveNode(component.refType, component.refId, num(component.qty), [`product_export:${product.id}:${index}`]);
      fichaTecnicaRows.push({
        produto_id: product.id,
        produto_code: product.code || '',
        produto: product.name || '',
        ordem: index + 1,
        componente_tipo: componentTypeLabel(component.refType),
        componente_id: component.refId || '',
        componente_code: byId(`${component.refType === 'ingredient' ? 'ingredients' : component.refType === 'packaging' ? 'packaging' : component.refType === 'recipe' ? 'recipes' : 'products'}`, component.refId)?.code || '',
        componente: node.title || component.refId || '',
        quantidade: num(component.qty),
        custo_total_componente: node.cost || 0,
        modo_precificacao: componentPricingModeLabel(component.pricingMode),
        entra_no_markup: componentPricingMode(component.pricingMode) === 'markup'
      });
    });
  });

  const addonRows = [];
  (db.products || []).forEach(product => {
    const computed = computeProduct(product.id, operation);
    (computed?.addons || []).forEach((addon, index) => {
      addonRows.push({
        produto_id: product.id,
        produto_code: product.code || '',
        produto: product.name || '',
        adicional_id: addon.id || `${product.id}_addon_${index + 1}`,
        adicional_code: addon.code || '',
        adicional: addon.name || `Adicional ${index + 1}`,
        descricao: addon.description || addon.notes || '',
        grupo: addon.group || '',
        grupo_tipo: addon.groupType || 'addon',
        contexto: product.categoryId === 'cat_almoco' ? 'almoco' : 'lanche',
        modo_cobranca: addonChargeModeLabel(addon.chargeMode),
        modo_preco: addon.salePriceMode || 'auto',
        custo_direto: addon.directCost || 0,
        venda_base: addon.effectiveSalePrice || 0,
        venda_ifood: addon.ifoodSalePrice || 0,
        venda_configurada: addon.configuredSalePrice || 0,
        venda_sugerida: addon.suggestedSalePrice || 0
      });
      (addon.components || []).forEach((component, componentIndex) => {
        const node = resolveNode(component.refType, component.refId, num(component.qty), [`addon_export:${product.id}:${addon.id || index}:${componentIndex}`]);
        fichaTecnicaRows.push({
          produto_id: product.id,
          produto_code: product.code || '',
          produto: `${product.name || ''} > ${addon.name || `Adicional ${index + 1}`}`,
          ordem: componentIndex + 1,
          componente_tipo: componentTypeLabel(component.refType),
          componente_id: component.refId || '',
          componente_code: byId(`${component.refType === 'ingredient' ? 'ingredients' : component.refType === 'packaging' ? 'packaging' : component.refType === 'recipe' ? 'recipes' : 'products'}`, component.refId)?.code || '',
          componente: node.title || component.refId || '',
          quantidade: num(component.qty),
          custo_total_componente: node.cost || 0,
          modo_precificacao: 'adicional',
          entra_no_markup: addon.chargeMode !== 'included'
        });
      });
    });
  });

  const supplierItemRows = [];
  ['ingredients', 'packaging'].forEach(type => {
    (db[type] || []).forEach(item => {
      supplierItemRows.push({
        recurso_tipo: resourceTypeLabel(type),
        recurso_id: item.id,
        recurso_code: item.code || '',
        recurso: item.name || '',
        fornecedor: item.supplier || '',
        modelo_fornecedor: supplierModeLabel(item.supplierMode),
        procedencia: procurementEvidenceLabel(procurementEvidenceType(item)),
        referencia_preco: item.sourceReference || ''
      });
    });
  });

  const purchaseOrderRows = (db.purchaseOrders || []).map(order => {
    const supplier = byId('suppliers', order.supplierId);
    return {
      id: order.id,
      code: order.code || '',
      fornecedor_id: order.supplierId || '',
      fornecedor: supplier?.name || order.supplierName || '',
      data: order.date || '',
      documento: order.documentNumber || order.invoiceNumber || '',
      meio_pagamento: order.paymentMethod || '',
      status_pagamento: order.paymentStatus || '',
      valor_total: num(order.totalAmount),
      procedencia: procurementEvidenceLabel(procurementEvidenceType(order)),
      evidencia: order.evidenceSource || '',
      input_ids: (order.inputIds || []).join(' | '),
      observacoes: order.notes || ''
    };
  });

  const purchaseItemRows = (db.purchaseItems || []).map(item => {
    const order = (db.purchaseOrders || []).find(orderRow => orderRow.id === item.orderId);
    const supplier = order ? byId('suppliers', order.supplierId) : null;
    return {
      id: item.id,
      code: item.code || '',
      pedido_id: item.orderId || '',
      fornecedor: supplier?.name || '',
      descricao: item.description || '',
      recurso_tipo: item.resourceType || '',
      recurso_id: item.resourceId || '',
      quantidade: num(item.qty),
      unidade: item.unit || '',
      preco_unitario: num(item.unitPrice),
      valor_total: num(item.totalPrice),
      status: item.status || '',
      data_pedido: order?.date || ''
    };
  });

  const inputRows = (db.inputs || []).map(item => {
    const supplier = byId('suppliers', item.supplierId);
    return {
      id: item.id,
      code: item.code || '',
      titulo: item.title || '',
      descricao: item.description || item.notes || '',
      tipo: inputTypeLabel(item.inputType || ''),
      canal: inputChannelLabel(item.sourceChannel || ''),
      fornecedor: supplier?.name || item.supplierName || '',
      numero_documento: item.documentNumber || '',
      data: item.date || '',
      meio_pagamento: item.paymentMethod || '',
      status_pagamento: item.paymentStatus || '',
      valor_total: num(item.totalAmount),
      arquivo_rotulo: item.fileLabel || '',
      arquivo_caminho: item.filePath || '',
      arquivo_caminhos: inputAttachmentFiles(item).join(' | '),
      arquivo_url: item.fileUrl || '',
      procedencia: procurementEvidenceLabel(procurementEvidenceType(item)),
      evidencia: item.evidenceSource || '',
      observacoes: item.notes || ''
    };
  });

  const expenseRows = (db.expenseEntries || []).map(item => {
    const supplier = byId('suppliers', item.supplierId);
    const fixedCost = byId('fixedCosts', item.fixedCostId);
    return {
      id: item.id,
      code: item.code || '',
      escopo: item.scope || 'gyros',
      categoria: expenseCategoryLabel(item.category || ''),
      fornecedor_id: item.supplierId || '',
      fornecedor: supplier?.name || item.supplierName || '',
      custo_fixo_id: item.fixedCostId || '',
      custo_fixo: fixedCost?.name || '',
      data: item.date || '',
      periodo_referencia: item.referencePeriod || '',
      documento: item.documentNumber || '',
      meio_pagamento: item.paymentMethod || '',
      status_pagamento: item.paymentStatus || '',
      valor_total: num(item.totalAmount),
      procedencia: procurementEvidenceLabel(procurementEvidenceType(item)),
      evidencia: item.evidenceSource || '',
      input_ids: (item.inputIds || []).join(' | '),
      observacoes: item.notes || ''
    };
  });

  return {
    meta: {
      exportedAt,
      sourceApp: 'PWA de Custos do Cardapio',
      sourceFormat: 'erp-normalized-json',
      operationView: operation,
      currency: 'BRL',
      markupPct: defaultMarkupPct(),
      ifoodMultiplier: ifoodMultiplier()
    },
    suppliers: supplierRows,
    ingredients: ingredientRows,
    packaging: packagingRows,
    recipes: recipeRows,
    products: productRows,
    product_components: fichaTecnicaRows,
    product_addons: addonRows,
    supplier_items: supplierItemRows,
    purchase_orders: purchaseOrderRows,
    purchase_items: purchaseItemRows,
    expense_entries: expenseRows,
    inputs: inputRows
  };
}

function buildErpCatalogCsv() {
  const headers = [
    'category_name',
    'category_parent_name',
    'product_name',
    'product_description',
    'product_sku',
    'product_price',
    'product_type',
    'product_condition',
    'product_unit',
    'product_active',
    'group_name',
    'group_required',
    'group_minimum',
    'group_maximum',
    'group_order',
    'group_price_calculation',
    'group_active',
    'item_name',
    'item_description',
    'item_sku',
    'item_price',
    'item_quantity',
    'item_product_type',
    'item_unit',
    'item_active'
  ];

  const rows = [csvLine(headers)];
  const products = (db.products || []).filter(product => product.scope !== 'greguinho');

  for (const product of products) {
    const computed = computeProduct(product.id, state.operationView || 'gyros');
    const category = byId('categories', product.categoryId);
    const categoryParent = category?.parentId ? byId('categories', category.parentId) : null;
    const groupedAddons = new Map();
    for (const addon of product.addons || []) {
      const key = addon.group || 'Adicionais';
      if (!groupedAddons.has(key)) groupedAddons.set(key, []);
      groupedAddons.get(key).push(addon);
    }

    if (!groupedAddons.size) {
      rows.push(csvLine([
        category?.name || '',
        categoryParent?.name || '',
        product.name || '',
        product.description || product.notes || '',
        product.code || '',
        safe(computed?.salePrice).toFixed(2),
        product.erpProductType || (product.type === 'drink' ? 'component' : 'custom'),
        product.productCondition || 'new',
        product.erpUnit || 'UN',
        product.active === false ? 0 : 1,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ]));
      continue;
    }

    let groupOrder = 1;
    for (const [groupName, addons] of groupedAddons.entries()) {
      const firstAddon = addons[0];
      const required = firstAddon.required === true ? 1 : 0;
      const minimum = firstAddon.minimum != null ? num(firstAddon.minimum) : (required ? 1 : 0);
      const maximum = firstAddon.maximum != null ? num(firstAddon.maximum) : addons.length;
      const priceCalculation = firstAddon.priceCalculation === 'included'
        ? 'free'
        : firstAddon.priceCalculation === 'free'
          ? 'free'
          : 'sum';
      for (const addon of addons) {
        const computedAddon = computeAddon(addon, `csv:${product.id}:${addon.id || addon.name}`);
        rows.push(csvLine([
          category?.name || '',
          categoryParent?.name || '',
          product.name || '',
          product.description || product.notes || '',
          product.code || '',
          safe(computed?.salePrice).toFixed(2),
          product.erpProductType || (product.type === 'drink' ? 'component' : 'custom'),
          product.productCondition || 'new',
          product.erpUnit || 'UN',
          product.active === false ? 0 : 1,
          groupName,
          required,
          minimum,
          maximum,
          groupOrder,
          priceCalculation,
          addon.active === false ? 0 : 1,
          addon.name || '',
          addon.description || addon.notes || '',
          addon.code || '',
          safe(computedAddon.effectiveSalePrice).toFixed(2),
          1,
          'component',
          addon.erpUnit || 'UN',
          addon.active === false ? 0 : 1
        ]));
      }
      groupOrder += 1;
    }
  }

  return rows.join('\n');
}

qs('#btnExport').onclick = () => {
  exportFile(JSON.stringify(db, null, 2), 'gyros-custos-cardapio.json');
  showToast('JSON exportado', 'Leve esse arquivo como backup da etapa atual.', 'success');
};

qs('#btnExportErp').onclick = () => {
  const erpPayload = buildErpExport();
  exportFile(JSON.stringify(erpPayload, null, 2), 'gyros-custos-erp-export.json');
  showToast('ERP exportado', 'Arquivo estruturado por tabelas para integrar com ERP ou planilhas.', 'success');
};

qs('#btnExportErpCsv').onclick = () => {
  const csv = buildErpCatalogCsv();
  exportFile(csv, 'gyros-catalogo-erp-import.csv', 'text/csv;charset=utf-8;');
  showToast('CSV ERP exportado', 'Arquivo compatível com o modelo de importação do catálogo do ERP.', 'success');
};

qs('#importFile').onchange = async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    db = normalizeDb(JSON.parse(text));
    localStorage.setItem(OFFICIAL_DB_HASH_KEY, hashString(JSON.stringify(db)));
    saveDb();
    showToast('JSON importado', 'A base local foi substituída pelo arquivo selecionado.', 'success');
  } catch (err) {
    showToast('Importação falhou', 'Não consegui ler esse JSON.', 'error');
  } finally {
    e.target.value = '';
  }
};

qs('#btnReset').onclick = async () => {
  const confirmed = await askConfirm({
    title: 'Restaurar base inicial',
    subtitle: 'Isso substitui toda a base local atual.',
    message: 'Quer restaurar a base de exemplo deste projeto agora?'
  });
  if (!confirmed) return;
  const officialDb = await loadOfficialDb();
  db = officialDb ? deepClone(officialDb) : deepClone(SEED_DATA);
  localStorage.setItem(OFFICIAL_DB_HASH_KEY, hashString(JSON.stringify(db)));
  saveDb();
  showToast('Base restaurada', officialDb ? 'A base local voltou para o JSON oficial do projeto.' : 'A base local voltou para o modelo inicial.', 'success');
};

qs('#modalClose').onclick = closeModal;
qs('#modalCancel').onclick = closeModal;
qs('#modalSave').onclick = saveModal;
qs('#modalWrap').addEventListener('click', (e) => { if (e.target === qs('#modalWrap')) closeModal(); });
qs('#confirmCancel').onclick = () => closeConfirmDialog(false);
qs('#confirmAccept').onclick = () => closeConfirmDialog(true);
qs('#confirmWrap').addEventListener('click', (e) => { if (e.target === qs('#confirmWrap')) closeConfirmDialog(false); });
qs('#navToggle').onclick = () => (state.mobileNavOpen ? closeMobileNav() : openMobileNav());
qs('#sidebarBackdrop').onclick = closeMobileNav;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  state.deferredPrompt = e;
  qs('#btnInstall').style.display = 'inline-flex';
});
qs('#btnInstall').onclick = async () => {
  if (!state.deferredPrompt) return;
  state.deferredPrompt.prompt();
  await state.deferredPrompt.userChoice;
  state.deferredPrompt = null;
  qs('#btnInstall').style.display = 'none';
  showToast('Instalação iniciada', 'Se o navegador permitir, o app será instalado no dispositivo.', 'info');
};
if ('serviceWorker' in navigator && !isLocalDevHost()) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(console.error));
}

async function initApp() {
  applyUrlStateFromSearch();
  await disableServiceWorkerForLocalDev();
  const syncStatus = await syncOfficialDb();
  renderAll();
  if (syncStatus === 'dev-sync') {
    showToast('Base local alinhada', 'No localhost, o app está sempre lendo o JSON oficial atual do projeto.', 'info');
  }
  if (syncStatus === 'loaded') {
    showToast('Base oficial carregada', 'O app importou automaticamente o JSON oficial do projeto.', 'success');
  }
  if (syncStatus === 'updated') {
    showToast('Base oficial atualizada', 'O app detectou um JSON mais novo e sincronizou a base local.', 'success');
  }
}

window.addEventListener('popstate', () => {
  applyUrlStateFromSearch();
  renderAll();
});

initApp();
