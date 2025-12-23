// There are some things you can't do with the spread syntax, and non-mutating 
// methods like map() and filter() alone.
// For example, we may want to reverse or sort an array.
// The JavaScript reverse() and sort() methods are mutating the original array,
// so you can't choose them directly.


import { useState } from "react";

const initialList = [
  { id: 0, title: 'Big Bellies'  },
  { id: 1, title: 'Bullet Force' },
  { id: 2, title: 'Call of Duty Mobile'},
  { id: 3, title: 'Lunar Landscape'},

];

export default function List() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList)
  }


return (
  <>
  <button onClick={handleClick}>
  Reverse
  </button>
  <ul>
    {list.map(artwork => (
      <li key ={artwork.id}>{artwork.title}</li>
    ))}
  </ul>
  
  </>
);


}


// Here you use the [...list] spread syntax to create the copy of the 
// original array first. Now when you have a copy, you can use mutating methods like
// nextList.reverse() or nextList.sort(), or even assign individual items with
// nextList[0] = "something".
