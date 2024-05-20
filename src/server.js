import Fastify from "fastify";
import routes from "./routes.js";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3333 });
    console.log("Servidor rodando.");
  } catch (error) {
    process.exit(1);
  }
};

start();
