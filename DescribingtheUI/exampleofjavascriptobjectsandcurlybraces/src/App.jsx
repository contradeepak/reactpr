const person = {
  name: 'Deepak Kumar Sahani',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return(
    <div style={person.theme}>
    <h1>{person.name}'s Todos</h1>
    <img
    className="avatar"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTd6YChGhigPcmcVszxo4C_lipIGFAP2ymIH4L7yIOSDr7Xu-SogmRzAkmBAH5EcoeHd0kFC5kHsP5eUYRu013Bdm_UdfyOjLxvbLt4g&s=10"
    alt="Deepak Kumar Sahani aka Super Commando Dhruv"
     />
     <ul>
      <li>Learn Karate</li>
      <li>Learn KungFu</li>
      <li>Learn Ninjutsu</li>
     </ul>
    </div>
  )
}