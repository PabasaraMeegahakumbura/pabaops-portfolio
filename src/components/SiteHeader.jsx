import { useEffect, useState } from "react";
import { BRAND_IMAGE } from "../config/site";

export function SiteHeader({ onHome }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <a
          className="brand"
          href="#/"
          onClick={onHome}
          aria-label="Go to PabaOps home page"
        >
          <img
            src={BRAND_IMAGE}
            alt="PabaOps logo"
            className="brand-img"
            decoding="async"
            fetchPriority="high"
            width="56"
            height="56"
          />
          <div className="brand-copy">
            <strong>PabaOps</strong>
            <span>Cloud • DevOps • SRE • Linux Admin • Platform</span>
          </div>
        </a>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="primary-navigation" className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#/projects" onClick={closeMenu}>Projects</a>
          <a href="#/skills" onClick={closeMenu}>Skills</a>
          <a href="#/capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#/experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
