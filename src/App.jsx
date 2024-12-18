import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="container space-y-2 mx-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
