import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TaskPage from "../pages/TaskPage";
import NotFoundPage from "../pages/NotFoundPage";
import { TaskProvider } from "../context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
