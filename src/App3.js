import { useRef } from 'react';
import './App.css';

function App3() {
  const danielRef = useRef(null);
  const joaoRef = useRef(null);
  const pedroRef = useRef(null);

  function handleDaniel() {



  }
  function handleJoao() {


  }
  function handlePedro() {


  }
  return (
    <div className="App">
      <strong
        ref={danielRef}
        onClick={() => handleDaniel()}
      >
        Danie
        l</strong>

      <strong
        ref={joaoRef}
        onClick={() => handleJoao()}
      >
        João
      </strong>
      <strong
        ref={pedroRef}
        onClick={() => handlePedro()}
      >
        Pedro
      </strong>
    </div>
  );
}

export default App3;

