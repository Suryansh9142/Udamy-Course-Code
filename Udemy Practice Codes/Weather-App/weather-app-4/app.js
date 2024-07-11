const request = require('request')

const url = ('http://api.weatherstack.com/current?access_key=e657c41dbcf2fab09409de61805bd167&query=37.8267,-122.4233&units=f') // &units=m : for celsius

request({ url: url, json: true }, (error, response) => {
    // console.log('This is the current temprature: ',(response.body.current.temperature), 'Degree')
    // console.log(`And it's feel like: `,(response.body.current.feelslike), 'Degree')
    console.log(response.body.current.weather_descriptions[0],'. This is the current temprature: ',(response.body.current.temperature), 'Fahrenheit')
    console.log('This is the current temprature: ',(response.body.current.temperature), 'Fahrenheit')
    console.log(`And it's feel like: `,(response.body.current.feelslike), 'Fahrenheit')
})