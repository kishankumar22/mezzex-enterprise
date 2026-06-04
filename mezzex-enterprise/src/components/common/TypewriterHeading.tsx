'use client';

import { useEffect, useState } from 'react';

interface TypewriterHeadingProps {
  words: string[];
  className?: string;
}

export default function TypewriterHeading({
  words,
  className = '',
}: TypewriterHeadingProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words?.length) return;

    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const updatedText = currentWord.substring(0, text.length + 1);
        setText(updatedText);

        if (updatedText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        const updatedText = currentWord.substring(0, text.length - 1);
        setText(updatedText);

        if (updatedText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <h2
      className={`min-h-[56px] text-4xl font-extrabold text-[#0f172a] ${className}`}
    >
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </h2>
  );
}