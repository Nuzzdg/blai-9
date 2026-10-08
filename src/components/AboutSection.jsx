import { ArrowUpRight } from 'lucide-react';
import { images, imageUrl, restaurant } from '../data/menu.js';
import Reveal from './Reveal.jsx';

export default function AboutSection() {
  return (
    <section className="about section-pad" id="about">
      <div className="about-topline"><span>THE BLAI 9 WAY</span><span>NO PLANS. JUST ANOTHER ROUND.</span></div>
      <div className="about-grid">
        <Reveal className="about-title">
          <p className="eyebrow"><span>01</span> ONE FOR THE ROAD?</p>
          <h2>COME FOR<br /><i>ONE.</i><br />STAY FOR<br /><i>FIVE.</i></h2>
        </Reveal>
        <div className="about-right">
          <Reveal className="about-photo">
            <img src={imageUrl(images.interior.src, 1000)} alt={images.interior.alt} loading="lazy" />
            <span className="photo-caption">SOMEWHERE TO LAND BETWEEN STOPS.</span>
          </Reveal>
          <Reveal className="about-copy" delay={100}>
            <p className="about-lede">One pintxo turns into a table full. You know how it goes.</p>
            <p>Blai 9 is made for the kind of night that starts with one bite and somehow turns into another round. Pull up a bar stool, order for the middle, and let Carrer de Blai do the rest.</p>
            <a className="text-link" href={restaurant.map} target="_blank" rel="noreferrer">
              COME FIND YOUR STOOL <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
