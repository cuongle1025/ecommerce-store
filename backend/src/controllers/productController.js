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

const getDetails = async (req, res, next) => {
  try {
    console.log('req/params', req.params)
    const productId = req.params.id

    // Transfer data to Service
    const product = await productService.getDetails(productId)

    // Return result to Client
    res.status(StatusCodes.OK).json(product)
  } catch (error) {
    next(error)
  }
}

export const productController = { createNew, getDetails }
