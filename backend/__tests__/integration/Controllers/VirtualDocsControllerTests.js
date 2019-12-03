const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");

describe("Testing VirtualDocsController", () => {
  const VALID_TOKEN = getValidToken();

  const title = "this is a title of ";
  const body = "this is a body ";

  it("should create a virtual_doc", async () => {
    const res = await request(app)
      .post("/virtual_docs")
      .set("authorization", "Bearer " + VALID_TOKEN)
      .send({
        title: title + "virtualdoc",
        body
      });

    expect(res.statusCode).toBe(201);
  });

  it("should get the virtual_doc just created", async () => {
    const res = await request(app)
      .get("/virtual_docs/1")
      .set("authorization", "Bearer " + VALID_TOKEN);

    expect(res.statusCode).toBe(200);
    expect(res.body.body).toBe(body);
    expect(res.body.title).toBe(title + "virtualdoc");
  });
});
