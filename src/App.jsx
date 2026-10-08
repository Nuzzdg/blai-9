import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import MenuPage from './pages/MenuPage.jsx';
import { restaurant } from './data/menu.js';

export default function App() {
  const [page, setPage] = useState(() => window.location.hash === '#/menu' ? 'menu' : 'home');

  useEffect(() => {
    const updatePage = () => {
      const isMenu = window.location.hash === '#/menu';
      setPage(isMenu ? 'menu' : 'home');
      document.title = isMenu
        ? 'The Menu — Blai 9, Barcelona'
        : 'Blai 9 — Pintxos, tapas & Barcelona nights';
      if (!isMenu && window.location.hash === '#/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar page={page} />
      {page === 'menu' ? <MenuPage /> : <Home />}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark wordmark--footer" href={`${import.meta.env.BASE_URL}#/`} aria-label="Blai 9 home">
              BLAI<span>9</span>
            </a>
            <p>Pintxos, tapas & Barcelona nights.</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">FIND THE BAR</span>
            <a href={restaurant.map} target="_blank" rel="noreferrer">
              {restaurant.address}<br />{restaurant.postcode}
            </a>
            <a href={`tel:${restaurant.phone.replaceAll(' ', '')}`}>{restaurant.phone}</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">TAKE A LOOK</span>
            <a href={`${import.meta.env.BASE_URL}#/menu`}>Menu</a>
            <a href={`${import.meta.env.BASE_URL}#about`}>About</a>
            <a href={`${import.meta.env.BASE_URL}#gallery`}>Gallery</a>
          </div>
          <div className="footer-note">
            <span className="footer-label">ON CARRER DE BLAI</span>
            <p>One pintxo turns into a table full. You know how it goes.</p>
            <a href={restaurant.website}>BLAI9.COM ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BLAI 9 · BARCELONA</span>
          <span>BUILT FOR GOOD NIGHTS</span>
        </div>
      </footer>
    </>
  );
}
