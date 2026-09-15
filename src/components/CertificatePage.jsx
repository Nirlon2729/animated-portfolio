import "../css/certificatepage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const cert1 = "/certificates/Coursera1.jpg";
const cert2 = "/certificates/Coursera2.jpg";
const cert3 = "/certificates/certi_1.png";
const cert4 = "/certificates/certi_2.png";
const cert5 = "/certificates/certi_3.png";
const certi1 = "/certificates/ibm_1.png";
const certi2 = "/certificates/ibm_2.png";
const certi3 = "/certificates/ibm_3.jpg";

const qr1 = "/certificates/ibm_qr_1.jpeg";
const qr2 = "/certificates/ibm_qr_2.jpeg";
const ibm_qr3 = "/certificates/ibm_qr_3.jpeg";
const qr3 = "/certificates/qr_3.png";
const qr4 = "/certificates/qr_4.png";
const qr7 = "/certificates/qr_7.png";
const certificates = [
    {
        id: "01",
        title: "Career Management Essentials",
        issuer: "IBM",
        date: "September 2026",
        image: certi1,
        qr: qr1,
        link: "https://www.credly.com/badges/ee8e0d69-e688-45a2-aa44-a9788fd020b0/public_url",
        description:
            "This credential earner demonstrates a thorough understanding of the resume creation and interview process. The individual knows how to research workplaces, build a professional social network brand, identify their skills, create a standout resume to bypass application tracking systems, and prepare for interviews. The earner has practiced using Al tools to enhance a resume and tailor it for different job roles.",
        skills: [
            "Career Development",
            "Career Management",
            "Communication Skills",
            "Workplace Skills",
            "Workplace Research",
            "Generative AI Tool Use",
            "Networking Skills",
            "Presentation Skills",
            "Professional Online Brand Development",
            "Social Media Presence"
        ]
    },
    {
        id: "02",
        title: "AI Fundamentals: Foundations for Understanding AI",
        issuer: "Coursera",
        date: "January 2025",
        image: certi2,
        qr: qr2,
        link: "https://www.credly.com/badges/e93ee3ce-ce12-4bde-bcd3-b434c45222d9/public_url",
        description:
            "This credential earner demonstrates foundational knowledge of artificial intelligence and its core technologies. The individual can explain Al concepts and capabilities, differentiate human learning from and machine learning, and describe types of machine learning, and explain how neural networks and deep learning function. The earner can identify forms of Al, consider Al ethics implications, and use Al tools responsibly to generate and refine solutions.",
        skills: [
            "AI Ethics",
            "AI Forms and Users",
            "AI Prompt Writing",
            "Applications of AI",
            "Artificial Intelligence(AI)",
            "Bias Detection and Mitigation",
            "Computer Vision AI",
            "Critical Thinking",
            "Deep Learning",
            "Genrative AI",
            "Machine Learning",
            "Neural Networks"

        ]
    },
    {
        id: "03",
        title: "Career Management Essentials",
        issuer: "IBM",
        date: "September 2026",
        image: certi3,
        qr: ibm_qr3,
        link: "https://www.credly.com/badges/7532ab72-1fb2-4802-bb54-ed160e9dfbc3/public_url",
        description:
            "This credential earner demonstrates knowledge of cloud computing, including cloud services, deployment models, virtualization, orchestration, and cloud security. The individual is aware of cloud benefits for users and businesses. The individual has a conceptual understanding of how to create a container, deploy a web app to the cloud, and analyze security in a simulated environment. The earner is aware of the job outlook in cloud computing and the skills required for success in various roles.",
        skills: [
            "Cloud Computing",
            "Cloud Infrastructure",
            "Cloud Migration",
            "Containers",
            "Docker",
            "Hybrid Cloud",
            "Infrastructure As A Service (IaaS)",
            "Platform As A Service (PaaS)",
            "Software As A Service (SaaS)",
            "Private Cloud",
            "Public Cloud",
            "Virtualization",
            "Visual Studio Code"
        ]
    },
    {
        id: "04",
        title: "Python Basics: Selection and Iteration",
        issuer: "Coursera",
        date: "January 2025",
        image: cert2,
        qr: qr3,
        link: "https://www.coursera.org/account/accomplishments/verify/H81578NO87OX",
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
        id: "05",
        title: "Python Structures: Lists, Strings & Files",
        issuer: "Coursera",
        date: "January 2025",
        image: cert1,
        qr: qr4,
        link: "https://www.coursera.org/account/accomplishments/verify/L3PAM6HL06NJ",
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
        id: "06",
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
        id: "07",
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
        id: "08",
        title: "Kaushal Nidhi E-Shiksha Yojana",
        issuer: "NIED Foundation",
        date: "July 2023",
        image: cert5,
        qr: qr7,
        link: "https://www.nied.co.in/verify-student?reg_no=NIED2301275506GJ",
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

    const [selectedCertificate, setSelectedCertificate] = useState(null);

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

                            {cert.highlights && cert.highlights.length > 0 && (
                                <div className="certHighlights">
                                    {cert.highlights.map((highlight, hIdx) => (
                                        <div key={hIdx} className="certHighlight">
                                            • {highlight}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className={`certInfo ${cert.qr ? "hasQR" : "noQR"}`}>
                                <div className="certActionGroup">
                                    <div className="certMeta">
                                        <span>{cert.date}</span>
                                        <span>🏆 Certified</span>
                                    </div>

                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certVerifyBtn"
                                        >
                                            🔗 View Credential / Verify Certificate
                                        </a>
                                    )}
                                </div>

                                
                                {cert.qr && (
                                    <div
                                        className="certQR"
                                        onClick={() => setSelectedCertificate(cert)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                setSelectedCertificate(cert);
                                            }
                                        }}
                                    >
                                        <img
                                            src={cert.qr}
                                            alt="Scan to verify certificate"
                                        />

                                        <span>
                                            Scan to Verify
                                            <br />
                                            Certificate
                                        </span>
                                    </div>
                                )}
                              

                            </div>


                            <div className="certSkills">
                                <h4>Skills That I Learned!</h4>

                                <div className="skillsList">
                                    {cert.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
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
            

            {/* QR CODE POPUP */}
            {selectedCertificate && selectedCertificate.qr && (
                <div
                    className="qrModal"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        className="qrModalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="qrModalClose"
                            onClick={() => setSelectedCertificate(null)}
                            aria-label="Close QR code"
                        >
                            ×
                        </button>

                        <img
                            src={selectedCertificate.qr}
                            alt="Certificate verification QR code"
                        />

                        <span>
                            Scan to Verify Certificate
                        </span>
                    </div>
                </div>
            )}

       
        </section>
    );
}

export default CertificatePage;