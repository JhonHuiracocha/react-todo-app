import axios from "axios";

const baseUlr = "http://localhost:3000/api";

export const getTaks = (take = 10, skip = 0) => {
  return axios.get(`${baseUlr}/tasks`, { params: { take, skip } });
};

export const getTaskById = (id) => {
  return axios.get(`${baseUlr}/tasks/${id}`);
};
