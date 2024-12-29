import React, { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";

const TaskPage = () => {
  const { tasks, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Your Tasks</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
