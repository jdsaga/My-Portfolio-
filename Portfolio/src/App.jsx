import { useState } from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Vite", "Git", "Tailwind", "Node.js"
];

const socials = [
  { name: "GitHub", url: "https://github.com/your-username", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username", icon: "in" },
  { name: "Email", url: "mailto:you@example.com", icon: "✉" },
];

const projects = [
  {
    title: "Project One",
    description: "Short description of what this project does and what you built it with.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Short description of what this project does and what you built it with.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Short description of what this project does and what you built it with.",
    link: "#",
  },
];

function App() {
  return (
    <div className="app">
      <section id="home" className="hero">
        <p className="hero-eyebrow">Hi, I'm</p>
        <h1 className="hero-name">John Dale V. Sagayno</h1>
        <h2 className="hero-title">Web and Game Developer</h2>
        <p className="hero-description">
          I build clean, responsive websites and web apps.
          Passionate about crafting simple, functional user experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href="#contact" className="btn btn-secondary">Contact me</a>
        </div>
        <div className="hero-socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View project →</a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Get in touch</h2>
        <p className="contact-text">
          Want to work together or just say hi? Reach out through any of these.
        </p>
        <div className="contact-socials">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="contact-link">
              {s.name}
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;