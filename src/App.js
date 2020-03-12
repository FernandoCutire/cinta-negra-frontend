import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./App.css";
import Footer from "./Components/Footer/index";
import Header from "./Components/Header/index"
import Landing from "./Components/Landing";


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Landing/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
