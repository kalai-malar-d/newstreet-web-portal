import React, { useState, useEffect } from "react";

const Headlines = () => {
  const headlines = [
    "Can... Blockchain, DApps ...actually impact your business ?",
    "Can... Smart Contracts ...actually impact your business ?",
    "Can... DLT, AI, ML, IOT ...actually impact your business ?",
  ];

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeadlineIndex(
        (prevIndex) => (prevIndex + 1) % headlines.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h4>{headlines[currentHeadlineIndex]}</h4>
    </div>
  );
};

export default Headlines;
