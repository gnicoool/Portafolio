import { useEffect } from "react";
import {Eye, GitHub} from 'react-feather';
import "./ModalProyecto.css";

export function ModalProyecto({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!project) return null;

  const { image, title, stack = [], description, technicalDecision, learning, linkRepo, linkDesplegado } = project;

  return (
    <div className="pm-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="pm-panel" onClick={(e) => e.stopPropagation()}>

        {/* close */}
        <button className="pm-close" onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {/* image */}
        <div className="pm-image-wrapper">
          {image
            ? <img src={image} alt={title} className="pm-image" />
            : <div className="pm-image-placeholder" />}
          <div className="pm-image-overlay" />
        </div>

        {/* content */}
        <div className="pm-content">
          <div className="pm-header">
            <h2 className="pm-title">{title}</h2>
            <div className="pm-links">
              {linkRepo && (
                <a
                  href={linkRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pm-icon-btn"
                  aria-label="Ver repositorio"
                >
                  <GitHub size={18} />
                </a>
              )}
              {linkDesplegado && (
                <a
                  href={linkDesplegado}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pm-icon-btn"
                  aria-label="Ver proyecto desplegado"
                >
                  <Eye size={18} />
                </a>
              )}
            </div>
          </div>

          <div className="pm-stack">
            {stack.map((tech) => (
              <span key={tech} className="pm-tag">{tech}</span>
            ))}
          </div>

          <div className="pm-sections">
            <section className="pm-section">
              <h4 className="pm-section-label">
                <span className="pm-section-icon"></span> ¿Qué resuelve?
              </h4>
              <p className="pm-section-text">{description}</p>
            </section>

            <section className="pm-section">
              <h4 className="pm-section-label">
                <span className="pm-section-icon"></span> Decisión técnica
              </h4>
              <p className="pm-section-text">{technicalDecision}</p>
            </section>

            <section className="pm-section">
              <h4 className="pm-section-label">
                <span className="pm-section-icon"></span> Aprendizaje
              </h4>
              <p className="pm-section-text">{learning}</p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
