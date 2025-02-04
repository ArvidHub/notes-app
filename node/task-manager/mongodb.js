import { MongoClient, ObjectId } from 'mongodb'

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL)

client.connect().then(() => {
    const db = client.db(databaseName)
    db.collection('tasks').updateMany({ // false to true
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('tasks').findOne({ // find one task
    //     _id: new ObjectId('5f2e2e5b7a1f8b0e5c9a4d0b')
    // }).then((task) => {
    //     console.log(task)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // create a new task
    // db.collection('tasks').insertOne({
    //     description: 'Task 1',
    //     completed: false
    // }).then((result) => {
    //     console.log(result.ops)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({ // delete one task
    //     description: 'Task 1'
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

}).catch((error) => {
    console.log('Error connecting to database:', error)
})
