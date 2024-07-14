import React, { useState } from "react";

const ClickTracker = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Clicked {count} times</p>
    </div>
  );
};

export default ClickTracker;
