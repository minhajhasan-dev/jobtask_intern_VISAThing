import AboutUs from "./components/AboutUs";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";
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
      </div>
    </>
  );
}

export default App;
