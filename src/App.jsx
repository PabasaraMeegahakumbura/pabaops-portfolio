import { useEffect, useState } from "react";

const BRAND_IMAGE = `${import.meta.env.BASE_URL}pabaops-logo.webp`;
const HERO_IMAGE = `${import.meta.env.BASE_URL}pabaops-hero.webp`;
const K8S_LOGO = `${import.meta.env.BASE_URL}k8s-logo.svg`;
const RESUME_FILE = `${import.meta.env.BASE_URL}Pabasara_Resume.pdf`;
const GITHUB_PROFILE = "https://github.com/PabasaraMeegahakumbura";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/pabasara-meegahakumbura/";
const AI_API_URL = import.meta.env.VITE_AI_API_URL || "";

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash || "#/");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [showAiGreeting, setShowAiGreeting] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I’m the PabaOps AI Assistant. Ask me about Pabasara’s DevOps, SRE, cloud, Linux, platform, support, projects, or availability.",
    },
  ]);


  const aiQuickPrompts = [
    "Why should we hire Pabasara?",
    "Summarize his DevOps experience",
    "What Linux distributions has he worked with?",
    "Show his Kubernetes and Terraform strengths",
    "Explain his L0–L2 support background",
  ];

  const getLocalAIResponse = (question) => {
    const normalized = question.toLowerCase();

    if (
      normalized.includes("hire") ||
      normalized.includes("why") ||
      normalized.includes("value")
    ) {
      return "Pabasara combines DevOps engineering with strong production support discipline. His value comes from cloud and platform operations, Kubernetes, Terraform, CI/CD, Linux administration, observability, security-aware operations, and L0–L2 troubleshooting. This combination helps him build systems while also understanding how to operate, monitor, support, and recover them.";
    }

    if (
      normalized.includes("linux") ||
      normalized.includes("ubuntu") ||
      normalized.includes("rhel") ||
      normalized.includes("centos") ||
      normalized.includes("almalinux")
    ) {
      return "His Linux administration experience includes Ubuntu, RHEL, CentOS, and AlmaLinux. Key areas include users and groups, permissions, sudo, SSH, systemd, packages, processes, cron, networking, DNS, firewalls, storage, logs, troubleshooting, WHM/cPanel, SSL, mail, WordPress hosting, and server operations.";
    }

    if (
      normalized.includes("kubernetes") ||
      normalized.includes("terraform") ||
      normalized.includes("container") ||
      normalized.includes("docker")
    ) {
      return "His platform strengths include Kubernetes operations, Docker, Terraform infrastructure automation, Git-based CI/CD, Linux systems, cloud infrastructure, deployment consistency, troubleshooting, monitoring, and repeatable operational workflows. The portfolio includes dedicated capability pages and project structures for these areas.";
    }

    if (
      normalized.includes("support") ||
      normalized.includes("l0") ||
      normalized.includes("l1") ||
      normalized.includes("l2") ||
      normalized.includes("incident")
    ) {
      return "Pabasara has L0–L2 support depth covering issue intake, validation, prioritization, user communication, common service troubleshooting, access and identity, email and DNS, networking, application support, log analysis, advanced investigation, escalation, incident ownership, Jira, Zoho, runbooks, and knowledge documentation.";
    }

    if (
      normalized.includes("experience") ||
      normalized.includes("career") ||
      normalized.includes("role")
    ) {
      return "He progressed from End User Support and L0–L2 Support into Associate DevOps and then DevOps & IT Operations responsibilities. His work spans AWS, GCP, Azure, Kubernetes, Docker, Terraform, Linux, CI/CD, Cloudflare, monitoring, databases, security-aware operations, WHM/cPanel, WordPress, and production support.";
    }

    if (
      normalized.includes("cloud") ||
      normalized.includes("aws") ||
      normalized.includes("gcp") ||
      normalized.includes("azure") ||
      normalized.includes("cloudflare")
    ) {
      return "His cloud and edge experience includes AWS, GCP, Azure, Cloudflare, IAM, compute, networking, firewalls, backups, snapshots, service accounts, DNS, WAF, SSL, hosting, migrations, and operational troubleshooting.";
    }

    if (
      normalized.includes("monitor") ||
      normalized.includes("observability") ||
      normalized.includes("grafana") ||
      normalized.includes("prometheus") ||
      normalized.includes("datadog")
    ) {
      return "His observability stack includes Prometheus, Grafana, Datadog, ELK/EFK, UptimeRobot, and cloud-native monitoring. He focuses on dashboards, alerts, uptime checks, logs, service health, incident detection, investigation, and operational response.";
    }

    if (
      normalized.includes("contact") ||
      normalized.includes("email") ||
      normalized.includes("available") ||
      normalized.includes("linkedin") ||
      normalized.includes("github")
    ) {
      return "Pabasara is open to DevOps, Cloud Operations, Platform Engineering, SRE, Linux Administration, and technical support opportunities. You can use the portfolio Contact section, LinkedIn, GitHub, or resume links to reach him.";
    }

    return "Pabasara is a DevOps & IT Operations Engineer with strengths across cloud, Kubernetes, Terraform, CI/CD, Linux administration, observability, security-aware operations, databases, WHM/cPanel, WordPress, and L0–L2 support. Ask me a more specific question about his skills, projects, experience, Linux work, support background, or availability.";
  };

  const sendAIMessage = async (promptText = aiInput) => {
    const question = promptText.trim();

    if (!question || aiLoading) {
      return;
    }

    const userMessage = { role: "user", content: question };
    const conversationForRequest = [...aiMessages, userMessage].slice(-10);

    setAiMessages((current) => [...current, userMessage]);
    setAiInput("");
    setAiLoading(true);

    try {
      let answer;

      if (AI_API_URL) {
        const response = await fetch(AI_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: question,
            history: conversationForRequest,
          }),
        });

        if (!response.ok) {
          throw new Error(`AI request failed with status ${response.status}`);
        }

        const data = await response.json();
        answer = data.answer?.trim();

        if (!answer) {
          throw new Error("The AI service returned an empty answer.");
        }
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 450));
        answer = getLocalAIResponse(question);
      }

      setAiMessages((current) => [
        ...current,
        { role: "assistant", content: answer },
      ]);
    } catch (error) {
      console.error("PabaOps AI Assistant error:", error);

      setAiMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            `${getLocalAIResponse(question)} The live AI service is temporarily unavailable, so I answered using the portfolio’s built-in knowledge.`,
        },
      ]);
    } finally {
      setAiLoading(false);
    }
  };

  const handleAIKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendAIMessage();
    }
  };

  const impactStats = [
    { label: "Primary Focus", value: "DevOps + SRE + Platform" },
    { label: "Core Stack", value: "Kubernetes + Terraform Automation" },
    { label: "Cloud & Edge", value: "AWS / GCP / Azure / Cloudflare" },
    { label: "Linux Administration", value: "Ubuntu / RHEL / CentOS / AlmaLinux" },
    { label: "Languages", value: "Python + Bash + Java/C# Basics" },
    { label: "Support Operations", value: "L0–L2 + Incident Troubleshooting" },
  ];

  const quickChips = [
    "AWS",
    "GCP",
    "Azure",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Linux Administration",
    "Ubuntu",
    "RHEL/CentOS",
    "AlmaLinux",
    "Python",
    "Bash",
    "Java (Basic)",
    "C# (Basic)",
    "CI/CD",
    "Prometheus",
    "Grafana",
    "Datadog",
    "Cloudflare",
    "WAF",
    "MongoDB",
    "Jira",
    "L0–L2 Support",
  ];

  const toolIcons = [
    { icon: "☁️", name: "Cloud" },
    { image: K8S_LOGO, name: "Kubernetes" },
    { icon: "🐳", name: "Docker" },
    { icon: "⚙️", name: "CI/CD" },
    { icon: "📊", name: "Monitoring" },
    { icon: "🔐", name: "Security" },
    { icon: "🐧", name: "Linux Admin" },
    { icon: "🎧", name: "L0–L2 Support" },
    { icon: "🐍", name: "Python" },
  ];

  const measurableImpact = [
    "Support cloud and Kubernetes-oriented environments with production-minded operational discipline",
    "Improve deployment consistency through CI/CD, automation, and structured release workflows",
    "Reduce manual effort using Terraform, scripting, and repeatable operational patterns",
    "Strengthen visibility through observability tooling and incident support practices",
    "Bring L0–L2 support depth into DevOps, platform, and cloud operations work",
  ];

  const skillGroups = [
    { title: "Cloud", items: ["AWS", "GCP", "Azure", "Cloudflare"] },
    { title: "Containers & Platform", items: ["Kubernetes", "Docker", "WHM/cPanel", "Platform Operations"] },
    { title: "CI/CD & Automation", items: ["GitLab CI", "Jenkins", "Terraform", "Infrastructure Automation"] },
    { title: "Languages & Scripting", items: ["Python", "Bash", "PowerShell", "Java (Basic)", "C# (Basic)"] },
    { title: "Linux Administration", items: ["Ubuntu", "RHEL", "CentOS", "AlmaLinux", "systemd", "SSH", "firewalld"] },
    { title: "Observability", items: ["Prometheus", "Grafana", "Datadog", "ELK/EFK", "UptimeRobot"] },
    { title: "Security", items: ["WAF", "Vault", "Consul", "IAM/RBAC", "CrowdStrike Admin"] },
    { title: "Databases & Ops Tools", items: ["MongoDB", "MySQL", "Jira", "Zoho"] },
    { title: "L0–L2 Support", items: ["Incident Triage", "Troubleshooting", "Escalation", "SLA Awareness", "Documentation", "User Support"] },
  ];

  const featuredProjects = [
    {
      title: "Self-Hosted Email Platform Engineering Lab",
      subtitle: "Mailcow, Poste.io, UCS/Nubus and platform evaluation",
      problem:
        "Evaluate and operate self-hosted business email platforms with production-minded attention to Linux, containers, DNS authentication, deliverability, security, backups, recovery and cost.",
      implemented: [
        "Deployed and tested Mailcow and Poste.io with domains, mailboxes and webmail",
        "Validated internal delivery and two-way Gmail mail flow",
        "Published and checked MX, SPF and DKIM records with DMARC and PTR/rDNS planning",
        "Created Mailcow component backups and verified every Zstandard archive",
        "Evaluated UCS/Nubus and designed an Open-Xchange proof-of-concept architecture",
        "Produced security, monitoring, recovery, pricing and operations documentation",
      ],
      outcome:
        "Built a working, multi-platform email engineering lab with verified external mail flow and integrity-checked backups, while recording the isolated restore drill as the next production-readiness milestone.",
      replaceLater: [
        "Next: complete an isolated Mailcow restore drill",
        "Next: measure RTO/RPO and add service, queue, certificate and backup alerts",
      ],
      tools: [
        "GCP",
        "Ubuntu",
        "Docker Compose",
        "Mailcow",
        "Poste.io",
        "Postfix",
        "Dovecot",
        "Cloudflare DNS",
      ],
      icon: "📧",
      link: "https://github.com/PabasaraMeegahakumbura/self-hosted-email-platform-lab",
    },
    {
      title: "Kubernetes CI/CD Deployment Project",
      subtitle: "End-to-end deployment workflow",
      problem:
        "Show how code moves from source control to a repeatable Kubernetes deployment with cleaner delivery and release consistency.",
      implemented: [
        "Dockerized application components",
        "Git-based CI/CD workflow structure",
        "Kubernetes deployment layout",
        "Release-friendly delivery flow",
      ],
      outcome:
        "Example outcome to replace later: improved deployment consistency and reduced manual release steps across environments.",
      replaceLater: [
        "Add your real GitHub repo link",
        "Add a real screenshot or architecture image",
        "Replace with an actual result or metric",
      ],
      tools: ["Kubernetes", "Docker", "CI/CD", "Git", "Linux"],
      image: K8S_LOGO,
      link: GITHUB_PROFILE,
    },
    {
      title: "Terraform Infrastructure Automation",
      subtitle: "Infrastructure as Code and repeatability",
      problem:
        "Reduce manual configuration and improve consistency across infrastructure provisioning and operational setup tasks.",
      implemented: [
        "Terraform-based infrastructure layout",
        "Automation-oriented configuration approach",
        "Reusable provisioning structure",
        "Support for controlled environment setup",
      ],
      outcome:
        "Example outcome to replace later: reduced repetitive setup work and improved repeatability for infrastructure changes.",
      replaceLater: [
        "Add your Terraform repo",
        "Show what cloud resources were included",
        "Replace with a real automation win",
      ],
      tools: ["Terraform", "Cloud", "Automation", "Linux"],
      icon: "🧩",
      link: GITHUB_PROFILE,
    },
    {
      title: "Monitoring Stack with Prometheus and Grafana",
      subtitle: "Observability and incident support",
      problem:
        "Improve operational visibility and support faster troubleshooting across services and infrastructure.",
      implemented: [
        "Monitoring-focused architecture approach",
        "Dashboard-oriented visibility planning",
        "Alerting and operational awareness mindset",
        "Incident support readiness",
      ],
      outcome:
        "Example outcome to replace later: stronger visibility into services and quicker issue detection during operational support.",
      replaceLater: [
        "Add your dashboard or screenshot",
        "Mention alerting or uptime improvements",
        "Replace with your actual monitoring result",
      ],
      tools: ["Prometheus", "Grafana", "Datadog", "UptimeRobot"],
      icon: "📊",
      link: GITHUB_PROFILE,
    },
    {
      title: "Secure Cloudflare and WAF Hardening",
      subtitle: "Security-aware edge and traffic protection",
      problem:
        "Strengthen frontend and edge security through Cloudflare controls, WAF thinking, and security-aware operations.",
      implemented: [
        "Cloudflare protection approach",
        "WAF-focused security controls",
        "Support-oriented incident awareness",
        "Operational hardening mindset",
      ],
      outcome:
        "Example outcome to replace later: improved edge-layer protection and better traffic control for exposed services.",
      replaceLater: [
        "Add your Cloudflare-related repo or notes",
        "Mention rule tuning or attack reduction",
        "Replace with your real security result",
      ],
      tools: ["Cloudflare", "WAF", "Security", "Operations"],
      icon: "🔐",
      link: GITHUB_PROFILE,
    },
    {
      title: "Dockerized Microservice Platform",
      subtitle: "Containers and service operations",
      problem:
        "Demonstrate container-based service packaging and a cleaner platform-oriented operational structure.",
      implemented: [
        "Container-friendly application setup",
        "Microservice-oriented organization",
        "Platform support thinking",
        "Operational consistency across environments",
      ],
      outcome:
        "Example outcome to replace later: cleaner packaging and easier service movement between development and runtime environments.",
      replaceLater: [
        "Add your Docker or compose repo",
        "Show service structure or architecture",
        "Replace with your real platform result",
      ],
      tools: ["Docker", "Platform", "Linux", "Cloud"],
      icon: "🐳",
      link: GITHUB_PROFILE,
    },
    {
      title: "Database and Support Operations Toolkit",
      subtitle: "Support depth across tools and services",
      problem:
        "Show production-minded support exposure across databases, service tools, ticketing, and troubleshooting workflows.",
      implemented: [
        "MongoDB and MySQL support context",
        "Jira and Zoho-oriented support workflow",
        "Troubleshooting-focused handling",
        "Operations support discipline",
      ],
      outcome:
        "Example outcome to replace later: better incident handling, stronger support flow, and improved visibility into operational issues.",
      replaceLater: [
        "Mention your real support workflow",
        "Add database-related scripts or notes",
        "Replace with your actual support impact",
      ],
      tools: ["MongoDB", "MySQL", "Jira", "Zoho"],
      icon: "🗄️",
      link: GITHUB_PROFILE,
    },
    {
      title: "Linux Administration & Server Operations",
      subtitle: "Multi-distribution systems administration",
      problem:
        "Demonstrate practical Linux administration across cloud and hosted environments with a focus on stability, secure access, service availability, and structured troubleshooting.",
      implemented: [
        "User, group, permission, and SSH access administration",
        "Package, process, service, and scheduled task management",
        "Networking, firewall, DNS, log, and connectivity troubleshooting",
        "Web and hosting operations across Linux and WHM/cPanel environments",
      ],
      outcome:
        "Example outcome to replace later: improved server stability, safer access control, and faster diagnosis of Linux service and connectivity issues.",
      replaceLater: [
        "Add a Linux administration lab repository",
        "Include terminal screenshots or a server architecture diagram",
        "Replace with a real operational result or incident example",
      ],
      tools: ["Ubuntu", "RHEL", "CentOS", "AlmaLinux", "systemd", "Bash", "SSH"],
      icon: "🐧",
      link: GITHUB_PROFILE,
    },
    {
      title: "L0–L2 Support & Incident Operations",
      subtitle: "Service support, troubleshooting, and escalation",
      problem:
        "Present a structured support workflow from initial user intake through technical investigation, escalation, documentation, and operational follow-up.",
      implemented: [
        "L0 request intake, validation, classification, and routing",
        "L1 user, application, access, network, and service troubleshooting",
        "L2 log analysis, advanced investigation, and technical escalation",
        "Incident communication, Jira/Zoho tracking, and knowledge documentation",
      ],
      outcome:
        "Example outcome to replace later: improved incident ownership, clearer escalation paths, and more consistent communication throughout issue resolution.",
      replaceLater: [
        "Add a sanitized troubleshooting case study",
        "Show an incident workflow or knowledge-base example",
        "Replace with a real support metric or service improvement",
      ],
      tools: ["L0–L2", "Jira", "Zoho", "Monitoring", "Troubleshooting", "Documentation"],
      icon: "🎧",
      link: GITHUB_PROFILE,
    },

  ];

  const experience = [
    {
      role: "DevOps & IT Operations Engineer",
      company: "Zafer AI (formerly ZorroSign)",
      period: "Aug 2024 – Present",
      text: "Operate cloud and Kubernetes environments across AWS and GCP, maintain CI/CD pipelines, automate infrastructure with Terraform and scripting, improve observability, and support secure operations across Linux-based environments.",
      bullets: [
        "Kubernetes environment support",
        "Terraform automation and scripting",
        "CI/CD pipeline maintenance",
        "Monitoring, logging, and observability support",
        "Linux operations and platform reliability",
        "Cloudflare, WAF, and security-aware support",
      ],
    },
    {
      role: "Associate DevOps Engineer",
      company: "ZorroSign Inc.",
      period: "Feb 2024 – Aug 2024",
      text: "Supported Kubernetes environments, automation tasks, monitoring workflows, and technical runbooks for more structured delivery and operations processes.",
      bullets: [
        "Container and Kubernetes support exposure",
        "Automation-focused tasks",
        "Operational documentation and runbooks",
        "Monitoring workflow contribution",
      ],
    },
    {
      role: "Support Engineer (L0–L2)",
      company: "ZorroSign Inc.",
      period: "Aug 2023 – Feb 2024",
      text: "Handled production-oriented support across cloud and on-prem systems and strengthened troubleshooting through monitoring, scripting, Jira, Zoho, and operational discipline.",
      bullets: [
        "L0–L2 support across live environments",
        "Production-oriented troubleshooting",
        "Jira and Zoho workflow exposure",
        "Support discipline carried into DevOps work",
      ],
    },
  ];

  const certifications = [
    { badge: "☁️", title: "AWS Certified Cloud Practitioner", text: "Cloud fundamentals and platform awareness." },
    { badge: "☸️", title: "CKA — In Progress", text: "Kubernetes administration and deeper platform capability building." },
    { badge: "🎓", title: "MBA (Business Analytics) — Final Semester", text: "Business-facing analytical and strategic perspective." },
    { badge: "💻", title: "BIT — University of Moratuwa (In Progress)", text: "Ongoing technical and systems-oriented academic development." },
  ];

  const workingNow = [
    "Building recruiter-ready DevOps portfolio projects",
    "Improving Kubernetes deployment workflows",
    "Deepening Terraform automation practice",
    "Strengthening observability and reliability patterns",
    "Preparing toward stronger Kubernetes capability",
  ];



  const capabilityAreas = [
    {
      slug: "linux",
      icon: "🐧",
      title: "Linux Administration",
      eyebrow: "Server & Operating System Operations",
      summary:
        "Multi-distribution Linux administration covering access, services, packages, networking, firewalls, storage, logs, hosting, security, troubleshooting, and operational recovery.",
      tags: [
        "Ubuntu",
        "RHEL",
        "CentOS",
        "AlmaLinux",
        "Bash",
        "systemd",
        "SSH",
        "firewalld",
        "WHM/cPanel",
      ],
      focus: [
        {
          icon: "👤",
          title: "Identity, Access & Permissions",
          text: "Users, groups, sudo, ownership, permissions, SSH keys, secure remote access, and access troubleshooting.",
        },
        {
          icon: "⚙️",
          title: "Services, Processes & Packages",
          text: "systemd, process inspection, startup behavior, package management, repositories, cron, and dependency issues.",
        },
        {
          icon: "🌐",
          title: "Networking, DNS & Firewall",
          text: "Interfaces, routes, ports, DNS resolution, SSH connectivity, firewalld, listening services, and packet-level checks.",
        },
        {
          icon: "💾",
          title: "Storage, Filesystems & Backups",
          text: "Disk usage, partitions, mounts, filesystems, backup locations, retention awareness, and capacity investigation.",
        },
        {
          icon: "📋",
          title: "Logs, Performance & Recovery",
          text: "journalctl, application logs, CPU, memory, disk, service health, root-cause isolation, remediation, and validation.",
        },
        {
          icon: "🌍",
          title: "Web & Hosting Operations",
          text: "WHM/cPanel, Apache or Nginx awareness, SSL, DNS, mail services, WordPress hosting, and Linux-based web operations.",
        },
      ],
      evidence: [
        "Linux administration lab repositories with commands and explanations",
        "Sanitized troubleshooting and incident case studies",
        "Bash automation scripts and reusable operational checks",
        "Runbooks for SSH, services, firewall, storage, DNS, and hosting tasks",
      ],
    },
    {
      slug: "cloud-platform",
      icon: "☁️",
      title: "Cloud, Platform & Automation",
      eyebrow: "Infrastructure, Containers & Delivery",
      summary:
        "Cloud and platform operations across AWS, GCP, Azure, Kubernetes, Docker, Terraform, CI/CD, hosting systems, and repeatable infrastructure workflows.",
      tags: [
        "AWS",
        "GCP",
        "Azure",
        "Kubernetes",
        "Docker",
        "Terraform",
        "GitLab CI",
        "Jenkins",
        "Cloudflare",
        "WHM/cPanel",
      ],
      focus: [
        {
          icon: "☁️",
          title: "Cloud Infrastructure",
          text: "Compute, networking, IAM, storage, backups, snapshots, firewall controls, service accounts, and operational support.",
        },
        {
          icon: "☸️",
          title: "Kubernetes Platform Operations",
          text: "Clusters, nodes, pods, deployments, services, configuration, troubleshooting, availability, and workload support.",
        },
        {
          icon: "🐳",
          title: "Containers & Runtime",
          text: "Docker packaging, images, registries, runtime behavior, environment consistency, and container troubleshooting.",
        },
        {
          icon: "🧩",
          title: "Infrastructure as Code",
          text: "Terraform structure, reusable configuration, variables, state awareness, controlled provisioning, and repeatability.",
        },
        {
          icon: "🔁",
          title: "CI/CD & Release Automation",
          text: "Git-based workflows, build and deployment pipelines, validation, release consistency, and operational handover.",
        },
        {
          icon: "🌐",
          title: "Edge, DNS & Hosting",
          text: "Cloudflare, DNS, WAF awareness, SSL, WHM/cPanel, WordPress operations, hosting migrations, and traffic troubleshooting.",
        },
      ],
      evidence: [
        "Terraform repositories with architecture diagrams and documented variables",
        "Kubernetes deployment projects with manifests and troubleshooting notes",
        "CI/CD pipelines showing build, test, image, and deployment stages",
        "Cloud migration, backup, disaster-recovery, and hosting case studies",
      ],
    },
    {
      slug: "observability-security",
      icon: "🛡️",
      title: "Observability, Security & Reliability",
      eyebrow: "Monitoring, Detection & Protection",
      summary:
        "Operational visibility and security-aware reliability through metrics, logs, alerts, uptime monitoring, WAF controls, IAM/RBAC, incident detection, and structured response.",
      tags: [
        "Prometheus",
        "Grafana",
        "Datadog",
        "ELK/EFK",
        "UptimeRobot",
        "Cloud Monitoring",
        "Cloudflare WAF",
        "IAM/RBAC",
        "Vault",
        "CrowdStrike",
      ],
      focus: [
        {
          icon: "📊",
          title: "Metrics & Dashboards",
          text: "Service, host, and workload metrics with practical dashboards that support health checks, trends, and investigation.",
        },
        {
          icon: "📚",
          title: "Logs & Search",
          text: "Centralized logging, filtering, correlation, application and system logs, and evidence-led troubleshooting.",
        },
        {
          icon: "🔔",
          title: "Alerting & Notification",
          text: "Actionable alert rules, thresholds, notification routing, noise reduction, escalation awareness, and validation.",
        },
        {
          icon: "⏱️",
          title: "Availability & Uptime",
          text: "Endpoint checks, SSL and service visibility, uptime monitoring, external validation, and response readiness.",
        },
        {
          icon: "🔐",
          title: "Security Controls",
          text: "WAF, Cloudflare, firewall, IAM/RBAC, Vault, access review, endpoint security awareness, and least-privilege thinking.",
        },
        {
          icon: "🚨",
          title: "Incident Detection & Response",
          text: "Signal review, containment awareness, evidence gathering, service recovery, validation, and post-incident documentation.",
        },
      ],
      evidence: [
        "Monitoring repositories with architecture, dashboards, and alert examples",
        "Sanitized security-hardening and incident-response case studies",
        "Uptime, SSL, server, Kubernetes, and application monitoring examples",
        "Operational runbooks for alerts, containment, recovery, and validation",
      ],
    },
    {
      slug: "support",
      icon: "🎧",
      title: "L0–L2 Technical Support",
      eyebrow: "Service Support & Incident Operations",
      summary:
        "Structured support from first contact through advanced technical investigation, escalation, communication, recovery validation, documentation, and knowledge transfer.",
      tags: [
        "L0–L2",
        "Jira",
        "Zoho",
        "Microsoft 365",
        "Google Workspace",
        "DNS & Email",
        "Remote Support",
        "Incident Triage",
        "SLA Awareness",
        "Runbooks",
      ],
      focus: [
        {
          icon: "L0",
          title: "Intake, Validation & Classification",
          text: "Understand the request, confirm impact, collect evidence, classify priority, perform initial checks, and route correctly.",
        },
        {
          icon: "L1",
          title: "User & Service Troubleshooting",
          text: "Resolve common access, endpoint, application, email, DNS, network, identity, and service issues professionally.",
        },
        {
          icon: "L2",
          title: "Advanced Technical Investigation",
          text: "Analyze logs, infrastructure, configuration, monitoring signals, dependencies, and recurring technical failures.",
        },
        {
          icon: "INC",
          title: "Incident Ownership & Escalation",
          text: "Maintain ownership, communicate progress, coordinate escalation, track impact, validate recovery, and follow through.",
        },
        {
          icon: "COM",
          title: "Customer & Stakeholder Communication",
          text: "Use clear language, empathy, realistic expectations, meaningful updates, and confident technical communication.",
        },
        {
          icon: "KB",
          title: "Documentation & Knowledge",
          text: "Create case notes, troubleshooting records, runbooks, reusable solutions, handovers, and knowledge-base content.",
        },
      ],
      evidence: [
        "Sanitized L0–L2 troubleshooting case studies",
        "Incident workflow diagrams and escalation examples",
        "Professional customer communication and update templates",
        "Knowledge-base articles, technical runbooks, and support checklists",
      ],
    },
    {
      slug: "devops-principles",
      icon: "🤝",
      title: "DevOps Principles & Culture",
      eyebrow: "Collaboration, Ownership & Continuous Improvement",
      summary:
        "A practical DevOps mindset built around collaboration, shared ownership, automation, fast feedback, measurable improvement, knowledge sharing, reliability, and continuous learning.",
      tags: [
        "CALMS",
        "Collaboration",
        "Shared Ownership",
        "Automation",
        "CI/CD",
        "Measurement",
        "Feedback Loops",
        "Knowledge Sharing",
        "Continuous Improvement",
        "DevSecOps",
      ],
      focus: [
        {
          icon: "🤝",
          title: "Collaboration & Shared Ownership",
          text: "Work across development, operations, support, security, and business teams with shared goals, clear communication, and collective responsibility for outcomes.",
        },
        {
          icon: "🔁",
          title: "Continuous Integration & Delivery",
          text: "Promote small, frequent, testable changes through repeatable pipelines, early validation, safer releases, and fast recovery when issues occur.",
        },
        {
          icon: "⚙️",
          title: "Automation & Repeatability",
          text: "Reduce manual effort and inconsistency through infrastructure as code, scripting, reusable workflows, standardization, and automated operational checks.",
        },
        {
          icon: "📊",
          title: "Measurement & Feedback",
          text: "Use monitoring, logs, deployment signals, incidents, user feedback, and service metrics to understand performance and guide improvement.",
        },
        {
          icon: "📚",
          title: "Sharing & Documentation",
          text: "Create runbooks, troubleshooting notes, diagrams, knowledge-base content, and clear handovers so knowledge is reusable and not dependent on one person.",
        },
        {
          icon: "🌱",
          title: "Learning & Continuous Improvement",
          text: "Use blameless reviews, retrospectives, root-cause analysis, experimentation, and lessons learned to improve systems, processes, and team capability.",
        },
      ],
      evidence: [
        "Repositories that show small, structured commits and clear documentation",
        "CI/CD workflows with validation, repeatability, and rollback awareness",
        "Infrastructure-as-code and automation examples that reduce manual work",
        "Monitoring, incident, post-incident, and continuous-improvement case studies",
        "Runbooks, knowledge articles, diagrams, and collaboration-ready handovers",
      ],
    },

  ];

  const linuxDistributions = [
    "Ubuntu",
    "Red Hat Enterprise Linux (RHEL)",
    "CentOS",
    "AlmaLinux",
  ];

  const linuxCapabilities = [
    {
      icon: "👤",
      title: "Users, Groups & Access",
      text: "User and group administration, sudo access, file ownership, permissions, SSH keys, and secure remote access practices.",
    },
    {
      icon: "⚙️",
      title: "Services & Processes",
      text: "systemd service control, process inspection, startup behavior, cron scheduling, package management, and dependency troubleshooting.",
    },
    {
      icon: "🌐",
      title: "Networking & Firewall",
      text: "IP, route, DNS, port, SSH, firewalld, connectivity, and service-listening checks across cloud and hosted systems.",
    },
    {
      icon: "📋",
      title: "Logs & Troubleshooting",
      text: "Journal and application log analysis, resource checks, incident isolation, root-cause investigation, and recovery validation.",
    },
    {
      icon: "💾",
      title: "Storage & Filesystems",
      text: "Disk usage, partitions, mounts, filesystems, permissions, backup locations, and capacity-related operational checks.",
    },
    {
      icon: "🌍",
      title: "Web & Hosting Operations",
      text: "Linux web hosting support with WHM/cPanel, Apache or Nginx awareness, SSL, DNS, mail services, and website operations.",
    },
  ];

  const supportCapabilities = [
    {
      level: "L0",
      title: "Intake & Classification",
      text: "Capture the issue clearly, confirm impact, collect evidence, classify priority, perform basic validation, and route correctly.",
    },
    {
      level: "L1",
      title: "User & Service Troubleshooting",
      text: "Resolve common access, endpoint, application, email, network, DNS, and service issues while keeping the user informed.",
    },
    {
      level: "L2",
      title: "Advanced Investigation",
      text: "Review logs, services, infrastructure, monitoring signals, configuration, and dependencies before escalation or remediation.",
    },
    {
      level: "INC",
      title: "Incident Coordination",
      text: "Track impact, maintain ownership, communicate progress, coordinate escalation, validate recovery, and support post-incident follow-up.",
    },
    {
      level: "TOOLS",
      title: "Operational Tooling",
      text: "Use Jira, Zoho, monitoring platforms, remote support tools, command-line diagnostics, and documentation to manage support work.",
    },
    {
      level: "KB",
      title: "Documentation & Knowledge",
      text: "Create clear troubleshooting notes, technical runbooks, reusable solutions, handover details, and knowledge-base content.",
    },
  ];


  useEffect(() => {
    const showTimer = window.setTimeout(() => {
      setShowAiGreeting(true);
    }, 900);

    const hideTimer = window.setTimeout(() => {
      setShowAiGreeting(false);
    }, 8500);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const updateScrollButton = () => {
      const triggerPoint = Math.min(480, window.innerHeight * 0.65);
      setShowScrollTop(window.scrollY > triggerPoint);
    };

    updateScrollButton();
    window.addEventListener("scroll", updateScrollButton, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollButton);
  }, []);

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = window.location.hash || "#/";
      setRoute(nextRoute);

      window.setTimeout(() => {
        if (nextRoute.startsWith("#/")) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        const target = document.querySelector(nextRoute);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-card");
    const mobileOrTouch = window.matchMedia(
      "(max-width: 720px), (hover: none), (pointer: coarse)"
    ).matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let observer = null;

    if (mobileOrTouch || reducedMotion) {
      elements.forEach((element) => {
        element.style.transitionDelay = "0ms";
        element.classList.add("show");
      });
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px 120px 0px",
        }
      );

      elements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min((index % 6) * 55, 275)}ms`;
        observer.observe(element);
      });
    }

    const enableCustomCursor = window.matchMedia(
      "(min-width: 901px) and (hover: hover) and (pointer: fine)"
    ).matches;
    const ring = enableCustomCursor
      ? document.querySelector(".cursor-ring")
      : null;
    const dot = enableCustomCursor
      ? document.querySelector(".cursor-dot")
      : null;
    const interactive = enableCustomCursor
      ? document.querySelectorAll(
          "a, .tool-tile, .strip-card, .flip-card, .project-card, .hero-brand-art, .mini-btn, .brand-img, .capability-hub-card, .capability-focus-card"
        )
      : [];

    const moveCursor = (event) => {
      if (ring) {
        ring.style.left = `${event.clientX}px`;
        ring.style.top = `${event.clientY}px`;
      }
      if (dot) {
        dot.style.left = `${event.clientX}px`;
        dot.style.top = `${event.clientY}px`;
      }
    };

    const activateCursor = () => ring?.classList.add("cursor-active");
    const deactivateCursor = () => ring?.classList.remove("cursor-active");

    if (enableCustomCursor) {
      window.addEventListener("mousemove", moveCursor, { passive: true });
      interactive.forEach((element) => {
        element.addEventListener("mouseenter", activateCursor);
        element.addEventListener("mouseleave", deactivateCursor);
      });
    }

    return () => {
      observer?.disconnect();

      if (enableCustomCursor) {
        window.removeEventListener("mousemove", moveCursor);
        interactive.forEach((element) => {
          element.removeEventListener("mouseenter", activateCursor);
          element.removeEventListener("mouseleave", deactivateCursor);
        });
      }
    };
  }, [route]);

  const isCapabilitiesRoute = route.startsWith("#/capabilities");
  const capabilitySlug = isCapabilitiesRoute ? route.split("/")[2] : null;
  const selectedCapability = capabilityAreas.find((area) => area.slug === capabilitySlug);

  const goToHome = (event) => {
    event.preventDefault();

    if (window.location.hash !== "#/") {
      window.location.hash = "#/";
      return;
    }

    setRoute("#/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAIAssistant = () => {
    setShowAiGreeting(false);
    setAiOpen(true);
  };

  const toggleAIAssistant = () => {
    setShowAiGreeting(false);
    setAiOpen((current) => !current);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          color: #f5f3ff;
          background: #0a0315;
        }
        a { color: inherit; text-decoration: none; }
        .cursor-ring {
          position: fixed;
          left: 0;
          top: 0;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          pointer-events: none;
          border: 1px solid rgba(196,181,253,0.34);
          background: radial-gradient(circle, rgba(168,85,247,0.10), transparent 72%);
          box-shadow: 0 0 24px rgba(124,58,237,0.14);
          transform: translate(-50%, -50%);
          z-index: 1000;
          transition: width .22s ease, height .22s ease, border-color .22s ease, box-shadow .22s ease, background .22s ease, opacity .22s ease;
          opacity: 0.95;
        }
        .cursor-ring::after {
          content: '🧑‍💻';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          opacity: 0.95;
        }
        .cursor-dot {
          position: fixed;
          left: 0;
          top: 0;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          pointer-events: none;
          background: #d8b4fe;
          box-shadow: 0 0 18px rgba(216,180,254,0.4);
          transform: translate(-50%, -50%);
          z-index: 1001;
        }
        .cursor-active {
          width: 56px;
          height: 56px;
          border-color: rgba(216,180,254,0.62);
          box-shadow: 0 0 34px rgba(124,58,237,0.24);
          background: radial-gradient(circle, rgba(168,85,247,0.16), transparent 74%);
        }
        .site {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 10% 10%, rgba(168,85,247,0.18), transparent 22%),
            radial-gradient(circle at 85% 12%, rgba(124,58,237,0.18), transparent 22%),
            radial-gradient(circle at 50% 100%, rgba(217,70,239,0.10), transparent 24%),
            linear-gradient(180deg, #12031f 0%, #090212 44%, #06010d 100%);
        }
        .glow {
          position: fixed;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.58;
        }
        .glow.g1 { width: 320px; height: 320px; background: rgba(168,85,247,0.20); top: -40px; left: -40px; }
        .glow.g2 { width: 360px; height: 360px; background: rgba(124,58,237,0.18); top: 120px; right: -80px; }
        .glow.g3 { width: 260px; height: 260px; background: rgba(217,70,239,0.14); bottom: 60px; left: 20%; }
        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .topbar {
          position: sticky;
          top: 0;
          z-index: 60;
          background: rgba(11, 3, 21, 0.68);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
        }
        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-img {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(124,58,237,0.25);
          border: 1px solid rgba(255,255,255,0.12);
          transition: transform .32s ease, box-shadow .32s ease, filter .32s ease;
          cursor: pointer;
        }
        .brand:hover .brand-img {
          transform: scale(1.08) rotate(-2deg);
          box-shadow: 0 16px 40px rgba(168,85,247,0.32);
          filter: brightness(1.08);
        }
        .brand-copy strong {
          display: block;
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        .brand-copy span {
          display: block;
          font-size: 0.72rem;
          color: #c4b5fd;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 3px;
        }
        .nav {
          display: flex;
          gap: 26px;
          color: #ddd6fe;
          font-size: 0.96rem;
        }
        .nav a:hover { color: white; }
        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
          gap: 34px;
          align-items: center;
          padding: 86px 0 36px;
        }
        .hero > div:first-child {
          min-width: 0;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(168,85,247,0.12);
          border: 1px solid rgba(196,181,253,0.18);
          color: #d8b4fe;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          box-shadow: 0 0 30px rgba(168,85,247,0.12);
        }
        .hero h1 {
          margin: 18px 0 14px;
          max-width: 100%;
          font-size: clamp(2.8rem, 4vw, 4rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
        }
        .hero h1 span {
          display: block;
        }
        .hero-sub {
          margin: 0;
          max-width: 720px;
          font-size: clamp(1.16rem, 2.2vw, 1.6rem);
          line-height: 1.75;
          color: #ede9fe;
        }
        .hero-text {
          margin-top: 20px;
          max-width: 760px;
          line-height: 1.95;
          color: #b8acd3;
          font-size: 1.03rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }
        .btn {
          padding: 14px 22px;
          border-radius: 16px;
          font-weight: 800;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease;
        }
        .btn-hero {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          color: white;
          box-shadow: none;
        }
        .hero-actions .btn-hero:hover,
        .hero-actions .btn-hero:focus-visible {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #c084fc, #8b5cf6);
          border-color: rgba(216,180,254,0.65);
          box-shadow: 0 18px 40px rgba(139,92,246,0.28);
          outline: none;
        }
        .skill-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .chip {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: #ddd6fe;
          font-size: 0.88rem;
        }
        .panel {
          background: rgba(20, 8, 34, 0.72);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 30px;
          box-shadow: 0 26px 100px rgba(0,0,0,0.28);
          backdrop-filter: blur(18px);
        }
        .hero-visual {
          position: relative;
          min-height: 560px;
          padding: 22px;
          overflow: hidden;
        }
        .hero-screen {
          position: absolute;
          inset: 22px;
          border-radius: 26px;
          background:
            radial-gradient(circle at center, rgba(168,85,247,0.22), transparent 30%),
            linear-gradient(180deg, rgba(20,8,34,0.95), rgba(12,5,22,0.98));
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .orbit {
          position: absolute;
          width: 320px;
          height: 320px;
          border: 1px solid rgba(196,181,253,0.14);
          border-radius: 999px;
          left: 50%;
          top: 52%;
          transform: translate(-50%, -50%);
        }
        .orbit.two {
          width: 420px;
          height: 240px;
          transform: translate(-50%, -50%) rotate(-12deg);
          border-color: rgba(217,70,239,0.12);
        }
        .orbit.three {
          width: 250px;
          height: 250px;
          transform: translate(-50%, -50%) rotate(20deg);
          border-color: rgba(139,92,246,0.12);
        }
        .hero-brand-art {
          position: absolute;
          left: 50%;
          top: 52%;
          transform: translate(-50%, -50%);
          width: min(360px, 72%);
          object-fit: contain;
          filter: drop-shadow(0 24px 50px rgba(0,0,0,0.32));
          z-index: 2;
          border-radius: 28px;
          transition: transform .35s ease, filter .35s ease, box-shadow .35s ease, opacity .35s ease;
          cursor: pointer;
        }
        .hero-screen:hover .hero-brand-art {
          transform: translate(-50%, -50%) scale(1.08);
          filter: drop-shadow(0 32px 70px rgba(124,58,237,0.35)) brightness(1.06);
          box-shadow: 0 0 50px rgba(168,85,247,0.18);
        }
        .floating-card {
          position: absolute;
          width: 190px;
          padding: 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          color: #ede9fe;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
          z-index: 3;
        }
        .floating-card span {
          display: block;
          color: #c4b5fd;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.74rem;
          margin-bottom: 8px;
        }
        .floating-card strong {
          font-size: 0.98rem;
          line-height: 1.45;
        }
        .f1 { top: 26px; left: 24px; transform: rotate(-7deg); }
        .f2 { top: 42px; right: 18px; transform: rotate(8deg); }
        .f3 { bottom: 34px; left: 30px; transform: rotate(6deg); }
        .f4 { bottom: 26px; right: 22px; transform: rotate(-8deg); }
        .hero-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 14px;
        }
        .strip-card {
          position: relative;
          overflow: hidden;
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease, background .28s ease;
        }
        .strip-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -140%;
          width: 70%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-18deg);
          transition: left .55s ease;
          pointer-events: none;
        }
        .strip-card:hover {
          transform: translateY(-6px);
          border-color: rgba(196,181,253,0.24);
          box-shadow: 0 22px 50px rgba(124,58,237,0.16);
          background: rgba(255,255,255,0.06);
        }
        .strip-card:hover::after { left: 150%; }
        .strip-card span {
          display: block;
          color: #c4b5fd;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .strip-card strong { font-size: 1.08rem; }
        .tool-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(118px, 1fr));
          gap: 14px;
          margin-top: 18px;
        }
        .tool-tile {
          position: relative;
          overflow: hidden;
          padding: 16px 12px;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease, background .3s ease;
          cursor: pointer;
        }
        .tool-tile::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top center, rgba(168,85,247,0.18), transparent 65%);
          opacity: 0;
          transition: opacity .3s ease;
          pointer-events: none;
        }
        .tool-tile:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(196,181,253,0.24);
          box-shadow: 0 24px 55px rgba(124,58,237,0.18);
          background: rgba(255,255,255,0.06);
        }
        .tool-tile:hover::before { opacity: 1; }
        .tool-tile:hover .tool-icon,
        .tool-tile:hover .tool-icon-img {
          transform: scale(1.14);
          filter: drop-shadow(0 0 14px rgba(168,85,247,0.28));
        }
        .tool-tile:hover .tool-name { color: #ffffff; }
        .tool-icon {
          font-size: 1.8rem;
          margin-bottom: 10px;
          display: block;
          transition: transform .3s ease, filter .3s ease;
        }
        .tool-icon-img {
          width: 36px;
          height: 36px;
          object-fit: contain;
          display: block;
          margin: 0 auto 10px;
          filter: drop-shadow(0 0 10px rgba(50,105,206,0.28));
          transition: transform .3s ease, filter .3s ease;
        }
        .tool-name {
          color: #ddd6fe;
          font-size: 0.82rem;
          line-height: 1.4;
          transition: color .28s ease;
        }
        .section {
          padding: 66px 0;
          content-visibility: auto;
          contain-intrinsic-size: 820px;
        }
        .section-head {
          margin-bottom: 10px;
          position: relative;
          z-index: 2;
        }
        .section-head span {
          display: inline-block;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .section-head h2 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3.1rem);
          line-height: 1.12;
          letter-spacing: -0.02em;
        }
        .section-kicker {
          display: inline-flex;
          align-items: center;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.74rem;
          font-weight: 800;
          margin-bottom: 18px;
          transition: opacity .28s ease, filter .28s ease, transform .28s ease;
        }
        #work:hover .section-kicker {
          opacity: 0.22;
          filter: blur(4px);
          transform: scale(0.97);
        }
        .work-head {
          margin-bottom: 0;
        }
        .work-head h2,
        .work-head span {
          display: none;
        }
        .intro-card {
          margin-top: 24px;
          padding: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }
        .intro-card p {
          margin: 0;
          color: #d6d0e6;
          line-height: 1.95;
          font-size: 1.02rem;
        }
        .spotlight-box {
          margin-top: 24px;
          padding: 28px;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 24px;
          align-items: start;
        }
        .spotlight-title {
          font-size: 1.24rem;
          font-weight: 800;
          line-height: 1.65;
          color: #f5f3ff;
        }
        .spotlight-list {
          display: grid;
          gap: 14px;
        }
        .spotlight-item {
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #ede9fe;
        }
        .stats-card, .exp-card, .cert-card, .skill-group, .project-card, .working-card {
          padding: 28px;
          contain: layout paint style;
          transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease;
        }
        .stats-card:hover, .exp-card:hover, .cert-card:hover, .skill-group:hover, .project-card:hover, .working-card:hover {
          transform: translateY(-6px);
          border-color: rgba(196,181,253,0.22);
          box-shadow: 0 24px 90px rgba(124,58,237,0.10);
        }
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin-top: 28px;
        }
        .project-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }
        .project-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          background: rgba(168,85,247,0.14);
          border: 1px solid rgba(196,181,253,0.16);
          overflow: hidden;
          flex-shrink: 0;
        }
        .project-icon img {
          width: 30px;
          height: 30px;
          object-fit: contain;
          display: block;
        }
        .project-card small, .work-card small {
          display: block;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .project-card h3, .exp-card h3, .cert-card h3, .skill-group h3, .working-card h3, .work-card h3 {
          margin: 0 0 12px;
          font-size: 1.28rem;
        }
        .project-card p, .exp-card p, .cert-card p, .working-card p, .work-card p {
          margin: 0;
          color: #c7bfd8;
          line-height: 1.9;
        }
        .project-list, .exp-list, .working-list, .replace-list, .detail-list {
          margin: 16px 0 0;
          padding-left: 18px;
          color: #ede9fe;
          line-height: 1.8;
        }
        .example-note {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #d6d0e6;
          line-height: 1.75;
        }
        .example-label {
          display: inline-block;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.74rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .project-tags, .skills-inline, .project-actions, .cta-row, .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .project-tag, .skills-inline span {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #ddd6fe;
          font-size: 0.8rem;
        }
        .mini-btn {
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          color: white;
          font-size: 0.9rem;
          font-weight: 700;
          transition: transform .2s ease, border-color .2s ease, background .2s ease;
        }
        .mini-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(196,181,253,0.24);
          background: rgba(255,255,255,0.06);
        }
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 28px;
        }
        .skill-group-title {
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.78rem;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .linux-overview,
        .support-overview {
          margin-top: 28px;
          padding: 30px;
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: 24px;
          align-items: start;
        }
        .linux-summary,
        .support-summary {
          padding: 4px;
        }
        .linux-summary h3,
        .support-summary h3 {
          margin: 0 0 14px;
          font-size: 1.45rem;
          line-height: 1.3;
        }
        .linux-summary p,
        .support-summary p {
          margin: 0;
          color: #c7bfd8;
          line-height: 1.85;
        }
        .distribution-label {
          margin-top: 22px;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.75rem;
          font-weight: 800;
        }
        .distribution-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 12px;
        }
        .distribution-chip {
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(168,85,247,0.10);
          border: 1px solid rgba(196,181,253,0.16);
          color: #ede9fe;
          font-size: 0.82rem;
        }
        .capability-grid,
        .support-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .capability-card,
        .support-card {
          min-width: 0;
          padding: 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease, background .28s ease;
        }
        .capability-card:hover,
        .support-card:hover {
          transform: translateY(-5px);
          border-color: rgba(196,181,253,0.22);
          box-shadow: 0 20px 55px rgba(124,58,237,0.13);
          background: rgba(255,255,255,0.055);
        }
        .capability-icon,
        .support-level {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          margin-bottom: 12px;
          background: rgba(168,85,247,0.14);
          border: 1px solid rgba(196,181,253,0.16);
          color: #f5f3ff;
          font-weight: 900;
        }
        .support-level {
          width: auto;
          min-width: 42px;
          padding: 0 11px;
          color: #d8b4fe;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
        }
        .capability-card h4,
        .support-card h4 {
          margin: 0 0 9px;
          font-size: 1rem;
          line-height: 1.35;
        }
        .capability-card p,
        .support-card p {
          margin: 0;
          color: #c7bfd8;
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .capabilities-cta {
          margin-top: 24px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }
        .capabilities-cta h3 {
          margin: 0 0 6px;
          font-size: 1.12rem;
        }
        .capabilities-cta p {
          margin: 0;
          color: #c7bfd8;
          line-height: 1.7;
        }
        .capability-page {
          min-height: 72vh;
          padding: 76px 0;
          content-visibility: auto;
          contain-intrinsic-size: 760px;
        }
        .capability-breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          color: #c4b5fd;
          font-size: 0.9rem;
        }
        .capability-breadcrumbs a:hover {
          color: #ffffff;
        }
        .capability-page-head {
          max-width: 880px;
          margin-bottom: 28px;
        }
        .capability-page-head span {
          display: inline-block;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.76rem;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .capability-page-head h1 {
          margin: 0 0 16px;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          line-height: 1.04;
          letter-spacing: -0.045em;
        }
        .capability-page-head p {
          margin: 0;
          color: #c7bfd8;
          font-size: 1.06rem;
          line-height: 1.85;
        }
        .capability-hub-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .capability-hub-card {
          min-width: 0;
          padding: 28px;
          transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease;
        }
        .capability-hub-card:hover {
          transform: translateY(-6px);
          border-color: rgba(196,181,253,0.22);
          box-shadow: 0 24px 90px rgba(124,58,237,0.12);
        }
        .capability-hub-icon {
          width: 56px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          margin-bottom: 16px;
          background: rgba(168,85,247,0.14);
          border: 1px solid rgba(196,181,253,0.16);
          font-size: 1.45rem;
        }
        .capability-hub-card small,
        .capability-detail-hero small {
          display: block;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .capability-hub-card h2 {
          margin: 0 0 12px;
          font-size: 1.45rem;
        }
        .capability-hub-card p {
          margin: 0;
          color: #c7bfd8;
          line-height: 1.8;
        }
        .capability-detail-hero {
          padding: 32px;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          gap: 26px;
          align-items: start;
        }
        .capability-detail-title {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .capability-detail-title .capability-hub-icon {
          flex-shrink: 0;
          margin-bottom: 0;
        }
        .capability-detail-title h1 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.08;
          letter-spacing: -0.035em;
        }
        .capability-detail-title p {
          margin: 0;
          color: #c7bfd8;
          line-height: 1.85;
        }
        .capability-stack-box {
          padding: 20px;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .capability-stack-box h3 {
          margin: 0 0 12px;
          font-size: 1rem;
        }
        .capability-focus-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 24px;
        }
        .capability-focus-card {
          min-width: 0;
          padding: 22px;
          transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease;
        }
        .capability-focus-card:hover {
          transform: translateY(-5px);
          border-color: rgba(196,181,253,0.22);
          box-shadow: 0 20px 60px rgba(124,58,237,0.11);
        }
        .capability-focus-icon {
          min-width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          border-radius: 14px;
          margin-bottom: 14px;
          background: rgba(168,85,247,0.14);
          border: 1px solid rgba(196,181,253,0.16);
          color: #f5f3ff;
          font-weight: 900;
        }
        .capability-focus-card h3 {
          margin: 0 0 10px;
          font-size: 1.05rem;
          line-height: 1.4;
        }
        .capability-focus-card p {
          margin: 0;
          color: #c7bfd8;
          line-height: 1.75;
          font-size: 0.92rem;
        }
        .capability-evidence {
          margin-top: 24px;
          padding: 28px;
          display: grid;
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
          gap: 24px;
        }
        .capability-evidence h2 {
          margin: 0 0 10px;
          font-size: 1.45rem;
        }
        .capability-evidence p {
          margin: 0;
          color: #c7bfd8;
          line-height: 1.75;
        }
        .capability-evidence ul {
          margin: 0;
          padding-left: 20px;
          color: #ede9fe;
          line-height: 1.9;
        }
        .capability-page-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }
        .working-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin-top: 28px;
        }
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 0;
          padding-top: 0;
          align-items: stretch;
        }
        .flip-card {
          perspective: 1200px;
          min-height: 330px;
          transition: transform .28s ease, opacity .28s ease, filter .28s ease;
          position: relative;
          z-index: 1;
        }
        .work-grid:hover .flip-card {
          opacity: 0.2;
          filter: blur(4px);
          transform: scale(0.97);
        }
        .work-grid:hover .flip-card:hover {
          opacity: 1;
          filter: none;
          transform: translateY(-6px) scale(1.02);
          z-index: 6;
        }
        .project-grid:hover .project-card {
          opacity: 0.28;
          filter: blur(4px);
          transform: scale(0.97);
        }
        .project-grid:hover .project-card:hover {
          opacity: 1;
          filter: none;
          transform: translateY(-6px) scale(1.02);
          z-index: 5;
        }
        .flip-card:hover {
          transform: translateY(-6px);
        }
        .flip-inner {
          position: relative;
          width: 100%;
          min-height: 330px;
          transition: transform .7s ease;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          padding: 28px;
          border-radius: 30px;
          background: rgba(20, 8, 34, 0.72);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 26px 100px rgba(0,0,0,0.28);
          backdrop-filter: blur(18px);
          display: flex;
          flex-direction: column;
        }
        .flip-back {
          transform: rotateY(180deg);
          justify-content: center;
        }
        .work-icon {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 16px;
          background: rgba(168,85,247,0.14);
          border: 1px solid rgba(196,181,253,0.16);
          box-shadow: 0 0 30px rgba(124,58,237,0.12);
          overflow: hidden;
        }
        .work-icon img {
          width: 28px;
          height: 28px;
          object-fit: contain;
          display: block;
        }
        .flip-hint {
          margin-top: auto;
          padding-top: 20px;
          color: #a78bfa;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .timeline {
          display: grid;
          gap: 20px;
          margin-top: 28px;
        }
        .timeline-top {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: start;
          margin-bottom: 16px;
        }
        .exp-card h4 {
          margin: 6px 0 0;
          color: #d8b4fe;
          font-size: 1rem;
          font-weight: 700;
        }
        .date-pill {
          white-space: nowrap;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          color: #ddd6fe;
          font-size: 0.9rem;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 28px;
        }
        .cert-badge {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          background: rgba(168,85,247,0.14);
          border: 1px solid rgba(196,181,253,0.16);
          margin-bottom: 14px;
        }
        .contact-box {
          padding: 34px;
          display: grid;
          grid-template-columns: 1.06fr 0.94fr;
          gap: 24px;
          align-items: start;
        }
        .contact-box h2 {
          margin: 0 0 16px;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.12;
        }
        .contact-box p {
          margin: 0;
          color: #c7bfd8;
          line-height: 1.9;
        }
        .contact-label {
          display: inline-block;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .contact-links {
          display: grid;
          gap: 14px;
        }
        .contact-links a, .contact-links div {
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #ede9fe;
          word-break: break-word;
        }
        .contact-links .contact-icon {
          margin-right: 10px;
          opacity: 0.9;
        }

        .ai-agent-launcher {
          position: fixed;
          right: 22px;
          bottom: 78px;
          z-index: 96;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 54px;
          padding: 6px 17px 6px 7px;
          border: 1px solid rgba(216,180,254,0.38);
          border-radius: 999px;
          background:
            linear-gradient(135deg, rgba(35, 11, 58, 0.97), rgba(12, 5, 25, 0.97));
          color: #ffffff;
          box-shadow:
            0 18px 48px rgba(0,0,0,0.40),
            0 0 34px rgba(139,92,246,0.20);
          backdrop-filter: blur(18px);
          cursor: pointer;
          font: inherit;
          font-weight: 800;
          transition:
            transform .25s ease,
            border-color .25s ease,
            box-shadow .25s ease,
            background .25s ease;
        }
        .ai-agent-launcher:hover,
        .ai-agent-launcher:focus-visible {
          transform: translateY(-4px) scale(1.015);
          border-color: rgba(216,180,254,0.72);
          background:
            linear-gradient(135deg, rgba(73, 26, 113, 0.98), rgba(32, 10, 56, 0.98));
          box-shadow:
            0 24px 65px rgba(0,0,0,0.44),
            0 0 48px rgba(168,85,247,0.34);
          outline: none;
        }
        .ai-launcher-icon {
          position: relative;
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: visible;
          border-radius: 999px;
          background: linear-gradient(135deg, #c084fc, #7c3aed);
          box-shadow: 0 0 24px rgba(168,85,247,0.42);
        }
        .ai-launcher-photo {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: inherit;
          border: 2px solid rgba(255,255,255,0.42);
        }
        .ai-launcher-icon::after {
          content: "";
          position: absolute;
          inset: -4px;
          border: 1px solid rgba(216,180,254,0.40);
          border-radius: inherit;
          animation: aiPulse 2.2s ease-out infinite;
          pointer-events: none;
        }
        @keyframes aiPulse {
          0% { opacity: 0.7; transform: scale(0.86); }
          70%, 100% { opacity: 0; transform: scale(1.35); }
        }
        .ai-welcome-popup {
          position: fixed;
          right: 22px;
          bottom: 145px;
          z-index: 95;
          width: min(310px, calc(100vw - 44px));
          padding: 14px 42px 14px 14px;
          border: 1px solid rgba(216,180,254,0.28);
          border-radius: 20px 20px 6px 20px;
          background:
            radial-gradient(circle at top right, rgba(168,85,247,0.18), transparent 42%),
            rgba(17, 7, 31, 0.96);
          color: #f5f3ff;
          box-shadow:
            0 22px 64px rgba(0,0,0,0.46),
            0 0 34px rgba(124,58,237,0.16);
          backdrop-filter: blur(18px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(14px) scale(0.94);
          transform-origin: bottom right;
          transition:
            opacity .28s ease,
            visibility .28s ease,
            transform .28s ease;
        }
        .ai-welcome-popup.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }
        .ai-welcome-popup::after {
          content: "";
          position: absolute;
          right: 28px;
          bottom: -9px;
          width: 18px;
          height: 18px;
          border-right: 1px solid rgba(216,180,254,0.24);
          border-bottom: 1px solid rgba(216,180,254,0.24);
          background: rgba(17, 7, 31, 0.96);
          transform: rotate(45deg);
        }
        .ai-welcome-content {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          cursor: pointer;
        }
        .ai-welcome-photo {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          object-fit: cover;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 0 24px rgba(168,85,247,0.20);
        }
        .ai-welcome-copy strong {
          display: block;
          margin-bottom: 5px;
          font-size: 0.9rem;
        }
        .ai-welcome-copy span {
          display: block;
          color: #cfc7df;
          font-size: 0.79rem;
          line-height: 1.55;
        }
        .ai-welcome-close {
          position: absolute;
          top: 9px;
          right: 9px;
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 9px;
          background: rgba(255,255,255,0.05);
          color: #ddd6fe;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background .2s ease, color .2s ease;
        }
        .ai-welcome-close:hover,
        .ai-welcome-close:focus-visible {
          background: rgba(255,255,255,0.10);
          color: #ffffff;
          outline: none;
        }
        .ai-chat-panel {
          position: fixed;
          right: 22px;
          bottom: 142px;
          z-index: 97;
          width: min(370px, calc(100vw - 48px));
          height: min(520px, calc(100vh - 175px));
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(216,180,254,0.22);
          border-radius: 26px;
          background:
            radial-gradient(circle at top right, rgba(168,85,247,0.17), transparent 34%),
            rgba(13, 5, 25, 0.97);
          box-shadow:
            0 30px 90px rgba(0,0,0,0.52),
            0 0 50px rgba(124,58,237,0.16);
          backdrop-filter: blur(22px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(24px) scale(0.94);
          transform-origin: bottom right;
          transition:
            opacity .28s ease,
            visibility .28s ease,
            transform .28s ease;
        }
        .ai-chat-panel.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }
        .ai-chat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 15px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
        }
        .ai-chat-identity {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .ai-chat-avatar {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 15px;
          background: linear-gradient(135deg, #c084fc, #7c3aed);
          border: 1px solid rgba(255,255,255,0.20);
          box-shadow: 0 0 28px rgba(168,85,247,0.32);
        }
        .ai-chat-avatar img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .ai-chat-title {
          min-width: 0;
        }
        .ai-chat-title strong {
          display: block;
          font-size: 0.91rem;
        }
        .ai-chat-title span {
          display: block;
          margin-top: 2px;
          color: #c4b5fd;
          font-size: 0.68rem;
          line-height: 1.3;
        }
        .ai-chat-close {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          color: #ffffff;
          cursor: pointer;
          font-size: 1.1rem;
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .ai-chat-close:hover,
        .ai-chat-close:focus-visible {
          background: rgba(255,255,255,0.08);
          border-color: rgba(216,180,254,0.28);
          transform: rotate(4deg);
          outline: none;
        }
        .ai-status-row {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 15px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          color: #b8acd3;
          font-size: 0.72rem;
        }
        .ai-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #86efac;
          box-shadow: 0 0 14px rgba(134,239,172,0.55);
        }
        .ai-quick-prompts {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 7px;
          max-height: 82px;
          padding: 9px 12px;
          overflow-y: auto;
          overflow-x: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          scrollbar-width: none;
        }
        .ai-quick-prompts::-webkit-scrollbar {
          display: none;
        }
        .ai-quick-prompt {
          min-width: 0;
          padding: 7px 9px;
          border: 1px solid rgba(216,180,254,0.14);
          border-radius: 999px;
          background: rgba(168,85,247,0.08);
          color: #ddd6fe;
          cursor: pointer;
          font: inherit;
          font-size: 0.67rem;
          line-height: 1.35;
          white-space: normal;
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .ai-quick-prompt:hover,
        .ai-quick-prompt:focus-visible {
          background: rgba(168,85,247,0.16);
          border-color: rgba(216,180,254,0.30);
          transform: translateY(-2px);
          outline: none;
        }
        .ai-chat-messages {
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 12px;
          overflow-y: auto;
          scroll-behavior: smooth;
        }
        .ai-message {
          max-width: 90%;
          padding: 10px 12px;
          border-radius: 15px;
          font-size: 0.81rem;
          line-height: 1.55;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .ai-message.assistant {
          align-self: flex-start;
          border: 1px solid rgba(255,255,255,0.08);
          border-bottom-left-radius: 6px;
          background: rgba(255,255,255,0.045);
          color: #e9e5f4;
        }
        .ai-message.user {
          align-self: flex-end;
          border: 1px solid rgba(216,180,254,0.20);
          border-bottom-right-radius: 6px;
          background: linear-gradient(135deg, rgba(168,85,247,0.26), rgba(124,58,237,0.18));
          color: #ffffff;
        }
        .ai-typing {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          min-width: 58px;
        }
        .ai-typing span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #c4b5fd;
          animation: aiTyping 1.1s ease-in-out infinite;
        }
        .ai-typing span:nth-child(2) { animation-delay: .14s; }
        .ai-typing span:nth-child(3) { animation-delay: .28s; }
        @keyframes aiTyping {
          0%, 60%, 100% { opacity: .35; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
        }
        .ai-chat-compose {
          padding: 10px 12px 11px;
          border-top: 1px solid rgba(255,255,255,0.08);
          background: rgba(5, 2, 12, 0.55);
        }
        .ai-input-wrap {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 9px;
          align-items: end;
        }
        .ai-chat-input {
          width: 100%;
          min-height: 42px;
          max-height: 72px;
          resize: none;
          padding: 10px 11px;
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 15px;
          background: rgba(255,255,255,0.045);
          color: #ffffff;
          font: inherit;
          font-size: 0.78rem;
          line-height: 1.4;
          outline: none;
        }
        .ai-chat-input::placeholder {
          color: #8f84a8;
        }
        .ai-chat-input:focus {
          border-color: rgba(216,180,254,0.42);
          box-shadow: 0 0 0 3px rgba(168,85,247,0.08);
        }
        .ai-chat-send {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 15px;
          background: linear-gradient(135deg, #c084fc, #7c3aed);
          color: #ffffff;
          cursor: pointer;
          font-size: 1.05rem;
          box-shadow: 0 12px 26px rgba(124,58,237,0.24);
          transition: transform .2s ease, filter .2s ease, opacity .2s ease;
        }
        .ai-chat-send:hover:not(:disabled),
        .ai-chat-send:focus-visible:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.08);
          outline: none;
        }
        .ai-chat-send:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }
        .ai-chat-note {
          margin-top: 6px;
          color: #7f7495;
          font-size: 0.66rem;
          line-height: 1.4;
          text-align: center;
        }
        .scroll-top-btn {
          position: fixed;
          right: 26px;
          bottom: 24px;
          z-index: 94;
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: 1px solid rgba(216,180,254,0.34);
          border-radius: 14px;
          background:
            linear-gradient(145deg, rgba(54, 19, 84, 0.96), rgba(17, 7, 31, 0.96));
          color: #ffffff;
          box-shadow:
            0 14px 34px rgba(0,0,0,0.38),
            0 0 22px rgba(139,92,246,0.18);
          backdrop-filter: blur(16px);
          cursor: pointer;
          font: inherit;
          opacity: 0;
          visibility: hidden;
          transform: translateY(14px) rotate(8deg) scale(0.88);
          transition:
            opacity .25s ease,
            visibility .25s ease,
            transform .25s ease,
            background .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }
        .scroll-top-btn.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) rotate(0) scale(1);
        }
        .scroll-top-btn:hover,
        .scroll-top-btn:focus-visible {
          background: linear-gradient(135deg, #c084fc, #7c3aed);
          border-color: rgba(255,255,255,0.48);
          box-shadow:
            0 18px 42px rgba(139,92,246,0.34),
            0 0 26px rgba(192,132,252,0.34);
          transform: translateY(-3px) scale(1.08);
          outline: none;
        }
        .scroll-top-arrow {
          font-size: 1.12rem;
          line-height: 1;
          font-weight: 900;
        }
        .footer {
          padding: 26px 0 40px;
          color: #8c82a3;
          font-size: 0.92rem;
          text-align: center;
        }
        .reveal, .reveal-card {
          opacity: 0;
          transform: translateY(36px) scale(0.985);
          transition: opacity .85s ease, transform .85s ease;
        }
        .reveal.show, .reveal-card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        @media (max-width: 1040px) {
          .hero, .hero-strip, .tool-row, .intro-card, .spotlight-box, .project-grid, .skill-grid, .working-grid, .work-grid, .cert-grid, .contact-box {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 900px) {
          .cursor-ring,
          .cursor-dot {
            display: none;
          }
        }
        @media (max-width: 900px) {
          .cursor-ring,
          .cursor-dot {
            display: none;
          }
          .work-head {
            margin-bottom: 0;
          }
        }
        @media (max-width: 720px) {
          .nav { display: none; }
          .hero { padding-top: 56px; }
          .timeline-top { flex-direction: column; }
          .container { width: min(1180px, calc(100% - 26px)); }
          .hero-visual { min-height: 440px; }
          .hero-brand-art { width: min(300px, 82%); }
          .floating-card { width: 150px; }
          .f1, .f2, .f3, .f4 { transform: none; }
        }
          /* =========================================================
   PABAOPS RESPONSIVE MOBILE FIX
   Keeps desktop design unchanged
   ========================================================= */

.hero > *,
.hero-strip > *,
.tool-row > *,
.intro-card > *,
.spotlight-box > *,
.project-grid > *,
.skill-grid > *,
.working-grid > *,
.linux-overview > *,
.capability-grid > *,
.support-overview > *,
.support-grid > *,
.work-grid > *,
.cert-grid > *,
.contact-box > * {
  min-width: 0;
}

img {
  max-width: 100%;
  height: auto;
}

/* Tablets and smaller laptops */
@media (max-width: 1040px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
    padding-top: 64px;
  }

  .hero-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tool-row {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .intro-card,
  .spotlight-box,
  .linux-overview,
  .support-overview,
  .project-grid,
  .skill-grid,
  .working-grid,
  .work-grid,
  .cert-grid,
  .contact-box {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* Phones */
@media (max-width: 720px) {
  html,
  body,
  #root,
  .site {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .container {
    width: calc(100% - 24px);
  }

  .topbar {
    position: sticky;
    top: 0;
  }

  .nav {
    display: none;
  }

  .nav-wrap {
    padding: 12px 0;
  }

  .brand {
    min-width: 0;
  }

  .brand-img {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }

  .brand-copy {
    min-width: 0;
  }

  .brand-copy strong {
    font-size: 0.92rem;
  }

  .brand-copy span {
    font-size: 0.6rem;
    letter-spacing: 0.05em;
    white-space: normal;
  }

  .hero {
    padding: 48px 0 28px;
    gap: 28px;
  }

  .eyebrow {
    max-width: 100%;
    padding: 8px 12px;
    font-size: 0.67rem;
    line-height: 1.5;
    letter-spacing: 0.09em;
    white-space: normal;
  }

  .hero h1 {
    font-size: clamp(2.05rem, 11vw, 3.2rem);
    line-height: 1.03;
    letter-spacing: -0.035em;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .hero-sub {
    font-size: 1.03rem;
    line-height: 1.65;
  }

  .hero-text {
    margin-top: 16px;
    font-size: 0.94rem;
    line-height: 1.75;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 24px;
  }

  .btn {
    width: 100%;
    padding: 13px 16px;
    text-align: center;
  }

  .skill-cloud {
    gap: 8px;
    margin-top: 22px;
  }

  .chip {
    padding: 8px 11px;
    font-size: 0.77rem;
  }

  /* Rebuild hero picture area for mobile */
  .hero-visual {
    min-height: 0;
    padding: 10px;
    overflow: visible;
    border-radius: 24px;
  }

  .hero-screen {
    position: relative;
    inset: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    min-height: 0;
    padding: 14px;
    overflow: hidden;
    border-radius: 20px;
  }

  .orbit,
  .orbit.two,
  .orbit.three {
    display: none;
  }

  .hero-brand-art {
    position: relative;
    left: auto;
    top: auto;
    grid-column: 1 / -1;
    width: 100%;
    max-width: 320px;
    margin: 0 auto 6px;
    border-radius: 18px;
    transform: none;
  }

  .hero-screen:hover .hero-brand-art {
    transform: none;
    filter: drop-shadow(0 18px 38px rgba(124, 58, 237, 0.28));
    box-shadow: none;
  }

  .floating-card {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    width: 100%;
    min-width: 0;
    padding: 12px;
    border-radius: 14px;
    transform: none;
  }

  .f1,
  .f2,
  .f3,
  .f4 {
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    transform: none;
  }

  .floating-card span {
    margin-bottom: 5px;
    font-size: 0.62rem;
  }

  .floating-card strong {
    display: block;
    font-size: 0.76rem;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }

  .hero-strip {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .strip-card {
    padding: 16px;
  }

  .tool-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .capability-grid,
  .support-grid {
    grid-template-columns: 1fr;
  }

  .tool-tile {
    padding: 14px 8px;
  }

  .section {
    padding: 48px 0;
  }

  .section-head h2 {
    font-size: 1.72rem;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }

  .panel {
    border-radius: 22px;
  }

  .intro-card,
  .spotlight-box,
  .linux-overview,
  .support-overview,
  .linux-overview,
  .support-overview,
  .project-card,
  .skill-group,
  .working-card,
  .exp-card,
  .cert-card,
  .contact-box {
    padding: 20px;
  }

  .intro-card,
  .spotlight-box {
    gap: 18px;
  }

  .spotlight-title {
    font-size: 1.08rem;
    line-height: 1.55;
  }

  .project-top {
    align-items: flex-start;
  }

  .project-card h3,
  .exp-card h3,
  .cert-card h3,
  .skill-group h3,
  .working-card h3,
  .work-card h3 {
    font-size: 1.12rem;
    line-height: 1.35;
    overflow-wrap: anywhere;
  }

  .project-card p,
  .exp-card p,
  .cert-card p,
  .working-card p,
  .work-card p {
    font-size: 0.93rem;
    line-height: 1.7;
  }

  .example-note {
    padding: 13px;
  }

  .project-list,
  .exp-list,
  .working-list,
  .replace-list,
  .detail-list {
    padding-left: 20px;
    font-size: 0.92rem;
    line-height: 1.7;
  }

  .project-actions,
  .cta-row {
    display: grid;
    grid-template-columns: 1fr;
  }

  .mini-btn {
    width: 100%;
    text-align: center;
  }

  .timeline-top {
    flex-direction: column;
  }

  .date-pill {
    white-space: normal;
  }

  .contact-box h2 {
    font-size: 1.75rem;
  }

  .contact-links a,
  .contact-links div {
    padding: 14px;
    font-size: 0.88rem;
    overflow-wrap: anywhere;
  }

  .footer-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .cursor-ring,
  .cursor-dot {
    display: none;
  }


  .ai-agent-launcher {
    right: 12px;
    bottom: 66px;
    min-width: 50px;
    min-height: 50px;
    padding: 5px;
  }

  .ai-agent-launcher > span:last-child {
    display: none;
  }

  .ai-launcher-icon {
    width: 40px;
    height: 40px;
  }

  .ai-welcome-popup {
    right: 10px;
    bottom: 128px;
    width: min(300px, calc(100vw - 20px));
  }

  .ai-chat-panel {
    left: auto;
    right: 10px;
    bottom: 124px;
    width: min(340px, calc(100vw - 20px));
    height: min(470px, calc(100vh - 165px));
    transform-origin: bottom right;
  }

  .ai-chat-head {
    padding: 12px;
  }

  .ai-quick-prompts {
    grid-template-columns: 1fr;
    max-height: 72px;
    padding: 8px 10px;
  }

  .ai-chat-messages {
    padding: 10px;
  }
  .scroll-top-btn {
    right: 14px;
    bottom: 14px;
    width: 40px;
    height: 40px;
    z-index: 110;
    border-radius: 999px;
  }

  .scroll-top-arrow {
    display: block;
    font-size: 1.05rem;
    line-height: 1;
  }
}

/* Very small phones */
@media (max-width: 420px) {
  .ai-chat-panel {
    right: 8px;
    bottom: 118px;
    width: calc(100vw - 16px);
    height: min(445px, calc(100vh - 145px));
    border-radius: 22px;
  }

  .ai-chat-title span {
    max-width: 190px;
  }

  .container {
    width: calc(100% - 18px);
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-screen {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  .hero-brand-art {
    grid-column: 1;
  }

  .floating-card {
    width: 100%;
  }

  .project-card,
  .skill-group,
  .working-card,
  .exp-card,
  .cert-card,
  .contact-box {
    padding: 16px;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }
}

/* Touch devices do not have real hover */
@media (hover: none), (pointer: coarse) {
  .cursor-ring,
  .cursor-dot {
    display: none;
  }

  #work:hover .section-kicker {
    opacity: 1;
    filter: none;
    transform: none;
  }

  .work-grid:hover .flip-card,
  .project-grid:hover .project-card {
    opacity: 1;
    filter: none;
    transform: none;
  }

  .work-grid:hover .flip-card:hover,
  .project-grid:hover .project-card:hover {
    opacity: 1;
    filter: none;
    transform: none;
  }

  /* On mobile show the detailed side directly */
  .flip-card {
    min-height: auto;
    transform: none;
  }

  .flip-inner {
    min-height: auto;
    transform: none;
  }

  .flip-card:hover .flip-inner {
    transform: none;
  }

  .flip-face {
    position: relative;
    inset: auto;
    min-height: auto;
    transform: none;
    backface-visibility: visible;
    -webkit-backface-visibility: visible;
  }

  .flip-face:first-child {
    display: none;
  }

  .flip-back {
    display: flex;
    transform: none;
  }
}

@media (max-width: 1040px) {
  .capability-detail-hero,
  .capability-evidence {
    grid-template-columns: 1fr;
  }

  .capability-focus-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .capabilities-cta {
    align-items: stretch;
    flex-direction: column;
    padding: 20px;
  }

  .capabilities-cta .mini-btn {
    width: 100%;
    text-align: center;
  }

  .capability-page {
    padding: 48px 0;
  }

  .capability-page-head h1 {
    font-size: 2.15rem;
  }

  .capability-hub-grid,
  .capability-focus-grid {
    grid-template-columns: 1fr;
  }

  .capability-hub-card,
  .capability-detail-hero,
  .capability-focus-card,
  .capability-evidence {
    padding: 20px;
  }

  .capability-detail-title {
    flex-direction: column;
  }

  .capability-page-actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .capability-page-actions .mini-btn {
    width: 100%;
    text-align: center;
  }
}

/* =========================================================
   PABAOPS PERFORMANCE OPTIMIZATIONS
   ========================================================= */

@media (max-width: 900px) {
  /* Large fixed blurred shapes are expensive on mobile GPUs. */
  .glow {
    display: none;
  }

  .site {
    background:
      radial-gradient(circle at 50% 0%, rgba(124,58,237,0.16), transparent 30%),
      linear-gradient(180deg, #12031f 0%, #090212 48%, #06010d 100%);
  }

  /* Keep the glass appearance while avoiding costly mobile blur passes. */
  .topbar,
  .panel,
  .floating-card,
  .ai-agent-launcher,
  .ai-welcome-popup,
  .ai-chat-panel,
  .scroll-top-btn {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }

  .topbar {
    background: rgba(11, 3, 21, 0.94);
  }

  .panel {
    background: rgba(20, 8, 34, 0.94);
  }

  .floating-card {
    background: rgba(31, 16, 49, 0.96);
  }

  /* Mobile visitors should see content immediately. */
  .reveal,
  .reveal-card,
  .reveal.show,
  .reveal-card.show {
    opacity: 1;
    transform: none;
    transition: none;
  }

  /* Reduce expensive shadows while retaining depth. */
  .panel,
  .project-card,
  .skill-group,
  .working-card,
  .exp-card,
  .cert-card {
    box-shadow: 0 16px 48px rgba(0,0,0,0.22);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    transition-delay: 0ms !important;
  }

  .reveal,
  .reveal-card {
    opacity: 1;
    transform: none;
  }
}
      `}</style>

      <div className="cursor-ring"></div>
      <div className="cursor-dot"></div>

      <div className="site">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="glow g3"></div>

        <header className="topbar">
          <div className="container nav-wrap">
            <a className="brand" href="#/" onClick={goToHome} aria-label="Go to PabaOps home page">
              <img src={BRAND_IMAGE} alt="PabaOps logo" className="brand-img" decoding="async" fetchPriority="high" />
              <div className="brand-copy">
                <strong>PabaOps</strong>
                <span>Cloud • DevOps • SRE • Linux Admin • Platform</span>
              </div>
            </a>
            <nav className="nav">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#/capabilities">Capabilities</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          {isCapabilitiesRoute ? (
            <section className="container capability-page">
              {selectedCapability ? (
                <>
                  <div className="capability-breadcrumbs">
                    <a href="#/">Home</a>
                    <span>›</span>
                    <a href="#/capabilities">Technical Capabilities</a>
                    <span>›</span>
                    <span>{selectedCapability.title}</span>
                  </div>

                  <div className="panel capability-detail-hero">
                    <div className="capability-detail-title">
                      <div className="capability-hub-icon">{selectedCapability.icon}</div>
                      <div>
                        <small>{selectedCapability.eyebrow}</small>
                        <h1>{selectedCapability.title}</h1>
                        <p>{selectedCapability.summary}</p>
                      </div>
                    </div>
                    <div className="capability-stack-box">
                      <h3>Technologies and coverage</h3>
                      <div className="skills-inline">
                        {selectedCapability.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="capability-focus-grid">
                    {selectedCapability.focus.map((item) => (
                      <article className="panel capability-focus-card" key={item.title}>
                        <div className="capability-focus-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </article>
                    ))}
                  </div>

                  <div className="panel capability-evidence">
                    <div>
                      <span className="contact-label">Portfolio Evidence</span>
                      <h2>What will be added as the portfolio grows</h2>
                      <p>
                        These items turn capability descriptions into practical proof through repositories, diagrams, screenshots, runbooks, and sanitized case studies.
                      </p>
                    </div>
                    <ul>
                      {selectedCapability.evidence.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="capability-page-actions">
                    <a className="mini-btn" href="#/capabilities">View All Capabilities</a>
                    <a className="mini-btn" href="#/">Back to Portfolio</a>
                    <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">Open GitHub</a>
                  </div>
                </>
              ) : (
                <>
                  <div className="capability-breadcrumbs">
                    <a href="#/">Home</a>
                    <span>›</span>
                    <span>Technical Capabilities</span>
                  </div>

                  <div className="capability-page-head">
                    <span>Technical Capabilities</span>
                    <h1>Explore the operational depth behind the portfolio</h1>
                    <p>
                      The homepage stays concise for recruiters, while these focused pages provide deeper coverage of Linux administration, cloud and platform engineering, observability and security, L0–L2 technical support, and the DevOps principles and collaborative culture behind the work.
                    </p>
                  </div>

                  <div className="capability-hub-grid">
                    {capabilityAreas.map((area) => (
                      <article className="panel capability-hub-card" key={area.slug}>
                        <div className="capability-hub-icon">{area.icon}</div>
                        <small>{area.eyebrow}</small>
                        <h2>{area.title}</h2>
                        <p>{area.summary}</p>
                        <div className="skills-inline">
                          {area.tags.slice(0, 6).map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        <div className="project-actions">
                          <a className="mini-btn" href={`#/capabilities/${area.slug}`}>View Details</a>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="capability-page-actions">
                    <a className="mini-btn" href="#/">Back to Portfolio</a>
                    <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">View GitHub</a>
                  </div>
                </>
              )}
            </section>
          ) : (
            <>
          <section className="container hero reveal">
            <div>
              <div className="eyebrow">DevOps • SRE • Platform • Cloud • DevSecOps</div>
              <h1>
                <span>Pabasara</span>
                <span>Meegahakumbura</span>
              </h1>
              <p className="hero-sub">
                Building reliable cloud-native platforms with Kubernetes, Terraform automation, CI/CD, Linux operations, observability, security controls, and production-minded support.
              </p>
              <p className="hero-text">
                I focus on DevOps first, while bringing Cloud, SRE, Platform, and DevSecOps strengths into real environments across AWS, GCP, Azure, Cloudflare, and Linux-based systems. My work centers on automation, infrastructure control, monitoring, security, database support, and production-minded operations.
              </p>

              <div className="hero-actions">
                <a className="btn btn-hero" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">View GitHub</a>
                <a className="btn btn-hero" href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn btn-hero" href={RESUME_FILE} target="_blank" rel="noreferrer">Download Resume</a>
                <a className="btn btn-hero" href="#contact">Contact Me</a>
              </div>

              <div className="skill-cloud">
                {quickChips.map((skill) => (
                  <span className="chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="panel hero-visual">
              <div className="hero-screen">
                <div className="orbit"></div>
                <div className="orbit two"></div>
                <div className="orbit three"></div>
                <img src={HERO_IMAGE} alt="PabaOps visual" className="hero-brand-art" decoding="async" fetchPriority="high" />

                <div className="floating-card f1">
                  <span>Cloud</span>
                  <strong>AWS • GCP • Azure • Cloudflare • WAF</strong>
                </div>
                <div className="floating-card f2">
                  <span>Platform</span>
                  <strong>Kubernetes, Docker, Linux, WHM/cPanel, MongoDB</strong>
                </div>
                <div className="floating-card f3">
                  <span>Observability</span>
                  <strong>Prometheus, Grafana, Datadog, UptimeRobot</strong>
                </div>
                <div className="floating-card f4">
                  <span>Security</span>
                  <strong>WAF, CrowdStrike Admin, Vault, IAM/RBAC</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="container reveal">
            <div className="hero-strip">
              {impactStats.map((item) => (
                <div className="strip-card panel" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="tool-row">
              {toolIcons.map((tool) => (
                <div className="tool-tile panel reveal-card" key={tool.name}>
                  {tool.image ? (
                    <img src={tool.image} alt={tool.name} className="tool-icon-img" loading="lazy" decoding="async" />
                  ) : (
                    <span className="tool-icon">{tool.icon}</span>
                  )}
                  <div className="tool-name">{tool.name}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="container section reveal">
            <div className="section-head">
              <span>About</span>
              <h2>DevOps, SRE, platform engineering, cloud operations, and DevSecOps support</h2>
            </div>
            <div className="panel intro-card">
              <p>
                I am a DevOps & IT Operations Engineer with hands-on experience across AWS, GCP, Azure, Kubernetes, Docker, Terraform, Linux, CI/CD pipelines, Cloudflare, and WHM/cPanel-oriented operations. My work focuses on operating microservices environments, improving deployment consistency, automating infrastructure, and strengthening observability through monitoring and logging tools.
              </p>
              <p>
                My support background gives me a practical reliability mindset. That helps me approach systems with troubleshooting discipline, operational awareness, security awareness, and production-focused thinking. I also bring scripting exposure through Bash and Python, along with secure configuration practices using Vault, Consul, IAM/RBAC, WAF, CrowdStrike Admin exposure, MongoDB, MySQL, Jira, and Zoho-related support work.
              </p>
            </div>

            <div className="panel spotlight-box">
              <div className="spotlight-title">
                My value comes from combining cloud infrastructure, Terraform automation, CI/CD, observability, security-aware operations, database support, and strong troubleshooting discipline into one practical DevOps profile.
              </div>
              <div className="spotlight-list">
                {measurableImpact.map((item) => (
                  <div className="spotlight-item reveal-card" key={item}>{item}</div>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="container section reveal">
            <div className="section-head">
              <span>Skills</span>
              <h2>Structured technical strengths</h2>
            </div>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div className="panel skill-group reveal-card" key={group.title}>
                  <div className="skill-group-title">{group.title}</div>
                  <h3>{group.title}</h3>
                  <div className="skills-inline">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="panel capabilities-cta">
              <div>
                <h3>Explore detailed technical capabilities</h3>
                <p>Open focused pages for Linux, cloud and platform engineering, observability and security, L0–L2 support, and DevOps principles and culture.</p>
              </div>
              <a className="mini-btn" href="#/capabilities">View All Capabilities</a>
            </div>
          </section>

          <section className="container section reveal">
            <div className="section-head">
              <span>Currently Working On</span>
              <h2>What I am building and improving now</h2>
            </div>
            <div className="working-grid">
              <div className="panel working-card reveal-card">
                <h3>Current Focus</h3>
                <p>Improving the depth and proof quality of my DevOps portfolio through real build, deploy, automation, and observability work.</p>
                <ul className="working-list">
                  {workingNow.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="panel working-card reveal-card">
                <h3>Open to Opportunities</h3>
                <p>I am open to DevOps, Cloud Operations, Platform Engineering, and SRE-oriented roles where I can contribute through hands-on delivery, operational support, automation, and reliability thinking.</p>
                <div className="cta-row">
                  <a className="mini-btn" href={RESUME_FILE} target="_blank" rel="noreferrer">View Resume</a>
                  <a className="mini-btn" href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="container section reveal">
            <div className="work-head">
              <div className="section-kicker">Highlighted Work • Hover to focus</div>
            </div>
            <div className="work-grid">
              {featuredProjects.map((item) => (
                <div className="flip-card reveal-card" key={`flip-${item.title}`}>
                  <div className="flip-inner">
                    <div className="flip-face work-card">
                      <div className="work-icon">
                        {item.image ? <img src={item.image} alt={item.title} loading="lazy" decoding="async" /> : item.icon}
                      </div>
                      <small>{item.subtitle}</small>
                      <h3>{item.title}</h3>
                      <p style={{ color: "#ddd6fe", lineHeight: 1.85 }}>Hover to flip and view implementation details.</p>
                      <div className="flip-hint">Hover to reveal</div>
                    </div>
                    <div className="flip-face flip-back work-card">
                      <small>{item.subtitle}</small>
                      <h3>{item.title}</h3>
                      <p>{item.problem}</p>
                      <div className="example-note">
                        <div className="example-label">Example Outcome</div>
                        <div>{item.outcome}</div>
                      </div>
                      <ul className="detail-list">
                        {item.implemented.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <div className="flip-hint">Front ↺ Back</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="linux" className="container section reveal">
            <div className="section-head">
              <span>Linux Administration</span>
              <h2>Multi-distribution server administration and operations</h2>
            </div>
            <div className="panel linux-overview">
              <div className="linux-summary">
                <h3>Linux systems built for stable, secure operations</h3>
                <p>
                  Hands-on administration across cloud, hosting, and server environments, covering access control, services, packages, networking, security, logs, storage, troubleshooting, and operational recovery.
                </p>
                <div className="distribution-label">Distributions worked with</div>
                <div className="distribution-list">
                  {linuxDistributions.map((distribution) => (
                    <span className="distribution-chip" key={distribution}>{distribution}</span>
                  ))}
                </div>
                <div className="cta-row">
                  <a className="mini-btn" href="#/capabilities/linux">View Full Linux Details</a>
                </div>
              </div>
              <div className="capability-grid">
                {linuxCapabilities.map((item) => (
                  <div className="capability-card reveal-card" key={item.title}>
                    <div className="capability-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="support" className="container section reveal">
            <div className="section-head">
              <span>L0–L2 Support</span>
              <h2>Structured technical support from first contact to advanced investigation</h2>
            </div>
            <div className="panel support-overview">
              <div className="support-summary">
                <h3>Support ownership with an operations mindset</h3>
                <p>
                  A practical support approach that combines user communication, technical troubleshooting, incident handling, monitoring awareness, clear escalation, and reusable documentation across cloud, on-premises, application, identity, email, and network-related issues.
                </p>
                <div className="distribution-label">Support coverage</div>
                <div className="distribution-list">
                  {["User Support", "Access & Identity", "Applications", "Email & DNS", "Network", "Cloud & On-Prem", "Incident Escalation"].map((item) => (
                    <span className="distribution-chip" key={item}>{item}</span>
                  ))}
                </div>
                <div className="cta-row">
                  <a className="mini-btn" href="#/capabilities/support">View Full Support Details</a>
                </div>
              </div>
              <div className="support-grid">
                {supportCapabilities.map((item) => (
                  <div className="support-card reveal-card" key={item.title}>
                    <div className="support-level">{item.level}</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="container section reveal">
            <div className="section-head">
              <span>Featured Projects</span>
              <h2>Real project structure with repo-ready presentation</h2>
            </div>
            <div className="project-grid">
              {featuredProjects.map((project) => (
                <div className="panel project-card reveal-card" key={project.title}>
                  <div className="project-top">
                    <div className="project-icon">
                      {project.image ? <img src={project.image} alt={project.title} loading="lazy" decoding="async" /> : project.icon}
                    </div>
                    <div>
                      <small>{project.subtitle}</small>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                  <p>{project.problem}</p>
                  <div className="example-note">
                    <div className="example-label">Example Outcome</div>
                    <div>{project.outcome}</div>
                  </div>
                  <ul className="project-list">
                    {project.implemented.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-tags">
                    {project.tools.map((tool) => (
                      <span className="project-tag" key={tool}>{tool}</span>
                    ))}
                  </div>
                  <ul className="replace-list">
                    {project.replaceLater.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <a className="mini-btn" href={project.link} target="_blank" rel="noreferrer">Open GitHub</a>
                    <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">More Repositories</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="container section reveal">
            <div className="section-head">
              <span>Certifications & Learning</span>
              <h2>Professional credibility and ongoing growth</h2>
            </div>
            <div className="cert-grid">
              {certifications.map((item) => (
                <div className="panel cert-card reveal-card" key={item.title}>
                  <div className="cert-badge">{item.badge}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="container section reveal">
            <div className="section-head">
              <span>Experience</span>
              <h2>From support foundations to platform operations</h2>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <div className="panel exp-card reveal-card" key={item.role}>
                  <div className="timeline-top">
                    <div>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                    </div>
                    <div className="date-pill">{item.period}</div>
                  </div>
                  <p>{item.text}</p>
                  <ul className="exp-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="container section reveal">
            <div className="panel contact-box">
              <div>
                <span className="contact-label">Contact</span>
                <h2>Open to DevOps, Cloud, Platform, and SRE opportunities.</h2>
                <p>
                  Available for full-time roles and technical collaborations where I can contribute through automation, observability, Kubernetes operations, security-aware operations, database support, and operational excellence.
                </p>
                <div className="cta-row">
                  <a className="mini-btn" href={RESUME_FILE} target="_blank" rel="noreferrer">Download Resume</a>
                  <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">Featured Repositories</a>
                </div>
              </div>
              <div className="contact-links">
                <a href="mailto:prpabasara512@gmail.com"><span className="contact-icon">✉️</span>prpabasara512@gmail.com</a>
                <a href="tel:+94701315700"><span className="contact-icon">📞</span>+94 70 131 5700</a>
                <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer"><span className="contact-icon">💻</span>github.com/PabasaraMeegahakumbura</a>
                <a href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer"><span className="contact-icon">🔗</span>linkedin.com/in/pabasara-meegahakumbura</a>
                <div><span className="contact-icon">📍</span>Panadura, Sri Lanka</div>
              </div>
            </div>
          </section>
            </>
          )}
        </main>

        <footer className="container footer">
          <div className="footer-links">
            <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">GitHub</a>
            <a className="mini-btn" href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="mini-btn" href="mailto:prpabasara512@gmail.com">Email</a>
            <a className="mini-btn" href={RESUME_FILE} target="_blank" rel="noreferrer">Resume</a>
          </div>
          <div style={{ marginTop: 16 }}>© PabaOps • Pabasara Meegahakumbura. All rights reserved.</div>
        </footer>


        <div
          className={`ai-welcome-popup ${showAiGreeting && !aiOpen ? "show" : ""}`}
          role="status"
          aria-live="polite"
        >
          <button
            type="button"
            className="ai-welcome-close"
            onClick={() => setShowAiGreeting(false)}
            aria-label="Close welcome message"
          >
            ×
          </button>
          <div
            className="ai-welcome-content"
            onClick={openAIAssistant}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openAIAssistant();
              }
            }}
          >
            <img src={BRAND_IMAGE} alt="PabaOps assistant" className="ai-welcome-photo" decoding="async" />
            <div className="ai-welcome-copy">
              <strong>Hi there! 👋</strong>
              <span>
                Hope you have a wonderful day. Ask me anything about Pabasara’s DevOps journey.
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="ai-agent-launcher"
          onClick={toggleAIAssistant}
          aria-expanded={aiOpen}
          aria-controls="pabaops-ai-panel"
          aria-label={aiOpen ? "Close PabaOps AI Assistant" : "Open PabaOps AI Assistant"}
          title="Ask PabaOps AI"
        >
          <span className="ai-launcher-icon" aria-hidden="true">
            <img src={BRAND_IMAGE} alt="" className="ai-launcher-photo" decoding="async" />
          </span>
          <span>Ask PabaOps AI</span>
        </button>

        <aside
          id="pabaops-ai-panel"
          className={`ai-chat-panel ${aiOpen ? "open" : ""}`}
          aria-hidden={!aiOpen}
        >
          <div className="ai-chat-head">
            <div className="ai-chat-identity">
              <div className="ai-chat-avatar">
                <img src={BRAND_IMAGE} alt="PabaOps AI Assistant" decoding="async" />
              </div>
              <div className="ai-chat-title">
                <strong>PabaOps AI Assistant</strong>
                <span>Portfolio guide for recruiters and technical visitors</span>
              </div>
            </div>
            <button
              type="button"
              className="ai-chat-close"
              onClick={() => setAiOpen(false)}
              aria-label="Close AI Assistant"
            >
              ×
            </button>
          </div>

          <div className="ai-status-row">
            <span className="ai-status-dot" aria-hidden="true"></span>
            <span>{AI_API_URL ? "Live AI connected" : "Smart portfolio mode active"}</span>
          </div>

          <div className="ai-quick-prompts" aria-label="Suggested questions">
            {aiQuickPrompts.map((prompt) => (
              <button
                type="button"
                className="ai-quick-prompt"
                key={prompt}
                onClick={() => sendAIMessage(prompt)}
                disabled={aiLoading}
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="ai-chat-messages" aria-live="polite">
            {aiMessages.map((message, index) => (
              <div
                className={`ai-message ${message.role}`}
                key={`${message.role}-${index}`}
              >
                {message.content}
              </div>
            ))}

            {aiLoading && (
              <div className="ai-message assistant">
                <span className="ai-typing" aria-label="AI is typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            )}
          </div>

          <div className="ai-chat-compose">
            <div className="ai-input-wrap">
              <textarea
                className="ai-chat-input"
                value={aiInput}
                onChange={(event) => setAiInput(event.target.value)}
                onKeyDown={handleAIKeyDown}
                placeholder="Ask about skills, projects, Linux, cloud, SRE, or support..."
                maxLength={700}
                rows={1}
              />
              <button
                type="button"
                className="ai-chat-send"
                onClick={() => sendAIMessage()}
                disabled={!aiInput.trim() || aiLoading}
                aria-label="Send question"
              >
                ➤
              </button>
            </div>
            <div className="ai-chat-note">
              AI responses are portfolio guidance and may occasionally be incomplete.
            </div>
          </div>
        </aside>

        <button
          type="button"
          className={`scroll-top-btn ${showScrollTop ? "show" : ""}`}
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <span className="scroll-top-arrow" aria-hidden="true">↑</span>
        </button>
      </div>
    </>
  );
}
