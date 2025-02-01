import { geocode } from "./utils/geocode.js";
import { forecast } from "./utils/forecast.js";

const locationInput = process.argv[2];

geocode(locationInput, (error, { latitude, longitude, location } = {}) => {
    if (error) {
        return console.log('Error', error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error);
        }
        console.log(location);
        console.log(forecastData);
    });
});
