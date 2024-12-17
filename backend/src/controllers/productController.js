import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    console.log('req/body', req.body)
    console.log('req/query', req.query)
    console.log('req/params', req.params)

    // Move data to Service

    // Return data to Client
    res
      .status(StatusCodes.CREATED)
      .json({ message: 'POST: API create product controller' })
  } catch (error) {
    next(error)
  }
}

export const productController = { createNew }
