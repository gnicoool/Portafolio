import stackCatalog from '../data/stack.json';

const stackLogos = import.meta.glob('../assets/logos/*.{svg,png,webp}', {
  eager: true,
  import: 'default',
});

const LOGO_ALIASES = {
  typescript: 'typecript.svg',
  postgresql: 'postgres.svg',
};

const CATEGORY_ORDER = ['frontend', 'backend', 'tool'];

const CATEGORY_LABELS = {
  frontend: { es: 'Frontend', en: 'Frontend' },
  backend: { es: 'Backend', en: 'Backend' },
  tool: { es: 'Herramientas', en: 'Tools' },
};

function resolveStackLogo(jsonPath, id) {
  const candidates = [
    jsonPath?.split('/').pop(),
    LOGO_ALIASES[id],
    id ? `${id}.svg` : null,
  ].filter(Boolean);

  for (const filename of candidates) {
    const match = Object.entries(stackLogos).find(([path]) => path.endsWith(`/${filename}`));
    if (match) return match[1];
  }

  return null;
}

export function mapStackItem(raw, lang = 'es') {
  const categories = raw.categorias ?? (raw.categoria ? [raw.categoria] : []);

  return {
    id: raw.id,
    name: raw.nombre,
    icon: resolveStackLogo(raw.logo, raw.id),
    level: raw.nivel[lang],
    categories,
    category: categories[0] ?? null,
  };
}

export function getStackItems(lang = 'es') {
  return stackCatalog.map((item) => mapStackItem(item, lang));
}

export function getStackCategories(lang = 'es') {
  const grouped = {};

  for (const item of getStackItems(lang)) {
    for (const categoryId of item.categories) {
      if (!grouped[categoryId]) {
        grouped[categoryId] = {
          id: categoryId,
          label: CATEGORY_LABELS[categoryId]?.[lang] ?? categoryId,
          items: [],
        };
      }

      grouped[categoryId].items.push(item);
    }
  }

  return CATEGORY_ORDER.filter((id) => grouped[id]).map((id) => grouped[id]);
}
