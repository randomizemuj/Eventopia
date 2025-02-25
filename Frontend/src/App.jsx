import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-700 text-white text-3xl h-screen w-full flex justify-center items-center">
      Eventopia
    </div>
  );
}

export default App;
