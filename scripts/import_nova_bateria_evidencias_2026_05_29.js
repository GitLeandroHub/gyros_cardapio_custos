const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DB_PATH = path.join(ROOT, 'gyros-custos-cardapio.json');
const APP_PATH = path.join(ROOT, 'app.js');
const MANIFEST_PATH = path.join(ROOT, 'docs/inputs/manifesto_evidencias_2026.md');
const IMPORT_NOTE = 'Nova bateria catalogada importada em 2026-05-29';
const BASE_DIR = 'docs/inputs/2026/2026-05/nova-bateria-2026-05-29';

const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));

function upsert(listName, record) {
  db[listName] = db[listName] || [];
  const list = db[listName];
  const index = list.findIndex(item => item.id === record.id);
  if (index >= 0) list[index] = { ...list[index], ...record };
  else list.push(record);
}

function patch(listName, id, changes) {
  const item = (db[listName] || []).find(entry => entry.id === id);
  if (!item) throw new Error(`Registro nao encontrado: ${listName}/${id}`);
  Object.assign(item, changes);
}

function inputId(code) {
  return `inp_nb_${code}`;
}

function orderId(code) {
  return `ord_nb_${code}`;
}

function expenseId(code) {
  return `exp_nb_${code}`;
}

function pitId(orderCode, index, slug) {
  return `pit_${orderId(orderCode)}_${index}_${slug}`;
}

function filePath(fileName) {
  return `${BASE_DIR}/${fileName}`;
}

function supplier(id, name, code) {
  upsert('suppliers', {
    id,
    name,
    code,
    scope: 'gyros',
    category: 'fornecedor',
    notes: `Fornecedor confirmado/atualizado pela ${IMPORT_NOTE}.`
  });
}

[
  ['sup_samppel-embalagens', 'Samppel Embalagens', 'SUP_SAMPPEL_EMBALAGENS'],
  ['sup_frigo-noronha', 'Frigo Noronha', 'SUP_FRIGO_NORONHA'],
  ['sup_padaria', 'Padaria Versailles', 'SUP_PADARIA'],
  ['sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', 'SUP_TENDA_ATACADO_LTDA_VL_GALVAO'],
  ['sup_vms-supermercados-do-brasil', 'VMS Supermercados do Brasil Ltda', 'SUP_VMS_SUPERMERCADOS_DO_BRASIL'],
  ['sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', 'SUP_MERCADO_FONTE_NOVA_RECREIO_LTDA'],
  ['sup_ikoa-plast-edido-2025-embalagens-em-geral', 'IKOA Plast Comércio de Embalagens Ltda', 'SUP_IKOA_PLAST_COMERCIO_EMBALAGENS_LTDA'],
  ['sup_congelados', 'Meus Congelados', 'SUP_CONGELADOS'],
  ['sup_f-m-e-matsuo-ltda-epp', 'F. M. F. Matsuo Ltda EPP', 'SUP_F_M_F_MATSUO_LTDA_EPP']
].forEach(([id, name, code]) => supplier(id, name, code));

const inputs = [
  ['2026_05_12_samppel_430_00', 'Venda 102 - Samppel embalagens', 'order', 'sup_samppel-embalagens', 'Samppel Embalagens', 'Venda 102', '2026-05-12', 430, 'E01_samppel_venda_102_2026-05-12.jpeg', 'Sacos brancos M/G com frete identificado de R$ 90,00.', 'documented'],
  ['2026_05_19_frigo_noronha_368_93', 'NFC-e 304 - Frigo Noronha carnes', 'invoice', 'sup_frigo-noronha', 'Frigo Noronha', '304', '2026-05-19', 368.93, 'E02_frigo_noronha_nfce_304_2026-05-19.jpeg', 'Contem fraldinha, file de sobrecoxa e itens de acougue usados apenas para compor preco/acordo.', 'documented'],
  ['data_nao_visivel_padaria_versailles_189_00_nb', 'NFC-e 64501 - Padaria Versailles pao', 'invoice', 'sup_padaria', 'Padaria Versailles', '000064501', '', 189, 'E03_padaria_versailles_nfce_64501_credito_189.jpeg', 'Data nao legivel; anotacao manual indica pao frances com parmesao.', 'documented'],
  ['2026_05_19_tenda_requeijao_133_80', 'NFC-e 91879 - Tenda requeijao Catupiry', 'invoice', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '91879', '2026-05-19', 133.8, 'E04_tenda_requeijao_2026-05-19.jpeg', 'Requeijao cremoso Catupiry tradicional.', 'documented'],
  ['2026_05_19_tenda_compra_geral_256_55', 'NFC-e 91585 - Tenda compra geral', 'invoice', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '91585', '2026-05-19', 256.55, 'E05_tenda_compra_geral_2026-05-19.jpeg', 'Compra geral com hortifruti, bebidas, mussarela, oleo e item de acougue/tempero para revisao.', 'documented'],
  ['2026_05_21_vms_supermercados_441_29', 'NFC-e 23073 - VMS supermercados', 'invoice', 'sup_vms-supermercados-do-brasil', 'VMS Supermercados do Brasil Ltda', '000023073', '2026-05-21', 441.29, 'E06_vms_supermercados_2026-05-21.jpeg', 'Documento impresso como nao fiscal; usar como revisao, nao como fonte ativa automatica.', 'review'],
  ['2026_05_16_frigo_noronha_194_05', 'NFC-e 294 - Frigo Noronha carnes', 'invoice', 'sup_frigo-noronha', 'Frigo Noronha', '294', '2026-05-16', 194.05, 'E07_frigo_noronha_nfce_294_2026-05-16.jpeg', 'Fraldinha e file de sobrecoxa.', 'documented'],
  ['2026_05_13_padaria_versailles_189_00', 'NFC-e 62625 - Padaria Versailles pao', 'invoice', 'sup_padaria', 'Padaria Versailles', '000062625', '2026-05-13', 189, 'E08_padaria_versailles_nfce_62625_2026-05-13.jpeg', 'Produto lancado como diversos; anotacao manual indica pao frances com parmesao.', 'documented'],
  ['2026_05_05_fonte_nova_31_31', 'NFC-e 55899 - Fonte Nova mercado', 'invoice', 'sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', '55899', '2026-05-05', 31.31, 'E09_fonte_nova_nfce_55899_2026-05-05.jpeg', 'Hortifruti, oleo e refrigerante; oleo de soja nao vira insumo novo nesta fase.', 'documented'],
  ['2026_05_13_tenda_156_70', 'NFC-e 31709 - Tenda mussarela e linguica', 'invoice', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '31709', '2026-05-13', 156.7, 'E10_tenda_nfce_31709_2026-05-13.jpeg', 'Mussarela e linguica toscana; unidade da linguica aparece como pacote, manter para historico/revisao.', 'documented'],
  ['2026_05_13_ikoa_plast_176_40', 'NFC-e 1986 - IKOA Plast embalagens', 'invoice', 'sup_ikoa-plast-edido-2025-embalagens-em-geral', 'IKOA Plast Comércio de Embalagens Ltda', '000001986', '2026-05-13', 176.4, 'E11_ikoa_plast_nfce_1986_2026-05-13.jpeg', 'Pote 145ml, guardanapo/sache, papel manteiga e correlatos.', 'documented'],
  ['2026_05_13_fonte_nova_tomate_27_22', 'NFC-e 27232 - Fonte Nova tomate', 'invoice', 'sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', '27232', '2026-05-13', 27.22, 'E12_fonte_nova_tomate_2026-05-13.jpeg', 'Tomate italiano por kg.', 'documented'],
  ['2026_05_14_meus_congelados_churros_119_60', 'Pedido Meus Congelados churros', 'order', 'sup_congelados', 'Meus Congelados', 'E13', '2026-05-14', 119.6, 'E13_meus_congelados_churros_2026-05-14.jpeg', 'Pedido/comprovante Cielo anexado na imagem.', 'documented'],
  ['2026_05_15_tenda_compra_geral_223_58', 'NFC-e 91129 - Tenda compra geral', 'invoice', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '91129', '2026-05-15', 223.58, 'E14_tenda_compra_geral_2026-05-15.jpeg', 'Tomate, bacon, margarina, alho, cheiro-verde e batata congelada.', 'documented'],
  ['2026_05_14_fonte_nova_34_87', 'NFC-e 37968 - Fonte Nova bebidas e fita', 'invoice', 'sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', '37968', '2026-05-14', 34.87, 'E15_fonte_nova_nfce_37968_2026-05-14.jpeg', 'Bebidas/agua e fita adesiva; fita fica como operacional, nao ficha tecnica.', 'documented'],
  ['2026_05_20_tenda_limpeza_89_35', 'NFC-e 92091 - Tenda limpeza', 'invoice', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '92091', '2026-05-20', 89.35, 'E16_tenda_limpeza_2026-05-20.jpeg', 'Itens de limpeza e higiene; registrar como gasto operacional.', 'documented'],
  ['2026_05_20_matsuo_limpeza_33_46', 'NFC-e 114934 - Matsuo limpeza', 'invoice', 'sup_f-m-e-matsuo-ltda-epp', 'F. M. F. Matsuo Ltda EPP', '000114934', '2026-05-20', 33.46, 'E17_matsuo_limpeza_2026-05-20.jpeg', 'Detergentes e produto sanitario; registrar como gasto operacional.', 'documented'],
  ['2026_05_21_fonte_nova_carnes_126_30', 'NFC-e 52988 - Fonte Nova carnes', 'invoice', 'sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', '52988', '2026-05-21', 126.3, 'E18_fonte_nova_carnes_2026-05-21.jpeg', 'Fraldinha e linguica suina Sadia mapeada para Linguica toscana conforme cadastro tecnico ativo.', 'documented']
];

for (const [code, title, inputType, supplierId, supplierName, documentNumber, date, totalAmount, fileName, notes, evidenceType] of inputs) {
  upsert('inputs', {
    id: inputId(code),
    scope: 'gyros',
    title,
    inputType,
    sourceChannel: 'physical_store',
    supplierId,
    supplierName,
    documentNumber,
    date,
    paymentMethod: '',
    paymentStatus: 'paid',
    totalAmount,
    fileLabel: fileName,
    filePath: filePath(fileName),
    filePaths: [filePath(fileName)],
    fileUrl: '',
    notes,
    evidenceType,
    evidenceSource: IMPORT_NOTE,
    code: inputId(code).toUpperCase(),
    description: title.replace(/^NFC-e \d+ - |^Venda \d+ - |^Pedido /, '')
  });
}

function order(code, label, supplierId, supplierName, documentNumber, date, totalAmount, items, evidenceType = 'documented', notes = '') {
  const id = orderId(code);
  const inp = inputId(code);
  upsert('purchaseOrders', {
    id,
    code: id.toUpperCase(),
    scope: 'gyros',
    supplierId,
    supplierName,
    label,
    date,
    documentNumber,
    paymentMethod: '',
    paymentStatus: 'paid',
    totalAmount,
    inputIds: [inp],
    notes,
    evidenceType,
    evidenceSource: `${IMPORT_NOTE}; arquivo vinculado em ${BASE_DIR}`
  });
  db.purchaseItems = (db.purchaseItems || []).filter(item => item.orderId !== id);
  for (const item of items) {
    upsert('purchaseItems', {
      id: pitId(code, item.index, item.slug),
      orderId: id,
      supplierId,
      scope: 'gyros',
      resourceType: item.resourceType,
      resourceId: item.resourceId,
      description: item.description,
      qty: item.qty,
      unit: item.unit,
      unitPrice: item.unitPrice,
      totalPrice: item.totalPrice,
      evidenceType,
      evidenceSource: IMPORT_NOTE,
      notes: item.notes || ''
    });
  }
}

order('2026_05_12_samppel_430_00', 'Samppel - sacos brancos M/G', 'sup_samppel-embalagens', 'Samppel Embalagens', 'Venda 102', '2026-05-12', 430, [
  { index: 1, slug: 'saco_branco_m', resourceType: 'packaging', resourceId: 'pkg_sacola_delivery', description: 'Saco branco sem impressao M 32x24x11,5', qty: 200, unit: 'un', unitPrice: 0.75, totalPrice: 150 },
  { index: 2, slug: 'saco_branco_g', resourceType: 'packaging', resourceId: 'pkg_sacola_delivery', description: 'Saco branco sem impressao G 31x31x19', qty: 200, unit: 'un', unitPrice: 0.95, totalPrice: 190 },
  { index: 3, slug: 'frete_sacos', resourceType: 'other', resourceId: 'frete_sacos_samppel', description: 'Frete da compra de sacos Samppel', qty: 1, unit: 'un', unitPrice: 90, totalPrice: 90, notes: 'Frete compoe custo logistico da compra; custo cadastral da sacola foi atualizado incluindo frete.' }
]);

order('2026_05_19_frigo_noronha_368_93', 'Frigo Noronha - carnes e acordo de acougue', 'sup_frigo-noronha', 'Frigo Noronha', '304', '2026-05-19', 368.93, [
  { index: 1, slug: 'bisteca_copa_revisao', resourceType: 'other', resourceId: 'itm_historico_bisteca_copa', description: 'Bisteca da copa - historico/revisao', qty: 3.234, unit: 'kg', unitPrice: 22.98, totalPrice: 74.32, notes: 'Nao criar carne ativa; usada no acordo/formacao de preco do acougue.' },
  { index: 2, slug: 'file_sobrecoxa', resourceType: 'ingredient', resourceId: 'ing_frango', description: 'File de sobrecoxa', qty: 2.504, unit: 'kg', unitPrice: 22.98, totalPrice: 57.54, notes: 'Evidencia parcial do blend de frango cru.' },
  { index: 3, slug: 'salsicha_revisao', resourceType: 'other', resourceId: 'itm_historico_salsicha', description: 'Salsicha Perdigao - historico/revisao', qty: 2.576, unit: 'kg', unitPrice: 19.98, totalPrice: 51.47, notes: 'Nao entra no cardapio; usada pelo acougue para compor preco/acordo.' },
  { index: 4, slug: 'fraldinha', resourceType: 'ingredient', resourceId: 'ing_fraldinha', description: 'Fraldinha', qty: 4.64, unit: 'kg', unitPrice: 40, totalPrice: 185.6 }
]);

order('data_nao_visivel_padaria_versailles_189_00_nb', 'Padaria Versailles - pao com parmesao sem data legivel', 'sup_padaria', 'Padaria Versailles', '000064501', '', 189, [
  { index: 1, slug: 'pao_parmesao_100un', resourceType: 'ingredient', resourceId: 'ing_pao_parmesao_pronto', description: 'Pao frances com parmesao', qty: 100, unit: 'un', unitPrice: 1.89, totalPrice: 189 }
]);

order('2026_05_19_tenda_requeijao_133_80', 'Tenda - requeijao Catupiry', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '91879', '2026-05-19', 133.8, [
  { index: 1, slug: 'requeijao_catupiry_tradicional', resourceType: 'ingredient', resourceId: 'ing_catupiry', description: 'Requeijao cremoso Catupiry tradicional (2 un x 1,5kg)', qty: 3, unit: 'kg', unitPrice: 44.6, totalPrice: 133.8, notes: 'Quantidade tecnica assumida como 3kg para leitura canonica; documento imprime 2 unidades a R$ 66,90.' }
]);

order('2026_05_19_tenda_compra_geral_256_55', 'Tenda - hortifruti, laticinio e bebidas', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '91585', '2026-05-19', 256.55, [
  { index: 1, slug: 'salsa_revisao', resourceType: 'ingredient', resourceId: 'ing_cheiro_verde', description: 'Salsa fresca', qty: 1, unit: 'un', unitPrice: 3.99, totalPrice: 3.99, notes: 'Unidade sem gramatura; nao usar como custo ativo automatico.' },
  { index: 2, slug: 'cheiro_verde', resourceType: 'ingredient', resourceId: 'ing_cheiro_verde', description: 'Cheiro-verde', qty: 2, unit: 'un', unitPrice: 3.99, totalPrice: 7.98, notes: 'Unidade sem gramatura; nao usar como custo ativo automatico.' },
  { index: 3, slug: 'sacola_reutilizavel_revisao', resourceType: 'other', resourceId: 'itm_sacola_reutilizavel', description: 'Sacola reutilizavel Tenda 50x60cm', qty: 7, unit: 'un', unitPrice: 0.15, totalPrice: 1.05 },
  { index: 4, slug: 'amaciante_carne_revisao', resourceType: 'other', resourceId: 'itm_revisar_amaciante_carne', description: 'Amaciante de carne Qualimax', qty: 1, unit: 'un', unitPrice: 19.9, totalPrice: 19.9 },
  { index: 5, slug: 'mussarela_president', resourceType: 'ingredient', resourceId: 'ing_mucarela', description: 'Queijo mussarela President fatiado', qty: 1, unit: 'un', unitPrice: 54.9, totalPrice: 54.9, notes: 'Peso nao transcrito; manter como historico.' },
  { index: 6, slug: 'oleo_soja_revisao', resourceType: 'other', resourceId: 'itm_revisar_oleo_soja', description: 'Oleo de soja Liza 900ml', qty: 1, unit: 'un', unitPrice: 44.34, totalPrice: 44.34, notes: 'Nao criar novo insumo; o cardapio usa oleo de algodao/azeite conforme cadastros atuais.' },
  { index: 7, slug: 'sprite_2l_revisao', resourceType: 'other', resourceId: 'itm_revisar_sprite_2l', description: 'Refrigerante Sprite 2L', qty: 2, unit: 'un', unitPrice: 7.93, totalPrice: 15.86 },
  { index: 8, slug: 'agua_5l_revisao', resourceType: 'other', resourceId: 'itm_revisar_agua_5l', description: 'Agua mineral sem gas Select 5L', qty: 1, unit: 'un', unitPrice: 8.45, totalPrice: 8.45 },
  { index: 9, slug: 'limao_tahiti', resourceType: 'ingredient', resourceId: 'ing_limao', description: 'Limao Tahiti por kg', qty: 1.44, unit: 'kg', unitPrice: 3.89, totalPrice: 5.6, notes: 'Ingrediente cadastrado em ml de suco; compra em kg fica como evidencia, sem conversao automatica.' },
  { index: 10, slug: 'tomate_salada', resourceType: 'ingredient', resourceId: 'ing_tomate', description: 'Tomate salada', qty: 2.822, unit: 'kg', unitPrice: 11.9, totalPrice: 33.58 },
  { index: 11, slug: 'cebola', resourceType: 'ingredient', resourceId: 'ing_cebola', description: 'Cebola', qty: 0.982, unit: 'kg', unitPrice: 4.99, totalPrice: 4.9 },
  { index: 12, slug: 'sprite_lata', resourceType: 'product', resourceId: 'prd_sprite_350', description: 'Sprite lata', qty: 8, unit: 'un', unitPrice: 3.59, totalPrice: 28.72 },
  { index: 13, slug: 'fanta_lata', resourceType: 'product', resourceId: 'prd_fanta', description: 'Fanta Laranja lata', qty: 8, unit: 'un', unitPrice: 3.41, totalPrice: 27.28 }
]);

order('2026_05_21_vms_supermercados_441_29', 'VMS - compra mercado para revisao', 'sup_vms-supermercados-do-brasil', 'VMS Supermercados do Brasil Ltda', '000023073', '2026-05-21', 441.29, [
  { index: 1, slug: 'batata_pre_frita', resourceType: 'ingredient', resourceId: 'ing_batata', description: 'Batata pre frita pacote 2kg', qty: 10, unit: 'kg', unitPrice: 15.75, totalPrice: 157.5 },
  { index: 2, slug: 'tomate_salada', resourceType: 'ingredient', resourceId: 'ing_tomate', description: 'Tomate salada', qty: 1.59, unit: 'kg', unitPrice: 13.4, totalPrice: 21.31 },
  { index: 3, slug: 'alcool_gel_revisao', resourceType: 'other', resourceId: 'itm_limpeza_alcool_gel', description: 'Alcool gel Coper 500g', qty: 3, unit: 'un', unitPrice: 10.9, totalPrice: 32.7 },
  { index: 4, slug: 'catupiry_4_queijos', resourceType: 'ingredient', resourceId: 'ing_4queijos', description: 'Requeijao Catupiry 4 queijos 1,010kg', qty: 2.02, unit: 'kg', unitPrice: 49.41, totalPrice: 99.8 },
  { index: 5, slug: 'h2oh_limao', resourceType: 'product', resourceId: 'prd_h2o_500', description: 'H2OH! limao 500ml', qty: 12, unit: 'un', unitPrice: 4.99, totalPrice: 59.88 },
  { index: 6, slug: 'azeite_gallo', resourceType: 'ingredient', resourceId: 'ing_oleo_vinagre', description: 'Azeite Gallo 500ml', qty: 500, unit: 'ml', unitPrice: 0.0514, totalPrice: 25.7 },
  { index: 7, slug: 'mussarela_500g', resourceType: 'ingredient', resourceId: 'ing_mucarela', description: 'Queijo mussarela 500g', qty: 1, unit: 'kg', unitPrice: 49.8, totalPrice: 49.8 },
  { index: 8, slug: 'desconto_documento', resourceType: 'other', resourceId: 'desconto_vms_2026_05_21', description: 'Desconto total do documento', qty: 1, unit: 'un', unitPrice: -5.4, totalPrice: -5.4 }
], 'review', 'Documento marcado como nao fiscal; manter como revisao.');

order('2026_05_16_frigo_noronha_194_05', 'Frigo Noronha - fraldinha e sobrecoxa', 'sup_frigo-noronha', 'Frigo Noronha', '294', '2026-05-16', 194.05, [
  { index: 1, slug: 'file_sobrecoxa_a', resourceType: 'ingredient', resourceId: 'ing_frango', description: 'File de sobrecoxa', qty: 2.55, unit: 'kg', unitPrice: 22.98, totalPrice: 58.6 },
  { index: 2, slug: 'file_sobrecoxa_b', resourceType: 'ingredient', resourceId: 'ing_frango', description: 'File de sobrecoxa', qty: 1.552, unit: 'kg', unitPrice: 22.98, totalPrice: 35.66 },
  { index: 3, slug: 'fraldinha', resourceType: 'ingredient', resourceId: 'ing_fraldinha', description: 'Fraldinha', qty: 2.495, unit: 'kg', unitPrice: 40, totalPrice: 99.79 }
]);

order('2026_05_13_padaria_versailles_189_00', 'Padaria Versailles - pao com parmesao', 'sup_padaria', 'Padaria Versailles', '000062625', '2026-05-13', 189, [
  { index: 1, slug: 'pao_parmesao_100un', resourceType: 'ingredient', resourceId: 'ing_pao_parmesao_pronto', description: 'Pao frances com parmesao', qty: 100, unit: 'un', unitPrice: 1.89, totalPrice: 189 }
]);

order('2026_05_05_fonte_nova_31_31', 'Fonte Nova - hortifruti e mercado', 'sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', '55899', '2026-05-05', 31.31, [
  { index: 1, slug: 'cebola_nacional', resourceType: 'ingredient', resourceId: 'ing_cebola', description: 'Cebola nacional', qty: 0.43, unit: 'kg', unitPrice: 7.99, totalPrice: 3.44 },
  { index: 2, slug: 'tomate_italiano', resourceType: 'ingredient', resourceId: 'ing_tomate', description: 'Tomate italiano', qty: 0.99, unit: 'kg', unitPrice: 9.99, totalPrice: 9.89 },
  { index: 3, slug: 'pepsi_zero_2l_revisao', resourceType: 'other', resourceId: 'itm_revisar_pepsi_zero_2l', description: 'Pepsi Zero 2L', qty: 1, unit: 'un', unitPrice: 8.99, totalPrice: 8.99 },
  { index: 4, slug: 'oleo_soja_revisao', resourceType: 'other', resourceId: 'itm_revisar_oleo_soja', description: 'Oleo de soja Liza 900ml', qty: 1, unit: 'un', unitPrice: 8.99, totalPrice: 8.99 }
]);

order('2026_05_13_tenda_156_70', 'Tenda - mussarela e linguica', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '31709', '2026-05-13', 156.7, [
  { index: 1, slug: 'mussarela_ipanema', resourceType: 'ingredient', resourceId: 'ing_mucarela', description: 'Queijo mussarela Ipanema fatiado', qty: 1, unit: 'un', unitPrice: 56.9, totalPrice: 56.9, notes: 'Peso nao transcrito; manter como historico.' },
  { index: 2, slug: 'linguica_toscana_pacote', resourceType: 'ingredient', resourceId: 'ing_linguica', description: 'Linguica toscana congelada Sadia', qty: 1, unit: 'pt', unitPrice: 99.5, totalPrice: 99.5, notes: 'Unidade pacote sem peso claro; nao usar como custo ativo automatico.' },
  { index: 3, slug: 'sacola_reutilizavel_revisao', resourceType: 'other', resourceId: 'itm_sacola_reutilizavel', description: 'Sacola reutilizavel Tenda', qty: 2, unit: 'un', unitPrice: 0.15, totalPrice: 0.3 }
]);

order('2026_05_13_ikoa_plast_176_40', 'IKOA Plast - embalagens', 'sup_ikoa-plast-edido-2025-embalagens-em-geral', 'IKOA Plast Comércio de Embalagens Ltda', '000001986', '2026-05-13', 176.4, [
  { index: 1, slug: 'pote_redondo_145ml', resourceType: 'packaging', resourceId: 'pkg_potinho_feijao', description: 'Pote redondo PraFesta 145ml', qty: 3, unit: 'pc', unitPrice: 11.8, totalPrice: 35.4, notes: 'Quantidade por pacote nao confirmada; nao atualizar custo unitario.' },
  { index: 2, slug: 'papel_toalha_revisao', resourceType: 'other', resourceId: 'itm_papel_toalha_isapel', description: 'Papel/toalha Isapel Excellence 22x21', qty: 2, unit: 'pc', unitPrice: 16.5, totalPrice: 33 },
  { index: 3, slug: 'guardanapo_sache_500', resourceType: 'packaging', resourceId: 'pkg_guardanapo', description: 'Guardanapo/sache Pluma Guard 28x20,5 c/500', qty: 500, unit: 'un', unitPrice: 0.158, totalPrice: 79 },
  { index: 4, slug: 'papel_manteiga_wyda', resourceType: 'packaging', resourceId: 'pkg_lanche', description: 'Papel manteiga Wyda 29x50', qty: 1, unit: 'un', unitPrice: 29, totalPrice: 29, notes: 'Historico de embalagem; nao substitui automaticamente o papel acoplado mono frios.' }
]);

order('2026_05_13_fonte_nova_tomate_27_22', 'Fonte Nova - tomate', 'sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', '27232', '2026-05-13', 27.22, [
  { index: 1, slug: 'tomate_italiano', resourceType: 'ingredient', resourceId: 'ing_tomate', description: 'Tomate italiano', qty: 2.27, unit: 'kg', unitPrice: 11.99, totalPrice: 27.22 }
]);

order('2026_05_14_meus_congelados_churros_119_60', 'Meus Congelados - churros', 'sup_congelados', 'Meus Congelados', 'E13', '2026-05-14', 119.6, [
  { index: 1, slug: 'churros_4kg', resourceType: 'ingredient', resourceId: 'ing_massa_churros', description: 'Mini churros congelado', qty: 4, unit: 'kg', unitPrice: 29.9, totalPrice: 119.6, notes: 'Pedido mostra 4 unidades a R$ 29,90; mantido como 4kg conforme cadastro tecnico atual.' }
]);

order('2026_05_15_tenda_compra_geral_223_58', 'Tenda - batata e hortifruti', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '91129', '2026-05-15', 223.58, [
  { index: 1, slug: 'tomate_italiano', resourceType: 'ingredient', resourceId: 'ing_tomate', description: 'Tomate italiano', qty: 2.774, unit: 'kg', unitPrice: 13.9, totalPrice: 38.56 },
  { index: 2, slug: 'bacon_papada_cubos', resourceType: 'ingredient', resourceId: 'ing_bacon_cubos', description: 'Bacon papada em cubos Mister Beef', qty: 1, unit: 'un', unitPrice: 19.99, totalPrice: 19.99, notes: 'Peso nao transcrito; manter como historico.' },
  { index: 3, slug: 'sacola_reutilizavel_revisao', resourceType: 'other', resourceId: 'itm_sacola_reutilizavel', description: 'Sacola reutilizavel Tenda 50x60cm', qty: 6, unit: 'un', unitPrice: 0.15, totalPrice: 0.9 },
  { index: 4, slug: 'margarina_revisao', resourceType: 'other', resourceId: 'itm_revisar_margarina_vigor', description: 'Margarina Vigor com sal 500g', qty: 1, unit: 'un', unitPrice: 8.39, totalPrice: 8.39 },
  { index: 5, slug: 'alho_triturado', resourceType: 'ingredient', resourceId: 'ing_alho', description: 'Alho triturado Saborelli sem sal', qty: 1, unit: 'un', unitPrice: 12.25, totalPrice: 12.25, notes: 'Peso nao transcrito; manter como historico.' },
  { index: 6, slug: 'cheiro_verde', resourceType: 'ingredient', resourceId: 'ing_cheiro_verde', description: 'Cheiro-verde', qty: 1, unit: 'un', unitPrice: 3.99, totalPrice: 3.99, notes: 'Unidade sem gramatura; nao usar como custo ativo automatico.' },
  { index: 7, slug: 'batata_congelada_bem_brasil', resourceType: 'ingredient', resourceId: 'ing_batata', description: 'Batata congelada Bem Brasil Crinkle', qty: 10, unit: 'kg', unitPrice: 13.95, totalPrice: 139.5, notes: 'Assumido 5 pacotes de 2kg.' }
]);

order('2026_05_14_fonte_nova_34_87', 'Fonte Nova - bebidas e fita', 'sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', '37968', '2026-05-14', 34.87, [
  { index: 1, slug: 'fita_adesiva_revisao', resourceType: 'other', resourceId: 'itm_fita_adesiva', description: 'Fita adesiva', qty: 2, unit: 'un', unitPrice: 4.45, totalPrice: 8.9 },
  { index: 2, slug: 'agua_6l_revisao', resourceType: 'other', resourceId: 'itm_revisar_agua_6l', description: 'Agua Puraqua 6L', qty: 1, unit: 'un', unitPrice: 8.99, totalPrice: 8.99 },
  { index: 3, slug: 'antarctica_diet_2l_revisao', resourceType: 'other', resourceId: 'itm_revisar_antarctica_diet_2l', description: 'Refrigerante Antarctica Diet 2L', qty: 1, unit: 'un', unitPrice: 6.99, totalPrice: 6.99 },
  { index: 4, slug: 'sprite_pet_2l_revisao', resourceType: 'other', resourceId: 'itm_revisar_sprite_pet_2l', description: 'Sprite PET 2L', qty: 1, unit: 'un', unitPrice: 9.99, totalPrice: 9.99 }
]);

order('2026_05_21_fonte_nova_carnes_126_30', 'Fonte Nova - fraldinha e linguica', 'sup_mercado-fonte-nova-recreio', 'Mercado Fonte Nova Recreio Ltda', '52988', '2026-05-21', 126.3, [
  { index: 1, slug: 'fraldinha_bovina', resourceType: 'ingredient', resourceId: 'ing_fraldinha', description: 'Fraldinha bovina', qty: 0.91, unit: 'kg', unitPrice: 39.99, totalPrice: 36.39 },
  { index: 2, slug: 'linguica_suina_sadia', resourceType: 'ingredient', resourceId: 'ing_linguica', description: 'Linguica suina Sadia', qty: 4.998, unit: 'kg', unitPrice: 17.99, totalPrice: 89.91, notes: 'Mapeada ao cadastro tecnico Linguica toscana; nao criar nova carne.' }
]);

function expense(code, label, supplierId, supplierName, documentNumber, date, totalAmount, category, notes) {
  const inp = inputId(code);
  upsert('expenseEntries', {
    id: expenseId(code),
    code: expenseId(code).toUpperCase(),
    scope: 'gyros',
    category,
    supplierId,
    supplierName,
    fixedCostId: '',
    label,
    date,
    referencePeriod: date ? date.slice(0, 7) : '',
    documentNumber,
    paymentMethod: '',
    paymentStatus: 'paid',
    totalAmount,
    inputIds: [inp],
    notes,
    evidenceType: 'documented',
    evidenceSource: `${IMPORT_NOTE}; gasto operacional sem ficha tecnica`
  });
}

expense('2026_05_20_tenda_limpeza_89_35', 'Limpeza e higiene - Tenda', 'sup_tenda-atacado-vl-galvao', 'Tenda Atacado Ltda', '92091', '2026-05-20', 89.35, 'cleaning', 'Saco de lixo, agua sanitaria, multiuso e papel higienico. Nao entra em ficha tecnica.');
expense('2026_05_20_matsuo_limpeza_33_46', 'Limpeza - Matsuo', 'sup_f-m-e-matsuo-ltda-epp', 'F. M. F. Matsuo Ltda EPP', '000114934', '2026-05-20', 33.46, 'cleaning', 'Gel sanitario e detergentes. Nao entra em ficha tecnica.');

patch('ingredients', 'ing_tempero', {
  sourceType: 'review',
  evidenceType: 'review',
  sourceReference: 'Sem nota recente de pacote de sal nesta bateria. Manter como pendencia de compra/auditoria; nao confundir com Sal sache refinado 0,8g.',
  evidenceSource: 'Pendencia apos nova bateria 2026-05-29: sal de pacote usado em Sal e pimenta ainda sem comprovante dedicado.',
  notes: 'Sal comprado/controlado como insumo de preparo. Sachê de sal é cadastro separado; mistura sal e pimenta é preparo próprio. Aguardando comprovante do pacote de sal.'
});

patch('ingredients', 'ing_linguica', {
  purchaseQty: 4998,
  purchaseCost: 89.91,
  sourceType: 'documented',
  evidenceType: 'documented',
  sourceReference: 'Última compra comprovada em 2026-05-21: Linguiça suína Sadia, 4,998 kg a R$ 17,99/kg (Mercado Fonte Nova, E18).',
  evidenceSource: 'NFC-e 52.988 Mercado Fonte Nova, nova bateria 2026-05-29.',
  supplier: 'Açougue / mercado'
});

patch('ingredients', 'ing_catupiry', {
  purchaseQty: 3000,
  purchaseCost: 133.8,
  sourceType: 'documented',
  evidenceType: 'documented',
  sourceReference: 'Última compra comprovada em 2026-05-19: Requeijão cremoso Catupiry tradicional, 2 un a R$ 66,90; leitura técnica 3kg a R$ 44,60/kg (Tenda, E04).',
  evidenceSource: 'NFC-e 91.879 Tenda Atacado, nova bateria 2026-05-29.',
  supplier: 'Laticínio'
});

patch('ingredients', 'ing_batata', {
  purchaseQty: 10000,
  purchaseCost: 139.5,
  sourceType: 'documented',
  evidenceType: 'documented',
  sourceReference: 'Última compra comprovada em 2026-05-15: Batata congelada Bem Brasil Crinkle, 5 pacotes assumidos como 10kg a R$ 13,95/kg (Tenda, E14).',
  evidenceSource: 'NFC-e 91.129 Tenda Atacado, nova bateria 2026-05-29.',
  supplier: 'Tenda Atacado Ltda'
});

patch('ingredients', 'ing_tomate', {
  purchaseQty: 2774,
  purchaseCost: 38.56,
  sourceType: 'documented',
  evidenceType: 'documented',
  sourceReference: 'Última compra comprovada em 2026-05-15: Tomate italiano, 2,774 kg a R$ 13,90/kg (Tenda, E14).',
  evidenceSource: 'NFC-e 91.129 Tenda Atacado, nova bateria 2026-05-29.',
  supplier: 'Hortifruti'
});

patch('ingredients', 'ing_cebola', {
  purchaseQty: 982,
  purchaseCost: 4.9,
  sourceType: 'documented',
  evidenceType: 'documented',
  sourceReference: 'Última compra comprovada em 2026-05-19: Cebola, 0,982 kg a R$ 4,99/kg (Tenda, E05).',
  evidenceSource: 'NFC-e 91.585 Tenda Atacado, nova bateria 2026-05-29.',
  supplier: 'Hortifruti'
});

patch('ingredients', 'ing_massa_churros', {
  purchaseQty: 4000,
  purchaseCost: 119.6,
  sourceType: 'documented',
  evidenceType: 'documented',
  sourceReference: 'Última compra comprovada em 2026-05-14: Mini churros congelado, 4 un assumidas como 4kg a R$ 29,90/kg (Meus Congelados, E13).',
  evidenceSource: 'Pedido/comprovante Meus Congelados, nova bateria 2026-05-29.',
  supplier: 'Meus Congelados'
});

patch('packaging', 'pkg_sacola_delivery', {
  purchaseQty: 400,
  purchaseCost: 430,
  supplier: 'Samppel Embalagens',
  sourceType: 'documented',
  evidenceType: 'documented',
  sourceReference: 'Última compra comprovada em 2026-05-12: Sacos brancos M/G, 400 un por R$ 340,00 + frete R$ 90,00 = R$ 430,00 (Samppel, E01).',
  evidenceSource: 'Venda 102 Samppel, nova bateria 2026-05-29.'
});

patch('packaging', 'pkg_guardanapo', {
  purchaseQty: 500,
  purchaseCost: 79,
  supplier: 'IKOA Plast Comércio de Embalagens Ltda',
  sourceType: 'documented',
  evidenceType: 'documented',
  sourceReference: 'Última compra comprovada em 2026-05-13: Guardanapo/sachê Pluma Guard 28x20,5 com 500 un por R$ 79,00 (IKOA Plast, E11).',
  evidenceSource: 'NFC-e 000001986 IKOA Plast, nova bateria 2026-05-29.'
});

const manifestRows = inputs.map(([code, , inputType, , supplierName, documentNumber, date, totalAmount, fileName, notes, evidenceType]) => {
  const kind = inputType === 'invoice' || inputType === 'order' ? 'compra' : inputType;
  const visibleDate = date || 'sem data visível';
  const entityId = ['2026_05_20_tenda_limpeza_89_35', '2026_05_20_matsuo_limpeza_33_46'].includes(code)
    ? expenseId(code)
    : (inputType === 'invoice' || inputType === 'order' ? orderId(code) : '—');
  return `| ${visibleDate} | ${kind} | ${supplierName} | ${notes.replace(/\|/g, '/')} | R$ ${totalAmount.toFixed(2).replace('.', ',')} | ${inputId(code)} | ${entityId} | ${filePath(fileName)} |`;
});

let manifest = fs.existsSync(MANIFEST_PATH) ? fs.readFileSync(MANIFEST_PATH, 'utf8') : '';
const marker = '## Nova bateria catalogada - 2026-05-29';
const block = `\n${marker}\n\n| Data | Tipo | Fornecedor | Resumo | Total | Input | Compra/Gasto | Arquivo |\n|---|---|---|---|---:|---|---|---|\n${manifestRows.join('\n')}\n`;
if (manifest.includes(marker)) {
  manifest = manifest.replace(new RegExp(`\\n${marker}[\\s\\S]*$`), block);
} else {
  manifest = `${manifest.trimEnd()}\n${block}`;
}
fs.writeFileSync(MANIFEST_PATH, manifest);

fs.writeFileSync(DB_PATH, `${JSON.stringify(db, null, 2)}\n`);
const app = fs.readFileSync(APP_PATH, 'utf8');
const seed = `const SEED_DATA = ${JSON.stringify(db)};\n`;
const updated = app.replace(/^const SEED_DATA = .*?;\n/s, seed);
if (updated === app) throw new Error('Nao encontrei o bloco SEED_DATA em app.js');
fs.writeFileSync(APP_PATH, updated);

console.log(`Importados ${inputs.length} inputs, compras/gastos e historicos da nova bateria.`);
