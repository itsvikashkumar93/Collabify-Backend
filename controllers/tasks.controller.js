const taskModel = require("../models/task.model");

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.createTask = async (req, res) => {
  try {
    const { title, description, status, assignedTo, deadline } = req.body;
    const task = await taskModel.create({
      title,
      description,
      status,
      assignedTo,
      deadline,
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getTaskById = async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateTask = async (req, res) => {
  try {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const task = await taskModel.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
