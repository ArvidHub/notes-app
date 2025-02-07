import { MongoClient, ObjectId } from 'mongodb'

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL)

const connectDB = async () => {
    try {
        await client.connect()
        console.log('Connected correctly!')
        
        const db = client.db(databaseName)

        db.collection('tasks').findOne({ _id: new ObjectId('67a23b6eacb7e2ac45fe35c0') }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.error(error)
        })
        db.collection('tasks').find({ completed: false }).toArray().then((res) => {
            console.log(res)
        }).catch((error) => {
            console.error(error)
        })
            
    } catch (error) {
        console.error('Error connecting to database:', error)
    }
}

connectDB()