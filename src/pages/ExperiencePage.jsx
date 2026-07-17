import { GITHUB_PROFILE, LINKEDIN_PROFILE, RESUME_FILE } from "../config/site";

export function ExperiencePage({ experience }) {
  return (
    <section className="container capability-page experience-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a><span>›</span><span>Professional Experience</span>
      </div>

      <div className="capability-page-head">
        <span>Professional Experience</span>
        <h1>From support foundations to cloud and platform operations</h1>
        <p>
          My career progression combines end-user and L0–L2 support discipline with
          hands-on DevOps, cloud, Kubernetes, Linux, automation, hosting, monitoring,
          identity and infrastructure operations.
        </p>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="panel exp-card" key={`${item.role}-${item.period}`}>
            <div className="timeline-top">
              <div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
              </div>
              <div className="date-pill">{item.period}</div>
            </div>
            <p>{item.text}</p>
            <ul className="exp-list">
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="capability-page-actions">
        <a className="mini-btn" href="#/">Back to Portfolio</a>
        <a className="mini-btn" href={RESUME_FILE} target="_blank" rel="noreferrer">Download Resume</a>
        <a className="mini-btn" href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}
