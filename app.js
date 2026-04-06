const SEED_DATA = {"meta": {"businessName": "Gyros Greek Barbecue", "projectName": "PWA de Custos do Cardápio", "version": 1}, "settings": {"targetMarginPct": 68, "fixedAllocationMode": "catalog_items", "customMonthlyUnits": 1200, "currency": "BRL"}, "categories": [{"id": "cat_assinaturas", "name": "Lanches — Assinaturas (sem troca)", "active": true}, {"id": "cat_monte", "name": "Monte o seu Gyros (personalização controlada)", "active": true}, {"id": "cat_combos", "name": "Combos rápidos (sem configurar — só observação)", "active": true}, {"id": "cat_batatas", "name": "Batatas (Fritas e Gratinadas)", "active": true}, {"id": "cat_gratinados", "name": "Porções Gratinadas (Carne)", "active": true}, {"id": "cat_almoco", "name": "Almoço (embalado por porções)", "active": true}, {"id": "cat_sobremesas", "name": "Sobremesas", "active": true}, {"id": "cat_molhos", "name": "Molhos & Extras (à parte)", "active": true}, {"id": "cat_bebidas", "name": "Bebidas", "active": true}, {"id": "cat_familia", "name": "Combos Família", "active": true}, {"id": "cat_base_interna", "name": "Base interna (não conta no cardápio)", "active": false}], "ingredients": [{"id": "ing_pao_frances", "name": "Pão francês", "baseUnit": "un", "purchaseQty": 30, "purchaseCost": 24.0, "wastePct": 0, "supplier": "Padaria", "notes": "Custo por caixa/pacote"}, {"id": "ing_parmesao", "name": "Parmesão ralado", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 58.0, "wastePct": 1, "supplier": "Laticínio", "notes": "Usado no pão"}, {"id": "ing_fraldinha", "name": "Fraldinha preparada", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 68.0, "wastePct": 8, "supplier": "Açougue", "notes": "Peso já cozido/preparado"}, {"id": "ing_frango", "name": "Frango preparado", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 31.0, "wastePct": 5, "supplier": "Distribuidor", "notes": "Peito e sobrecoxa"}, {"id": "ing_linguica", "name": "Linguiça toscana preparada", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 29.0, "wastePct": 6, "supplier": "Açougue", "notes": "Já pronta para montagem"}, {"id": "ing_mucarela", "name": "Muçarela", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 36.0, "wastePct": 2, "supplier": "Laticínio", "notes": "Fatiada ou ralada"}, {"id": "ing_catupiry", "name": "Catupiry", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 29.0, "wastePct": 1, "supplier": "Laticínio", "notes": "Bisnaga/balde"}, {"id": "ing_cheddar", "name": "Cheddar", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 27.0, "wastePct": 1, "supplier": "Laticínio", "notes": "Molho/creme"}, {"id": "ing_4queijos", "name": "Mix 4 queijos", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 33.0, "wastePct": 1, "supplier": "Laticínio", "notes": "Base para gratinados"}, {"id": "ing_batata", "name": "Batata pré-frita", "baseUnit": "g", "purchaseQty": 2500, "purchaseCost": 42.0, "wastePct": 3, "supplier": "Congelados", "notes": "Pacote 2,5kg"}, {"id": "ing_tempero", "name": "Tempero / sal / páprica / lemon pepper", "baseUnit": "g", "purchaseQty": 500, "purchaseCost": 10.0, "wastePct": 0, "supplier": "Secos", "notes": "Rateio simples"}, {"id": "ing_arroz", "name": "Arroz cozido", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 9.5, "wastePct": 2, "supplier": "Cozinha", "notes": "Custo por kg pronto"}, {"id": "ing_feijao", "name": "Feijão cozido", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 12.0, "wastePct": 2, "supplier": "Cozinha", "notes": "Custo por kg pronto"}, {"id": "ing_salada", "name": "Salada / folhas / tomate", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 16.0, "wastePct": 8, "supplier": "Hortifruti", "notes": "Mix para almoço"}, {"id": "ing_tomate", "name": "Tomate", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 9.0, "wastePct": 6, "supplier": "Hortifruti", "notes": "Para vinagrete"}, {"id": "ing_cebola", "name": "Cebola", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 5.5, "wastePct": 8, "supplier": "Hortifruti", "notes": "Para vinagrete"}, {"id": "ing_pimentao", "name": "Pimentão", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 12.0, "wastePct": 12, "supplier": "Hortifruti", "notes": "Para vinagrete"}, {"id": "ing_cheiro_verde", "name": "Cheiro-verde", "baseUnit": "g", "purchaseQty": 300, "purchaseCost": 6.0, "wastePct": 10, "supplier": "Hortifruti", "notes": "Para vinagrete e maionese"}, {"id": "ing_oleo_vinagre", "name": "Azeite / vinagre / sal do vinagrete", "baseUnit": "ml", "purchaseQty": 1000, "purchaseCost": 19.0, "wastePct": 0, "supplier": "Mercearia", "notes": "Rateio líquido"}, {"id": "ing_maionese_ind", "name": "Base de maionese", "baseUnit": "g", "purchaseQty": 3000, "purchaseCost": 34.0, "wastePct": 0, "supplier": "Mercearia", "notes": "Balde 3kg"}, {"id": "ing_alho", "name": "Alho", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 24.0, "wastePct": 5, "supplier": "Hortifruti", "notes": "Para maionese"}, {"id": "ing_limao", "name": "Limão / ácido", "baseUnit": "ml", "purchaseQty": 1000, "purchaseCost": 10.0, "wastePct": 10, "supplier": "Hortifruti", "notes": "Para maionese"}, {"id": "ing_bbq", "name": "Barbecue", "baseUnit": "ml", "purchaseQty": 3900, "purchaseCost": 46.0, "wastePct": 0, "supplier": "Mercearia", "notes": "Galão"}, {"id": "ing_saches_mix", "name": "Sachês (ketchup/maionese/mostarda)", "baseUnit": "un", "purchaseQty": 300, "purchaseCost": 29.0, "wastePct": 0, "supplier": "Descartáveis", "notes": "Mix médio"}, {"id": "ing_massa_churros", "name": "Massa/base de churros", "baseUnit": "un", "purchaseQty": 50, "purchaseCost": 32.0, "wastePct": 2, "supplier": "Congelados", "notes": "Unidade base"}, {"id": "ing_rech_dl", "name": "Doce de leite", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 21.0, "wastePct": 0, "supplier": "Doçaria", "notes": "Recheio"}, {"id": "ing_rech_choc", "name": "Chocolate", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 19.0, "wastePct": 0, "supplier": "Doçaria", "notes": "Recheio"}, {"id": "ing_rech_goi", "name": "Goiabada", "baseUnit": "g", "purchaseQty": 1000, "purchaseCost": 14.0, "wastePct": 0, "supplier": "Doçaria", "notes": "Recheio"}, {"id": "ing_refri_350", "name": "Refrigerante lata 350ml", "baseUnit": "un", "purchaseQty": 12, "purchaseCost": 42.0, "wastePct": 0, "supplier": "Bebidas", "notes": "Fardo"}, {"id": "ing_garrafa_450", "name": "Garrafa 450ml", "baseUnit": "un", "purchaseQty": 12, "purchaseCost": 60.0, "wastePct": 0, "supplier": "Bebidas", "notes": "Fardo"}, {"id": "ing_suco_natural", "name": "Suco natural (garrafinha)", "baseUnit": "un", "purchaseQty": 10, "purchaseCost": 42.0, "wastePct": 0, "supplier": "Produção", "notes": "Custo médio por garrafinha"}], "packaging": [{"id": "pkg_lanche", "name": "Envelope/saco para lanche", "purchaseQty": 500, "purchaseCost": 95.0, "notes": "Sanduíches"}, {"id": "pkg_bat_p", "name": "Caixa batata P", "purchaseQty": 100, "purchaseCost": 38.0, "notes": "80g"}, {"id": "pkg_bat_m", "name": "Caixa batata M", "purchaseQty": 100, "purchaseCost": 46.0, "notes": "120g"}, {"id": "pkg_bat_g", "name": "Caixa batata G", "purchaseQty": 100, "purchaseCost": 54.0, "notes": "160g"}, {"id": "pkg_almoco", "name": "Marmita / box almoço", "purchaseQty": 100, "purchaseCost": 95.0, "notes": "Prato embalado"}, {"id": "pkg_potinho_30", "name": "Potinho 30ml + tampa", "purchaseQty": 100, "purchaseCost": 24.0, "notes": "Molhos extras"}, {"id": "pkg_potinho_60", "name": "Potinho 60ml + tampa", "purchaseQty": 100, "purchaseCost": 31.0, "notes": "Vinagrete maior"}, {"id": "pkg_sobremesa", "name": "Saquinho/suporte sobremesa", "purchaseQty": 100, "purchaseCost": 18.0, "notes": "Churros"}, {"id": "pkg_sacola_delivery", "name": "Sacola delivery / despacho", "purchaseQty": 100, "purchaseCost": 52.0, "notes": "1 por pedido/item grande"}, {"id": "pkg_guardanapo", "name": "Guardanapo (par médio)", "purchaseQty": 1000, "purchaseCost": 28.0, "notes": "Rateio médio"}, {"id": "pkg_combo_familia", "name": "Caixa combo família", "purchaseQty": 50, "purchaseCost": 69.0, "notes": "Para combos grandes"}], "recipes": [{"id": "rec_pao_parmesao", "name": "Pão com parmesão", "yieldQty": 1, "yieldUnit": "un", "storage": "Produção do lanche", "notes": "Semiacabado para assinatura e monte o seu", "components": [{"refType": "ingredient", "refId": "ing_pao_frances", "qty": 1}, {"refType": "ingredient", "refId": "ing_parmesao", "qty": 8}]}, {"id": "rec_vinagrete", "name": "Vinagrete da casa", "yieldQty": 1000, "yieldUnit": "ml", "storage": "Descanso refrigerado", "notes": "Serve porção de 30ml no lanche ou 60ml no potinho", "components": [{"refType": "ingredient", "refId": "ing_tomate", "qty": 500}, {"refType": "ingredient", "refId": "ing_cebola", "qty": 250}, {"refType": "ingredient", "refId": "ing_pimentao", "qty": 120}, {"refType": "ingredient", "refId": "ing_cheiro_verde", "qty": 45}, {"refType": "ingredient", "refId": "ing_oleo_vinagre", "qty": 120}]}, {"id": "rec_maionese", "name": "Maionese da casa", "yieldQty": 1000, "yieldUnit": "g", "storage": "Descanso refrigerado", "notes": "Base para lanche e potinho de molho", "components": [{"refType": "ingredient", "refId": "ing_maionese_ind", "qty": 900}, {"refType": "ingredient", "refId": "ing_alho", "qty": 55}, {"refType": "ingredient", "refId": "ing_limao", "qty": 35}, {"refType": "ingredient", "refId": "ing_cheiro_verde", "qty": 20}]}, {"id": "rec_batata_p", "name": "Batata frita base P", "yieldQty": 1, "yieldUnit": "un", "storage": "Quente / fritadeira", "notes": "Porção de 80g", "components": [{"refType": "ingredient", "refId": "ing_batata", "qty": 80}, {"refType": "ingredient", "refId": "ing_tempero", "qty": 2}]}, {"id": "rec_batata_m", "name": "Batata frita base M", "yieldQty": 1, "yieldUnit": "un", "storage": "Quente / fritadeira", "notes": "Porção de 120g", "components": [{"refType": "ingredient", "refId": "ing_batata", "qty": 120}, {"refType": "ingredient", "refId": "ing_tempero", "qty": 3}]}, {"id": "rec_batata_g", "name": "Batata frita base G", "yieldQty": 1, "yieldUnit": "un", "storage": "Quente / fritadeira", "notes": "Porção de 160g", "components": [{"refType": "ingredient", "refId": "ing_batata", "qty": 160}, {"refType": "ingredient", "refId": "ing_tempero", "qty": 4}]}, {"id": "rec_grat_muc", "name": "Cobertura gratinada muçarela", "yieldQty": 1, "yieldUnit": "un", "storage": "Salamandra", "notes": "Cobertura padrão para gratinar", "components": [{"refType": "ingredient", "refId": "ing_mucarela", "qty": 45}]}, {"id": "rec_grat_cat", "name": "Cobertura gratinada catupiry", "yieldQty": 1, "yieldUnit": "un", "storage": "Salamandra", "notes": "Cobertura com catupiry", "components": [{"refType": "ingredient", "refId": "ing_catupiry", "qty": 50}]}, {"id": "rec_grat_cheddar", "name": "Cobertura gratinada cheddar", "yieldQty": 1, "yieldUnit": "un", "storage": "Salamandra", "notes": "Cobertura com cheddar", "components": [{"refType": "ingredient", "refId": "ing_cheddar", "qty": 50}]}, {"id": "rec_grat_4q", "name": "Cobertura gratinada 4 queijos", "yieldQty": 1, "yieldUnit": "un", "storage": "Salamandra", "notes": "Cobertura com mix 4 queijos", "components": [{"refType": "ingredient", "refId": "ing_4queijos", "qty": 50}]}, {"id": "rec_prato_alpha", "name": "Prato Alpha base", "yieldQty": 1, "yieldUnit": "un", "storage": "Montagem almoço", "notes": "Prato com fraldinha", "components": [{"refType": "ingredient", "refId": "ing_arroz", "qty": 160}, {"refType": "ingredient", "refId": "ing_feijao", "qty": 120}, {"refType": "ingredient", "refId": "ing_salada", "qty": 80}, {"refType": "ingredient", "refId": "ing_fraldinha", "qty": 120}]}, {"id": "rec_prato_beta", "name": "Prato Beta base", "yieldQty": 1, "yieldUnit": "un", "storage": "Montagem almoço", "notes": "Prato com frango", "components": [{"refType": "ingredient", "refId": "ing_arroz", "qty": 160}, {"refType": "ingredient", "refId": "ing_feijao", "qty": 120}, {"refType": "ingredient", "refId": "ing_salada", "qty": 80}, {"refType": "ingredient", "refId": "ing_frango", "qty": 120}]}, {"id": "rec_prato_gamma", "name": "Prato Gamma base", "yieldQty": 1, "yieldUnit": "un", "storage": "Montagem almoço", "notes": "Prato com linguiça", "components": [{"refType": "ingredient", "refId": "ing_arroz", "qty": 160}, {"refType": "ingredient", "refId": "ing_feijao", "qty": 120}, {"refType": "ingredient", "refId": "ing_salada", "qty": 80}, {"refType": "ingredient", "refId": "ing_linguica", "qty": 120}]}, {"id": "rec_churros_dl", "name": "Churros recheado — doce de leite", "yieldQty": 1, "yieldUnit": "un", "storage": "Fritadeira / sobremesa", "notes": "Unidade de sobremesa", "components": [{"refType": "ingredient", "refId": "ing_massa_churros", "qty": 1}, {"refType": "ingredient", "refId": "ing_rech_dl", "qty": 35}]}, {"id": "rec_churros_choc", "name": "Churros recheado — chocolate", "yieldQty": 1, "yieldUnit": "un", "storage": "Fritadeira / sobremesa", "notes": "Unidade de sobremesa", "components": [{"refType": "ingredient", "refId": "ing_massa_churros", "qty": 1}, {"refType": "ingredient", "refId": "ing_rech_choc", "qty": 35}]}, {"id": "rec_churros_goi", "name": "Churros recheado — goiabada", "yieldQty": 1, "yieldUnit": "un", "storage": "Fritadeira / sobremesa", "notes": "Unidade de sobremesa", "components": [{"refType": "ingredient", "refId": "ing_massa_churros", "qty": 1}, {"refType": "ingredient", "refId": "ing_rech_goi", "qty": 35}]}], "products": [{"id": "prd_base_lanche_medio", "name": "Base interna — Lanche assinatura médio", "categoryId": "cat_base_interna", "type": "base", "salePrice": 0, "active": false, "includeInCatalogCount": false, "notes": "Base média para combos rápidos", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_frango", "qty": 110}, {"refType": "ingredient", "refId": "ing_mucarela", "qty": 35}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_base_prato_medio", "name": "Base interna — Prato médio", "categoryId": "cat_base_interna", "type": "base", "salePrice": 0, "active": false, "includeInCatalogCount": false, "notes": "Base média para combos de almoço", "components": [{"refType": "ingredient", "refId": "ing_arroz", "qty": 160}, {"refType": "ingredient", "refId": "ing_feijao", "qty": 120}, {"refType": "ingredient", "refId": "ing_salada", "qty": 80}, {"refType": "ingredient", "refId": "ing_frango", "qty": 120}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_alpha", "name": "Alpha — Gyros Fraldinha (Assinatura)", "categoryId": "cat_assinaturas", "type": "menu", "salePrice": 35.0, "active": true, "includeInCatalogCount": true, "notes": "Base alinhada ao cardápio enviado", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_fraldinha", "qty": 110}, {"refType": "ingredient", "refId": "ing_mucarela", "qty": 35}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_beta", "name": "Beta — Gyros Frango (Assinatura)", "categoryId": "cat_assinaturas", "type": "menu", "salePrice": 35.0, "active": true, "includeInCatalogCount": true, "notes": "Base alinhada ao cardápio enviado", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_frango", "qty": 110}, {"refType": "ingredient", "refId": "ing_catupiry", "qty": 35}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_gamma", "name": "Gamma — Gyros Linguiça (Assinatura)", "categoryId": "cat_assinaturas", "type": "menu", "salePrice": 35.0, "active": true, "includeInCatalogCount": true, "notes": "Base alinhada ao cardápio enviado", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_linguica", "qty": 110}, {"refType": "ingredient", "refId": "ing_4queijos", "qty": 35}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_monte", "name": "Monte o seu Gyros — Base", "categoryId": "cat_monte", "type": "menu", "salePrice": 33.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo-base configurável. Ajuste proteína/queijo conforme sua ficha real.", "components": [{"refType": "recipe", "refId": "rec_pao_parmesao", "qty": 1}, {"refType": "ingredient", "refId": "ing_frango", "qty": 100}, {"refType": "ingredient", "refId": "ing_mucarela", "qty": 30}, {"refType": "recipe", "refId": "rec_vinagrete", "qty": 30}, {"refType": "recipe", "refId": "rec_maionese", "qty": 20}, {"refType": "packaging", "refId": "pkg_lanche", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_combo1", "name": "Combo 1 — Lanche + Batata M (120g)", "categoryId": "cat_combos", "type": "combo", "salePrice": 52.0, "active": true, "includeInCatalogCount": true, "notes": "Combo por camadas usando base interna de lanche", "components": [{"refType": "product", "refId": "prd_base_lanche_medio", "qty": 1}, {"refType": "recipe", "refId": "rec_batata_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_combo2", "name": "Combo 2 — Lanche + Bebida 350ml", "categoryId": "cat_combos", "type": "combo", "salePrice": 41.0, "active": true, "includeInCatalogCount": true, "notes": "Combo por camadas usando base interna de lanche", "components": [{"refType": "product", "refId": "prd_base_lanche_medio", "qty": 1}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_combo3", "name": "Combo 3 — Lanche + Batata M + Bebida 350ml", "categoryId": "cat_combos", "type": "combo", "salePrice": 55.0, "active": true, "includeInCatalogCount": true, "notes": "Combo por camadas usando base interna de lanche", "components": [{"refType": "product", "refId": "prd_base_lanche_medio", "qty": 1}, {"refType": "recipe", "refId": "rec_batata_m", "qty": 1}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_bat_p", "name": "Batata frita temperada — P (80g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 18.0, "active": true, "includeInCatalogCount": true, "notes": "Porção à parte", "components": [{"refType": "recipe", "refId": "rec_batata_p", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_p", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_m", "name": "Batata frita temperada — M (120g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 28.0, "active": true, "includeInCatalogCount": true, "notes": "Porção à parte", "components": [{"refType": "recipe", "refId": "rec_batata_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_g", "name": "Batata frita temperada — G (160g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 36.0, "active": true, "includeInCatalogCount": true, "notes": "Porção à parte", "components": [{"refType": "recipe", "refId": "rec_batata_g", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_g", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_grat_p", "name": "Batata gratinada — P (80g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 26.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com muçarela. Troque cobertura conforme sua ficha.", "components": [{"refType": "recipe", "refId": "rec_batata_p", "qty": 1}, {"refType": "recipe", "refId": "rec_grat_muc", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_p", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_grat_m", "name": "Batata gratinada — M (120g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 36.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com muçarela. Troque cobertura conforme sua ficha.", "components": [{"refType": "recipe", "refId": "rec_batata_m", "qty": 1}, {"refType": "recipe", "refId": "rec_grat_muc", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_m", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_bat_grat_g", "name": "Batata gratinada — G (160g)", "categoryId": "cat_batatas", "type": "menu", "salePrice": 44.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com muçarela. Troque cobertura conforme sua ficha.", "components": [{"refType": "recipe", "refId": "rec_batata_g", "qty": 1}, {"refType": "recipe", "refId": "rec_grat_muc", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_g", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_carne_grat", "name": "Carne Gyros Gratinada (porção)", "categoryId": "cat_gratinados", "type": "menu", "salePrice": 39.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com frango + muçarela. Ajuste proteína e queijo conforme o real.", "components": [{"refType": "ingredient", "refId": "ing_frango", "qty": 140}, {"refType": "recipe", "refId": "rec_grat_muc", "qty": 1}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_prato_alpha", "name": "Prato Alpha — Fraldinha", "categoryId": "cat_almoco", "type": "menu", "salePrice": 30.0, "active": true, "includeInCatalogCount": true, "notes": "Almoço embalado por porções", "components": [{"refType": "recipe", "refId": "rec_prato_alpha", "qty": 1}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_prato_beta", "name": "Prato Beta — Frango", "categoryId": "cat_almoco", "type": "menu", "salePrice": 30.0, "active": true, "includeInCatalogCount": true, "notes": "Almoço embalado por porções", "components": [{"refType": "recipe", "refId": "rec_prato_beta", "qty": 1}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_prato_gamma", "name": "Prato Gamma — Linguiça", "categoryId": "cat_almoco", "type": "menu", "salePrice": 30.0, "active": true, "includeInCatalogCount": true, "notes": "Almoço embalado por porções", "components": [{"refType": "recipe", "refId": "rec_prato_gamma", "qty": 1}, {"refType": "packaging", "refId": "pkg_almoco", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 2}]}, {"id": "prd_combo_almoco", "name": "Combo Almoço — Prato + Bebida + Mini batata (80g)", "categoryId": "cat_almoco", "type": "combo", "salePrice": 45.0, "active": true, "includeInCatalogCount": true, "notes": "Combo almoço com base interna de prato", "components": [{"refType": "product", "refId": "prd_base_prato_medio", "qty": 1}, {"refType": "recipe", "refId": "rec_batata_p", "qty": 1}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}, {"refType": "packaging", "refId": "pkg_bat_p", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_churros", "name": "Churros (unidade)", "categoryId": "cat_sobremesas", "type": "menu", "salePrice": 11.9, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com doce de leite. Troque a receita para outro recheio quando quiser.", "components": [{"refType": "recipe", "refId": "rec_churros_dl", "qty": 1}, {"refType": "packaging", "refId": "pkg_sobremesa", "qty": 1}, {"refType": "packaging", "refId": "pkg_guardanapo", "qty": 1}]}, {"id": "prd_molho_extra", "name": "Molho extra (30ml potinho)", "categoryId": "cat_molhos", "type": "extra", "salePrice": 2.5, "active": true, "includeInCatalogCount": true, "notes": "Modelo padrão com maionese da casa", "components": [{"refType": "recipe", "refId": "rec_maionese", "qty": 30}, {"refType": "packaging", "refId": "pkg_potinho_30", "qty": 1}]}, {"id": "prd_vinagrete_extra", "name": "Vinagrete extra (potinho)", "categoryId": "cat_molhos", "type": "extra", "salePrice": 2.5, "active": true, "includeInCatalogCount": true, "notes": "Use 60ml para extra à parte", "components": [{"refType": "recipe", "refId": "rec_vinagrete", "qty": 60}, {"refType": "packaging", "refId": "pkg_potinho_60", "qty": 1}]}, {"id": "prd_sache5", "name": "Pacote extra com 5 sachês", "categoryId": "cat_molhos", "type": "extra", "salePrice": 2.0, "active": true, "includeInCatalogCount": true, "notes": "Ketchup, maionese e mostarda", "components": [{"refType": "ingredient", "refId": "ing_saches_mix", "qty": 5}]}, {"id": "prd_coca", "name": "Coca-Cola 350ml", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 7.0, "active": true, "includeInCatalogCount": true, "notes": "Lata 350ml", "components": [{"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}]}, {"id": "prd_coca_zero", "name": "Coca Zero 350ml", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 7.0, "active": true, "includeInCatalogCount": true, "notes": "Lata 350ml", "components": [{"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}]}, {"id": "prd_fanta", "name": "Fanta 350ml", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 7.0, "active": true, "includeInCatalogCount": true, "notes": "Lata 350ml", "components": [{"refType": "ingredient", "refId": "ing_refri_350", "qty": 1}]}, {"id": "prd_garrafa_450", "name": "Garrafa 450ml (pêssego ou limão)", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 9.0, "active": true, "includeInCatalogCount": true, "notes": "Bebida 450ml", "components": [{"refType": "ingredient", "refId": "ing_garrafa_450", "qty": 1}]}, {"id": "prd_suco_natural", "name": "Suco natural (garrafinha)", "categoryId": "cat_bebidas", "type": "bebida", "salePrice": 10.0, "active": true, "includeInCatalogCount": true, "notes": "Produção própria", "components": [{"refType": "ingredient", "refId": "ing_suco_natural", "qty": 1}]}, {"id": "prd_combo_familia", "name": "Combo Família Gyros", "categoryId": "cat_familia", "type": "combo", "salePrice": 169.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo de família usando base média de lanche", "components": [{"refType": "product", "refId": "prd_base_lanche_medio", "qty": 4}, {"refType": "recipe", "refId": "rec_batata_g", "qty": 2}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 4}, {"refType": "packaging", "refId": "pkg_bat_g", "qty": 2}, {"refType": "packaging", "refId": "pkg_combo_familia", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}, {"id": "prd_almoco_familia", "name": "Almoço Família (horário almoço)", "categoryId": "cat_familia", "type": "combo", "salePrice": 129.0, "active": true, "includeInCatalogCount": true, "notes": "Modelo com pratos médios + bebida", "components": [{"refType": "product", "refId": "prd_base_prato_medio", "qty": 4}, {"refType": "ingredient", "refId": "ing_refri_350", "qty": 4}, {"refType": "packaging", "refId": "pkg_combo_familia", "qty": 1}, {"refType": "packaging", "refId": "pkg_sacola_delivery", "qty": 1}]}], "fixedCosts": [{"id": "fix_aluguel", "name": "Aluguel", "amount": 3500.0, "notes": "Rateado por item ativo do cardápio"}, {"id": "fix_folha", "name": "Funcionários / pró-labore", "amount": 9800.0, "notes": "Rateado por item ativo do cardápio"}, {"id": "fix_energia", "name": "Energia + gás + água", "amount": 1800.0, "notes": "Rateado por item ativo do cardápio"}, {"id": "fix_ifood", "name": "Software / taxas / operação", "amount": 950.0, "notes": "Rateado por item ativo do cardápio"}, {"id": "fix_outros", "name": "Outros custos fixos", "amount": 900.0, "notes": "Contabilidade, manutenção, internet etc."}]};
const STORAGE_KEY = 'gyros-cmv-pwa-v1';
const OFFICIAL_DB_HASH_KEY = 'gyros-cmv-official-hash-v1';
const OFFICIAL_DB_URL = './gyros-custos-cardapio.json';
const pageMeta = {
  dashboard: { title: 'Dashboard', subtitle: 'Visão geral do custo, do cardápio ativo e do rateio fixo.' },
  catalog: { title: 'Catálogo', subtitle: 'Itens finais do cardápio, combos e composição por camadas.' },
  resources: { title: 'Cadastros', subtitle: 'Ingredientes, preparos, embalagens, custos fixos e parâmetros.' }
};

const state = {
  page: 'catalog',
  operationView: 'gyros',
  resourceTab: 'ingredients',
  selectedProductId: null,
  selectedResourceId: null,
  modal: null,
  confirmDialog: null,
  deferredPrompt: null,
  mobileNavOpen: false,
  lastSavedAt: null,
  filterText: '',
  filterCategory: 'all'
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

function normalizeDb(target) {
  return ensureCanonicalFields(normalizeSupplierData(applyMultiOperationRules(applyPricingRules(applyPurchaseUpdates(target)))));
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
        paymentStatus: 'pending',
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
      meta: item ? `${item.baseUnit} • custo unitário ${brl(unitCost)}` : 'Ingrediente não encontrado',
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
      meta:`rendimento ${rec.yieldQty} ${rec.yieldUnit} • lote ${brl(batchCost)}`,
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

function renderNav() {
  const navItems = [
    ['dashboard','Dashboard'],
    ['catalog','Catálogo'],
    ['resources','Cadastros']
  ];
  qs('#nav').innerHTML = navItems.map(([id,label]) => `
    <button class="${state.page===id?'active':''}" data-page="${id}">
      <span>${label}</span>
      <span class="tag">${id==='catalog' ? activeCatalogProducts().length+' itens' : id==='resources' ? 'BOM' : 'visão geral'}</span>
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
      <div class="top"><div><div class="name">${escapeHtml(node.title)}</div><div class="meta">${escapeHtml(componentTypeLabel(node.refType))} • qtd ${node.qty}${node.meta ? ' • ' + escapeHtml(node.meta) : ''}${node.pricingMode ? ' • ' + escapeHtml(componentPricingModeLabel(node.pricingMode)) : ''}</div></div><div><strong>${brl(node.cost)}</strong></div></div>
      ${node.children?.length ? `<div class="children">${renderTree(node.children)}</div>` : ''}
    </div>`).join('')}</div>`;
}

function renderProductDetailHtml(c) {
  const p = c.product;
  const scope = p.scope || legacyScopeForRecord('products', p);
  const addonSection = c.addons?.length
    ? `<div style="margin-top:16px;"><h3 style="font-size:15px; margin:0 0 10px;">Adicionais e escolhas possíveis</h3>
        <div class="note" style="margin-bottom:10px;">Cada adicional aparece com custo, preço base sugerido e preço iFood. Isso ajuda a revisar repasse sem transformar tudo em produto solto no catálogo principal.</div>
        <div class="stack">${c.addons.map(addon => `
        <div class="cost-node">
          <div class="top">
            <div>
              <div class="name">${escapeHtml(addon.name)}</div>
              <div class="meta">${escapeHtml(addon.group || 'opcional')} • ${escapeHtml(addonChargeModeLabel(addon.chargeMode))}${addon.notes ? ` • ${escapeHtml(addon.notes)}` : ''}</div>
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
        </div>`).join('')}</div></div>`
    : '';
  return `
    <div class="detail-header"><div><div class="legend">${scopeTag(scope)}<span class="tag">${escapeHtml(categoryName(p.categoryId))}</span><span class="tag">SKU ${escapeHtml(p.code || '—')}</span></div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description || p.notes || 'Sem observação cadastrada.')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="duplicate-product" data-id="${p.id}">Duplicar</button><button class="btn ghost" data-action="edit-product" data-id="${p.id}">Editar</button><button class="btn danger" data-action="delete-product" data-id="${p.id}">Excluir</button></div></div>
    <div class="info-grid">
      <div class="info-cell"><div class="k">SKU</div><div class="v" style="font-size:15px">${escapeHtml(p.code || '—')}</div></div>
      <div class="info-cell"><div class="k">Preço de venda</div><div class="v">${brl(c.salePrice)}</div></div>
      <div class="info-cell"><div class="k">Margem atual (sem rateio)</div><div class="v status ${statusClass(c.marginPct)}">${pct(c.marginPct)}</div></div>
      <div class="info-cell"><div class="k">Preço de venda iFood</div><div class="v">${brl(c.ifoodSalePrice)}</div></div>
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
    <div style="margin-top:16px;"><h3 style="font-size:15px; margin:0 0 10px;">Estrutura de custo / BOM base</h3>${renderTree(c.nodes)}</div>
    ${addonSection}`;
}

function renderCatalog() {
  const categories = visibleRecords('categories', state.operationView).filter(c => c.active !== false && c.id !== 'cat_base_interna');
  const products = activeCatalogProducts(state.operationView).filter(p => {
    const text = state.filterText.trim().toLowerCase();
    const categoryOk = state.filterCategory === 'all' || p.categoryId === state.filterCategory;
    const textOk = !text || [p.name, p.notes, categoryName(p.categoryId), scopeBadge(p.scope || legacyScopeForRecord('products', p))].join(' ').toLowerCase().includes(text);
    return categoryOk && textOk;
  });
  if (!state.selectedProductId || !products.find(p => p.id === state.selectedProductId)) state.selectedProductId = products[0]?.id || null;
  const selected = state.selectedProductId ? computeProduct(state.selectedProductId, state.operationView) : null;

  qs('#page-catalog').innerHTML = `
    <div class="stack">
      <section class="panel"><div class="panel-head"><div><h3>Itens finais do cardápio</h3><p>O combo pode carregar outro item como base. O custo direto sempre puxa as camadas de baixo. Escopo atual: ${operationLabel()}.</p></div><div class="filter-row"><input class="input" id="catalogSearch" placeholder="Buscar item, nota, categoria ou escopo" value="${escapeHtml(state.filterText)}"><select class="select" id="catalogCategory"><option value="all">Todas as categorias</option>${categories.map(cat => `<option value="${cat.id}" ${state.filterCategory===cat.id?'selected':''}>${escapeHtml(cat.name)}</option>`).join('')}</select><button class="btn primary" id="addProductBtn">Novo item / combo</button></div></div><div class="panel-body"><div class="split"><div class="panel" style="box-shadow:none;"><div class="panel-body" style="padding:0 0 8px 0; overflow:auto;"><table><thead><tr><th>Item</th><th>Escopo</th><th>Categoria</th><th>Venda</th><th>Venda iFood</th><th>Custo total</th><th>Margem s/ rateio</th></tr></thead><tbody>${products.length ? products.map(p => { const c = computeProduct(p.id, state.operationView); return `<tr data-product-id="${p.id}" class="${state.selectedProductId===p.id?'active':''}"><td><strong>${escapeHtml(p.name)}</strong><div class="small muted">${p.type}</div></td><td>${scopeTag(p.scope || legacyScopeForRecord('products', p))}</td><td>${escapeHtml(categoryName(p.categoryId))}</td><td>${brl(c.salePrice)}</td><td>${brl(c.ifoodSalePrice)}</td><td>${brl(c.totalCost)}</td><td class="status ${statusClass(c.marginPct)}">${pct(c.marginPct)}</td></tr>`; }).join('') : `<tr><td colspan="7"><div class="empty">Nenhum item encontrado.</div></td></tr>`}</tbody></table></div></div><div class="panel" style="box-shadow:none;"><div class="panel-body" id="catalogDetail">${selected ? renderProductDetailHtml(selected) : '<div class="empty">Selecione um item para ver o detalhamento.</div>'}</div></div></div></div></section>
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

function renderIngredientDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione um ingrediente.</div>';
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Ingrediente</span>${scopeTag(item.scope || legacyScopeForRecord('ingredients', item))}${evidenceTag(item)}<span class="tag">SKU interno ${escapeHtml(item.code || '—')}</span></div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description || item.notes||'')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="ingredients" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="ingredients" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">SKU interno</div><div class="v" style="font-size:15px">${escapeHtml(item.code || '—')}</div></div><div class="info-cell"><div class="k">Fornecedor</div><div class="v">${escapeHtml(item.supplier||'—')}</div></div><div class="info-cell"><div class="k">Modelo de compra</div><div class="v" style="font-size:15px">${supplierModeLabel(item.supplierMode)}</div></div><div class="info-cell"><div class="k">Unidade base</div><div class="v">${item.baseUnit}</div></div><div class="info-cell"><div class="k">Preço de compra</div><div class="v">${brl(item.purchaseCost)}</div></div><div class="info-cell"><div class="k">Quantidade do pacote</div><div class="v">${item.purchaseQty} ${item.baseUnit}</div></div><div class="info-cell"><div class="k">Perda</div><div class="v">${pct(item.wastePct)}</div></div><div class="info-cell"><div class="k">Custo unitário real</div><div class="v">${brl(ingredientUnitCost(item))}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(procurementEvidenceType(item))}">${escapeHtml(item.sourceReference || 'Sem referência')}</span></div>`;
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
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Embalagem</span>${scopeTag(item.scope || legacyScopeForRecord('packaging', item))}${evidenceTag(item)}<span class="tag">SKU interno ${escapeHtml(item.code || '—')}</span></div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description || item.notes||'')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="packaging" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="packaging" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">SKU interno</div><div class="v" style="font-size:15px">${escapeHtml(item.code || '—')}</div></div><div class="info-cell"><div class="k">Fornecedor</div><div class="v">${escapeHtml(item.supplier || '—')}</div></div><div class="info-cell"><div class="k">Modelo de compra</div><div class="v" style="font-size:15px">${supplierModeLabel(item.supplierMode)}</div></div><div class="info-cell"><div class="k">Pacote de compra</div><div class="v">${item.purchaseQty} un</div></div><div class="info-cell"><div class="k">Preço do pacote</div><div class="v">${brl(item.purchaseCost)}</div></div><div class="info-cell"><div class="k">Custo unitário</div><div class="v">${brl(packagingUnitCost(item))}</div></div><div class="info-cell"><div class="k">Tipo</div><div class="v">Descartável</div></div><div class="info-cell"><div class="k">Procedência do custo</div><div class="v" style="font-size:15px">${procurementEvidenceLabel(evidenceType)}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(evidenceType)}">${escapeHtml(item.sourceReference || 'Sem referência')}</span></div>`;
}

function renderInputDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione um input.</div>';
  const supplier = item.supplierId ? byId('suppliers', item.supplierId) : null;
  const fileHref = item.filePath || item.fileUrl || '';
  const fileOrigin = item.filePath ? 'Arquivo local do projeto' : item.fileUrl ? 'Link externo' : 'Sem arquivo';
  const fileActions = fileHref
    ? `<div class="pill-line" style="margin-top:12px;"><a class="btn ghost" href="${escapeHtml(fileHref)}" target="_blank" rel="noopener noreferrer">Abrir ${item.filePath ? 'arquivo' : 'link'}</a></div>`
    : '';
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Input</span>${scopeTag(item.scope || 'gyros')}${evidenceTag(item)}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.notes || 'Registro de apoio para nota, orçamento, pedido, comprovante ou lista de compras.')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="inputs" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="inputs" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">Tipo</div><div class="v">${inputTypeLabel(item.inputType)}</div></div><div class="info-cell"><div class="k">Canal</div><div class="v">${inputChannelLabel(item.sourceChannel)}</div></div><div class="info-cell"><div class="k">Fornecedor</div><div class="v">${escapeHtml(supplier?.name || item.supplierName || '—')}</div></div><div class="info-cell"><div class="k">Documento / pedido</div><div class="v">${escapeHtml(item.documentNumber || '—')}</div></div><div class="info-cell"><div class="k">Data</div><div class="v">${escapeHtml(item.date || '—')}</div></div><div class="info-cell"><div class="k">Pagamento</div><div class="v">${escapeHtml(item.paymentMethod || '—')}${item.paymentStatus ? ` • ${paymentStatusLabel(item.paymentStatus)}` : ''}</div></div><div class="info-cell"><div class="k">Valor total</div><div class="v">${item.totalAmount ? brl(item.totalAmount) : '—'}</div></div><div class="info-cell"><div class="k">Arquivo / referência</div><div class="v" style="font-size:15px">${escapeHtml(item.fileLabel || item.filePath || item.fileUrl || '—')}</div><div class="small muted" style="margin-top:6px;">${escapeHtml(fileOrigin)}</div></div></div>${fileActions}<div class="pill-line"><span class="tag ${procurementEvidenceClass(item.evidenceType || procurementEvidenceType(item))}">${escapeHtml(item.evidenceSource || 'Sem referência')}</span></div>`;
}

function renderSupplierDetailHtml(item) {
  if (!item) return '<div class="empty">Selecione um fornecedor.</div>';
  const linked = supplierLinkedRecords(item);
  const orders = supplierOrders(item.id);
  const inputs = supplierInputs(item);
  return `<div class="detail-header"><div><div class="legend"><span class="tag">Fornecedor</span>${scopeTag(item.scope || 'gyros')}${evidenceTag(item)}</div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.notes || 'Cadastro de fornecedor, vendedor e formas de pagamento.')}</p></div><div class="detail-actions"><button class="btn ghost" data-action="edit-resource" data-type="suppliers" data-id="${item.id}">Editar</button><button class="btn danger" data-action="delete-resource" data-type="suppliers" data-id="${item.id}">Excluir</button></div></div><div class="info-grid"><div class="info-cell"><div class="k">Razão social</div><div class="v">${escapeHtml(item.legalName || '—')}</div></div><div class="info-cell"><div class="k">CNPJ</div><div class="v">${escapeHtml(item.cnpj || '—')}</div></div><div class="info-cell"><div class="k">Vendedor</div><div class="v">${escapeHtml(item.sellerName || '—')}</div></div><div class="info-cell"><div class="k">Contato</div><div class="v">${escapeHtml(item.sellerPhone || item.sellerEmail || '—')}</div></div><div class="info-cell"><div class="k">Endereço</div><div class="v" style="font-size:15px">${escapeHtml(item.address || '—')}</div></div><div class="info-cell"><div class="k">CEP / cidade</div><div class="v" style="font-size:15px">${escapeHtml([item.cep, item.city, item.state].filter(Boolean).join(' • ') || '—')}</div></div><div class="info-cell"><div class="k">Chave PIX</div><div class="v">${escapeHtml(item.pixKey || '—')}</div></div><div class="info-cell"><div class="k">Tipo da chave PIX</div><div class="v">${escapeHtml(item.pixKeyType || '—')}</div></div><div class="info-cell"><div class="k">Formas de pagamento</div><div class="v" style="font-size:15px">${escapeHtml(normalizePaymentMethods(item.paymentMethods).join(', ') || '—')}</div></div><div class="info-cell"><div class="k">Origem do cadastro</div><div class="v" style="font-size:15px">${procurementEvidenceLabel(item.evidenceType || procurementEvidenceType(item))}</div></div></div><div class="pill-line"><span class="tag ${procurementEvidenceClass(item.evidenceType || procurementEvidenceType(item))}">${escapeHtml(item.evidenceSource || 'Sem referência')}</span></div><div class="stack" style="margin-top:16px;"><section class="evidence-panel ${procurementEvidenceClass(item.evidenceType || procurementEvidenceType(item))}"><h3 style="font-size:15px; margin:0 0 10px;">Itens vinculados</h3>${linked.length ? linked.map(({ type, item: linkedItem }) => `<div class="kpi-row"><div><strong>${escapeHtml(linkedItem.name)}</strong><div class="small muted">${type === 'ingredient' ? 'Ingrediente' : 'Embalagem'} • ${supplierModeLabel(linkedItem.supplierMode)} • ${escapeHtml(linkedItem.notes || '')}</div><div class="pill-line">${evidenceTag(linkedItem)}</div></div><div style="text-align:right"><div><strong>${type === 'ingredient' ? brl(ingredientUnitCost(linkedItem)) : brl(packagingUnitCost(linkedItem))}</strong></div><div class="small muted">${escapeHtml(linkedItem.sourceReference || 'Sem referência')}</div></div></div>`).join('') : '<div class="empty">Nenhum ingrediente ou embalagem vinculado a este fornecedor.</div>'}</section><section class="panel"><div class="panel-head"><div><h3>Inputs vinculados</h3><p>Arquivos, capturas, notas, orçamentos e listas associados a este fornecedor.</p></div></div><div class="panel-body kpi-list">${inputs.length ? inputs.map(input => `<div class="cost-node ${procurementEvidenceClass(input.evidenceType || procurementEvidenceType(input))}"><div class="top"><div><div class="name">${escapeHtml(input.title)}</div><div class="meta">${inputTypeLabel(input.inputType)} • ${inputChannelLabel(input.sourceChannel)} • ${escapeHtml(input.documentNumber || 'Sem número')} • ${escapeHtml(input.date || 'Sem data')}</div></div><div><strong>${input.totalAmount ? brl(input.totalAmount) : '—'}</strong></div></div>${(input.filePath || input.fileUrl) ? `<div class="pill-line" style="margin-top:10px;"><a class="btn ghost" href="${escapeHtml(input.filePath || input.fileUrl)}" target="_blank" rel="noopener noreferrer">Abrir ${input.filePath ? 'arquivo' : 'link'}</a></div>` : ''}</div>`).join('') : '<div class="empty">Nenhum input vinculado ainda para este fornecedor.</div>'}</div></section><section class="panel"><div class="panel-head"><div><h3>Pedidos / histórico de compra</h3><p>Registro importado da base atual para começar o histórico.</p></div></div><div class="panel-body kpi-list">${orders.length ? orders.map(order => `<div class="cost-node ${procurementEvidenceClass(order.evidenceType || procurementEvidenceType(order))}"><div class="top"><div><div class="name">${escapeHtml(order.label || 'Pedido')}</div><div class="meta">${escapeHtml(order.date || 'Sem data')} • ${escapeHtml(order.documentNumber || 'Sem documento')} • ${escapeHtml(order.paymentMethod || 'Forma não informada')} • ${paymentStatusLabel(order.paymentStatus)}</div></div><div><strong>${brl(order.totalAmount)}</strong></div></div><div class="children">${supplierOrderItems(order.id).map(row => `<div class="cost-node ${procurementEvidenceClass(row.evidenceType || procurementEvidenceType(row))}"><div class="top"><div><div class="name">${escapeHtml(row.description)}</div><div class="meta">${escapeHtml(row.qty)} ${escapeHtml(row.unit || 'un')} • unit ${brl(row.unitPrice)}</div></div><div><strong>${brl(row.totalPrice)}</strong></div></div></div>`).join('')}</div></div>`).join('') : '<div class="empty">Nenhum pedido registrado ainda para este fornecedor.</div>'}</div></section></div>`;
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
  if (tab === 'inputs') {
    return `<table><thead><tr><th>Input</th><th>Tipo</th><th>Canal</th><th>Fornecedor</th><th>Data</th><th>Valor</th><th>Procedência</th></tr></thead><tbody>${visibleRecords('inputs').map(item => `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.title)}</strong><div class="small muted">${escapeHtml(item.documentNumber || item.fileLabel || '')}</div></td><td>${inputTypeLabel(item.inputType)}</td><td>${inputChannelLabel(item.sourceChannel)}</td><td>${escapeHtml(byId('suppliers', item.supplierId)?.name || item.supplierName || '—')}</td><td>${escapeHtml(item.date || '—')}</td><td>${item.totalAmount ? brl(item.totalAmount) : '—'}</td><td>${evidenceTag(item)}</td></tr>`).join('')}</tbody></table>`;
  }
  if (tab === 'fixedCosts') {
    return `<table><thead><tr><th>Custo fixo</th><th>Escopo</th><th>Valor mensal</th><th>Observação</th></tr></thead><tbody>${visibleRecords('fixedCosts').map(item => `<tr data-resource-id="${item.id}" class="${state.selectedResourceId===item.id?'active':''}"><td><strong>${escapeHtml(item.name)}</strong></td><td>${scopeTag(item.scope || legacyScopeForRecord('fixedCosts', item))}</td><td>${brl(item.amount)}</td><td class="small muted">${escapeHtml(item.notes||'')}</td></tr>`).join('')}</tbody></table>`;
  }
  return '<div class="empty">Sem tabela.</div>';
}

function renderResources() {
  const tabs = [['ingredients','Ingredientes'],['recipes','Preparos'],['packaging','Embalagens'],['suppliers','Fornecedores'],['inputs','Inputs'],['fixedCosts','Custos fixos'],['settings','Parâmetros']];
  const list = state.resourceTab === 'settings' ? [] : visibleRecords(state.resourceTab, state.operationView);
  if (state.resourceTab !== 'settings' && (!state.selectedResourceId || !list.find(x => x.id === state.selectedResourceId))) state.selectedResourceId = list[0]?.id || null;
  let detailHtml = '<div class="empty">Selecione um registro.</div>';
  if (state.resourceTab === 'ingredients') detailHtml = state.selectedResourceId ? renderIngredientDetailHtml(byId('ingredients', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'recipes') detailHtml = state.selectedResourceId ? renderRecipeDetailHtml(byId('recipes', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'packaging') detailHtml = state.selectedResourceId ? renderPackagingDetailHtml(byId('packaging', state.selectedResourceId)) : detailHtml;
  if (state.resourceTab === 'suppliers') detailHtml = state.selectedResourceId ? renderSupplierDetailHtml(byId('suppliers', state.selectedResourceId)) : detailHtml;
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
  }
  db[type] = db[type].filter(x => x.id !== id);
  if (type === 'products' && state.selectedProductId === id) state.selectedProductId = null;
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
  if (type === 'inputs') return { id:uid('inp'), code:'', description:'', scope:defaultScope, title:'', inputType:'other', sourceChannel:'other', supplierId:'', supplierName:'', documentNumber:'', date:'', paymentMethod:'', paymentStatus:'pending', totalAmount:0, fileLabel:'', filePath:'', fileUrl:'', notes:'', evidenceType:'review', evidenceSource:'Input criado manualmente; anexar referência ou caminho do arquivo' };
  if (type === 'fixedCosts') return { id:uid('fix'), code:'', scope:defaultScope, name:'', amount:0, notes:'' };
  if (type === 'products') return { id:uid('prd'), code:'', description:'', erpUnit:'UN', productCondition:'new', erpProductType:'custom', salesChannels:['default','delivery','ifood'], scope:defaultScope, name:'', categoryId:db.categories.find(c=>c.active!==false)?.id || '', type:'menu', pricingMode:'auto', salePrice:0, active:true, includeInCatalogCount:true, notes:'', components:[], addons:[] };
  return { id:uid('row') };
}

function modalEntityName(type) {
  return { ingredients:'ingrediente', recipes:'preparo', packaging:'embalagem', suppliers:'fornecedor', inputs:'input', fixedCosts:'custo fixo', products:'item / combo' }[type] || 'cadastro';
}
function modalSubtitle(type) {
  return { ingredients:'Defina custo de compra, unidade-base, fornecedor e procedência.', recipes:'Cadastre rendimento e componentes do preparo.', packaging:'Toda embalagem que entra no custo final, com fornecedor e procedência.', suppliers:'Dados do fornecedor, vendedor, PIX e formas de pagamento.', inputs:'Cadastre notas, prints, listas, pedidos, comprovantes e referências do custo.', fixedCosts:'Valores mensais que serão rateados.', products:'Item final, extra, bebida, base interna ou combo. O preco pode seguir a regra automatica ou ser manual.' }[type] || '';
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

function openEntityModal(type, record=null) {
  state.modal = { type, isEdit:!!record, data: deepClone(record || defaultRecord(type)) };
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
  if (type === 'inputs') return `<div class="form-grid"><div class="field"><label>Título</label><input data-field="title" value="${escapeHtml(data.title || '')}"></div><div class="field"><label>SKU interno</label><input data-field="code" value="${escapeHtml(data.code || '')}" placeholder="Ex.: INP_PMG_8997086"></div><div class="field"><label>Descrição curta</label><input data-field="description" value="${escapeHtml(data.description || '')}" placeholder="Descrição para ERP / integração"></div><div class="field"><label>Escopo</label><select data-field="scope">${scopeSelectOptions(data.scope)}</select></div><div class="field"><label>Tipo do input</label><select data-field="inputType">${[['invoice','Nota fiscal'],['purchase_list','Lista de compras'],['quote','Orçamento'],['payment_receipt','Comprovante'],['order','Pedido'],['screenshot','Captura / print'],['other','Outro']].map(([v,l]) => `<option value="${v}" ${data.inputType===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Canal</label><select data-field="sourceChannel">${[['online','Online'],['physical_store','Loja física'],['whatsapp','WhatsApp'],['email','E-mail'],['phone','Telefone'],['other','Outro']].map(([v,l]) => `<option value="${v}" ${data.sourceChannel===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Fornecedor vinculado</label><select data-field="supplierId"><option value="">Sem vínculo</option>${visibleRecords('suppliers').map(item => `<option value="${item.id}" ${data.supplierId===item.id?'selected':''}>${escapeHtml(item.name)}</option>`).join('')}</select></div><div class="field"><label>Nome livre do fornecedor</label><input data-field="supplierName" value="${escapeHtml(data.supplierName || '')}" placeholder="Use quando ainda não houver cadastro do fornecedor"></div><div class="field"><label>Número do documento</label><input data-field="documentNumber" value="${escapeHtml(data.documentNumber || '')}"></div><div class="field"><label>Data</label><input data-field="date" value="${escapeHtml(data.date || '')}" placeholder="YYYY-MM-DD"></div><div class="field"><label>Forma de pagamento</label><input data-field="paymentMethod" value="${escapeHtml(data.paymentMethod || '')}" placeholder="PIX, boleto, cartão..."></div><div class="field"><label>Status do pagamento</label><select data-field="paymentStatus">${[['pending','Pendente'],['scheduled','Agendado'],['paid','Pago']].map(([v,l]) => `<option value="${v}" ${data.paymentStatus===v?'selected':''}>${l}</option>`).join('')}</select></div><div class="field"><label>Valor total</label><input type="number" step="0.01" data-field="totalAmount" value="${num(data.totalAmount)}"></div><div class="field"><label>Nome do arquivo</label><input data-field="fileLabel" value="${escapeHtml(data.fileLabel || '')}" placeholder="Ex.: PV 10002.pdf"></div><div class="field"><label>Caminho do arquivo</label><input data-field="filePath" value="${escapeHtml(data.filePath || '')}" placeholder="/caminho/ou/pasta/do/arquivo"></div><div class="field"><label>URL / referência</label><input data-field="fileUrl" value="${escapeHtml(data.fileUrl || '')}" placeholder="Link do site, drive ou sistema"></div><div class="field"><label>Procedência</label><select data-field="evidenceType"><option value="documented" ${data.evidenceType === 'documented' ? 'selected' : ''}>Fonte real / comprovada</option><option value="review" ${data.evidenceType === 'review' ? 'selected' : ''}>Manual / revisar</option><option value="estimated" ${data.evidenceType === 'estimated' ? 'selected' : ''}>Pesquisado / estimado</option></select></div><div class="field" style="grid-column:1/-1"><label>Fonte / referência</label><input data-field="evidenceSource" value="${escapeHtml(data.evidenceSource || '')}" placeholder="Ex.: print do site, nota fiscal, orçamento, comprovante PIX"></div><div class="field" style="grid-column:1/-1"><label>Observações</label><textarea data-field="notes">${escapeHtml(data.notes || '')}</textarea></div></div><div class="note">Use esta aba para guardar o rastro do custo: nota fiscal, pedido online, print, orçamento, lista de compras ou comprovante.</div>`;
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
    if (key === 'pricingMode') renderModal();
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

  qsa('.component-row', qs('#modalBody')).forEach(row => {
    if (row.dataset.addonIndex) return;
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
  const mainLabel = type === 'inputs' ? data.title : data.name;
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
  const list = db[type];
  const idx = list.findIndex(x => x.id === data.id);
  if (idx >= 0) list[idx] = deepClone(data); else list.unshift(deepClone(data));
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
      documento: order.invoiceNumber || '',
      meio_pagamento: order.paymentMethod || '',
      status_pagamento: order.paymentStatus || '',
      valor_total: num(order.totalAmount),
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
      arquivo_url: item.fileUrl || '',
      procedencia: procurementEvidenceLabel(procurementEvidenceType(item)),
      evidencia: item.evidenceSource || '',
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

initApp();
