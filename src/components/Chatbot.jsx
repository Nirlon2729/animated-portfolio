
import { useState, useEffect, useRef } from "react";
import sendSound from "../assets/sound/get.mp3";
import getSound from "../assets/sound/send.wav";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane
} from "react-icons/fa";

import "../css/ChatBot.css";

const getReply = (message) => {
  const q = message.toLowerCase();

  if (q.includes("about")) {
    return `I'm Nirlon Macwan, an MCA student and Full Stack Developer passionate about building modern and responsive web applications.`;
  }

  if (
    q.includes("technology")
  ) {
    return `React.js, JavaScript, Node.js, Express.js, MongoDB, PHP, MySQL, HTML, CSS, Git and GitHub.`;
  }

  if (q.includes("skill")) {
    return `I use React,MongoDB,Node.js,Express,PHP and MySQL`;
  }

  if (q.includes("project")) {
    return `I've built E-Commerce platforms using both MERN Stack and PHP. These projects helped me strengthen my frontend, backend and database development skills.`;
  }

  if (q.includes("education")) {
    return `I'm currently pursuing a Master of Computer Applications (MCA) while actively working on real-world projects.`;
  }

  if (q.includes("certificate")) {
    return `I have certifications in Python Programming, C Programming, Computer Concepts, Digital Literacy and Python courses through Coursera.`;
  }

  if (
    q.includes("service") ||
    q.includes("offer")
  ) {
    return `I offer Frontend Development, Full Stack Development, UI/UX Design and API Integration`;
  }

  if (q.includes("freelance")) {
    return `Yes! I'm available for the Freelancing. Let's connect and discuss your project. You can contact me by this email-nirlonmacwan27@gmailcom`;
  }

  if (q.includes("contact")) {
    return `You can use the contact form on the site or E-mail me at nirlonmacwan27@gmail.com`;
  }

  return `I'm not sure, but you can always contact me`;
};

function ChatBot() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: "welcome-message",
      sender: "bot",
      text: "Hi there!How can i help you today."
    }
  ]);

  const bottomRef = useRef(null);
  const sendAudio = useRef(new Audio(sendSound));
  const getAudio = useRef(new Audio(getSound));
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  useEffect(() => {
    sendAudio.current.volume = 0.7;
    getAudio.current.volume = 0.7;
  }, []);

  const sendMessage = (customMessage = "") => {
    const text = customMessage || input;

    if (!text.trim()) return;
    sendAudio.current.currentTime = 0;
    sendAudio.current.play().catch(() => { });

    const userMessage = {
      id: `user-${Date.now()}-${Math.random()}`,
      sender: "user",
      text
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage = {
        id: `bot-${Date.now()}-${Math.random()}`,
        sender: "bot",
        text: getReply(text)
      };
      getAudio.current.currentTime = 0;
      getAudio.current.play().catch(() => { });

      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <>
      <button
        type="button"
        className="assistantToggle"
        aria-label="Toggle Chat Assistant"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      <div
        className={`assistantBox ${open ? "show" : ""
          }`}
      >
        <div className="assistantHeader">


          <div>
            <h3>Ask Me Anything</h3>

          </div>
        </div>

        <div className="assistantMessages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`assistantMessage ${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}

          <div ref={bottomRef}></div>
        </div>

        <div className="chatSuggestions">
          <button
            type="button"
            onClick={() =>
              sendMessage(
                "What services do you offer?"
              )
            }
          >
            What services do you offer?
          </button>

          <button
            type="button"
            onClick={() =>
              sendMessage(
                "How can I contact you?"
              )
            }
          >
            How can I contact you?
          </button>

          <button
            type="button"
            onClick={() =>
              sendMessage(
                "What technologies do you use?"
              )
            }
          >
            What technologies do you use?
          </button>

          <button
            type="button"
            onClick={() =>
              sendMessage(
                "Are you available for freelance?"
              )
            }
          >
            Are you available for freelance?
          </button>
        </div>

        <div className="assistantInput">
          <input
            type="text"
            placeholder="Ask me anything..."
            aria-label="Ask me anything..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              sendMessage()
            }
          />

          <button
            type="button"
            aria-label="Send Message"
            onClick={() =>
              sendMessage()
            }
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatBot;