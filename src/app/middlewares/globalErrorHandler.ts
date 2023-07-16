/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import { IGenericErrorMessage } from '../../interfaces/error'
import handleValidationError from '../../errors/handleValidationError'
import ApiError from '../../errors/ApiError'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Something went wrong!!!'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidatorError') {
    const simplefiedError = handleValidationError(err)
    statusCode = simplefiedError.statusCode
    message = simplefiedError.message
    errorMessages = simplefiedError.errorMessages
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.environment !== 'production' ? err?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
