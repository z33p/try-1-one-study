const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");
const ApiRoutes = require("../../../src/contracts/ApiRoutes");
const BookRequest = require("../../../src/contracts/Request/BookRequest");

describe("Testing BookController", () => {
  const VALID_TOKEN = getValidToken();

  const title = "book's title";
  const detail = "book's detail";

  it(`will create a book using the route: ${ApiRoutes.books.create}`, async () => {
    const res = await request(app)
      .post(ApiRoutes.books.create)
      .set("authorization", `Bearer ${VALID_TOKEN}`)
      .send(new BookRequest(title, detail));

    expect(res.statusCode).toBe(201);
  });

  it(`will get the book just created it'll use the route: ${ApiRoutes.books.test.index(
    1
  )}`, async () => {
    const res = await request(app)
      .get(ApiRoutes.books.test.index(1))
      .set("authorization", `Bearer ${VALID_TOKEN}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(title);
    expect(res.body.detail).toBe(detail);
  });
});
