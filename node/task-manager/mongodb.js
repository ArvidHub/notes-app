import { MongoClient } from 'mongodb'

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL)

const connect = async () => {
    try {
        await client.connect()
        
        const db = client.db(databaseName)
        // You can perform database operations here
        db.collection('users').insertOne({
            name: 'John',
            age: 30
        })

        
    } catch (error) {
        console.log('Unable to connect to database!', error)
    }
}

connect()