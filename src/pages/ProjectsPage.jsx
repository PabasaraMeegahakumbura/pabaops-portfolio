import { ProjectCard } from "../components/ProjectCards";

export function ProjectsPage({ projects }) {
  return (
    <section className="container capability-page projects-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a><span>›</span><span>Projects</span>
      </div>

      <div className="capability-page-head">
        <span>Complete Technical Portfolio</span>
        <h1>Projects and engineering labs</h1>
        <p>
          Explore the complete project catalogue, including implementation scope,
          tools, outcomes, repository links and available project details. The homepage
          shows a shorter preview while this page preserves every project card.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>

      <div className="capability-page-actions">
        <a className="mini-btn" href="#/">Back to Portfolio</a>
        <a className="mini-btn" href="#/case-studies">View All Case Studies</a>
        <a className="mini-btn" href="#/capabilities">View Technical Capabilities</a>
      </div>
    </section>
  );
}
