class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = `${weather.weather[0].description}`;
    this.string.textContent = `${Math.round(weather.main.feels_like) - 273} C/ ${(Math.round(weather.main.feels_like) - 273)*9/5 + 32} F`;
    // this.details.textContent = weather.;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelslike.textContent = `Feels like: ${Math.round(weather.main.feels_like) - 273} C`;
    this.dewpoint.textContent = `Pressure: ${weather.main.pressure / 10} kPa`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}