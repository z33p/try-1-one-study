const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");

describe("Testing UserController", () => {
  const VALID_TOKEN = getValidToken();

  it("should not be authorized", async () => {
    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(401);
  });

  it("should create a user based on jwt property unique_name", async () => {
    const res = await request(app)
      .post("/users")
      .set("authorization", "Bearer " + VALID_TOKEN);

    expect(res.statusCode).toBe(201);
  });
});
