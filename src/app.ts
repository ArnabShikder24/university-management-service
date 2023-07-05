import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Route
app.use('/api/v1/users', userRouter)

// class ApiError extends Error {
//   statusCode: number;
//   constructor(statusCode: number, message: string | undefined, stack = '') {
//     super(message);
//     this.statusCode = statusCode;
//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

app.get('/', async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Successfully Run',
  })
  // throw new ApiError(400, 'error vaiaya error')
})

// Global error handle
// app.use((err, req, res, next) => {

// })

export default app
