import React from "react";
import Header from "./components/Header.js";
import HeroSection from "./components/HeroSection.js";
import BasicExample from "./components/BasicExample.js";
import Cards from "./components/Cards.js";
import HeroSection2 from "./components/HeroSection2.js";
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Cards />
      <BasicExample />
      <HeroSection2 />
    </div>
  );
}

export default App;
