import '../src/db/mongoose.js';
import Task from '../models/task.js';

// Task.findByIdAndDelete('67a26d511fb437685b2196a2').then((task) => {
//     if (!task) {
//         return console.log('Task not found!');
//     }
//     console.log('one task deleted:', task.description);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('67a67dd425c1c8e005dbb29a').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});