import {Eye, GitHub} from 'react-feather';
import "./CardsProyecto.css";

export function CardsProyecto({ image, title, stack = [], onVerMas, linkRepo, linkDesplegado }) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        {image ? (
          <img src={image} alt={title} className="project-card__image" />
        ) : (
          <div className="project-card__image-placeholder" />
        )}
        <div className="project-card__image-overlay" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>

        <div className="project-card__stack">
          {stack.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {linkRepo && (
            <a
              href={linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__icon-btn"
              aria-label="Ver repositorio"
            >
              <GitHub size={16} />
            </a>
          )}
          {linkDesplegado && (
            <a
              href={linkDesplegado}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__icon-btn"
              aria-label="Ver proyecto"
            >
              <Eye size={16} />
            </a>
          )}
          <button className="project-card__btn" onClick={onVerMas}>
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
}
