const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");
const VirtualPapersRequest = require("../../../src/contracts/Request/VirtualPaperRequest");
const ApiRoutes = require("../../../src/contracts/ApiRoutes");

describe("Testing VirtualPapersController", () => {
  const VALID_TOKEN = getValidToken();

  const title = "virtual_paper's title";
  const body = "virtual_paper's body ";

  it(`will create a virtual_paper using the route: ${ApiRoutes.virtual_papers.test.create(
    1
  )}`, async () => {
    const res = await request(app)
      .post(ApiRoutes.virtual_papers.test.create(1))
      .set("authorization", `Bearer ${VALID_TOKEN}`)
      .send(new VirtualPapersRequest(title, body));

    expect(res.statusCode).toBe(201);
  });

  it(`will get the virtual_paper just created it'll use the route: ${ApiRoutes.virtual_papers.test.index(
    1
  )}`, async () => {
    const res = await request(app)
      .get(ApiRoutes.virtual_papers.test.index(1))
      .set("authorization", `Bearer ${VALID_TOKEN}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(title);
    expect(res.body.body).toBe(body);
  });
});
