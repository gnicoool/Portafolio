import { useMemo, useState } from 'react';
import { getStackCategories } from '../../utils/mapStack';
import { CardStack } from '../CardsStack/CardStack';
import './StackSection.css';

export function StackSection({ lang = 'es', showAllCategories = false }) {
  const categories = useMemo(() => getStackCategories(lang), [lang]);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? 'frontend');

  const activeItems = categories.find((category) => category.id === activeCategory)?.items ?? [];

  if (showAllCategories) {
    return (
      <section className="stack-section" id="stack">
        <h2 className="stack-section__title">Stack</h2>
        {categories.map((category) => (
          <div key={category.id} className="stack-section__category-block">
            <h3 className="stack-section__category-title">{category.label}</h3>
            <div className="stack-section__grid">
              {category.items.map((item) => (
                <CardStack key={item.id} name={item.name} icon={item.icon} level={item.level} />
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="stack-section" id="stack">
      <h2 className="stack-section__title">Stack</h2>

      <div className="stack-section__filters" role="tablist" aria-label="Categorías de stack">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            className={`stack-section__filter${
              activeCategory === category.id ? ' stack-section__filter--active' : ''
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="stack-section__grid" role="tabpanel">
        {activeItems.map((item) => (
          <CardStack key={item.id} name={item.name} icon={item.icon} level={item.level} />
        ))}
      </div>
    </section>
  );
}
