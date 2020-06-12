import express from "express";
const routes = express.Router();

const users = [
  { nome: "thomas", idade:"19"},
  { nome: "Joao ", idade:"29"}
]

routes.get('/users', (req, res) => {
  res.send(users[0]);
});

export default routes;