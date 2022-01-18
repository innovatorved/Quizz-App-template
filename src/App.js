import React from "react";
import Navbar from "./Component/Navbar";
import BackStateProvider from "./Component/Context/StateManagement";
import Home from "./Component/Home";

function App() {
  return (
    <div>
      <BackStateProvider>
        <Navbar/>
        <Home/>
      </BackStateProvider>
    </div>
  );
}

export default App;