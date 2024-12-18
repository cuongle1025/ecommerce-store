import { StatusCodes } from 'http-status-codes'
import { productService } from '~/services/productService'

const createNew = async (req, res, next) => {
  try {
    console.log('req/body', req.body)
    console.log('req/query', req.query)
    console.log('req/params', req.params)

    // Transfer data to Service
    const createProduct = await productService.createNew(req.body)

    // Return result to Client
    res.status(StatusCodes.CREATED).json(createProduct)
  } catch (error) {
    next(error)
  }
}

export const productController = { createNew }
