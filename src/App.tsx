import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import StatusBar from './components/StatusBar';
import Posts from './components/Posts';
import { Feed } from './models';

function App() {
  const [status, setStatus] = useState<string>("");
  const [feeds, setFeeds] = useState<Feed[]>([]);

  const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
        
        if(status){
          setFeeds([...feeds, {feed:status, id:Date.now()}]);
          setStatus("");
          
          
        }
  }

  return (
    <div className="app">
      <div className="logo-title">
        <h1 className='heading' >Facebook</h1>
        <div className="navbar">
          <Navbar/>
        </div>
      </div>
      <div className="status-bar">
        <StatusBar status ={status} setStatus = {setStatus} handleSubmit ={handleSubmit}/>
      </div>
      <div className="post">
        <Posts feeds ={feeds} setFeeds={setFeeds}/>
      </div>
    </div>
  );
}

export default App;
