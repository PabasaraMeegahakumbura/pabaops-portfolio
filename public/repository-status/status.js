const projects = {
  "kubernetes-cicd-deployment": {
    icon: "☸️",
    eyebrow: "Kubernetes • Helm • CI/CD",
    title: "Kubernetes CI/CD Deployment Repository",
    activities: [
      "Organizing Kubernetes and Helm assets",
      "Validating deployment and rollback steps",
      "Sanitizing CI/CD evidence",
      "Preparing repository documentation",
    ],
  },
  "terraform-infrastructure-automation": {
    icon: "🧩",
    eyebrow: "Terraform • Infrastructure as Code",
    title: "Terraform Infrastructure Automation Repository",
    activities: [
      "Organizing reusable Terraform modules",
      "Reviewing variables and outputs",
      "Validating example plans",
      "Preparing safe infrastructure evidence",
    ],
  },
  "cloudflare-waf-hardening": {
    icon: "🔐",
    eyebrow: "Cloudflare • WAF • Edge Security",
    title: "Cloudflare and WAF Hardening Repository",
    activities: [
      "Organizing security use cases",
      "Sanitizing rule examples",
      "Reviewing validation and rollback notes",
      "Preparing incident-style evidence",
    ],
  },
  "dockerized-microservice-platform": {
    icon: "🐳",
    eyebrow: "Docker • Microservices • Platform",
    title: "Dockerized Microservice Platform Repository",
    activities: [
      "Organizing service and Compose files",
      "Validating image build workflows",
      "Checking health and recovery steps",
      "Preparing runtime evidence",
    ],
  },
  "database-support-operations-toolkit": {
    icon: "🗄️",
    eyebrow: "Database Operations • Support",
    title: "Database and Support Operations Repository",
    activities: [
      "Organizing database runbooks",
      "Validating service-health checks",
      "Sanitizing support scenarios",
      "Preparing operational documentation",
    ],
  },
  "l0-l2-incident-operations": {
    icon: "🎧",
    eyebrow: "L0–L2 Support • Incident Operations",
    title: "L0–L2 Incident Operations Repository",
    activities: [
      "Organizing support workflows",
      "Preparing incident templates",
      "Sanitizing troubleshooting scenarios",
      "Reviewing escalation documentation",
    ],
  },
};

const params = new URLSearchParams(window.location.search);
const slug = params.get("project") || "kubernetes-cicd-deployment";
const project = projects[slug] || {
  icon: "🛠️",
  eyebrow: "PabaOps • Project Repository",
  title: "Project Repository",
  activities: [
    "Preparing repository structure",
    "Validating project assets",
    "Sanitizing public evidence",
    "Uploading documentation",
  ],
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

window.document.title = `${project.title} Status | PabaOps`;
setText("[data-icon]", project.icon);
setText("[data-eyebrow]", project.eyebrow);
setText("[data-title]", project.title);
setText("[data-slug]", slug);
setText("[data-activity]", project.activities[0]);

const caseStudyLink = document.querySelector("[data-case-study]");
if (caseStudyLink) {
  caseStudyLink.href = `../project-status/index.html?project=${encodeURIComponent(slug)}`;
}

const activityElement = document.querySelector("[data-activity]");
let activityIndex = 0;

if (activityElement && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(() => {
    activityIndex = (activityIndex + 1) % project.activities.length;
    activityElement.animate(
      [
        { opacity: 0, transform: "translateY(5px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 320, easing: "ease-out" },
    );
    activityElement.textContent = project.activities[activityIndex];
  }, 2400);
}
