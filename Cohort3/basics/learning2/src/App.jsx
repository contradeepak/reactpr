import { useState } from "react";



function App() {
  return (
    <div style={{background: "#dfe6e9", height: "100vh" }}>
    <ToggleMessage />
    <ToggleMessage />
    <ToggleMessage />

    </div>
  )
}



// the component isnt re-rendering
// because we havent used a state variable




// now we are definining the notification count
const ToggleMessage = () => {
  let [isVisible, setIsVisible] = useState(true);

  console.log("re-render");
  function toggle() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  )

}

export default App