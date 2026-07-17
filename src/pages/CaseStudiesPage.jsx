import { HighlightedProjectCard } from "../components/ProjectCards";

export function CaseStudiesPage({ projects }) {
  return (
    <section className="container capability-page case-studies-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a><span>›</span><span>Selected Work &amp; Case Studies</span>
      </div>

      <div className="capability-page-head">
        <span>Engineering Work Summaries</span>
        <h1>Selected work and operational case studies</h1>
        <p>
          Review the problem, implementation approach and outcome behind each piece
          of work using the same focused presentation shown on the homepage.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((project) => (
          <HighlightedProjectCard project={project} key={`case-${project.title}`} />
        ))}
      </div>

      <div className="capability-page-actions">
        <a className="mini-btn" href="#/">Back to Portfolio</a>
        <a className="mini-btn" href="#/projects">View All Projects</a>
      </div>
    </section>
  );
}
