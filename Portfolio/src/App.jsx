import { useState, useEffect} from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiDeviantart, SiArtstation, SiInstagram, SiTiktok } from "react-icons/si";
import BubblesBackground from "./components/BubbleBackground.jsx";
import profilePic from "./assets/jdd.png";
import Works from "./components/Works.jsx";
import TypingText from "./components/TypingText.jsx";


const socials = [
  { name: "GitHub", url: "https://github.com/your-username", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username", icon: <FaLinkedin /> },
  { name: "DeviantArt", url: "https://www.deviantart.com/your-username", icon: <SiDeviantart /> },
  { name: "ArtStation", url: "https://www.artstation.com/your-username", icon: <SiArtstation /> },
  { name: "Instagram", url: "https://www.instagram.com/your-username", icon: <SiInstagram /> },
  { name: "TikTok", url: "https://www.tiktok.com/@your-username", icon: <SiTiktok /> },
];




function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app">
      <BubblesBackground />
      <section id="home" className="intro">
        <div className="intro-text">
        <p className="intro-first_line">HELLO, I'M</p>
        <TypingText
          text="Front-End & Game Dev"
          secondText="Digital Artist"
          thirdText="John Dale V. Sagayno"
          speed={60}
          pause={1000}
          cursorDuration={2000}
        />
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
            I'm John Dale V. Sagayno, an upcoming fresh graduate from Cavite State University – Silang Campus, 
            currently completing my degree with a passion for building clean, functional web and game experiences. 
            My focus is front-end development and game development, where I enjoy turning ideas into interactive, 
            user-friendly interfaces and engaging gameplay using tools like React, JavaScript, and game engines. Beyond code, 
            I'm also a digital artist, creating illustrations and pixel art in my free time. This blend of technical skill and 
            creative expression shapes how I approach every project with attention to both function and visual detail. I'm excited to 
            start my professional journey and bring this mix of logic and creativity to real-world development work.
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title"><span>Skills</span></h2>
        
      </section>

      <Works />

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