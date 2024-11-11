
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(-1);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  const startFunction = () => {
    const interval = setInterval(() => {
      setTime((prevSeconds) => prevSeconds + 1);
  }, 1000);
   setIntervalId(interval);
  }
  const stopFunction = () => {
    console.log("reset", intervalId);
    clearInterval(intervalId);
    setIntervalId(-1);
  }
  const resetFunction = () => {
    console.log("reset", intervalId);
    clearInterval(intervalId);
    setIntervalId(-1);
    setTime(0);
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      {intervalId === -1 ?  <button onClick={()=>startFunction()}>Start</button>:<button onClick={() => stopFunction()}>Stop</button>}
   

      <button onClick={()=>resetFunction()}>Reset</button>
  
    </div>
  );
}

export default App;