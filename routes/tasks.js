const express = require('express');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

let tasks = []; // In-memory task storage

// Create a task
router.post('/', authMiddleware, (req, res) => {
  const { title, description, deadline } = req.body;
  tasks.push({ id: tasks.length + 1, title, description, deadline, status: 'Pending' });
  res.json({ message: 'Task created successfully!' });
});

// Get all tasks
router.get('/', authMiddleware, (req, res) => {
  res.json(tasks);
});

// Approve a task
router.post('/:id/approve', authMiddleware, (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.status = 'Approved';
  res.json(task);
});

module.exports = router;
