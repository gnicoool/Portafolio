import { Download } from 'react-feather';
import profilePhoto from '../../assets/FOTO.jpeg';
import './aboutme.css';
const CONTENT = {
  name: 'Jackelyn Girón',
  university: 'Universidad del Valle de Guatemala',
  year: 'tercer año de Ing. Computación',
  bio: 'Desarrolladora FullStack y diseñadora UI/UX apasionada por construir productos digitales con buena experiencia de usuario.',
  cvUrl: '#',
};

export function AboutMe() {
  return (
    <section className="about portfolio-section" id="sobre">
      <div className="about__text">
        <h2 className="portfolio-section__title">Sobre mí</h2>

        <p className="portfolio-section__text">
          Soy {CONTENT.name}, estoy en mi {CONTENT.year} en la {CONTENT.university}.
        </p>

        <p className="portfolio-section__text">{CONTENT.bio}</p>
      </div>

      <div className="about__right">
        <div className="about__photo-wrapper">
          <img src={profilePhoto} alt={CONTENT.name} className="about__photo" />
        </div>
        <a href={CONTENT.cvUrl} download className="portfolio-outline-btn about__cv-btn">
          <Download size={15} />
          Descargar CV
        </a>
      </div>
    </section>
  );
}
