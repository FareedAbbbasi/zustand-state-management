import React from "react";
import "./Task.css";
import classname from "classname";

const STATUS = "PLANNED";

const Task = ({ title }) => {
  return (
    <div className="task">
      <div>{title}</div>
      <div className="buttonWrapper">
        <div></div>
        <div className={classname("status", STATUS)}>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;
