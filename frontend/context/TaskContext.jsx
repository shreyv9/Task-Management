import React, { createContext, useState } from "react";
import axios from "axios";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await axios.post("/api/tasks", newTask);
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
