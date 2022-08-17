import React, { useState, useRef, useEffect } from "react";
import MaimPage from "./components/MainPage/MainPage";
import "./App.scss";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <MaimPage  setGlobalTerm={setSearchTerm} globalTerm={searchTerm} />
    </div>
  );
};

export default App;
