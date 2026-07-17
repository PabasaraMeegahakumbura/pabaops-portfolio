import { GITHUB_PROFILE } from "../config/site";

function ProjectVisual({ project, className }) {
  return (
    <div className={className}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
        />
      ) : (
        project.icon
      )}
    </div>
  );
}

export function HighlightedProjectCard({ project }) {
  return (
    <div className="flip-card reveal-card">
      <div className="flip-inner">
        <div className="flip-face work-card">
          <ProjectVisual project={project} className="work-icon" />
          <small>{project.subtitle}</small>
          <h3>{project.title}</h3>
          <p className="flip-description">Hover to flip and view implementation details.</p>
          <div className="flip-hint">Hover to reveal</div>
        </div>

        <div className="flip-face flip-back work-card">
          <small>{project.subtitle}</small>
          <h3>{project.title}</h3>
          <p>{project.problem}</p>
          <div className="example-note">
            <div className="example-label">{project.outcomeLabel || "Project Summary"}</div>
            <div>{project.outcome}</div>
          </div>
          <ul className="detail-list">
            {project.implemented.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          <div className="flip-hint">Front ↺ Back</div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }) {
  const repositoryLabel =
    project.link === GITHUB_PROFILE ? "View GitHub Profile" : "Open Repository";

  return (
    <article className="panel project-card reveal-card">
      <div className="project-top">
        <ProjectVisual project={project} className="project-icon" />
        <div>
          <small>{project.subtitle}</small>
          <h3>{project.title}</h3>
        </div>
      </div>

      <p>{project.problem}</p>
      <div className="example-note">
        <div className="example-label">{project.outcomeLabel || "Project Summary"}</div>
        <div>{project.outcome}</div>
      </div>

      <ul className="project-list">
        {project.implemented.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="project-tags">
        {project.tools.map((tool) => <span className="project-tag" key={tool}>{tool}</span>)}
      </div>
      <div className="project-actions">
        {project.caseStudy && <a className="mini-btn" href={project.caseStudy}>View Case Study</a>}
        <a className="mini-btn" href={project.link} target="_blank" rel="noreferrer">{repositoryLabel}</a>
        <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">More Repositories</a>
      </div>
    </article>
  );
}
