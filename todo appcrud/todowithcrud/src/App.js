import {useState} from 'react';

import './App.css'

let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: 'Finish the food' },
  { id: id++, label: 'Take the dog to somewhere else' },
  {id: id++, label: 'I love to work hard and will work somewhere'},
];

export default function App() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [newTask, setNewTask] = useState('');
 
return (
  <div className='App'>
    <h1>To Do List with CRUD operations</h1>

  <input label="Add new Task" type="text" placeholder="Add your task" value=
  {newTask}
  onChange={(event) => { setNewTask(event.target.value);

  }}
  />
  <div>
    <button onClick={() => {
      setTasks(
        tasks.concat({
          id: id++,
          label: newTask.trim(),


        }),
      );
      setNewTask('');

    }}>
      Submit
    </button>
  </div>
  <ul>
  {tasks.map(({ id, label }) => (
    <li key={id}>
    <span>{label}</span>
    <button onClick={() => { setTasks(tasks.filter((task) => task.id !== id),
    );}}>Delete</button></li>
  ))}
</ul>
  </div>

)
};
