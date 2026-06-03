import { Navbar } from './Navbar';

export default {
  title: 'Portfolio/Navbar',
};

export const Default = () => (
  <div className="portfolio-page-bg">
    <Navbar name="Jackelyn Girón" githubUrl="https://github.com/gnicoool" />
    <div style={{ paddingTop: '80px', display: 'flex', justifyContent: 'center' }}>
      <p className="portfolio-muted-text" style={{ fontSize: '0.85rem', opacity: 0.7 }}>
        Haz clic en el ícono del menú para abrir la navegación
      </p>
    </div>
  </div>
);

export const OverContent = () => (
  <div className="portfolio-page-bg">
    <Navbar name="Jackelyn Girón" githubUrl="https://github.com/gnicoool" />
    <main
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '100px 40px 40px',
        textAlign: 'left',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--color-title)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '16px',
        }}
      >
        Proyectos
      </h1>
      <p className="portfolio-muted-text" style={{ lineHeight: 1.7 }}>
        Contenido de la página aquí. El navbar permanece fijo al hacer scroll.
      </p>
      {Array.from({ length: 12 }).map((_, index) => (
        <p
          key={index}
          className="portfolio-muted-text"
          style={{ marginTop: '16px', lineHeight: 1.7, opacity: 0.65 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      ))}
    </main>
  </div>
);
