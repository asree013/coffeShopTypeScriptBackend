import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function product(fastify: FastifyInstance) {
    fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
        reply.send({reply: 'Controller Is Complete!!!'})
    })
}