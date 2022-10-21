import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Api from './Components/Api';


function App() {

  return (
    <div className="App">
      <Api/>
    </div>
  );
}

export default App;
