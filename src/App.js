import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Event from "./components/Event";
import News from "./components/News";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Timer from "./components/Timer";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/event" element={<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
