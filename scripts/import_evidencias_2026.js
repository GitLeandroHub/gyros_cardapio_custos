#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DB_PATH = path.join(ROOT, 'gyros-custos-cardapio.json');
const SOURCE_ROOT = path.join(ROOT, 'NFs-Comprovantes-OrçamentosConcluidos');
const DOCS_ROOT = path.join(ROOT, 'docs', 'inputs', '2026');
const MANIFEST_PATH = path.join(ROOT, 'docs', 'inputs', 'manifesto_evidencias_2026.md');
const PENDING_PATH = path.join(ROOT, 'pendencias.md');

function slugify(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function num(value) {
  return Number(value || 0);
}

function money(value) {
  if (typeof value === 'number') return value;
  return Number(String(value || '').replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.')) || 0;
}

function isoDate(value) {
  if (!value) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const m = String(value).match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : '';
}

function brl(value) {
  return (Number(value) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function extname(file) {
  return path.extname(file).toLowerCase() || '.txt';
}

function normalizeUnit(value = '') {
  const unit = slugify(value).replace(/-/g, '');
  if (!unit) return 'un';
  if (['un', 'unid', 'und', 'pc', 'pct'].includes(unit)) return 'un';
  if (['kg', 'g', 'mg', 'ml', 'l', 'lt', 'fr', 'frasco', 'bisnaga', 'bandeja', 'caixa', 'pacote', 'bd', 'gl'].includes(unit)) {
    if (unit === 'lt') return 'l';
    return unit;
  }
  return value || 'un';
}

function detectQtyFromItemText(text = '') {
  const match = text.match(/\((\d+(?:,\d+)?)\s*(un|unid|und|pc|pct|kg|g|ml|l|lt|fr|frasco)\)/i);
  if (!match) return null;
  return { qty: money(match[1]), unit: normalizeUnit(match[2]) };
}

function baseUnitFromDescription(text = '') {
  const normalized = slugify(text);
  if (normalized.includes(' kg')) return 'kg';
  if (normalized.includes(' ml') || normalized.includes(' litro') || normalized.includes(' l-')) return 'ml';
  if (normalized.includes(' lata') || normalized.includes(' long neck') || normalized.includes(' garrafa')) return 'un';
  return 'un';
}

function parseAutoItem(itemText, unitText) {
  const text = String(itemText || '').trim();
  const value = String(unitText || '').trim();
  const fromText = detectQtyFromItemText(text) || {};
  if (!text) return null;
  if (!value || /valores? unit[aá]rios diversos/i.test(value)) return null;

  let qty = fromText.qty || 1;
  let unit = fromText.unit || baseUnitFromDescription(text);
  let unitPrice = 0;
  let totalPrice = 0;

  let match = value.match(/(\d+(?:,\d+)?)\s*(kg|un|unid|und|pc|pct|fr|frasco|ml|l|lt)?\s*x\s*R\$\s*([\d.,]+)/i);
  if (match) {
    qty = money(match[1]);
    unit = normalizeUnit(match[2] || unit);
    unitPrice = money(match[3]);
    totalPrice = Number((qty * unitPrice).toFixed(2));
    return { description: text, qty, unit, unitPrice, totalPrice };
  }

  match = value.match(/R\$\s*([\d.,]+)\s*=\s*R\$\s*([\d.,]+)/i);
  if (match) {
    unitPrice = money(match[1]);
    totalPrice = money(match[2]);
    qty = fromText.qty || 1;
    unit = fromText.unit || unit;
    return { description: text, qty, unit, unitPrice, totalPrice };
  }

  match = value.match(/R\$\s*([\d.,]+)/i);
  if (match) {
    unitPrice = money(match[1]);
    totalPrice = Number((qty * unitPrice).toFixed(2));
    return { description: text, qty, unit, unitPrice, totalPrice };
  }

  return null;
}

function stableId(prefix, key) {
  return `${prefix}_${slugify(key).slice(0, 56)}`;
}

function titleCaseWords(value = '') {
  return String(value)
    .split(/\s+/)
    .filter(Boolean)
    .map(part => part[0].toUpperCase() + part.slice(1))
    .join(' ');
}

function supplierCode(name = '') {
  return `SUP_${slugify(name).replace(/-/g, '_').toUpperCase().slice(0, 36)}`;
}

function entryKey(date, supplierName, totalAmount, labelHint = '') {
  return [date, supplierName, labelHint, String(totalAmount).replace(/[^\d]/g, '')]
    .filter(Boolean)
    .map(slugify)
    .join('-');
}

function splitParts(value = '') {
  return String(value)
    .split(';')
    .map(part => part.trim())
    .filter(Boolean);
}

function copyFile(sourceRelative, destKey, index = 0) {
  const source = path.join(SOURCE_ROOT, sourceRelative);
  const monthDir = path.join(DOCS_ROOT, destKey.slice(0, 7));
  ensureDir(monthDir);
  const suffix = index > 0 ? `-p${index + 1}` : '';
  const destName = `${destKey}${suffix}${extname(sourceRelative)}`;
  const dest = path.join(monthDir, destName);
  fs.copyFileSync(source, dest);
  return path.relative(ROOT, dest).replace(/\\/g, '/');
}

function addPending(list, file, reason) {
  list.push({ file, reason });
}

function resourceLink(description = '') {
  const normalized = slugify(description);
  const other = key => ({ resourceType: 'other', resourceId: key || `itm_${normalized}` });
  if (!normalized) return other('');
  if (/baguete-parm|pao-com-parmes|pao-de-q-coquetel|parm-mus|pao-frances/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_pao_parmesao_pronto' };
  if (/tomate/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_tomate' };
  if (/salsa|cebolinha|cheiro/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_cheiro_verde' };
  if (/cebola/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_cebola' };
  if (/pimentao-vermelho/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_pimentao_vermelho' };
  if (/pimentao-amarelo/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_pimentao_amarelo' };
  if (/berinjela/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_berinjela' };
  if (/alho/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_alho' };
  if (/azeite/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_oleo_vinagre' };
  if (/mini-churros|churros/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_massa_churros' };
  if (/muss|mucarela|muarela|queijo-mussarela|qj-mus/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_mucarela' };
  if (/catupiry-1-5|req-catupiry-1-5|reo-catupiry-1-5|catupiry-sem-amido-1-5/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_catupiry' };
  if (/4-queijos/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_4queijos' };
  if (/lemon-pepper/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_lemon_pepper' };
  if (/paprica|p-doce-defumado/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_paprica_doce' };
  if (/fumaca/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_fumaca_po' };
  if (/bacon/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_bacon_cubos' };
  if (/batata-palito|pre-frita|batata-com-casca/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_batata' };
  if (/maionese|grill-junior/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_maionese_ind' };
  if (/manteiga/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_manteiga' };
  if (/cheddar|polenghi|hol-polen-ched/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_cheddar' };
  if (/oleo-de-algodao/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_oleo_algodao' };
  if (/agua-mineral.*com-gas|buonavita-com-gas/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_agua_gas_510' };
  if (/agua-mineral.*sem-gas|buonavita-sem-gas/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_agua_510' };
  if (/h2o-limao/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_h2o_500' };
  if (/limoneto/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_limoneto_500' };
  if (/schweppes-citrus/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_schweppes_350' };
  if (/budweiser/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_bud_330' };
  if (/heineken/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_heineken_330' };
  if (/sprite-lata-350|sprite-350/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_sprite_350' };
  if (/suco-del-valle-uva-290/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_delvalle_uva_290' };
  if (/barbecue/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_bbq' };
  if (/coca-cola-pet-2-l|coca-cola-2l/.test(normalized) && /zero|sem-acucar/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_coca_zero_2l' };
  if (/coca-cola-pet-2-l|coca-cola-2l/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_coca_2l' };
  if (/coca-cola.*350/.test(normalized) && /zero|sem-acucar|s-ac/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_coca_zero' };
  if (/coca-cola.*350/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_coca' };
  if (/guarana/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_guarana_350' };
  if (/fanta/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_fanta' };
  if (/ice-tea|cha-leao-ice-tea-450/.test(normalized) && /pessego/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_ice_tea_pessego_450' };
  if (/ice-tea|cha-leao-ice-tea-450/.test(normalized) && /limao/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_ice_tea_limao_450' };
  if (/ice-tea|cha-leao-ice-tea-450/.test(normalized)) return { resourceType: 'product', resourceId: 'prd_garrafa_450' };
  if (/papel-acoplado|interfolhas-papel/.test(normalized)) return { resourceType: 'packaging', resourceId: 'pkg_lanche' };
  if (/fraldinha/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_fraldinha' };
  if (/ling-tosc|linguica-tosc/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_linguica' };
  if (/bife-f-fgo|frango/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_frango' };
  if (/sache|mostarda-sache|catchup-sache|molho-de-pimenta-vermelha-sache/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_saches_mix' };
  if (/farofa/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_farofa_pronta' };
  if (/ketchup/.test(normalized)) return { resourceType: 'ingredient', resourceId: 'ing_ketchup' };
  return other(`itm_${normalized}`);
}

function item(description, qty, unit, unitPrice, opts = {}) {
  const link = opts.resourceType ? { resourceType: opts.resourceType, resourceId: opts.resourceId || '' } : resourceLink(description);
  const totalPrice = Number((opts.totalPrice != null ? opts.totalPrice : qty * unitPrice).toFixed(2));
  return {
    description,
    qty: Number(qty.toFixed ? qty.toFixed(3) : qty),
    unit: normalizeUnit(unit),
    unitPrice: Number(unitPrice.toFixed ? unitPrice.toFixed(4) : unitPrice),
    totalPrice,
    ...link
  };
}

function autoItems(entry) {
  if (Array.isArray(entry.items)) return entry.items.map(row => item(row.description, num(row.qty), row.unit || 'un', num(row.unitPrice), row));
  const names = splitParts(entry.itemsText);
  const values = splitParts(entry.unitText);
  if (!names.length) return [];
  if (values.length && values.length !== names.length) return [];
  return names.map((name, index) => {
    const parsed = parseAutoItem(name, values[index] || '');
    if (!parsed) return null;
    return item(parsed.description, parsed.qty, parsed.unit, parsed.unitPrice, { totalPrice: parsed.totalPrice });
  }).filter(Boolean);
}

const existingSupplierAliases = {
  'padaria versailles': 'sup_padaria',
  'padaria versailles 24 horas ltda': 'sup_padaria',
  'pmg comercio de frios e laticinios': 'sup_pmg',
  'bom clima embalagens': 'sup_bom_clima',
  'bom clima embalagens ltda': 'sup_bom_clima',
  'armazem sao vito': 'sup_armazem_sao_vito',
  'ikoa plast': 'sup_ikoa-plast-edido-2025-embalagens-em-geral',
  'or-inox': 'sup_or-inox-equipamentos',
  'or-inox-equipamentos-industriais': 'sup_or-inox-equipamentos',
  'orinox': 'sup_or-inox-equipamentos',
  'orinox-equipamentos-industriais': 'sup_or-inox-equipamentos'
};

const organizedEntries = [
  {
    key: '2026-03-25-chaveiro-benizio-70-00',
    date: '2026-03-25',
    supplierName: 'Chaveiro Benízio',
    paymentMethod: 'À vista',
    totalAmount: 70,
    inputType: 'payment_receipt',
    sourceChannel: 'physical_store',
    docType: 'cupom',
    label: 'Cópias de chaves tetras',
    itemsText: '2 cópias de chaves tetras',
    unitText: '2 x R$ 35,00',
    files: ['organizado_comprovantes/imagens/4AD28656-8282-4FA1-9C46-2CF9E14334F3.jpeg']
  },
  {
    key: '2026-03-31-padaria-versailles-375-00',
    date: '2026-03-31',
    supplierName: 'Padaria Versailles',
    paymentMethod: 'Cartão de débito',
    totalAmount: 375,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Pão Francês com Parmesão',
    items: [item('Pão Francês com Parmesão', 150, 'un', 2.50, { totalPrice: 375, resourceType: 'ingredient', resourceId: 'ing_pao_parmesao_pronto' })],
    notes: 'Primeira compra documentada do Pão Francês com Parmesão pronto na Padaria Versailles: 150 unidades a R$ 2,50 por unidade.',
    files: ['organizado_comprovantes/imagens/2982D523-9BA2-4A05-B431-15615C0C884C.jpeg']
  },
  {
    key: '2026-03-31-mercado-fonte-nova-37-59',
    date: '2026-03-31',
    supplierName: 'Mercado Fonte Nova Recreio Ltda',
    paymentMethod: 'Cartão de débito',
    totalAmount: 37.59,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Mercado Fonte Nova - hortifruti 31/03',
    itemsText: 'Sal refinado 1kg; cebola nacional; limão taiti; salsa/cheiro; tomate italiano',
    unitText: 'R$ 3,59; R$ 4,74; R$ 5,90; R$ 7,98; R$ 15,38',
    files: ['organizado_comprovantes/imagens/119ED700-BA50-49A6-BE00-4B8F72B8CC4A.jpeg']
  },
  {
    key: '2026-04-01-comanda-churros-119-60',
    date: '2026-04-01',
    supplierName: 'Fornecedor não identificado (comanda manual + Laranjinha Itaú)',
    paymentMethod: 'Cartão de débito',
    totalAmount: 119.60,
    inputType: 'payment_receipt',
    sourceChannel: 'physical_store',
    docType: 'comanda',
    label: 'Churros',
    itemsText: 'Churros',
    unitText: '4 x R$ 29,90',
    files: ['organizado_comprovantes/imagens/27974E6B-25AA-471E-957C-43D56DA4945C.jpeg']
  },
  {
    key: '2026-04-01-tenda-atacado-67-08',
    date: '2026-04-01',
    supplierName: 'Tenda Atacado Ltda (VL Galvão)',
    paymentMethod: 'Cartão de débito',
    totalAmount: 67.08,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Tenda Atacado - hortifruti e azeite',
    itemsText: 'Berinjela; pimentão vermelho; pimentão amarelo; alho triturado Select c/ sal; azeite extra virgem Select 500ml; sacola reutilizável',
    unitText: 'R$ 14,47; R$ 9,83; R$ 10,79; R$ 7,05; R$ 24,70; R$ 0,24',
    files: ['organizado_comprovantes/imagens/3C730B54-C015-4160-9435-A42B271ACF6A.jpeg']
  },
  {
    key: '2026-04-06-cnd-27-49-98',
    date: '2026-04-06',
    supplierName: 'CND 27 Comércio de Utilidades Ltda',
    paymentMethod: 'Cartão de crédito à vista',
    totalAmount: 49.98,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Moedor manual e processador',
    itemsText: 'Moedor manual; processador de alimentos',
    unitText: 'R$ 34,99; R$ 14,99',
    files: ['organizado_comprovantes/imagens/0802031B-9ED3-4F6A-8B59-E1FFED69CC0B.jpeg']
  },
  {
    key: '2026-04-08-fonte-nova-gop-23-26',
    date: '2026-04-08',
    supplierName: 'Mercado Fonte Nova GOP',
    paymentMethod: 'Cartão de crédito',
    totalAmount: 23.26,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Fonte Nova GOP - água, Sprite e cola',
    itemsText: 'Água Lindoya 1,5L; Sprite PET 2L; cola Super Bonder 3g',
    unitText: 'R$ 7,18; R$ 9,99; R$ 6,09',
    files: ['organizado_comprovantes/imagens/B7416F0B-51D6-4367-9B3B-4A0C4D5E1C34.jpeg']
  },
  {
    key: '2026-04-09-fonte-nova-fraldinha-44-63',
    date: '2026-04-09',
    supplierName: 'Mercado Fonte Nova Recreio Ltda',
    paymentMethod: 'Cartão de débito',
    totalAmount: 44.63,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Fraldinha bovina',
    itemsText: 'Fraldinha bovina',
    unitText: '1,116 kg x R$ 39,99 = R$ 44,63',
    files: ['organizado_comprovantes/imagens/E9071FB2-5CC1-4C7C-BCB9-9CD2799F6F86.jpeg']
  },
  {
    key: '2026-04-10-ikoa-plast-59-10',
    date: '2026-04-10',
    supplierName: 'IKOA Plast Comércio / EDIDO 2025 Embalagens em Geral',
    paymentMethod: 'Cartão de crédito à vista',
    totalAmount: 59.10,
    inputType: 'order',
    sourceChannel: 'physical_store',
    docType: 'pedido',
    label: 'Airpack Mussi 70B',
    itemsText: 'Airpack Mussi 70B pct c/ 50 unidades',
    unitText: '3 x R$ 19,70',
    files: ['organizado_comprovantes/imagens/4F41CC91-8A6C-46F1-9A57-6B9C86654A78.jpeg']
  },
  {
    key: '2026-04-10-boi-preto-337-99',
    date: '2026-04-10',
    supplierName: 'Casa de Carne Boi Preto Ltda',
    paymentMethod: 'Dinheiro',
    totalAmount: 337.99,
    inputType: 'order',
    sourceChannel: 'physical_store',
    docType: 'pedido-manual',
    label: 'Casa de Carne Boi Preto - fraldinha e sobrecoxa',
    items: [
      item('Fraldinha - volume 1', 3.056, 'kg', 42.99, { totalPrice: 131.38, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Fraldinha - volume 2', 2.216, 'kg', 42.99, { totalPrice: 95.27, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Fraldinha - volume 3', 2.084, 'kg', 42.99, { totalPrice: 89.59, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Sobrecoxa de frango', 1.088, 'kg', 19.99, { totalPrice: 21.75, resourceType: 'ingredient', resourceId: 'ing_frango' })
    ],
    files: ['organizado_comprovantes/imagens/A0D24A63-BA55-4E1B-BFB4-8DA12322119F.jpeg']
  },
  {
    key: '2026-04-11-sendas-619-40',
    date: '2026-04-11',
    supplierName: 'Sendas Distribuidora S/A',
    paymentMethod: 'Cartão de débito',
    totalAmount: 619.40,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Sendas 11/04 - mercado misto',
    items: [
      item('Linguiça toscana Aurora FC', 3.032, 'kg', 24.90, { totalPrice: 75.49 }),
      item('Bife de frango Itabom FC', 2.204, 'kg', 24.55, { totalPrice: 54.10 }),
      item('Muçarela do Valle fatiada', 0.780, 'kg', 50.99, { totalPrice: 39.77 }),
      item('Salsa e cebolinha', 2, 'un', 2.99),
      item('Requeijão Catupiry 1,5kg', 1, 'un', 66.40, { resourceType: 'ingredient', resourceId: 'ing_catupiry' }),
      item('Saleiro Santana clear', 3, 'un', 1.59, { resourceType: 'other', resourceId: 'itm_saleiro_santana_clear' }),
      item('Bisnaga plástica 350 most', 1, 'un', 3.29, { resourceType: 'other', resourceId: 'itm_bisnaga_plastica_350' }),
      item('Esponja multiuso c/4', 2, 'un', 3.49, { resourceType: 'other', resourceId: 'itm_esponja_multiuso_c4' }),
      item('Esponja Scotch-Brite metallic', 2, 'un', 8.09, { resourceType: 'other', resourceId: 'itm_esponja_scotch_brite_metallic' }),
      item('Álcool gel Luar 500ml', 2, 'un', 7.99, { resourceType: 'other', resourceId: 'itm_alcool_gel_luar_500' }),
      item('Veja Multi 500ml azul', 2, 'un', 5.49, { resourceType: 'other', resourceId: 'itm_veja_multi_500_azul' }),
      item('Funil Plasdu', 1, 'un', 4.59, { resourceType: 'other', resourceId: 'itm_funil_plasdu' }),
      item('Detergente Limpol 5L neutro', 1, 'un', 19.90, { resourceType: 'other', resourceId: 'itm_detergente_limpol_5l' }),
      item('Azeite Andor 500ml', 1, 'un', 26.90, { resourceType: 'ingredient', resourceId: 'ing_oleo_vinagre' }),
      item('Pote Praf Red 500ml', 1, 'un', 32.19, { resourceType: 'other', resourceId: 'itm_pote_praf_red_500ml' }),
      item('Toalha Kitchen 2R', 1, 'un', 5.49, { resourceType: 'other', resourceId: 'itm_toalha_kitchen_2r' }),
      item('Coca-Cola 350ml', 24, 'un', 4.09, { totalPrice: 98.16, resourceType: 'product', resourceId: 'prd_coca' }),
      item('Coca-Cola Zero 350ml', 24, 'un', 4.09, { totalPrice: 98.16, resourceType: 'product', resourceId: 'prd_coca_zero' }),
      item('Sprite 2L', 1, 'un', 9.79, { resourceType: 'other', resourceId: 'itm_sprite_2l' }),
      item('Toalha Yuri Fit 1000', 1, 'un', 24.30, { resourceType: 'other', resourceId: 'itm_toalha_yuri_fit_1000' })
    ],
    files: [
      'organizado_comprovantes/imagens/4C4A25E7-EE7F-448F-8A8B-8BC2F10283E6-1_2.jpeg',
      'organizado_comprovantes/imagens/4C4A25E7-EE7F-448F-8A8B-8BC2F10283E6-2_2.jpeg'
    ]
  },
  {
    key: '2026-04-11-fonte-nova-117-31',
    date: '2026-04-11',
    supplierName: 'Mercado Fonte Nova Recreio Ltda',
    paymentMethod: 'Cartão de débito',
    totalAmount: 117.31,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Mercado Fonte Nova - contrafilé',
    items: [
      item('Prod. diversos FLV kg', 1.820, 'kg', 3.99, { totalPrice: 7.26, resourceType: 'other', resourceId: 'itm_prod_diversos_flv' }),
      item('Contrafilé a vácuo kg', 2.752, 'kg', 39.99, { totalPrice: 110.05, resourceType: 'other', resourceId: 'itm_contrafile_vacuo' })
    ],
    files: ['organizado_comprovantes/imagens/E05CC744-318D-4152-9CFA-622A52A2539B.jpeg']
  },
  {
    key: '2026-04-11-padaria-versailles-189-66',
    date: '2026-04-11',
    supplierName: 'Padaria Versailles',
    paymentMethod: 'Cartão de débito',
    totalAmount: 189.66,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Pão Francês com Parmesão',
    items: [item('Pão Francês com Parmesão (~90g)', 100, 'un', 1.8966, { totalPrice: 189.66, resourceType: 'ingredient', resourceId: 'ing_pao_parmesao_pronto' })],
    notes: 'Compra reajustada do Pão Francês com Parmesão pronto na Padaria Versailles: 100 unidades por R$ 189,66 no total, equivalente a R$ 1,8966 por unidade.',
    files: ['organizado_comprovantes/imagens/2D5892ED-FF87-4B1E-A3C4-01C90C26C00F.jpeg']
  },
  {
    key: '2026-04-11-mercado-leonice-10-79',
    date: '2026-04-11',
    supplierName: 'Mercado Leonice',
    paymentMethod: 'Cartão',
    totalAmount: 10.79,
    inputType: 'payment_receipt',
    sourceChannel: 'physical_store',
    docType: 'controle-interno',
    label: 'Tomate Débora',
    itemsText: 'Tomate Débora',
    unitText: '0,900 kg x R$ 11,99 = R$ 10,79',
    files: ['organizado_comprovantes/imagens/8DC26A30-A9A0-4607-8E6C-4DD8B7199550.jpeg']
  }
];

const lot27Entries = [
  {
    key: '2026-01-29-dilson-rosa-233-00',
    date: '2026-01-29',
    supplierName: 'Dilson Rosa EPP',
    paymentMethod: 'Não informado',
    totalAmount: 233,
    inputType: 'order',
    sourceChannel: 'physical_store',
    docType: 'pedido',
    label: 'Peças para queimador',
    itemsText: 'Flexível aço malha/lonada M/F 1/2 x 1,00m (2 un); tela inox queimador 2250 KLRS (6 un); moldura p/ queimador 2.250 Kcal/h (6 un)',
    unitText: 'R$ 38,50; R$ 13,00; R$ 13,00',
    files: ['comprovantes_lote_27/imagens/03773780-2F7C-4080-B0AF-C979C7E7518D.jpeg']
  },
  {
    key: '2026-02-02-js-coifas-1470-00',
    date: '2026-02-02',
    supplierName: 'JS Comércio de Coifas',
    paymentMethod: 'Crédito em 10 parcelas',
    paymentStatus: 'paid',
    totalAmount: 1470,
    inputType: 'payment_receipt',
    sourceChannel: 'physical_store',
    docType: 'comprovante-pagamento',
    label: 'Mesa inox',
    items: [item('Mesa inox', 1, 'un', 1470, { resourceType: 'other', resourceId: 'itm_mesa_inox' })],
    notes: 'Comprovante PagBank com identificação manual de mesa inox.',
    files: ['comprovantes_lote_27/imagens/252D94EE-3EB2-4A54-A40A-CD05C0F803BE.jpeg']
  },
  {
    key: '2026-02-02-orinox-690-00',
    date: '2026-02-02',
    supplierName: 'OR INOX Equipamentos Industriais',
    paymentMethod: 'Cartão de crédito',
    totalAmount: 690,
    inputType: 'order',
    sourceChannel: 'physical_store',
    docType: 'pedido',
    label: 'Rechaud banho-maria',
    itemsText: 'Rechaud banho-maria 3 cubas de 5 litros, 110V',
    unitText: '1 un x R$ 690,00',
    files: ['comprovantes_lote_27/imagens/E0B7E0DA-C3C7-4C13-B643-2D6127F62677.jpeg']
  },
  {
    key: '2026-02-03-bvs-tablet-500-00',
    date: '2026-02-03',
    supplierName: 'BVS SucessoInfo',
    paymentMethod: 'Visa Electron + Visa parcelado',
    totalAmount: 500,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'cupom',
    label: 'Tablet 10"',
    itemsText: 'Tablet 10"',
    unitText: '1 un x R$ 500,00',
    files: ['comprovantes_lote_27/imagens/1255FB77-ED2A-47C5-9692-04368DF8B66B.jpeg']
  },
  {
    key: '2026-02-03-salamandra-2874-84',
    date: '2026-02-03',
    supplierName: 'Salamandra',
    sellerName: 'Editar',
    paymentMethod: 'Crédito parcelado emissor',
    paymentStatus: 'paid',
    totalAmount: 2874.84,
    inputType: 'payment_receipt',
    sourceChannel: 'online',
    docType: 'comprovante-pagamento',
    label: 'Salamandra',
    items: [
      item('Salamandra', 1, 'un', 2338.91, { totalPrice: 2338.91, resourceType: 'other', resourceId: 'itm_salamandra' }),
      item('Juros / financiamento do parcelamento', 1, 'un', 535.93, { totalPrice: 535.93, resourceType: 'other', resourceId: 'itm_juros_financiamento_salamandra' })
    ],
    notes: 'Comprovante financeiro com valor base de R$ 2.338,91 e total financiado de R$ 2.874,84 em 6 parcelas.',
    supplierNotes: 'Compra da salamandra realizada via Facebook Negócios.',
    files: ['comprovantes_lote_27/imagens/EE4DEEA0-8036-4693-AAE5-75A9C6015CD9.jpeg']
  },
  {
    key: '2026-02-18-bom-clima-15-50',
    date: '2026-02-18',
    supplierName: 'Bom Clima Embalagens Ltda',
    paymentMethod: 'Dinheiro',
    totalAmount: 15.50,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Limpa Inox 750 ml',
    itemsText: 'Limpa Inox 750 ml',
    unitText: '1 un x R$ 15,50',
    files: ['comprovantes_lote_27/imagens/8466185B-20CB-4AFC-81C4-55280F585158.jpeg']
  },
  {
    key: '2026-02-18-temper-condimentos-25-00',
    date: '2026-02-18',
    supplierName: 'Temper Condimentos e Embalagens Ltda',
    paymentMethod: 'Não informado',
    totalAmount: 33,
    inputType: 'order',
    sourceChannel: 'physical_store',
    docType: 'pedido-manual',
    label: 'Temperos secos',
    itemsText: 'P. doce defumado; lemon pepper; fumaça em pó',
    unitText: 'R$ 10,00; R$ 15,00; R$ 8,00',
    notes: 'Valores individuais confirmados manualmente como corretos pela operação.',
    files: ['comprovantes_lote_27/imagens/8EF50879-A86C-4606-8206-FB68A302264D.jpeg']
  },
  {
    key: '2026-02-27-fonte-nova-47-33',
    date: '2026-02-27',
    supplierName: 'Mercado Fonte Nova Recreio Ltda',
    paymentMethod: 'Dinheiro',
    totalAmount: 47.33,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Limpeza e utilidades',
    itemsText: 'Rodo Condor 40 cm; saco xadrez (4 un); Viking palhinha 750 ml; detergente Ypê coco 500 ml',
    unitText: 'R$ 19,99; 4 x R$ 5,49; R$ 2,79; R$ 2,59',
    files: ['comprovantes_lote_27/imagens/BB61D288-D517-47DA-8C44-24D9BF25B4B3.jpeg']
  },
  {
    key: '2026-03-05-mc1-adaptador-18-00',
    date: '2026-03-05',
    supplierName: 'MC1 Commerce Nacionais e Importados',
    paymentMethod: 'Cartão de débito',
    totalAmount: 18,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'cupom',
    label: 'Adaptador Dako',
    itemsText: 'Adaptador Dako x 1/2 macho fresado',
    unitText: '1 un x R$ 18,00',
    files: ['comprovantes_lote_27/imagens/C4972978-D666-4A3C-90B5-8EEE0A2B662A.jpeg']
  },
  {
    key: '2026-03-05-mc1-fita-32-00',
    date: '2026-03-05',
    supplierName: 'MC1 Commerce Nacionais e Importados',
    paymentMethod: 'Cartão de débito',
    totalAmount: 32,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'cupom',
    label: 'Fita dupla face 3M',
    itemsText: 'Fita dupla face 3M Extrema 24mm x 2m',
    unitText: '1 un x R$ 32,00',
    files: ['comprovantes_lote_27/imagens/9E9AAB92-F6CA-4E54-9E5D-C7E2E7C13BD0.jpeg']
  },
  {
    key: '2026-03-05-mc1-gas-69-00',
    date: '2026-03-05',
    supplierName: 'MC1 Commerce Nacionais e Importados',
    paymentMethod: 'Cartão de débito',
    totalAmount: 69,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'cupom',
    label: 'Cola silicone e regulador de gás',
    itemsText: 'Cola silicone 50g Tekbond alta temperatura vermelha; regulador gás aliança GD.506/01',
    unitText: 'R$ 14,00; R$ 55,00',
    files: ['comprovantes_lote_27/imagens/24AD8275-12AB-48FA-AA95-49F838E48C0A.jpeg']
  },
  {
    key: '2026-03-14-frigo-noronha-168-26',
    date: '2026-03-14',
    supplierName: 'Frigo Noronha',
    paymentMethod: 'Crédito (1x)',
    totalAmount: 168.26,
    inputType: 'order',
    sourceChannel: 'physical_store',
    docType: 'venda-simples',
    label: 'Fraldinha e fraldinha grill',
    items: [
      item('Fraldinha', 1.310, 'kg', 52.98, { totalPrice: 69.40, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Fraldinha grill', 1.236, 'kg', 79.98, { totalPrice: 98.86, resourceType: 'ingredient', resourceId: 'ing_fraldinha' })
    ],
    files: ['comprovantes_lote_27/imagens/624AC141-7EB5-4517-AF1E-AF6AA6D96713.jpeg']
  },
  {
    key: '2026-03-14-supermercado-x-85-79',
    date: '2026-03-14',
    supplierName: 'Supermercado X',
    paymentMethod: 'Cartão de crédito',
    totalAmount: 85.79,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Supermercado X - muçarela e mercearia',
    items: [
      item('Muçarela bandeja / kg', 1, 'un', 37.33, { totalPrice: 37.33, resourceType: 'ingredient', resourceId: 'ing_mucarela' }),
      item('Manti Itálico c/s 200g', 1, 'un', 10.99, { resourceType: 'other', resourceId: 'itm_manti_italico_200g' }),
      item('Azeite de oliva Quattro 500ml', 1, 'un', 24.99, { resourceType: 'ingredient', resourceId: 'ing_oleo_vinagre' }),
      item('Ketchup Quero Trad 400g', 1, 'un', 7.49, { resourceType: 'ingredient', resourceId: 'ing_ketchup' }),
      item('Alho triturado 200g', 1, 'un', 4.99, { resourceType: 'ingredient', resourceId: 'ing_alho' })
    ],
    files: ['comprovantes_lote_27/imagens/05D4E0EE-7082-4413-B389-346F5FD5C571.jpeg']
  },
  {
    key: '2026-03-18-laticinios-catupiry-74-98',
    date: '2026-03-18',
    supplierName: 'Laticínios Catupiry Ltda',
    paymentMethod: 'Cartão de débito',
    totalAmount: 74.98,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Requeijão 4 queijos profissional',
    itemsText: 'Requeijão original 4 queijos profissional 1,01 kg',
    unitText: '2 un x R$ 37,49',
    files: ['comprovantes_lote_27/imagens/AB331F9E-E4F1-484C-9484-6D61271FC6B4.jpeg']
  },
  {
    key: '2026-03-28-mc1-extensoes-137-70',
    date: '2026-03-28',
    supplierName: 'MC1 Commerce Nacionais e Importados',
    paymentMethod: 'Cartão de débito',
    totalAmount: 137.70,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'cupom',
    label: 'Extensões e adaptador',
    itemsText: 'Extensão técnica 0,75 m 2P+T 10A BR (2 un); extensão/iluminação PL 05 MTS branca; adaptador de viagem rápido 5.1A c/ 8 micro 2 USB',
    unitText: '2 x R$ 27,90; R$ 29,90; 2 x R$ 26,00',
    files: ['comprovantes_lote_27/imagens/46D7247F-3AC0-495E-B398-CB83C1368450.jpeg']
  },
  {
    key: '2026-04-02-sendas-628-07',
    date: '2026-04-02',
    supplierName: 'Sendas Distribuidora S/A',
    paymentMethod: 'Cartão de crédito / Passaí',
    totalAmount: 628.07,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Sendas 02/04 - compra grande',
    items: [
      item('Caixa Biopratika R310', 4, 'un', 5.49, { totalPrice: 21.96, resourceType: 'other', resourceId: 'itm_caixa_biopratika_r310' }),
      item('Saco Assaí 58x70 verde', 4, 'un', 0.25, { resourceType: 'other', resourceId: 'itm_saco_assai_58x70' }),
      item('Caixa Pleion c/r 512', 1, 'un', 12.90, { resourceType: 'other', resourceId: 'itm_caixa_pleion_cr512' }),
      item('Luva Vabene c/100', 3, 'un', 2.25, { totalPrice: 6.75, resourceType: 'other', resourceId: 'itm_luva_vabene_100' }),
      item('Esponja Scotch multiuso c/4', 1, 'un', 6.60, { resourceType: 'other', resourceId: 'itm_esponja_scotch_multiuso_c4' }),
      item('Touca Bompack c/100', 1, 'un', 9.90, { resourceType: 'other', resourceId: 'itm_touca_bompack_100' }),
      item('Guard Scott FS c/50', 2, 'un', 1.79, { totalPrice: 3.58, resourceType: 'other', resourceId: 'itm_guard_scott_fs50' }),
      item('Luva Bompack hair', 2, 'un', 4.15, { totalPrice: 8.30, resourceType: 'other', resourceId: 'itm_luva_bompack_hair' }),
      item('Saco p/ lixo Betty Jeitosa', 1, 'un', 21.00, { resourceType: 'other', resourceId: 'itm_saco_lixo_betty_jeitosa' }),
      item('Muçarela Piracanjuba fatiada', 3.386, 'kg', 48.00, { totalPrice: 162.49, resourceType: 'ingredient', resourceId: 'ing_mucarela' }),
      item('Caixa Biopratika R430', 2, 'un', 25.90, { totalPrice: 51.80, resourceType: 'other', resourceId: 'itm_caixa_biopratika_r430' }),
      item('Açúcar refinado 1kg', 2, 'un', 3.75, { totalPrice: 7.50, resourceType: 'other', resourceId: 'itm_acucar_refinado_1kg' }),
      item('LI CAL FRES AJRO 2,5', 2, 'un', 49.00, { totalPrice: 98.00, resourceType: 'other', resourceId: 'itm_li_cal_fres_ajro_25' }),
      item('Farofa Yoki 800g', 2, 'un', 6.99, { totalPrice: 13.98, resourceType: 'ingredient', resourceId: 'ing_farofa_pronta' }),
      item('Alho pic Kamar 1kg', 1, 'un', 12.90, { resourceType: 'ingredient', resourceId: 'ing_alho' }),
      item('Cheddar Polenghi 1,5kg', 1, 'un', 47.50, { resourceType: 'ingredient', resourceId: 'ing_cheddar' }),
      item('Feijão carioca Solito 1kg', 5, 'un', 7.49, { totalPrice: 37.45, resourceType: 'other', resourceId: 'itm_feijao_carioca_solito_1kg' }),
      item('MANT TOUR P/C 500g', 1, 'un', 21.00, { resourceType: 'other', resourceId: 'itm_mant_tour_pc_500g' }),
      item('Mel Holanda 200g', 1, 'un', 11.00, { resourceType: 'ingredient', resourceId: 'ing_mel' }),
      item('ALC COPE 500g bact', 1, 'un', 9.90, { resourceType: 'other', resourceId: 'itm_alc_cope_500_bact' }),
      item('Óleo Soya PET 900ml', 2, 'un', 7.49, { totalPrice: 14.98, resourceType: 'other', resourceId: 'itm_oleo_soya_pet_900ml' }),
      item('CAT Quero 1,15kg', 1, 'un', 15.45, { resourceType: 'other', resourceId: 'itm_cat_quero_115kg' }),
      item('Detergente Ypê 500ml clear', 1, 'un', 2.35, { resourceType: 'other', resourceId: 'itm_detergente_ype_clear_500' }),
      item('Arroz Saboroso 5kg', 2, 'un', 14.99, { totalPrice: 29.98, resourceType: 'other', resourceId: 'itm_arroz_saboroso_5kg' }),
      item('Ajuste de desconto do cupom', 1, 'un', -0.20, { totalPrice: -0.20, resourceType: 'other', resourceId: 'itm_ajuste_desconto_sendas_0204' })
    ],
    files: ['comprovantes_lote_27/imagens/63653AE3-32CD-4A64-812E-BD6CC4D6EB03.jpeg']
  },
  {
    key: '2026-04-06-boi-preto-346-70',
    date: '2026-04-06',
    supplierName: 'Casa de Carne Boi Preto',
    paymentMethod: 'Crédito',
    totalAmount: 346.70,
    inputType: 'order',
    sourceChannel: 'physical_store',
    docType: 'pedido-manual',
    label: 'Casa de Carne Boi Preto - pedido manual',
    items: [
      item('Fraldinha', 5.564, 'kg', 42.99, { totalPrice: 239.20, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Sobrecoxa de frango desossada', 2.578, 'kg', 19.99, { totalPrice: 51.53, resourceType: 'ingredient', resourceId: 'ing_frango' }),
      item('Peito de frango', 2.800, 'kg', 19.99, { totalPrice: 55.97, resourceType: 'ingredient', resourceId: 'ing_frango' })
    ],
    files: ['comprovantes_lote_27/imagens/0B788C5E-38BF-4AFC-AD3C-898FE164D5D0.jpeg']
  },
  {
    key: '2026-04-07-orcamento-2025-128-20',
    date: '2026-04-07',
    supplierName: 'IKOA Plast',
    paymentMethod: 'Não se aplica',
    totalAmount: 128.20,
    inputType: 'quote',
    sourceChannel: 'physical_store',
    docType: 'orcamento',
    actual: false,
    label: 'Orçamento 2025',
    itemsText: 'Cord overline ralo pia p; Cord kaz grampeador gde co; Fita adesiva 12x33 unid (2 un); Luva térmica; Suporte dur; Wyda papel mant 29x50 unid; Pratesta pote red 500ml pc',
    unitText: 'R$ 5,00; R$ 32,00; R$ 1,60; R$ 14,00; R$ 17,00; R$ 29,00; R$ 28,00',
    notes: 'Documento de orçamento com anotações manuais “142,50” e “pedra -> 14,30”.',
    files: ['comprovantes_lote_27/imagens/58E8792C-B14D-4494-B0A9-CCE0BDE9D94B.jpeg']
  },
  {
    key: '2026-04-09-sodimac-168-90',
    date: '2026-04-09',
    supplierName: 'Construdecor S/A (Sodimac Guarulhos)',
    paymentMethod: 'Cartão de crédito',
    totalAmount: 168.90,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Prolongador e extensão',
    itemsText: 'Prolongador PP Hard; extensão 3 tomadas Slim',
    unitText: 'R$ 139,00; R$ 29,90',
    files: ['comprovantes_lote_27/imagens/D9F5F191-B0D0-4320-9427-13C854C2E537.jpeg']
  },
  {
    key: '2026-04-09-fonte-nova-27-19',
    date: '2026-04-09',
    supplierName: 'Mercado Fonte Nova Recreio Ltda',
    paymentMethod: 'Cartão de crédito',
    totalAmount: 27.19,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Detergente, água sanitária e hortifruti',
    itemsText: 'Detergente Ypê Clear 500 ml (2 un); água san suprema 2L; salsa e cebolinha; tomate italiano',
    unitText: '2 x R$ 2,59; R$ 4,99; R$ 5,99; R$ 11,03',
    files: ['comprovantes_lote_27/imagens/E96EFDCD-F940-46AF-A4C6-8C36D60C5D24.jpeg']
  },
  {
    key: '2026-04-10-sendas-104-23',
    date: '2026-04-10',
    supplierName: 'Sendas Distribuidora S/A',
    paymentMethod: 'Cartão de crédito / Passaí',
    totalAmount: 104.23,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Sendas 10/04 - bebidas e tomate',
    items: [
      item('Água Petrópolis sem gás 1,5L', 6, 'un', 1.89, { totalPrice: 11.34, resourceType: 'other', resourceId: 'itm_agua_petropolis_15l' }),
      item('Tomate italiano', 1, 'un', 24.66, { totalPrice: 24.66, resourceType: 'ingredient', resourceId: 'ing_tomate' }),
      item('Manti Frizzo 500g', 1, 'un', 18.90, { resourceType: 'other', resourceId: 'itm_manti_frizzo_500g' }),
      item('Coca-Cola 350 ml', 12, 'un', 4.29, { totalPrice: 51.48, resourceType: 'product', resourceId: 'prd_coca' }),
      item('Sacola', 1, 'un', 0.25, { resourceType: 'other', resourceId: 'itm_sacola_sendas_1004' }),
      item('Ajuste de desconto do cupom', 1, 'un', -2.40, { totalPrice: -2.40, resourceType: 'other', resourceId: 'itm_ajuste_desconto_sendas_1004' })
    ],
    files: ['comprovantes_lote_27/imagens/864AFED5-7061-4DB1-BC71-FDF3395EA363.jpeg']
  },
  {
    key: '2026-04-10-urca-63-36',
    date: '2026-04-10',
    supplierName: 'URCA Com. de Bebidas e Alimentos',
    paymentMethod: 'TEF / crédito à vista',
    totalAmount: 63.36,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Guaraná e Guaraviton',
    items: [
      item('Guaraná Antarctica lata 350ml', 12, 'un', 2.79, { totalPrice: 33.48, resourceType: 'product', resourceId: 'prd_guarana_350' }),
      item('Guaraviton Açaí', 12, 'un', 2.49, { totalPrice: 29.88, resourceType: 'other', resourceId: 'itm_guaraviton_acai' })
    ],
    files: ['comprovantes_lote_27/imagens/8CB351B6-6BB3-41B4-BE70-4384465263C8.jpeg']
  },
  {
    key: '2026-04-15-orcamento-786668-106-37',
    date: '2026-04-15',
    supplierName: 'Casamarela',
    paymentMethod: 'Não se aplica',
    totalAmount: 106.37,
    inputType: 'quote',
    sourceChannel: 'physical_store',
    docType: 'orcamento',
    actual: false,
    label: 'Orçamento 786668',
    itemsText: 'Suporte; concha pequena; faca grande (2 un); medidor; luva',
    unitText: 'R$ 24,90; R$ 5,99; 2 x R$ 18,15; R$ 14,83; R$ 24,35',
    address: 'Av. Celso Garcia - Brás, São Paulo - SP, 03019-010',
    city: 'Sao Paulo',
    state: 'SP',
    cep: '03019-010',
    files: ['comprovantes_lote_27/imagens/2C1E9CE0-3DC7-4C28-90BE-7B1F69BC1723.jpeg']
  },
  {
    key: '2026-04-19-poupaki-427-65',
    date: '2026-04-19',
    supplierName: 'Poupaki Atacadista Ltda',
    paymentMethod: 'TEF / carteira digital',
    totalAmount: 427.65,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Poupaki 19/04 - carnes e laticínios',
    address: 'Av. Guarulhos, 2753 - Gopouva, Guarulhos - SP, 07022-020',
    city: 'Guarulhos',
    state: 'SP',
    cep: '07022-020',
    items: [
      item('Fraldinha bovina vácuo (1,140 kg)', 1.140, 'kg', 42.99, { totalPrice: 49.00, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Fraldinha bovina vácuo (1,205 kg)', 1.205, 'kg', 42.99, { totalPrice: 51.80, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Fraldinha bovina vácuo (1,190 kg)', 1.190, 'kg', 42.99, { totalPrice: 51.15, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Fraldinha bovina vácuo (0,735 kg)', 0.735, 'kg', 42.99, { totalPrice: 31.59, resourceType: 'ingredient', resourceId: 'ing_fraldinha' }),
      item('Manteiga Italac com sal 500g', 1, 'un', 19.90, { resourceType: 'other', resourceId: 'itm_manti_italic_500g' }),
      item('Água mineral 5L', 1, 'un', 10.79, { resourceType: 'other', resourceId: 'itm_agua_mineral_poupaki_5l' }),
      item('Muçarela Piracanjuba fatiada (0,133 kg)', 0.133, 'kg', 54.90, { totalPrice: 7.30, resourceType: 'ingredient', resourceId: 'ing_mucarela' }),
      item('Muçarela Piracanjuba fatiada (0,148 kg)', 0.148, 'kg', 54.90, { totalPrice: 8.12, resourceType: 'ingredient', resourceId: 'ing_mucarela' }),
      item('Muçarela Piracanjuba fatiada (0,128 kg)', 0.128, 'kg', 54.90, { totalPrice: 7.02, resourceType: 'ingredient', resourceId: 'ing_mucarela' }),
      item('Muçarela Piracanjuba fatiada (0,133 kg)', 0.133, 'kg', 54.90, { totalPrice: 7.30, resourceType: 'ingredient', resourceId: 'ing_mucarela' }),
      item('Requeijão Catupiry 250g', 1, 'un', 17.29, { resourceType: 'ingredient', resourceId: 'ing_catupiry' }),
      item('Toalha Umedecida Upa Bebe 140 unidades', 1, 'un', 6.99, { resourceType: 'other', resourceId: 'itm_toalha_umedecida_upa_bebe_140' }),
      item('Requeijão Catupiry 1,5kg', 1, 'un', 66.90, { resourceType: 'ingredient', resourceId: 'ing_catupiry' }),
      item('Linguiça Toscana Aurora', 1, 'caixa', 92.50, { totalPrice: 92.50, resourceType: 'ingredient', resourceId: 'ing_linguica' })
    ],
    notes: 'Cupom relido com imagem mais nítida. A linha 12 foi confirmada como Toalha Umedecida Upa Bebe 140 unidades por R$ 6,99, e a linguiça toscana Aurora foi confirmada por R$ 92,50.',
    files: ['comprovantes_lote_27/imagens/0FAD5A74-2E31-4C09-8E26-3348AA658194.jpeg']
  },
  {
    key: '2026-04-21-irmaos-lopes-62-44',
    date: '2026-04-21',
    supplierName: 'Supermercados Irmãos Lopes Ltda',
    paymentMethod: 'Carteira digital / PIX',
    totalAmount: 62.44,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Irmãos Lopes - hortifruti e Coca-Cola 2L',
    itemsText: 'Coca-Cola PET 2L; berinjela; tomate salada; salsa/cebolinha; pimentão amarelo; pimentão verde; limão taiti',
    unitText: 'R$ 11,99; R$ 11,03; R$ 12,49; R$ 2,99; R$ 10,96; R$ 10,21; R$ 2,77',
    files: ['comprovantes_lote_27/imagens/8342542E-7C48-46E5-A1F0-6D79CD29942A.jpeg']
  },
  {
    key: '2026-04-22-poupaki-245-00',
    date: '2026-04-22',
    supplierName: 'Poupaki Atacadista Ltda',
    paymentMethod: 'TEF / carteira digital / PIX',
    totalAmount: 245,
    inputType: 'invoice',
    sourceChannel: 'physical_store',
    docType: 'nfce',
    label: 'Poupaki 22/04 - muçarela, cerveja e chá',
    items: [
      item('Queijo muçarela Aurora fatiado', 1.014, 'kg', 54.90, { totalPrice: 55.66, resourceType: 'ingredient', resourceId: 'ing_mucarela' }),
      item('Muçarela Piracanjuba fatiada', 0.683, 'kg', 54.89, { totalPrice: 37.49, resourceType: 'ingredient', resourceId: 'ing_mucarela' }),
      item('Cerveja Amstel 355ml', 12, 'un', 4.99, { totalPrice: 59.88, resourceType: 'other', resourceId: 'itm_amstel_355ml' }),
      item('Cerveja Heineken 330ml', 6, 'un', 6.13, { totalPrice: 36.78, resourceType: 'product', resourceId: 'prd_heineken_330' }),
      item('Chá Ice Tea Leão 450ml', 4, 'un', 3.79, { totalPrice: 15.16, resourceType: 'product', resourceId: 'prd_garrafa_450' }),
      item('Schweppes Citrus 350ml', 6, 'un', 3.79, { totalPrice: 22.74, resourceType: 'product', resourceId: 'prd_schweppes_350' }),
      item('Requeijão Catupiry 250g', 1, 'un', 17.29, { resourceType: 'ingredient', resourceId: 'ing_catupiry' })
    ],
    files: ['comprovantes_lote_27/imagens/5E320BCF-E7AB-401B-A2F6-7844DF0571CC.jpeg']
  },
  {
    key: '2026-04-22-interfolhas-papel-15-00',
    date: '2026-04-22',
    supplierName: 'Fornecedor não identificado (PagBank)',
    paymentMethod: 'PIX',
    totalAmount: 15,
    inputType: 'payment_receipt',
    sourceChannel: 'physical_store',
    docType: 'comprovante-pagamento',
    createSupplier: false,
    label: 'Interfolhas papel',
    items: [item('Interfolhas papel', 1, 'un', 15, { resourceType: 'packaging', resourceId: 'pkg_lanche' })],
    notes: 'Comprovante PagBank com identificação manual “Interfolhas papel”.',
    files: ['comprovantes_lote_27/imagens/75CEA725-F4E1-473F-830F-FC51E28C63BE.jpeg']
  }
];

const pmgMarchDanfeItems = [
  item('Coca-Cola PET 2L', 1, 'caixa', 65.72, { resourceType: 'product', resourceId: 'prd_coca_2l' }),
  item('Coca-Cola lata 350ml', 2, 'caixa', 41.21, { resourceType: 'product', resourceId: 'prd_coca' }),
  item('Coca-Cola sem açúcar lata 350ml', 2, 'caixa', 41.39, { resourceType: 'product', resourceId: 'prd_coca_zero' }),
  item('Fanta Laranja lata 350ml', 1, 'caixa', 42.67, { resourceType: 'product', resourceId: 'prd_fanta' }),
  item('Guaraná Antarctica lata 350ml', 2, 'caixa', 41.83, { resourceType: 'product', resourceId: 'prd_guarana_350' }),
  item('Requeijão Catupiry sem amido 1,5kg', 2, 'un', 60.32, { resourceType: 'ingredient', resourceId: 'ing_catupiry' }),
  item('H2OH! 500ml', 1, 'caixa', 56.10, { resourceType: 'product', resourceId: 'prd_h2o_500' }),
  item('Schweppes Citrus lata 350ml', 1, 'caixa', 23.19, { resourceType: 'product', resourceId: 'prd_schweppes_350' }),
  item('Budweiser long neck 330ml', 1, 'caixa', 143.00, { resourceType: 'product', resourceId: 'prd_bud_330' }),
  item('Heineken long neck 330ml', 1, 'caixa', 166.00, { resourceType: 'product', resourceId: 'prd_heineken_330' }),
  item('H2OH! Zero 500ml', 1, 'caixa', 56.10, { resourceType: 'product', resourceId: 'prd_limoneto_500' }),
  item('Sprite lata 350ml', 1, 'caixa', 21.96, { resourceType: 'product', resourceId: 'prd_sprite_350' }),
  item('Suco Del Valle Uva 290ml', 1, 'caixa', 22.01, { resourceType: 'product', resourceId: 'prd_delvalle_uva_290' }),
  item('Molho barbecue EKMA 3,5kg', 1, 'un', 27.80, { resourceType: 'ingredient', resourceId: 'ing_bbq' }),
  item('Maionese grande Quero 3kg', 3, 'balde', 24.00, { resourceType: 'ingredient', resourceId: 'ing_maionese_ind' }),
  item('Batata pré-frita Bem Brasil 2kg', 1, 'caixa', 99.99, { resourceType: 'ingredient', resourceId: 'ing_batata' }),
  item('Chá Ice Tea Leão pêssego 450ml', 1, 'caixa', 25.80, { resourceType: 'product', resourceId: 'prd_ice_tea_pessego_450' }),
  item('Chá Ice Tea Leão limão 450ml', 1, 'caixa', 25.80, { resourceType: 'product', resourceId: 'prd_ice_tea_limao_450' }),
  item('Azeite Gallo 2L', 1, 'un', 130.00, { resourceType: 'ingredient', resourceId: 'ing_oleo_vinagre' }),
  item('Banha Coopavel 1kg', 6, 'un', 11.70, { resourceType: 'other', resourceId: 'itm_banha_coopavel_1kg' }),
  item('Água Buonavita com gás 510ml', 1, 'caixa', 19.75, { resourceType: 'product', resourceId: 'prd_agua_gas_510' }),
  item('Água Buonavita sem gás 510ml', 1, 'caixa', 15.05, { resourceType: 'product', resourceId: 'prd_agua_510' }),
  item('Sal sachê refinado Lebre 0,8g', 1, 'caixa', 13.30, { resourceType: 'ingredient', resourceId: 'ing_saches_mix' }),
  item('Catchup Heinz sachê 7g', 2, 'caixa', 18.79, { resourceType: 'ingredient', resourceId: 'ing_saches_mix' }),
  item('Mostarda Heinz sachê 5g', 1, 'caixa', 18.79, { resourceType: 'ingredient', resourceId: 'ing_saches_mix' }),
  item('Mostarda EKMA sachê 7g', 1, 'caixa', 12.57, { resourceType: 'ingredient', resourceId: 'ing_saches_mix' }),
  item('Catchup EKMA sachê 7g', 1, 'caixa', 12.57, { resourceType: 'ingredient', resourceId: 'ing_saches_mix' }),
  item('Molho de pimenta vermelha sachê Cepêra 5ml', 1, 'caixa', 23.00, { resourceType: 'ingredient', resourceId: 'ing_saches_mix' }),
  item('Óleo de algodão 900ml', 4, 'frasco', 9.04, { totalPrice: 36.16, resourceType: 'ingredient', resourceId: 'ing_oleo_algodao' }),
  item('Bacon em cubos Perdigão 1kg', 2, 'pacote', 25.47, { totalPrice: 50.94, resourceType: 'ingredient', resourceId: 'ing_bacon_cubos' })
];

const pdfEntries = [
  {
    key: '2026-03-12-pmg-danfe-5669620',
    date: '2026-03-12',
    supplierName: 'PMG Comércio de Frios e Laticínios',
    paymentMethod: 'Cartão de crédito',
    paymentStatus: 'paid',
    totalAmount: 1657.55,
    inputType: 'invoice',
    sourceChannel: 'other',
    docType: 'danfe',
    documentNumber: '5669620',
    label: 'DANFE PMG 5669620 (ref. 8997086)',
    supportingOnly: true,
    files: ['PMG/danfe-5669620.pdf'],
    notes: 'DANFE fiscal referente ao pedido/venda 8997086. Usada para reconciliar o pedido PMG já existente na base.'
  },
  {
    key: '2026-04-15-pmg-9096638',
    date: '2026-04-15',
    supplierName: 'PMG Comércio de Frios e Laticínios',
    paymentMethod: 'Cartão de crédito',
    paymentStatus: 'paid',
    totalAmount: 1177.29,
    inputType: 'order',
    sourceChannel: 'other',
    docType: 'pedido',
    documentNumber: '9096638',
    label: 'Compra PMG nº 9096638',
    items: [
      item('Azeite de oliva Cocinero 500ml', 1, 'frasco', 26.00, { resourceType: 'ingredient', resourceId: 'ing_oleo_vinagre' }),
      item('Bacon em cubos Perdigão 1kg', 1, 'pacote', 23.00, { resourceType: 'ingredient', resourceId: 'ing_bacon_cubos' }),
      item('Batata pré-frita Bem Brasil 2kg', 3, 'caixa', 99.99, { totalPrice: 299.97, resourceType: 'ingredient', resourceId: 'ing_batata' }),
      item('Maionese grande Quero 3kg', 2, 'balde', 23.90, { totalPrice: 47.80, resourceType: 'ingredient', resourceId: 'ing_maionese_ind' }),
      item('Maionese Grill Junior 1,1kg', 15, 'bag', 39.40, { totalPrice: 591.00, resourceType: 'ingredient', resourceId: 'ing_maionese_ind' }),
      item('Manteiga com sal Ipanema 500g', 2, 'un', 23.50, { totalPrice: 47.00, resourceType: 'ingredient', resourceId: 'ing_manteiga' }),
      item('Molho queijo cheddar Polenghi 1,5kg', 2, 'bisnaga', 47.00, { totalPrice: 94.00, resourceType: 'ingredient', resourceId: 'ing_cheddar' }),
      item('Óleo de algodão Elogiata 900ml', 3, 'frasco', 9.04, { totalPrice: 27.12, resourceType: 'ingredient', resourceId: 'ing_oleo_algodao' }),
      item('Sprite lata 350ml', 1, 'caixa', 21.40, { resourceType: 'product', resourceId: 'prd_sprite_350' })
    ],
    files: ['PMG/CANTINHO DO BOM RETIRO1.pdf'],
    notes: 'Pedido PMG com recompra de batata, maionese, bacon, cheddar e bebidas em abril.'
  },
  {
    key: '2026-03-14-mercado-livre-tv-stick-112-00',
    date: '2026-03-14',
    supplierName: 'DUSK MOON VARIEDADES LTDA',
    paymentMethod: 'Mercado Livre',
    paymentStatus: 'paid',
    totalAmount: 112.00,
    inputType: 'invoice',
    sourceChannel: 'online',
    docType: 'danfe',
    documentNumber: '5680460288',
    label: 'TV Stick Android',
    items: [item('TV Stick Wifi Smart TV Android HDMI Fire TV Stick TVR3', 1, 'un', 112.00, { resourceType: 'other', resourceId: 'itm_tv_stick_android_tvr3' })],
    files: ['mercado livre/5680460288_35260363706109000169550120000007061905472185-DANFE.pdf']
  },
  {
    key: '2026-03-15-mercado-livre-suporte-celular-39-16',
    date: '2026-03-15',
    supplierName: 'LUCCIOLAR HOME LTDA',
    paymentMethod: 'Mercado Livre',
    paymentStatus: 'paid',
    totalAmount: 39.16,
    inputType: 'invoice',
    sourceChannel: 'online',
    docType: 'danfe',
    documentNumber: '5682666768',
    label: 'Suporte para celular ou tablet',
    items: [item('Suporte universal para celular ou tablet de parede com fita - branco', 2, 'un', 19.58, { totalPrice: 39.16, resourceType: 'other', resourceId: 'itm_suporte_celular_parede' })],
    files: ['mercado livre/5682666768_33260355404215000160550020000178831316797793-DANFE.pdf']
  },
  {
    key: '2026-03-15-mercado-livre-cartao-memoria-20-90',
    date: '2026-03-15',
    supplierName: 'DESCOMPARAR LTDA',
    paymentMethod: 'Mercado Livre',
    paymentStatus: 'paid',
    totalAmount: 20.90,
    inputType: 'invoice',
    sourceChannel: 'online',
    docType: 'danfe',
    documentNumber: '5682666803',
    label: 'Cartão de memória 32GB',
    items: [item('Cartão de memória 32GB para câmeras Wi-Fi e drones', 1, 'un', 20.90, { resourceType: 'other', resourceId: 'itm_cartao_memoria_32gb' })],
    files: ['mercado livre/5682666803_35260347210304000147550010004202811334007450-DANFE.pdf']
  }
];

const referenceFiles = [
  'comprovantes_lote_27/comprovantes_lote_27.md',
  'organizado_comprovantes/comprovantes_organizados.md'
];

const knownPendingNotes = [];

function uniq(values = []) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeCompanyKey(value = '') {
  return slugify(value)
    .replace(/\b(ltda|epp|me|mei|eireli|sa|s-a|comercio|com|industriais|industrial|distribuidora|distribuidor|restaura?nte|e-pp)\b/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizePaymentMethods(value = '') {
  return uniq(String(value || '')
    .split(/[+,/]| e /i)
    .map(part => titleCaseWords(slugify(part).replace(/-/g, ' ')))
    .map(part => part === 'Tef' ? 'TEF' : part === 'Pix' ? 'PIX' : part)
    .filter(Boolean));
}

function inputTypeNoun(type = '') {
  return {
    invoice: 'Nota fiscal',
    purchase_list: 'Lista de compras',
    quote: 'Orçamento',
    payment_receipt: 'Comprovante',
    order: 'Pedido',
    screenshot: 'Captura',
    other: 'Input'
  }[type] || 'Input';
}

function buildInputTitle(entry) {
  const prefix = inputTypeNoun(entry.inputType);
  if (entry.documentNumber) return `${prefix} ${entry.supplierName} nº ${entry.documentNumber}`;
  if (entry.label) return `${prefix} ${entry.label}`;
  return `${prefix} ${entry.supplierName}`;
}

function buildInputCode(entry) {
  return `INP_${slugify(entry.key).replace(/-/g, '_').toUpperCase().slice(0, 52)}`;
}

function buildOrderCode(entry) {
  return `PO_${slugify(entry.key).replace(/-/g, '_').toUpperCase().slice(0, 54)}`;
}

function sortByDateThenLabel(a, b) {
  const left = `${a.date || ''}|${a.label || a.title || a.key || ''}`;
  const right = `${b.date || ''}|${b.label || b.title || b.key || ''}`;
  return left.localeCompare(right, 'pt-BR');
}

function orderKind(entry) {
  if (entry.actual === false || entry.inputType === 'quote' || entry.supportingOnly) return 'input-only';
  return 'purchase';
}

function sourceRelativeToRepo(sourceRelative) {
  return path.join('NFs-Comprovantes-OrçamentosConcluidos', sourceRelative).replace(/\\/g, '/');
}

function firstAvailableFile(paths = []) {
  return Array.isArray(paths) && paths.length ? paths[0] : '';
}

function buildEvidenceNote(entry, copiedPaths) {
  const lines = [];
  if (entry.notes) lines.push(entry.notes);
  if (copiedPaths.length > 1) lines.push(`Arquivos complementares: ${copiedPaths.slice(1).join('; ')}`);
  return lines.join(' ');
}

function safeDescription(entry) {
  return entry.description || entry.label || entry.itemsText || entry.notes || '';
}

function findSupplierId(db, supplierName = '') {
  if (!supplierName) return '';
  const supplierKey = normalizeCompanyKey(supplierName);
  const directAlias = existingSupplierAliases[slugify(supplierName)];
  if (directAlias) return directAlias;
  for (const supplier of db.suppliers || []) {
    const names = [supplier.name, supplier.legalName];
    if (names.some(name => normalizeCompanyKey(name) === supplierKey)) return supplier.id;
  }
  return '';
}

function firstText(...values) {
  for (const value of values) {
    if (String(value || '').trim()) return String(value).trim();
  }
  return '';
}

function mergeNotes(...values) {
  return uniq(values.map(value => String(value || '').trim()).filter(Boolean)).join(' ');
}

function upsertRecord(list, record) {
  const index = list.findIndex(item => item.id === record.id);
  if (index >= 0) list[index] = { ...list[index], ...record };
  else list.push(record);
}

function removeOrderItems(db, orderId) {
  db.purchaseItems = (db.purchaseItems || []).filter(item => item.orderId !== orderId);
}

function orderItemRows(orderId, supplierId, items, evidenceSource) {
  return items.map((row, index) => ({
    id: stableId('pit', `${orderId}-${index + 1}-${row.description}`),
    orderId,
    supplierId,
    scope: 'gyros',
    resourceType: row.resourceType || 'other',
    resourceId: row.resourceId || '',
    description: row.description,
    qty: num(row.qty),
    unit: row.unit || 'un',
    unitPrice: num(row.unitPrice),
    totalPrice: num(row.totalPrice),
    evidenceType: 'documented',
    evidenceSource
  }));
}

function copyReferenceFile(sourceRelative) {
  const source = path.join(SOURCE_ROOT, sourceRelative);
  if (!fs.existsSync(source)) return '';
  const refDir = path.join(DOCS_ROOT, 'referencias');
  ensureDir(refDir);
  const dest = path.join(refDir, path.basename(sourceRelative));
  fs.copyFileSync(source, dest);
  return path.relative(ROOT, dest).replace(/\\/g, '/');
}

function ensureSupplier(db, entry) {
  if (entry.createSupplier === false || !entry.supplierName) return '';
  const existingId = findSupplierId(db, entry.supplierName);
  if (existingId) {
    const current = (db.suppliers || []).find(item => item.id === existingId);
    const paymentMethods = uniq([...(current?.paymentMethods || []), ...normalizePaymentMethods(entry.paymentMethod)]);
    upsertRecord(db.suppliers, {
      ...current,
      id: existingId,
      scope: current?.scope || 'gyros',
      name: firstText(entry.supplierName, current?.name),
      legalName: firstText(entry.legalName, entry.supplierName, current?.legalName),
      cnpj: firstText(current?.cnpj, entry.cnpj),
      sellerName: firstText(current?.sellerName, entry.sellerName),
      sellerPhone: firstText(current?.sellerPhone, entry.sellerPhone),
      sellerEmail: firstText(current?.sellerEmail, entry.sellerEmail),
      paymentMethods,
      notes: mergeNotes(current?.notes, entry.supplierNotes) || `Fornecedor com comprovação documental em 2026.`,
      address: firstText(current?.address, entry.address),
      cep: firstText(current?.cep, entry.cep),
      city: firstText(current?.city, entry.city),
      state: firstText(current?.state, entry.state),
      evidenceType: 'documented',
      evidenceSource: current?.evidenceSource || 'Fornecedor identificado a partir de nota, pedido ou comprovante importado em docs/inputs',
      description: firstText(current?.description, entry.supplierDescription, entry.supplierName)
    });
    return existingId;
  }

  const id = stableId('sup', normalizeCompanyKey(entry.supplierName) || entry.supplierName);
  upsertRecord(db.suppliers, {
    id,
    scope: 'gyros',
    name: entry.supplierName,
    legalName: entry.supplierName,
    cnpj: entry.cnpj || '',
    sellerName: entry.sellerName || '',
    sellerPhone: entry.sellerPhone || '',
    sellerEmail: entry.sellerEmail || '',
    pixKey: '',
    pixKeyType: '',
    paymentMethods: normalizePaymentMethods(entry.paymentMethod),
    notes: entry.supplierNotes || `Fornecedor criado a partir do documento ${entry.label || entry.documentNumber || entry.key}.`,
    address: entry.address || '',
    cep: entry.cep || '',
    city: entry.city || '',
    state: entry.state || '',
    evidenceType: 'documented',
    evidenceSource: 'Fornecedor criado a partir de nota, pedido, orçamento ou comprovante importado em docs/inputs',
    code: supplierCode(entry.supplierName),
    description: entry.supplierDescription || entry.supplierName
  });
  return id;
}

function entryItems(entry) {
  const rows = autoItems(entry);
  return Array.isArray(rows) ? rows : [];
}

function buildInputRecord(entry, supplierId, copiedPaths) {
  const id = entry.inputId || stableId('inp', entry.key);
  return {
    id,
    scope: 'gyros',
    title: entry.title || buildInputTitle(entry),
    inputType: entry.inputType || 'other',
    sourceChannel: entry.sourceChannel || 'other',
    supplierId: supplierId || '',
    supplierName: entry.supplierName || '',
    documentNumber: entry.documentNumber || '',
    date: entry.date || '',
    paymentMethod: entry.paymentMethod || '',
    paymentStatus: entry.paymentStatus || (entry.inputType === 'quote' ? 'pending' : 'paid'),
    totalAmount: num(entry.totalAmount),
    fileLabel: path.basename(firstAvailableFile(copiedPaths) || entry.files?.[0] || ''),
    filePath: firstAvailableFile(copiedPaths),
    filePaths: copiedPaths,
    fileUrl: '',
    notes: buildEvidenceNote(entry, copiedPaths),
    evidenceType: 'documented',
    evidenceSource: 'Arquivo importado de NFs-Comprovantes-OrçamentosConcluidos para docs/inputs/2026',
    code: entry.code || buildInputCode(entry),
    description: safeDescription(entry)
  };
}

function buildOrderRecord(entry, supplierId, inputId) {
  return {
    id: entry.orderId || stableId('ord', entry.key),
    code: entry.orderCode || buildOrderCode(entry),
    scope: 'gyros',
    supplierId: supplierId || '',
    supplierName: entry.supplierName || '',
    label: entry.label || entry.supplierName || 'Compra',
    date: entry.date || '',
    documentNumber: entry.documentNumber || '',
    paymentMethod: entry.paymentMethod || '',
    paymentStatus: entry.paymentStatus || 'paid',
    totalAmount: num(entry.totalAmount),
    inputIds: uniq([inputId, ...(entry.inputIds || [])]),
    notes: entry.orderNotes || entry.notes || `Compra importada de comprovante / nota em ${entry.date || '2026'}.`,
    evidenceType: 'documented',
    evidenceSource: 'Compra importada com vínculo direto ao arquivo salvo em docs/inputs/2026'
  };
}

function reconcileExistingPmgMarch(db, manifestRows, pendingRows) {
  const orderId = 'ord_pmg_8997086';
  const baseInputId = 'inp_pmg_8997086';
  const danfeEntry = pdfEntries.find(entry => entry.key === '2026-03-12-pmg-danfe-5669620');
  const supplierId = 'sup_pmg';
  const copiedPaths = danfeEntry.files.map((file, index) => copyFile(file, danfeEntry.key, index));
  const danfeInput = buildInputRecord({ ...danfeEntry, inputId: 'inp_pmg_danfe_5669620' }, supplierId, copiedPaths);
  upsertRecord(db.inputs, danfeInput);

  const baseInput = (db.inputs || []).find(item => item.id === baseInputId);
  if (baseInput) {
    upsertRecord(db.inputs, {
      ...baseInput,
      title: 'Pedido PMG nº 8997086',
      inputType: 'order',
      sourceChannel: baseInput.sourceChannel || 'other',
      supplierId,
      supplierName: 'PMG Comércio de Frios e Laticínios',
      documentNumber: '8997086',
      date: '2026-03-12',
      paymentMethod: 'Cartão de crédito',
      paymentStatus: 'paid',
      totalAmount: 1298.90,
      notes: 'Pedido original PMG salvo anteriormente. Mantido como evidência complementar da DANFE 5669620 (ref. 8997086).',
      evidenceType: 'documented',
      evidenceSource: 'Pedido original salvo em docs/inputs e reconciliado com DANFE fiscal importada'
    });
  }

  upsertRecord(db.purchaseOrders, {
    id: orderId,
    code: 'PO_PMG_8997086',
    scope: 'gyros',
    supplierId,
    supplierName: 'PMG Comércio de Frios e Laticínios',
    label: 'Compra PMG nº 8997086',
    date: '2026-03-12',
    documentNumber: '8997086 / DANFE 5669620',
    paymentMethod: 'Cartão de crédito',
    paymentStatus: 'paid',
    totalAmount: 1657.55,
    inputIds: uniq([baseInputId, danfeInput.id]),
    notes: 'Pedido PMG reconciliado com a DANFE 5669620 (ref. 8997086). A DANFE foi confirmada como a referência fiscal correta, e o pedido original foi mantido como evidência complementar.',
    evidenceType: 'documented',
    evidenceSource: 'Pedido original + DANFE 5669620 conferidos manualmente'
  });

  removeOrderItems(db, orderId);
  db.purchaseItems.push(...orderItemRows(orderId, supplierId, pmgMarchDanfeItems, 'DANFE PMG 5669620 / ref. 8997086'));
  manifestRows.push({
    date: '2026-03-12',
    type: 'reconciliação',
    label: 'Compra PMG nº 8997086',
    supplier: 'PMG Comércio de Frios e Laticínios',
    total: 1657.55,
    inputId: danfeInput.id,
    orderId,
    files: [baseInput?.filePath || '', ...copiedPaths].filter(Boolean)
  });
}

function removeRecordById(list, id) {
  return (list || []).filter(item => item.id !== id);
}

function removeRecordsByPredicate(list, predicate) {
  return (list || []).filter(item => !predicate(item));
}

function ensureIngredientRecord(db, record) {
  db.ingredients = Array.isArray(db.ingredients) ? db.ingredients : [];
  const existing = db.ingredients.find(item => item.id === record.id) || {};
  upsertRecord(db.ingredients, {
    scope: 'gyros',
    wastePct: 0,
    supplierMode: 'single',
    erpUnit: 'G',
    ...existing,
    ...record
  });
}

function reassignSupplierId(list, fromId, toId, name) {
  (list || []).forEach(item => {
    if (item.supplierId === fromId) item.supplierId = toId;
    if (name && 'supplierName' in item && item.supplierId === toId) item.supplierName = name;
  });
}

function normalizeBeverageItemLink(item) {
  if (!item) return;
  const normalized = slugify(`${item.description || ''} ${item.resourceId || ''}`);
  if (/agua.*com-gas|buonavita-com-gas/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_agua_gas_510';
    return;
  }
  if (/agua.*sem-gas|buonavita-sem-gas/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_agua_510';
    return;
  }
  if (/coca-cola.*2l.*zero/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_coca_zero_2l';
    return;
  }
  if (/coca-cola.*2l/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_coca_2l';
    return;
  }
  if (/coca-cola.*350.*zero|sem-acucar/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_coca_zero';
    return;
  }
  if (/coca-cola.*350/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_coca';
    return;
  }
  if (/guarana/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_guarana_350';
    return;
  }
  if (/fanta/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_fanta';
    return;
  }
  if (/schweppes/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_schweppes_350';
    return;
  }
  if (/sprite.*2l/.test(normalized)) {
    item.resourceType = 'other';
    item.resourceId = 'itm_sprite_2l';
    return;
  }
  if (/sprite/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_sprite_350';
    return;
  }
  if (/h2o(?!h! zero)|h2oh/.test(normalized) && !/limoneto|zero/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_h2o_500';
    return;
  }
  if (/limoneto|h2oh.*zero/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_limoneto_500';
    return;
  }
  if (/ice-tea|cha.*ice/.test(normalized) && /pessego/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_ice_tea_pessego_450';
    return;
  }
  if (/ice-tea|cha.*ice/.test(normalized) && /limao/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_ice_tea_limao_450';
    return;
  }
  if (/ice-tea|cha.*ice/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_garrafa_450';
    return;
  }
  if (/budweiser/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_bud_330';
    return;
  }
  if (/heineken/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_heineken_330';
    return;
  }
  if (/del.?valle/.test(normalized)) {
    item.resourceType = 'product';
    item.resourceId = 'prd_delvalle_uva_290';
    return;
  }
}

function removeStaleEvidenceFiles() {
  [
    path.join(ROOT, 'docs/inputs/2026/2026-04/2026-04-10-urca-45-99.jpeg')
  ].forEach(file => {
    if (fs.existsSync(file)) fs.unlinkSync(file);
  });
}

function postImportCleanup(db) {
  db.suppliers = Array.isArray(db.suppliers) ? db.suppliers : [];
  db.inputs = Array.isArray(db.inputs) ? db.inputs : [];
  db.purchaseOrders = Array.isArray(db.purchaseOrders) ? db.purchaseOrders : [];
  db.purchaseItems = Array.isArray(db.purchaseItems) ? db.purchaseItems : [];
  db.ingredients = Array.isArray(db.ingredients) ? db.ingredients : [];

  db.purchaseOrders = removeRecordById(db.purchaseOrders, 'ord_2026-04-10-urca-45-99');
  db.purchaseItems = removeRecordsByPredicate(db.purchaseItems, item => item.orderId === 'ord_2026-04-10-urca-45-99');
  db.inputs = removeRecordById(db.inputs, 'inp_2026-04-10-urca-45-99');

  reassignSupplierId(db.purchaseOrders, 'sup_padaria-versailles-24-horas', 'sup_padaria', 'Padaria Versailles');
  reassignSupplierId(db.purchaseItems, 'sup_padaria-versailles-24-horas', 'sup_padaria');
  reassignSupplierId(db.inputs, 'sup_padaria-versailles-24-horas', 'sup_padaria', 'Padaria Versailles');
  db.suppliers = removeRecordById(db.suppliers, 'sup_padaria-versailles-24-horas');
  db.ingredients = removeRecordsByPredicate(
    db.ingredients,
    item => item.id === 'ing_pao_frances' || item.id === 'ing_parmesao'
  );

  const padariaSupplier = db.suppliers.find(item => item.id === 'sup_padaria');
  if (padariaSupplier) {
    padariaSupplier.name = 'Padaria Versailles';
    padariaSupplier.legalName = padariaSupplier.legalName || 'Padaria Versailles';
    padariaSupplier.notes = 'Fornecedor principal dos pães prontos do Gyros, com histórico confirmado de Pão Francês com Parmesão.';
    padariaSupplier.evidenceType = 'documented';
    padariaSupplier.evidenceSource = 'Fornecedor confirmado por histórico operacional e comprovantes importados em docs/inputs/2026';
  }

  db.purchaseOrders = removeRecordById(db.purchaseOrders, 'ord_import_sup_padaria');
  db.purchaseItems = removeRecordsByPredicate(
    db.purchaseItems,
    item => item.orderId === 'ord_import_sup_padaria' || item.resourceId === 'ing_pao_frances' || item.resourceId === 'ing_parmesao'
  );
  db.inputs = removeRecordById(db.inputs, 'inp_padaria_versailles_manual');

  const padariaOrderMarch = db.purchaseOrders.find(item => item.id === 'ord_2026-03-31-padaria-versailles-375-00');
  if (padariaOrderMarch) {
    padariaOrderMarch.supplierId = 'sup_padaria';
    padariaOrderMarch.supplierName = 'Padaria Versailles';
    padariaOrderMarch.label = 'Pão Francês com Parmesão';
    padariaOrderMarch.paymentStatus = 'paid';
    padariaOrderMarch.notes = 'Primeira compra documentada do Pão Francês com Parmesão pronto: 150 unidades a R$ 2,50 por unidade.';
  }
  const padariaOrderApril = db.purchaseOrders.find(item => item.id === 'ord_2026-04-11-padaria-versailles-189-66');
  if (padariaOrderApril) {
    padariaOrderApril.supplierId = 'sup_padaria';
    padariaOrderApril.supplierName = 'Padaria Versailles';
    padariaOrderApril.label = 'Pão Francês com Parmesão';
    padariaOrderApril.paymentStatus = 'paid';
    padariaOrderApril.notes = 'Compra reajustada do Pão Francês com Parmesão pronto: 100 unidades por R$ 189,66, equivalente a R$ 1,8966 por unidade.';
  }
  db.purchaseItems.forEach(item => {
    if (item.orderId === 'ord_2026-03-31-padaria-versailles-375-00') {
      item.supplierId = 'sup_padaria';
      item.description = 'Pão Francês com Parmesão';
      item.resourceType = 'ingredient';
      item.resourceId = 'ing_pao_parmesao_pronto';
      item.unit = 'un';
      item.qty = 150;
      item.unitPrice = 2.5;
      item.totalPrice = 375;
    }
    if (item.orderId === 'ord_2026-04-11-padaria-versailles-189-66') {
      item.supplierId = 'sup_padaria';
      item.description = 'Pão Francês com Parmesão (~90g)';
      item.resourceType = 'ingredient';
      item.resourceId = 'ing_pao_parmesao_pronto';
      item.unit = 'un';
      item.qty = 100;
      item.unitPrice = 1.8966;
      item.totalPrice = 189.66;
    }
  });
  db.inputs.forEach(item => {
    if (item.id === 'inp_2026-03-31-padaria-versailles-375-00') {
      item.supplierId = 'sup_padaria';
      item.supplierName = 'Padaria Versailles';
      item.title = 'Nota fiscal Pão Francês com Parmesão';
      item.description = 'Pão Francês com Parmesão';
      item.paymentStatus = 'paid';
    }
    if (item.id === 'inp_2026-04-11-padaria-versailles-189-66') {
      item.supplierId = 'sup_padaria';
      item.supplierName = 'Padaria Versailles';
      item.title = 'Nota fiscal Pão Francês com Parmesão';
      item.description = 'Pão Francês com Parmesão';
      item.paymentStatus = 'paid';
    }
  });

  const paoParmesao = db.ingredients.find(item => item.id === 'ing_pao_parmesao_pronto');
  if (paoParmesao) {
    paoParmesao.purchaseQty = 1;
    paoParmesao.purchaseCost = 1.8966;
    paoParmesao.supplier = 'Padaria Versailles';
    paoParmesao.sourceType = 'documented';
    paoParmesao.sourceReference = 'Padaria Versailles: compra documentada em 31/03/2026 a R$ 2,50/un e compra reajustada em 11/04/2026 a R$ 1,8966/un';
    paoParmesao.name = 'Pão Francês com Parmesão';
    paoParmesao.notes = 'Pão francês com parmesão pronto, cerca de 90g, comprado direto pronto da Padaria Versailles.';
    paoParmesao.description = 'Pão francês com parmesão pronto, cerca de 90g, comprado direto pronto da Padaria Versailles.';
  }
  const receitaPaoParmesao = db.recipes.find(item => item.id === 'rec_pao_parmesao');
  if (receitaPaoParmesao) {
    receitaPaoParmesao.name = 'Pão Francês com Parmesão';
    receitaPaoParmesao.components = [{ refType: 'ingredient', refId: 'ing_pao_parmesao_pronto', qty: 1 }];
  }

  ensureIngredientRecord(db, {
    id: 'ing_alho_po',
    name: 'Alho em pó',
    baseUnit: 'g',
    purchaseQty: 500,
    purchaseCost: 11.85,
    supplier: 'Armazém São Vito',
    sourceType: 'documented',
    sourceReference: 'Pedido online Armazém São Vito nº 9678784',
    notes: 'Pacote de 500g documentado em 25/02/2026.',
    description: 'Alho em pó 500g'
  });
  ensureIngredientRecord(db, {
    id: 'ing_cebola_po',
    name: 'Cebola em pó',
    baseUnit: 'g',
    purchaseQty: 500,
    purchaseCost: 14.92,
    supplier: 'Armazém São Vito',
    sourceType: 'documented',
    sourceReference: 'Pedido online Armazém São Vito nº 9678784',
    notes: 'Pacote de 500g documentado em 25/02/2026.',
    description: 'Cebola em pó 500g'
  });
  ensureIngredientRecord(db, {
    id: 'ing_caldo_galinha_po',
    name: 'Caldo de galinha',
    baseUnit: 'g',
    purchaseQty: 1000,
    purchaseCost: 15.09,
    supplier: 'Armazém São Vito',
    sourceType: 'documented',
    sourceReference: 'Pedido online Armazém São Vito nº 9678784',
    notes: 'Pacote de 1kg documentado em 25/02/2026.',
    description: 'Caldo de galinha 1kg'
  });
  ensureIngredientRecord(db, {
    id: 'ing_canela_moida',
    name: 'Canela moída',
    baseUnit: 'g',
    purchaseQty: 200,
    purchaseCost: 5.19,
    supplier: 'Armazém São Vito',
    sourceType: 'documented',
    sourceReference: 'Pedido online Armazém São Vito nº 9678784',
    notes: 'Pacote de 200g documentado em 25/02/2026.',
    description: 'Canela moída 200g'
  });
  const pimentaReino = db.ingredients.find(item => item.id === 'ing_pimenta_reino');
  if (pimentaReino) {
    pimentaReino.purchaseQty = 500;
    pimentaReino.purchaseCost = 34.84;
    pimentaReino.supplier = 'Armazém São Vito';
    pimentaReino.sourceType = 'documented';
    pimentaReino.sourceReference = 'Pedido online Armazém São Vito nº 9678784';
    pimentaReino.notes = 'Pimenta-do-reino em grão, pacote de 500g, documentada em 25/02/2026.';
    pimentaReino.description = 'Pimenta-do-reino em grão 500g';
  }
  const chimichurri = db.ingredients.find(item => item.id === 'ing_chimichurri');
  if (chimichurri) {
    chimichurri.purchaseQty = 500;
    chimichurri.purchaseCost = 19.42;
    chimichurri.supplier = 'Armazém São Vito';
    chimichurri.sourceType = 'documented';
    chimichurri.sourceReference = 'Pedido online Armazém São Vito nº 9678784';
  }
  const fumacaPo = db.ingredients.find(item => item.id === 'ing_fumaca_po');
  if (fumacaPo) {
    fumacaPo.purchaseQty = 1000;
    fumacaPo.purchaseCost = 19.43;
    fumacaPo.supplier = 'Armazém São Vito';
    fumacaPo.sourceType = 'documented';
    fumacaPo.sourceReference = 'Pedido online Armazém São Vito nº 9678784';
  }

  const saoVitoOrder = db.purchaseOrders.find(item => item.id === 'ord_armazem_sao_vito_9678784');
  if (saoVitoOrder) {
    saoVitoOrder.paymentStatus = 'paid';
    saoVitoOrder.notes = 'Pedido online confirmado e tratado como compra paga, com itens secos usados na operação.';
    saoVitoOrder.evidenceType = 'documented';
    saoVitoOrder.evidenceSource = 'Captura de tela do pedido online + conferência manual dos itens';
  }
  const saoVitoSupplier = db.suppliers.find(item => item.id === 'sup_armazem_sao_vito');
  if (saoVitoSupplier) {
    saoVitoSupplier.evidenceType = 'documented';
    saoVitoSupplier.evidenceSource = 'Fornecedor confirmado por captura de pedido online usada no histórico de compras';
    saoVitoSupplier.notes = 'Fornecedor de secos e temperos da Zona Cerealista com pedido documentado em 25/02/2026.';
  }
  db.purchaseItems.forEach(item => {
    if (item.id === 'pit_saovito_alho_po') {
      item.resourceType = 'ingredient';
      item.resourceId = 'ing_alho_po';
    }
    if (item.id === 'pit_saovito_cebola_po') {
      item.resourceType = 'ingredient';
      item.resourceId = 'ing_cebola_po';
    }
    if (item.id === 'pit_saovito_caldo_galinha') {
      item.resourceType = 'ingredient';
      item.resourceId = 'ing_caldo_galinha_po';
    }
    if (item.id === 'pit_saovito_pimenta_reino') {
      item.resourceType = 'ingredient';
      item.resourceId = 'ing_pimenta_reino';
    }
    if (item.id === 'pit_saovito_canela') {
      item.resourceType = 'ingredient';
      item.resourceId = 'ing_canela_moida';
    }
    normalizeBeverageItemLink(item);
  });

  db.purchaseOrders.forEach(order => {
    order.paymentStatus = 'paid';
  });
  db.inputs.forEach(input => {
    if (input.inputType !== 'quote') input.paymentStatus = 'paid';
  });

  removeStaleEvidenceFiles();
}

function writeManifest(rows, referenceCopies) {
  const lines = [
    '# Manifesto de evidências 2026',
    '',
    'Arquivos importados, reconciliados e vinculados ao PWA em 2026.',
    '',
    '## Lançamentos',
    '',
    '| Data | Tipo | Fornecedor | Lançamento | Valor | Input | Compra | Arquivos |',
    '|---|---|---|---|---:|---|---|---|'
  ];

  rows.sort(sortByDateThenLabel).forEach(row => {
    lines.push(`| ${row.date || '—'} | ${row.type || 'input'} | ${row.supplier || '—'} | ${row.label || '—'} | ${brl(row.total || 0)} | ${row.inputId || '—'} | ${row.orderId || '—'} | ${(row.files || []).join('<br>') || '—'} |`);
  });

  lines.push('', '## Arquivos de apoio');
  if (referenceCopies.length) {
    referenceCopies.forEach(file => lines.push(`- ${file}`));
  } else {
    lines.push('- Nenhum arquivo de apoio copiado.');
  }
  lines.push('');
  fs.writeFileSync(MANIFEST_PATH, `${lines.join('\n')}\n`);
}

function writePendingFile(rows) {
  const seen = new Set();
  const deduped = rows.filter(row => {
    const key = `${row.file}|${row.reason}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const lines = [
    '# Pendências',
    '',
    'Arquivos que ficaram com leitura parcial, dúvida documental ou conflito de valores após a organização das evidências.',
    ''
  ];
  if (deduped.length) {
    deduped.forEach(row => {
      lines.push(`- \`${row.file}\`: ${row.reason}`);
    });
  } else {
    lines.push('Nenhuma pendência aberta após as confirmações da operação.');
  }
  lines.push('');
  fs.writeFileSync(PENDING_PATH, `${lines.join('\n')}\n`);
}

function main() {
  const db = readJson(DB_PATH);
  db.suppliers = Array.isArray(db.suppliers) ? db.suppliers : [];
  db.inputs = Array.isArray(db.inputs) ? db.inputs : [];
  db.purchaseOrders = Array.isArray(db.purchaseOrders) ? db.purchaseOrders : [];
  db.purchaseItems = Array.isArray(db.purchaseItems) ? db.purchaseItems : [];
  db.expenseEntries = Array.isArray(db.expenseEntries) ? db.expenseEntries : [];

  ensureDir(DOCS_ROOT);

  const manifestRows = [];
  const pendingRows = [];
  const referenceCopies = referenceFiles.map(copyReferenceFile).filter(Boolean);
  const importEntries = [...organizedEntries, ...lot27Entries, ...pdfEntries.filter(entry => !entry.supportingOnly)];

  reconcileExistingPmgMarch(db, manifestRows, pendingRows);

  importEntries.forEach(entry => {
    const supplierId = ensureSupplier(db, entry);
    const copiedPaths = (entry.files || []).map((file, index) => copyFile(file, entry.key, index));
    const inputRecord = buildInputRecord(entry, supplierId, copiedPaths);
    upsertRecord(db.inputs, inputRecord);

    const kind = orderKind(entry);
    let orderRecord = null;
    let itemRows = [];
    if (kind === 'purchase') {
      itemRows = entryItems(entry);
      orderRecord = buildOrderRecord(entry, supplierId, inputRecord.id);
      upsertRecord(db.purchaseOrders, orderRecord);
      removeOrderItems(db, orderRecord.id);
      db.purchaseItems.push(...orderItemRows(orderRecord.id, supplierId, itemRows, orderRecord.evidenceSource));

      const subtotal = itemRows.reduce((sum, row) => sum + num(row.totalPrice), 0);
      if (itemRows.length && Math.abs(subtotal - num(entry.totalAmount)) > 0.05) {
        addPending(
          pendingRows,
          sourceRelativeToRepo(firstAvailableFile(entry.files || [])),
          `A soma dos itens lançados (${brl(subtotal)}) não bate exatamente com o total do documento (${brl(entry.totalAmount)}).`
        );
      }
    }

    manifestRows.push({
      date: entry.date,
      type: kind === 'purchase' ? 'compra' : 'input',
      label: entry.label || inputRecord.title,
      supplier: entry.supplierName,
      total: entry.totalAmount,
      inputId: inputRecord.id,
      orderId: orderRecord?.id || '',
      files: copiedPaths
    });
  });

  postImportCleanup(db);
  knownPendingNotes.forEach(row => addPending(pendingRows, row.file, row.reason));
  writeManifest(manifestRows, referenceCopies);
  writePendingFile(pendingRows);
  writeJson(DB_PATH, db);

  const summary = {
    suppliers: db.suppliers.length,
    inputs: db.inputs.length,
    purchaseOrders: db.purchaseOrders.length,
    purchaseItems: db.purchaseItems.length,
    expenseEntries: db.expenseEntries.length,
    manifest: path.relative(ROOT, MANIFEST_PATH).replace(/\\/g, '/'),
    pendencias: path.relative(ROOT, PENDING_PATH).replace(/\\/g, '/')
  };
  console.log(JSON.stringify(summary, null, 2));
}

main();
