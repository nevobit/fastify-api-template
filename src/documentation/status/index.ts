import { FastifySchema } from "fastify";

const schema: FastifySchema = {
        tags: ['Status'],
        description: 'Return OK when the server is ready',
        response: {
            200: {
                type: 'object',
                properties: {
                    appVersion: { type: "string" },
                    status: { type: "string" },
                    uptime: { type: "string" },
                }
            }
        }
    }

export default schema;