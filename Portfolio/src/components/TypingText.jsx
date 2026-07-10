import { useState, useEffect } from "react";

// Types the first text, deletes it, types the second, deletes it, types the third.
// Stops after that (no looping).
function TypingText({ text, secondText, thirdText, speed = 80, pause = 1000, cursorDuration = 3000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    let index = 0;

    setDisplayedText("");
    setShowCursor(true);

    // Step 1: type out the first text
    const typeFirst = setInterval(() => {
      if (isCancelled) return;

      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeFirst);

        // Step 2: after a pause, start deleting the first text
        setTimeout(() => {
          if (isCancelled) return;

          let deleteIndex = text.length;

          const deleteFirst = setInterval(() => {
            if (isCancelled) return;

            if (deleteIndex > 0) {
              deleteIndex--;
              setDisplayedText(text.slice(0, deleteIndex));
            } else {
              clearInterval(deleteFirst);

              // Step 3: type out the second text
              let secondIndex = 0;
              const typeSecond = setInterval(() => {
                if (isCancelled) return;

                if (secondIndex < secondText.length) {
                  setDisplayedText(secondText.slice(0, secondIndex + 1));
                  secondIndex++;
                } else {
                  clearInterval(typeSecond);

                  // Step 4: after a pause, start deleting the second text
                  setTimeout(() => {
                    if (isCancelled) return;

                    let deleteSecondIndex = secondText.length;

                    const deleteSecond = setInterval(() => {
                      if (isCancelled) return;

                      if (deleteSecondIndex > 0) {
                        deleteSecondIndex--;
                        setDisplayedText(secondText.slice(0, deleteSecondIndex));
                      } else {
                        clearInterval(deleteSecond);

                        // Step 5: type out the third text
                        let thirdIndex = 0;
                        const typeThird = setInterval(() => {
                          if (isCancelled) return;

                          if (thirdIndex < thirdText.length) {
                            setDisplayedText(thirdText.slice(0, thirdIndex + 1));
                            thirdIndex++;
                          } else {
                            clearInterval(typeThird);

                            // Step 6: after third text finishes, blink cursor briefly then hide it
                            setTimeout(() => {
                              if (!isCancelled) setShowCursor(false);
                            }, cursorDuration);
                          }
                        }, speed);
                      }
                    }, speed / 2);
                  }, pause);
                }
              }, speed);
            }
          }, speed / 2);
        }, pause);
      }
    }, speed);

    return () => {
      isCancelled = true;
      clearInterval(typeFirst);
    };
  }, [text, secondText, thirdText, speed, pause, cursorDuration]);

  return (
    <h1 className="user-name">
      {displayedText}
      {showCursor && <span className="cursor-blink">|</span>}
    </h1>
  );
}

export default TypingText;