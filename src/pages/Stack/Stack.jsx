import { useMemo, useState } from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout.jsx';
import { GhostButton } from '../../components/Ghostbutton/Ghostbutton.jsx';
import { CardStack } from '../../components/CardsStack/CardStack.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { getStackCategories } from '../../utils/mapStack.js';
import './Stack.css';

export function Stack() {
  const { lang, t } = useLanguage();
  const categories = useMemo(() => getStackCategories(lang), [lang]);
  const [activeFilter, setActiveFilter] = useState('todos');

  const visible =
    activeFilter === 'todos' ? categories : categories.filter((cat) => cat.id === activeFilter);

  return (
    <PageLayout>
      <div className="stack-page">
        <header className="stack-page__header">
          <p className="stack-page__eyebrow">{t.stack.eyebrow}</p>
          <h1 className="stack-page__title">{t.stack.title}</h1>

          <div className="stack-page__filters">
            <GhostButton
              onClick={() => setActiveFilter('todos')}
              className={activeFilter === 'todos' ? 'ghost-btn--active' : ''}
            >
              {t.stack.filterAll}
            </GhostButton>
            {categories.map((cat) => (
              <GhostButton
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={activeFilter === cat.id ? 'ghost-btn--active' : ''}
              >
                {cat.label}
              </GhostButton>
            ))}
          </div>
        </header>

        <div className="stack-page__categories">
          {visible.map((cat, i) => (
            <section
              key={cat.id}
              id={`cat-${cat.id}`}
              className="stack-page__category"
              style={{ '--delay': `${i * 0.1}s` }}
            >
              <h2 className="stack-page__category-label">{cat.label}</h2>
              <div className="stack-page__grid">
                {cat.items.map((item) => (
                  <CardStack key={item.id} name={item.name} icon={item.icon} level={item.level} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
