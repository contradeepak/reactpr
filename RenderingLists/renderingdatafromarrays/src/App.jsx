const people = [
   'Deepak Kumar Sahani: Strategist',
   'Ashutosh Sahani: MBBS Doctor',
   'Praveen Kumar Nishad: Engineer',
   'Anupam Kumar Nishad: Teacher',
   'Pritam Kumar Nishad: Engineer',
   'Leopard(Priyam): Engineer'
];


export default function List() {
  const listItems = people.map(person => <li>{person}</li>);
  return <ul>{listItems}</ul>
}

