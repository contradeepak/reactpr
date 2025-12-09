'use client';

// import { Black_And_White_Picture } from "next/font/google";




// export default function Button() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <div className="main" style={{ backgroundColor: "blue",

//           padding: "10px",
          
//     }}>
    
//     <button onClick={handleClick}>
//       Click me
//     </button>
//     </div>
//   );
// }

//

// You can make it show a message when a user clicks by following these three steps:

// Declare a function called handleClick inside your Button component.
// Implement the logic inside that function (use alert to show the message).
// Add onClick={handleClick} to the <button> JSX.


// function AlertButton({message, children}){
//   return(
//     <button onClick={() =>alert(message)}>
//       {children}
//     </button>
//   )
// }


// export default function Toolbar() {
// return(
//   <div>
//     <AlertButton message='Playing'>
//       Play Movie
//     </AlertButton>
//     <AlertButton message='!Uploading'>
//       Uploading...
//     </AlertButton>
//   </div>
// )
// }



// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }


// export default function Signup() {
//   return (
//      <form onSubmit={() => alert('Submitting!')}>
//       <input />
//       <button>SEND</button>
     
//      </form>
//   )
// }

// Very Important Event Propagation
function Button({ onClick, children}){
return(

<div>
    <button className="button" onClick={e => {
   
    onClick();
    }}></button>
</div>
)
}


export default function Toolbar(){
  return(
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!')
    }}>
      <Button onClick={() => alert('Playing!')} >Play Movie</Button>
   

      <Button onClick={() =>alert('Uploading')} >!Uploade image</Button>
 </div>
  )
}