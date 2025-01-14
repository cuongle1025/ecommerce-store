import Joi from 'joi'
import { GET_DB } from '~/config/mongodb'
import { ObjectId } from 'mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

// Define Collection (Name & Schema)
const BOARD_COLLECTION_NAME = 'products'
const BOARD_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().min(3).max(50).trim().strict(),
  slug: Joi.string().required().min(3).trim().strict(),
  description: Joi.string().required().min(3).max(256).trim().strict(),
  price: Joi.number().precision(2).positive().required(),
  ratings: Joi.number().integer().min(1).max(5).required(),
  quantity: Joi.number().integer().min(0).required(),
  category: Joi.string().required(),
  images: Joi.array().items(Joi.string()).optional(),
  reviews: Joi.array()
    .items(
      Joi.object({
        userId: Joi.string()
          .pattern(OBJECT_ID_RULE) // Object Id pattern
          .message(OBJECT_ID_RULE_MESSAGE)
          .required(),
        rating: Joi.number().integer().min(1).max(5).required(),
        comment: Joi.string().optional(),
        createdAt: Joi.date().iso().required(),
      })
    )
    .optional(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _deleted: Joi.boolean().default(false),
})

const validateBeforeCreate = async (data) => {
  return await BOARD_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  })
}

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const createProduct = await GET_DB()
      .collection(BOARD_COLLECTION_NAME)
      .insertOne(validData)
    return createProduct
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (id) => {
  try {
    const result = await GET_DB()
      .collection(BOARD_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(`${id}`) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getDetails = async (id) => {
  try {
    const result = await GET_DB()
      .collection(BOARD_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(`${id}`) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const productModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetails,
}
