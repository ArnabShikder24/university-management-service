import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Route
app.use('/api/v1/users', UserRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Successfully Run',
  })
  // next('orebaba error');
  // throw new ApiError(400, 'error vaiaya error')
})

// Global error handle
app.use(globalErrorHandler)

export default app
