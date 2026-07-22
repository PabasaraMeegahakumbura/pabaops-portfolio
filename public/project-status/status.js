const projects = {
  "kubernetes-cicd-deployment": {
    icon: "☸️",
    eyebrow: "Kubernetes • Helm • CI/CD • Containers",
    title: "Kubernetes CI/CD Deployment Project",
    status: "Repository structure and implementation evidence are being prepared",
    lead: "This project page is live while the repository is being organized into a recruiter-friendly engineering case study. Only verified implementation, commands, diagrams, validation results and sanitized screenshots will be published.",
    focus: [
      "Define the application, container and Kubernetes deployment architecture",
      "Organize manifests, Helm packaging and CI/CD stages",
      "Document validation, rollback and troubleshooting workflows",
      "Add sanitized build, deployment and runtime evidence",
    ],
    structure: ["README.md", "docs/architecture.md", "app/", "docker/", "kubernetes/", "helm/", ".github/workflows/", "evidence/", "troubleshooting/"],
  },
  "terraform-infrastructure-automation": {
    icon: "🧩",
    eyebrow: "Terraform • Infrastructure as Code • Cloud",
    title: "Terraform Infrastructure Automation",
    status: "Reusable repository blueprint is being prepared",
    lead: "The case study is being structured around safe, reviewable and repeatable infrastructure provisioning. The repository will clearly separate reusable modules, environment configuration, validation and operational notes.",
    focus: [
      "Define a clean module and environment layout",
      "Document variables, outputs, state and security considerations",
      "Add formatting, validation and plan workflows",
      "Publish only tested infrastructure examples and sanitized evidence",
    ],
    structure: ["README.md", "docs/architecture.md", "modules/", "environments/dev/", "environments/staging/", "scripts/", "tests/", "evidence/", "troubleshooting/"],
  },
  "cloudflare-waf-hardening": {
    icon: "🔐",
    eyebrow: "Cloudflare • WAF • DNS • Edge Security",
    title: "Secure Cloudflare and WAF Hardening",
    status: "Security case study and sanitized evidence are being prepared",
    lead: "This project will document practical edge-security controls without exposing customer domains, account identifiers, IP addresses or production rules. The final repository will focus on decision logic, validation and safe operational guidance.",
    focus: [
      "Organize WAF, bot, rate-limiting and DNS security use cases",
      "Document safe change, validation and rollback procedures",
      "Create attack-simulation and false-positive review guidance",
      "Add sanitized screenshots and incident-style case studies",
    ],
    structure: ["README.md", "docs/security-architecture.md", "waf-rules/", "rate-limiting/", "bot-management/", "runbooks/", "case-studies/", "evidence/", "troubleshooting/"],
  },
  "dockerized-microservice-platform": {
    icon: "🐳",
    eyebrow: "Docker • Microservices • Platform Operations",
    title: "Dockerized Microservice Platform",
    status: "Application packaging and platform evidence are being prepared",
    lead: "The repository will show how services are packaged, configured, networked, validated and operated. It will avoid claiming production scale until the relevant testing and evidence are complete.",
    focus: [
      "Define service boundaries, networks and configuration handling",
      "Create reproducible image and Compose workflows",
      "Document health checks, logs and troubleshooting",
      "Add controlled failure, recovery and validation evidence",
    ],
    structure: ["README.md", "docs/architecture.md", "services/", "docker/", "compose/", "scripts/", "monitoring/", "evidence/", "troubleshooting/"],
  },
  "database-support-operations-toolkit": {
    icon: "🗄️",
    eyebrow: "Database Operations • Support • Troubleshooting",
    title: "Database and Support Operations Toolkit",
    status: "Operational runbooks and safe lab examples are being prepared",
    lead: "This toolkit will present database operations and support experience honestly. It will focus on service health, connectivity, backup awareness, logs, access, escalation and repeatable checks rather than presenting specialist DBA claims.",
    focus: [
      "Create MySQL, MongoDB and Cloud SQL operational checklists",
      "Document connectivity, service-health and log investigations",
      "Add backup, restore-awareness and escalation runbooks",
      "Publish sanitized support scenarios and verification evidence",
    ],
    structure: ["README.md", "docs/operating-model.md", "mysql/", "mongodb/", "cloud-sql/", "scripts/", "runbooks/", "case-studies/", "evidence/"],
  },
  "linux-server-administration": {
    icon: "🐧",
    eyebrow: "Ubuntu • AlmaLinux • GCP • AWS • Bash",
    title: "Linux Administration & Server Operations",
    status: "Active repository — Lab 01 evidence is being expanded",
    lead: "The repository is live with a structured Linux administration roadmap. User and group management has been validated on the GCP Ubuntu lab, and the multi-distribution evidence set is being completed carefully before further labs are published.",
    focus: [
      "GCP Ubuntu 24.04 user and group lab completed and documented",
      "AWS AlmaLinux validation and evidence are the next milestone",
      "File permissions, systemd, networking, storage, logs and SSH labs are planned",
      "Every lab includes commands, explanations, validation, cleanup and sanitized evidence",
    ],
    structure: ["README.md", "docs/", "01-user-and-group-management/", "02-file-permissions-and-ownership/", "03-systemd-service-management/", "04-network-and-firewall-management/", "05-storage-and-filesystems/", "06-logging-and-troubleshooting/", "07-ssh-hardening/"],
    repository: "https://github.com/PabasaraMeegahakumbura/linux-server-administration-labs",
  },
  "l0-l2-incident-operations": {
    icon: "🎧",
    eyebrow: "L0–L2 Support • Incidents • Escalation • Documentation",
    title: "L0–L2 Support & Incident Operations",
    status: "Case-study structure and sanitized scenarios are being prepared",
    lead: "The repository will demonstrate a disciplined support workflow from intake and triage through investigation, communication, escalation, validation and knowledge capture. Sensitive company or customer information will not be published.",
    focus: [
      "Define L0, L1 and L2 responsibilities and escalation boundaries",
      "Create incident, request and troubleshooting templates",
      "Document communication, validation and closure workflows",
      "Add sanitized scenarios, runbooks and knowledge-base examples",
    ],
    structure: ["README.md", "docs/support-model.md", "l0-intake/", "l1-troubleshooting/", "l2-investigation/", "incident-runbooks/", "templates/", "case-studies/", "evidence/"],
  },
};

const params = new URLSearchParams(window.location.search);
const slug = params.get("project") || "linux-server-administration";
const project = projects[slug] || projects["linux-server-administration"];

document.title = `${project.title} | PabaOps`;
document.querySelector('meta[name="description"]').setAttribute("content", `${project.title} progress and repository status page by PabaOps.`);
document.querySelector("[data-eyebrow]").textContent = `${project.icon} ${project.eyebrow}`;
document.querySelector("[data-status]").append(document.createTextNode(project.status));
document.querySelector("[data-title]").textContent = project.title;
document.querySelector("[data-lead]").textContent = project.lead;

const focusList = document.querySelector("[data-focus]");
project.focus.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  focusList.append(li);
});

document.querySelector("[data-structure]").textContent = `${slug}/\n├── ${project.structure.join("\n├── ")}\n└── LICENSE`;

const primaryAction = document.querySelector("[data-primary-action]");
if (project.repository) {
  primaryAction.textContent = "Open active repository ↗";
  primaryAction.href = project.repository;
} else {
  primaryAction.textContent = "View GitHub profile ↗";
  primaryAction.href = "https://github.com/PabasaraMeegahakumbura";
}
