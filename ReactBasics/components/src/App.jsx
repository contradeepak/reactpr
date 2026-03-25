// Components:-
// Components are JavaScript functions that return the Markup and a peice of UI
// that has it's own logic and appearance.
import './App.css' 

function MyButton() {
  return (
    <button onClick={() => alert('You have Clicked me')} style = {{ backgroundColor: "red" }}>
      Click Me

    </button>
 
  ); // Semicolon added (optional but recommended)
}

function handleClick() {
}

// First here we have declared the MyButton component
// then after declaring we can nest it into another component
export default function MyApp() {
  return (
    <div >
      <h1 className='heading'>Welcome to AVATAR FIRE AND ASH</h1>
      {/* src attribute wrapped in quotes and tag self-closed with '/>' */}
      <img
        className="Avatar"
        src="https://cdn.123telugu.com/content/wp-content/uploads/2025/11/Avatar-Fire-and-Ash-1.webp"
      />
      <div>
                  <MyButton/>

      </div>
    </div>

  );
}
