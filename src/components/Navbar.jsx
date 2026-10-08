import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { restaurant } from '../data/menu.js';

const navLinks = [
  { label: 'MENU', href: '#/menu' },
  { label: 'ABOUT', href: '#about' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'FIND US', href: '#location' },
];

export default function Navbar({ page }) {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const home = import.meta.env.BASE_URL;

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [page]);

  const hrefFor = (href) => {
    if (href === '#/menu') return `${home}#/menu`;
    if (href.startsWith('#')) return page === 'menu' ? `${home}${href}` : href;
    return href;
  };

  return (
    <header className={`header ${compact ? 'header--compact' : ''} ${open ? 'header--open' : ''}`}>
      <div className="header-inner">
        <a className="wordmark" href={page === 'menu' ? `${home}#/` : '#top'} aria-label="Blai 9 home">
          BLAI<span>9</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((item) => (
            <a key={item.label} href={hrefFor(item.href)}>{item.label}</a>
          ))}
        </nav>
        <a className="header-visit" href={restaurant.map} target="_blank" rel="noreferrer">
          BOOK / VISIT <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <div className={`mobile-panel ${open ? 'mobile-panel--open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((item, i) => (
            <a key={item.label} href={hrefFor(item.href)} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <a className="mobile-panel-visit" href={restaurant.map} target="_blank" rel="noreferrer">
          FIND US ON CARRER DE BLAI <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
