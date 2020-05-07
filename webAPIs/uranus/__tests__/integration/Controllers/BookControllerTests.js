const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");
const ApiRoutes = require("../../../src/contracts/ApiRoutes");
const NotebookRequest = require("../../../src/contracts/Request/NotebookRequest");

describe("Testing NotebookController", () => {
  const VALID_TOKEN = getValidToken();

  const title = "notebook's title";
  const detail = "notebook's detail";

  it(`will create a notebook using the route: ${ApiRoutes.notebooks.create}`, async () => {
    const res = await request(app)
      .post(ApiRoutes.notebooks.create)
      .set("authorization", `Bearer ${VALID_TOKEN}`)
      .send(new NotebookRequest(title, detail));

    expect(res.statusCode).toBe(201);
  });

  it(`will get the book just created it'll use the route: ${ApiRoutes.notebooks.test.index(
    1
  )}`, async () => {
    const res = await request(app)
      .get(ApiRoutes.notebooks.test.index(1))
      .set("authorization", `Bearer ${VALID_TOKEN}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(title);
    expect(res.body.detail).toBe(detail);
  });
});
