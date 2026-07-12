import { useEffect } from "react";

const BRAND_IMAGE = `${import.meta.env.BASE_URL}pabaops-logo.png`;
const HERO_IMAGE = `${import.meta.env.BASE_URL}pabaops-hero.png`;
const K8S_LOGO = `${import.meta.env.BASE_URL}k8s-logo.svg`;
const RESUME_FILE = `${import.meta.env.BASE_URL}Pabasara_Resume.pdf`;
const GITHUB_PROFILE = "https://github.com/PabasaraMeegahakumbura";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/pabasara-meegahakumbura/";

export default function App() {
  const impactStats = [
    { label: "Primary Focus", value: "DevOps + SRE + Platform" },
    { label: "Core Stack", value: "Kubernetes + Terraform Automation" },
    { label: "Cloud & Edge", value: "AWS / GCP / Azure / Cloudflare" },
    { label: "Languages & OS", value: "Python + Linux + DB Ops" },
  ];

  const quickChips = [
    "AWS",
    "GCP",
    "Azure",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Linux",
    "Python",
    "CI/CD",
    "Prometheus",
    "Grafana",
    "Datadog",
    "Cloudflare",
    "WAF",
    "MongoDB",
    "Jira",
  ];

  const toolIcons = [
    { icon: "☁️", name: "Cloud" },
    { image: K8S_LOGO, name: "Kubernetes" },
    { icon: "🐳", name: "Docker" },
    { icon: "⚙️", name: "CI/CD" },
    { icon: "📊", name: "Monitoring" },
    { icon: "🔐", name: "Security" },
    { icon: "🐧", name: "Linux" },
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
    { title: "Containers & Platform", items: ["Kubernetes", "Docker", "Linux", "WHM/cPanel"] },
    { title: "CI/CD & Automation", items: ["GitLab CI", "Jenkins", "Terraform", "Python", "Bash"] },
    { title: "Observability", items: ["Prometheus", "Grafana", "Datadog", "ELK/EFK", "UptimeRobot"] },
    { title: "Security", items: ["WAF", "Vault", "Consul", "IAM/RBAC", "CrowdStrike Admin"] },
    { title: "Databases & Ops Tools", items: ["MongoDB", "MySQL", "Jira", "Zoho"] },
  ];

  const featuredProjects = [
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

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min((index % 8) * 80, 480)}ms`;
      observer.observe(el);
    });

    const ring = document.querySelector(".cursor-ring");
    const dot = document.querySelector(".cursor-dot");
    const interactive = document.querySelectorAll(
      "a, .tool-tile, .strip-card, .flip-card, .project-card, .hero-brand-art, .mini-btn, .brand-img"
    );

    const moveCursor = (e) => {
      if (ring) {
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      }
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };

    const activateCursor = () => ring && ring.classList.add("cursor-active");
    const deactivateCursor = () => ring && ring.classList.remove("cursor-active");

    window.addEventListener("mousemove", moveCursor);
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", activateCursor);
      el.addEventListener("mouseleave", deactivateCursor);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", moveCursor);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", activateCursor);
        el.removeEventListener("mouseleave", deactivateCursor);
      });
    };
  }, []);

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
          grid-template-columns: repeat(4, 1fr);
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
          grid-template-columns: repeat(8, 1fr);
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
}

/* Very small phones */
@media (max-width: 420px) {
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
      `}</style>

      <div className="cursor-ring"></div>
      <div className="cursor-dot"></div>

      <div className="site">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="glow g3"></div>

        <header className="topbar">
          <div className="container nav-wrap">
            <div className="brand">
              <img src={BRAND_IMAGE} alt="PabaOps logo" className="brand-img" />
              <div className="brand-copy">
                <strong>PabaOps</strong>
                <span>Cloud • DevOps • Platform</span>
              </div>
            </div>
            <nav className="nav">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
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
                <img src={HERO_IMAGE} alt="PabaOps visual" className="hero-brand-art" />

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
                    <img src={tool.image} alt={tool.name} className="tool-icon-img" />
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
                      {project.image ? <img src={project.image} alt={project.title} /> : project.icon}
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
                        {item.image ? <img src={item.image} alt={item.title} /> : item.icon}
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
        </main>

        <footer className="container footer">
          <div className="footer-links">
            <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">GitHub</a>
            <a className="mini-btn" href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="mini-btn" href="mailto:prpabasara512@gmail.com">Email</a>
            <a className="mini-btn" href={RESUME_FILE} target="_blank" rel="noreferrer">Resume</a>
          </div>
          <div style={{ marginTop: 16 }}>© PabaOps • Pabasara Meegahakumbura</div>
        </footer>
      </div>
    </>
  );
}
