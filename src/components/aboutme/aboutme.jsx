import { Download } from 'react-feather';
import { useLanguage, interpolate } from '../../context/LanguageContext.jsx';
import profilePhoto from '../../assets/FOTO.jpeg';
import cvPdf from '../../assets/Jackelyn-Giron-CV.pdf';
import './aboutme.css';

const CONTENT = {
  name: 'Jackelyn Girón',
  university: 'Universidad del Valle de Guatemala',
  cvUrl: cvPdf,
};

export function AboutMe() {
  const { t } = useLanguage();

  return (
    <section className="about portfolio-section" id="sobre">
      <div className="about__text">
        <h2 className="portfolio-section__title">{t.about.title}</h2>

        <p className="portfolio-section__text">
          {interpolate(t.about.intro, { name: CONTENT.name, university: CONTENT.university })}
        </p>

        <p className="portfolio-section__text">{t.about.bio}</p>
      </div>

      <div className="about__right">
        <div className="about__photo-wrapper">
          <img src={profilePhoto} alt={CONTENT.name} className="about__photo" />
        </div>
        <a href={CONTENT.cvUrl} download className="portfolio-outline-btn about__cv-btn">
          <Download size={15} />
          {t.about.downloadCv}
        </a>
      </div>
    </section>
  );
}
