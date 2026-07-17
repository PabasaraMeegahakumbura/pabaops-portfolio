export const aiQuickPrompts = [
    "Why should we hire Pabasara?",
    "Summarize his DevOps experience",
    "What Linux distributions has he worked with?",
    "Show his Kubernetes and Terraform strengths",
    "Explain his L0–L2 support background",
  ];

export const getLocalAIResponse = (question) => {
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
