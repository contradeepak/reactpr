import { useState } from "react";

let initialArtists = [
  {id:0, name:'Deepak Kumar Sahani'},
  {id:1, name:'Ashutosh Sahani'},
  {id:2, name:'TIGER'},
  {id:3, name:'Leopard'},
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  return(
    <>
    <h1>Inspiring Sculptures!...</h1>
    <ul>
      {artists.map(artist=>(
        <li key={artist.id}>
          {artist.name} {' '}
          <button onClick={() => {
            setArtists(
              artists.filter(a=>
                a.id !==artist.id
              )
            );
          }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
    </>
  )




}