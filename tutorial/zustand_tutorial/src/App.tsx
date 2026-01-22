import { CatBox } from "./components/CatBox";
import { CatBox2 } from "./components/CatBox2";
import { CatController } from "./components/catController";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>Zustand tutorial</h1>
      <div>
        <CatBox />
        <CatBox2 />
        <CatController />
      </div>
    </div>
  );
}

export default App;
