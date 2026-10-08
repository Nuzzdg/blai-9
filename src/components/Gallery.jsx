import { images, imageUrl } from '../data/menu.js';
import Reveal from './Reveal.jsx';

const gallery = [
  { ...images.street, className: 'gallery-street', width: 1000, label: 'AROUND THE CORNER' },
  { ...images.cheers, className: 'gallery-friends', width: 850, label: 'PULL UP A CHAIR' },
  { src: 'photo-1555939594-58d7cb561ad1', alt: 'Shared dishes at a lively dinner', className: 'gallery-table', width: 900, label: 'IN THE MIDDLE' },
  { ...images.bar, className: 'gallery-night', width: 850, label: 'AFTER DARK' },
];

export default function Gallery() {
  return (
    <section className="gallery section-pad" id="gallery">
      <div className="gallery-header">
        <Reveal>
          <p className="eyebrow"><span>04</span> LITTLE MOMENTS, BLAI 9</p>
          <h2>TAKE A<br /><i>LOOK AROUND.</i></h2>
        </Reveal>
        <p>ON CARRER DE BLAI<br />IN GOOD COMPANY.</p>
      </div>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <Reveal key={item.label} className={`gallery-item ${item.className}`} delay={index * 60}>
            <img src={imageUrl(item.src, item.width)} alt={item.alt} loading="lazy" />
            <span>{item.label} <b>↗</b></span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
