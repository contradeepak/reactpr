function MyButton() {
  function handleClick() {
    alert('You have clicked me!');
  }

return (
  <button onClick={handleClick}>
    Click Me
  </button>
)


}

export default MyButton;
