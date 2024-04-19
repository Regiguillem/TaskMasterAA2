const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["todo", "in progress", "done"],
    default: "todo",
  },
});

module.exports = mongoose.model("Task", taskSchema);
