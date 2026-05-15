# Insumos canonicos Gyros para ERP

```json
{
  "company": {
    "id": 3,
    "iri": "/people/3",
    "name": "GYROS FRANQUIAS LTDA"
  },
  "export_kind": "canonical_feedstocks_only",
  "source_of_truth": "gyros-custos-cardapio.json",
  "import_intent": "Criar/atualizar apenas insumos canonicos, preparos canonicos e embalagens canonicas; nao criar produtos comerciais nem vinculos de consumo neste arquivo.",
  "canonical_feedstocks": [
    {
      "code": "GYR-INS-ACUCAR-COM-CANELA",
      "erp_product_id": null,
      "name": "Acucar com canela",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 12,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Mercearia / referência web",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 12,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_ACUCAR_CANELA"
      ],
      "pwa_source_ids": [
        "ing_acucar_canela"
      ],
      "used_in": [
        "Combo Completo > Mini Churros 6 un com Doce de Leite > Mini Churros 6 un com Doce de Leite",
        "Mini Churros 6 un com Doce de Leite"
      ],
      "notes": "Mistura simples para polvilhar o churros. Custo de referencia; revisar depois."
    },
    {
      "code": "GYR-INS-AGUA-COM-GAS-510ML",
      "erp_product_id": null,
      "name": "Água com gás 510ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 1.645833,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Bebidas",
      "purchase_qty": 12,
      "purchase_unit": "un",
      "purchase_cost": 19.75,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_AGUA_GAS_510"
      ],
      "pwa_source_ids": [
        "ing_agua_gas_510"
      ],
      "used_in": [
        "Água Mineral com Gás"
      ],
      "notes": "Pacote com 12 unidades com gás"
    },
    {
      "code": "GYR-INS-AGUA-MINERAL-510ML",
      "erp_product_id": null,
      "name": "Água mineral 510ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 1.254167,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Bebidas",
      "purchase_qty": 12,
      "purchase_unit": "un",
      "purchase_cost": 15.05,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_AGUA_510"
      ],
      "pwa_source_ids": [
        "ing_agua_510"
      ],
      "used_in": [
        "Água Mineral sem Gás"
      ],
      "notes": "Pacote com 12 unidades sem gás"
    },
    {
      "code": "GYR-INS-ALHO",
      "erp_product_id": null,
      "name": "Alho",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 25.263158,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Hortifruti",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 24,
      "waste_pct": 5,
      "pwa_source_codes": [
        "ING_ALHO"
      ],
      "pwa_source_ids": [
        "ing_alho"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Manteiga com alho",
        "Beta Gyros de Frango > Manteiga com alho",
        "Gamma Gyros de Linguiça Toscana > Manteiga com alho",
        "Gyros Vegetariano de Berinjela > Manteiga com alho",
        "Combo Essencial > Base interna — Lanche assinatura médio > Manteiga com alho",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho"
      ],
      "notes": "Para maionese"
    },
    {
      "code": "GYR-INS-ARROZ-COZIDO",
      "erp_product_id": null,
      "name": "Arroz cozido",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 9.693878,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Cozinha",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 9.5,
      "waste_pct": 2,
      "pwa_source_codes": [
        "ING_ARROZ"
      ],
      "pwa_source_ids": [
        "ing_arroz"
      ],
      "used_in": [
        "Executivo de Fraldinha > Prato Alpha base",
        "Executivo de Frango > Prato Beta base",
        "Executivo de Linguiça Toscana > Prato Gamma base",
        "Executivo Vegetariano de Berinjela > Prato Beta base"
      ],
      "notes": "Custo por kg pronto"
    },
    {
      "code": "GYR-INS-AZEITE-DE-OLIVA",
      "erp_product_id": null,
      "name": "Azeite de oliva",
      "kind": "ingredient",
      "canonical_unit": "L",
      "unit_cost": 65,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 2000,
      "purchase_unit": "ml",
      "purchase_cost": 130,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_OLEO_VINAGRE"
      ],
      "pwa_source_ids": [
        "ing_oleo_vinagre"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Vinagrete da casa",
        "Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa"
      ],
      "notes": "Galao 2L de azeite de oliva extra virgem"
    },
    {
      "code": "GYR-INS-BACON",
      "erp_product_id": null,
      "name": "Bacon em cubos",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 25.47,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 2000,
      "purchase_unit": "g",
      "purchase_cost": 50.94,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_BACON_CUBOS"
      ],
      "pwa_source_ids": [
        "ing_bacon_cubos"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Bacon",
        "Beta Gyros de Frango > Bacon",
        "Gamma Gyros de Linguiça Toscana > Bacon",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Bacon",
        "Combo Essencial > Beta Gyros de Frango > Beta Gyros de Frango > Bacon",
        "Combo Essencial > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Bacon"
      ],
      "notes": "2 pacotes de 1kg"
    },
    {
      "code": "GYR-INS-BASE-DE-MAIONESE-QUERO",
      "erp_product_id": null,
      "name": "Base de maionese Quero",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 8,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 3000,
      "purchase_unit": "g",
      "purchase_cost": 24,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_MAIONESE_IND"
      ],
      "pwa_source_ids": [
        "ing_maionese_ind"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Combo Clássico > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Combo Clássico > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada",
        "Combo Completo > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Combo Completo > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Combo Completo > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada"
      ],
      "notes": "Maionese Grande Quero 3kg."
    },
    {
      "code": "GYR-INS-BATATA-PRE-FRITA",
      "erp_product_id": null,
      "name": "Batata pré-frita",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 7.363034,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 14000,
      "purchase_unit": "g",
      "purchase_cost": 99.99,
      "waste_pct": 3,
      "pwa_source_codes": [
        "ING_BATATA"
      ],
      "pwa_source_ids": [
        "ing_batata"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Batata frita base M",
        "Combo Completo > Batata Frita Média 200g > Batata frita base M",
        "Combo Família Gyros > Batata Frita Média 200g > Batata frita base M",
        "Batata Frita Média 200g > Batata frita base M",
        "Batata Frita Grande 400g > Batata frita base G",
        "Batata Gratinada Média 200g > Batata gratinada base M"
      ],
      "notes": "Caixa com 7 pacotes de 2kg"
    },
    {
      "code": "GYR-INS-BERINJELA",
      "erp_product_id": null,
      "name": "Berinjela",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 9.731707,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Hortifruti / referência web",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 7.98,
      "waste_pct": 18,
      "pwa_source_codes": [
        "ING_BERINJELA"
      ],
      "pwa_source_ids": [
        "ing_berinjela"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Valor estimado por kg para montar o antipasto de berinjela; revisar depois."
    },
    {
      "code": "GYR-INS-BUDWEISER-LONG-NECK-330ML",
      "erp_product_id": null,
      "name": "Budweiser long neck 330ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 5.958333,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 24,
      "purchase_unit": "un",
      "purchase_cost": 143,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_CERVEJA_BUD_330"
      ],
      "pwa_source_ids": [
        "ing_cerveja_bud_330"
      ],
      "used_in": [
        "Budweiser 330ml"
      ],
      "notes": "Pacote com 24 unidades"
    },
    {
      "code": "GYR-INS-CATUPIRY-ORIGINAL",
      "erp_product_id": null,
      "name": "Catupiry",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 40.619529,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Laticínio",
      "purchase_qty": 1500,
      "purchase_unit": "g",
      "purchase_cost": 60.32,
      "waste_pct": 1,
      "pwa_source_codes": [
        "ING_CATUPIRY"
      ],
      "pwa_source_ids": [
        "ing_catupiry"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Catupiry Original gratinado",
        "Beta Gyros de Frango",
        "Beta Gyros de Frango > Catupiry Original gratinado",
        "Gamma Gyros de Linguiça Toscana > Catupiry Original gratinado",
        "Gyros Vegetariano de Berinjela > Catupiry Original gratinado",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Catupiry Original gratinado"
      ],
      "notes": "Bisnaga Catupiry 1,5kg"
    },
    {
      "code": "GYR-INS-CATUPIRY-4-QUEIJOS",
      "erp_product_id": null,
      "name": "Catupiry Sabor 4 queijos",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 33.333333,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Laticínio",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 33,
      "waste_pct": 1,
      "pwa_source_codes": [
        "ING_4QUEIJOS"
      ],
      "pwa_source_ids": [
        "ing_4queijos"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Catupiry 4 Queijos gratinado",
        "Beta Gyros de Frango > Catupiry 4 Queijos gratinado",
        "Gamma Gyros de Linguiça Toscana",
        "Gamma Gyros de Linguiça Toscana > Catupiry 4 Queijos gratinado",
        "Gyros Vegetariano de Berinjela > Catupiry 4 Queijos gratinado",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Catupiry 4 Queijos gratinado"
      ],
      "notes": "Base para gratinados"
    },
    {
      "code": "GYR-INS-CEBOLA",
      "erp_product_id": null,
      "name": "Cebola",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 5.978261,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Hortifruti",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 5.5,
      "waste_pct": 8,
      "pwa_source_codes": [
        "ING_CEBOLA"
      ],
      "pwa_source_ids": [
        "ing_cebola"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Vinagrete da casa",
        "Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa"
      ],
      "notes": "Para vinagrete"
    },
    {
      "code": "GYR-INS-CEBOLA-ROXA",
      "erp_product_id": null,
      "name": "Cebola roxa",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 15,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Hortifruti / referência web",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 13.5,
      "waste_pct": 10,
      "pwa_source_codes": [
        "ING_CEBOLA_ROXA"
      ],
      "pwa_source_ids": [
        "ing_cebola_roxa"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Estimativa de mercado para o antipasto de berinjela."
    },
    {
      "code": "GYR-INS-CHEDDAR",
      "erp_product_id": null,
      "name": "Cheddar",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 27.272727,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Laticínio",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 27,
      "waste_pct": 1,
      "pwa_source_codes": [
        "ING_CHEDDAR"
      ],
      "pwa_source_ids": [
        "ing_cheddar"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Cheddar gratinado",
        "Beta Gyros de Frango > Cheddar gratinado",
        "Gamma Gyros de Linguiça Toscana > Cheddar gratinado",
        "Gyros Vegetariano de Berinjela > Cheddar gratinado",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Cheddar gratinado",
        "Combo Essencial > Beta Gyros de Frango > Beta Gyros de Frango > Cheddar gratinado"
      ],
      "notes": "Molho/creme"
    },
    {
      "code": "GYR-INS-CHEIRO-VERDE",
      "erp_product_id": null,
      "name": "Cheiro-verde",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 22.222222,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Hortifruti",
      "purchase_qty": 300,
      "purchase_unit": "g",
      "purchase_cost": 6,
      "waste_pct": 10,
      "pwa_source_codes": [
        "ING_CHEIRO_VERDE"
      ],
      "pwa_source_ids": [
        "ing_cheiro_verde"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Vinagrete da casa",
        "Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa"
      ],
      "notes": "Para vinagrete e maionese"
    },
    {
      "code": "GYR-INS-CHIMICHURRI",
      "erp_product_id": null,
      "name": "Chimichurri",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 38.84,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Armazém São Vito",
      "purchase_qty": 500,
      "purchase_unit": "g",
      "purchase_cost": 19.42,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_CHIMICHURRI"
      ],
      "pwa_source_ids": [
        "ing_chimichurri"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Combo Completo > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Combo Completo > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Combo Família Gyros > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Batata Frita Grande 400g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri"
      ],
      "notes": "Compra inicial informada pelo projeto: pacote com 500g"
    },
    {
      "code": "GYR-INS-COCA-COLA-2L",
      "erp_product_id": null,
      "name": "Coca-Cola 2L",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 10.953333,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 6,
      "purchase_unit": "un",
      "purchase_cost": 65.72,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_COCA_2L"
      ],
      "pwa_source_ids": [
        "ing_coca_2l"
      ],
      "used_in": [
        "Combo Família Gyros > Coca-Cola Original 2L",
        "Coca-Cola Original 2L"
      ],
      "notes": "Pacote com 6 unidades"
    },
    {
      "code": "GYR-INS-DEL-VALLE-UVA-290ML",
      "erp_product_id": null,
      "name": "Del Valle Uva 290ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 3.668333,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Bebidas",
      "purchase_qty": 6,
      "purchase_unit": "un",
      "purchase_cost": 22.01,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_DELVALLE_UVA_290"
      ],
      "pwa_source_ids": [
        "ing_delvalle_uva_290"
      ],
      "used_in": [
        "Suco Del Valle Uva 290ml"
      ],
      "notes": "Pacote com 6 unidades"
    },
    {
      "code": "GYR-INS-FAROFA-PRONTA",
      "erp_product_id": null,
      "name": "Farofa pronta",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 17.98,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Mercearia",
      "purchase_qty": 500,
      "purchase_unit": "g",
      "purchase_cost": 8.99,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_FAROFA_PRONTA"
      ],
      "pwa_source_ids": [
        "ing_farofa_pronta"
      ],
      "used_in": [
        "Executivo de Fraldinha > Prato Alpha base",
        "Executivo de Frango > Prato Beta base",
        "Executivo de Linguiça Toscana > Prato Gamma base",
        "Executivo Vegetariano de Berinjela > Prato Beta base"
      ],
      "notes": "Referencia de mercado: farofa temperada 500g; revisar depois."
    },
    {
      "code": "GYR-INS-FEIJAO-COZIDO",
      "erp_product_id": null,
      "name": "Feijão cozido",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 12.244898,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Cozinha",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 12,
      "waste_pct": 2,
      "pwa_source_codes": [
        "ING_FEIJAO"
      ],
      "pwa_source_ids": [
        "ing_feijao"
      ],
      "used_in": [
        "Executivo de Fraldinha > Prato Alpha base",
        "Executivo de Frango > Prato Beta base",
        "Executivo de Linguiça Toscana > Prato Gamma base",
        "Executivo Vegetariano de Berinjela > Prato Beta base"
      ],
      "notes": "Custo por kg pronto"
    },
    {
      "code": "GYR-INS-CARNE-FRALDINHA",
      "erp_product_id": 1881,
      "name": "Fraldinha preparada",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 46.728261,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Açougue",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 42.99,
      "waste_pct": 8,
      "pwa_source_codes": [
        "ING_FRALDINHA"
      ],
      "pwa_source_ids": [
        "ing_fraldinha"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha",
        "Alpha Gyros de Fraldinha > Fraldinha extra",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha extra",
        "Combo Clássico > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha",
        "Combo Clássico > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Fraldinha extra"
      ],
      "notes": "Peso já cozido/preparado. Atualizado para R$ 42,99/kg."
    },
    {
      "code": "GYR-PREP-FRANGO-PEITO-SOBRECOXA",
      "erp_product_id": null,
      "name": "Frango preparado",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 21.042105,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Distribuidor",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 19.99,
      "waste_pct": 5,
      "pwa_source_codes": [
        "ING_FRANGO"
      ],
      "pwa_source_ids": [
        "ing_frango"
      ],
      "used_in": [
        "Beta Gyros de Frango",
        "Beta Gyros de Frango > Frango extra",
        "Combo Essencial > Base interna — Lanche assinatura médio",
        "Combo Essencial > Beta Gyros de Frango > Beta Gyros de Frango",
        "Combo Essencial > Beta Gyros de Frango > Beta Gyros de Frango > Frango extra",
        "Combo Clássico > Base interna — Lanche assinatura médio"
      ],
      "notes": "Peito e sobrecoxa. Atualizado para R$ 19,99/kg."
    },
    {
      "code": "GYR-INS-FUMACA-EM-PO",
      "erp_product_id": null,
      "name": "Fumaca em po",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 19.43,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Armazém São Vito",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 19.43,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_FUMACA_PO"
      ],
      "pwa_source_ids": [
        "ing_fumaca_po"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada",
        "Combo Completo > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada",
        "Combo Completo > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada",
        "Combo Família Gyros > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada",
        "Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada",
        "Batata Frita Grande 400g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada"
      ],
      "notes": "Compra inicial Zona Cerealista."
    },
    {
      "code": "GYR-INS-GARRAFA-450ML",
      "erp_product_id": null,
      "name": "Garrafa 450ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 4.3,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Bebidas",
      "purchase_qty": 12,
      "purchase_unit": "un",
      "purchase_cost": 51.6,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_GARRAFA_450"
      ],
      "pwa_source_ids": [
        "ing_garrafa_450"
      ],
      "used_in": [
        "Chá Ice Tea Leão Limão 450ml",
        "Chá Ice Tea Leão Pêssego 450ml"
      ],
      "notes": "Ice Tea 450ml nos sabores limao e pessego"
    },
    {
      "code": "GYR-INS-H2O-LIMAO-500ML",
      "erp_product_id": null,
      "name": "H2O limão 500ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 4.675,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 12,
      "purchase_unit": "un",
      "purchase_cost": 56.1,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_H2O_500"
      ],
      "pwa_source_ids": [
        "ing_h2o_500"
      ],
      "used_in": [
        "H2OH! 500ml"
      ],
      "notes": "Pacote com 12 unidades"
    },
    {
      "code": "GYR-INS-HEINEKEN-LONG-NECK-330ML",
      "erp_product_id": null,
      "name": "Heineken long neck 330ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 6.916667,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 24,
      "purchase_unit": "un",
      "purchase_cost": 166,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_CERVEJA_HEINEKEN_330"
      ],
      "pwa_source_ids": [
        "ing_cerveja_heineken_330"
      ],
      "used_in": [
        "Heineken 330ml"
      ],
      "notes": "Pacote com 24 unidades"
    },
    {
      "code": "GYR-INS-KETCHUP",
      "erp_product_id": null,
      "name": "Ketchup",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 19.98,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Mercearia",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 19.98,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_KETCHUP"
      ],
      "pwa_source_ids": [
        "ing_ketchup"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Completo > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Completo > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Família Gyros > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Batata Frita Grande 400g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa"
      ],
      "notes": "Referencia de mercado: ketchup 1kg; revisar depois."
    },
    {
      "code": "GYR-INS-LEMON-PEPPER",
      "erp_product_id": null,
      "name": "Lemon pepper",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 30,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Zona Cerealista",
      "purchase_qty": 500,
      "purchase_unit": "g",
      "purchase_cost": 15,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_LEMON_PEPPER"
      ],
      "pwa_source_ids": [
        "ing_lemon_pepper"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Lemon Pepper",
        "Combo Clássico > Lemon Pepper",
        "Combo Completo > Batata Frita Média 200g > Lemon Pepper",
        "Combo Completo > Lemon Pepper",
        "Combo Família Gyros > Batata Frita Média 200g > Lemon Pepper",
        "Combo Família Gyros > Lemon Pepper"
      ],
      "notes": "Compra inicial Zona Cerealista."
    },
    {
      "code": "GYR-INS-LIMAO-SUCO",
      "erp_product_id": null,
      "name": "Limao (suco)",
      "kind": "ingredient",
      "canonical_unit": "L",
      "unit_cost": 11.111111,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Hortifruti",
      "purchase_qty": 1000,
      "purchase_unit": "ml",
      "purchase_cost": 10,
      "waste_pct": 10,
      "pwa_source_codes": [
        "ING_LIMAO"
      ],
      "pwa_source_ids": [
        "ing_limao"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Vinagrete da casa",
        "Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa"
      ],
      "notes": "Base em ml para receitas e molhos"
    },
    {
      "code": "GYR-INS-LIMONETO-SEM-ACUCAR-500ML",
      "erp_product_id": null,
      "name": "Limoneto sem açúcar 500ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 4.675,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 12,
      "purchase_unit": "un",
      "purchase_cost": 56.1,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_LIMONETO_500"
      ],
      "pwa_source_ids": [
        "ing_limoneto_500"
      ],
      "used_in": [
        "H2OH! Zero 500ml"
      ],
      "notes": "Pacote com 12 unidades"
    },
    {
      "code": "GYR-INS-LINGUICA-TOSCANA-AURORA",
      "erp_product_id": 1380,
      "name": "Linguiça toscana preparada",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 23.297872,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Açougue",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 21.9,
      "waste_pct": 6,
      "pwa_source_codes": [
        "ING_LINGUICA"
      ],
      "pwa_source_ids": [
        "ing_linguica"
      ],
      "used_in": [
        "Gamma Gyros de Linguiça Toscana",
        "Gamma Gyros de Linguiça Toscana > Linguiça Toscana extra",
        "Combo Essencial > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana",
        "Combo Essencial > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça Toscana extra",
        "Combo Clássico > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana",
        "Combo Clássico > Gamma Gyros de Linguiça Toscana > Gamma Gyros de Linguiça Toscana > Linguiça Toscana extra"
      ],
      "notes": "Já pronta para montagem. Atualizado para R$ 19,99/kg."
    },
    {
      "code": "GYR-INS-LOURO",
      "erp_product_id": null,
      "name": "Louro",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 274.5,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Mercearia / referência web",
      "purchase_qty": 20,
      "purchase_unit": "g",
      "purchase_cost": 5.49,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_LOURO"
      ],
      "pwa_source_ids": [
        "ing_louro"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Folhas secas."
    },
    {
      "code": "GYR-INS-MANJERICAO",
      "erp_product_id": null,
      "name": "Manjericão",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 277.222222,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Hortifruti / referência web",
      "purchase_qty": 20,
      "purchase_unit": "g",
      "purchase_cost": 4.99,
      "waste_pct": 10,
      "pwa_source_codes": [
        "ING_MANJERICAO"
      ],
      "pwa_source_ids": [
        "ing_manjericao"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Maço pequeno."
    },
    {
      "code": "GYR-INS-MANTEIGA-COM-SAL",
      "erp_product_id": null,
      "name": "Manteiga com sal",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 65,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Mercado",
      "purchase_qty": 500,
      "purchase_unit": "g",
      "purchase_cost": 32.5,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_MANTEIGA"
      ],
      "pwa_source_ids": [
        "ing_manteiga"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Manteiga com alho",
        "Beta Gyros de Frango > Manteiga com alho",
        "Gamma Gyros de Linguiça Toscana > Manteiga com alho",
        "Gyros Vegetariano de Berinjela > Manteiga com alho",
        "Combo Essencial > Base interna — Lanche assinatura médio > Manteiga com alho",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Manteiga com alho"
      ],
      "notes": "Referencia de mercado: manteiga com sal 500g; revisar depois."
    },
    {
      "code": "GYR-INS-MEL",
      "erp_product_id": null,
      "name": "Mel",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 40,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Mercearia",
      "purchase_qty": 500,
      "purchase_unit": "g",
      "purchase_cost": 20,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_MEL"
      ],
      "pwa_source_ids": [
        "ing_mel"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Completo > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Completo > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Família Gyros > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Batata Frita Grande 400g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa"
      ],
      "notes": "Valor informado pelo usuario."
    },
    {
      "code": "GYR-INS-MINI-CHURROS-DOCE-LEITE",
      "erp_product_id": null,
      "name": "Mini churros congelado (doce de leite)",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 30.510204,
      "source_kind": "purchase_manual",
      "active": true,
      "supplier": "Meus Congelados",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 29.9,
      "waste_pct": 2,
      "pwa_source_codes": [
        "ING_MASSA_CHURROS"
      ],
      "pwa_source_ids": [
        "ing_massa_churros"
      ],
      "used_in": [
        "Combo Completo > Mini Churros 6 un com Doce de Leite > Mini Churros 6 un com Doce de Leite",
        "Mini Churros 6 un com Doce de Leite"
      ],
      "notes": "Mini churros congelado ja recheado com doce de leite. Pacote de 1kg. Unidade aproximada de 20g."
    },
    {
      "code": "GYR-INS-MOLHO-BARBECUE-PRONTO",
      "erp_product_id": null,
      "name": "Molho barbecue pronto",
      "kind": "ingredient",
      "canonical_unit": "L",
      "unit_cost": 13.9,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 2000,
      "purchase_unit": "ml",
      "purchase_cost": 27.8,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_BBQ"
      ],
      "pwa_source_ids": [
        "ing_bbq"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Completo > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Completo > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Combo Família Gyros > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa",
        "Batata Frita Grande 400g > Barbecue 60ml > Barbecue 60ml > Barbecue da casa"
      ],
      "notes": "Base pronta usada na receita do barbecue da casa."
    },
    {
      "code": "GYR-INS-MOSTARDA-AMARELA",
      "erp_product_id": null,
      "name": "Mostarda amarela",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 64.95,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Mercado",
      "purchase_qty": 200,
      "purchase_unit": "g",
      "purchase_cost": 12.99,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_MOSTARDA_AMARELA"
      ],
      "pwa_source_ids": [
        "ing_mostarda_amarela"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Combo Clássico > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Combo Clássico > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada",
        "Combo Completo > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Combo Completo > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml > Maionese Chimichurri",
        "Combo Completo > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml > Maionese Defumada"
      ],
      "notes": "Referencia de mercado: mostarda amarela squeeze 200g; revisar depois."
    },
    {
      "code": "GYR-INS-QUEIJO-MUCARELA",
      "erp_product_id": null,
      "name": "Muçarela",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 36.734694,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Laticínio",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 36,
      "waste_pct": 2,
      "pwa_source_codes": [
        "ING_MUCARELA"
      ],
      "pwa_source_ids": [
        "ing_mucarela"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha",
        "Alpha Gyros de Fraldinha > Muçarela gratinada",
        "Beta Gyros de Frango > Muçarela gratinada",
        "Gamma Gyros de Linguiça Toscana > Muçarela gratinada",
        "Gyros Vegetariano de Berinjela",
        "Gyros Vegetariano de Berinjela > Muçarela gratinada"
      ],
      "notes": "Fatiada ou ralada"
    },
    {
      "code": "GYR-INS-OREGANO",
      "erp_product_id": null,
      "name": "Orégano",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 249.5,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Mercearia / referência web",
      "purchase_qty": 20,
      "purchase_unit": "g",
      "purchase_cost": 4.99,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_OREGANO"
      ],
      "pwa_source_ids": [
        "ing_oregano"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Tempero seco."
    },
    {
      "code": "GYR-INS-PAO-FRANCES-PARMESAO",
      "erp_product_id": 1882,
      "name": "Pão Francês com Parmesão",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 1.8966,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Padaria Versailles",
      "purchase_qty": 1,
      "purchase_unit": "un",
      "purchase_cost": 1.8966,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_PAO_PARMESAO_PRONTO"
      ],
      "pwa_source_ids": [
        "ing_pao_parmesao_pronto"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Pão Francês com Parmesão",
        "Beta Gyros de Frango > Pão Francês com Parmesão",
        "Gamma Gyros de Linguiça Toscana > Pão Francês com Parmesão",
        "Gyros Vegetariano de Berinjela > Pão Francês com Parmesão",
        "Combo Essencial > Base interna — Lanche assinatura médio > Pão Francês com Parmesão",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Pão Francês com Parmesão"
      ],
      "notes": "Pão francês com parmesão pronto, cerca de 90g, comprado direto pronto da Padaria Versailles."
    },
    {
      "code": "GYR-INS-PAPRICA",
      "erp_product_id": null,
      "name": "Paprica doce",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 20,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Zona Cerealista",
      "purchase_qty": 500,
      "purchase_unit": "g",
      "purchase_cost": 10,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_PAPRICA_DOCE"
      ],
      "pwa_source_ids": [
        "ing_paprica_doce"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Páprica",
        "Combo Clássico > Páprica",
        "Combo Completo > Batata Frita Média 200g > Páprica",
        "Combo Completo > Páprica",
        "Combo Família Gyros > Batata Frita Média 200g > Páprica",
        "Combo Família Gyros > Páprica"
      ],
      "notes": "Compra inicial Zona Cerealista."
    },
    {
      "code": "GYR-INS-PIMENTA-CALABRESA",
      "erp_product_id": null,
      "name": "Pimenta calabresa",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 139.8,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Mercearia / referência web",
      "purchase_qty": 50,
      "purchase_unit": "g",
      "purchase_cost": 6.99,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_PIMENTA_CALABRESA"
      ],
      "pwa_source_ids": [
        "ing_pimenta_calabresa"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Tempero seco."
    },
    {
      "code": "GYR-INS-PIMENTA-DO-REINO",
      "erp_product_id": null,
      "name": "Pimenta-do-reino",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 69.68,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Armazém São Vito",
      "purchase_qty": 500,
      "purchase_unit": "g",
      "purchase_cost": 34.84,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_PIMENTA_REINO"
      ],
      "pwa_source_ids": [
        "ing_pimenta_reino"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Combo Completo > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Combo Completo > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Combo Família Gyros > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde",
        "Batata Frita Grande 400g > Maionese Verde 60ml > Maionese Verde 60ml > Maionese Verde"
      ],
      "notes": "Pimenta-do-reino em grão, pacote de 500g, documentada em 25/02/2026."
    },
    {
      "code": "GYR-INS-PIMENTAO-AMARELO",
      "erp_product_id": null,
      "name": "Pimentão amarelo",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 34.694118,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Hortifruti / referência web",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 29.49,
      "waste_pct": 15,
      "pwa_source_codes": [
        "ING_PIMENTAO_AMARELO"
      ],
      "pwa_source_ids": [
        "ing_pimentao_amarelo"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Estimativa de mercado para o antipasto de berinjela."
    },
    {
      "code": "GYR-INS-PIMENTAO-VERMELHO",
      "erp_product_id": null,
      "name": "Pimentão vermelho",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 34.694118,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Hortifruti / referência web",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 29.49,
      "waste_pct": 15,
      "pwa_source_codes": [
        "ING_PIMENTAO_VERMELHO"
      ],
      "pwa_source_ids": [
        "ing_pimentao_vermelho"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Estimativa de mercado para o antipasto de berinjela."
    },
    {
      "code": "GYR-INS-REFRIGERANTE-LATA-350ML",
      "erp_product_id": null,
      "name": "Refrigerante lata 350ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 3.474167,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Bebidas",
      "purchase_qty": 72,
      "purchase_unit": "un",
      "purchase_cost": 250.14,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_REFRI_350"
      ],
      "pwa_source_ids": [
        "ing_refri_350"
      ],
      "used_in": [
        "Combo Essencial",
        "Combo Essencial > Coca-Cola Lata 350ml > Coca-Cola Lata 350ml",
        "Combo Essencial > Coca-Cola Zero Lata 350ml > Coca-Cola Zero Lata 350ml",
        "Combo Essencial > Guaraná Antarctica Lata 350ml > Guaraná Antarctica Lata 350ml",
        "Combo Essencial > Fanta Laranja Lata 350ml > Fanta Laranja Lata 350ml",
        "Combo Clássico"
      ],
      "notes": "Media de Coca, Coca Zero, Fanta e Guarana em lata 350ml"
    },
    {
      "code": "GYR-INS-SACHES-MIX",
      "erp_product_id": null,
      "name": "Saches (ketchup/maionese/mostarda/pimenta)",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 0.120681,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "purchase_qty": 866,
      "purchase_unit": "un",
      "purchase_cost": 104.51,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_SACHES_MIX"
      ],
      "pwa_source_ids": [
        "ing_saches_mix"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Ketchup (1 sachê)",
        "Alpha Gyros de Fraldinha > Maionese (1 sachê)",
        "Alpha Gyros de Fraldinha > Mostarda (1 sachê)",
        "Alpha Gyros de Fraldinha > Pacote extra com 5 sachês > Pacote extra com 5 sachês",
        "Beta Gyros de Frango > Ketchup (1 sachê)",
        "Beta Gyros de Frango > Maionese (1 sachê)"
      ],
      "notes": "Mix medio comprado; revisar conforme a composicao real."
    },
    {
      "code": "GYR-INS-SAL",
      "erp_product_id": null,
      "name": "Sal",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 8,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Secos",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 8,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_TEMPERO"
      ],
      "pwa_source_ids": [
        "ing_tempero"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Vinagrete da casa",
        "Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa"
      ],
      "notes": "Sal base para batata e cozinha; estimativa simples."
    },
    {
      "code": "GYR-INS-SCHWEPPES-CITRUS-350ML",
      "erp_product_id": null,
      "name": "Schweppes Citrus 350ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 3.865,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Bebidas",
      "purchase_qty": 6,
      "purchase_unit": "un",
      "purchase_cost": 23.19,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_SCHWEPPES_350"
      ],
      "pwa_source_ids": [
        "ing_schweppes_350"
      ],
      "used_in": [
        "Combo Essencial > Schweppes Citrus 350ml > Schweppes Citrus 350ml",
        "Combo Clássico > Schweppes Citrus 350ml > Schweppes Citrus 350ml",
        "Combo Completo > Schweppes Citrus 350ml > Schweppes Citrus 350ml",
        "Schweppes Citrus 350ml"
      ],
      "notes": "Pacote com 6 unidades"
    },
    {
      "code": "GYR-INS-SHOYU",
      "erp_product_id": null,
      "name": "Shoyu",
      "kind": "ingredient",
      "canonical_unit": "L",
      "unit_cost": 29.98,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Mercearia / referência web",
      "purchase_qty": 500,
      "purchase_unit": "ml",
      "purchase_cost": 14.99,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_SHOYU"
      ],
      "pwa_source_ids": [
        "ing_shoyu"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Estimativa para molho shoyu tradicional 500ml."
    },
    {
      "code": "GYR-INS-SPRITE-350ML",
      "erp_product_id": null,
      "name": "Sprite 350ml",
      "kind": "ingredient",
      "canonical_unit": "UN",
      "unit_cost": 3.66,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Bebidas",
      "purchase_qty": 6,
      "purchase_unit": "un",
      "purchase_cost": 21.96,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_SPRITE_350"
      ],
      "pwa_source_ids": [
        "ing_sprite_350"
      ],
      "used_in": [
        "Combo Essencial > Sprite 350ml > Sprite 350ml",
        "Combo Clássico > Sprite 350ml > Sprite 350ml",
        "Combo Completo > Sprite 350ml > Sprite 350ml",
        "Sprite 350ml"
      ],
      "notes": "Pacote com 6 unidades"
    },
    {
      "code": "GYR-INS-TOMATE",
      "erp_product_id": null,
      "name": "Tomate",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 9.574468,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Hortifruti",
      "purchase_qty": 1000,
      "purchase_unit": "g",
      "purchase_cost": 9,
      "waste_pct": 6,
      "pwa_source_codes": [
        "ING_TOMATE"
      ],
      "pwa_source_ids": [
        "ing_tomate"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Vinagrete da casa",
        "Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa",
        "Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa extra > Vinagrete da Casa 60ml > Vinagrete da casa"
      ],
      "notes": "Para vinagrete"
    },
    {
      "code": "GYR-INS-TOMATE-SECO",
      "erp_product_id": null,
      "name": "Tomate seco",
      "kind": "ingredient",
      "canonical_unit": "KG",
      "unit_cost": 99.8,
      "source_kind": "purchase_estimated",
      "active": true,
      "supplier": "Mercearia / referência web",
      "purchase_qty": 500,
      "purchase_unit": "g",
      "purchase_cost": 49.9,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_TOMATE_SECO"
      ],
      "pwa_source_ids": [
        "ing_tomate_seco"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Estimativa intermediária para tomate seco; revisar depois."
    },
    {
      "code": "GYR-INS-VINAGRE",
      "erp_product_id": null,
      "name": "Vinagre",
      "kind": "ingredient",
      "canonical_unit": "L",
      "unit_cost": 5.32,
      "source_kind": "purchase_documented",
      "active": true,
      "supplier": "Mercearia / referência web",
      "purchase_qty": 750,
      "purchase_unit": "ml",
      "purchase_cost": 3.99,
      "waste_pct": 0,
      "pwa_source_codes": [
        "ING_VINAGRE"
      ],
      "pwa_source_ids": [
        "ing_vinagre"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra > Antepasto de berinjela"
      ],
      "notes": "Usado só para o descanso da berinjela."
    },
    {
      "code": "GYR-EMB-BANDEJA-ALUMINIO-M120-500ML",
      "erp_product_id": null,
      "name": "Bandeja aluminio M120 500ml",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.669,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 100,
      "purchase_unit": "UN",
      "purchase_cost": 66.9,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_BANDEJA_M120"
      ],
      "pwa_source_ids": [
        "pkg_bandeja_m120"
      ],
      "used_in": [
        "Proteína Gratinada Grande",
        "Batata Gratinada Grande 400g"
      ],
      "notes": "Porcao de 500ml para 400g de batata ou proteina gratinada."
    },
    {
      "code": "GYR-EMB-BANDEJA-ALUMINIO-M90-220ML",
      "erp_product_id": null,
      "name": "Bandeja aluminio M90 220ml",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.469,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 100,
      "purchase_unit": "UN",
      "purchase_cost": 46.9,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_BANDEJA_M90"
      ],
      "pwa_source_ids": [
        "pkg_bandeja_m90"
      ],
      "used_in": [
        "Proteína Gratinada Média",
        "Batata Gratinada Média 200g"
      ],
      "notes": "Porcao de 220ml para 200g de batata ou proteina gratinada."
    },
    {
      "code": "GYR-EMB-CAIXA-COMBO-FAMILIA",
      "erp_product_id": null,
      "name": "Caixa combo familia",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 1.38,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "",
      "purchase_qty": 50,
      "purchase_unit": "UN",
      "purchase_cost": 69,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_COMBO_FAMILIA"
      ],
      "pwa_source_ids": [
        "pkg_combo_familia"
      ],
      "used_in": [
        "Combo Família Gyros"
      ],
      "notes": "Sem alteracao nesta rodada."
    },
    {
      "code": "GYR-EMB-CAIXA-MARMITA-BRANCA",
      "erp_product_id": null,
      "name": "Caixa marmita branca",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 2.8406,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "",
      "purchase_qty": 150,
      "purchase_unit": "UN",
      "purchase_cost": 426.09,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_ALMOCO"
      ],
      "pwa_source_ids": [
        "pkg_almoco"
      ],
      "used_in": [
        "Executivo de Fraldinha",
        "Executivo de Frango",
        "Executivo de Linguiça Toscana",
        "Executivo Vegetariano de Berinjela"
      ],
      "notes": "Estoque atual do Gyros; custo historico por unidade R$ 2,84."
    },
    {
      "code": "GYR-EMB-GUARDANAPO-SACHE-28X20-5-LISO",
      "erp_product_id": null,
      "name": "Guardanapo sache 28x20,5 liso",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.154,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 250,
      "purchase_unit": "UN",
      "purchase_cost": 38.5,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_GUARDANAPO"
      ],
      "pwa_source_ids": [
        "pkg_guardanapo"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha",
        "Beta Gyros de Frango",
        "Gamma Gyros de Linguiça Toscana",
        "Gyros Vegetariano de Berinjela",
        "Combo Essencial > Base interna — Lanche assinatura médio",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha"
      ],
      "notes": "Usado no almoco; lanches podem migrar depois se desejado."
    },
    {
      "code": "GYR-EMB-KIT-TALHERES",
      "erp_product_id": null,
      "name": "Kit talheres",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.49,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 50,
      "purchase_unit": "UN",
      "purchase_cost": 24.5,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_TALHER_KIT"
      ],
      "pwa_source_ids": [
        "pkg_talher_kit"
      ],
      "used_in": [
        "Executivo de Fraldinha",
        "Executivo de Frango",
        "Executivo de Linguiça Toscana",
        "Executivo Vegetariano de Berinjela"
      ],
      "notes": "Para pratos de almoco do Gyros."
    },
    {
      "code": "GYR-EMB-PAPEL-ACOPLADO-MONO-FRIOS-30X38",
      "erp_product_id": null,
      "name": "Papel acoplado mono frios 30x38",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.0675,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 400,
      "purchase_unit": "UN",
      "purchase_cost": 27,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_LANCHE"
      ],
      "pwa_source_ids": [
        "pkg_lanche"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha",
        "Beta Gyros de Frango",
        "Gamma Gyros de Linguiça Toscana",
        "Gyros Vegetariano de Berinjela",
        "Combo Essencial > Base interna — Lanche assinatura médio",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha"
      ],
      "notes": "Involucro de cada lanche do Gyros."
    },
    {
      "code": "GYR-EMB-POTE-60ML-BRANCO-G697",
      "erp_product_id": null,
      "name": "Pote 60ml branco G697",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.236,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 25,
      "purchase_unit": "UN",
      "purchase_cost": 5.9,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_POTINHO_60"
      ],
      "pwa_source_ids": [
        "pkg_potinho_60"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml",
        "Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa extra > Vinagrete da Casa 60ml",
        "Gyros Vegetariano de Berinjela > Vinagrete da casa extra > Vinagrete da Casa 60ml",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml",
        "Combo Essencial > Beta Gyros de Frango > Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml"
      ],
      "notes": "Assumido pacote com 25 unidades; revisar quantidade real do fornecedor."
    },
    {
      "code": "GYR-EMB-POTE-REDONDO-145ML-COM-SOBRETAMPA",
      "erp_product_id": null,
      "name": "Pote redondo 145ml com sobretampa",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.341667,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 24,
      "purchase_unit": "UN",
      "purchase_cost": 8.2,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_POTINHO_FEIJAO"
      ],
      "pwa_source_ids": [
        "pkg_potinho_feijao"
      ],
      "used_in": [
        "Executivo de Fraldinha",
        "Executivo de Frango",
        "Executivo de Linguiça Toscana",
        "Executivo Vegetariano de Berinjela"
      ],
      "notes": "Para feijao do almoco."
    },
    {
      "code": "GYR-EMB-SACO-DE-PAPEL-HAMBURGAO-PLASTIFICADO",
      "erp_product_id": null,
      "name": "Saco de papel hamburgao plastificado",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.0595,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 100,
      "purchase_unit": "UN",
      "purchase_cost": 5.95,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_BAT_P",
        "PKG_SOBREMESA"
      ],
      "pwa_source_ids": [
        "pkg_bat_p",
        "pkg_sobremesa"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g",
        "Combo Completo > Batata Frita Média 200g",
        "Combo Família Gyros > Batata Frita Média 200g",
        "Batata Frita Média 200g",
        "Combo Completo > Mini Churros 6 un com Doce de Leite > Mini Churros 6 un com Doce de Leite",
        "Mini Churros 6 un com Doce de Leite"
      ],
      "notes": "Batata M (200g) e churros."
    },
    {
      "code": "GYR-EMB-SACO-DE-PAPEL-MONO-1-2-KG-PLASTIFICADO",
      "erp_product_id": null,
      "name": "Saco de papel mono 1/2 kg plastificado",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.075,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Bom Clima Embalagens",
      "purchase_qty": 100,
      "purchase_unit": "UN",
      "purchase_cost": 7.5,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_BAT_G"
      ],
      "pwa_source_ids": [
        "pkg_bat_g"
      ],
      "used_in": [
        "Batata Frita Grande 400g"
      ],
      "notes": "Batata G (400g)."
    },
    {
      "code": "GYR-EMB-SACO-LISO-BRANCO-MEDIO",
      "erp_product_id": null,
      "name": "Saco liso branco medio",
      "kind": "package",
      "canonical_unit": "UN",
      "unit_cost": 0.8375,
      "source_kind": "package_purchase_documented",
      "active": true,
      "supplier": "Samppel",
      "purchase_qty": 400,
      "purchase_unit": "UN",
      "purchase_cost": 335,
      "waste_pct": 0,
      "price_impact": "markup",
      "pwa_source_codes": [
        "PKG_SACOLA_DELIVERY"
      ],
      "pwa_source_ids": [
        "pkg_sacola_delivery"
      ],
      "used_in": [
        "Combo Essencial",
        "Combo Clássico",
        "Combo Completo",
        "Combo Família Gyros"
      ],
      "notes": "Samppael, incluindo frete rateado."
    },
    {
      "code": "GYR-PREP-ANTEPASTO-BERINJELA",
      "erp_product_id": null,
      "name": "Antepasto de berinjela",
      "kind": "prepared_feedstock",
      "canonical_unit": "KG",
      "unit_cost": 61.631389,
      "source_kind": "pwa_recipe",
      "active": true,
      "supplier": "PWA / cozinha",
      "yield_qty": 2500,
      "yield_unit": "g",
      "canonical_yield_qty": 2.5,
      "batch_cost": 154.078472,
      "density_g_per_ml": null,
      "pwa_source_codes": [
        "REC_BERINJELA_ANTEPASTO"
      ],
      "pwa_source_ids": [
        "rec_berinjela_antepasto"
      ],
      "used_in": [
        "Gyros Vegetariano de Berinjela",
        "Gyros Vegetariano de Berinjela > Antepasto de berinjela extra",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela",
        "Combo Essencial > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela",
        "Combo Clássico > Gyros Vegetariano de Berinjela > Gyros Vegetariano de Berinjela > Antepasto de berinjela extra"
      ],
      "notes": "Receita baseada nas anotações: berinjela, pimentões, cebola roxa, tomate seco, shoyu, manjericão, louro, orégano, pimenta calabresa, azeite e vinagre de descanso."
    },
    {
      "code": "GYR-PREP-BARBECUE-BASE",
      "erp_product_id": null,
      "name": "Barbecue da casa",
      "kind": "prepared_feedstock",
      "canonical_unit": "KG",
      "unit_cost": 17.073016,
      "source_kind": "pwa_recipe",
      "active": true,
      "supplier": "PWA / cozinha",
      "yield_qty": 3150,
      "yield_unit": "g",
      "canonical_yield_qty": 3.15,
      "batch_cost": 53.78,
      "density_g_per_ml": null,
      "pwa_source_codes": [
        "REC_BARBECUE_CASA"
      ],
      "pwa_source_ids": [
        "rec_barbecue_casa"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml",
        "Combo Completo > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml",
        "Combo Completo > Barbecue 60ml > Barbecue 60ml",
        "Combo Família Gyros > Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml",
        "Batata Frita Média 200g > Barbecue 60ml > Barbecue 60ml",
        "Batata Frita Grande 400g > Barbecue 60ml > Barbecue 60ml"
      ],
      "notes": "Receita: 2kg de molho barbecue pronto + 1kg de ketchup + 150g de mel."
    },
    {
      "code": "GYR-PREP-MAIONESE-CHIMICHURRI",
      "erp_product_id": null,
      "name": "Maionese Chimichurri",
      "kind": "prepared_feedstock",
      "canonical_unit": "KG",
      "unit_cost": 11.605477,
      "source_kind": "pwa_recipe",
      "active": true,
      "supplier": "PWA / cozinha",
      "yield_qty": 440,
      "yield_unit": "g",
      "canonical_yield_qty": 0.44,
      "batch_cost": 5.10641,
      "density_g_per_ml": null,
      "pwa_source_codes": [
        "REC_MAIONESE_CHIMICHURRI"
      ],
      "pwa_source_ids": [
        "rec_maionese_chimichurri"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml",
        "Combo Completo > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml",
        "Combo Completo > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml",
        "Combo Família Gyros > Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml",
        "Batata Frita Média 200g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml",
        "Batata Frita Grande 400g > Maionese de Chimichurri 60ml > Maionese de Chimichurri 60ml"
      ],
      "notes": "Mesmo padrao da Grill: 400g de base + chimichurri + mostarda amarela."
    },
    {
      "code": "GYR-PREP-MAIONESE-CASA",
      "erp_product_id": null,
      "name": "Maionese da Casa (Junior Grill)",
      "kind": "prepared_feedstock",
      "canonical_unit": "KG",
      "unit_cost": 35.818182,
      "source_kind": "purchase_ready_prepared_documented",
      "active": true,
      "supplier": "PMG Comércio de Frios e Laticínios",
      "yield_qty": 1100,
      "yield_unit": "g",
      "canonical_yield_qty": 1.1,
      "batch_cost": 39.4,
      "density_g_per_ml": 1,
      "pwa_source_codes": [
        "REC_MAIONESE_CASA_JUNIOR",
        "ING_MAIONESE_JUNIOR_GRILL"
      ],
      "pwa_source_ids": [
        "rec_maionese",
        "ing_maionese_junior_grill"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha",
        "Beta Gyros de Frango",
        "Gamma Gyros de Linguiça Toscana",
        "Gyros Vegetariano de Berinjela",
        "Combo Essencial > Base interna — Lanche assinatura médio",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha"
      ],
      "notes": "Maionese da casa comprada pronta: Junior Grill 1,1kg. Usada nos lanches e no molho da casa."
    },
    {
      "code": "GYR-PREP-MAIONESE-DEFUMADA",
      "erp_product_id": null,
      "name": "Maionese Defumada",
      "kind": "prepared_feedstock",
      "canonical_unit": "KG",
      "unit_cost": 10.54675,
      "source_kind": "pwa_recipe",
      "active": true,
      "supplier": "PWA / cozinha",
      "yield_qty": 440,
      "yield_unit": "g",
      "canonical_yield_qty": 0.44,
      "batch_cost": 4.64057,
      "density_g_per_ml": 1,
      "pwa_source_codes": [
        "REC_MAIONESE_DEFUMADA"
      ],
      "pwa_source_ids": [
        "rec_maionese_defumada"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml",
        "Combo Completo > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml",
        "Combo Completo > Maionese Defumada 60ml > Maionese Defumada 60ml",
        "Combo Família Gyros > Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml",
        "Batata Frita Média 200g > Maionese Defumada 60ml > Maionese Defumada 60ml",
        "Batata Frita Grande 400g > Maionese Defumada 60ml > Maionese Defumada 60ml"
      ],
      "notes": "Feita internamente: base de maionese Quero + fumaça em pó + mostarda amarela."
    },
    {
      "code": "GYR-PREP-MAIONESE-VERDE",
      "erp_product_id": null,
      "name": "Maionese Verde",
      "kind": "prepared_feedstock",
      "canonical_unit": "KG",
      "unit_cost": 11.307494,
      "source_kind": "pwa_recipe",
      "active": true,
      "supplier": "PWA / cozinha",
      "yield_qty": 470,
      "yield_unit": "g",
      "canonical_yield_qty": 0.47,
      "batch_cost": 5.314522,
      "density_g_per_ml": null,
      "pwa_source_codes": [
        "REC_MAIONESE_VERDE"
      ],
      "pwa_source_ids": [
        "rec_maionese_verde"
      ],
      "used_in": [
        "Combo Clássico > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml",
        "Combo Completo > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml",
        "Combo Completo > Maionese Verde 60ml > Maionese Verde 60ml",
        "Combo Família Gyros > Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml",
        "Batata Frita Média 200g > Maionese Verde 60ml > Maionese Verde 60ml",
        "Batata Frita Grande 400g > Maionese Verde 60ml > Maionese Verde 60ml"
      ],
      "notes": "Base de maionese com mostarda, alho, limao, cheiro-verde, sal e pimenta-do-reino."
    },
    {
      "code": "GYR-PREP-MANTEIGA-SAL-ALHO",
      "erp_product_id": 1883,
      "name": "Manteiga com alho",
      "kind": "prepared_feedstock",
      "canonical_unit": "KG",
      "unit_cost": 61.38756,
      "source_kind": "pwa_recipe",
      "active": true,
      "supplier": "PWA / cozinha",
      "yield_qty": 550,
      "yield_unit": "g",
      "canonical_yield_qty": 0.55,
      "batch_cost": 33.763158,
      "density_g_per_ml": 1,
      "pwa_source_codes": [
        "REC_MANTEIGA_ALHO"
      ],
      "pwa_source_ids": [
        "rec_manteiga_alho"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha",
        "Beta Gyros de Frango",
        "Gamma Gyros de Linguiça Toscana",
        "Gyros Vegetariano de Berinjela",
        "Combo Essencial > Base interna — Lanche assinatura médio",
        "Combo Essencial > Alpha Gyros de Fraldinha > Alpha Gyros de Fraldinha"
      ],
      "notes": "Receita operacional: 500g de manteiga com sal + 50g de alho. Usar cerca de 20g no pão para dourar as duas extremidades."
    },
    {
      "code": "GYR-PREP-VINAGRETE-BASE",
      "erp_product_id": null,
      "name": "Vinagrete da casa",
      "kind": "prepared_feedstock",
      "canonical_unit": "KG",
      "unit_cost": 15.824762,
      "source_kind": "pwa_recipe",
      "active": true,
      "supplier": "PWA / cozinha",
      "yield_qty": 600,
      "yield_unit": "ml",
      "canonical_yield_qty": 0.6,
      "batch_cost": 9.494857,
      "density_g_per_ml": 1,
      "pwa_source_codes": [
        "REC_VINAGRETE"
      ],
      "pwa_source_ids": [
        "rec_vinagrete"
      ],
      "used_in": [
        "Alpha Gyros de Fraldinha",
        "Alpha Gyros de Fraldinha > Vinagrete da casa extra > Vinagrete da Casa 60ml",
        "Beta Gyros de Frango",
        "Beta Gyros de Frango > Vinagrete da casa extra > Vinagrete da Casa 60ml",
        "Gamma Gyros de Linguiça Toscana",
        "Gamma Gyros de Linguiça Toscana > Vinagrete da casa extra > Vinagrete da Casa 60ml"
      ],
      "notes": "Tomate, cebola, limao, cheiro-verde, azeite, sal e pimenta"
    }
  ],
  "validation": {
    "importable_now": true,
    "row_count": 77,
    "duplicate_codes": [],
    "skipped_as_non_canonical": [
      "Produtos comerciais",
      "Opcoes de remocao",
      "Combos",
      "Receitas de porcao/finalizacao que nao representam estoque canonico separado",
      "Receitas triviais ja representadas por insumo comprado, exceto Maionese da Casa Junior Grill por ser preparo/insumo operacional proprio"
    ]
  }
}
```
