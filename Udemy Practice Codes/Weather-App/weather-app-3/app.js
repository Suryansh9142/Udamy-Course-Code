const request = require('request')

const url = ('http://api.weatherstack.com/current?access_key=e657c41dbcf2fab09409de61805bd167&query=37.8267,-122.4233')

request( url, (error, response) => {
    // console.log(response)
    const data = JSON.parse(response.body)
    // console.log(data)
    console.log(data.current)
})