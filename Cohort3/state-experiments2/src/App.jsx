import { useState, createContext, useContext } from 'react';
import './App.css'

const BulbContext = createContext();

// Custom hook for cleaner usage
export function useBulb() {
  return useContext(BulbContext);
}

export function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  )
}

function LightBulb() {
  const { bulbOn } = useBulb();

  return (
    <div>
      💡 Bulb is: {bulbOn ? "ON" : "OFF"}
    </div>
  );
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useBulb();

  return (
    <button onClick={() => setBulbOn(!bulbOn)}>
      Toggle Bulb
    </button>
  );
}

export default App;
