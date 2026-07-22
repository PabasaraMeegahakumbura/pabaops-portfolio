(() => {
  if (window.__PABAOPS_GLOBAL_AI_LOADED__) return;
  window.__PABAOPS_GLOBAL_AI_LOADED__ = true;

  const currentScript = document.currentScript;
  const assetRoot = currentScript
    ? new URL("./", currentScript.src)
    : new URL("./pabaops-ai/", window.location.href);
  const stylesheetUrl = new URL("assistant.css", assetRoot).href;
  const logoUrl = new URL("../pabaops-logo.webp", assetRoot).href;
  const STORAGE_KEY = "pabaops-global-ai-messages-v1";
  const GREETING_KEY = "pabaops-global-ai-greeting-shown";

  const quickPrompts = [
    "Why should we hire Pabasara?",
    "Summarize his DevOps experience",
    "What Linux distributions has he worked with?",
    "Show his Kubernetes and Terraform strengths",
    "What is his education background?",
  ];

  const initialMessages = [
    {
      role: "assistant",
      content:
        "Hi, I’m the PabaOps AI Assistant. Ask me about Pabasara’s DevOps, SRE, cloud, Linux, platform, support, projects, or availability.",
    },
  ];

  const getLocalAIResponse = (question) => {
    const normalized = question.toLowerCase();

    if (normalized.includes("hire") || normalized.includes("why") || normalized.includes("value")) {
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
      normalized.includes("education") ||
      normalized.includes("mba") ||
      normalized.includes("business analytics") ||
      normalized.includes("cardiff") ||
      normalized.includes("bsc") ||
      normalized.includes("kdu") ||
      normalized.includes("kotelawala")
    ) {
      return "Pabasara completed a Master of Business Administration (MBA) in Business Analytics at Cardiff Metropolitan University, graduating with Merit in 2026. He also holds a BSc in Strategic Studies & International Relations from Kotelawala Defence University, completed in 2023 with Second Class Upper Division. This academic foundation complements his DevOps and cloud engineering experience with business analytics, strategy, research, communication, and structured decision-making.";
    }

    if (normalized.includes("experience") || normalized.includes("career") || normalized.includes("role")) {
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
      normalized.includes("datadog") ||
      normalized.includes("zabbix") ||
      normalized.includes("uptime kuma") ||
      normalized.includes("netdata") ||
      normalized.includes("log") ||
      normalized.includes("alert")
    ) {
      return "His observability experience includes Prometheus and Grafana for metrics and dashboards, hands-on Zabbix monitoring across AWS/GCP-hosted Linux environments, AWS CloudWatch, Google Cloud Monitoring and Logging, and UptimeRobot. Uptime Kuma and Netdata are clearly presented as lab/testing work. His monitoring projects document architecture, commands, validation, troubleshooting, alerting, and response workflows without exposing customer data.";
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

  const loadMessages = () => {
    try {
      const stored = window.sessionStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : null;
      return Array.isArray(parsed) && parsed.length ? parsed.slice(-20) : initialMessages;
    } catch {
      return initialMessages;
    }
  };

  const saveMessages = (messages) => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-20)));
    } catch {
      // Storage may be unavailable in strict privacy modes; the assistant still works.
    }
  };

  const ensureStylesheet = () => {
    if (document.querySelector('link[data-pabaops-global-ai-style]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = stylesheetUrl;
    link.dataset.pabaopsGlobalAiStyle = "true";
    document.head.append(link);
  };

  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const init = () => {
    if (document.querySelector(".ai-agent-launcher, #pabaops-ai-panel, #pabaops-global-ai-root")) {
      return;
    }

    ensureStylesheet();

    let messages = loadMessages();
    let loading = false;
    let isOpen = false;

    const root = createElement("div", "pabaops-global-ai", undefined);
    root.id = "pabaops-global-ai-root";

    const greeting = createElement("div", "pabaops-global-ai__greeting", undefined);
    greeting.setAttribute("role", "status");
    greeting.setAttribute("aria-live", "polite");
    const greetingClose = createElement("button", "pabaops-global-ai__greeting-close", "×");
    greetingClose.type = "button";
    greetingClose.setAttribute("aria-label", "Close welcome message");
    const greetingBody = createElement("button", "pabaops-global-ai__greeting-body", undefined);
    greetingBody.type = "button";
    greetingBody.setAttribute("aria-label", "Open PabaOps AI Assistant");
    const greetingImage = createElement("img", "pabaops-global-ai__greeting-image", undefined);
    greetingImage.src = logoUrl;
    greetingImage.alt = "PabaOps assistant";
    const greetingCopy = createElement("span", "pabaops-global-ai__greeting-copy", undefined);
    greetingCopy.append(
      createElement("strong", "", "Hi there! 👋"),
      createElement("span", "", "Ask me anything about Pabasara’s DevOps journey."),
    );
    greetingBody.append(greetingImage, greetingCopy);
    greeting.append(greetingClose, greetingBody);

    const launcher = createElement("button", "pabaops-global-ai__launcher", undefined);
    launcher.type = "button";
    launcher.setAttribute("aria-expanded", "false");
    launcher.setAttribute("aria-controls", "pabaops-global-ai-panel");
    launcher.setAttribute("aria-label", "Open PabaOps AI Assistant");
    launcher.title = "Ask PabaOps AI";
    const launcherImage = createElement("img", "pabaops-global-ai__launcher-image", undefined);
    launcherImage.src = logoUrl;
    launcherImage.alt = "";
    launcher.append(launcherImage, createElement("span", "", "Ask PabaOps AI"));

    const panel = createElement("aside", "pabaops-global-ai__panel", undefined);
    panel.id = "pabaops-global-ai-panel";
    panel.setAttribute("aria-hidden", "true");
    panel.setAttribute("aria-label", "PabaOps AI Assistant");

    const head = createElement("div", "pabaops-global-ai__head", undefined);
    const identity = createElement("div", "pabaops-global-ai__identity", undefined);
    const avatar = createElement("img", "pabaops-global-ai__avatar", undefined);
    avatar.src = logoUrl;
    avatar.alt = "PabaOps AI Assistant";
    const titleWrap = createElement("div", "pabaops-global-ai__title", undefined);
    titleWrap.append(
      createElement("strong", "", "PabaOps AI Assistant"),
      createElement("span", "", "Portfolio guide for recruiters and technical visitors"),
    );
    identity.append(avatar, titleWrap);
    const closeButton = createElement("button", "pabaops-global-ai__close", "×");
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Close AI Assistant");
    head.append(identity, closeButton);

    const status = createElement("div", "pabaops-global-ai__status", undefined);
    status.append(
      createElement("span", "pabaops-global-ai__status-dot", ""),
      createElement("span", "", "Smart portfolio mode active"),
    );

    const prompts = createElement("div", "pabaops-global-ai__prompts", undefined);
    prompts.setAttribute("aria-label", "Suggested questions");
    const messageList = createElement("div", "pabaops-global-ai__messages", undefined);
    messageList.setAttribute("aria-live", "polite");

    const compose = createElement("div", "pabaops-global-ai__compose", undefined);
    const inputWrap = createElement("div", "pabaops-global-ai__input-wrap", undefined);
    const input = createElement("textarea", "pabaops-global-ai__input", undefined);
    input.rows = 1;
    input.maxLength = 700;
    input.placeholder = "Ask about skills, projects, Linux, cloud, SRE, or support...";
    const sendButton = createElement("button", "pabaops-global-ai__send", "➤");
    sendButton.type = "button";
    sendButton.disabled = true;
    sendButton.setAttribute("aria-label", "Send question");
    inputWrap.append(input, sendButton);
    compose.append(
      inputWrap,
      createElement(
        "div",
        "pabaops-global-ai__note",
        "AI responses are portfolio guidance and may occasionally be incomplete.",
      ),
    );

    panel.append(head, status, prompts, messageList, compose);
    root.append(greeting, launcher, panel);
    document.body.append(root);

    const scrollMessages = () => {
      window.requestAnimationFrame(() => {
        messageList.scrollTop = messageList.scrollHeight;
      });
    };

    const renderMessages = () => {
      messageList.replaceChildren();
      messages.forEach((message) => {
        messageList.append(
          createElement(
            "div",
            `pabaops-global-ai__message pabaops-global-ai__message--${message.role}`,
            message.content,
          ),
        );
      });

      if (loading) {
        const typing = createElement(
          "div",
          "pabaops-global-ai__message pabaops-global-ai__message--assistant",
          undefined,
        );
        const dots = createElement("span", "pabaops-global-ai__typing", undefined);
        dots.setAttribute("aria-label", "AI is typing");
        dots.append(createElement("i"), createElement("i"), createElement("i"));
        typing.append(dots);
        messageList.append(typing);
      }

      scrollMessages();
    };

    const setOpen = (nextOpen) => {
      isOpen = nextOpen;
      panel.classList.toggle("is-open", isOpen);
      launcher.classList.toggle("is-open", isOpen);
      launcher.setAttribute("aria-expanded", String(isOpen));
      launcher.setAttribute(
        "aria-label",
        isOpen ? "Close PabaOps AI Assistant" : "Open PabaOps AI Assistant",
      );
      panel.setAttribute("aria-hidden", String(!isOpen));
      greeting.classList.remove("is-visible");
      if (isOpen) {
        window.setTimeout(() => input.focus(), 180);
        scrollMessages();
      }
    };

    const sendMessage = async (promptText = input.value) => {
      const question = promptText.trim();
      if (!question || loading) return;

      messages = [...messages, { role: "user", content: question }];
      input.value = "";
      sendButton.disabled = true;
      loading = true;
      renderMessages();

      try {
        const apiUrl = window.PABAOPS_AI_API_URL || "";
        let answer = "";

        if (apiUrl) {
          const response = await window.fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              message: question,
              history: messages.slice(-10),
              page: { title: document.title, url: window.location.href },
            }),
          });

          if (!response.ok) throw new Error(`AI request failed with status ${response.status}`);
          const data = await response.json();
          answer = data.answer?.trim() || "";
          if (!answer) throw new Error("The AI service returned an empty answer.");
        } else {
          await new Promise((resolve) => window.setTimeout(resolve, 420));
          answer = getLocalAIResponse(question);
        }

        messages = [...messages, { role: "assistant", content: answer }];
      } catch (error) {
        console.error("PabaOps global AI Assistant error:", error);
        messages = [
          ...messages,
          {
            role: "assistant",
            content: `${getLocalAIResponse(question)} The live AI service is temporarily unavailable, so I answered using the portfolio’s built-in knowledge.`,
          },
        ];
      } finally {
        loading = false;
        saveMessages(messages);
        renderMessages();
      }
    };

    quickPrompts.forEach((prompt) => {
      const button = createElement("button", "pabaops-global-ai__prompt", prompt);
      button.type = "button";
      button.addEventListener("click", () => sendMessage(prompt));
      prompts.append(button);
    });

    launcher.addEventListener("click", () => setOpen(!isOpen));
    closeButton.addEventListener("click", () => setOpen(false));
    greetingBody.addEventListener("click", () => setOpen(true));
    greetingClose.addEventListener("click", () => greeting.classList.remove("is-visible"));
    input.addEventListener("input", () => {
      sendButton.disabled = !input.value.trim() || loading;
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    });
    sendButton.addEventListener("click", () => sendMessage());
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen) setOpen(false);
    });

    renderMessages();

    const mobile = window.matchMedia("(max-width: 720px), (hover: none), (pointer: coarse)").matches;
    let greetingAlreadyShown = false;
    try {
      greetingAlreadyShown = window.sessionStorage.getItem(GREETING_KEY) === "1";
    } catch {
      greetingAlreadyShown = false;
    }

    if (!mobile && !greetingAlreadyShown) {
      window.setTimeout(() => greeting.classList.add("is-visible"), 900);
      window.setTimeout(() => greeting.classList.remove("is-visible"), 7800);
      try {
        window.sessionStorage.setItem(GREETING_KEY, "1");
      } catch {
        // Ignore storage errors.
      }
    }

    window.PabaOpsAI = Object.freeze({
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen(!isOpen),
      ask: (question) => {
        setOpen(true);
        sendMessage(String(question || ""));
      },
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
