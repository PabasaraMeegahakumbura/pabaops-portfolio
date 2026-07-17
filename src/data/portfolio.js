import {
  EMAIL_PLATFORM_REPO,
  GITHUB_PROFILE,
  K8S_LOGO,
  OBSERVABILITY_REPO,
} from "../config/site";

export const impactStats = [
    { label: "Primary Focus", value: "DevOps + SRE + Platform" },
    { label: "Core Stack", value: "Kubernetes + Helm + Terraform" },
    { label: "Cloud & Edge", value: "AWS / GCP / Azure / Cloudflare" },
    { label: "Linux Administration", value: "Ubuntu / RHEL / CentOS / AlmaLinux" },
    { label: "Languages", value: "Python + Bash + Java/C# Basics" },
    { label: "Support Operations", value: "L0–L2 + Incident Troubleshooting" },
  ];

export const quickChips = [
    "AWS",
    "GCP",
    "Azure",
    "Kubernetes",
    "Helm",
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
    "Zabbix",
    "Uptime Kuma",
    "Netdata",
    "AWS CloudWatch",
    "Google Cloud Observability",
    "Datadog",
    "Cloudflare",
    "WAF",
    "MongoDB",
    "MySQL",
    "VMware ESXi/vSphere",
    "On-Prem Infrastructure",
    "Microsoft 365",
    "Active Directory / LDAP",
    "SonicWall / FortiWeb",
    "Jira",
    "L0–L2 Support",
  ];

export const toolIcons = [
    { icon: "☁️", name: "Cloud" },
    { image: K8S_LOGO, name: "Kubernetes" },
    { icon: "⎈", name: "Helm" },
    { icon: "🐳", name: "Docker" },
    { icon: "⚙️", name: "CI/CD" },
    { icon: "🛠️", name: "Automation" },
    { icon: "📊", name: "Monitoring" },
    { icon: "📡", name: "Zabbix" },
    { icon: "✅", name: "Uptime Kuma" },
    { icon: "📈", name: "Netdata" },
    { icon: "🔐", name: "Security" },
    { icon: "🐧", name: "Linux Admin" },
    { icon: "🖥️", name: "On-Prem & VMs" },
    { icon: "🎧", name: "L0–L2 Support" },
    { icon: "🐍", name: "Python" },
    { icon: "✉️", name: "Mail Systems" },
  ];

export const measurableImpact = [
    "Support cloud and Kubernetes-oriented environments with production-minded operational discipline",
    "Improve deployment consistency through CI/CD, automation, and structured release workflows",
    "Reduce manual effort using Terraform, scripting, and repeatable operational patterns",
    "Strengthen visibility through observability tooling and incident support practices",
    "Bring L0–L2 support depth into DevOps, platform, and cloud operations work",
  ];

export const skillGroups = [
    { title: "Cloud", items: ["AWS", "GCP", "Azure (Basic/Testing)", "Cloudflare"] },
    { title: "Containers, Helm & Microservices", items: ["Kubernetes", "Helm", "Docker", "Microservices", "Platform Operations"] },
    { title: "CI/CD & Automation", items: ["GitLab CI", "Jenkins", "Terraform", "Infrastructure Automation"] },
    { title: "Languages & Scripting", items: ["Python", "Bash", "PowerShell", "Java (Basic)", "C# (Basic)"] },
    { title: "Linux Administration", items: ["Ubuntu", "RHEL", "CentOS", "AlmaLinux", "systemd", "SSH", "firewalld"] },
    { title: "Observability", items: ["Prometheus", "Grafana", "Zabbix (Hands-on AWS/GCP)", "AWS CloudWatch", "Google Cloud Monitoring & Logging", "UptimeRobot", "Uptime Kuma (Lab/Testing)", "Netdata (Lab/Testing)", "Datadog", "ELK/EFK"] },
    { title: "Networking & Security", items: ["SonicWall", "FortiWeb", "FortiClient", "Cloudflare WAF", "WireGuard", "DNS", "SSL/TLS", "IAM/RBAC"] },
    { title: "Database Operations & Support", items: ["MongoDB", "MySQL", "Cloud SQL", "Backup/Restore Awareness"] },
    { title: "On-Prem & Self-Hosted", items: ["VMware ESXi/vSphere", "Virtual Machines", "WHM/cPanel", "BTCPay Server", "Mail Platforms"] },
    { title: "Identity & Collaboration", items: ["Microsoft 365 / Office 365", "Active Directory", "LDAP", "Mailbox Administration", "Permissions", "License Provisioning", "Intune", "Teams", "SharePoint"] },
    { title: "ITSM & Workflow", items: ["Jira", "Zoho", "Zoho Flow", "Freshdesk"] },
    { title: "L0–L2 Support", items: ["Incident Triage", "Troubleshooting", "Escalation", "SLA Awareness", "Documentation", "User Support"] },
    { title: "Email & Collaboration", items: ["Mailcow", "Poste.io", "Postfix", "Dovecot", "SOGo", "SPF/DKIM/DMARC"] },
  ];

export const featuredProjects = [
    {
      title: "Kubernetes CI/CD Deployment Project",
      subtitle: "End-to-end deployment workflow",
      problem:
        "Show how code moves from source control to a repeatable Kubernetes deployment with cleaner delivery and release consistency.",
      implemented: [
        "Dockerized application components",
        "Git-based CI/CD workflow structure",
        "Kubernetes deployment layout with Helm-based application packaging",
        "Microservice workload deployment and operational support",
        "Release-friendly delivery flow",
      ],
      outcome:
        "Demonstrates a repeatable path from source control to Kubernetes deployment, with fewer manual release steps.",
      tools: ["Kubernetes", "Helm", "Docker", "Microservices", "CI/CD", "Git", "Linux"],
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
        "Demonstrates reusable infrastructure provisioning patterns designed for consistent, reviewable changes.",
      tools: ["Terraform", "Cloud", "Automation", "Linux"],
      icon: "🧩",
      link: GITHUB_PROFILE,
    },
    {
      title: "Multi-Tool Monitoring & Observability Stack",
      subtitle: "Observability and incident support",
      problem:
        "Improve operational visibility and support faster troubleshooting across services and infrastructure.",
      implemented: [
        "Prometheus and Grafana metrics, dashboards, and service visibility",
        "Hands-on Zabbix infrastructure monitoring and alerting across AWS/GCP-hosted Linux environments",
        "AWS CloudWatch and Google Cloud Monitoring/Logging operational workflows",
        "UptimeRobot availability checks with Uptime Kuma and Netdata maintained as lab/testing coverage",
        "Incident-oriented alert review, investigation, and response readiness",
      ],
      outcome:
        "Demonstrates layered visibility across infrastructure, services, endpoints, and host performance using practical monitoring workflows.",
      tools: ["Prometheus", "Grafana", "Zabbix", "AWS CloudWatch", "Google Cloud Observability", "UptimeRobot", "Uptime Kuma (Lab)", "Netdata (Lab)"],
      icon: "📊",
      link: OBSERVABILITY_REPO,
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
        "Demonstrates practical edge protection, traffic control, and security-aware Cloudflare operations.",
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
        "Demonstrates consistent container packaging and a platform-oriented structure across development and runtime environments.",
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
        "Demonstrates a structured support workflow across databases, ticketing, investigation, escalation, and documentation.",
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
        "Demonstrates practical Linux administration for stable services, controlled access, and systematic troubleshooting.",
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
        "Demonstrates structured incident ownership, clear escalation paths, and consistent communication throughout issue resolution.",
      tools: ["L0–L2", "Jira", "Zoho", "Monitoring", "Troubleshooting", "Documentation"],
      icon: "🎧",
      link: GITHUB_PROFILE,
    },
    {
      title: "Self-Hosted Email Platform Engineering Lab",
      subtitle: "Email Infrastructure & Platform Engineering",
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
      outcomeLabel: "Verified Outcome",
      outcome:
        "Built a working, multi-platform email engineering lab with verified external mail flow and integrity-checked backups, while recording the isolated restore drill as the next production-readiness milestone.",
      caseStudy: "#/projects/self-hosted-email-platform",
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
      link: EMAIL_PLATFORM_REPO,
    }
  ];

export const highlightedProjects = featuredProjects.slice(0, 3);

export const experience = [
    {
      role: "DevOps Engineer",
      company: "We Make Platforms USA — Remote",
      period: "Nov 2025 – Present",
      text: "Manage GCP-focused cloud and server operations, hosting environments, security controls, monitoring, and incident support for a remote project-based organization.",
      bullets: [
        "GCP Compute Engine, GKE, Cloud SQL, Cloud Storage, Cloud Build, Cloud Deploy, monitoring, billing, and gcloud administration",
        "Server-side WHM/cPanel and WordPress administration supporting 100+ websites",
        "AWS, Liquid Web, YoHost, Cloudflare, Microsoft 365, and Google Workspace operations",
        "DNS, SSL/TLS, mail-server and email-deliverability troubleshooting",
        "BTCPay Server, WireGuard, firewall/WAF, SonicWall, FortiClient, and FortiWeb support",
        "UptimeRobot, Prometheus/Grafana, logs, Jira, Zoho, and Zoho Flow for operational follow-up",
      ],
    },
    {
      role: "DevOps & IT Operations Engineer",
      company: "Zafer AI (formerly ZorroSign)",
      period: "Aug 2024 – Dec 2025",
      text: "Operate cloud and Kubernetes environments across AWS and GCP, maintain CI/CD pipelines, automate infrastructure with Terraform and scripting, improve observability, and support secure operations across Linux-based environments.",
      bullets: [
        "Kubernetes and Helm support for containerized microservice environments",
        "Terraform automation and scripting",
        "CI/CD pipeline maintenance",
        "Monitoring, logging, and observability support",
        "Linux operations and platform reliability",
        "Cloudflare WAF, SonicWall, FortiWeb, FortiClient, and security-aware network support",
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
    {
      role: "End User Support (EUS) Engineer",
      company: "ZorroSign Inc.",
      period: "Feb 2023 – Aug 2023",
      text: "Supported users, endpoints, identity, Microsoft 365 and workplace applications while building the troubleshooting and service-ownership foundation later carried into infrastructure and DevOps work.",
      bullets: [
        "Administered Office 365 mailboxes, permissions, license provisioning, Teams, SharePoint, and Microsoft Intune",
        "Administered Active Directory and LDAP-based identity, users, groups, access, onboarding, offboarding, and group-based controls",
        "Windows, hardware, software, connectivity, AnyDesk, and RDP troubleshooting",
        "Documentation, escalation, user communication, and cross-team operational support",
      ],
    },
  ];

export const certifications = [
    { badge: "☁️", title: "AWS Certified Cloud Practitioner", text: "Cloud fundamentals and platform awareness." },
    { badge: "☸️", title: "CKA — In Progress", text: "Kubernetes administration and deeper platform capability building." },
    { badge: "🎓", title: "MBA (Business Analytics) — Final Semester", text: "Business-facing analytical and strategic perspective." },
    { badge: "💻", title: "BIT — University of Moratuwa (In Progress)", text: "Ongoing technical and systems-oriented academic development." },
  ];

export const workingNow = [
    "Building recruiter-ready DevOps portfolio projects",
    "Improving Kubernetes deployment workflows",
    "Deepening Terraform automation practice",
    "Strengthening observability and reliability patterns",
    "Improving Helm-based packaging and deployment for Kubernetes microservices",
    "Preparing toward stronger Kubernetes capability",
  ];



export const capabilityAreas = [
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
        "Azure (Basic/Testing)",
        "Kubernetes",
        "Helm",
        "Microservices",
        "Docker",
        "Terraform",
        "GitLab CI",
        "Jenkins",
        "Cloudflare",
        "WHM/cPanel",
        "VMware ESXi/vSphere",
        "On-Prem Systems",
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
          text: "Clusters, nodes, pods, deployments, services, Helm releases, containerized microservices, configuration, troubleshooting, availability, and workload support.",
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
        {
          icon: "🏢",
          title: "On-Prem & Self-Hosted Infrastructure",
          text: "VMware ESXi/vSphere, virtual machines, Linux services, patching, backups, hosted platforms, connectivity, and recovery-oriented operations.",
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
        "Zabbix",
        "Uptime Kuma",
        "Netdata",
        "AWS CloudWatch",
        "Google Cloud Monitoring & Logging",
        "Datadog",
        "ELK/EFK",
        "UptimeRobot",
        "Cloud Monitoring",
        "Cloudflare WAF",
        "SonicWall",
        "FortiWeb",
        "FortiClient",
        "IAM/RBAC",
        "Vault",
        "CrowdStrike",
      ],
      focus: [
        {
          icon: "📊",
          title: "Metrics & Dashboards",
          text: "Prometheus, Grafana, hands-on Zabbix, AWS CloudWatch, Google Cloud Monitoring, and Netdata lab coverage for service, host, and workload visibility.",
        },
        {
          icon: "📚",
          title: "Logs & Search",
          text: "Centralized logging, filtering, correlation, application and system logs, and evidence-led troubleshooting.",
        },
        {
          icon: "🔔",
          title: "Alerting & Notification",
          text: "Zabbix and monitoring-platform alert rules, thresholds, notification routing, noise reduction, escalation awareness, and validation.",
        },
        {
          icon: "⏱️",
          title: "Availability & Uptime",
          text: "Uptime Kuma and UptimeRobot checks for endpoints, SSL, services, external availability validation, and response readiness.",
        },
        {
          icon: "🔐",
          title: "Security Controls",
          text: "Cloudflare WAF, SonicWall, FortiWeb, FortiClient, firewall controls, WireGuard, IAM/RBAC, access review, endpoint security, and least-privilege thinking.",
        },
        {
          icon: "🚨",
          title: "Incident Detection & Response",
          text: "Signal review, containment awareness, evidence gathering, service recovery, validation, and post-incident documentation.",
        },
      ],
      evidence: [
        "Structured observability-monitoring-lab repository with architecture, commands, validation, troubleshooting, and runbooks",
        "Sanitized security-hardening and incident-response case studies",
        "Hands-on Zabbix AWS/GCP documentation plus clearly labelled Uptime Kuma and Netdata lab/testing guides",
        "Operational runbooks for alerts, containment, recovery, and validation",
      ],
    },
    {
      slug: "database-operations",
      icon: "🗄️",
      title: "Database Operations & Support",
      eyebrow: "Operational Database Awareness",
      summary:
        "Operations and support exposure across MongoDB, MySQL, GCP Cloud SQL, connectivity, service health, access, backups, logs, and application-focused troubleshooting. This is presented as operational support, not DBA specialization.",
      tags: [
        "MongoDB",
        "MySQL",
        "Cloud SQL",
        "Connectivity",
        "Access",
        "Backups",
        "Logs",
        "Troubleshooting",
      ],
      focus: [
        {
          icon: "🔌",
          title: "Connectivity & Service Health",
          text: "Validate database services, ports, DNS, network access, application connectivity, and basic health signals.",
        },
        {
          icon: "🔐",
          title: "Access & Configuration Support",
          text: "Support credentials, permissions awareness, connection configuration, environment variables, and secure handling practices.",
        },
        {
          icon: "💾",
          title: "Backup & Recovery Awareness",
          text: "Support backup scheduling, retention awareness, snapshot or export workflows, validation, and recovery planning.",
        },
        {
          icon: "📋",
          title: "Logs & Troubleshooting",
          text: "Review service and application logs, resource symptoms, connection failures, and operational evidence before escalation.",
        },
      ],
      evidence: [
        "Sanitized MongoDB, MySQL, and Cloud SQL operational notes",
        "Connectivity and service-health troubleshooting checklists",
        "Backup-validation and recovery-awareness runbooks",
        "Application-to-database incident examples without sensitive data",
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
        "Office 365",
        "Active Directory",
        "LDAP",
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

export const linuxDistributions = [
    "Ubuntu",
    "Red Hat Enterprise Linux (RHEL)",
    "CentOS",
    "AlmaLinux",
  ];

export const linuxCapabilities = [
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
      text: "IP, route, DNS, ports, SSH, firewalld, SonicWall, FortiWeb, FortiClient, Cloudflare WAF, VPN connectivity, and service-listening checks across cloud, hosted, and on-premises systems.",
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

export const supportCapabilities = [
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
