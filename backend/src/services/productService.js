/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { productModel } from '~/models/productModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    const newProduct = {
      ...reqBody,
      slug: slugify(reqBody.name),
    }

    // Transfer newProduct to Model to save to database
    const createProduct = await productModel.createNew(newProduct)
    console.log(createProduct)

    // Return newProduct after saving
    const getNewProduct = await productModel.findOneById(
      createProduct.insertedId
    )
    console.log(getNewProduct)

    return getNewProduct
  } catch (error) {
    throw error
  }
}

const getDetails = async (boardId) => {
  try {
    const product = await productModel.getDetails(boardId)
    if (!product) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Product not found!')
    }
    return product
  } catch (error) {
    throw error
  }
}

export const productService = { createNew, getDetails }
