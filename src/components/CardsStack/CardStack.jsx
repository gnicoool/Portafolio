import './CardStack.css';

export function CardStack({ name, icon, level }) {
  return (
    <article className="stack-card">
      <span className="stack-card__name">{name}</span>
      <div className="stack-card__icon-wrapper">
        {icon ? (
          <img src={icon} alt={name} className="stack-card__icon" />
        ) : (
          <div className="stack-card__icon stack-card__icon--placeholder" aria-hidden="true" />
        )}
      </div>
      <span className="stack-card__level">{level}</span>
    </article>
  );
}
