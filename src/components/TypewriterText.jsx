import React, { useState, useEffect } from 'react';

const TypewriterText = ({ words = [], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];
    
    const type = () => {
      if (isPaused) {
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
        return;
      }

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setIsPaused(true);
        }
      }
    };

    const timeout = setTimeout(
      type,
      isDeleting ? deletingSpeed : isPaused ? pauseTime : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseTime]);

  return <span>{text}</span>;
};

export default TypewriterText;
