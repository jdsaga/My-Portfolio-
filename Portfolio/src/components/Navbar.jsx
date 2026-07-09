import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#aboutme" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust 50 to control how "deep" before it appears
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <div className={`navbar-side-line left ${scrolled ? "scrolled" : ""}`}></div>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="nav-link-bracket">
                {link.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`navbar-side-line right ${scrolled ? "scrolled" : ""}`}></div>
    </div>
  );
}

export default Navbar;