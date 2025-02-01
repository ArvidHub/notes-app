import { geocode } from "./utils/geocode.js";
import { forecast } from "./utils/forecast.js";

const locationInput = process.argv[2];

geocode(locationInput, (error, data) => {
    if (error) {
        return console.log('Error', error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error);
        }
        console.log(data.location);
        console.log(forecastData);
    });
});
