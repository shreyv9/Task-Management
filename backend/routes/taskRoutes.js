const express = require("express");
const { getTasks, createTask, updateTask, deleteTask, getTaskStats } = require("../controllers/taskController");

const router = express.Router();

router.get("/", getTasks); // Get all tasks
router.post("/", createTask); // Create a new task
router.put("/:id", updateTask); // Update a task by ID
router.delete("/:id", deleteTask); // Delete a task by ID
router.get("/stats", getTaskStats); // Get task statistics

module.exports = router;
