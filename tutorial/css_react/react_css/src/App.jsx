import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  function IncreaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>
        {name} has clicked {counter} times!!
      </h1>
      <button onClick={IncreaseCounter}>Increase</button>
    </div>
  );
};

export default App;
