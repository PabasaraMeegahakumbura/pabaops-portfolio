import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  PORTFOLIO_QR,
  SITE_URL,
} from "../config/site";

export function ServicesPage({ engagementSteps, services }) {
  return (
    <section className="container capability-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a><span>›</span><span>Freelance Services</span>
      </div>

      <div className="panel capability-detail-hero service-hero">
        <div>
          <small>Remote Infrastructure & Operations Support</small>
          <h1>Practical cloud, server and DevOps support for growing teams</h1>
          <p>
            I help with clearly scoped infrastructure and operations work across cloud, Linux, hosting, monitoring, security-aware configuration and technical troubleshooting. Engagements begin with scope and risk confirmation—never with uncontrolled access or unverified promises.
          </p>
          <div className="cta-row">
            <a className="btn btn-hero" href="mailto:prpabasara512@gmail.com?subject=Freelance%20Infrastructure%20Project">Discuss a Project</a>
            <a className="btn btn-hero" href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          </div>
        </div>
        <div className="service-qr panel">
          <img src={PORTFOLIO_QR} alt="QR code for the PabaOps portfolio" width="220" height="220" />
          <strong>Open the portfolio on another device</strong>
          <a href={SITE_URL}>{SITE_URL.replace("https://", "")}</a>
        </div>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="panel service-card reveal-card" key={service.title}>
            <div className="capability-focus-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <div className="skills-inline">
              {service.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </article>
        ))}
      </div>

      <div className="panel service-process">
        <div>
          <span className="contact-label">How I Work</span>
          <h2>A controlled and documented engagement</h2>
          <p>Every project is scoped according to the real environment, access level and operational risk.</p>
        </div>
        <ol>
          {engagementSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>

      <div className="capability-page-actions">
        <a className="mini-btn" href="mailto:prpabasara512@gmail.com?subject=Freelance%20Infrastructure%20Project">Request a Consultation</a>
        <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">Review GitHub</a>
        <a className="mini-btn" href="#/">Back to Portfolio</a>
      </div>
    </section>
  );
}
