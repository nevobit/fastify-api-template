// @ts-ignore
import { name as title, description, version } from '../../../package.json';

export const swaggerOptions = {
    swagger: {
        info: {
            title,
            description,
            version,
        },
        host: "localhost",
        schemes: ["http", "https"],
        consumes: ["application/json"],
        produces: ["application/json"],
        tags: [],
    },
};

export const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
};