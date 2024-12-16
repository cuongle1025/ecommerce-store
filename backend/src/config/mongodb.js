import { MongoClient, ServerApiVersion } from 'mongodb'
import { mongo } from 'mongoose'
import { env } from '~/config/environment'

let ecommerceDBInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  ecommerceDBInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = () => {
  if (!ecommerceDBInstance) throw new Error('Must connect to database first!')
  return ecommerceDBInstance
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}
