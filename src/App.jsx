import { Hero } from "./components/Hero";
import { Demo } from "./components/Demo";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
