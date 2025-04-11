import fastify from "fastify";
import cookie from "@fastify/cookie";
import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";
const app = fastify();

app.register(transactionsRoutes, {
  prefix: "transactions",
});

app.register(cookie);

app.listen({ port: env.PORT }, () => {
  console.log(`HTTP Server Running! http://localhost:${env.PORT}`);
});
