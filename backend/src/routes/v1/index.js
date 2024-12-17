import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { productRoutes } from './productRoutes'

const Router = express.Router()

// Check API v1 status
Router.get('/status', (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ message: 'APIs v1 are ready to use.', status: StatusCodes.OK })
})

// Product APIs
Router.use('/products', productRoutes)

export const APIs_V1 = Router
