import { useState, useEffect } from "react";

// Loops forever through the given words: types, pauses, deletes, moves to next.
function TypingText({ words = [], speed = 80, deleteSpeed = 40, pause = 1200 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && displayedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, speed);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span className="typing-word">
      {displayedText}
      <span className="cursor-blink">|</span>
    </span>
  );
}

export default TypingText;