export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}




// import { useState, useEffect } from "react";
// import "./App.css";

// function Clock() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // cleanup
//   }, []);

//   return (
//     <>
//       <h1>{time}</h1>
//       <input />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Clock />
//     </div>
//   );
// }
