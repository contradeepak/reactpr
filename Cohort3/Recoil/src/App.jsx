import { useEffect, useState } from "react";
import './App.css'
import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";
import  Counter  from "./store/atoms/counter"


function App() {

  return <div>
    <RecoilRoot>
    <Buttons />
    <Counter />
    <IsEven />
     </RecoilRoot>
  
  </div>
}


function Buttons() {
  const setCount = useSetRecoilState(counterAtom)

  function increase() {
    setCount(c => c + 2)
  }

  function decrease() {
    setCount(c => c - 1)
  }

  function Counter() {
    const count = useRecoilValue(counterAtom);

    return <div>
      {count}
    </div>
  }

  function IsEven() {
    const even = useRecoilValue(evenSelector)

    return <div>
      {even ? "Even" : "Odd"}
    </div>
  }



  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>

  </div>
}



export default App;