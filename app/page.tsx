
"use client"; 

import React, { useEffect, useState } from 'react';
import Preloader from '@/components/Preloder'; 
import Camp from '@/components/Camp';
import Features from '@/components/Features';
import GetApp from '@/components/GetApp';
import Guide from '@/components/Guide';
import Hero from '@/components/Hero';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the delay as needed 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <>
          <Hero />
          <Camp />
          <Guide />
          <Features />
          <GetApp />
        </>
      )}
    </>
  );
};