import { RouteOptions } from "fastify";

const readSecretRoute: RouteOptions = {
    method: 'GET',
    url: '/read-secret',
    handler: async (request, reply) => {
        const secret = process.env.SECRET;
        reply.send(secret);
    },
    constraints: {
        mustAuth: true
    },
}