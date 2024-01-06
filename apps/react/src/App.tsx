import { useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-[200px] h-[600px] rounded-[8px] bg-[#ffffff]">
        나타나
      </div>
    </>
  );
}

export default App;
