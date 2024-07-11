const request = require('request')
const chalk = require('chalk')

const url = ('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VyeWFuc2gwMDMiLCJhIjoiY2x5ZnU1ZTlwMDNpbTJpcG9kd2h6ZWc4ZCJ9.vIbHkQ9MPV22men4RnWjQA&limit=1') // &units=m : for celsius

request({ url: url, json: true }, (error, response) => {
    const place = chalk.green(response.body.features[0].place_name)
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(`This is the latitude of ${place} :-`,latitude,` And this is longitude`, longitude)
})