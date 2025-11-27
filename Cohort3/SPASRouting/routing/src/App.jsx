import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return  <div>
      <BrowserRouter>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  
}


function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
    NEET programs for class 11th
  </div>
}


function Class12Program() {
  return <div>
    NEET programs for class 12lth
  </div>
}


export default App;










