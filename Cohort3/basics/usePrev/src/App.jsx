import { useState } from 'react';

import './App.css';
import { usePrev } from "./use-prev";

function App() {
  const [state, setState] = useState(0);   // current value
  const prev = usePrev(state);             // previous value

  return (
    <>
      <p>{state}</p>

      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click Me
      </button>

      <p>The previous value was {prev}</p>
    </>
  );
}

export default App;
