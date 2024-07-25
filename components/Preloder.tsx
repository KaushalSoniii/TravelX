// components/Preloader.tsx

import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = ['Welcome', 'To', 'TravelX'];
  const [currentWord, setCurrentWord] = useState(textArray[0]);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % textArray.length;
        setCurrentWord(textArray[newIndex]);
        return newIndex;
      });
    }, 1000); // Change word every 1 second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true);
    }, 3000); // Slide up after 3 seconds (time adjusted to match the text changes)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center h-screen bg-black ${slideUp ? 'animate-slide-up' : ''}`}>
      {!slideUp && <h1 className="text-5xl font-bold text-green-500 animate-fade">{currentWord}</h1>}
    </div>
  );
};

export default Preloader;