import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoryHighlight from "./components/StoryHighlight";
import Tech from "./components/Tech";
import Project from "./components/Projectpage";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BioData from "./components/biodata";
import CertificatePage from "./components/CertificatePage";
import ChatBot from "./components/Chatbot";
import Loader from "./components/Loader";
import Resume from "./components/Resume";

/* ==========================================================
   SCROLL TO TOP / HASH
========================================================== */

function ScrollToHash({ loading, lenis }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (loading) return;

    requestAnimationFrame(() => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        if (lenis.current) {
          lenis.current.scrollTo(0, {
            immediate: true,
          });
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
  }, [pathname, hash, loading, lenis]);

  return null;
}

/* ==========================================================
   HOME PAGE
========================================================== */

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StoryHighlight />
      <Tech />
      <Project />
      <About />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}

/* ==========================================================
   APP CONTENT
========================================================== */

function AppContent() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  const lenis = useRef(null);

  /* Initialize Lenis only once */

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.08,
      autoRaf: false,
    });

    let frame;

    const raf = (time) => {
      lenis.current?.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.current?.destroy();
    };
  }, []);

  /* Show Loader on every route change */

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
  <>
    {loading && <Loader />}

    <div className={loading ? "app-loading" : "app-loaded"}>
      <ScrollToHash loading={loading} lenis={lenis} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/biodata" element={<BioData />} />

        <Route
          path="/CertificatePage"
          element={<CertificatePage />}
        />

        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  </>
);
}

/* ==========================================================
   APP
========================================================== */

function App() {
  return <AppContent />;
}

export default App;