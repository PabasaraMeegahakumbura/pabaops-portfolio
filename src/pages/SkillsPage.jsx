import { GITHUB_PROFILE, RESUME_FILE } from "../config/site";

export function SkillsPage({ skillGroups, tools }) {
  return (
    <section className="container capability-page skills-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a><span>›</span><span>Technical Skills</span>
      </div>

      <div className="capability-page-head">
        <span>Technical Skills</span>
        <h1>Tools and operational strengths across the DevOps lifecycle</h1>
        <p>
          A structured view of my cloud, platform, automation, Linux, observability,
          networking, identity, database, hosting and technical-support skills.
          Detailed implementation evidence remains available through projects and
          capability pages.
        </p>
      </div>

      <div className="tool-row skills-page-tools" aria-label="Core tools and domains">
        {tools.map((tool) => (
          <div className="tool-tile panel" key={tool.name}>
            {tool.image ? (
              <img src={tool.image} alt={tool.name} className="tool-icon-img" loading="lazy" decoding="async" />
            ) : (
              <span className="tool-icon">{tool.icon}</span>
            )}
            <span>{tool.name}</span>
          </div>
        ))}
      </div>

      <div className="section-head skills-page-section">
        <span>Skill Groups</span>
        <h2>Structured by engineering responsibility</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="panel skill-group" key={group.title}>
            <div className="skill-group-title">{group.title}</div>
            <h3>{group.title}</h3>
            <div className="skills-inline">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>

      <div className="capability-page-actions">
        <a className="mini-btn" href="#/">Back to Portfolio</a>
        <a className="mini-btn" href="#/capabilities">Open Capability Hub</a>
        <a className="mini-btn" href="#/projects">View Projects</a>
        <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">GitHub</a>
        <a className="mini-btn" href={RESUME_FILE} target="_blank" rel="noreferrer">Resume</a>
      </div>
    </section>
  );
}
