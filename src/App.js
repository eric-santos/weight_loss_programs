import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar.js";
import Jumbo from "./components/jumbo/Jumbo.js";
import MiddleContent from "./components/middleContent/MiddleContent.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbo />
      <MiddleContent />
      <Footer />
    </div>
  );
}

export default App;
