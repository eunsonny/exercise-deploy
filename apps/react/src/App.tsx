import { useState } from "react";
import Layout from "./components/Layout";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[380px] h-[600px] rounded-[10px] bg-[#ffffff] shadow-lg text-[#5B5F6E] p-[50px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 leading-4">
              <span className="text-[40px] font-bold">12</span>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold">JAN</span>
                <span className="font-light leading-[14px]">2024</span>
              </div>
            </div>

            <span>TUESDAY</span>
          </div>
        </div>
        <button className="rounded-full bg-[#4FE3A4] w-[96px] h-[96px] relative bottom-[48px]"></button>
      </div>
    </Layout>
  );
}

export default App;
