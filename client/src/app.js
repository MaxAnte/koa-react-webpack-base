import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("Wassup?");

  const clickHandler = async () => {
    const response = await fetch("http://localhost:5000/test");
    const data = await response.json();
    setTitle(data.title);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={clickHandler}>Change</button>
    </div>
  );
};

export default App;
