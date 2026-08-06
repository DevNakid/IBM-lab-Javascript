function showweatherDetails(event) {
      event.preventDefault();
}
//  const city = document.getElementById('city').value;
 const city = "Marrakech"

      const apiKey = '4957437dca93b956ae20944fa61c243f'; // Replace 'YOUR_API_KEY' with your actual API key

      const apiUrlCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
      
    //getting lat and lon
    var lat = "";
    var lon = "";

      fetch(apiUrlCity)
      .then((response) => response.json())
      .then((data) => {
         lat = data[0].lat;
         lon = data[0].lon;
      });
      const apiUrlWeather = `https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      //getting weather
      var weathers = "";

      fetch(apiUrlWeather)
      .then((response) => response.json())
      .then((data) => {
        // const weatherInfo = document.getElementById("weatherInfo");
        // weatherInfo.innerHTML = `<h2>Weather in ${city}</h2>
        // p>Temperature: ${data[0].weather[0].main} </p>
        // <p>Weather: ${data[0].weather[0].description}</p>`;
        console.log(data);
      });
document.getElementById("weatherForm").addEventListener("submit", showweatherDetails);