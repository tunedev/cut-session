import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post("/", async function (request, reply) {
    return "Create studio sessions";
  });
  fastify.get("/", async function (request, reply) {
    return "Fetch studio sessions";
  });
};

export default root;
