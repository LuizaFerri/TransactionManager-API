import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../src/app";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });
});

it("should be able to list all transactions", async () => {
  const createTransactionResponse = await request(app.server)
    .post("/transactions")
    .send({
      title: "New transaction",
      amount: 5000,
      type: "credit",
    });

  const cookies = createTransactionResponse.get("Set-Cookie");

  if (!cookies) {
    throw new Error("Cookie not found");
  }

  const listTransactionsResponse = await request(app.server)
    .get("/transactions")
    .set("Cookie", cookies)
    .expect(200);

  expect(listTransactionsResponse.body.transactions).toEqual([
    expect.objectContaining({
      title: "New transaction",
      amount: 5000,
    }),
  ]);
});
