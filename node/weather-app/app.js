import request from 'request';

const url = `https://api.mapbox.com/search/geocode/v6/forward?q=Stockholm&access_token=pk.eyJ1Ijoia2xhc29obHNzb24iLCJhIjoiY202bTB5cTl0MGcxajJsczcxaGR6c21qcSJ9.SrjYU1xXw_b30Ogev5_iOw&limit=1`;

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.');
    } else {
        const longitude = response.body.features[0].geometry.coordinates[0];
        const latitude = response.body.features[0].geometry.coordinates[1];
        console.log(latitude, longitude);
    }
});
