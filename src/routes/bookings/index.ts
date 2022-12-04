import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post("/", async function (request, reply) {
    return "Book a studio session";
  });
  fastify.get("/", async function (request, reply) {
    return "Retrieve session bookings";
  });
};

export default root;
