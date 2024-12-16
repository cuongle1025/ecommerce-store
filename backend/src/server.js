/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'

const app = express()
const START_SERVER = () => {
  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`3. Running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })

  exitHook(() => {
    console.log('Disconneting from MongoDB Cloud Atlas!')
    CLOSE_DB()
    console.log('Disconnected!')
  })
}

console.log('1. Connecting to MongoDB Cloud Atlas...')
CONNECT_DB()
  .then(() => console.log('2. Conneted to MongoDB Cloud Atlas!'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
