import { Download, GitHub, Linkedin, Mail } from 'react-feather';
import './contact.css';

const LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jackelyn-girón-5ba84b39a',
    external: true,
    icon: Linkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/gnicoool',
    external: true,
    icon: GitHub,
  },
  {
    id: 'mail',
    label: 'Correo',
    href: 'mailto:nicollegiron11@gmail.com',
    icon: Mail,
  },
  {
    id: 'cv',
    label: 'Descargar CV',
    href: '#',
    download: true,
    icon: Download,
  },
];

export function Contact() {
  return (
    <section className="contact portfolio-section" id="contacto">
      <h2 className="portfolio-section__title">Contacto</h2>
      <p className="portfolio-section__subtitle contact__subtitle">
        ¿Tienes un proyecto en mente? Contáctame.
      </p>

      <div className="contact__links">
        {LINKS.map((link) => {
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
