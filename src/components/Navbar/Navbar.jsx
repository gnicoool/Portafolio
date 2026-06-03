import { useEffect, useRef, useState } from 'react';
import { GitHub, Globe, User, Terminal, Layers, Phone, Menu, X } from 'react-feather';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'idioma', label: 'Idioma', href: '#' },
  { id: 'sobre', label: 'Sobre mí', href: '#sobre' },
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'stack', label: 'Stack', href: '#stack' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

const NAV_ICONS = {
  idioma: Globe,
  sobre: User,
  proyectos: Terminal,
  stack: Layers,
  contacto: Phone,
};

export function Navbar({ name = 'Jackelyn Girón', githubUrl = 'https://github.com/gnicoool' }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  useEffect(() => {
    const handler = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <header className="navbar">
      <span className="navbar__name">{name}</span>

      <div className="navbar__actions">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__icon-btn"
          aria-label="GitHub"
        >
          <GitHub size={18} />
        </a>

        <div className="navbar__menu-wrapper" ref={menuRef}>
          <button
            type="button"
            className={`navbar__icon-btn${open ? ' navbar__icon-btn--active' : ''}`}
            onClick={() => setOpen((value) => !value)}
            aria-label="Menú"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav
            className={`navbar__dropdown${open ? ' navbar__dropdown--open' : ''}`}
            aria-hidden={!open}
          >
            <ul className="navbar__dropdown-list">
              {NAV_ITEMS.map((item, index) => {
                const Icon = NAV_ICONS[item.id];

                return (
                  <li key={item.id} style={{ '--i': index }}>
                    <a
                      href={item.href}
                      className="navbar__dropdown-item"
                      onClick={() => setOpen(false)}
                    >
                      <span className="navbar__dropdown-icon">
                        <Icon size={16} />
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
