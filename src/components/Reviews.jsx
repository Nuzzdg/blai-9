import { Star } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Reviews() {
  return (
    <section className="reviews">
      <Reveal className="reviews-score">
        <p className="eyebrow"><span>05</span> WORD ON THE STREET</p>
        <div className="rating"><strong>4.4</strong><span>/ 5</span></div>
        <div className="rating-stars" aria-label="Rated 4.4 out of 5">
          {Array.from({ length: 5 }, (_, i) => <Star key={i} size={17} fill={i < 4 ? 'currentColor' : 'none'} />)}
        </div>
        <p className="rating-source">APPROX. 4,922 REVIEWS</p>
      </Reveal>
      <Reveal className="reviews-note" delay={100}>
        <span className="review-caption">A FEW REASONS TO STOP BY</span>
        <p>PINTXOS TO SHARE. A LIVELY BAR. TIME WELL SPENT ON BLAI.</p>
        <span className="review-caption">NO MADE-UP CUSTOMER QUOTES. JUST A GOOD NIGHT OUT.</span>
      </Reveal>
    </section>
  );
}
