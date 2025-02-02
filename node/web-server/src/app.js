import path, { dirname } from 'path';
import express from 'express';
import hbs from 'hbs';

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(dirname('./'), '../public');
const viewsPath = path.join(dirname('./'), '../templates/views');
const partialsPath = path.join(dirname('./'), '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Arvid Westberg'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Arvid Westberg'
    });
});

app.get('/weather', (req, res) => {
    res.send('Weather Page');

});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        helpText: 'This is some helpful text.',
        name: 'Arvid Westberg'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Arvid Westberg',
        errorMessage: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Arvid Westberg',
        errorMessage: 'Page not found.'
    });
});

app.listen(3049, () => {
    console.log('Server is running on http://localhost:3049');
});