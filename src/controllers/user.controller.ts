import { FastifyReply, FastifyRequest } from "fastify"
import { IUser } from "interfaces"

const staticUsers: IUser[] = [
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
  Promise.resolve(staticUsers)
  .then((users) => {
    reply.send({ data: users })
  })
}

export const addUser = async (request: FastifyRequest, reply: FastifyReply) => {
  // TODO: Add user
}