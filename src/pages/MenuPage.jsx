import { useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { imageUrl, menuCategories, menuItems, restaurant } from '../data/menu.js';

export default function MenuPage() {
  const [active, setActive] = useState('all');
  const items = active === 'all' ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <main className="menu-page" id="main">
      <header className="menu-page-header">
        <a href={`${import.meta.env.BASE_URL}#/`} className="back-link"><ArrowLeft size={16} /> BACK TO BLAI 9</a>
        <p className="eyebrow"><span>THE BAR MENU</span> · {restaurant.price.toUpperCase()}</p>
        <h1>A LITTLE<br /><i>OF EVERYTHING.</i></h1>
        <p className="menu-page-intro">A few bites, another drink, and something sweet if there’s room. Here’s a taste of what’s on the bar.</p>
      </header>
      <div className="menu-controls" role="group" aria-label="Filter the menu">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={active === category.id ? 'filter-button filter-button--active' : 'filter-button'}
            aria-pressed={active === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="menu-page-grid">
        {items.map((item, index) => (
          <article className="menu-card" key={item.name}>
            <div className="menu-card-image">
              <img src={imageUrl(item.image, 800)} alt={item.alt} loading="lazy" />
              <span>{item.note}</span>
            </div>
            <div className="menu-card-copy">
              <span className="menu-card-number">0{index + 1}</span>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <aside className="menu-footnote">
        <p>GOOD TO KNOW</p>
        <span>Menu selection and availability can change. Ask the bar about today’s options, ingredients and allergens.</span>
      </aside>
      <a className="menu-directions" href={restaurant.map} target="_blank" rel="noreferrer">
        READY WHEN YOU ARE — FIND US ON CARRER DE BLAI <ArrowUpRight size={18} />
      </a>
    </main>
  );
}
