import "./App.css";

import { Route, Routes } from "react-router-dom";
import "./index.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";

import testes from "./assets/outrojogo.png";

function App() {
  return (
    <div className="relatives h-screen text-white bg-gray-900">
      <img
        className="absolute inset-0 w-full h-full object-cover overflow-hidden z-0 blur-lg"
        src={testes}
        alt="background"
      />
      <div>
        <Navbar />
      </div>
      <div className="flex-1 flex-col md:flex-row md:ml-64 h-screen">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </MainLayout>
      </div>
    </div>
  );
}

export default App;
