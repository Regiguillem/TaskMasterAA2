const Panel = require("../TaskMasterAA2/app/models/Panel");
const Task = require("../TaskMasterAA2/app/models/Task");



const resolvers = {
  Query: {
    hello: () => "Hola desde Apollo Server",
    getPanels: async () => {
      return await Panel.find().populate('tasks');
    },
    getPanelById: async (_, { panelId }) => {
      return await Panel.findById(panelId).populate('tasks');
    },
    getTasks: async () => {
      return await Task.find();
    },
    getTaskById: async (_, { taskId }) => {
      return await Task.findById(taskId);
    },
  },
  Panel: {
    tasks: async (parent) => {
      return await Task.find({ panel: parent._id });
    },
  },
  Task: {
    panel: async (parent) => {
      return await Panel.findById(parent.panel);
    },
  },
};

module.exports = { resolvers };
