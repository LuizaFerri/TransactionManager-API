import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/", async (req, res) => {
  const transactions = await knex("sqlite_schema").select("*");
  return transactions;
});

app.listen({ port: 3333 }, () => {
  console.log("HTTP Server Running! http://localhost:3333");
});
