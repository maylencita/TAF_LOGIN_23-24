import { FastifyInstance } from 'fastify'
import { userCreateSchema } from '../schema/user.schema'
// import { loginSchema, signupSchema } from '../schema'
import * as controllers from '../controllers'

async function userRouter(fastify: FastifyInstance) {
  // fastify.decorateRequest('authUser', '')

  fastify.route({
    method: 'GET',
    url: '/:id',
    // schema: loginSchema,
    handler: controllers.getUserById,
  })
  
  fastify.route({
    method: 'GET',
    url: '/',
    // schema: loginSchema,
    handler: controllers.listUsers,
  })

  fastify.route({
    method: 'POST',
    url: '/',
    schema: userCreateSchema,    
    handler: controllers.addUser,
  })
}

export default userRouter
