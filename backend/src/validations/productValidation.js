import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    name: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
    price: Joi.number().precision(2).positive().required(),
    ratings: Joi.number().integer().min(1).max(5).required(),
    quantity: Joi.number().integer().min(0).required(),
    category: Joi.string().required(),
  })

  try {
    // console.log('req.body', req.body)
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // Move to Controller after successful Validation.
    next()
  } catch (error) {
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message)
    )
  }
}

export const productValidation = { createNew }
