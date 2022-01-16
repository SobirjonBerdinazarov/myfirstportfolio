class Weather{
  constructor(city){
    this.apiKey = '1bb1e0d501e34ec1531795af304e5190';
    this.city = city;
    // this.state = state;
  }

  //fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city){
    this.city = city;
    // this.state = state;
  }
}