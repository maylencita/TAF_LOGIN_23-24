import { FastifyRequest } from 'fastify';

export interface IUser {
  id: number
  name: string
  score?: number
}

export interface IUserCreateRequest extends FastifyRequest {
  body: {
    name: string
  }
}

export interface IUserRequest extends FastifyRequest {
  params: {
    id: string
  }
}