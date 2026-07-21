import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaDownload,
    FaArrowLeft,
    FaExternalLinkAlt,
} from "react-icons/fa";
// import profileImage from "../assets/image/resume.png";
import "../css/resume.css";
// import resumePDF from "../assets/resume.pdf";
import resumePDF from "../assets/resume.pdf";





const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PHP",
    "Python",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "REST API",
    "Responsive Design",
];

function Resume() {
    return (
        <main className="resume-page">
            <div className="resume-background-glow resume-glow-one"></div>
            <div className="resume-background-glow resume-glow-two"></div>

            <div className="resume-container">
                {/* Top Navigation */}
                <div className="resume-topbar">
                    <Link to="/" className="resume-back-btn">
                        <FaArrowLeft />
                        <span>Back to Portfolio</span>
                    </Link>

                    <div className="resume-action-buttons">
                        {/* View Resume */}
                        <a
                            href={resumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-view-btn"
                        >
                            <FaExternalLinkAlt />
                            <span>View Resume</span>
                        </a>

                        {/* Download Resume */}
                        <a
                            href={resumePDF}
                            download="Nirlon_Macwan_Resume.pdf"
                            className="resume-download-btn"
                        >
                            <FaDownload />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>

                {/* ================= HERO ================= */}
                <section className="resume-hero">

                    {/* Left Content */}
                    <div className="resume-hero-left">

                        <div className="resume-status">
                            <span className="resume-status-dot"></span>
                            AVAILABLE FOR OPPORTUNITIES
                        </div>

                        <h1 className="resume-name">
                            Nirlon <span>Macwan.</span>
                        </h1>

                        <h2 className="resume-role">
                            Software Developer
                        </h2>

                        <p className="resume-intro">
                            Detail-oriented Software Developer with hands-on experience in
                            designing, developing, testing, and deploying responsive web
                            applications. Passionate about building clean, scalable, and
                            user-focused solutions using modern web technologies while
                            continuously learning and improving.
                        </p>

                        <div className="resume-contact-row">

                            <a href="mailto:nirlonmacwan27@gmail.com">
                                <FaEnvelope />
                                <span>nirlonmacwan27@gmail.com</span>
                            </a>

                            <a href="tel:+919687007744">
                                <FaPhoneAlt />
                                <span>+91 9687007744</span>
                            </a>

                            <div>
                                <FaMapMarkerAlt />
                                <span>Anand, Gujarat, India</span>
                            </div>

                        </div>

                        <div className="resume-socials">

                            <a
                                href="https://github.com/Nirlon2729"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                                <FaExternalLinkAlt className="resume-external-icon" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nirlon-macwan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                                <span>LinkedIn</span>
                                <FaExternalLinkAlt className="resume-external-icon" />
                            </a>

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="resume-image-card">
    <iframe
        src={`${resumePDF}#zoom=page-fit`}
        title="Resume"
        loading="lazy"
        sandbox="allow-same-origin"
    />
</div>

                </section>

                <div className="resume-content-grid">
                    {/* Left Column */}
                    <div className="resume-main-column">
                        {/* Experience / Projects */}
                        <section className="resume-section">
                            <div className="resume-section-heading">
                                <span>01</span>
                                <h3>Featured Projects</h3>
                            </div>

                            <div className="resume-project-card">
                                <div className="resume-project-number">01</div>

                                <div>
                                    <h4>E-Commerce Website</h4>
                                    <span className="resume-project-stack">
                                        PHP • MySQL • HTML • CSS
                                    </span>

                                    <p>
                                        Built a dynamic e-commerce website using PHP, HTML, CSS,
                                        and phpMyAdmin with product management, user
                                        authentication, and admin features.
                                    </p>
                                </div>
                            </div>

                            <div className="resume-project-card">
                                <div className="resume-project-number">02</div>

                                <div>
                                    <h4>E-Commerce Website</h4>
                                    <span className="resume-project-stack">
                                        MongoDB • Express.js • React.js • Node.js
                                    </span>

                                    <p>
                                        Built a full-stack e-commerce application using the MERN
                                        stack with CRUD functionality and a responsive user
                                        interface.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section className="resume-section">
                            <div className="resume-section-heading">
                                <span>02</span>
                                <h3>Education</h3>
                            </div>

                            <div className="resume-timeline">
                                <div className="resume-timeline-item">
                                    <div className="resume-timeline-dot"></div>

                                    <div className="resume-timeline-content">
                                        <span className="resume-date">2026 — 2028</span>

                                        <h4>Master of Computer Applications</h4>

                                        <p>SRKSM College, GTU, Anand</p>

                                        <span className="resume-education-status">
                                            Currently Pursuing
                                        </span>
                                    </div>
                                </div>

                                <div className="resume-timeline-item">
                                    <div className="resume-timeline-dot"></div>

                                    <div className="resume-timeline-content">
                                        <span className="resume-date">Graduated May 2026</span>

                                        <h4>Bachelor of Computer Applications</h4>

                                        <p>NVPAS College, CVM University</p>

                                        <span className="resume-education-status">
                                            CGPA: 7.0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <aside className="resume-side-column">
                        {/* Skills */}
                        <section className="resume-side-card">
                            <div className="resume-section-heading">
                                <span>03</span>
                                <h3>Technical Skills</h3>
                            </div>

                            <div className="resume-skills">
                                {skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </section>

                        {/* Languages */}
                        <section className="resume-side-card">
                            <div className="resume-section-heading">
                                <span>04</span>
                                <h3>Languages</h3>
                            </div>

                            <div className="resume-language-list">
                                <div>
                                    <span>English</span>
                                </div>

                                <div>
                                    <span>Hindi</span>
                                </div>

                                <div>
                                    <span>Gujarati</span>
                                </div>
                            </div>
                        </section>

                        {/* Personal Information */}
                        <section className="resume-side-card">
                            <div className="resume-section-heading">
                                <span>05</span>
                                <h3>Personal Info</h3>
                            </div>

                            <div className="resume-personal-info">
                                <div>
                                    <span>Date of Birth</span>
                                    <strong>27 October 2005</strong>
                                </div>

                                <div>
                                    <span>Nationality</span>
                                    <strong>Indian</strong>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>

                <footer className="resume-footer">
                    <p>
                        Interested in working together?{" "}
                        <Link to="/#contact">Let's connect.</Link>
                    </p>

                    <span>© {new Date().getFullYear()} Nirlon Macwan</span>
                </footer>
            </div>
        </main>
    );
}

export default Resume;