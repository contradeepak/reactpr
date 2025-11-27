import { useRef } from 'react';
import './App.css'

function App() {

  const inputRef = useRef();
// It is the ugly way to do this, the better way is to use Refs.
// What are refs. refs are references to a DOM element.
// Better way is to use references to a DOM element instead of doing a document.query selector.
  
// let value = 1;

function focusOnInput() {

  // document.getElementById("name");
    inputRef.current.focus();
  }

  return <div>
  Sign up
  <input ref={inputRef} id="name" type={"text"}></input>
  <input type={"text"}></input>
  <button onClick={focusOnInput}>submit</button>
  </div>
   
  
}

export default App
