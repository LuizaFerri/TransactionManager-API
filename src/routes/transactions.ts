import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";

export function transactionsRoutes(app: FastifyInstance) {
  app.get("/", async (req, reply) => {
    const transactions = await knex("transactions").select("*");
    return {
      transactions,
    };
  });

  app.get("/:id", async (request) => {
    const getTransactionsParamsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = getTransactionsParamsSchema.parse(request.params);
    const transaction = await knex("transactions").where("id", id).first();
    
    return {
      transaction,
    };
  });

  app.post("/", async (req, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    const { title, amount, type } = createTransactionBodySchema.parse(req.body);

    await knex("transactions").insert({
      id: crypto.randomUUID(),
      title,
      amount: type === "credit" ? amount : amount * -1,
    });

    return reply.status(201).send();
  });
}
