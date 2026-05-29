import * as taskService from "../services/taskService.js";

export const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

export const getTaskById = (req, res) => {
  const task = taskService.getTaskById(
    Number(req.params.id)
  );

  res.json(task);
};
