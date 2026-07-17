import { ProjectCard } from "../components/ProjectCards";
import { GITHUB_PROFILE, LINKEDIN_PROFILE, RESUME_FILE } from "../config/site";

export function EmployersPage({ experience, projects }) {
  return (
    <section className="container capability-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a><span>›</span><span>For Employers</span>
      </div>
      <div className="capability-page-head">
        <span>Recruiter & Hiring Manager View</span>
        <h1>DevOps engineering supported by real operations experience</h1>
        <p>
          My background combines cloud and Kubernetes operations, Linux administration, Terraform, CI/CD, observability, hosting, incident support and clear technical documentation across remote and on-premises environments.
        </p>
        <div className="cta-row">
          <a className="btn btn-hero" href={RESUME_FILE} target="_blank" rel="noreferrer">View Resume</a>
          <a className="btn btn-hero" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">Review GitHub</a>
          <a className="btn btn-hero" href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="section-head"><span>Selected Work</span><h2>Three projects to review first</h2></div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
      </div>

      <div className="section-head employer-experience-head"><span>Recent Experience</span><h2>Cloud, platform and operational progression</h2></div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="panel exp-card" key={`${item.company}-${item.period}`}>
            <div className="timeline-top"><div><h3>{item.role}</h3><h4>{item.company}</h4></div><div className="date-pill">{item.period}</div></div>
            <p>{item.text}</p>
            <ul className="exp-list">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="capability-page-actions"><a className="mini-btn" href="#/">Back to Portfolio</a><a className="mini-btn" href="#/projects">All Projects</a></div>
    </section>
  );
}
