import axios from "axios";

const baseUlr = "http://localhost:3000/api";

export const createTask = (task) => {
  return axios.post(`${baseUlr}/tasks`, task);
};

export const getTaks = (take = 10, skip = 0) => {
  return axios.get(`${baseUlr}/tasks`, { params: { take, skip } });
};

export const getTaskById = (id) => {
  return axios.get(`${baseUlr}/tasks/${id}`);
};

export const updateTaskById = (id, updatedTask) => {
  return axios.patch(`${baseUlr}/tasks/${id}`, updatedTask);
};

export const getTasksByQuery = (title, take = 10, skip = 0) => {
  return axios.get(`${baseUlr}/tasks/search`, {
    params: { title, take, skip },
  });
};

export const deleteTaskById = (id) => {
  return axios.delete(`${baseUlr}/tasks/${id}`);
};
