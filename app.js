const SEED_DATA = {"meta": {"businessName": "Gyros Greek Barbecue", "projectName": "PWA de Custos do Cardápio", "version": 1}, "settings": {"targetMarginPct": 68, "fixedAllocationMode": "catalog_items", "customMonthlyUnits": 1200, "currency": "BRL"}, "categories": [{"id": "cat_assinaturas", "name": "Lanches — Assinaturas (sem troca)", "active": true}, {"id": "cat_monte", "name": "Monte o seu Gyros (personalização controlada)", "active": true}, {"id": "cat_combos", "name": "Combos rápidos (sem configurar — só observação)", "active": true}, {"id": "cat_batatas", "name": "Batatas (Fritas e Gratinadas)", "active": true}, {"id": "cat_gratinados", "name": "Porções Gratinadas (Carne)", "active": true}, {"id": "cat_almoco", "name": "Almoço (embalado por porções)", "active": true}, {"id": "cat_sobremesas", "name": "Sobremesas", "active": true}, {"id": "cat_molhos", "name": "Molhos & Extras (à parte)", "active": true}, {"id": "cat_bebidas", "name": "Bebidas", "active": true}, {"id": "cat_familia", "name": "Combos Família", "active": true}, {"id": "cat_base_interna", "name": "Base interna (não conta no cardápio)", "active": false}], "ingredients": [{"id": "ing_pao_frances", "name": "Pão francês", "baseUnit": "un", "purchaseQty": 30, "purchaseCost": 24.0, "wastePct": 0, "supplier": "Padaria", "notes": "Custo por caixa/pacote"}, {"id": "ing_parmesao", "name": "Parmesão ralado", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 58.0, "wastePct": 1, "supplier": "Laticínio", "notes": "Usado no pão"}, {"id": "ing_fraldinha", "name": "Fraldinha preparada", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 68.0, "wastePct": 8, "supplier": "Açougue", "notes": "Peso já cozido/preparado"}, {"id": "ing_frango", "name": "Frango preparado", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 31.0, "wastePct": 5, "supplier": "Distribuidor", "notes": "Peito e sobrecoxa"}, {"id": "ing_linguica", "name": "Linguiça toscana preparada", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 29.0, "wastePct": 6, "supplier": "Açougue", "notes": "Já pronta para montagem"}, {"id": "ing_mucarela", "name": "Muçarela", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 36.0, "wastePct": 2, "supplier": "Laticínio", "notes": "Fatiada ou ralada"}, {"id": "ing_catupiry", "name": "Catupiry", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 29.0, "wastePct": 1, "supplier": "Laticínio", "notes": "Bisnaga/balde"}, {"id": "ing_cheddar", "name": "Cheddar", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 27.0, "wastePct": 1, "supplier": "Laticínio", "notes": "Molho/creme"}, {"id": "ing_4queijos", "name": "Mix 4 queijos", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 33.0, "wastePct": 1, "supplier": "Laticínio", "notes": "Base para gratinados"}, {"id": "ing_batata", "name": "Batata pré-frita", "baseUnit": "g", "purchaseQty": 2500, "purchaseCost": 42.0, "wastePct": 3, "supplier": "Congelados", "notes": "Pacote 2,5kg"}, {"id": "ing_tempero", "name": "Tempero / sal / páprica / lemon pepper", "baseUnit": "g", "purchaseQty": 500, "purchaseCost": 10.0, "wastePct": 0, "supplier": "Secos", "notes": "Rateio simples"}, {"id": "ing_arroz", "name": "Arroz cozido", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 9.5, "wastePct": 2, "supplier": "Cozinha", "notes": "Custo por kg pronto"}, {"id": "ing_feijao", "name": "Feijão cozido", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 12.0, "wastePct": 2, "supplier": "Cozinha", "notes": "Custo por kg pronto"}, {"id": "ing_salada", "name": "Salada / folhas / tomate", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 16.0, "wastePct": 8, "supplier": "Hortifruti", "notes": "Mix para almoço"}, {"id": "ing_tomate", "name": "Tomate", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 9.0, "wastePct": 6, "supplier": "Hortifruti", "notes": "Para vinagrete"}, {"id": "ing_cebola", "name": "Cebola", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 5.5, "wastePct": 8, "supplier": "Hortifruti", "notes": "Para vinagrete"}, {"id": "ing_pimentao", "name": "Pimentão", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 12.0, "wastePct": 12, "supplier": "Hortifruti", "notes": "Para vinagrete"}, {"id": "ing_cheiro_verde", "name": "Cheiro-verde", "baseUnit": "g", "purchaseQty": 300, "purchaseCost": 6.0, "wastePct": 10, "supplier": "Hortifruti", "notes": "Para vinagrete e maionese"}, {"id": "ing_oleo_vinagre", "name": "Azeite / vinagre / sal do vinagrete", "baseUnit": "ml", "purchaseQty": 1000, "purchaseCost": 19.0, "wastePct": 0, "supplier": "Mercearia", "notes": "Rateio líquido"}, {"id": "ing_maionese_ind", "name": "Base de maionese", "baseUnit": "g", "purchaseQty": 3000, "purchaseCost": 34.0, "wastePct": 0, "supplier": "Mercearia", "notes": "Balde 3kg"}, {"id": "ing_alho", "name": "Alho", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 24.0, "wastePct": 5, "supplier": "Hortifruti", "notes": "Para maionese"}, {"id": "ing_limao", "name": "Limão / ácido", "baseUnit": "ml", "purchaseQty": 1000, "purchaseCost": 10.0, "wastePct": 10, "supplier": "Hortifruti", "notes": "Para maionese"}, {"id": "ing_bbq", "name": "Barbecue", "baseUnit": "ml", "purchaseQty": 3900, "purchaseCost": 46.0, "wastePct": 0, "supplier": "Mercearia", "notes": "Galão"}, {"id": "ing_saches_mix", "name": "Sachês (ketchup/maionese/mostarda)", "baseUnit": "un", "purchaseQty": 300, "purchaseCost": 29.0, "wastePct": 0, "supplier": "Descartáveis", "notes": "Mix médio"}, {"id": "ing_massa_churros", "name": "Massa/base de churros", "baseUnit": "un", "purchaseQty": 50, "purchaseCost": 32.0, "wastePct": 2, "supplier": "Congelados", "notes": "Unidade base"}, {"id": "ing_rech_dl", "name": "Doce de leite", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 21.0, "wastePct": 0, "supplier": "Doçaria", "notes": "Recheio"}, {"id": "ing_rech_choc", "name": "Chocolate", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 19.0, "wastePct": 0, "supplier": "Doçaria", "notes": "Recheio"}, {"id": "ing_rech_goi", "name": "Goiabada", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 14.0, "wastePct": 0, "supplier": "Doçaria", "notes": "Recheio"}, {"id": "ing_refri_350", "name": "Refrigerante lata 350ml", "baseUnit": "un", "purchaseQty": 12, "purchaseCost": 42.0, "wastePct": 0, "supplier": "Bebidas", "notes": "Fardo"}, {"id": "ing_garrafa_450", "name": "Garrafa 450ml", "baseUnit": "un", "purchaseQty": 12, "purchaseCost": 60.0, "wastePct": 0, "supplier": "Bebidas", "notes": "Fardo"}, {"id": "ing_suco_natural", "name": "Suco natural (garrafinha)", "baseUnit": "un", "purchaseQty": 10, "purchaseCost": 42.0, "wastePct": 0, "supplier": "Produção", "notes": "Custo médio por garrafinha"}], "packaging": [{"id": "pkg_lanche", "name": "Envelope/saco para lanche", "purchaseQty": 500, "purchaseCost": 95.0, "notes": "Sanduíches"}, {"id": "pkg_bat_p", "name": "Caixa batata P", "purchaseQty": 100, "purchaseCost": 38.0, "notes": "80g"}, {"id": "pkg_bat_m", "name": "Caixa batata M", "purchaseQty": 100, "purchaseCost": 46.0, "notes": "120g"}, {"id": "pkg_bat_g", "name": "Caixa batata G", "purchaseQty": 100, "purchaseCost": 54.0, "notes": "160g"}, {"id": "pkg_almoco", "name": "Marmita / box almoço", "purchaseQty": 100, "purchaseCost": 95.0, "notes": "Prato embalado"}, {"id": "pkg_potinho_30", "name": "Potinho 30ml + tampa", "purchaseQty": 100, "purchaseCost": 24.0, "notes": "Molhos extras"}, {"id": "pkg_potinho_60", "name": "Potinho 60ml + tampa", "purchaseQty": 100, "purchaseCost": 31.0, "notes": "Vinagrete maior"}, {"id": "pkg_sobremesa", "name": "Saquinho/suporte sobremesa", "purchaseQty": 100, "purchaseCost": 18.0, "notes": "Churros"}, {"id": "pkg_sacola_delivery", "name": "Sacola delivery / despacho", "purchaseQty": 100, "purchaseCost": 52.0, "notes": "1 por pedido/item grande"}, {"id": "pkg_guardanapo", "name": "Guardanapo (par médio)", "purchaseQty": 1000, "purchaseCost": 28.0, "notes": "Rateio médio"}, {"id": "pkg_combo_familia", "name": "Caixa combo família", "purchaseQty": 50, "purchaseCost": 69.0, "notes": "Para combos grandes"}], "recipes": [{"id": "rec_pao_parmesao", "name": "Pão com parmesão", "yieldQty": 1, "yieldUnit": "un", "storage": "Produção do lanche", "notes": "Semiacabado para assinatura e monte o seu", "components": [{"refType": "ingredient", "refId": "ing_pao_frances", "qty": 1}, {"refType": "ingredient", "refId": "ing_parmesao", "qty": 8}]}, {"id": "rec_vinagrete", "name": "Vinagrete da casa", "yieldQty": 1000, "yieldUnit": "ml", "storage": "Descanso refrigerado", "notes": "Serve porção de 30ml no lanche ou 60ml no potinho", "components": [{"refType": "ingredient", "refId": "ing_tomate", "qty": 500}, {"refType": "ingredient", "refId": "ing_cebola", "qty": 250}, {"refType": "ingredient", "refId": "ing_pimentao", "qty": 120}, {"refType": "ingredient", "refId": "ing_cheiro_verde", "qty": 45}, {"refType": "ingredient", "refId": "ing_oleo_vinagre", "qty": 120}]}, {"id": "rec_maionese", "name": "Maionese da casa", "yieldQty": 1000, "yieldUnit": "g", "storage": "Descanso refrigerado", "notes": "Base para lanche e potinho de molho", "components": [{"refType": "ingredient", "refId": "ing_maionese_ind", "qty": 900}, {"refType": "ingredient", "refId": "ing_alho", "qty": 55}, {"refType": "ingredient", "refId": "ing_limao", "qty": 35}, {"refType": "ingredient", "refId": "ing_cheiro_verde", "qty": 20}]}, {"id": "rec_batata_p", "name": "Batata frita base P", "yieldQty": 1, "yieldUnit": "un", "storage": "Quente / fritadeira", "notes": "Porção de 80g", "components": [{"refType": "ingredient", "refId": "ing_batata", "qty": 80}, {"refType": "ingredient", "refId": "ing_tempero", "qty": 2}]}, {"id": "rec_batata_m", "name": "Batata frita base M", "yieldQty": 1, "yieldUnit": "un", "storage": "Quente / fritadeira", "notes": "Porção de 120g", "components": [{"refType": "ingredient", "refId": "ing_batata", "qty": 120}, {"refType": "ingredient", "refId": "ing_tempero", "qty": 3}]}, {"id": "rec_batata_g", "name": "Batata frita base G", "yieldQty": 1, "yieldUnit": "un", "storage": "Quente / fritadeira", "notes": "Porção de 160g", "components": [{"refType": "ingredient", "refId": "ing_batata", "qty": 160}, {"refType": "ingredient", "refId": "ing_tempero", "qty": 4}]}, {"id": "rec_grat_muc", "name": "Cobertura gratinada muçarela", "yieldQty": 1, "yieldUnit": "un", "storage": "Salamandra", "notes": "Cobertura padrão para gratinar", "components": [{"refType": "ingredient", "refId": "ing_mucarela", "qty": 45}]}, {"id": "rec_grat_cat", "name": "Cobertura gratinada catupiry", "yieldQty": 1, "yieldUnit": "un", "storage": "Salamandra", "notes": "Cobertura com catupiry", "components": [{"refType": "ingredient", "refId": "ing_catupiry", "qty": 50}]}, {"id": "rec_grat_cheddar", "name": "Cobertura gratinada cheddar", "yieldQty": 1, "yieldUnit": "un", "storage": "Salamandra", "notes": "Cobertura com cheddar", "components": [{"refType": "ingredient", "refId": "ing_cheddar", "qty": 50}]}, {"id": "rec_grat_4q", "name": "Cobertura gratinada 4 queijos", "yieldQty": 1, "yieldUnit": "un", "storage": "Salamandra", "notes": "Cobertura com mix 4 queijos", "components": [{"refType": "ingredient", "refId": "ing_4queijos", "qty": 50}]}, {"id": "rec_prato_alpha", "name": "Prato Alpha base", "yieldQty": 1, "yieldUnit": "un", "storage": "Montagem almoço", "notes": "Prato com fraldinha", "components": [{"refType": "ingredient", "refId": "ing_arroz", "qty": 160}, {"refType": "ingredient", "refId": "ing_feijao", "qty": 120}, {"refType": "ingredient", "refId": "ing_salada", "qty": 80}, {"refType": "ingredient", "refId": "ing_fraldinha", "qty": 120}]}, {"id": "rec_prato_beta", "name": "Prato Beta base", "yieldQty": 1, "yieldUnit": "un", "storage": "Montagem almoço", "notes": "Prato com frango", "components": [{"refType": "ingredient", "refId": "ing_arroz", "qty": 160}, {"refType": "ingredient", "refId": "ing_feijao", "qty": 120}, {"refType": "ingredient", "refId": "ing_salada", "qty": 80}, {"refType": "ingredient", "refId": "ing_frango", "qty": 120}]}, {"id": "rec_prato_gamma", "name": "Prato Gamma base", "yieldQty": 1, "yieldUnit": "un", "storage": "Montagem almoço", "notes": "Prato com linguiça", "components": [{"refType": "ingredient", "refId": "ing_arroz", "qty": 160}, {"refType": "ingredient", "refId": "ing_feijao", "qty": 120}, {"refType": "ingredient", "refId": "ing_salada", "qty": 80}, {"refType": "ingredient", "refId": "ing_linguica", "qty": 120}]}, {"id": "rec_churros_dl", "name": "Churros recheado — doce de leite", "yieldQty": 1, "yieldUnit": "un", "storage": "Fritadeira / sobremesa", "notes": "Unidade de sobremesa", "components": [{"refType": "ingredient", "refId": "ing_massa_churros", "qty": 1}, {"refType": "ingredient", "refId": "ing_rech_dl", "qty": 35}]}, {"id": "rec_churros_choc", "name": "Churros recheado — chocolate", "yieldQty": 1, "yieldUnit": "un", "storage": "Fritadeira / sobremesa", "notes": "Unidade de sobremesa", "components": [{"refType": "ingredient", "refId": "ing_massa_churros", "qty": 1}, {"refType": "ingredient", "refId": "ing_rech_choc", "qty": 35}]}, {"id": "rec_churros_goi", "name": "Churros recheado — goiabada", "yieldQty": 1, "yieldUnit": "un", "storage": "Fritadeira / sobremesa", "notes": "Unidade de sobremesa", "components": [{"refType": "ingredient", "refId": "ing_massa_churros", "qty": 1}, {"refType": "ingredient", "refId": "ing_rech_goi", "qty": 35}]}], "products": [{"id": "prd_base_lanche_medio", "name": "Base interna — Lanche assinatura médio", "categoryId": "cat_base_interna", "type": "base", "salePrice": 0, "active": false, "includeInCatalogCount": false, "notes": "Base média para combos rápidos", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_frango", "qty": 110}, {"refType": "ingredient", "refId": "ing_mucarela", "qty": 35}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_base_prato_medio", "name": "Base interna — Prato médio", "categoryId": "cat_base_interna", "type": "base", "salePrice": 0, "active": false, "includeInCatalogCount": false, "notes": "Base média para combos de almoço", "components": [{"refType": "ingredient", "refId": "ing_arroz", "qty": 160}, {"refType": "ingredient", "refId": "ing_feijao", "qty": 120}, {"refType": "ingredient", "refId": "ing_salada", "qty": 80}, {"refType": "ingredient", "refId": "ing_frango", "qty": 120}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_alpha", "name": "Alpha — Gyros Fraldinha (Assinatura)", "categoryId": "cat_assinaturas", "type": "menu", "salePrice": 35.0, "active": true, "includeInCatalogCount": true, "notes": "Base alinhada ao cardápio enviado", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_fraldinha", "qty": 110}, {"refType": "ingredient", "refId": "ing_mucarela", "qty": 35}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_beta", "name": "Beta — Gyros Frango (Assinatura)", "categoryId": "cat_assinaturas", "type": "menu", "salePrice": 35.0, "active": true, "includeInCatalogCount": true, "notes": "Base alinhada ao cardápio enviado", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_frango", "qty": 110}, {"refType": "ingredient", "refId": "ing_catupiry", "qty": 35}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_gamma", "name": "Gamma — Gyros Linguiça (Assinatura)", "categoryId": "cat_assinaturas", "type": "menu", "salePrice": 35.0, "active": true, "includeInCatalogCount": true, "notes": "Base alinhada ao cardápio enviado", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_linguica", "qty": 110}, {"refType": "ingredient", "refId": "ing_4queijos", "qty": 35}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_monte", "name": "Monte o seu Gyros — Base", "categoryId": "cat_monte", "type": "menu", "salePrice": 33.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo-base configurável. Ajuste proteína/queijo conforme sua ficha real.", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_frango", "qty": 100}, {"refType": "ingredient", "refId": "ing_mucarela", "qty": 30}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_combo1", "name": "Combo 1 — Lanche + Batata M (120g)", "categoryId": "cat_combos", "type": "combo", "salePrice": 52.0, "active": true, "includeInCatalogCount": true, "notes": "Combo por camadas usando base interna de lanche", "components": [{"refType": "product", "refId": "prd_base_lanche_medio", "qty": 1}, {"refType": "recipe", "refId": "rec_batata_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_combo2", "name": "Combo 2 — Lanche + Bebida 350ml", "categoryId": "cat_combos", "type": "combo", "salePrice": 41.0, "active": true, "includeInCatalogCount": true, "notes": "Combo por camadas usando base interna de lanche", "components": [{"refType": "product", "refId": "prd_base_lanche_medio", "qty": 1}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_combo3", "name": "Combo 3 — Lanche + Batata M + Bebida 350ml", "categoryId": "cat_combos", "type": "combo", "salePrice": 55.0, "active": true, "includeInCatalogCount": true, "notes": "Combo por camadas usando base interna de lanche", "components": [{"refType": "product", "refId": "prd_base_lanche_medio", "qty": 1}, {"refType": "recipe", "refId": "rec_batata_m", "qty": 1}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_bat_p", "name": "Batata frita temperada — P (80g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 18.0, "active": true, "includeInCatalogCount": true, "notes": "Porção à parte", "components": [{"refType": "recipe", "refId": "rec_batata_p", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_p", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_m", "name": "Batata frita temperada — M (120g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 28.0, "active": true, "includeInCatalogCount": true, "notes": "Porção à parte", "components": [{"refType": "recipe", "refId": "rec_batata_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_g", "name": "Batata frita temperada — G (160g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 36.0, "active": true, "includeInCatalogCount": true, "notes": "Porção à parte", "components": [{"refType": "recipe", "refId": "rec_batata_g", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_g", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_grat_p", "name": "Batata gratinada — P (80g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 26.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com muçarela. Troque cobertura conforme sua ficha.", "components": [{"refType": "recipe", "refId": "rec_batata_p", "qty": 1}, {"refType": "recipe", "refId": "rec_grat_muc", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_p", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_grat_m", "name": "Batata gratinada — M (120g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 36.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com muçarela. Troque cobertura conforme sua ficha.", "components": [{"refType": "recipe", "refId": "rec_batata_m", "qty": 1}, {"refType": "recipe", "refId": "rec_grat_muc", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_grat_g", "name": "Batata gratinada — G (160g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 44.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com muçarela. Troque cobertura conforme sua ficha.", "components": [{"refType": "recipe", "refId": "rec_batata_g", "qty": 1}, {"refType": "recipe", "refId": "rec_grat_muc", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_g", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_carne_grat", "name": "Carne Gyros Gratinada (porção)", "categoryId": "cat_gratinados", "type": "menu", "salePrice": 39.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com frango + muçarela. Ajuste proteína e queijo conforme o real.", "components": [{"refType": "ingredient", "refId": "ing_frango", "qty": 140}, {"refType": "recipe", "refId": "rec_grat_muc", "qty": 1}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_prato_alpha", "name": "Prato Alpha — Fraldinha", "categoryId": "cat_almoco", "type": "menu", "salePrice": 30.0, "active": true, "includeInCatalogCount": true, "notes": "Almoço embalado por porções", "components": [{"refType": "recipe", "refId": "rec_prato_alpha", "qty": 1}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_prato_beta", "name": "Prato Beta — Frango", "categoryId": "cat_almoco", "type": "menu", "salePrice": 30.0, "active": true, "includeInCatalogCount": true, "notes": "Almoço embalado por porções", "components": [{"refType": "recipe", "refId": "rec_prato_beta", "qty": 1}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_prato_gamma", "name": "Prato Gamma — Linguiça", "categoryId": "cat_almoco", "type": "menu", "salePrice": 30.0, "active": true, "includeInCatalogCount": true, "notes": "Almoço embalado por porções", "components": [{"refType": "recipe", "refId": "rec_prato_gamma", "qty": 1}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_combo_almoco", "name": "Combo Almoço — Prato + Bebida + Mini batata (80g)", "categoryId": "cat_almoco", "type": "combo", "salePrice": 45.0, "active": true, "includeInCatalogCount": true, "notes": "Combo almoço com base interna de prato", "components": [{"refType": "product", "refId": "prd_base_prato_medio", "qty": 1}, {"refType": "recipe", "refId": "rec_batata_p", "qty": 1}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_p", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_churros", "name": "Churros (unidade)", "categoryId": "cat_sobremesas", "type": "menu", "salePrice": 11.9, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com doce de leite. Troque a receita para outro recheio quando quiser.", "components": [{"refType": "recipe", "refId": "rec_churros_dl", "qty": 1}, {"refType": "packaging", "refId": "pkg_sobremesa", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 1}]}, {"id": "prd_molho_extra", "name": "Molho extra (30ml potinho)", "categoryId": "cat_molhos", "type": "extra", "salePrice": 2.5, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com maionese da casa", "components": [{"refType": "recipe", "refId": "rec_maionese", "qty": 30}, {"refType": "packaging", "refId": "pkg_potinho_30", "qty": 1}]}, {"id": "prd_vinagrete_extra", "name": "Vinagrete extra (potinho)", "categoryId": "cat_molhos", "type": "extra", "salePrice": 2.5, "active": true, "includeInCatalogCount": true, "notes": "Use 60ml para extra à parte", "components": [{"refType": "recipe", "refId": "rec_vinagrete", "qty": 60}, {"refType": "packaging", "refId": "pkg_potinho_60", "qty": 1}]}, {"id": "prd_sache5", "name": "Pacote extra com 5 sachês", "categoryId": "cat_molhos", "type": "extra", "salePrice": 2.0, "active": true, "includeInCatalogCount": true, "notes": "Ketchup, maionese e mostarda", "components": [{"refType": "ingredient", "refId": "ing_saches_mix", "qty": 5}]}, {"id": "prd_coca", "name": "Coca-Cola 350ml", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 7.0, "active": true, "includeInCatalogCount": true, "notes": "Lata 350ml", "components": [{"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}]}, {"id": "prd_coca_zero", "name": "Coca Zero 350ml", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 7.0, "active": true, "includeInCatalogCount": true, "notes": "Lata 350ml", "components": [{"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}]}, {"id": "prd_fanta", "name": "Fanta 350ml", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 7.0, "active": true, "includeInCatalogCount": true, "notes": "Lata 350ml", "components": [{"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}]}, {"id": "prd_garrafa_450", "name": "Garrafa 450ml (pêssego ou limão)", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 9.0, "active": true, "includeInCatalogCount": true, "notes": "Bebida 450ml", "components": [{"refType": "ingredient", "refId": "ing_garrafa_450", "qty": 1}]}, {"id": "prd_suco_natural", "name": "Suco natural (garrafinha)", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 10.0, "active": true, "includeInCatalogCount": true, "notes": "Produção própria", "components": [{"refType": "ingredient", "refId": "ing_suco_natural", "qty": 1}]}, {"id": "prd_combo_familia", "name": "Combo Família Gyros", "categoryId": "cat_familia", "type": "combo", "salePrice": 169.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo de família usando base média de lanche", "components": [{"refType": "product", "refId": "prd_base_lanche_medio", "qty": 4}, {"refType": "recipe", "refId": "rec_batata_g", "qty": 2}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 4}, {"refType": "packaging", "refId": "pkg_bat_g", "qty": 2}, {"refType": "packaging", "refId": "pkg_combo_familia", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_almoco_familia", "name": "Almoço Família (horário almoço)", "categoryId": "cat_familia", "type": "combo", "salePrice": 129.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo com pratos médios + bebida", "components": [{"refType": "product", "refId": "prd_base_prato_medio", "qty": 4}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 4}, {"refType": "packaging", "refId": "pkg_combo_familia", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}], "fixedCosts": [{"id": "fix_aluguel", "name": "Aluguel", "amount": 3500.0, "notes": "Rateado por item ativo do cardápio"}, {"id": "fix_folha", "name": "Funcionários / pró-labore", "amount": 9800.0, "notes": "Rateado por item ativo do cardápio"}, {"id": "fix_energia", "name": "Energia + gás + água", "amount": 1800.0, "notes": "Rateado por item ativo do cardápio"}, {"id": "fix_ifood", "name": "Software / taxas / operação", "amount": 950.0, "notes": "Rateado por item ativo do cardápio"}, {"id": "fix_outros", "name": "Outros custos fixos", "amount": 900.0, "notes": "Contabilidade, manutenção, internet etc."}]};
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
  ledgerItemResourceType: 'all'
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
  return ensureCanonicalFields(normalizeFinancialData(normalizeSupplierData(applyMultiOperationRules(applyPricingRules(applyPurchaseUpdates(target))))));
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

function renderProductDetailHtml(c) {
  const p = c.product;
  const scope = p.scope || legacyScopeForRecord('products', p);
  const addonGroups = groupComputedAddons(c.addons || []);
  const requiredGroups = addonGroups.filter(group => group.required).length;
  const basePortions = topLevelPortions(c.nodes || []);
  const purchaseHistorySection = renderResourcePurchaseHistory('product', p.id, 'Ainda não há compras históricas vinculadas a este item do cardápio.');
  const addonSection = addonGroups.length
    ? `<div style="margin-top:16px;"><h3 style="font-size:15px; margin:0 0 10px;">Grupos do cardápio e impacto no preço</h3>
        <div class="note" style="margin-bottom:10px;">Aqui a leitura segue o cardápio atual do PDV: cada grupo mostra a regra da escolha, as opções disponíveis e quanto cada uma pesa no custo e no preço.</div>
        <div class="group-stack">${addonGroups.map(group => `
        <div class="group-card">
          <div class="group-head">
            <div>
              <div class="small muted">Grupo</div>
              <h4>${escapeHtml(group.name)}</h4>
              <p>${escapeHtml(addonGroupRuleLabel(group))} • ${group.items.length} opcao(oes) • ${escapeHtml(addonGroupPriceLabel(group))}</p>
            </div>
            <div class="legend"><span class="tag">${escapeHtml(group.groupType || 'addon')}</span>${group.required ? '<span class="tag">obrigatorio</span>' : '<span class="tag">opcional</span>'}</div>
          </div>
          <div class="stack">${group.items.map(addon => `
        <div class="cost-node group-option">
          <div class="top">
            <div>
              <div class="name">${escapeHtml(addon.name)}</div>
              <div class="meta">${escapeHtml(addon.group || 'opcional')} • ${escapeHtml(addonChargeModeLabel(addon.chargeMode))}${addon.notes ? ` • ${escapeHtml(addon.notes)}` : ''}</div>
              <div class="small muted" style="margin-top:6px;">${escapeHtml(portionSummaryText(topLevelPortions(addon.nodes || [])) || 'Sem porcionamento detalhado')}</div>
            </div>
            <div style="text-align:right">
              <strong>${brl(addon.directCost)}</strong>
              <div class="small muted">custo direto</div>
            </div>
          </div>
          <div class="info-grid" style="margin-top:12px;">
            <div class="info-cell"><div class="k">Custo</div><div class="v">${brl(addon.directCost)}</div></div>
            <div class="info-cell"><div class="k">Venda base</div><div class="v">${brl(addon.effectiveSalePrice)}</div></div>
            <div class="info-cell"><div class="k">Venda iFood</div><div class="v">${brl(addon.ifoodSalePrice)}</div></div>
            <div class="info-cell"><div class="k">Origem do preço</div><div class="v" style="font-size:15px">${addon.configuredSalePrice > 0 ? 'configurado' : 'sugestão pela regra'}</div></div>
          </div>
          ${addon.nodes?.length ? `<div class="children">${renderTree(addon.nodes)}</div>` : ''}
        </div>`).join('')}</div></div>`).join('')}</div></div>`
    : '';
  return `
    <div class="detail-header"><div><div class="legend">${scopeTag(scope)}<span class="tag">${escapeHtml(categoryName(p.categoryId))}</span><span class="tag">${escapeHtml(subgroupNameForProduct(p))}</span><span class="tag">SKU ${escapeHtml(p.code || '—')}</span></div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description || p.notes || 'Sem observação cadastrada.')}</p><div class="pill-line"><span class="tag">catalogo atual: ${escapeHtml(catalogPathLabel(p))}</span></div></div><div class="detail-actions"><button class="btn ghost" data-action="duplicate-product" data-id="${p.id}">Duplicar</button><button class="btn ghost" data-action="edit-product" data-id="${p.id}">Editar</button><button class="btn danger" data-action="delete-product" data-id="${p.id}">Excluir</button></div></div>
    <div class="info-grid">
      <div class="info-cell"><div class="k">Grupo no catálogo</div><div class="v" style="font-size:15px">${escapeHtml(subgroupNameForProduct(p))}</div></div>
      <div class="info-cell"><div class="k">Grupos de escolha</div><div class="v">${addonGroups.length}</div></div>
      <div class="info-cell"><div class="k">Porcionamento base</div><div class="v" style="font-size:15px">${basePortions.length}</div></div>
      <div class="info-cell"><div class="k">Leitura operacional</div><div class="v" style="font-size:15px">${escapeHtml(portionSummaryText(basePortions) || 'Sem resumo')}</div></div>
      <div class="info-cell"><div class="k">SKU</div><div class="v" style="font-size:15px">${escapeHtml(p.code || '—')}</div></div>
      <div class="info-cell"><div class="k">Preço de venda</div><div class="v">${brl(c.salePrice)}</div></div>
      <div class="info-cell"><div class="k">Margem atual (sem rateio)</div><div class="v status ${statusClass(c.marginPct)}">${pct(c.marginPct)}</div></div>
      <div class="info-cell"><div class="k">Preço de venda iFood</div><div class="v">${brl(c.ifoodSalePrice)}</div></div>
      <div class="info-cell"><div class="k">Grupos obrigatórios</div><div class="v">${requiredGroups}</div></div>
      <div class="info-cell"><div class="k">Opções mapeadas</div><div class="v">${(c.addons || []).length}</div></div>
      <div class="info-cell"><div class="k">Regra de preço</div><div class="v" style="font-size:15px">${escapeHtml(pricingRuleLabel(p))}</div></div>
      <div class="info-cell"><div class="k">Preço pela regra atual</div><div class="v">${brl(c.autoSalePrice)}</div></div>
      <div class="info-cell"><div class="k">Preço com rateio fixo (só referência)</div><div class="v">${brl(c.autoSalePriceWithFixed)}</div></div>
      <div class="info-cell"><div class="k">Custo direto</div><div class="v">${brl(c.directCost)}</div></div>
      <div class="info-cell"><div class="k">Custo que só repassa</div><div class="v">${brl(c.passThroughCost)}</div></div>
      <div class="info-cell"><div class="k">Base que entra no markup</div><div class="v">${brl(c.markupBaseCost)}</div></div>
      <div class="info-cell"><div class="k">Rateio fixo</div><div class="v">${brl(c.fixedCost)}</div></div>
      <div class="info-cell"><div class="k">Custo total</div><div class="v">${brl(c.totalCost)}</div></div>
    </div>
    <div class="legend"><span class="tag">markup atual ${safe(c.markup).toFixed(2)}x</span><span class="tag">regra atual em uso: (${brl(c.markupBaseCost)} x ${markupMultiplier().toFixed(2)}) + ${brl(c.passThroughCost)} = ${brl(c.autoSalePrice)}</span><span class="tag">iFood: ${brl(c.ifoodSalePrice)} (${Math.round((ifoodMultiplier() - 1) * 100)}% acima do preço base)</span><span class="tag">com rateio fixo: ${brl(c.autoSalePriceWithFixed)} (só referência)</span><span class="tag">modo: ${escapeHtml(c.pricingMode === 'manual' ? 'manual' : 'automatico')}</span><span class="tag">tipo: ${escapeHtml(p.type)}</span><span class="tag">camadas: ${p.components.length}</span><span class="tag">adicionais: ${(p.addons || []).length}</span></div>
    <div style="margin-top:16px;"><h3 style="font-size:15px; margin:0 0 10px;">Gramaturas, volumes e porções da base</h3><div class="info-grid">${basePortions.map(item => `<div class="info-cell"><div class="k">${escapeHtml(item.type)}</div><div class="v" style="font-size:15px">${escapeHtml(item.name)}</div><div class="small muted" style="margin-top:6px;">usa ${escapeHtml(item.usage)} • custo ${brl(item.cost)}</div></div>`).join('')}</div></div>
    <div style="margin-top:16px;"><h3 style="font-size:15px; margin:0 0 10px;">Estrutura de custo / BOM base</h3>${renderTree(c.nodes)}</div>
    ${purchaseHistorySection}
    ${addonSection}`;
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

  qs('#page-catalog').innerHTML = `
    <div class="stack">
      <section class="panel"><div class="panel-head"><div><h3>Espelho do cardápio atual</h3><p>Cada categoria abaixo já aparece com os grupos que vieram do PDV. Isso facilita conferir se custo, preço e montagem estão batendo com o catálogo real.</p></div></div><div class="panel-body"><div class="cat-grid">${categorySummary || '<div class="empty">Nenhum item ativo para resumir.</div>'}</div></div></section>
      <section class="panel"><div class="panel-head"><div><h3>Itens finais do cardápio</h3><p>O combo pode carregar outro item como base. O custo direto sempre puxa as camadas de baixo. Escopo atual: ${operationLabel()}.</p></div><div class="filter-row"><input class="input" id="catalogSearch" placeholder="Buscar item, grupo, nota, categoria ou escopo" value="${escapeHtml(state.filterText)}"><select class="select" id="catalogCategory"><option value="all">Todas as categorias</option>${categories.sort((a, b) => (categoryViewMeta(a.id).sortOrder || 999) - (categoryViewMeta(b.id).sortOrder || 999)).map(cat => `<option value="${cat.id}" ${state.filterCategory===cat.id?'selected':''}>${escapeHtml(cat.name)}</option>`).join('')}</select><button class="btn primary" id="addProductBtn">Novo item / combo</button></div></div><div class="panel-body"><div class="split"><div class="panel" style="box-shadow:none;"><div class="panel-body" style="padding:0 0 8px 0; overflow:auto;"><table><thead><tr><th>Item</th><th>Escopo</th><th>Categoria</th><th>Grupo</th><th>Venda</th><th>Venda iFood</th><th>Custo total</th><th>Margem s/ rateio</th></tr></thead><tbody>${products.length ? products.map(p => { const c = computeProduct(p.id, state.operationView); return `<tr data-product-id="${p.id}" class="${state.selectedProductId===p.id?'active':''}"><td><strong>${escapeHtml(p.name)}</strong><div class="small muted">${escapeHtml(p.type)} • ${escapeHtml(productViewMeta(p).catalogItemId || p.id)}</div></td><td>${scopeTag(p.scope || legacyScopeForRecord('products', p))}</td><td>${escapeHtml(categoryName(p.categoryId))}</td><td><strong>${escapeHtml(subgroupNameForProduct(p))}</strong><div class="small muted">${escapeHtml(categoryViewMeta(p.categoryId).accent || 'cardápio')}</div></td><td>${brl(c.salePrice)}</td><td>${brl(c.ifoodSalePrice)}</td><td>${brl(c.totalCost)}</td><td class="status ${statusClass(c.marginPct)}">${pct(c.marginPct)}</td></tr>`; }).join('') : `<tr><td colspan="8"><div class="empty">Nenhum item encontrado.</div></td></tr>`}</tbody></table></div></div><div class="panel" style="box-shadow:none;"><div class="panel-body" id="catalogDetail">${selected ? renderProductDetailHtml(selected) : '<div class="empty">Selecione um item para ver o detalhamento.</div>'}</div></div></div></div></section>
    </div>`;

  qs('#catalogSearch').oninput = (e) => { state.filterText = e.target.value; renderCatalog(); };
  qs('#catalogCategory').onchange = (e) => { state.filterCategory = e.target.value; renderCatalog(); };
  qs('#addProductBtn').onclick = () => openEntityModal('products');
  qsa('[data-product-id]').forEach(row => row.onclick = () => { state.selectedProductId = row.dataset.productId; renderCatalog(); });
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
  ing_parmesao: { familyName: 'Parmesão', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  ing_pao_frances: { familyName: 'Pão francês', categoryName: 'Padaria e bases', compareKind: 'unit' },
  ing_pao_parmesao_pronto: { familyName: 'Pão com parmesão', categoryName: 'Padaria e bases', compareKind: 'unit' },
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
  { pattern: /pao.*parmesao|baguete.*parm|parm-mus/, familyName: 'Pão com parmesão', categoryName: 'Padaria e bases', compareKind: 'unit' },
  { pattern: /pao_frances|pao-frances|pao frances/, familyName: 'Pão francês', categoryName: 'Padaria e bases', compareKind: 'unit' },
  { pattern: /catupiry.*4_queijos|4_queijos.*catupiry/, familyName: 'Catupiry 4 queijos', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  { pattern: /catupiry|requeijao/, familyName: 'Catupiry original', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  { pattern: /mucarela|mu[cç]arela|mussarela/, familyName: 'Muçarela', categoryName: 'Laticínios e frios', compareKind: 'mass' },
  { pattern: /parmesao/, familyName: 'Parmesão', categoryName: 'Laticínios e frios', compareKind: 'mass' },
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
