
// import useState from react
import { useState } from "react";
// Now you can declare a state variable inside your component
function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }



return (
<button onClick={handleClick}>
Clicked {count} times
</button>
)


}

export default MyButton;
