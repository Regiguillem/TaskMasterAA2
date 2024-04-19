const mongoose = require("mongoose");

const Task = require("../models/Task");

export default class TaskControllers {
  // Obtener todas las tareas
  getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Obtener una tarea por su ID
  getTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
