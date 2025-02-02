import request from 'request';


const geocode = (address, callback) => {
    if (!address) {
        return callback('Please provide an address!', undefined);
    }
    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(address)}&access_token=pk.eyJ1Ijoia2xhc29obHNzb24iLCJhIjoiY202bTB5cTl0MGcxajJsczcxaGR6c21qcSJ9.SrjYU1xXw_b30Ogev5_iOw&limit=1`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                longitude: body.features[0].geometry.coordinates[0],
                latitude: body.features[0].geometry.coordinates[1],
                location: body.features[0].properties.place_formatted
            });
        }
    });
}

export { geocode };