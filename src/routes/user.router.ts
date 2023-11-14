import { FastifyInstance } from 'fastify'
// import { loginSchema, signupSchema } from '../schema'
import * as controllers from '../controllers'

async function userRouter(fastify: FastifyInstance) {
  // fastify.decorateRequest('authUser', '')

  fastify.route({
    method: 'GET',
    url: '/',
    // schema: loginSchema,
    handler: controllers.listUsers,
  })

  fastify.route({
    method: 'POST',
    url: '/',
    // schema: signupSchema,
    handler: controllers.addUser,
  })
}

export default userRouter
