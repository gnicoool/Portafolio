import { ChevronDown } from 'react-feather';
import { PageLayout } from '../../components/PageLayout/PageLayout.jsx';
import { AboutMe } from '../../components/aboutme/aboutme.jsx';
import { Contact } from '../../components/contact/contact.jsx';
import { GhostButton } from '../../components/Ghostbutton/Ghostbutton.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import heroIllustration from '../../assets/imagen.png';
import './Home.css';

export function Home() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section id="home" className="home__hero">
        <div className="home__hero-copy">
          <p className="home__hero-eyebrow">{t.home.eyebrow}</p>
          <h1 className="home__hero-title">{t.home.title}</h1>

          <div className="home__hero-pills">
            <GhostButton href="#sobre">{t.home.about}</GhostButton>
            <GhostButton href="/proyectos">{t.home.projects}</GhostButton>
            <GhostButton href="/stack">{t.home.stack}</GhostButton>
            <GhostButton href="#contacto">{t.home.contact}</GhostButton>
          </div>
        </div>

        <div className="home__hero-visual">
          <div className="home__hero-illustration">
            <img src={heroIllustration} alt="" />
          </div>

          <a href="#sobre" className="home__scroll-cue" aria-label={t.home.scrollLabel}>
            <ChevronDown size={24} />
          </a>
        </div>
      </section>

      <AboutMe />
      <Contact />
    </PageLayout>
  );
}
