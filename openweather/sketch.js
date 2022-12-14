let weatherResponse;

// https://openweathermap.org/weather-conditions
// Rain, Snow, Clouds, Thunderstorm, Drizzle, Clear
// Mist, Smoke, Haze, Dust, Fog, Sand, Dust, Ash, Squall, Tornado

// weatherResponse = {"coord":{"lon":-123.3298,"lat":48.4073},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":4.78,"feels_like":3.05,"temp_min":3.33,"temp_max":6,"pressure":1025,"humidity":85},"visibility":10000,"wind":{"speed":2.06,"deg":10},"clouds":{"all":100},"dt":1670988226,"sys":{"type":1,"id":357,"country":"CA","sunrise":1670947008,"sunset":1670977114},"timezone":-28800,"id":6174041,"name":"Victoria","cod":200};


let cloudx = 100;
let cloudy = 100;

let temp;
let feelsLike;
let description;

function preload() {
  // Get the most recent earthquake in the database
  let url =
   'https://api.openweathermap.org/data/2.5/weather?lat=48.407326&lon=-123.329773&units=metric&appid=7d68efb7bd948e3a177fb54bb2ee4685';
  httpGet(url, 'jsonp', false, function(response) {
    // when the HTTP request completes, populate the variable that holds the
    // earthquake data used in the visualization.
    weatherResponse = response;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  if (!weatherResponse) {
    // Wait until the weather data has loaded before drawing.
    return;
  }

  temp = Math.round(weatherResponse['main']['temp']);
  feelsLike = Math.round(weatherResponse['main']['feels_like']);
  description = weatherResponse['weather'][0]['description'];

  background(51);

  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 100, cloudy + 220);

  text(weatherResponse['name']);

  textSize(32);
  fill(255, 255, 255);
  text(weatherResponse['name'], 10, 150);

  fill(255, 0, 0);
  textSize(20);
  text(`Actual`, 10, 200);
  text(`Feels Like`, 200, 200);

  fill(255, 255, 255);
  textSize(46);

  text(`${temp} °C`, 10, 250);
  text(`${feelsLike} °C`, 200, 250);

  text(description, 200, 450);

  cloudx+=0.1;
}

function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
