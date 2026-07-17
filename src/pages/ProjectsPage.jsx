import { ProjectCard } from "../components/ProjectCards";

export function ProjectsPage({ projects }) {
  return (
    <section className="container capability-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a><span>›</span><span>All Projects</span>
      </div>
      <div className="capability-page-head">
        <span>Engineering Portfolio</span>
        <h1>Projects, labs and operational case studies</h1>
        <p>
          The homepage highlights the strongest DevOps work. This page keeps the broader portfolio available without making the first recruiter view unnecessarily long.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
      </div>
      <div className="capability-page-actions">
        <a className="mini-btn" href="#/">Back to Portfolio</a>
        <a className="mini-btn" href="#/services">Freelance Services</a>
      </div>
    </section>
  );
}
