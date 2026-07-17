export const aiQuickPrompts = [
    "Why should we hire Pabasara?",
    "Summarize his DevOps experience",
    "What Linux distributions has he worked with?",
    "Show his Kubernetes and Terraform strengths",
    "What freelance services does he offer?",
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
      return "His platform strengths include Kubernetes operations, Helm-based application packaging and releases, Dockerized microservices, Terraform infrastructure automation, Git-based CI/CD, Linux systems, troubleshooting, monitoring, and repeatable operational workflows.";
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
      return "He progressed from End User Support and L0–L2 Support into Associate DevOps, DevOps & IT Operations, and a remote DevOps Engineer role from November 2025. His recent work includes GCP and server operations, GKE, Cloud SQL, Cloud Build and Deploy, WHM/cPanel and WordPress support for more than 100 websites, monitoring, security controls, DNS, SSL, and incident support.";
    }

    if (
      normalized.includes("cloud") ||
      normalized.includes("aws") ||
      normalized.includes("gcp") ||
      normalized.includes("azure") ||
      normalized.includes("cloudflare")
    ) {
      return "His cloud and edge experience includes hands-on AWS and GCP operations plus basic/testing exposure to Azure VMs, Storage, and AKS. He also works with Cloudflare, IAM, compute, networking, firewalls, backups, snapshots, service accounts, DNS, WAF, SSL, hosting, migrations, and operational troubleshooting.";
    }

    if (
      normalized.includes("office 365") ||
      normalized.includes("microsoft 365") ||
      normalized.includes("active directory") ||
      normalized.includes("ldap") ||
      normalized.includes("identity")
    ) {
      return "His identity and collaboration experience includes administering Office 365 and Microsoft 365 mailboxes, permissions, license provisioning, Teams, SharePoint, Microsoft Intune, Active Directory users and groups, LDAP-based identity, onboarding, offboarding, access controls, and endpoint support.";
    }

    if (
      normalized.includes("network") ||
      normalized.includes("sonicwall") ||
      normalized.includes("forti") ||
      normalized.includes("firewall") ||
      normalized.includes("waf")
    ) {
      return "His networking and security operations experience includes SonicWall, FortiWeb, FortiClient, Cloudflare WAF, WireGuard, firewall controls, DNS, SSL/TLS, ports, routing, VPN connectivity, access controls, and connectivity troubleshooting across cloud, hosted, and on-premises systems.";
    }

    if (
      normalized.includes("database") ||
      normalized.includes("mongodb") ||
      normalized.includes("mysql") ||
      normalized.includes("cloud sql")
    ) {
      return "His database background is operations and support focused across MongoDB, MySQL, and GCP Cloud SQL. It includes service health, connectivity, configuration support, access awareness, backups, logs, application troubleshooting, and escalation. The portfolio does not present him as a specialist DBA.";
    }

    if (
      normalized.includes("on-prem") ||
      normalized.includes("on prem") ||
      normalized.includes("vmware") ||
      normalized.includes("self-hosted") ||
      normalized.includes("self hosted")
    ) {
      return "He supports cloud and on-premises environments, including Linux servers, VMware ESXi/vSphere, virtual machines, hosted platforms, WHM/cPanel, BTCPay Server, self-hosted services, patching, backups, connectivity, monitoring, and recovery-oriented operations.";
    }

    if (
      normalized.includes("freelance") ||
      normalized.includes("service") ||
      normalized.includes("client") ||
      normalized.includes("consult")
    ) {
      return "His freelance services cover clearly scoped cloud and Linux operations, WHM/cPanel and WordPress infrastructure, Cloudflare, DNS and SSL, monitoring, security-aware configuration, on-premises and self-hosted systems, incident troubleshooting, and practical DevOps automation support. Each engagement starts with scope, access, risk, deliverables, and validation.";
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
      return "Pabasara is open to DevOps, Cloud Operations, Platform Engineering, SRE, and Linux Administration opportunities. Use the Contact section, LinkedIn, GitHub, or resume links to reach him.";
    }

    return "Pabasara is a DevOps & IT Operations Engineer with strengths across cloud, Kubernetes, Helm, containerized microservices, Terraform, CI/CD, Linux, observability, networking and firewalls, Microsoft 365, Active Directory/LDAP, databases, WHM/cPanel, WordPress, and L0–L2 support. Ask me a specific question about his skills, projects, experience, support background, or availability.";
  };
