import React, { useState, useEffect } from "react";
import "./quickAccess.css"; // Make sure to import your CSS file

const CatchDisplay: React.FC = () => {
  const texts = [
    "Get cheap Data and Airtime anywhere, anytime.",
    "Pay your cable subscriptions with ease",
    "Pay your Electricity Bills",
    "Get Airtime E-Pins and Data Pins if you are a seller",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTransitioning(false);
      }, 500); // Wait for the transition duration before changing text

    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="cheap">

    
    <h3 className={`cheap-text ${isTransitioning ? "catch-transition" : ""}`}>
      {texts[currentTextIndex]}
    </h3></div>
  );
};

export default CatchDisplay;
