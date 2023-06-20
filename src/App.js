import React from "react";

import AllRoutes from "./pages/AllRoutes.js/AllRoutes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
