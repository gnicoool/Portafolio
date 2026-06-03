import { useEffect, useRef, useState } from 'react';
import { ChevronDown, GitHub, Globe, Home, Layers, Menu, Phone, Terminal, User, X } from 'react-feather';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './Navbar.css';

const NAV_ICONS = {
  home: Home,
  idioma: Globe,
  sobre: User,
  proyectos: Terminal,
  stack: Layers,
  contacto: Phone,
};

const LANG_OPTIONS = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
];

export function Navbar({ name = 'Jackelyn Girón', githubUrl = 'https://github.com/gnicoool' }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const menuRef = useRef(null);
  const { lang, setLang, t } = useLanguage();

  const NAV_ITEMS = [
    { id: 'home', label: t.nav.home, href: '/#home' },
    { id: 'sobre', label: t.nav.about, href: '/#sobre' },
    { id: 'proyectos', label: t.nav.projects, href: '/proyectos' },
    { id: 'stack', label: t.nav.stack, href: '/stack' },
    { id: 'contacto', label: t.nav.contact, href: '/#contacto' },
    { id: 'idioma', label: t.nav.language, href: null },
  ];

  useEffect(() => {
    if (!open) {
      setLangOpen(false);
      return;
    }

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

  function handleSelectLang(code) {
    setLang(code);
    setLangOpen(false);
    setOpen(false);
  }

  return (
    <header className="navbar">
      <a href="/#home" className="navbar__name">
        <img src="/favicon.svg" alt="" className="navbar__favicon" aria-hidden="true" />
        {name}
      </a>

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
            aria-label={t.nav.menu}
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

                if (item.id === 'idioma') {
                  return (
                    <li key={item.id} style={{ '--i': index }}>
                      <button
                        type="button"
                        className="navbar__dropdown-item navbar__dropdown-item--button"
                        onClick={() => setLangOpen((v) => !v)}
                        aria-expanded={langOpen}
                      >
                        <span className="navbar__dropdown-icon">
                          <Icon size={16} />
                        </span>
                        <span>{item.label}</span>
                        <ChevronDown
                          size={13}
                          className={`navbar__lang-chevron${langOpen ? ' navbar__lang-chevron--open' : ''}`}
                        />
                      </button>

                      <div className={`navbar__lang-submenu${langOpen ? ' navbar__lang-submenu--open' : ''}`}>
                        {LANG_OPTIONS.map(({ code, label }) => (
                          <button
                            key={code}
                            type="button"
                            className={`navbar__lang-option${lang === code ? ' navbar__lang-option--active' : ''}`}
                            onClick={() => handleSelectLang(code)}
                          >
                            <span className="navbar__lang-dot" />
                            {label}
                          </button>
                        ))}
                      </div>
                    </li>
                  );
                }

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
