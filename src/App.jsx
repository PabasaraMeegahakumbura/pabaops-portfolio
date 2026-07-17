import { useEffect, useRef, useState } from "react";
import "./styles/app.css";
import {
  AI_API_URL,
  BRAND_IMAGE,
  GITHUB_PROFILE,
  HERO_IMAGE,
  LINKEDIN_PROFILE,
  RESUME_FILE,
} from "./config/site";
import {
  impactStats,
  quickChips,
  toolIcons,
  measurableImpact,
  skillGroups,
  featuredProjects,
  highlightedProjects,
  experience,
  certifications,
  workingNow,
  capabilityAreas,
} from "./data/portfolio";
import { aiQuickPrompts, getLocalAIResponse } from "./data/assistant";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { HighlightedProjectCard, ProjectCard } from "./components/ProjectCards";
import { EmailPlatformCaseStudy } from "./pages/EmailPlatformCaseStudy";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash || "#/");
  const currentRouteRef = useRef(window.location.hash || "#/");
  const portfolioScrollRef = useRef(0);
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
      const previousRoute = currentRouteRef.current;
      const wasPortfolioRoute =
        previousRoute === "#/" || !previousRoute.startsWith("#/");

      if (wasPortfolioRoute && nextRoute.startsWith("#/") && nextRoute !== "#/") {
        portfolioScrollRef.current = window.scrollY;
      }

      currentRouteRef.current = nextRoute;
      setRoute(nextRoute);

      window.setTimeout(() => {
        if (nextRoute === "#/") {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              window.scrollTo({ top: portfolioScrollRef.current, behavior: "auto" });
            });
          });
          return;
        }

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

  const isProjectRoute = route === "#/projects/self-hosted-email-platform";
  const isProjectsRoute = route === "#/projects";
  const isCaseStudiesRoute = route === "#/case-studies";
  const isCapabilitiesRoute = route.startsWith("#/capabilities");
  const capabilitySlug = isCapabilitiesRoute ? route.split("/")[2] : null;
  const selectedCapability = capabilityAreas.find((area) => area.slug === capabilitySlug);

  useEffect(() => {
    const pageTitle = isProjectRoute
      ? "Self-Hosted Email Platform Engineering Lab | PabaOps"
      : isProjectsRoute
        ? "DevOps Projects | PabaOps"
      : isCaseStudiesRoute
        ? "Engineering Case Studies | PabaOps"
      : selectedCapability
        ? `${selectedCapability.title} | PabaOps`
        : "Pabasara Meegahakumbura | DevOps, Cloud & Platform Engineer";

    document.title = pageTitle;
  }, [isCaseStudiesRoute, isProjectRoute, isProjectsRoute, selectedCapability]);

  const goToHome = (event) => {
    event.preventDefault();
    portfolioScrollRef.current = 0;

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


      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="cursor-ring" aria-hidden="true"></div>
      <div className="cursor-dot" aria-hidden="true"></div>

      <div className="site">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="glow g3"></div>

        <SiteHeader onHome={goToHome} />

        <main id="main-content">
          {isProjectRoute ? (
            <EmailPlatformCaseStudy />
          ) : isProjectsRoute ? (
            <ProjectsPage projects={featuredProjects} />
          ) : isCaseStudiesRoute ? (
            <CaseStudiesPage projects={featuredProjects} />
          ) : isCapabilitiesRoute ? (
            <CapabilitiesPage
              capabilities={capabilityAreas}
              selectedCapability={selectedCapability}
            />
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
                Operating reliable cloud, Kubernetes, Linux, hosting and on-premises environments through automation, observability, security-aware controls and production-minded support.
              </p>
              <p className="hero-text">
                I focus on DevOps first, with hands-on work across AWS, GCP, Kubernetes, Helm, containerized microservices, Terraform, CI/CD, Cloudflare, Linux, hosting platforms, VMware and self-hosted services. I also bring Azure testing exposure and practical database operations support.
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
                <img src={HERO_IMAGE} alt="PabaOps cloud and platform engineering illustration" className="hero-brand-art" decoding="async" fetchPriority="high" width="560" height="560" />

                <div className="floating-card f1">
                  <span>Cloud</span>
                  <strong>AWS • GCP • Azure • Cloudflare • WAF</strong>
                </div>
                <div className="floating-card f2">
                  <span>Platform</span>
                  <strong>Kubernetes, Helm, Microservices, Docker, Linux</strong>
                </div>
                <div className="floating-card f3">
                  <span>Observability</span>
                  <strong>Prometheus, Grafana, Datadog, UptimeRobot</strong>
                </div>
                <div className="floating-card f4">
                  <span>Security</span>
                  <strong>Cloudflare WAF, SonicWall, FortiWeb, IAM/RBAC</strong>
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
                I am a DevOps Engineer with hands-on experience across AWS, GCP, Kubernetes, Helm, Dockerized microservices, Terraform, Linux, CI/CD pipelines, Cloudflare, WHM/cPanel, WordPress hosting, VMware and self-hosted services. My recent remote work includes GCP and server operations, GKE, Cloud SQL, Cloud Build and Deploy, monitoring, security controls and server-side support for more than 100 hosted websites.
              </p>
              <p>
                My support background gives me a practical reliability mindset across cloud and on-premises environments. It includes Office 365 mailbox, permission and license administration; Active Directory and LDAP identity support; and networking and security work with SonicWall, FortiWeb, FortiClient, Cloudflare WAF and WireGuard. I also bring Bash and Python exposure plus MongoDB, MySQL and Cloud SQL operational support.
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
              <div className="capabilities-cta-content">
                <h3>Explore detailed technical capabilities</h3>
                <p>Go deeper into the infrastructure, platform, identity, security and operational experience behind the main portfolio.</p>
                <div className="capability-preview-list" aria-label="Explore capabilities by domain">
                  <a href="#/capabilities/cloud-platform">Cloud, Kubernetes &amp; Helm <span aria-hidden="true">→</span></a>
                  <a href="#/capabilities/linux">Linux, VMware &amp; On-Prem <span aria-hidden="true">→</span></a>
                  <a href="#/capabilities/observability-security">Observability &amp; Security <span aria-hidden="true">→</span></a>
                  <a href="#/capabilities/support">Microsoft 365, AD &amp; Support <span aria-hidden="true">→</span></a>
                  <a href="#/capabilities/database-operations">Database Operations <span aria-hidden="true">→</span></a>
                  <a href="#/capabilities/devops-principles">DevOps Principles &amp; Automation <span aria-hidden="true">→</span></a>
                </div>
              </div>
              <a className="mini-btn capability-hub-btn" href="#/capabilities">Open Complete Capability Hub</a>
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
              <div>
                <div className="section-kicker">Selected Work • Hover to focus</div>
                <h2 className="work-section-title">Three projects to review first</h2>
              </div>
            </div>
            <div className="work-grid">
              {highlightedProjects.map((project) => (
                <HighlightedProjectCard project={project} key={`flip-${project.title}`} />
              ))}
            </div>
            <div className="section-actions">
              <a className="mini-btn" href="#/case-studies">View All Selected Work &amp; Case Studies</a>
            </div>
          </section>

          <section id="projects" className="container section reveal">
            <div className="section-head">
              <span>Projects</span>
              <h2>Implementation-focused engineering projects</h2>
            </div>
            <div className="project-grid">
              {highlightedProjects.map((project) => (
                <ProjectCard project={project} key={`project-${project.title}`} />
              ))}
            </div>
            <div className="section-actions">
              <a className="mini-btn" href="#/projects">View All Projects</a>
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

        <SiteFooter />


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
