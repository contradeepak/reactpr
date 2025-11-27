import { useState, useRef } from 'react'
import './App.css'
// a clock with a start and stop button

function App(){

const [currentCount, setCurrentCount] = useState(1);
const timer = useRef();
const input1Ref = useRef();
const input2Ref = useRef();


function startClock() {
  let value = setInterval(function() {
    setCurrentCount(c => c + 1);
   
   }, 1000);
   timer.current = value;
}

function stopClock() {
 clearInterval(timer.current);
}

return <div>
    {currentCount}
    <input ref={input1Ref}></input>
    <input ref={input2Ref}></input>
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>

     <button>Stop</button>
</div>

}

export default App