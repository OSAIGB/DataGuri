import React, { useState, useEffect } from "react";

const CatchDisplay: React.FC = () => {
  const texts = [
    "Get cheap Data and Airtime anywhere, anytime.",
    "Pay your cable subscriptions with ease",
    "Pay your Electricity Bills",
    "Get Airtime E-Pins and Data Pins if you are a seller",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 7000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h3 className="cheap">{texts[currentTextIndex]}</h3>;
};

export default CatchDisplay;
