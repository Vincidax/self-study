import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchForm from "./SearchForm";
import WelcomeScreen from "./WelcomeScreen";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchForm />
      <WelcomeScreen />
    </>
  );
}

export default App;
