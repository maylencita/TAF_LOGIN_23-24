import { FastifyReply, FastifyRequest } from "fastify"
import { User } from "interfaces"

const staticUsers: User[] = [
  {
    id: 1,
    name: 'Joyce Byers'
  },
  {
    id: 2,
    name: 'Jimmi Hopper'
  },
  {
    id: 3,
    name: 'Mike Wheeler'
  },
  {
    id: 4,
    name: 'Dustin Henderson'
  },
  {
    id: 5,
    name: 'Lucas Sinclair'
  }
]

export const listUsers = async (request: FastifyRequest, reply: FastifyReply) => {
  console.log('listUsers')
  Promise.resolve(staticUsers)
  .then((users) => {
    reply.send({ data: users })
  })
}

export const addUser = async (request: FastifyRequest, reply: FastifyReply) => {
  // TODO: Add user
}