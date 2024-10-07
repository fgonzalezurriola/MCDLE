import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();

  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-center">Tiempo actual</h1>
        <h2 className="text-xl font-bold text-center">{showTime}</h2>
      </div>
    </>
  )
}

export default App
