import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchForm from "./SearchForm";
import Message from "./Message";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchForm />
      <Message />
    </>
  );
}

export default App;
