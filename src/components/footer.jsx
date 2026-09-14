import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="footer">

      <div className="footer-header">

        <span className="footer-tag">
          AVAILABLE FOR FREELANCE & FULL-TIME
        </span>

        <h1 className="footer-title">
          Let's Build
          <br />
          Something Great
          <br />
          Together.
        </h1>

        <p className="footer-description">
          Passionate about building modern web applications,
          intuitive user experiences, and scalable digital
          products that create real impact.
        </p>

        <a
          href="#contact"
          className="footer-btn"
        >
          Start A Conversation
        </a>

      </div>

      <div className="footer-divider"></div>
      <div id="ftitle"><h2>Quick Links</h2></div>
      <div className="footer-links-wrapper">
        <span className="footer-tagline">
          <span>Nirlon Macwan</span> <br />
          Building Scalable Products & Meaningful Digital Experiences.
        </span>
        <div className="footer-group">
          <h3>SOCIAL LINKS</h3>

          <a
            href="https://instagram.com/macwan_nirlon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://facebook.com/nirlon.macwan.27"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.linkedin.com/in/nirlon-macwan"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Nirlon2729"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>


        </div>

        <div className="footer-group">
          <h3>CONTACT</h3>

          <a href="mailto:nirlonmacwan27@gmail.com">
            Email
          </a>

          <a href="https://wa.me/919687007744">
            WhatsApp
          </a>




        </div>

        <div className="footer-group">
          <h3>NAVIGATION</h3>

          {/* <a href="#home">
            Home
          </a>

          <a href="#projects">
            Projects
          </a> */}

          <Link to="/biodata">
            About Myself
          </Link>

          <Link to="/CertificatePage">
            Certificates
          </Link>

          <Link to="/resume">
            Resume
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        <div>
          © 2026 Nirlon Macwan
        </div>

        <div>
          Full Stack Developer
        </div>

      </div>

      <div className="footer-watermark">
        NIRLON
      </div>

    </footer>
  );
}

export default Footer;