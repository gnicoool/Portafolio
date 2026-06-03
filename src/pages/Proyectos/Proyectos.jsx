import { useMemo, useState } from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout.jsx';
import { GhostButton } from '../../components/Ghostbutton/Ghostbutton.jsx';
import { CardsProyecto } from '../../components/CardsProyecto/CardsProyecto.jsx';
import { ModalProyecto } from '../../components/CardsProyecto/ModalProyecto/ModalProyecto.jsx';
import { getProjects } from '../../utils/mapProject.js';
import './Proyectos.css';

const FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'Fullstack', label: 'Fullstack' },
  { id: 'Frontend', label: 'Frontend' },
];

export function Proyectos() {
  const projects = useMemo(() => getProjects('es'), []);
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selected, setSelected] = useState(null);

  const visible = activeFilter === 'todos'
    ? projects
    : projects.filter((p) => p.tipo === activeFilter);

  return (
    <PageLayout>
      <div className="proyectos-page">
        <header className="proyectos-page__header">
          <p className="proyectos-page__eyebrow">Trabajo</p>
          <h1 className="proyectos-page__title">Proyectos</h1>

          <div className="proyectos-page__filters" role="tablist">
            {FILTERS.map((f) => (
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
              onVerMas={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && <ModalProyecto project={selected} onClose={() => setSelected(null)} />}
    </PageLayout>
  );
}
