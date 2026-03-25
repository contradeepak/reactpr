function Item({ name, isPacked }){
  return <li className="item">{name}</li>
}

export default function PackingList(){
  return (
    <section>
      <h1>SAlly Ride's Packing List</h1>
      <ul>
        <Item isPacked={true}
               name = "Space suit"/>

         <Item
              isPacked={true}
              name = "Helmet with a golden leaf"/>

          <Item 
          isPacked={true}
          name = "Photo of Batman"/>          

      </ul>
    </section>
  )
}