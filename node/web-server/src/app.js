import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import hbs from 'hbs'
import { geocode } from './utils/geocode.js'
import { forecast } from './utils/forecast.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Define paths for Express config
const publicDirectoryPath = join(__dirname, '../public')
const viewsPath = join(__dirname, '../templates/views')
const partialsPath = join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Arvid Westberg'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Arvid Westberg'
    })
})

app.get('/weather', (req, res) => {
if(!req.query.adress){
    return res.send('Provide adress input')
}
geocode(req.query.adress, (error, {longitude, latitude, location}={}) => {
    if (error) {
        return res.send({ error })
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return res.send({ error })
        }
        res.send({
            forecast: forecastData,
            location,
            adress: req.query.adress
        })
    })
})
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        helpText: 'This is some helpful text.',
        name: 'Arvid Westberg'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Arvid Westberg',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Arvid Westberg',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})