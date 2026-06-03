import './Ghostbutton.css';

export function GhostButton({ children, href, onClick, target, rel, className = '' }) {
  const classNames = `ghost-btn ${className}`.trim();

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      type={Tag === 'button' ? 'button' : undefined}
      className={classNames}
    >
      <span className="ghost-btn__text">{children}</span>
      <span className="ghost-btn__bg" />
    </Tag>
  );
}
