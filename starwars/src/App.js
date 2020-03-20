import React from 'react';
import './App.css';
import StarCards from "../src/components/StarCards";
import Header from "../src/components/Header";

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarCards/>
      <Header/>
    </div>
  );
}

export default App;
