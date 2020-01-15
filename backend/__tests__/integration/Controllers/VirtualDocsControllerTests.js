const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");
const VirtualDocsRequest = require("../../../src/contracts/Request/VirtualDocRequest");
const ApiRoutes = require("../../../src/contracts/ApiRoutes");

describe("Testing VirtualDocsController", () => {
  const VALID_TOKEN = getValidToken();

  const title = "virtual_doc's title";
  const body = "virtual_doc's body ";

  it(`will create a virtual_doc using the route: ${ApiRoutes.virtual_docs.test.create(
    1
  )}`, async () => {
    const res = await request(app)
      .post(ApiRoutes.virtual_docs.test.create(1))
      .set("authorization", `Bearer ${VALID_TOKEN}`)
      .send(new VirtualDocsRequest(title, body));

    expect(res.statusCode).toBe(201);
  });

  it(`will get the virtual_doc just created it'll use the route: ${ApiRoutes.virtual_docs.test.index(
    1
  )}`, async () => {
    const res = await request(app)
      .get(ApiRoutes.virtual_docs.test.index(1))
      .set("authorization", `Bearer ${VALID_TOKEN}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(title);
    expect(res.body.body).toBe(body);
  });
});
