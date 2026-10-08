import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { images, imageUrl, restaurant } from '../data/menu.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker"><span className="status-dot" /> POBLE-SEC · BARCELONA</p>
          <h1><span>PINTXOS.</span><span>TAPAS.</span><span className="hero-last">BARCELONA <i>NIGHTS.</i></span></h1>
          <div className="hero-bottom">
            <p>Creative pintxos, cold beers and<br className="desktop-break" /> good reasons to stay for one more.</p>
            <div className="hero-actions">
              <a className="button button--yellow" href="#/menu">SEE THE MENU <ArrowRight size={16} /></a>
              <a className="button button--line" href="#location">FIND US <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-photo-wrap">
            <img src={imageUrl(images.hero.src, 1800)} alt={images.hero.alt} fetchPriority="high" />
          </div>
          <span className="hero-photo-note">A LITTLE OF EVERYTHING, PLEASE.</span>
          <div className="hero-stamp" aria-label="Blai 9 Barcelona">
            <span>BAR DE</span><strong>BLAI</strong><span>· 9 ·</span>
          </div>
          <div className="hero-side-note">A BAR FOR<br />ONE MORE ROUND <ArrowDown size={14} /></div>
        </div>
      </div>
      <div className="hero-address">
        <span>{restaurant.address} · POBLE-SEC · BARCELONA</span>
        <span>08004 · PINTXOS · TAPAS</span>
      </div>
    </section>
  );
}
