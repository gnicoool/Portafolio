import { useMemo, useState } from 'react';
import { getProjects } from '../../utils/mapProject';
import { CardsProyecto } from '../CardsProyecto/CardsProyecto';
import { ModalProyecto } from '../CardsProyecto/ModalProyecto/ModalProyecto';
import './ProyectosSection.css';

export function ProyectosSection({ lang = 'es' }) {
  const [selected, setSelected] = useState(null);
  const projects = useMemo(() => getProjects(lang), [lang]);

  return (
    <section className="proyectos-section" id="proyectos">
      <h2 className="proyectos-section__title">Proyectos</h2>
      <div className="proyectos-section__grid">
        {projects.map((project) => (
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
      {selected && <ModalProyecto project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
