import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-[#1a202c] text-white" : ""}`}>
      <div className="max-w-4xl  mx-auto pt-16">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Outlet darkMode={darkMode} setDarkMode={setDarkMode}  />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
