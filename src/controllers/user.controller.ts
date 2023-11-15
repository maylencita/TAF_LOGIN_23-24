import { FastifyReply, FastifyRequest } from "fastify"
import { IUserCreateRequest, IUser, IUserRequest } from "interfaces"
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import pool from '../db/pgPool'

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
  return db.sql<s.users.SQL, s.users.Selectable[]>`SELECT * FROM ${"users"}`
  .run(pool)
  .then((users) => ({ data: users }))
}

export const addUser = async (request: IUserCreateRequest, reply: FastifyReply) => {
  return db.sql<s.users.SQL, s.users.Selectable[]>`
    INSERT INTO ${"users"} (${db.cols(request.body)})
    VALUES (${db.vals(request.body)}) RETURNING *`
    .run(pool)
    .then((users) => reply.send({ data: users }))
}

export const getUserById = async (request: IUserRequest, reply: FastifyReply) => {
  const userId = parseInt(request.params.id)
  return db.sql<s.users.SQL, s.users.Selectable[]>`
    SELECT * FROM ${"users"} WHERE ${"user_id"} = ${db.param(userId)}`
    .run(pool)
    .then((users) => ({ data: users }))
}