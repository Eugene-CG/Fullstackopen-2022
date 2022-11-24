import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getNotes = () => {
  return axios.get(baseUrl).then((response) => response.data);
};
const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};
const deleteNote = (id) => {
  return axios.delete(`${baseUrl}/${id}`, {});
};
export default {
  create,
  getNotes,
  deleteNote,
};
