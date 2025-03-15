import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const [bgImage, setBgImage] = useState("");
  const [prevBgImage, setPrevBgImage] = useState("");

  useEffect(() => {
    if (bgImage !== prevBgImage) {
      setPrevBgImage(bgImage);
    }
  }, [bgImage]);

  return (
    <div className="relative h-screen text-white bg-gray-900">
      {prevBgImage && (
        <img
          key={prevBgImage}
          className="absolute inset-0 w-full h-full object-cover overflow-hidden z-0 blur-lg transition-opacity duration-1000 ease-in-out opacity-0"
          src={prevBgImage}
          alt="background"
        />
      )}
      <img
        key={bgImage}
        className="absolute inset-0 w-full h-full object-cover overflow-hidden z-0 blur-lg transition-opacity duration-1000 ease-in-out"
        src={bgImage}
        alt="background"
      />
      <div>
        <Navbar />
      </div>
      <div className="flex-1 flex-col md:flex-row md:ml-64 h-screen">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home setBgImage={setBgImage} />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </MainLayout>
      </div>
    </div>
  );
}

export default App;
