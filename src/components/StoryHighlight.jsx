import { useEffect } from "react";
import "../css/StoryHighlight.css";

function StoryHighlight() {
  const storyText =
    "I create exceptional digital experiences through modern web development, combining elegant design, optimized performance, and scalable architecture. From interactive frontends to powerful backend systems, I build solutions that are fast, scalable, and built for real-world impact.";

  const words = storyText.split(" ");

  useEffect(() => {
    const wordElements = document.querySelectorAll(".word");
    const section = document.querySelector(".story-wrapper");
    if (!section || wordElements.length === 0) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();

      const total =
        section.offsetHeight -
        window.innerHeight;
      
      if (total <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / total, 0),
        1
      );

      const activeWords = Math.floor(
        progress * wordElements.length
      );

      wordElements.forEach((word, index) => {
        if (index <= activeWords) {
          word.classList.add("active");
        } else {
          word.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="story" className="story-wrapper">
        <div className="story-sticky">
          <h2 className="story-text">
            {words.map((word, index) => (
              /* eslint-disable-next-line react-doctor/no-array-index-as-key */
              <span key={index} className="word">
                {word}{" "}
              </span>
            ))}
          </h2>
        </div>
      </section>
    </>
  );
}

export default StoryHighlight;