/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { productModel } from '~/models/productModel'

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

export const productService = { createNew }
