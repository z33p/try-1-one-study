const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");

describe("Testing FlashCardsController", () => {
  const VALID_TOKEN = getValidToken();

  const title = "this is a title of ";
  const detail = "this is a ";

  it("should create a deck", async () => {
    const res = await request(app)
      .post("/decks")
      .set("authorization", "Bearer " + VALID_TOKEN)
      .send({
        title: title + "deck"
      });

    expect(res.statusCode).toBe(201);
  });

  it("should get the deck just created", async () => {
    const res = await request(app)
      .get("/decks/1")
      .set("authorization", "Bearer " + VALID_TOKEN);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(title + "deck");
  });

  it("should create a card", async () => {
    const res = await request(app)
      .post("/decks/1/cards")
      .set("authorization", "Bearer " + VALID_TOKEN)
      .send({
        title: title + "card",
        detail: detail + "card"
      });

    expect(res.statusCode).toBe(201);
  });

  it("should get the card just created", async () => {
    const res = await request(app)
      .get("/cards/1")
      .set("authorization", "Bearer " + VALID_TOKEN);

    expect(res.statusCode).toBe(200);
    expect(res.body.detail).toBe(detail + "card");
    expect(res.body.title).toBe(title + "card");
  });
});
