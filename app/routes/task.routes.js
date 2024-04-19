const express = require("express");
const router = express.Router();

import TaskController from "../controllers/TaskController";

//Extensión de la ruta
const extension = "/panel";

router.get(extension + "/panels", async (req, res) => {
  const taskController = new TaskController();

  return taskController.getAllTasks(req, res);
});

router.get(extension + "/:panelId", async (req, res) => {
  const taskController = new TaskController();

  return taskController.getTaskById(req, res);
});

module.exports = router;
