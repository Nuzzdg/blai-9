import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import AboutSection from '../components/AboutSection.jsx';
import MenuPreview from '../components/MenuPreview.jsx';
import FeatureDishes from '../components/FeatureDishes.jsx';
import Gallery from '../components/Gallery.jsx';
import Reviews from '../components/Reviews.jsx';
import LocationSection from '../components/LocationSection.jsx';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <AboutSection />
      <MenuPreview />
      <FeatureDishes />
      <Gallery />
      <Reviews />
      <LocationSection />
    </main>
  );
}
