import request from "supertest";
import app from "../api";
import { describe, beforeAll, afterAll, test } from "vitest";

// describe("api server", () => {
//   let api;

//   beforeAll(() => {
//     api = app.listen(5000, () => {
//       console.log("Test server running on port 5000");
//     });
//   });

//   afterAll((promise) => {
//     console.log("Gracefully stopping test server");
//     api.close(promise);
//   });

//   test("it responds to get /flashcards with status 200", (promise) => {
//     request(api).get("/flashcards").expect(200, promise);
//   });

//   // test('it responds to get /events/:id with status 200', (done) => {
//   //     request(api)
//   //         .get('/events/1')
//   //         .expect(200, done)
//   // });
// });
