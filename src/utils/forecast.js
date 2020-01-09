const request = require('request');

// Weather
const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/8006d5bc30bc4689e7dbdff2c1857372/${latitude}, ${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees outside. There is a ${body.currently.precipProbability}% chance of rain. The temperature high for the day is ${body.daily.data[0].temperatureHigh} degrees.`
      );
    }
  });
};

module.exports = forecast;
