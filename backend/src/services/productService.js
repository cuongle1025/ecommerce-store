/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  try {
    const newProduct = {
      ...reqBody,
      slug: slugify(reqBody.title),
    }

    return newProduct
  } catch (error) {
    throw error
  }
}

export const productService = { createNew }
