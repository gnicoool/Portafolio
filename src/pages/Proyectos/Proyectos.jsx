import { useMemo, useState } from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout.jsx';
import { GhostButton } from '../../components/Ghostbutton/Ghostbutton.jsx';
import { CardsProyecto } from '../../components/CardsProyecto/CardsProyecto.jsx';
import { ModalProyecto } from '../../components/CardsProyecto/ModalProyecto/ModalProyecto.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { getProjects } from '../../utils/mapProject.js';
import './Proyectos.css';

const FILTER_IDS = ['todos', 'Fullstack', 'Frontend'];

export function Proyectos() {
  const { lang, t } = useLanguage();
  const projects = useMemo(() => getProjects(lang), [lang]);
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedId, setSelectedId] = useState(null);

  const filters = FILTER_IDS.map((id) => ({
    id,
    label: id === 'todos' ? t.projects.filterAll : id,
  }));

  const visible = activeFilter === 'todos'
    ? projects
    : projects.filter((p) => p.tipo === activeFilter);

  const selected = selectedId != null ? (projects.find((p) => p.id === selectedId) ?? null) : null;

  return (
    <PageLayout>
      <div className="proyectos-page">
        <header className="proyectos-page__header">
          <p className="proyectos-page__eyebrow">{t.projects.eyebrow}</p>
          <h1 className="proyectos-page__title">{t.projects.title}</h1>

          <div className="proyectos-page__filters" role="tablist">
            {filters.map((f) => (
              <GhostButton
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={activeFilter === f.id ? 'ghost-btn--active' : ''}
              >
                {f.label}
              </GhostButton>
            ))}
          </div>
        </header>

        <div className="proyectos-page__grid">
          {visible.map((project) => (
            <CardsProyecto
              key={project.id}
              image={project.image}
              title={project.title}
              stack={project.stack}
              linkRepo={project.linkRepo}
              linkDesplegado={project.linkDesplegado}
              onVerMas={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </div>

      {selected && <ModalProyecto project={selected} onClose={() => setSelectedId(null)} />}
    </PageLayout>
  );
}
