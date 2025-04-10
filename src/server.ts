import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
const app = fastify();

app.get("/", async (req, res) => {
  const transaction = await knex("transactions").select("*");
  return transaction;
});

app.listen({ port: env.PORT }, () => {
  console.log(`HTTP Server Running! http://localhost:${env.PORT}`);
});
