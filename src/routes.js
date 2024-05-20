import Fastify from "fastify";
import { CreateUserController } from "./controllers/CreateUserController.js";

export default async function routes(fastify, options) {
  fastify.get("/teste", async (request, reply) => {
    return { ok: true };
  });

  fastify.post("/user", async (request, reply) => {
    return new CreateUserController().handle(request, reply);
  });
}
