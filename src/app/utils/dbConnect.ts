import mongoose from 'mongoose'
import config from '../../config'

// const { database_url } = process.env

const dbConnect = async (): Promise<void> => {
  try {
    if (!config.database_url) {
      console.log('No URL found in .env file')
      process.exit(1)
    }
    await mongoose.connect(config.database_url)
    console.log('🚀 Database connected')
  } catch (error) {
    console.log(error)
  }
}

export { dbConnect }
