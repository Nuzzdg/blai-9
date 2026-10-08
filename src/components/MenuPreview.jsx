import { ArrowRight } from 'lucide-react';
import { drinkCategories, imageUrl, menuItems } from '../data/menu.js';
import Reveal from './Reveal.jsx';

export default function MenuPreview() {
  const sangria = drinkCategories.find((category) => category.label === 'Sangrías')
    ?.items.find((item) => item.name === 'Sangría de vino tinto');
  const picks = [
    menuItems.find((item) => item.name === 'Spicy potatoes B9'),
    menuItems.find((item) => item.name === 'Fried squid strips'),
    sangria,
    menuItems.find((item) => item.name === 'Padrón peppers'),
    menuItems.find((item) => item.name === 'Churros with chocolate'),
  ].filter(Boolean);

  return (
    <section className="menu-preview section-pad" id="menu-preview">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow"><span>02</span> THE BAR, ON A PLATE</p>
          <h2>WHAT'S ON<br /><i>THE BAR</i></h2>
        </Reveal>
        <Reveal className="section-heading-aside" delay={100}>
          <p>Order a few. See what lands. There’s always room for one more in the middle.</p>
          <a className="text-link" href="#/menu">VIEW FULL MENU <ArrowRight size={16} /></a>
        </Reveal>
      </div>
      <div className="menu-list">
        {picks.map((item, index) => (
          <Reveal key={item.name} delay={index * 55}>
            <a className={item.image ? 'menu-row menu-row--image' : 'menu-row'} href="#/menu">
              <span className="menu-row-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="menu-row-name">{item.name}</span>
              <span className="menu-row-note">
                {item.price == null ? `$${item.options[0][1].toFixed(2)}` : `€${item.price.toFixed(2)}`}
              </span>
              {item.image && (
                <span className="menu-row-image">
                  <img src={imageUrl(item.image, 240)} alt="" loading="lazy" />
                </span>
              )}
              <ArrowRight className="menu-row-arrow" size={18} aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </div>
      <p className="menu-disclaimer">Menu selection and availability can change. Ask the bar for today’s options.</p>
    </section>
  );
}
