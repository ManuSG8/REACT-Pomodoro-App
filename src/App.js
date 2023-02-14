import './App.css';
import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import beep from './assets/beep.mp3'
import resetLogo from './assets/reset.svg'

function App() {

  const [seconds, setSeconds] = useState(0)

  const [minutes, setMinutes] = useState(25)

  const [intervalId, setIntervalId] = useState(null)

  const audio = new Audio(beep)

  const start = () => {
    if(intervalId === null) {
      const id = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
      setIntervalId(id)
    }
  }

  const stop = () => {
    clearInterval(intervalId)
    setIntervalId(null)
  }

  const reset = () => {
    clearInterval(intervalId)
    setIntervalId(null)
    setSeconds(0)
    setMinutes(25)
  }

  useEffect(() => {
    if(seconds < 0) {
      setSeconds(59)
      setMinutes(minutes => minutes - 1)
    }

    if(minutes === 0 && seconds === 0) clearInterval(intervalId) 
    
  }, [seconds, intervalId, minutes, audio])

  return (
    <>
      <div className="App">
        <div className='counter'>
          <Card 
            type='minutes'
            time={minutes}
          />
          <Card 
            type='seconds'
            time={seconds}
          />
        </div>
        <div className='buttons'>
          <Button type='start' handleClick={start}>Start</Button>
          <Button type='stop' handleClick={stop}>Stop</Button>
          <Button type='reset' handleClick={reset}><img src={`${resetLogo}`} alt='' /></Button>
        </div>
      </div>
    </>
  );
}

export default App;