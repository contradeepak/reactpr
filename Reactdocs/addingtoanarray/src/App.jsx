// push will mutate the array,which we don't want

import { useState } from "react";

let nextId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [artist, setArtist] = useState([]);



return (
  <>
  <h1>Inspiring Sculptors:!!</h1>
   <input value={name}
    onChange={e => setName(e.target.value)}
   />
  <button style={{backgroundColor:"Pink"}} onClick={() => {
  setArtist([
    ...artist,
    {id: nextId++, name: name}
  ])
  }}>Adding</button>
<ul>
        {artist.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
  </>
);
}