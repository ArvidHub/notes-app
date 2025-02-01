import path, { dirname } from 'path';
import express from 'express';

const app = express();
const publicDirectoryPath = path.join(dirname('./'), '../public');

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send('Weather Page');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});