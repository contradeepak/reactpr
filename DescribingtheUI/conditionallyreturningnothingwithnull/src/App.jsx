function Item({name, isPacked}){
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>
}

export default function PackingList(){
  return(
    <section>
      <h1>Deepak Kumar Riding List</h1>
      <ul>
        <Item
        isPacked={true}
        name="Space Suit"
        />
        <Item
        isPacked={true}
        name="Egg-boiled"
        />
        <Item
        isPacked={false}
        name="PhotoofTam"/>
      </ul>
    </section>
  )
}