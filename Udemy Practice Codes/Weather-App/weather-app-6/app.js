// 1)

// const request = require('request')
// const chalk = require('chalk')

// const url = ('http://api.weatherstack.com/current?access_key=e657c41dbcf2fab09409de61805bd167&query=37.8267,-122.4233&units=f') // &units=m : for celsius

// request({ url: url, json: true }, (error, response) => {

// //     if(response) {
// //         console.log(response.body.current.weather_descriptions[0],'. This is the current temprature: ',(response.body.current.temperature), 'Fahrenheit', `And it's feel like: `,(response.body.current.feelslike), 'Fahrenheit')
// //     } else {
// //         console.log(chalk.red.inverse('Something went wrong!'))
// //     }

//         if(error) {
//             console.log(chalk.red.inverse('Unable to connect to weather server!'))
//         } else if (response.body.error) { 
//             console.log(chalk.yellow.inverse('Unable to find location!'))
//         } else {
//             console.log(response.body.current.weather_descriptions[0],'. This is the current temprature: ',(response.body.current.temperature), 'Fahrenheit', `And it's feel like: `,(response.body.current.feelslike), 'Fahrenheit')
//         }
// })






const request = require('request')
const chalk = require('chalk')

const url = ('https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoic3VyeWFuc2gwMDMiLCJhIjoiY2x5ZnU1ZTlwMDNpbTJpcG9kd2h6ZWc4ZCJ9.vIbHkQ9MPV22men4RnWjQA&limit=1') // &units=m : for celsius

request({url: url,json: true}, (error, response) => {
    

    if (error) {
        console.log(chalk.red.inverse('Unable to connect to weather server!'))
    } else if (response.body.features.length === 0) {
        console.log(chalk.yellowBright.inverse('Unable to find location! Try again with different search term'))
    } else {
        const place = chalk.green(response.body.features[0].place_name)
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(`This is the latitude of ${place} :-`, latitude, ` And this is longitude`, longitude)   
    }
})