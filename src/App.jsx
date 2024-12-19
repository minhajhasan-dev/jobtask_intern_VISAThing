import AboutUs from "./components/AboutUs";
import Brands from "./components/Brands";
import CompanyGrid from "./components/CompanyGrid";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Brands />
        {/* about us and solutions */}
        <div className="bg-[#F3F7FB] py-20">
          <AboutUs />
          <Solutions />
        </div>
        <Testimonial />
        {/* rest of the sections */}
        <div className="bg-[#F3F7FB] py-20">
          <HowItWorks />
          <CompanyGrid />
        </div>
      </div>
    </>
  );
}

export default App;
