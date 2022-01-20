//init storage
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();
//init weather object
const weather = new Weather(weatherLocation.city);
//init UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  // const state = document.getElementById('state').value;

  weather.changeLocation(city);

  storage.setLocationData(city);

  getWeather();

  $('#locModal').modal('hide');
});


function getWeather(){
  weather.getWeather()
 .then(results => {
   ui.paint(results);
   console.log(results);
 })
 .catch(err => console.log(err));
}
