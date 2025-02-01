import request from 'request';

const url = 'http://api.weatherstack.com/current?access_key=3d6e3a4fdac86dbb7c8091076511d5ac&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
    }
});