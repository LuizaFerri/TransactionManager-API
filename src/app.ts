import fastify from "fastify";
import cookie from "@fastify/cookie";
import { transactionsRoutes } from "./routes/transactions";
export 	const app = fastify();

app.register(transactionsRoutes, {
  prefix: "transactions",
});

app.register(cookie);