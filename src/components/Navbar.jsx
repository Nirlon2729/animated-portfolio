import { useState } from "react";
import "../css/Navbar.css";
// import resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <div className={`nav-card ${open ? "open" : ""}`}>

      <div className="nav-header">

        <h2>Nirlon</h2>

        <button
          type="button"
          className="toggle-btn"
          aria-label="Toggle Navigation Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "•••"}
        </button>

      </div>

      <div className={`dropdown-wrapper ${open ? "show" : ""}`}>

        <div className="nav-links">

          <button type="button" onClick={() => scrollTo("hero")}>
            Home
          </button>

          <button type="button" onClick={() => scrollTo("self")}>
            Developer
          </button>

          <button type="button" onClick={() => scrollTo("skills")}>
            Skills
          </button>

          <button type="button" onClick={() => scrollTo("projects")}>
            Projects
          </button>

          <button type="button" onClick={() => scrollTo("about_me")}>
            About Me
          </button>

          <button type="button" onClick={() => scrollTo("contact")}>
            Contact
          </button>

        </div>
<Link
            to="/resume"
            className="resume-btn"
            onClick={() => setOpen(false)}
          >
            Resume ↗
          </Link>
        <div className="dropdown-intro">

          <span className="dropdown-tag">
            WELCOME TO MY PORTFOLIO
          </span>

          <h3>
            Crafting Modern
            Digital Experiences
          </h3>

          <p>
            Full Stack Developer focused on
            scalable applications, premium
            interfaces, and immersive web
            experiences.
          </p>
          <Link
            to="/resume"
            className="resume-bt"
            onClick={() => setOpen(false)}
          >
            View Resume ↗
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Navbar;