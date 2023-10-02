import { RouteOptions } from "fastify";
// @ts-ignore
import { version } from '../../../package.json';
import { status } from "../../documentation";

const healthCheckRoute: RouteOptions = {
  method: 'GET',
  url: '/health-check',
  schema: status,
  handler: async () => ({
    appVersion: version,
    status: 'ok',
    uptime: process.uptime(),
  }),
};

export default healthCheckRoute;