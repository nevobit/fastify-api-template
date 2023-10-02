import { RouteOptions } from 'fastify';

import healthCheckRoute from './health-check';

export default [
  healthCheckRoute,
].reduce((a, b) => {
  const {
    constraints,
    ...definiton
  } = b;

  if ((constraints || {}).mustAuth) {
    a.authRoutes.push(definiton);
  } else {
    a.openRoutes.push(definiton);
  }

  return a;
}, {
  openRoutes: [] as RouteOptions[],
  authRoutes: [] as RouteOptions[],
});