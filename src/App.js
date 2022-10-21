import "./App.css";
import Homepage from "./components/pages/Homepage";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import News from "./components/pages/News";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import EventPage from "./components/pages/EventPage";
import axios from "axios";
import EventTimeline from "./components/pages/EventTimeline";
import Sidebar from "./components/Dashboard/Sidebar";
import NotFound from "./components/pages/NotFound"

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
    });

    axios.get("../API/goldrateAPI.json").then((resp) => {
      console.log(resp.data);
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/timeline" element={<EventTimeline />} />
        <Route path="/admin/dashboard" element={<Sidebar />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
