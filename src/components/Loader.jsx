import { useEffect, useState } from "react";
import "../css/Loader.css";

const messages = [
  "Initializing...",
  "Loading Projects...",
  "Loading Experience...",
  "Preparing Interface...",
  "Almost Ready...",
  "Welcome."
];

function Loader() {
  const [progress, setProgress] = useState(0);

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