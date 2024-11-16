import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//type de function classique
function App() {
  const [count, setCount] = useState(0)
  const [countdown, setCountdown] = useState(10);

  const startCountdown =() => {
    setCountdown(10);
    const interval = setInterval(() =>{
      setCountdown((prevCount) => {
        if(prevCount === 0) {
          clearInterval (interval);
          return 0;
        }
        return prevCount - 1;
      });
     }, 1000);
    };
  // trié par ordre alphabétique et un pour trié par age 
  const [Status, setStatus] = useState([
    {
    name: 'Urus',
    age: 20,
    },
    {
      name: 'Asus',
      age: 15,
    },
    {
      name:'Orus',
      age: 44,
    },
  ]);
  //   Je veux créer un bouton qui ramène mon tableau a l'état d'origine quand je click
    // const tableauInitial = () => {
    //   const classeStatus = ;
    //   setStatus(classeStatus);
    // }

    const classéParAge = () => {
      const classeStatus = [...Status].sort((a, b) =>{return b.age - a.age});
      setStatus(classeStatus);
    }
    const classéParNom = () => {
      const classeStatus = [...Status].sort((a,b) => a.name.localeCompare(b.name));
      setStatus(classeStatus);
    }
    
  return (
    <>
    
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
        
        <button style={{cursor : count>= 10 ? 'not-allowed': "pointer" }} disabled={count >= 10  ? true: false}  onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        
        <button style={{cursor : count<= -10 ? 'not-allowed': "pointer" }} disabled={count <= -10  ? true: false} onClick={() => setCount((count) => count - 1)}>
         -
        </button>
        <p>  Quand tu presses le boutton tu as : {count} </p>
        {count % 2 === 0 ? <p>Paire</p> : <p>Impair</p>}
        <h1>  Le temps s'écoule: {countdown} </h1>
       <button onClick= {startCountdown}>Start Countdown</button>
       
      <h1>Status</h1>

        <table>
              <tr>
                <th>Nom</th><th>Age</th>
              </tr>
                
          {Status.map( Status => (
            <tr>
            <td>{Status.name}</td>
            <td>{Status.age}</td>
          </tr>
          ))}
        </table>

      <button onClick={tableauInitial}>
          Restart
      </button>

      <button onClick={classéParAge}>
          Age order
      </button>

      <button onClick={classéParNom}>
        Name Order
      </button>
      
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
