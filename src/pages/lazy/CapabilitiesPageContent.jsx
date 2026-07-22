import { GITHUB_PROFILE } from "../../config/site";

export function CapabilitiesPageContent({ capabilities, selectedCapability }) {
  return (
    <section className="container capability-page">
      {selectedCapability ? (
        <>
          <div className="capability-breadcrumbs">
            <a href="#/">Home</a>
            <span>›</span>
            <a href="#/capabilities">Technical Capabilities</a>
            <span>›</span>
            <span>{selectedCapability.title}</span>
          </div>

          <div className="panel capability-detail-hero">
            <div className="capability-detail-title">
              <div className="capability-hub-icon">{selectedCapability.icon}</div>
              <div>
                <small>{selectedCapability.eyebrow}</small>
                <h1>{selectedCapability.title}</h1>
                <p>{selectedCapability.summary}</p>
              </div>
            </div>
            <div className="capability-stack-box">
              <h3>Technologies and coverage</h3>
              <div className="skills-inline">
                {selectedCapability.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="capability-focus-grid">
            {selectedCapability.focus.map((item) => (
              <article className="panel capability-focus-card" key={item.title}>
                <div className="capability-focus-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="panel capability-evidence">
            <div>
              <span className="contact-label">Portfolio Evidence</span>
              <h2>What will be added as the portfolio grows</h2>
              <p>
                These items turn capability descriptions into practical proof through repositories, diagrams, screenshots, runbooks, and sanitized case studies.
              </p>
            </div>
            <ul>
              {selectedCapability.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="capability-page-actions">
            <a className="mini-btn" href="#/capabilities">View All Capabilities</a>
            <a className="mini-btn" href="#/">Back to Portfolio</a>
            <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">Open GitHub</a>
          </div>
        </>
      ) : (
        <>
          <div className="capability-breadcrumbs">
            <a href="#/">Home</a>
            <span>›</span>
            <span>Technical Capabilities</span>
          </div>

          <div className="capability-page-head">
            <span>Technical Capabilities</span>
            <h1>Explore the operational depth behind the portfolio</h1>
            <p>
              The homepage stays concise for recruiters, while these focused pages provide deeper coverage of Linux and on-premises administration, cloud and platform engineering, observability and security, database operations support, L0–L2 technical support, and the DevOps principles behind the work.
            </p>
          </div>

          <div className="capability-hub-grid">
            {capabilities.map((area) => (
              <article className="panel capability-hub-card" key={area.slug}>
                <div className="capability-hub-icon">{area.icon}</div>
                <small>{area.eyebrow}</small>
                <h2>{area.title}</h2>
                <p>{area.summary}</p>
                <div className="skills-inline">
                  {area.tags.slice(0, 6).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a className="mini-btn" href={`#/capabilities/${area.slug}`}>View Details</a>
                </div>
              </article>
            ))}
          </div>

          <div className="capability-page-actions">
            <a className="mini-btn" href="#/">Back to Portfolio</a>
            <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </>
      )}
    </section>
  );
}
