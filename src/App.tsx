import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/layout/header";
import Home from "./pages/Home/sections/SectionHome";
import Footer from "./components/layout/footer";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};
export default App;
