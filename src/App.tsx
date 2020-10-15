import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        let [tasks, setTasks] = useState<Array<TasksType>>(
        [
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "React", isDone: true},
        {id: v1(), title: "Js", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false}

    </div>
  );
}

export default App;
