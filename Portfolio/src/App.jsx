import { useState } from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiDeviantart, SiArtstation, SiInstagram, SiTiktok } from "react-icons/si";
import BubblesBackground from "./components/BubbleBackground.jsx";
import profilePic from "./assets/jdd.png";


const socials = [
  { name: "GitHub", url: "https://github.com/your-username", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username", icon: <FaLinkedin /> },
  { name: "DeviantArt", url: "https://www.deviantart.com/your-username", icon: <SiDeviantart /> },
  { name: "ArtStation", url: "https://www.artstation.com/your-username", icon: <SiArtstation /> },
  { name: "Instagram", url: "https://www.instagram.com/your-username", icon: <SiInstagram /> },
  { name: "TikTok", url: "https://www.tiktok.com/@your-username", icon: <SiTiktok /> },
];


function App() {
  return (
    <div className="app">
      <BubblesBackground />
      <section id="home" className="intro">
        <div className="intro-text">
        <p className="intro-first_line">HELLO, I'M</p>
        <h1 className="user-name">John Dale V. Sagayno</h1>
        <h2 className="intro-title">Web and Game Developer</h2>
        <p className="intro-description">
          I build clean, responsive websites and web apps.
          Passionate about crafting simple, functional user experiences.
        </p>

        <div className="intro-buttons">
          <a href="/JD REAL RESUME.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
          </a>
          <a href="#aboutme" className="btn btn-secondary">About Me</a>
        </div>
      </div>

        <div className="intro-image">
          <img src={profilePic} alt="John Dale V. Sagayno" />
        </div>
      </section>

      <section id="aboutme" className="about-me">
        <h2 className="section-title"><span>About Me</span></h2>
        <div className="about-me-content">
          <div className="about-me-image">
            <img src={profilePic} alt="About me" />
          </div>
          <p className="about-me-text">
            I'm a web and game developer with a passion for creating interactive and engaging experiences. I enjoy working with modern web technologies and game engines to bring ideas to life.
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title"><span>Skills</span></h2>
        
      </section>

      <section id="works" className="works">
        <h2 className="section-title"><span>Works</span></h2>
        
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title"><span>Get in touch</span></h2>
        <p className="contact-text">
          Want to work together or just say hi? Reach out through any of these.
        </p>
        <div className="contact-socials">
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
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Jeideru. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;