import { FastifyInstance } from 'fastify'

import productRoute from './controllers/product.controller'
import userRoute from './controllers/user.controller'

export default async function router(fastify:FastifyInstance) {
    //router Prefix
    fastify.register(productRoute, {prefix: '/'})
    fastify.register(userRoute, {prefix: '/api/authen'})
}