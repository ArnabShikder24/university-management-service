import mongoose from 'mongoose'
import app from './app'
import config from './config'
import logger from './shared/logger'

const PORT = config.PORT

async function mainServer() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`📡 Database connection successfully`)

    app.listen(PORT, () => logger.info('Server Running on ', PORT))
  } catch (error) {
    logger.error('❌❌❌ Database connection failed!!!', error)
  }
}

mainServer()
