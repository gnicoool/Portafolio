import proyects from '../data/proyects.json';
import stackCatalog from '../data/stack.json';

const stackById = Object.fromEntries(stackCatalog.map((item) => [item.id, item.nombre]));

const projectImages = import.meta.glob('../assets/proyects/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

function resolveProjectImage(jsonPath) {
  if (!jsonPath) return null;

  const filename = jsonPath.split('/').pop();
  const match = Object.entries(projectImages).find(([path]) => path.endsWith(`/${filename}`));

  return match?.[1] ?? null;
}

export function mapProject(raw, lang = 'es') {
  return {
    id: raw.id,
    tipo: raw.tipo,
    title: raw.titulo,
    image: resolveProjectImage(raw.imagen),
    stack: raw.stackUsado.map((id) => stackById[id] ?? id),
    linkRepo: raw.linkRepo,
    linkDesplegado: raw.linkDesplegado,
    description: raw.queResuelve[lang],
    technicalDecision: raw.decisionTecnica[lang],
    learning: raw.aprendizaje[lang],
  };
}

export function getProjects(lang = 'es') {
  return proyects.map((project) => mapProject(project, lang));
}
