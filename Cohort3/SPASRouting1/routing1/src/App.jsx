
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 
"react-router-dom";


function App() {

  return  <div>
      


      <BrowserRouter>
          


        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        Footer | Contact us
      </BrowserRouter>
    </div>
  
}

function Layout() {
 
  return <div style={{height: "100vh",
  background: "green"}}>
      <Header />
      <div style={{height: "100vh",
      background: "red"}}>
      
      <Outlet />
      </div>
      footer
      </div>
}

function Header() {
  return <div>
          <Link to="/">Allen</Link>
          |
          <Link to="/neet/online-coaching-class-11">Class11</Link>
          |
          <Link to="/neet/online-coaching-class-12">Class12</Link>
  </div> 



}





function ErrorPage() {
  return <div>
    Sorry Page Not Found
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
  const navigate = useNavigate();
  
  
  function redirectUser() {
    navigate("/")
  }

  return <div>
    NEET programs for class 12lth
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}


export default App;
