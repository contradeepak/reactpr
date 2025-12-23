// Queueing a series of State Updates


// import { useState } from "react";


// export default function Counter() {
//   const [number, setNumber] = useState(0);



// return(
//   <>
//   <h1>{number}</h1>
//   <button onClick={() =>{
//     setNumber(number+1);
//     setNumber(number+1);
//     setNumber(number+1);
//   }}>+3</button>
//   </>
// )
// }


//////////////////////////////////////////////////////////////////////////////////////

//Updating the same state multiple times before the next render 


// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//       }}>+3</button>
//     </>
//   )
// }






// What happens if you replace state after updating it 
// Let’s try one more example. What do you think number will be in the next render?

// <button onClick={() => {
//   setNumber(number + 5);
//   setNumber(n => n + 1);
//   setNumber(42);
// }}></button>



// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setNumber(n => n + 1);
//         setNumber(42);
//       }}>Increase the number</button>
//     </>
//   )
// }



