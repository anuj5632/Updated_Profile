"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Real-time fraud detection",
    type: "AI SYSTEMS",
    description: "Streaming risk signals into explainable decisions with Kafka, Spring Boot and ML services.",
    tags: ["Kafka", "Spring Boot", "MLflow"],
    color: "project-saffron",
    href: "https://github.com/anuj5632/Real-time-fraud-detection",
  },
  {
    number: "02",
    title: "Bitly clone URL shortener",
    type: "BACKEND",
    description: "A fast, resilient URL platform designed around clean APIs, caching and durable storage.",
    tags: ["PostgreSQL", "Redis", "Docker"],
    color: "project-blue",
    href: "https://ubiquitous-hamster-1daabf.netlify.app/",
  },
  {
    number: "03",
    title: "Text-to-video generator",
    type: "AI PRODUCT",
    description: "Turning a single prompt into a narrated video pipeline using modern language and speech models.",
    tags: ["Python", "OpenAI", "Whisper"],
    color: "project-lilac",
    href: "https://github.com/anuj5632/Text-to-Video-generator",
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#top" aria-label="Anuj Chandrakar home">AC<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-availability" href="#contact"><i /> Available for work</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Backend engineer / AI systems builder</p>
          <h1>I build the<br /><em>machinery</em><br />behind ideas.</h1>
          <p className="hero-intro">I&apos;m Anuj Chandrakar, a computer science student focused on APIs, data pipelines and products that make complex systems feel simple.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">See my work <span>↗</span></a>
            <a className="text-link" href="mailto:anujchandrakar@example.com">Let&apos;s talk <span>↗</span></a>
          </div>
        </div>
        <div className="hero-portrait" aria-label="Portrait of Anuj Chandrakar">
          <div className="portrait-frame">
            <Image className="portrait-photo" src="/images/anuj.jpg" alt="Portrait of Anuj Chandrakar" fill priority sizes="(max-width: 700px) 90vw, 390px" onError={(event) => { event.currentTarget.style.display = "none"; }} />
            <div className="portrait-placeholder"><span></span></div>
            <div className="portrait-caption"><span>ANUJ CHANDRAKAR</span><span>01 / 04</span></div>
          </div>
          <div className="portrait-note">Currently based in<br /><strong>Nagpur, India</strong></div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><b>↓</b></div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span><span>Who is Anuj?</span></div>
        <div className="about-grid">
          <h2>Thoughtful systems.<br /><em>Useful outcomes.</em></h2>
          <div className="about-body"><p>I like the space where software meets real-world friction. My work moves between backend architecture, machine learning and the small details that make a product dependable.</p><p>Currently pursuing my B.Tech at Shri Ramdeobaba College of Engineering and Management, I&apos;m learning in public and building for production-minded teams.</p><a className="circle-link" href="mailto:anujchandrakar@example.com" aria-label="Email Anuj">↗</a></div>
        </div>
        <div className="facts">
          <div><strong>8.94</strong><span>CGPA / 10</span></div><div><strong>500+</strong><span>LeetCode problems</span></div><div><strong>03</strong><span>Featured builds</span></div><div><strong>2027</strong><span>Graduating</span></div>
        </div>
      </section>

      <section className="work section shell" id="work">
        <div className="section-label"><span>02</span><span>Selected work</span></div>
        <div className="work-heading"><h2>A few things<br /><em>I&apos;ve shipped.</em></h2><p>Projects are where I test ideas against the real constraints: latency, reliability, clarity and time.</p></div>
        <div className="project-list">
          {projects.map((project, index) => <a className={`project-row ${activeProject === index ? "is-active" : ""}`} href={project.href} target="_blank" rel="noreferrer" key={project.number} onClick={() => setActiveProject(index)}>
            <span className="project-number">{project.number}</span><span className={`project-art ${project.color}`}><b>{index === 0 ? "↗" : index === 1 ? "//" : "✦"}</b></span><span className="project-info"><small>{project.type}</small><strong>{project.title}</strong><span>{project.description}</span><div className="tag-row">{project.tags.map(tag => <i key={tag}>{tag}</i>)}</div></span><span className="project-arrow">↗</span>
          </a>)}
        </div>
      </section>

      <section className="background section shell">
        <div className="section-label"><span>03</span><span>Background</span></div>
        <div className="timeline"><div className="timeline-item"><span>2026</span><div><h3>Product Intern, AI Systems</h3><p>AI Chroney / Remote</p><small>Testing, documenting and shaping workflows for AI-powered products.</small></div></div><div className="timeline-item"><span>2023</span><div><h3>Machine Learning Intern</h3><p>Future Netwings / Remote</p><small>Exploring practical ML systems and the path from model to useful feature.</small></div></div><div className="timeline-item"><span>2023—27</span><div><h3>B.Tech in Computer Science</h3><p>Shri Ramdeobaba College / Nagpur</p><small>Building a broad foundation in software, systems and problem solving.</small></div></div></div>
      </section>

      <section className="contact section shell" id="contact"><div className="section-label"><span>04</span><span>Reach out</span></div><div className="contact-content"><h2>Have a problem<br />worth <em>solving?</em></h2><a className="contact-email" href="mailto:anujchandrakar@example.com">anujchandrakar@example.com <span>↗</span></a><div className="socials"><a href="https://github.com/anuj5632" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/anuj-chandrakar-a070182a1/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/chandrakarab/" target="_blank" rel="noreferrer">LeetCode ↗</a></div></div></section>

      <footer className="footer shell"><span>© 2026 Anuj Chandrakar</span><span>Built with curiosity &amp; care</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
