import { useState } from "react";

const navLinks = ["Home", "Skills", "Projects", "Contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">Your Name</a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;