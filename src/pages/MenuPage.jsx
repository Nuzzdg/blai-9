import { useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { drinkCategories, imageUrl, menuCategories, menuItems, restaurant } from '../data/menu.js';

const officialMenuUrl = 'https://menu-bcncook.web.app/blai9';

function FoodItem({ item, index }) {
  return (
    <article className={item.image ? 'menu-entry menu-entry--image' : 'menu-entry'}>
      {item.image && (
        <img className="menu-entry-image" src={imageUrl(item.image, 240)} alt={item.alt} loading="lazy" />
      )}
      <div className="menu-entry-copy">
        <span className="menu-entry-number">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3>{item.name}</h3>
          {item.vegetarian && <span className="menu-entry-tag">Vegetarian</span>}
          {(item.allergens?.length > 0 || item.traces?.length > 0) ? (
            <details className="menu-allergens">
              <summary>Allergens &amp; traces</summary>
              <p><strong>Contains:</strong> {item.allergens.length ? item.allergens.join(', ') : 'None listed online'}</p>
              <p><strong>May contain traces of:</strong> {item.traces.length ? item.traces.join(', ') : 'None listed online'}</p>
            </details>
          ) : (
            <p className="menu-allergens-note">Ask the bar for allergen information.</p>
          )}
        </div>
      </div>
      <strong className="menu-entry-price">€{item.price.toFixed(2)}</strong>
    </article>
  );
}

function DrinkItem({ item }) {
  return (
    <article className={item.image ? 'menu-entry menu-entry--drink menu-entry--image' : 'menu-entry menu-entry--drink'}>
      {item.image && (
        <img className="menu-entry-image" src={imageUrl(item.image, 240)} alt={item.alt} loading="lazy" />
      )}
      <div className="menu-entry-copy">
        <div>
          <h3>{item.name}</h3>
          <ul className="drink-options">
            {item.options.map(([label, price]) => (
              <li key={`${label}-${price}`}>{label && <span>{label}</span>}<strong>${price.toFixed(2)}</strong></li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function MenuPage() {
  const [active, setActive] = useState('all');
  const [activeDrink, setActiveDrink] = useState('All drinks');
  const foodSections = menuCategories
    .filter((category) => category.id === 'pinchos' || category.id === 'tapas')
    .filter((category) => active === 'all' || category.id === active)
    .map((category) => ({
      label: category.label,
      id: category.id,
      items: menuItems.filter((item) => item.category === category.id),
      type: 'food',
    }));
  const visibleDrinkCategories = (active === 'all' || active === 'drinks')
    ? drinkCategories.filter((category) => activeDrink === 'All drinks' || category.label === activeDrink)
    : [];
  const sections = [
    ...foodSections,
    ...visibleDrinkCategories.map((category) => ({
      label: category.label,
      id: category.label.toLowerCase().replaceAll(' ', '-'),
      items: category.items,
      type: 'drinks',
    })),
  ];

  return (
    <main className="menu-page" id="main">
      <header className="menu-page-header">
        <a href={`${import.meta.env.BASE_URL}#/`} className="back-link"><ArrowLeft size={16} /> BACK TO BLAI 9</a>
        <p className="eyebrow"><span>THE BAR MENU</span> · {restaurant.price.toUpperCase()}</p>
        <h1>A LITTLE<br /><i>OF EVERYTHING.</i></h1>
        <p className="menu-page-intro">The pinchos, tapas and drinks on Blai 9’s published menu—prices and allergen notes included where listed.</p>
      </header>
      <div className="menu-controls" role="group" aria-label="Filter the menu">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={active === category.id ? 'filter-button filter-button--active' : 'filter-button'}
            aria-pressed={active === category.id}
            onClick={() => {
              setActive(category.id);
              if (category.id === 'drinks') setActiveDrink('All drinks');
            }}
          >
            {category.label}
          </button>
        ))}
      </div>
      {(active === 'drinks' || active === 'all') && (
        <div className="drink-controls" role="group" aria-label="Filter drinks by type">
          {['All drinks', ...drinkCategories.map((category) => category.label)].map((label) => (
            <button
              key={label}
              type="button"
              className={activeDrink === label ? 'drink-filter drink-filter--active' : 'drink-filter'}
              aria-pressed={activeDrink === label}
              onClick={() => {
                setActiveDrink(label);
                setActive('drinks');
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <div className="menu-sections">
        {sections.map((section) => (
          <section className="menu-section" key={section.id} aria-labelledby={`menu-${section.id}`}>
            <div className="menu-section-heading">
              <h2 id={`menu-${section.id}`}>{section.label}</h2>
              <span>{section.items.length} {section.type === 'food' ? 'items' : 'options'}</span>
            </div>
            <div className="menu-section-grid">
              {section.items.map((item, index) => section.type === 'food'
                ? <FoodItem item={item} index={index} key={item.name} />
                : <DrinkItem item={item} key={item.name} />)}
            </div>
          </section>
        ))}
      </div>
      <aside className="menu-footnote">
        <p>MENU NOTES</p>
        <span>
          Menu selection and availability can change. The official digital menu displays food prices in euros and drink prices with a dollar sign; drink prices are shown here exactly as published. Some items have no allergen details online, so please check with the bar before ordering if you have an allergy.
        </span>
      </aside>
      <a className="menu-directions" href={officialMenuUrl} target="_blank" rel="noreferrer">
        OPEN THE OFFICIAL LIVE MENU <ArrowUpRight size={18} />
      </a>
      <a className="menu-map-link" href={restaurant.map} target="_blank" rel="noreferrer">
        FIND US ON CARRER DE BLAI <ArrowUpRight size={16} />
      </a>
    </main>
  );
}
