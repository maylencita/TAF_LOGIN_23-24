import { FastifyReply, FastifyRequest } from "fastify"
import { IUserCreateRequest, IUser } from "interfaces"

const inMemoryUsers: IUser[] = [
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
  Promise.resolve(inMemoryUsers)
  .then((users) => {
    reply.send({ data: users })
  })
}

export const addUser = async (request: IUserCreateRequest, reply: FastifyReply) => {
  Promise.resolve(inMemoryUsers)
  .then(() => {
    const lastId = inMemoryUsers[inMemoryUsers.length - 1].id
    const newUser = {
      id: lastId + 1,
      name: request.body.name      
    }
    inMemoryUsers.push(newUser)
  }).then(() => {
    reply.send({ data: inMemoryUsers })
  })
}