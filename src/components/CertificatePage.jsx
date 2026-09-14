import "../css/certificatepage.css";
import { useNavigate } from "react-router-dom";
import cert1 from "../assets/image/certi/Coursera1.jpg";
import cert2 from "../assets/image/certi/Coursera2.jpg";
import cert3 from "../assets/image/certi/certi_1.png";
import cert4 from "../assets/image/certi/certi_2.png";
import cert5 from "../assets/image/certi/certi_3.png";
const certi1 = "/certificates/ibm_1.png";
const certi2 = "/certificates/ibm_2.png";
const certificates = [
    {
        id: "01",
        title: "Career Management Essentials",
        issuer: "IBM",
        date: "September 2026",
        image: certi1,
        link: "https://www.credly.com/badges/ee8e0d69-e688-45a2-aa44-a9788fd020b0",
        description:
            "IBM SkillsBuild – Career Management Essentials: Completed a professional development program focused on career planning, professional branding, workplace readiness, and strategies for long-term career growth.",
        skills: [
            "Career Development",
            "Career Management",
            "Networking Skills",
            "Communication Skills",
            "Professional Online Brand Development",
            "Workplace Research"
        ]
    },
    {
        id: "02",
        title: "Python Basics: Selection and Iteration",
        issuer: "Coursera",
        date: "January 2025",
        image: certi2,
        link: "https://www.credly.com/badges/ee8e0d69-e688-45a2-aa44-a9788fd020b0",
        description:
            "Successfully completed a comprehensive course focused on Python fundamentals, decision making, loops, iterative programming and problem-solving techniques. Built a strong foundation in computational thinking and algorithmic design.",
        skills: [
            "Python",
            "Programming Logic",
            "Loops",
            "Conditionals",
            "Problem Solving"
        ]
    },
    {
        id: "03",
        title: "Python Basics: Selection and Iteration",
        issuer: "Coursera",
        date: "January 2025",
        image: cert1,
        link: "",
        description:
            "Successfully completed a comprehensive course focused on Python fundamentals, decision making, loops, iterative programming and problem-solving techniques. Built a strong foundation in computational thinking and algorithmic design.",
        skills: [
            "Python",
            "Programming Logic",
            "Loops",
            "Conditionals",
            "Problem Solving"
        ]
    },

    {
        id: "04",
        title: "Python Structures: Lists, Strings & Files",
        issuer: "Coursera",
        date: "January 2025",
        image: cert2,
        link: "",
        description:
            "Learned essential Python data structures and file handling concepts. Developed practical skills for working with strings, lists, text processing and real-world data management tasks.",
        skills: [
            "Lists",
            "Strings",
            "File Handling",
            "Python",
            "Data Processing"
        ]
    },

    {
        id: "05",
        title: "Computer Concepts Course (CCC)",
        issuer: "JanKalyan Computer Saksharta Mission",
        date: "July 2023",
        image: cert3,
        link: "",
        description:
            "Successfully completed the Certificate Course in Computer Concepts (CCC), gaining a strong foundation in computer operations, digital literacy, office productivity tools, and internet technologies. The program focused on practical computer usage required in academic, professional, and everyday digital environments.",

        highlights: [
            "Learned computer fundamentals and operating systems",
            "Worked with MS Word, Excel and PowerPoint",
            "Developed internet browsing and email communication skills",
            "Understood digital security and safe online practices",
            // "Improved productivity through office applications",
            "Built a strong foundation for further technical learning"
        ],

        skills: [
            "MS Office",
            "Internet",
            "Computer Fundamentals",
            "Digital Literacy",
            "Email Communication",
            "Operating Systems"
        ]
    },

    {
        id: "06",
        title: "Programming in C",
        issuer: "JanKalyan Computer Saksharta Mission",
        date: "July 2023",
        image: cert4,
        link: "",
        description:
            "Completed a comprehensive introductory programming course in C language, focusing on structured programming, logical thinking, and problem-solving. The course provided hands-on experience in writing, debugging, and optimizing programs while developing a strong understanding of core programming concepts.",

        highlights: [
            "Built strong programming fundamentals",
            "Implemented conditional and looping statements",
            "Worked with arrays, functions and operators",
            "Learned algorithmic thinking and problem solving",
            // "Practiced debugging and code optimization",
            // "Developed logical reasoning for software development"
        ],

        skills: [
            "C Programming",
            "Functions",
            "Arrays",
            "Control Structures",
            "Problem Solving",
            "Logic Building"
        ]
    },

    {
        id: "07",
        title: "Kaushal Nidhi E-Shiksha Yojana",
        issuer: "NIED Foundation",
        date: "July 2023",
        image: cert5,
        link: "",
        description:
            "Completed a skill development initiative focused on digital literacy, computer operations and foundational technical knowledge, earning Grade A certification.",
        skills: [
            "Digital Skills",
            "Computer Operations",
            "Technical Fundamentals"
        ]
    }
];

function CertificatePage() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/#ftitle");
    };
    return (
        <section className="certPremium">
            <button
                type="button"
                className="bioBackBtn"
                onClick={handleBack}
            >
                ← Back
            </button>
            <div className="certHero">

                <span className="certSubTitle">
                    LEARNING JOURNEY
                </span>

                <h1>
                    Certifications &
                    <br />
                    Professional Growth
                </h1>

                <p>
                    Every certificate represents a milestone in my journey
                    as a developer. These achievements showcase my
                    commitment to continuous learning, technical growth,
                    and professional excellence.
                </p>

            </div>

            <div className="certStats">



            </div>

            <div className="certContainer">

                {certificates.map((cert, index) => (

                    <div
                        key={cert.id}
                        className={`certShowcase ${index % 2 !== 0 ? "reverse" : ""
                            }`}
                    >

                        <div className="certDetails">

                            <div className="certId">
                                {cert.id}
                            </div>

                            <span className="certIssuer">
                                {cert.issuer}
                            </span>

                            <h2>{cert.title}</h2>

                            <p>{cert.description}</p>

                            <div className="certMeta">
                                <span> {cert.date}</span>
                                <span>🏆 Certified</span>
                            </div>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certVerifyBtn"
                                >
                                🔗 View Credential / Verfy Certificate 
                                </a>
                            )}
                            <div className="certHighlights">
                                {cert.highlights?.map((item) => (
                                    <div key={item} className="certHighlight">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>
                            <div className="certSkills">
                                {cert.skills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="certPreview">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                fetchPriority="high"
                            />
                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default CertificatePage;