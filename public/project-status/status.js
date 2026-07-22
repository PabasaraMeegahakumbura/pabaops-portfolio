const projects = {
  "kubernetes-cicd-deployment": {
    icon: "☸️",
    eyebrow: "Kubernetes • Helm • CI/CD • Containers",
    title: "Kubernetes CI/CD Deployment Project",
    status: "Repository upload in progress • Coming soon",
    lead: "This repository is being organized into a complete engineering case study covering application packaging, CI/CD, Kubernetes deployment, Helm releases, validation, rollback and operational evidence.",
    scope: "Build a repeatable path from source control to a containerized Kubernetes deployment with clear release and rollback responsibilities.",
    build: "Application, Docker, Kubernetes, Helm and pipeline assets are being arranged into a clean recruiter-friendly repository.",
    validation: "The final evidence will include build checks, deployment status, service validation, controlled failure tests and rollback verification.",
    publication: "Only tested configuration, documented commands, sanitized screenshots and honest outcomes will be uploaded.",
    progressCopy: "Application, container, Helm and pipeline evidence are being organized.",
    focus: [
      "Define the application, container and Kubernetes deployment architecture",
      "Organize manifests, Helm packaging and CI/CD stages",
      "Document deployment validation, rollback and troubleshooting workflows",
      "Add sanitized build, release and runtime evidence",
    ],
    structure: ["README.md", "docs/architecture.md", "app/", "docker/", "kubernetes/", "helm/", ".github/workflows/", "evidence/", "troubleshooting/"],
  },
  "terraform-infrastructure-automation": {
    icon: "🧩",
    eyebrow: "Terraform • Infrastructure as Code • Cloud",
    title: "Terraform Infrastructure Automation",
    status: "Repository upload in progress • Coming soon",
    lead: "This repository is being prepared to demonstrate safe, reviewable and repeatable infrastructure provisioning with reusable modules, environment separation and validation workflows.",
    scope: "Show how infrastructure can be provisioned consistently while keeping configuration, variables, outputs and operational responsibilities clear.",
    build: "Reusable Terraform modules, environment examples, scripts and documentation are being arranged into a clean repository structure.",
    validation: "Formatting, validation, plan review, output verification and controlled cleanup will be documented before publication.",
    publication: "No cloud identifiers, secrets, state files or office-account information will be included in the public evidence.",
    progressCopy: "Modules, environments and validation workflows are being prepared.",
    focus: [
      "Define a reusable module and environment layout",
      "Document variables, outputs, state handling and security boundaries",
      "Add formatting, validation and plan-review workflows",
      "Publish tested infrastructure examples with sanitized evidence",
    ],
    structure: ["README.md", "docs/architecture.md", "modules/", "environments/dev/", "environments/staging/", "scripts/", "tests/", "evidence/", "troubleshooting/"],
  },
  "cloudflare-waf-hardening": {
    icon: "🔐",
    eyebrow: "Cloudflare • WAF • DNS • Edge Security",
    title: "Secure Cloudflare and WAF Hardening",
    status: "Repository upload in progress • Coming soon",
    lead: "This security case study is being prepared around Cloudflare controls, WAF rules, bot protection, rate limiting, validation and rollback without exposing customer domains or production configuration.",
    scope: "Document a practical edge-security approach that balances protection, service availability and false-positive control.",
    build: "Safe rule examples, decision logic, runbooks and sanitized incident scenarios are being organized.",
    validation: "The final project will show rule testing, expected matches, false-positive review and rollback procedures.",
    publication: "Customer names, domains, IP addresses, account identifiers and production rules will remain private.",
    progressCopy: "WAF, bot, rate-limiting and validation examples are being prepared.",
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
    status: "Repository upload in progress • Coming soon",
    lead: "This project repository is being structured to show how services are packaged, configured, networked, monitored and operated through reproducible Docker workflows.",
    scope: "Demonstrate consistent service packaging and an operationally clear container platform structure.",
    build: "Service directories, Dockerfiles, Compose configuration, health checks and operational scripts are being prepared.",
    validation: "Image builds, service startup, health checks, networking, logs, failure handling and recovery will be tested.",
    publication: "Only reproducible examples and verified lab evidence will be presented as completed work.",
    progressCopy: "Service packaging, networking and health-check evidence are being organized.",
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
    status: "Repository upload in progress • Coming soon",
    lead: "This toolkit is being prepared around database service health, connectivity, logs, backup awareness, access checks, escalation and repeatable operational troubleshooting.",
    scope: "Present production-minded database operations and support without overstating specialist DBA responsibilities.",
    build: "MySQL, MongoDB and Cloud SQL checklists, scripts, scenarios and support runbooks are being organized.",
    validation: "Service state, connectivity, logs, permissions, backup awareness and escalation paths will be verified through safe lab examples.",
    publication: "The repository will use sanitized scenarios and will not contain database credentials, customer data or private infrastructure details.",
    progressCopy: "Operational checklists, scripts and support scenarios are being prepared.",
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
    status: "Active repository • Evidence upload in progress",
    lead: "The Linux administration repository is already active. Lab 01 has been validated on the GCP Ubuntu environment, and AWS AlmaLinux evidence plus the remaining administration labs are being added progressively.",
    scope: "Build a multi-distribution Linux administration portfolio with safe commands, explanations, verification, cleanup and troubleshooting guidance.",
    build: "The core repository structure and user/group management lab are published. Additional evidence and labs are now being completed.",
    validation: "Each lab is tested on Ubuntu and AlmaLinux where applicable, with manual checks and automated verification scripts.",
    publication: "Only sanitized terminal evidence is uploaded; office account details, IPs, credentials and sensitive infrastructure data remain private.",
    progressCopy: "The repository is active and new multi-distribution lab evidence is being uploaded.",
    comingSoon: "Active repository",
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
    status: "Repository upload in progress • Coming soon",
    lead: "This repository is being prepared to demonstrate a structured support workflow from intake and triage through investigation, communication, escalation, validation and knowledge capture.",
    scope: "Present clear L0, L1 and L2 responsibilities together with incident ownership and escalation boundaries.",
    build: "Support models, ticket templates, troubleshooting runbooks and sanitized scenarios are being organized.",
    validation: "Each scenario will include intake, investigation, communication, escalation, resolution checks and closure evidence.",
    publication: "Company, customer, user and production information will be replaced with safe fictional examples.",
    progressCopy: "Support workflows, runbooks and sanitized scenarios are being prepared.",
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

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

document.title = `${project.title} | PabaOps`;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", `${project.title} repository preparation and project progress page by PabaOps.`);

setText("[data-breadcrumb]", project.title);
setText("[data-icon]", project.icon);
setText("[data-eyebrow]", project.eyebrow);
setText("[data-status]", project.status);
setText("[data-title]", project.title);
setText("[data-lead]", project.lead);
setText("[data-progress-copy]", project.progressCopy);
setText("[data-coming-soon]", project.comingSoon || "Coming soon");
setText("[data-scope]", project.scope);
setText("[data-build]", project.build);
setText("[data-validation]", project.validation);
setText("[data-publication]", project.publication);

const focusList = document.querySelector("[data-focus]");
project.focus.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  focusList?.append(listItem);
});

setText(
  "[data-structure]",
  `${slug}/\n├── ${project.structure.join("\n├── ")}\n└── LICENSE`,
);

const primaryAction = document.querySelector("[data-primary-action]");
const pendingAction = document.querySelector("[data-pending-action]");

if (project.repository) {
  primaryAction.textContent = "Open Active Repository ↗";
  primaryAction.href = project.repository;
  pendingAction.hidden = true;
} else {
  primaryAction.hidden = true;
  pendingAction.hidden = false;
}
