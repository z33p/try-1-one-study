const request = require("supertest");
const app = require("../../../src/server");
const getValidToken = require("../helpers");

describe("Testing TaskBoardController", () => {
  const VALID_TOKEN = getValidToken();

  const title = "this is a title of ";
  const detail = "this is a ";

  it("should create a board", async () => {
    const res = await request(app)
      .post("/boards")
      .set("authorization", "Bearer " + VALID_TOKEN)
      .send({
        title: title + "board"
      });

    expect(res.statusCode).toBe(201);
  });

  it("should get the board just created", async () => {
    const res = await request(app)
      .get("/boards/1")
      .set("authorization", "Bearer " + VALID_TOKEN);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(title + "board");
  });

  it("should create a task", async () => {
    const res = await request(app)
      .post("/boards/1/tasks")
      .set("authorization", "Bearer " + VALID_TOKEN)
      .send({
        title: title + "task",
        detail: detail + "task"
      });

    expect(res.statusCode).toBe(201);
  });

  it("should get the task just created", async () => {
    const res = await request(app)
      .get("/tasks/1")
      .set("authorization", "Bearer " + VALID_TOKEN);

    expect(res.statusCode).toBe(200);
    expect(res.body.detail).toBe(detail + "task");
    expect(res.body.title).toBe(title + "task");
  });
});
