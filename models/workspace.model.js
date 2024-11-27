const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      role: {
        type: String,
        enum: ["Admin", "Member", "Viewer"],
        default: "Member",
      },
    },
  ],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
});

const workspaceModel = mongoose.model("workspace", workspaceSchema);

module.exports = workspaceModel;
