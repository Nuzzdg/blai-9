import { ArrowUpRight } from 'lucide-react';
import { imageUrl, signatureDishes } from '../data/menu.js';
import Reveal from './Reveal.jsx';

export default function FeatureDishes() {
  return (
    <section className="features section-pad">
      <div className="section-heading section-heading--light">
        <Reveal>
          <p className="eyebrow"><span>03</span> THE USUAL SUSPECTS</p>
          <h2>GOOD THINGS<br /><i>GO ROUND.</i></h2>
        </Reveal>
        <Reveal className="section-heading-aside" delay={100}>
          <p>Made for passing, pinching and reaching across the table. That’s the point.</p>
        </Reveal>
      </div>
      <div className="feature-grid">
        {signatureDishes.map((dish, i) => (
          <Reveal key={dish.name} className={`feature ${dish.className}`} delay={i * 100}>
            <a href="#/menu" className="feature-link">
              <img src={imageUrl(dish.image, 1000)} alt={dish.alt} loading="lazy" />
              <span className="feature-index">{dish.number} / BAR SPECIAL</span>
              <span className="feature-copy">
                <span><strong>{dish.name}</strong><small>{dish.line}</small></span>
                <ArrowUpRight size={21} aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
