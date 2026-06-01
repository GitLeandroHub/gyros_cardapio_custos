#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_ROOT = '/home/spawnbtc/Desktop/evidencias_sem_duplicatas';
const SOURCE_IMAGES = path.join(SOURCE_ROOT, 'evidências');
const DB_PATH = path.join(ROOT, 'gyros-custos-cardapio.json');
const APP_PATH = path.join(ROOT, 'app.js');
const DOCS_ROOT = path.join(ROOT, 'docs', 'inputs', '2026');
const MANIFEST_PATH = path.join(ROOT, 'docs', 'inputs', 'manifesto_evidencias_2026.md');
const REFERENCE_MD = path.join(DOCS_ROOT, 'referencias', 'evidencias_sem_duplicatas_2026-05-26.md');

function slugify(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function round(value, places = 4) {
  const factor = 10 ** places;
  return Math.round((Number(value) || 0) * factor) / factor;
}

function brl(value) {
  return (Number(value) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function stableId(prefix, key) {
  return `${prefix}_${slugify(key).replace(/-/g, '_')}`;
}

function supplierId(name) {
  return `sup_${slugify(name).slice(0, 48)}`;
}

function docsDir(date) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(date || '')) {
    return path.join(DOCS_ROOT, date.slice(0, 7));
  }
  return path.join(DOCS_ROOT, 'referencias');
}

function copyEvidenceFile(entry) {
  const source = path.join(SOURCE_IMAGES, entry.file);
  if (!fs.existsSync(source)) return '';
  const ext = path.extname(entry.file).toLowerCase() || '.jpeg';
  const dir = docsDir(entry.date);
  ensureDir(dir);
  const destName = `${entry.key}${ext}`;
  const dest = path.join(dir, destName);
  fs.copyFileSync(source, dest);
  return path.relative(ROOT, dest).replace(/\\/g, '/');
}

function upsertById(list, row) {
  const index = list.findIndex(item => item.id === row.id);
  if (index >= 0) list[index] = { ...list[index], ...row };
  else list.push(row);
}

function addSupplier(db, name) {
  if (!name || /fornecedor não identificado/i.test(name)) return '';
  const aliases = {
    'Padaria Versailles 24 Horas': 'sup_padaria',
    'Padaria Versailles': 'sup_padaria',
    'Mercado Fonte Nova Recreio': 'sup_mercado-fonte-nova-recreio',
    'Mercado Fonte Nova Recreio Ltda': 'sup_mercado-fonte-nova-recreio',
    'Sendas Distribuidora': 'sup_sendas',
    'Sendas Distribuidora S/A': 'sup_sendas',
    'Poupaki Atacadista': 'sup_poupaki-atacadista',
    'Poupaki Atacadista Ltda': 'sup_poupaki-atacadista',
    'Supermercados Irmãos Lopes': 'sup_supermercados-irmaos-lopes',
    'Supermercados Irmãos Lopes Ltda': 'sup_supermercados-irmaos-lopes',
    'Frigo Noronha': 'sup_frigo-noronha',
    'Ikoa Plast Comércio de Embalagens': 'sup_ikoa-plast-edido-2025-embalagens-em-geral',
    'IKO Plast Comércio de Embalagens': 'sup_ikoa-plast-edido-2025-embalagens-em-geral',
    'Comercial Krill': 'sup_comercial-krill',
    'OR Inox Equipamentos Industriais': 'sup_or-inox-equipamentos',
    'Tenda Atacado': 'sup_tenda-atacado-vl-galvao',
    'Tenda Atacado Ltda': 'sup_tenda-atacado-vl-galvao',
  };
  const id = aliases[name] || supplierId(name);
  if (!db.suppliers.some(item => item.id === id)) {
    db.suppliers.push({
      id,
      scope: 'gyros',
      name,
      category: 'fornecedor',
      active: true,
      notes: 'Fornecedor criado a partir do lote evidencias_sem_duplicatas.',
      code: `SUP_${slugify(name).replace(/-/g, '_').toUpperCase().slice(0, 36)}`,
      evidenceType: 'documented',
      evidenceSource: 'Lote evidencias_sem_duplicatas importado em 2026-05-26',
    });
  }
  return id;
}

function purchaseItem(orderId, supplierId, row, index) {
  const totalPrice = round(row.totalPrice != null ? row.totalPrice : row.qty * row.unitPrice, 2);
  return {
    id: stableId('pit', `${orderId}-${index + 1}-${row.description}`),
    orderId,
    supplierId,
    scope: 'gyros',
    resourceType: row.resourceType || 'other',
    resourceId: row.resourceId || `itm_${slugify(row.description).slice(0, 48)}`,
    description: row.description,
    qty: row.qty,
    unit: row.unit || 'un',
    unitPrice: round(row.unitPrice, 4),
    totalPrice,
    evidenceType: row.evidenceType || 'documented',
    evidenceSource: row.evidenceSource || 'Lote evidencias_sem_duplicatas importado em 2026-05-26',
    notes: row.notes || '',
  };
}

const evidences = [
  { id: 'E002', key: '2026-04-15-pedido-manutencao-243-00', file: 'E002_pedido_manutencao_2026-04-15_total_243-00.jpeg', kind: 'expense', inputType: 'payment_receipt', supplier: 'Fornecedor não identificado', date: '2026-04-15', total: 243, label: 'Pedido de manutenção', notes: 'Pedido manuscrito; peças e mão de obra. Registrar como manutenção, sem virar insumo de ficha.', expenseCategory: 'maintenance' },
  { id: 'E003', key: '2026-04-15-harmonia-carnes-181-95', file: 'E003_harmonia_carnes_2026-04-15_total_181-95.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Harmonia Mercado das Carnes', date: '2026-04-15', total: 181.95, label: 'Fraldinha bovina fresca', items: [{ description: 'Fraldinha bovina fresca por kg', qty: 5.2, unit: 'kg', unitPrice: 34.99, totalPrice: 181.95, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }] },
  { id: 'E004', key: '2026-04-14-orcamento-embalagens-87-50', file: 'E004_orcamento_embalagens_2026-04-14_total_87-50.jpeg', kind: 'input', inputType: 'quote', supplier: 'Fornecedor não identificado', date: '2026-04-14', total: 87.5, label: 'Orçamento de embalagens', notes: 'Orçamento de embalagens; não confirmar compra nem custo ativo sem validação.' },
  { id: 'E005', key: '2026-04-17-padaria-versailles-283-50', file: 'E005_padaria_versailles_2026-04-17_total_283-50.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Padaria Versailles 24 Horas', date: '2026-04-17', total: 283.5, label: 'Pão francês com parmesão', items: [{ description: 'Pão francês com parmesão', qty: 150, unit: 'un', unitPrice: 1.89, totalPrice: 283.5, resourceType: 'ingredient', resourceId: 'ing_pao_parmesao_pronto' }] },
  { id: 'E006', key: '2026-04-17-fonte-nova-19-17', file: 'E006_fonte_nova_2026-04-17_total_19-17.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Mercado Fonte Nova Recreio Ltda', date: '2026-04-17', total: 19.17, label: 'Sprite e cheiro-verde', items: [{ description: 'Sprite PET 2L', qty: 1, unit: 'un', unitPrice: 8.99, totalPrice: 8.99, resourceType: 'product', resourceId: 'prd_sprite_350' }, { description: 'Salsa/cheiro-verde CAISP', qty: 2, unit: 'un', unitPrice: 5.09, totalPrice: 10.18, resourceType: 'ingredient', resourceId: 'ing_cheiro_verde' }] },
  { id: 'E007', key: '2026-04-17-lopes-51-08', file: 'E007_lopes_2026-04-17_total_51-08.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Supermercados Irmãos Lopes Ltda', date: '2026-04-17', total: 51.08, label: 'Hortifruti e água', items: [{ description: 'Tomate salada por kg', qty: 2.705, unit: 'kg', unitPrice: 11.9, totalPrice: 32.19, resourceType: 'ingredient', resourceId: 'ing_tomate' }, { description: 'Limão Taiti por kg', qty: 1.535, unit: 'kg', unitPrice: 2.98, totalPrice: 4.57, resourceType: 'ingredient', resourceId: 'ing_limao' }, { description: 'Cebola por kg', qty: 0.87, unit: 'kg', unitPrice: 4.98, totalPrice: 4.33, resourceType: 'ingredient', resourceId: 'ing_cebola' }, { description: 'Água mineral 5L', qty: 1, unit: 'un', unitPrice: 9.99, totalPrice: 9.99, resourceType: 'other', resourceId: 'itm_agua_mineral_5l' }] },
  { id: 'E008', key: 'data-nao-visivel-maquinbal-utensilios-148-44', file: 'E008_maquinbal_utensilios_total_148-44.jpeg', kind: 'expense', inputType: 'invoice', supplier: 'Maquinbal Cozinhas Profissionais', date: '', total: 148.44, label: 'Utensílios de cozinha', notes: 'Utensílios operacionais. Registrar como gasto/equipamento, não como custo de ficha.', expenseCategory: 'other' },
  { id: 'E009', key: '2026-04-14-roldao-305-15', file: 'E009_roldao_2026-04-14_total_305-15.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Roldão Auto Serviço', date: '2026-04-14', total: 305.15, label: 'Alimentos para preparo', items: [{ description: 'Requeijão Catupiry 1kg', qty: 1, unit: 'un', unitPrice: 47.99, totalPrice: 47.99, resourceType: 'ingredient', resourceId: 'ing_catupiry' }, { description: 'Molho Polenghi cheddar', qty: 1, unit: 'un', unitPrice: 51.9, totalPrice: 51.9, resourceType: 'ingredient', resourceId: 'ing_cheddar' }, { description: 'Cebola por kg', qty: 1.09, unit: 'kg', unitPrice: 3.99, totalPrice: 4.35, resourceType: 'ingredient', resourceId: 'ing_cebola' }, { description: 'Tomate italiano por kg', qty: 1.538, unit: 'kg', unitPrice: 10.9, totalPrice: 16.76, resourceType: 'ingredient', resourceId: 'ing_tomate' }, { description: 'Batata crinkle Bem Brasil', qty: 3, unit: 'un', unitPrice: 26.9, totalPrice: 80.7, resourceType: 'ingredient', resourceId: 'ing_batata' }, { description: 'Linguiça toscana Aurora por kg', qty: 5, unit: 'kg', unitPrice: 20.69, totalPrice: 103.45, resourceType: 'ingredient', resourceId: 'ing_linguica' }] },
  { id: 'E010', key: '2026-04-14-kalunga-17-10', file: 'E010_kalunga_2026-04-14_total_17-10.jpeg', kind: 'expense', inputType: 'invoice', supplier: 'Kalunga', date: '2026-04-14', total: 17.1, label: 'Etiquetas', notes: 'Etiqueta de escritório/identificação; registrar como gasto operacional.', expenseCategory: 'other' },
  { id: 'E011', key: '2026-04-14-tenda-atacado-54-06', file: 'E011_tenda_atacado_2026-04-14_total_54-06.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Tenda Atacado Ltda', date: '2026-04-14', total: 54.06, label: 'Água, maionese e salsa', items: [{ description: 'Água mineral sem gás Select', qty: 3, unit: 'un', unitPrice: 1.99, totalPrice: 5.97, resourceType: 'product', resourceId: 'prd_agua_510' }, { description: 'Maionese Le Chef Vigor sachê 1kg', qty: 3, unit: 'un', unitPrice: 14.5, totalPrice: 43.5, resourceType: 'ingredient', resourceId: 'ing_maionese_ind' }, { description: 'Salsa unidade', qty: 1, unit: 'un', unitPrice: 3.99, totalPrice: 3.99, resourceType: 'ingredient', resourceId: 'ing_cheiro_verde' }, { description: 'Sacola reutilizável', qty: 4, unit: 'un', unitPrice: 0.15, totalPrice: 0.6, resourceType: 'other', resourceId: 'itm_sacola_reutilizavel' }] },
  { id: 'E012', key: '2026-04-21-fonte-nova-19-93', file: 'E012_fonte_nova_2026-04-21_total_19-93.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Mercado Fonte Nova Recreio Ltda', date: '2026-04-21', total: 19.93, label: 'Bebidas e água', items: [{ description: 'Água Lindoya 510ml', qty: 1, unit: 'un', unitPrice: 1.89, totalPrice: 1.89, resourceType: 'product', resourceId: 'prd_agua_510' }, { description: 'Sprite 600ml', qty: 1, unit: 'un', unitPrice: 6.35, totalPrice: 6.35, resourceType: 'other', resourceId: 'itm_sprite_600ml' }, { description: 'Água Lindoya 5L', qty: 1, unit: 'un', unitPrice: 11.69, totalPrice: 11.69, resourceType: 'other', resourceId: 'itm_agua_5l' }] },
  { id: 'E013', key: '2026-04-13-os-balancas-180-00', file: 'E013_os_balancas_2026-04-13_total_180-00.jpeg', kind: 'expense', inputType: 'payment_receipt', supplier: '3B-Balanças Máquinas e Ferragens', date: '2026-04-13', total: 180, label: 'Reparo elétrico/fiação em forno', notes: 'Manutenção de equipamento; registrar como gasto de manutenção.', expenseCategory: 'maintenance' },
  { id: 'E014', key: '2026-05-04-comercial-krill-5-90', file: 'E014_comercial_krill_2026-05-04_total_5-90.jpeg', kind: 'expense', inputType: 'payment_receipt', supplier: 'Comercial Krill', date: '2026-05-04', total: 5.9, label: 'Fita adesiva', notes: 'Sem valor fiscal; registrar apenas como gasto.', expenseCategory: 'other' },
  { id: 'E015', key: '2026-04-25-atacadao-144-54', file: 'E015_atacadao_2026-04-25_total_144-54.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Atacadão', date: '2026-04-25', total: 144.54, label: 'Alimentos e bebidas', items: [{ description: 'Queijo mussarela fatiado', qty: 2, unit: 'un', unitPrice: 17.9, totalPrice: 35.8, resourceType: 'ingredient', resourceId: 'ing_mucarela' }, { description: 'Requeijão Catupiry 4 queijos 1,010kg', qty: 1, unit: 'un', unitPrice: 49.9, totalPrice: 49.9, resourceType: 'ingredient', resourceId: 'ing_4queijos' }, { description: 'Schweppes Citrus lata 6x350ml', qty: 1, unit: 'pct', unitPrice: 24.54, totalPrice: 24.54, resourceType: 'product', resourceId: 'prd_schweppes_350' }, { description: 'Sprite lata 6x350ml', qty: 1, unit: 'pct', unitPrice: 21.54, totalPrice: 21.54, resourceType: 'product', resourceId: 'prd_sprite_350' }, { description: 'Tomate italiano por kg', qty: 0.89, unit: 'kg', unitPrice: 13.8, totalPrice: 12.28, resourceType: 'ingredient', resourceId: 'ing_tomate' }, { description: 'Item de sardinha ilegível', qty: 2, unit: 'un', unitPrice: 0.24, totalPrice: 0.48, resourceType: 'other', resourceId: 'itm_sardinha_revisar', evidenceType: 'review' }] },
  { id: 'E016', key: '2026-05-04-padaria-versailles-190-00', file: 'E016_padaria_versailles_2026-05-04_total_190-00.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Padaria Versailles 24 Horas', date: '2026-05-04', total: 190, label: 'Pão francês com parmesão', items: [{ description: 'Pão francês com parmesão', qty: 190, unit: 'un', unitPrice: 1, totalPrice: 190, resourceType: 'ingredient', resourceId: 'ing_pao_parmesao_pronto', evidenceType: 'review', notes: 'Cupom lançado como diversos; confirmar quantidade real antes de usar como custo ativo.' }] },
  { id: 'E017', key: '2026-05-06-mega-g-orcamento-parcial', file: 'E017_mega_g_orcamento_2026-05-06_parcial.png', kind: 'input', inputType: 'quote', supplier: 'Mega G Alimentos', date: '2026-05-06', total: 0, label: 'Orçamento Mega G parcial', notes: 'Orçamento parcial de bebidas, batata, óleos e maioneses. Não altera custo ativo sem orçamento completo.' },
  { id: 'E018', key: '2026-05-05-frigo-noronha-130-49', file: 'E018_frigo_noronha_2026-05-05_total_130-49.jpeg', kind: 'purchase', inputType: 'order', supplier: 'Frigo Noronha', date: '2026-05-05', total: 130.49, label: 'Fraldinha bovina', items: [{ description: 'Fraldinha bovina', qty: 3.262, unit: 'kg', unitPrice: 40, totalPrice: 130.49, resourceType: 'ingredient', resourceId: 'ing_fraldinha', evidenceType: 'review', notes: 'Venda simples, não fiscal.' }] },
  { id: 'E019', key: '2026-05-06-samppel-orcamento-522-00', file: 'E019_samppel_orcamento_2026-05-06_total_522-00.png', kind: 'input', inputType: 'quote', supplier: 'Samppel Embalagens', date: '2026-05-06', total: 522, label: 'Orçamento Samppel embalagens', notes: 'Orçamento de barreira de gordura e sacos de lixo; não confirmar compra nem custo ativo sem validação.' },
  { id: 'E020', key: '2026-05-09-poupaki-87-17', file: 'E020_poupaki_2026-05-09_total_87-17.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Poupaki Atacadista Ltda', date: '2026-05-09', total: 87.17, label: 'Bebidas e cheiro-verde', items: [{ description: 'Schweppes lata', qty: 2, unit: 'un', unitPrice: 4.19, totalPrice: 8.38, resourceType: 'product', resourceId: 'prd_schweppes_350' }, { description: 'Chá Leão Ice Tea 450ml', qty: 2, unit: 'un', unitPrice: 4.59, totalPrice: 9.18, resourceType: 'product', resourceId: 'prd_garrafa_450' }, { description: 'Cheiro-verde Sugimoto', qty: 1, unit: 'un', unitPrice: 4.39, totalPrice: 4.39, resourceType: 'ingredient', resourceId: 'ing_cheiro_verde' }, { description: 'Coca-Cola 350ml', qty: 12, unit: 'un', unitPrice: 3.79, totalPrice: 45.48, resourceType: 'product', resourceId: 'prd_coca' }, { description: 'Sprite 350ml', qty: 6, unit: 'un', unitPrice: 3.29, totalPrice: 19.74, resourceType: 'product', resourceId: 'prd_sprite_350' }] },
  { id: 'E021', key: '2026-05-12-eletrica-rocar-279-90', file: 'E021_eletrica_rocar_2026-05-12_total_279-90.jpeg', kind: 'expense', inputType: 'payment_receipt', supplier: 'Elétrica Rocar', date: '2026-05-12', total: 279.9, label: 'Serviço/equipamento elétrico', notes: 'Recibo manuscrito com comprovante de cartão. Registrar como manutenção/equipamento, sem ficha técnica.', expenseCategory: 'maintenance' },
  { id: 'E022', key: '2026-05-12-matsuo-36-45', file: 'E022_matsuo_2026-05-12_total_36-45.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'F. M. E. Matsuo Ltda EPP', date: '2026-05-12', total: 36.45, label: 'Óleo e isqueiro', items: [{ description: 'Óleo de soja Coamo 900ml', qty: 4, unit: 'un', unitPrice: 7.99, totalPrice: 31.96, resourceType: 'other', resourceId: 'itm_oleo_soja_coamo_900ml' }, { description: 'Isqueiro Bic comum médio', qty: 1, unit: 'un', unitPrice: 4.49, totalPrice: 4.49, resourceType: 'other', resourceId: 'itm_isqueiro_bic' }] },
  { id: 'E023', key: '2026-05-12-fonte-nova-60-86', file: 'E023_fonte_nova_2026-05-12_total_60-86.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Mercado Fonte Nova Recreio Ltda', date: '2026-05-12', total: 60.86, label: 'Mussarela, água e tomate', items: [{ description: 'Mussarela por kg', qty: 0.514, unit: 'kg', unitPrice: 59.99, totalPrice: 30.83, resourceType: 'ingredient', resourceId: 'ing_mucarela' }, { description: 'Água 6L', qty: 1, unit: 'un', unitPrice: 8.99, totalPrice: 8.99, resourceType: 'other', resourceId: 'itm_agua_6l' }, { description: 'Tomate italiano por kg', qty: 1.755, unit: 'kg', unitPrice: 11.99, totalPrice: 21.04, resourceType: 'ingredient', resourceId: 'ing_tomate' }] },
  { id: 'E024', key: '2026-05-12-nc-presentes-24-00', file: 'E024_nc_presentes_2026-05-12_total_24-00.jpeg', kind: 'expense', inputType: 'invoice', supplier: 'NC Presentes', date: '2026-05-12', total: 24, label: 'Processador manual', notes: 'Utensílio/equipamento de cozinha; registrar como gasto operacional.', expenseCategory: 'other' },
  { id: 'E025', key: '2026-05-12-infinitepay-958-68', file: 'E025_infinitepay_2026-05-12_total_958-68.jpeg', kind: 'input', inputType: 'payment_receipt', supplier: 'InfinitePay / Orlenildo Soares de Morais', date: '2026-05-12', total: 958.68, label: 'Comprovante de pagamento do banho-maria', notes: 'Comprovante vinculado ao pedido E026; não traz produto detalhado.' },
  { id: 'E026', key: '2026-05-12-marketup-pedido-475-900-00', file: 'E026_marketup_pedido_475_2026-05-12_total_900-00.jpeg', kind: 'expense', inputType: 'order', supplier: 'OR Inox Equipamentos Industriais', date: '2026-05-12', total: 900, label: 'Rechaud banho-maria 4 cubas', notes: 'Equipamento de operação; pagamento relacionado ao comprovante E025.', expenseCategory: 'other' },
  { id: 'E027', key: '2026-05-16-fonte-nova-18-36', file: 'E027_fonte_nova_2026-05-16_total_18-36.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Mercado Fonte Nova Recreio Ltda', date: '2026-05-16', total: 18.36, label: 'Fanta lata 350ml', items: [{ description: 'Fanta lata 350ml', qty: 4, unit: 'un', unitPrice: 4.59, totalPrice: 18.36, resourceType: 'product', resourceId: 'prd_fanta' }] },
  { id: 'E028', key: 'data-nao-visivel-etiqueta-laticinio-25-95', file: 'E028_etiqueta_laticinio_total_25-95.jpeg', kind: 'input', inputType: 'other', supplier: 'Fonte Nova Supermercados / Lacon', date: '', total: 25.95, label: 'Etiqueta de laticínio não identificado', notes: 'Nome do produto não legível. Manter como evidência para revisão, sem atualizar custo.' },
  { id: 'E029', key: 'data-nao-visivel-padaria-versailles-pao-com-parmesao-189-00', file: 'E029_padaria_versailles_pao_com_parmesao_total_189-00.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Padaria Versailles 24 Horas', date: '', total: 189, label: 'Pão francês com parmesão', items: [{ description: 'Pão francês com parmesão', qty: 100, unit: 'un', unitPrice: 1.89, totalPrice: 189, resourceType: 'ingredient', resourceId: 'ing_pao_parmesao_pronto' }], notes: 'Data não visível; anotação manual indica pão francês com parmesão.' },
  { id: 'E030', key: '2026-04-22-sendas-28-70', file: 'E030_sendas_2026-04-22_total_28-70.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Sendas Distribuidora S/A', date: '2026-04-22', total: 28.7, label: 'Óleo de algodão', items: [{ description: 'Óleo de algodão Liza 900ml', qty: 2, unit: 'fr', unitPrice: 14.35, totalPrice: 28.7, resourceType: 'ingredient', resourceId: 'ing_oleo_algodao' }] },
  { id: 'E031', key: '2026-04-25-fonte-nova-45-53', file: 'E031_fonte_nova_2026-04-25_total_45-53.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Mercado Fonte Nova Recreio Ltda', date: '2026-04-25', total: 45.53, label: 'Linguiça Aurora', items: [{ description: 'Linguiça Aurora em bandeja por kg', qty: 0.86, unit: 'kg', unitPrice: 25.99, totalPrice: 22.35, resourceType: 'ingredient', resourceId: 'ing_linguica' }, { description: 'Linguiça Aurora em bandeja por kg', qty: 0.892, unit: 'kg', unitPrice: 25.99, totalPrice: 23.18, resourceType: 'ingredient', resourceId: 'ing_linguica' }] },
  { id: 'E032', key: '2026-05-07-ikoa-plast-88-10', file: 'E032_ikoa_plast_2026-05-07_total_88-10.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Ikoa Plast Comércio de Embalagens', date: '2026-05-07', total: 88.1, label: 'Embalagens', items: [{ description: 'Papel manteiga Wyda 29x50', qty: 1, unit: 'un', unitPrice: 29, totalPrice: 29, resourceType: 'packaging', resourceId: 'pkg_lanche' }, { description: 'Embalagem Starpack Multi 708 PC 50 un', qty: 3, unit: 'pc', unitPrice: 19.7, totalPrice: 59.1, resourceType: 'packaging', resourceId: 'pkg_potinho_60' }] },
  { id: 'E033', key: '2026-05-07-wms-supermercados-290-35', file: 'E033_wms_supermercados_2026-05-07_total_290-35.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'WMS Supermercados do Brasil', date: '2026-05-07', total: 290.35, label: 'Alimentos e bebidas', evidenceType: 'review', notes: 'Documento marcado como não fiscal no impresso; usar como evidência de revisão.', items: [{ description: 'Queijo mussarela/panela', qty: 1, unit: 'un', unitPrice: 49.5, totalPrice: 49.5, resourceType: 'ingredient', resourceId: 'ing_mucarela', evidenceType: 'review' }, { description: 'Água mineral Petrópolis 12x510ml', qty: 12, unit: 'un', unitPrice: 1.19, totalPrice: 14.28, resourceType: 'product', resourceId: 'prd_agua_510', evidenceType: 'review' }, { description: 'Água mineral com gás 12x510ml', qty: 12, unit: 'un', unitPrice: 2.19, totalPrice: 26.28, resourceType: 'product', resourceId: 'prd_agua_gas_510', evidenceType: 'review' }, { description: 'Tomate italiano por kg', qty: 1.865, unit: 'kg', unitPrice: 13.5, totalPrice: 25.18, resourceType: 'ingredient', resourceId: 'ing_tomate', evidenceType: 'review' }, { description: 'Limão Taiti por kg', qty: 1.365, unit: 'kg', unitPrice: 1.95, totalPrice: 2.66, resourceType: 'ingredient', resourceId: 'ing_limao', evidenceType: 'review' }, { description: 'Cheiro-verde', qty: 1, unit: 'un', unitPrice: 1.95, totalPrice: 1.95, resourceType: 'ingredient', resourceId: 'ing_cheiro_verde', evidenceType: 'review' }, { description: 'Coca-Cola PET 2L', qty: 2, unit: 'un', unitPrice: 7.99, totalPrice: 15.98, resourceType: 'product', resourceId: 'prd_coca_2l', evidenceType: 'review' }, { description: 'Requeijão Catupiry 4 queijos 1,010kg', qty: 2, unit: 'un', unitPrice: 49.9, totalPrice: 99.8, resourceType: 'ingredient', resourceId: 'ing_4queijos', evidenceType: 'review' }, { description: 'Requeijão Catupiry bisnaga 1,5kg', qty: 1, unit: 'un', unitPrice: 66.9, totalPrice: 66.9, resourceType: 'ingredient', resourceId: 'ing_catupiry', evidenceType: 'review' }] },
  { id: 'E035', key: '2026-05-23-fonte-nova-fraldinha-59-03', file: 'E035_fraldinha_bovina_etiqueta_2026-05-23_total_59-03.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Fonte Nova Supermercados', date: '2026-05-23', total: 59.03, label: 'Fraldinha bovina etiqueta', items: [{ description: 'Fraldinha bovina embalada', qty: 1.476, unit: 'kg', unitPrice: 39.99, totalPrice: 59.03, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }] },
  { id: 'E036', key: '2026-04-26-sendas-151-03', file: 'E036_sendas_2026-04-26_total_151-03.jpeg', kind: 'purchase', inputType: 'invoice', supplier: 'Sendas Distribuidora S/A', date: '2026-04-26', total: 151.03, label: 'Alimentos e limpeza', items: [{ description: 'Item Mani Szura 500g, revisar', qty: 1, unit: 'un', unitPrice: 18.7, totalPrice: 18.7, resourceType: 'other', resourceId: 'itm_revisar_mani_szura', evidenceType: 'review' }, { description: 'Produto SRP 380ml multi, revisar', qty: 1, unit: 'un', unitPrice: 14.9, totalPrice: 14.9, resourceType: 'other', resourceId: 'itm_revisar_srp_multi', evidenceType: 'review' }, { description: 'Mussarela Piracanjuba por kg', qty: 0.538, unit: 'kg', unitPrice: 41.9, totalPrice: 22.54, resourceType: 'ingredient', resourceId: 'ing_mucarela' }, { description: 'Lava-louças/detergente 5L neutro', qty: 1, unit: 'gl', unitPrice: 16.5, totalPrice: 16.5, resourceType: 'other', resourceId: 'itm_detergente_5l' }, { description: 'Requeijão Catupiry 1,5kg', qty: 1, unit: 'un', unitPrice: 66.4, totalPrice: 66.4, resourceType: 'ingredient', resourceId: 'ing_catupiry' }, { description: 'Coca-Cola sem açúcar 2,5L', qty: 1, unit: 'un', unitPrice: 11.99, totalPrice: 11.99, resourceType: 'other', resourceId: 'itm_consumo_interno_coca_zero_2_5l', notes: 'Marcado no índice como não adicionar, consumo interno.' }] },
];

const missingEvidence = {
  id: 'E034',
  file: 'E034_poupaki_2026-05-09_total_42-74.jpeg',
  note: 'Citada no índice original, mas o arquivo não estava presente na pasta evidências no momento da importação.',
};

const activeCostUpdates = [
  { type: 'ingredients', id: 'ing_pao_parmesao_pronto', purchaseQty: 100, purchaseCost: 189, sourceType: 'documented', sourceReference: 'Compra sem data visível: Pão francês com parmesão, 100 un a R$ 1,89 (Padaria Versailles, E029).' },
  { type: 'ingredients', id: 'ing_fraldinha', purchaseQty: 1476, purchaseCost: 59.03, sourceType: 'documented', sourceReference: 'Última compra comprovada em 2026-05-23: Fraldinha bovina embalada, 1,476 kg a R$ 39,99/kg (Fonte Nova Supermercados, E035).' },
  { type: 'ingredients', id: 'ing_linguica', purchaseQty: 1752, purchaseCost: 45.53, sourceType: 'documented', sourceReference: 'Última compra comprovada em 2026-04-25: Linguiça Aurora em bandeja, 1,752 kg a R$ 25,99/kg (Mercado Fonte Nova, E031).' },
  { type: 'ingredients', id: 'ing_mucarela', purchaseQty: 514, purchaseCost: 30.83, sourceType: 'documented', sourceReference: 'Última compra comprovada em 2026-05-12: Mussarela, 0,514 kg a R$ 59,99/kg (Mercado Fonte Nova, E023).' },
  { type: 'ingredients', id: 'ing_catupiry', purchaseQty: 1500, purchaseCost: 66.9, sourceType: 'review', sourceReference: 'Referência recente em 2026-05-07: Requeijão Catupiry bisnaga 1,5kg por R$ 66,90 (WMS, E033; comprovante marcado como não fiscal, revisar).' },
  { type: 'ingredients', id: 'ing_tomate', purchaseQty: 1755, purchaseCost: 21.04, sourceType: 'documented', sourceReference: 'Última compra comprovada em 2026-05-12: Tomate italiano, 1,755 kg a R$ 11,99/kg (Mercado Fonte Nova, E023).' },
  { type: 'ingredients', id: 'ing_cebola', purchaseQty: 870, purchaseCost: 4.33, sourceType: 'documented', sourceReference: 'Última compra comprovada em 2026-04-17: Cebola, 0,870 kg a R$ 4,98/kg (Irmãos Lopes, E007).' },
  { type: 'ingredients', id: 'ing_oleo_algodao', purchaseQty: 1800, purchaseCost: 28.7, sourceType: 'documented', sourceReference: 'Última compra comprovada em 2026-04-22: Óleo de algodão Liza, 2 frascos de 900ml por R$ 28,70 (Sendas, E030).' },
];

function inputTitle(entry) {
  const labels = {
    invoice: 'Nota fiscal',
    quote: 'Orçamento',
    payment_receipt: 'Comprovante',
    order: 'Pedido',
    other: 'Evidência',
  };
  return `${labels[entry.inputType] || 'Evidência'} ${entry.label}`;
}

function importEntries() {
  const db = readJson(DB_PATH);
  db.inputs ||= [];
  db.purchaseOrders ||= [];
  db.purchaseItems ||= [];
  db.expenseEntries ||= [];
  db.suppliers ||= [];

  const manifestRows = [];

  for (const entry of evidences) {
    const supplier = addSupplier(db, entry.supplier);
    const filePath = copyEvidenceFile(entry);
    const inputId = stableId('inp', entry.key);
    const evidenceType = entry.evidenceType || (entry.kind === 'input' && entry.inputType === 'quote' ? 'review' : 'documented');

    upsertById(db.inputs, {
      id: inputId,
      scope: 'gyros',
      title: inputTitle(entry),
      inputType: entry.inputType || 'other',
      sourceChannel: 'physical_store',
      supplierId: supplier,
      supplierName: entry.supplier,
      documentNumber: entry.id,
      date: entry.date || '',
      paymentMethod: entry.kind === 'input' && entry.inputType === 'quote' ? 'Não se aplica' : '',
      paymentStatus: entry.kind === 'input' && entry.inputType === 'quote' ? 'pending' : 'paid',
      totalAmount: entry.total || 0,
      fileLabel: filePath ? path.basename(filePath) : entry.file,
      filePath,
      filePaths: filePath ? [filePath] : [],
      fileUrl: '',
      notes: entry.notes || '',
      evidenceType,
      evidenceSource: 'Lote evidencias_sem_duplicatas importado em 2026-05-26',
      code: `INP_${slugify(entry.key).replace(/-/g, '_').toUpperCase()}`,
      description: entry.label,
    });

    if (entry.kind === 'purchase') {
      const orderId = stableId('ord', entry.key);
      upsertById(db.purchaseOrders, {
        id: orderId,
        code: `PO_${slugify(entry.key).replace(/-/g, '_').toUpperCase()}`,
        scope: 'gyros',
        supplierId: supplier,
        supplierName: entry.supplier,
        label: entry.label,
        date: entry.date || '',
        documentNumber: entry.id,
        paymentMethod: '',
        paymentStatus: 'paid',
        totalAmount: entry.total || 0,
        inputIds: [inputId],
        notes: entry.notes || '',
        evidenceType,
        evidenceSource: 'Compra importada do lote evidencias_sem_duplicatas com arquivo vinculado em docs/inputs/2026',
      });
      const orderItems = (entry.items || []).map((row, index) => purchaseItem(orderId, supplier, row, index));
      db.purchaseItems = db.purchaseItems.filter(item => item.orderId !== orderId).concat(orderItems);
    }

    if (entry.kind === 'expense') {
      upsertById(db.expenseEntries, {
        id: stableId('exp', entry.key),
        code: `EXP_${slugify(entry.key).replace(/-/g, '_').toUpperCase()}`,
        scope: 'gyros',
        category: entry.expenseCategory || 'other',
        supplierId: supplier,
        supplierName: entry.supplier,
        fixedCostId: '',
        label: entry.label,
        date: entry.date || '',
        referencePeriod: entry.date ? entry.date.slice(0, 7) : '',
        documentNumber: entry.id,
        paymentMethod: '',
        paymentStatus: 'paid',
        totalAmount: entry.total || 0,
        inputIds: [inputId],
        notes: entry.notes || '',
        evidenceType,
        evidenceSource: 'Gasto importado do lote evidencias_sem_duplicatas com arquivo vinculado em docs/inputs/2026',
      });
    }

    manifestRows.push({
      date: entry.date || 'sem data visível',
      type: entry.kind === 'expense' ? 'gasto' : entry.inputType,
      supplier: entry.supplier,
      label: entry.label,
      total: entry.total ? brl(entry.total) : 'parcial/revisar',
      input: inputId,
      order: entry.kind === 'purchase' ? stableId('ord', entry.key) : entry.kind === 'expense' ? stableId('exp', entry.key) : '—',
      filePath: filePath || `arquivo ausente: ${entry.file}`,
    });
  }

  for (const row of activeCostUpdates) {
    const list = db[row.type] || [];
    const item = list.find(item => item.id === row.id);
    if (!item) continue;
    item.purchaseQty = row.purchaseQty;
    item.purchaseCost = row.purchaseCost;
    item.sourceType = row.sourceType;
    item.sourceReference = row.sourceReference;
    item.evidenceType = row.sourceType;
    item.evidenceSource = row.sourceReference;
  }

  writeJson(DB_PATH, db);
  syncAppSeed(db);
  writeReferenceMarkdown(manifestRows);
  updateManifest(manifestRows);
}

function syncAppSeed(db) {
  const app = fs.readFileSync(APP_PATH, 'utf8');
  const seed = `const SEED_DATA = ${JSON.stringify(db)};\n`;
  const updated = app.replace(/^const SEED_DATA = .*?;\n/s, seed);
  if (updated === app) throw new Error('Nao encontrei o bloco SEED_DATA em app.js');
  fs.writeFileSync(APP_PATH, updated);
}

function writeReferenceMarkdown(rows) {
  ensureDir(path.dirname(REFERENCE_MD));
  const sourceMd = path.join(SOURCE_ROOT, 'itens_identificados.md');
  const original = fs.existsSync(sourceMd) ? fs.readFileSync(sourceMd, 'utf8') : '';
  const header = [
    '# Evidências sem duplicatas - importação 2026-05-26',
    '',
    'Lote importado para `docs/inputs/2026` como evidência/auditoria do PWA.',
    '',
    `Pendência: ${missingEvidence.id} (${missingEvidence.file}) foi citada no índice original, mas o arquivo não estava disponível na pasta de imagens.`,
    '',
    '## Arquivos importados',
    '',
    '| Data | Tipo | Fornecedor | Lançamento | Valor | Input/Gasto/Compra | Arquivo |',
    '|---|---|---|---|---:|---|---|',
    ...rows.map(row => `| ${row.date} | ${row.type} | ${row.supplier} | ${row.label} | ${row.total} | ${row.order === '—' ? row.input : `${row.input}<br>${row.order}`} | ${row.filePath} |`),
    '',
    '## Índice original',
    '',
    original,
  ].join('\n');
  fs.writeFileSync(REFERENCE_MD, `${header}\n`);
}

function updateManifest(rows) {
  const start = '<!-- evidencias-sem-duplicatas-2026-05-26:start -->';
  const end = '<!-- evidencias-sem-duplicatas-2026-05-26:end -->';
  const block = [
    start,
    '',
    '## Lote adicional - evidências sem duplicatas 2026-05-26',
    '',
    '| Data | Tipo | Fornecedor | Lançamento | Valor | Input | Compra/Gasto | Arquivos |',
    '|---|---|---|---|---:|---|---|---|',
    ...rows.map(row => `| ${row.date} | ${row.type} | ${row.supplier} | ${row.label} | ${row.total} | ${row.input} | ${row.order} | ${row.filePath} |`),
    `| — | pendência | — | ${missingEvidence.id}: arquivo ausente no lote | — | — | — | ${missingEvidence.file} |`,
    '',
    end,
  ].join('\n');
  const current = fs.existsSync(MANIFEST_PATH) ? fs.readFileSync(MANIFEST_PATH, 'utf8') : '# Manifesto de evidências 2026\n';
  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);
  const next = pattern.test(current) ? current.replace(pattern, block) : `${current.trim()}\n\n${block}\n`;
  fs.writeFileSync(MANIFEST_PATH, next);
}

importEntries();
