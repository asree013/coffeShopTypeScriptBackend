import * as fastify from "fastify";

import router from "./router";

const app: fastify.FastifyInstance = fastify.fastify()

app.register(router)
app.register(require('fastify-cors'))
app.register(require('fastify-formbody'))

export default app