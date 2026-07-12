import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiDeviantart, SiArtstation, SiInstagram, SiTiktok, SiItchdotio } from "react-icons/si";
import BubblesBackground from "./components/BubbleBackground.jsx";
import profilePic from "./assets/jdd.png";
import Works from "./components/Works.jsx";
import TypingText from "./components/TypingText.jsx";
import emailjs from "@emailjs/browser";
import { MdChevronRight } from "react-icons/md";

const socials = [
  { name: "GitHub", url: "https://github.com/your-username", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username", icon: <FaLinkedin /> },
  { name: "DeviantArt", url: "https://www.deviantart.com/your-username", icon: <SiDeviantart /> },
  { name: "ArtStation", url: "https://www.artstation.com/your-username", icon: <SiArtstation /> },
  { name: "Instagram", url: "https://www.instagram.com/your-username", icon: <SiInstagram /> },
  { name: "TikTok", url: "https://www.tiktok.com/@your-username", icon: <SiTiktok /> },
];

const skillCategories = [
  {
    name: "Front End",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Graphics & Design",
    skills: ["Krita", "Figma", "Aseprite", "Canvas", "UI/UX Design", "Icon Design", "Illustration", "Pixel Art", "Blender"],
  },
  {
    name: "Game Development",
    skills: ["Godot", "Unity", "2D Platformer", "Top-Down", "Game Design", "Level Degin", "Unity", "Character Design", "3D Game Design"],
  },
  {
    name: "AI Tools",
    skills: ["ChatGPT", "Claude", "Deepseek", "NoteGPT", "Gemini"],
  },
  {
    name: "Database",
    skills: ["MySQL", "MongoDB"],
  }

];

const contactRows = [ 
  { name: "GitHub", value: "https://github.com/jdsaga", href: "https://github.com/jdsaga", icon: <FaGithub /> },
  { name: "LinkedIn", value: "linkedin.com/in/your-username", href: "https://linkedin.com/in/your-username", icon: <FaLinkedin /> },
  { name: "DeviantArt", value: "deviantart.com/your-username", href: "https://www.deviantart.com/your-username", icon: <SiDeviantart /> },
  { name: "ArtStation", value: "artstation.com/your-username", href: "https://www.artstation.com/your-username", icon: <SiArtstation /> },
  { name: "Instagram", value: "https://www.instagram.com/jeideru_art/", href: "https://www.instagram.com/jeideru_art/", icon: <SiInstagram /> },
  { name: "TikTok", value: "https://www.tiktok.com/@jeideru_arts", href: "https://www.tiktok.com/@jeideru_arts", icon: <SiTiktok /> },
];

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ---- Contact form state ----
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_4siau6d",
        "template_eu7zrzg",
        formData,
        "i5JYwRd9azLMAx-WX"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="app">
      <BubblesBackground />
      <section id="home" className="intro">
        <div className="intro-text">
        <p className="intro-first_line">HELLO, I'M</p>
        <h1 className="user-name">John Dale V. Sagayno</h1>
        <p className="intro-role">
          I am into{" "}
          <TypingText
            words={["Front-End Development", "Game Development", "Digital Art"]}
            speed={60}
            deleteSpeed={35}
            pause={1200}
          />
        </p>
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
            I'm John Dale V. Sagayno, a soon-to-be graduate of Cavite State University – Silang Campus, 
            currently finishing my degree while pursuing my passion for creating clean, functional front-end 
            and game experiences. I specialize in front-end development and game development, where I enjoy 
            transforming ideas into interactive, user-friendly interfaces and engaging gameplay using tools 
            like React, JavaScript, and various game engines. Outside of coding, I'm also a digital artist, 
            working on illustrations and pixel art in my spare time. This combination of technical ability 
            and creative expression influences how I approach every project, balancing both functionality 
            and visual polish. I'm looking forward to starting my professional career and bringing this blend 
            of logic and creativity into real-world development work.
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title"><span>Skills</span></h2>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="skill-category">
              <h3 className="skill-category-title">{cat.name}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Works />

      <section id="contact" className="contact">
        <h2 className="section-title"><span>Contact Me</span></h2>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-image">
              <img src={profilePic} alt="John Dale V. Sagayno" />
            </div>
            <h3 className="contact-card-name">John Dale V. Sagayno</h3>
            <p className="contact-card-role">Web and Game Developer</p>
            <p className="contact-card-bio">
              I'm always open to freelance work, collabs, or just a friendly hello.
              Reach out anytime.
            </p>
            <div className="contact-plain-info">
  <p><strong>Email:</strong> jd.sagai30@gmail.com</p>
  <p><strong>Phone:</strong> +63 975 228 1847</p>
</div>

            <div className="contact-info-list">
              {contactRows
                .filter((row) => row.name !== "Email" && row.name !== "Phone")
                .map((row) => (
                  <a
                    key={row.name}
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row"
                  >
                    <span className="contact-row-icon">{row.icon}</span>
                    <span className="contact-row-text">
                      <span className="contact-row-label">{row.name}</span>
                      <span className="contact-row-value">{row.value}</span>
                    </span>
                    <span className="contact-row-arrow"><MdChevronRight /></span>
                  </a>
                ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="form-status success">Message sent!</p>}
            {status === "error" && <p className="form-status error">Something went wrong. Try again.</p>}
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Jeideru. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;