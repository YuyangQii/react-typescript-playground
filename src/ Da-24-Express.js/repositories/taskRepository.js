const tasks = [{ id: 1, title: "Learn Express"}];

export const findAll = () => {
  return tasks;
};

export const findById = (id) => {
  return tasks.find(task => task.id === id);
};
