import * as taskRepository from "../repositories/taskRepository.js";
import AppError from "../errors/AppError.js";

export const getTaskById = (id) => {
  const task = taskRepository.findById(id);

  if (!task) {
    throw new AppError("Task not found", 404);
  }
  return task;
};

export const getAllTasks = () => {
  return taskRepository.findAll();
};
