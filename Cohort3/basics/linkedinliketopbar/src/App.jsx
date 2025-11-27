import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count + 1);
  }

  return <div>
     <div style={{display: "flex"}}>
      <div style={{background: "red", borderRadius: 20, width: 20, height: 25,
        paddingLeft: 10, paddingTop: 5}}>
          {count}
        </div>
     </div>
<img style={{cursor: "pointer"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0H5DcrMpYydZXFW9_E_h-fiV46mmStix29g&s"}
width={40} />

 </div>
  
}

export default App
