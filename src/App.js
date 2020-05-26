import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar.js";
import Jumbo from "./components/jumbo/Jumbo.js";
import MiddleContent from "./components/middleContent/MiddleContent.js";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbo />
      <MiddleContent />
    </div>
  );
}

export default App;
