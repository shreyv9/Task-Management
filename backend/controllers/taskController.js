const Task = require("../models/taskModel");

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, startTime, endTime, priority, status } = req.body;

    if (!title || !startTime || !endTime || !priority || !status) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTask = await Task.create({ title, startTime, endTime, priority, status });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get task statistics
const getTaskStats = async (req, res) => {
  try {
    const tasks = await Task.find();
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "finished").length;
    const pendingTasks = totalTasks - completedTasks;

    const stats = {
      totalTasks,
      completedPercentage: ((completedTasks / totalTasks) * 100).toFixed(2),
      pendingPercentage: ((pendingTasks / totalTasks) * 100).toFixed(2),
    };

    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask, getTaskStats };
