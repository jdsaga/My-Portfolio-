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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Consider a section "active" once its top passes a bit below the navbar
          if (rect.top <= 150) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount in case page loads mid-scroll
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
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`nav-link-bracket ${isActive ? "active" : ""}`}
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={`navbar-side-line right ${scrolled ? "scrolled" : ""}`}></div>
    </div>
  );
}

export default Navbar;