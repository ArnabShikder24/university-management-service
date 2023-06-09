import mongoose from 'mongoose'
import app from './app'
import config from './config'

const PORT = config.PORT

async function mainServer() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`Database connection successfully`)

    app.listen(PORT, () => console.log('Server Running on ', PORT))
  } catch (error) {
    console.log('Database connection failed!!!', error)
  }
}

mainServer();
