import { BRAND_IMAGE } from "../config/site";

export function SiteHeader({ onHome }) {
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

        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#/capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
