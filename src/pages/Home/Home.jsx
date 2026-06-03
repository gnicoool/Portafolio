import { ChevronDown } from 'react-feather';
import { PageLayout } from '../../components/PageLayout/PageLayout.jsx';
import { AboutMe } from '../../components/aboutme/aboutme.jsx';
import { Contact } from '../../components/contact/contact.jsx';
import { GhostButton } from '../../components/Ghostbutton/Ghostbutton.jsx';
import heroIllustration from '../../assets/imagen.png';
import './Home.css';

export function Home() {
  return (
    <PageLayout>
      <section id="home" className="home__hero">
        <div className="home__hero-copy">
          <p className="home__hero-eyebrow">Web developer</p>
          <h1 className="home__hero-title">Portafolio</h1>

          <div className="home__hero-pills">
            <GhostButton href="#sobre">Sobre mí</GhostButton>
            <GhostButton href="/proyectos">Proyectos</GhostButton>
            <GhostButton href="/stack">Stack</GhostButton>
            <GhostButton href="#contacto">Contacto</GhostButton>
          </div>
        </div>

        <div className="home__hero-visual">
          <div className="home__hero-illustration">
            <img src={heroIllustration} alt="" />
          </div>

          <a href="#sobre" className="home__scroll-cue" aria-label="Ir a Sobre mí">
            <ChevronDown size={24} />
          </a>
        </div>
      </section>

      <AboutMe />
      <Contact />
    </PageLayout>
  );
}
