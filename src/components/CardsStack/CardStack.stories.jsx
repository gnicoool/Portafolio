import { useState } from 'react';
import { getStackCategories, getStackItems } from '../../utils/mapStack';
import { CardStack } from './CardStack';

const categories = getStackCategories('es');
const stackItems = getStackItems('es');

const storyShell = {
  background: 'linear-gradient(135deg, #1a1f5e 0%, #2d3580 60%, #4a56b0 100%)',
  minHeight: '100vh',
  padding: '48px 40px',
};

export default {
  title: 'Portfolio/CardStack',
};

export const SingleCard = () => (
  <div style={{ ...storyShell, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <CardStack {...stackItems[0]} />
  </div>
);

export const StackSection = () => {
  const [active, setActive] = useState(categories[0]?.id ?? 'frontend');
  const activeItems = categories.find((category) => category.id === active)?.items ?? [];

  return (
    <div style={storyShell}>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--color-title)',
          fontSize: '2.2rem',
          fontWeight: 700,
          margin: '0 0 28px',
        }}
      >
        Stack
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              color: active === category.id ? 'var(--color-title)' : 'var(--color-stack-text)',
              background: active === category.id ? 'var(--color-btn-bg)' : 'transparent',
              border: `1px solid ${
                active === category.id ? 'var(--color-tag-border)' : 'var(--color-border)'
              }`,
              borderRadius: 'var(--radius-btn)',
              padding: '6px 18px',
              cursor: 'pointer',
            }}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 140px), 1fr))',
          gap: '20px',
          maxWidth: '960px',
        }}
      >
        {activeItems.map((item) => (
          <CardStack key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export const AllCategories = () => (
  <div style={storyShell}>
    {categories.map((category) => (
      <div key={category.id} style={{ marginBottom: '44px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '20px',
          }}
        >
          {category.label}
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 140px), 1fr))',
            gap: '18px',
            maxWidth: '960px',
          }}
        >
          {category.items.map((item) => (
            <CardStack key={item.id} {...item} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
