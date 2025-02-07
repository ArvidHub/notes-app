import express from 'express';
import User from '../models/user.js';
import Task from '../models/task.js';
import './db/mongoose.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/users', (req, res) => {

    const user = new User(req.body);
    console.log(user)
    user.save().then(() => {
        res.send(user);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.send(task);
    }).catch((error) => {
        res.status(400).send(error);
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});