const express = require("express");
const router = express.Router();

import PanelController from "../controllers/PanelController";

//Extensión de la ruta
const extension = "/panel";

router.get(extension + "/panels", async (req, res) => {
  const panelController = new PanelController();

  return panelController.getAllPanels(req, res);
});

router.get(extension + "/:panelId", async (req, res) => {
  const panelController = new PanelController();

  return panelController.getPanelById(req, res);
});

module.exports = router;
