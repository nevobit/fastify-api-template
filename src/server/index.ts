import 'dotenv/config'
import fastify from "fastify";
import Logger from "bunyan";
import routes from '../routes';
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
// @ts-ignore
import { name } from '../../package.json';
import { swaggerOptions, swaggerUiOptions } from '../documentation';
import path from 'path';
import { addAlias } from 'module-alias'

addAlias('@', path.join(__dirname, 'src'));

const {
    PORT,
    HOST,
    SECRET_TOKEN
  } = process.env;


const logger: Logger = Logger.createLogger({
    name,
    streams: [
      {
        level: "debug",
        stream: process.stdout,
      },
    ],
    
  });
  

const main = async () => {
    const server = fastify({
        logger: false
    });

    server.register(fastifySwagger, swaggerOptions);
    server.register(fastifySwaggerUi, swaggerUiOptions);

    await server.register((instance, _, next) => {
        instance.addHook('preValidation', ({headers}, reply, done) => {
          if (headers.authorization !== `Bearer ${SECRET_TOKEN}`) {
            reply.status(401).send('');
          }
    
          done();
        });
        routes.authRoutes.forEach((r) => instance.route(r));
    
        next();
      }, { prefix: 'api/v1' });

    await server.register((instance, _, next) => {
        routes.openRoutes.forEach((r) => instance.route(r));
    
        next();
      }, { prefix: 'api/v1' });

   
    await server.listen({ port: Number(PORT), host: HOST }, (address) => {
        logger.info(`Backend App is running at ${address}`);
        logger.info("Press CTRL-c to stop");
      });
}

void main();