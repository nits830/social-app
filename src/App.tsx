import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import StatusBar from './components/StatusBar';

function App() {
  const [status, setStatus] = useState<string>("")

  return (
    <div className="app">
      <div className="logo-title">
        <h1 className='heading' >Facebook</h1>
        <div className="navbar">
          <Navbar/>
        </div>
      </div>
      <div className="status-bar">
        <StatusBar/>
      </div>
    </div>
  );
}

export default App;
