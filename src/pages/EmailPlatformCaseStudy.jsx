import { EMAIL_PLATFORM_REPO } from "../config/site";

export function EmailPlatformCaseStudy() {
  return (
    <section className="container capability-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a>
        <span>›</span>
        <a href="#projects">Featured Projects</a>
        <span>›</span>
        <span>Email Platform Engineering Lab</span>
      </div>

      <div className="panel capability-detail-hero">
        <div className="capability-detail-title">
          <div className="capability-hub-icon">📧</div>
          <div>
            <small>DevOps • Linux • Docker • Email Infrastructure</small>
            <h1>Self-Hosted Email Platform Engineering Lab</h1>
            <p>
              I built this lab to understand what it takes to operate a self-hosted email service beyond the initial installation. The work covers platform evaluation, Linux and container operations, DNS authentication, external mail delivery, security, backups, troubleshooting and recovery planning.
            </p>
          </div>
        </div>
        <div className="capability-stack-box">
          <h3>Core technologies</h3>
          <div className="skills-inline">
            {["GCP", "Ubuntu", "Docker Compose", "Mailcow", "Poste.io", "Postfix", "Dovecot", "Cloudflare DNS"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="capability-focus-grid">
        <article className="panel capability-focus-card">
          <div className="capability-focus-icon">🎯</div>
          <h3>Challenge</h3>
          <p>
            Compare self-hosted mail platforms using real operational requirements: administration, delivery, DNS, security, troubleshooting, backup and recovery.
          </p>
        </article>
        <article className="panel capability-focus-card">
          <div className="capability-focus-icon">🛠️</div>
          <h3>Implementation</h3>
          <p>
            Deployed and tested Mailcow and Poste.io, configured domains and mailboxes, evaluated UCS/Nubus, and designed an Open-Xchange proof-of-concept architecture.
          </p>
        </article>
        <article className="panel capability-focus-card">
          <div className="capability-focus-icon">✅</div>
          <h3>Validation</h3>
          <p>
            Confirmed internal delivery, two-way Gmail mail flow, public MX/SPF/DKIM resolution, platform access and Zstandard archive integrity.
          </p>
        </article>
        <article className="panel capability-focus-card">
          <div className="capability-focus-icon">📋</div>
          <h3>Operations</h3>
          <p>
            Created installation notes, command references, troubleshooting runbooks, monitoring guidance, security controls, incident response and recovery standards.
          </p>
        </article>
      </div>

      <div className="panel capability-evidence">
        <div>
          <span className="contact-label">Verified Outcomes</span>
          <h2>What I completed</h2>
          <p>
            The repository separates completed implementation from evaluation and proposed work, so the technical scope remains clear and credible.
          </p>
        </div>
        <ul>
          <li>Mailcow and Poste.io deployed and functionally tested</li>
          <li>Administrator, domain and mailbox workflows completed</li>
          <li>Internal and external Gmail mail flow confirmed</li>
          <li>MX, SPF and DKIM records queried and validated</li>
          <li>Mailcow backup components created and archive integrity verified</li>
          <li>Full isolated restore drill recorded as the next recovery milestone</li>
        </ul>
      </div>

      <div className="panel capability-evidence">
        <div>
          <span className="contact-label">Repository Structure</span>
          <h2>Designed for engineers and interview review</h2>
          <p>
            Each platform has its own implementation, command and troubleshooting guides. Shared DNS, security, monitoring, incident, backup, pricing and decision material is organized separately.
          </p>
        </div>
        <ul>
          <li>Platform-specific runbooks for Mailcow, Poste.io and UCS/Nubus</li>
          <li>Open-Xchange research clearly labelled as a proposed POC</li>
          <li>Reusable Bash health and backup-verification helpers</li>
          <li>Sanitized examples with no credentials or private mail data</li>
        </ul>
      </div>

      <div className="capability-page-actions">
        <a className="mini-btn" href={EMAIL_PLATFORM_REPO} target="_blank" rel="noreferrer">Open Full Repository</a>
        <a className="mini-btn" href="#/projects">Back to All Projects</a>
        <a className="mini-btn" href="#/">Back to Portfolio</a>
      </div>
    </section>
  );
}
