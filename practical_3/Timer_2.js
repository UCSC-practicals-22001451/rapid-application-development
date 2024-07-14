import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  interval();

  const stopTimer = () => {
    setIsActive(false);
  };

  return (
    <div>
      <h2>Timer: {seconds}s</h2>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
