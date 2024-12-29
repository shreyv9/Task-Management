import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title} - {task.status}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
