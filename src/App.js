import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home/Home";
import Services from "./Services/Service";
import ServicesSection from "./Services/ServicesSection";
import ContactUs from "./contactUs/ContactUs";
import ImagesSection from "./images/ImagesSection";
import First from "./First";
function App() {
  return (
    <div className="App">
      {/* <Home/>
     <About/> 
     <ServicesSection />
     <ImagesSection/>
     <ContactUs/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="portfolio" element={<ImagesSection />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
