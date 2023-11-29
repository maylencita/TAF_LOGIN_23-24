import fastify from 'fastify'
import userRouter from './routes/user.router'

import { initDB } from './db/initDB';

import 'dotenv/config'

const port = 5000;
const host = '0.0.0.0'

const startServer = async () => {
  try {
    await initDB()
    console.log('Database connected')
  } catch (e) {
    console.error('Could not init database: ', e)
    process.exit(1)
  }

  try {
    const server = fastify()

    const errorHandler = (error, address) => {
      console.log(error);
      server.log.error(error, address);
    }

    server.register(userRouter, { prefix: '/api/user' })

    await server.listen({ host, port }, errorHandler)
    console.log(`Server is listening on ${host}:${port}`)
  } catch (e) {
    console.error(e)
  }
}

process.on('unhandledRejection', (e) => {
  console.error(e)
  process.exit(1)
})

startServer()