import fastify, { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function user(fastify: FastifyInstance) {
    fastify.get('/user', (req: FastifyRequest, rep: FastifyReply) => {
        rep.send({result: 'user is Running!!!'})
    })
    //Create
    fastify.post('/register', (req: FastifyRequest, rep: FastifyReply) => {
        const username = req.body
        const password = req.body
        rep.send({reply: 'ok', result: username, password})
    })
}