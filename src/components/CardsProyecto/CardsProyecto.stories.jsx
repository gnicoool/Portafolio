import { useState } from 'react';
import { getProjects } from '../../utils/mapProject';
import { CardsProyecto } from './CardsProyecto';
import { ModalProyecto } from './ModalProyecto/ModalProyecto';

const projects = getProjects('es');
const storyShell = {
  background: 'linear-gradient(135deg, #1a1f5e 0%, #2d3580 60%, #4a56b0 100%)',
  minHeight: '100vh',
};

export default {
  title: 'Portfolio/ProjectCard',
};

export const SingleCard = () => {
  const [open, setOpen] = useState(false);
  const project = projects[0];

  return (
    <div
      style={{
        ...storyShell,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
      }}
    >
      <CardsProyecto
        image={project.image}
        title={project.title}
        stack={project.stack}
        linkRepo={project.linkRepo}
        linkDesplegado={project.linkDesplegado}
        onVerMas={() => setOpen(true)}
      />
      {open && <ModalProyecto project={project} onClose={() => setOpen(false)} />}
    </div>
  );
};

export const CardGrid = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ ...storyShell, padding: '48px 40px' }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          color: '#e8eaff',
          fontSize: '2.2rem',
          marginBottom: '40px',
          fontWeight: 700,
        }}
      >
        Proyectos
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '960px',
        }}
      >
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
    </div>
  );
};

export const ModalOpen = () => (
  <div style={storyShell}>
    <ModalProyecto project={projects[1]} onClose={() => {}} />
  </div>
);

export const CardNoImage = () => (
  <div
    style={{
      ...storyShell,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
    }}
  >
    <CardsProyecto title="Proyecto sin imagen" stack={['Vue', 'Firebase', 'TailwindCSS']} onVerMas={() => {}} />
  </div>
);
