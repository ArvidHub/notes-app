import request from "supertest";
import app from "../src/app.js";

test("should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Arvid",
      email: "x0XfH@example.com",
      password: "MyPass123!",
    })
    .expect(201);
});
