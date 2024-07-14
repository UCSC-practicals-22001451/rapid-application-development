import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleHandler}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default Toggle;
