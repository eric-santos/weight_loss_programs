import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar.js";
import Jumbo from "./components/jumbo/Jumbo.js";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbo />
    </div>
  );
}

export default App;
