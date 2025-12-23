import { useState } from "react";

let nextId = 3;

const initialArtists =[
  {id:1, name:"Deepak Kumar Sahani"},
  {id:2, name:"Ashutosh Sahani"},
  {id:3, name:"Tiger"},
]

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

function handleClick() {
  const insertAt = 1; // Could be any index
  const nextArtists = [
    ...artists.slice(0, insertAt),
    {id: nextId++, name: name },
    ...artists.slice(insertAt)
  ];
  setArtists(nextArtists);
  setName('');
}

return (
  <>
  <h1>Inspiring Sculptors:</h1>
  <input 
  value={name}
  onChange={e => setName(e.target.value)}
  />
  <button onClick={handleClick}>Insert</button>
  <ul>
    {artists.map(artist=>(
      <li key={artist.id}>{artist.name}</li>
    ))}
  </ul>
  
  </>
)


}















