/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes'
import { env } from '~/config/environment'

export const errorHandlingMiddleware = (err, req, res, next) => {
  // Set status code to default 500
  if (!err.statusCode) err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR

  const responseError = {
    statusCode: err.statusCode,
    message: err.message || StatusCodes[err.statusCode],
    stack: err.stack,
  }
  // console.error(responseError)

  if (env.BUILD_MODE !== 'dev') delete responseError.stack

  // Return error response to frontend
  res.status(responseError.statusCode).json(responseError)
}
