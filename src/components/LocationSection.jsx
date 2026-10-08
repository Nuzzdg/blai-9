import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { images, imageUrl, openingHours, restaurant } from '../data/menu.js';
import Reveal from './Reveal.jsx';

export default function LocationSection() {
  return (
    <section className="location section-pad" id="location">
      <div className="location-head">
        <Reveal>
          <p className="eyebrow"><span>06</span> YOUR NEXT STOP</p>
          <h2>MEET US<br /><i>ON BLAI.</i></h2>
        </Reveal>
        <Reveal className="location-intro" delay={100}>
          <p>Carrer de Blai is made for wandering, stopping for a drink, ordering another plate and doing it all over again.</p>
        </Reveal>
      </div>
      <div className="location-layout">
        <Reveal className="map-card">
          <img src={imageUrl(images.street.src, 1200)} alt={images.street.alt} loading="lazy" />
          <div className="map-grain" aria-hidden="true" />
          <span className="map-label">POBLE-SEC<br />BARCELONA</span>
          <div className="map-pin"><MapPin size={20} fill="currentColor" /><span>BLAI 9</span></div>
          <a className="map-link" href={restaurant.map} target="_blank" rel="noreferrer">
            OPEN IN MAPS <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <Reveal className="location-details" delay={100}>
          <p className="eyebrow">COME ON IN</p>
          <address>{restaurant.address}<br />{restaurant.postcode}</address>
          <a className="location-contact" href={`tel:${restaurant.phone.replaceAll(' ', '')}`}>
            <Phone size={15} /> {restaurant.phone}
          </a>
          <a className="location-contact" href={restaurant.website}>
            BLAI9.COM <ArrowUpRight size={15} />
          </a>
          <div className="hours">
            <div className="hours-heading"><Clock3 size={15} /><span>OPENING HOURS</span></div>
            <p className="hours-note">Hours vary. Call ahead or check with the bar before visiting.</p>
            <details>
              <summary>EDITABLE HOURS PLACEHOLDER</summary>
              <ul>
                {openingHours.map(({ day, hours }) => <li key={day}><span>{day}</span><span>{hours}</span></li>)}
              </ul>
            </details>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
