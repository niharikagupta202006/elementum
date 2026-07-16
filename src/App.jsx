import "./styles/App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Help />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;