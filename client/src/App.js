import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import socket from 'socket.io-client';
function App() {
  const [serverTime, setServerTime] = useState(null);

  useEffect(() => {
    const io = socket('http://localhost:3001');
    io.on('UPD_SERVER_TIME', (data) => setServerTime(data));
  }, []);

  return (
    <div className="App">
      <h4>The time on the server is {serverTime}</h4>
    </div>
  );
}

export default App;
