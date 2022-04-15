const mongoose = require("mongoose")
const mongoURI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI)
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = {
  connectDB,
}
