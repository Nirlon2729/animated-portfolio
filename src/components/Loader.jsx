import { useEffect, useState } from "react";
import "../css/Loader.css";
import { Routes, Route, useLocation } from "react-router-dom";


function AppContent() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const lenis = useRef(null);

  // Lenis (run once)
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

  // Show loader whenever the route changes
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToHash loading={loading} lenis={lenis} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biodata" element={<BioData />} />
        <Route path="/CertificatePage" element={<CertificatePage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}
function Loader() {
  const [progress, setProgress] = useState(0);

  const messages = [
    "Initializing...",
    "Loading Projects...",
    "Loading Experience...",
    "Preparing Interface...",
    "Almost Ready...",
    "Welcome."
  ];

  useEffect(() => {
  let value = 0;

  const interval = setInterval(() => {
    value++;

    if (value >= 100) {
      value = 100;
      clearInterval(interval);
    }

    setProgress(value);
  }, 20); // 100 × 100ms = 10 seconds

  return () => clearInterval(interval);
}, []);

  const currentMessage =
    progress < 20
      ? messages[0]
      : progress < 40
      ? messages[1]
      : progress < 60
      ? messages[2]
      : progress < 85
      ? messages[3]
      : progress < 100
      ? messages[4]
      : messages[5];

  
   return (
  <div className="loader-page">

    <h1 className="loader-loading">
      Loading...
    </h1>

    <div className="loader-progress-wrapper">
      <div
        className="loader-progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>

    <div className="loader-bottom">

      <span className="loader-message">
        {currentMessage}
      </span>

      <span className="loader-percent">
        {progress}%
      </span>

    </div>

  </div>
);

}

export default Loader;