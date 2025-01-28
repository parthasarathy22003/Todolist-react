import './App.css';
import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">React To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index}>
              {t}
              <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
