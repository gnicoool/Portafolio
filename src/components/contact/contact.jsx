import { Download, GitHub, Linkedin, Mail } from 'react-feather';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './contact.css';

const LINK_DEFS = [
  {
    id: 'linkedin',
    labelKey: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jackelyn-girón-5ba84b39a',
    external: true,
    icon: Linkedin,
  },
  {
    id: 'github',
    labelKey: 'GitHub',
    href: 'https://github.com/gnicoool',
    external: true,
    icon: GitHub,
  },
  {
    id: 'mail',
    labelKey: 'mail',
    href: 'mailto:nicollegiron11@gmail.com',
    icon: Mail,
  },
  {
    id: 'cv',
    labelKey: 'downloadCv',
    href: '#',
    download: true,
    icon: Download,
  },
];

export function Contact() {
  const { t } = useLanguage();

  const links = LINK_DEFS.map((def) => ({
    ...def,
    label:
      def.id === 'mail'
        ? t.contact.mail
        : def.id === 'cv'
          ? t.contact.downloadCv
          : def.labelKey,
  }));

  return (
    <section className="contact portfolio-section" id="contacto">
      <h2 className="portfolio-section__title">{t.contact.title}</h2>
      <p className="portfolio-section__subtitle contact__subtitle">{t.contact.subtitle}</p>

      <div className="contact__links">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.id}
              href={link.href}
              className={`contact__btn contact__btn--${link.id}`}
              aria-label={link.label}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              download={link.download || undefined}
            >
              <Icon size={22} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
