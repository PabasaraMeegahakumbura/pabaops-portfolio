import { OBSERVABILITY_REPO } from "../../config/site";

export function MonitoringCaseStudyContent() {
  return (
    <section className="container capability-page">
      <div className="capability-breadcrumbs">
        <a href="#/">Home</a>
        <span>›</span>
        <a href="#/projects">Projects</a>
        <span>›</span>
        <span>Observability Monitoring Lab</span>
      </div>

      <div className="panel capability-detail-hero">
        <div className="capability-detail-title">
          <div className="capability-hub-icon">📊</div>
          <div>
            <small>Observability • Monitoring • Alerting • Incident Support</small>
            <h1>Multi-Tool Observability &amp; Monitoring Lab</h1>
            <p>
              I organized this project to show how I approach infrastructure visibility,
              service availability, alerting and operational troubleshooting across Linux,
              AWS and Google Cloud environments. It combines hands-on Zabbix work,
              Prometheus and Grafana tooling, cloud-native monitoring, documented runbooks,
              and clearly labelled lab exercises.
            </p>
          </div>
        </div>
        <div className="capability-stack-box">
          <h3>Core technologies</h3>
          <div className="skills-inline">
            {["Zabbix", "Prometheus", "Grafana", "Alertmanager", "Node Exporter", "AWS CloudWatch", "Google Cloud Observability", "UptimeRobot", "Uptime Kuma", "Netdata"].map((item) => (
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
            Bring infrastructure metrics, endpoint availability, cloud signals and alert
            response into one structured monitoring approach without treating every tool
            as the same type or depth of experience.
          </p>
        </article>
        <article className="panel capability-focus-card">
          <div className="capability-focus-icon">🛠️</div>
          <h3>Implementation</h3>
          <p>
            Built a reusable Prometheus, Grafana, Alertmanager, Node Exporter and Uptime
            Kuma lab; documented hands-on Zabbix monitoring across AWS/GCP-hosted Linux;
            and organized CloudWatch and Google Cloud operational workflows.
          </p>
        </article>
        <article className="panel capability-focus-card">
          <div className="capability-focus-icon">✅</div>
          <h3>Validation</h3>
          <p>
            Parsed the monitoring configuration, started the local service stack, checked
            service endpoints, and documented controlled alert, recovery and evidence
            procedures without exposing credentials or customer infrastructure.
          </p>
        </article>
        <article className="panel capability-focus-card">
          <div className="capability-focus-icon">🚨</div>
          <h3>Operations</h3>
          <p>
            Created troubleshooting matrices, an alert-response runbook, tool-selection
            guidance, evidence standards and cloud cleanup steps for repeatable incident
            investigation and recovery validation.
          </p>
        </article>
      </div>

      <div className="panel capability-evidence">
        <div>
          <span className="contact-label">Verified Outcomes</span>
          <h2>What is completed</h2>
          <p>
            The repository separates verified implementation, operational experience and
            lab/testing work so reviewers can understand the evidence behind each tool.
          </p>
        </div>
        <ul>
          <li>Structured observability repository published with architecture, commands, troubleshooting and runbooks</li>
          <li>Prometheus, Grafana, Alertmanager, Node Exporter and Uptime Kuma Compose configuration validated locally</li>
          <li>Hands-on Zabbix AWS/GCP monitoring scope and validation workflow documented</li>
          <li>AWS CloudWatch and Google Cloud Monitoring/Logging operational exercises documented safely</li>
          <li>Alert response, signal validation, recovery checks and evidence-handling standards completed</li>
          <li>Netdata retained as a clearly labelled guided lab rather than a completed production claim</li>
        </ul>
      </div>

      <div className="panel capability-evidence">
        <div>
          <span className="contact-label">Monitoring Design</span>
          <h2>Different tools, clear responsibilities</h2>
          <p>
            The project explains why monitoring tools overlap without being interchangeable,
            and maps each signal to an appropriate collection, visualization or response path.
          </p>
        </div>
        <ul>
          <li>Zabbix for host inventory, agent monitoring, templates, triggers and recovery</li>
          <li>Prometheus, Node Exporter and Grafana for metrics collection and visualization</li>
          <li>Alertmanager for grouping and routing Prometheus alerts</li>
          <li>UptimeRobot and Uptime Kuma for external or service-level availability checks</li>
          <li>CloudWatch and Google Cloud Observability for cloud-native signals and logs</li>
          <li>Netdata for guided real-time Linux host performance exploration</li>
        </ul>
      </div>

      <div className="panel capability-evidence">
        <div>
          <span className="contact-label">Next Evidence Milestones</span>
          <h2>What will strengthen the case study next</h2>
          <p>
            These items remain intentionally separate from completed outcomes until genuine,
            sanitized evidence is captured.
          </p>
        </div>
        <ul>
          <li>Add sanitized Zabbix host, latest-data, trigger and recovery screenshots</li>
          <li>Capture a Grafana overview and Prometheus target-health evidence</li>
          <li>Record a controlled Uptime Kuma failure and recovery timeline</li>
          <li>Complete and document the isolated Netdata host exercise</li>
          <li>Add sanitized CloudWatch and Google Cloud alert-to-log investigation examples</li>
        </ul>
      </div>

      <div className="capability-page-actions">
        <a className="mini-btn" href={OBSERVABILITY_REPO} target="_blank" rel="noreferrer">Open Full Repository</a>
        <a className="mini-btn" href="#/projects">Back to All Projects</a>
        <a className="mini-btn" href="#/case-studies">View All Case Studies</a>
        <a className="mini-btn" href="#/">Back to Portfolio</a>
      </div>
    </section>
  );
}
