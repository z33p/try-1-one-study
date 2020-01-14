const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");
const ApiRoutes = require("../../../src/contracts/ApiRoutes");

describe("Testing UserController", () => {
  const VALID_TOKEN = getValidToken();

  it("should not be authorized", async () => {
    const res = await request(app).get(ApiRoutes.users.all);

    expect(res.statusCode).toBe(401);
  });

  it("should create a user based on jwt property id", async () => {
    const res = await request(app)
      .post(ApiRoutes.users.create)
      .set("authorization", "Bearer " + VALID_TOKEN);

    expect(res.statusCode).toBe(201);
  });
});
