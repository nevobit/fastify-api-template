import { RouteOptions } from "fastify";

const readSecretRoute: RouteOptions = {
    method: 'GET',
    url: '/read-secret',
    handler: async (_, reply) => {
        const secret = process.env.SECRET;
        reply.send(secret);
    },
    constraints: {
        mustAuth: true
    },
}

export default readSecretRoute;