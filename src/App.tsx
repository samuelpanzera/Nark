import "./App.css";

import { Route, Routes } from "react-router-dom";
import "./index.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import testes from "./assets/testes.png";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg "
        style={{ backgroundImage: `url(${testes})` }}
      ></div>
      <div>
        <Navbar />
      </div>
      <div className="flex-1 flex-col md:flex-row md:ml-64">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </div>
      <Footer />
    </div>
  );
}

export default App;
