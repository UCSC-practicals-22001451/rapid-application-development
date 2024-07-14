import React from "react";

const ConditionalMessage = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
};

export default ConditionalMessage;
