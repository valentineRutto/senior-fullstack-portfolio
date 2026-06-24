import React, { useEffect, useState } from "react";
import { ArrowRight, Braces, Cloud, Layers3, Menu, X } from "lucide-react";
import { ArrowLink } from "./components/ArrowLink.jsx";
import { SystemDiagram } from "./components/SystemDiagram.jsx";
import { experience, expertise, projects, writing } from "./data.js";

const navItems = [
  ["Work", "#work"],
  ["Expertise", "#expertise"],
  ["About", "#about"],
  ["Writing", "#writing"],
];

function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() => window.location.hash || "#top");

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  useEffect(() => {
    const sectionHashes = ["#top", ...navItems.map(([, href]) => href), "#contact"];
    const sections = sectionHashes
      .map((hash) => document.querySelector(hash))
      .filter(Boolean);
    const initialHash = sectionHashes.includes(window.location.hash)
      ? window.location.hash
      : "#top";

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleSection) return;

        const nextHash = `#${visibleSection.target.id}`;
        setActiveHash(nextHash);
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}${nextHash}`,
        );
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.1, 0.5] },
    );

    let secondFrame;
    const firstFrame = window.requestAnimationFrame(() => {
      document.querySelector(initialHash)?.scrollIntoView();
      setActiveHash(initialHash);

      secondFrame = window.requestAnimationFrame(() => {
        sections.forEach((section) => observer.observe(section));
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label="Valentine Rutto, home">VR</a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Toggle navigation</span>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"}>
        {navItems.map(([label, href]) => (
          <a
            className={activeHash === href ? "is-active" : ""}
            key={href}
            href={href}
            aria-current={activeHash === href ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <ArrowLink
        className={`contact-nav${activeHash === "#contact" ? " is-active" : ""}`}
        href="#contact"
      >
        Contact
      </ArrowLink>
    </header>
  );
}

function SectionHeading({ id, children, aside }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{children}</h2>
      {aside}
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">I design and build dependable software systems.</h1>
            <p>
              Senior full-stack engineer turning ambiguous product problems into
              resilient platforms—from first principles to production.
            </p>
            <div className="hero-actions">
              <ArrowLink className="primary-action" href="#work">View selected work</ArrowLink>
              <ArrowLink href="#about">Read my approach</ArrowLink>
            </div>
          </div>
          <SystemDiagram />
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <SectionHeading
            id="work-heading"
            aside={<ArrowLink href="#contact">Discuss a project</ArrowLink>}
          >
            Selected Work
          </SectionHeading>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <span className="project-number mono">{project.number}</span>
                <div className="project-summary">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="project-outcome">{project.outcome}</p>
                </div>
                <div className="project-meta mono">
                  <div><span>Stack</span>{project.stack}</div>
                  <div><span>Role</span>{project.role}</div>
                </div>
                <time className="project-period mono">{project.period}</time>
                <ArrowRight className="project-arrow" aria-hidden="true" size={24} strokeWidth={1.3} />
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="expertise" aria-labelledby="expertise-heading">
          <SectionHeading id="expertise-heading">Expertise</SectionHeading>
          <div className="expertise-grid">
            {expertise.map((group, index) => {
              const Icon = [Braces, Layers3, Cloud][index];
              return (
                <article className="expertise-column" key={group.title}>
                  <h3><Icon aria-hidden="true" size={23} strokeWidth={1.5} />{group.title}</h3>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section experience-section" id="about" aria-labelledby="experience-heading">
          <SectionHeading id="experience-heading">Experience</SectionHeading>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-row" key={item.period}>
                <time className="mono">{item.period}</time>
                <div className="timeline-marker" aria-hidden="true">
                  <i className={index === experience.length - 1 ? "green" : ""} />
                </div>
                <div className="experience-role">
                  <h3 className="mono">{item.role}</h3>
                  <span className="mono">{item.team}</span>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section writing-section" id="writing" aria-labelledby="writing-heading">
          <SectionHeading
            id="writing-heading"
            aside={<ArrowLink href="mailto:hello@valentinerutto.dev?subject=Writing">Suggest a topic</ArrowLink>}
          >
            Writing
          </SectionHeading>
          <div className="writing-list">
            {writing.map(([date, title, category, length]) => (
              <a href={`mailto:hello@valentinerutto.dev?subject=${encodeURIComponent(title)}`} className="writing-row" key={title}>
                <time className="mono">{date}</time>
                <strong>{title}</strong>
                <span className="mono">{category}</span>
                <span className="mono">{length} read</span>
                <ArrowRight aria-hidden="true" size={19} strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-primary">
          <h2>Let&apos;s build something dependable.</h2>
          <ArrowLink href="mailto:hello@valentinerutto.dev">hello@valentinerutto.dev</ArrowLink>
        </div>
        <div className="footer-column">
          <h3>Location</h3>
          <p className="mono">Nairobi / Worldwide<br />UTC +3</p>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <ArrowLink external href="https://github.com/valentineRutto">GitHub</ArrowLink>
          <ArrowLink external href="https://www.linkedin.com">LinkedIn</ArrowLink>
          <ArrowLink href="mailto:hello@valentinerutto.dev">Email</ArrowLink>
        </div>
        <div className="footer-column">
          <h3>Elsewhere</h3>
          <ArrowLink href="#writing">Writing</ArrowLink>
          <ArrowLink href="#work">Selected work</ArrowLink>
        </div>
        <div className="footer-bottom mono">
          <span>© {new Date().getFullYear()} Valentine Rutto.</span>
          <span>Built with care. Deployed with discipline.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
