import mongoose from 'mongoose'

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionURL)
    .then(() => {
        console.log('Connected to MongoDB successfully!')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error)
    })