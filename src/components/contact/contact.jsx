import { GitHub, Linkedin, Mail } from 'react-feather';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './contact.css';

const ICON_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jackelyn-girón-5ba84b39a',
    icon: Linkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/gnicoool',
    icon: GitHub,
  },
];

const MAIL = 'nicollegiron11@gmail.com';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact portfolio-section" id="contacto">
      <h2 className="portfolio-section__title">{t.contact.title}</h2>
      <p className="portfolio-section__subtitle contact__subtitle">{t.contact.subtitle}</p>

      <div className="contact__links">
        {ICON_LINKS.map(({ id, label, href, icon: Icon }) => (
          <a
            key={id}
            href={href}
            className={`contact__btn contact__btn--${id}`}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={22} />
          </a>
        ))}

        <a
          href={`mailto:${MAIL}`}
          className="contact__btn contact__btn--mail"
          aria-label={t.contact.mail}
        >
          <Mail size={18} />
          <span>{MAIL}</span>
        </a>
      </div>
    </section>
  );
}
