import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from "./Profile"

function App() {



  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1);

  function MyButton(props){

  return (
    <button onClick={props.Fn}>
      Soy un boton custom y mi cuenta es: {props.count}
    </button>
  );
}

  return (
    <>
      <Profile></Profile>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton count={count} Fn={increment}></MyButton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
