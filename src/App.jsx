import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PromotionPopup from "./components/PromotionPopup";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Barbers from "./pages/Barbers";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <Footer />
      <PromotionPopup />
    </div>
  );
}

export default App;