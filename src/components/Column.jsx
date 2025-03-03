// import React from "react";
import { useState } from "react";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }) => {
  const tasks = useState((store) => {
    store.tasks.filter((task) => task.state === state);
  });
  return (
    <div className="column">
      <p>{state}</p>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
};

export default Column;
