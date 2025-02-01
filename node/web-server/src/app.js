import path, { dirname } from 'path';
import express from 'express';

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(dirname('./'), '../public');
const viewsPath = path.join(dirname('./'), '../views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    });
});

app.get('/weather', (req, res) => {
    res.send('Weather Page');
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        helpText: 'This is some helpful text.',
        name: 'Andrew Mead'
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});