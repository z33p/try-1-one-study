const request = require("supertest");
const app = require("../../src/server");
const jwt = require("jsonwebtoken");
require("dotenv/config");

describe("Testing routes for virtual documents application", () => {
  const VALID_TOKEN = jwt.sign(
    { unique_name: "24317212-68ff-4f19-95a1-d70fabac9154" },
    process.env.ACCESS_TOKEN_SECRET
  );

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
