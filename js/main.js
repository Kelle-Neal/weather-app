function getWeather(zip){
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&lang=us&units=imperial&lang=us&appid=9f901f3fe7c99a6228539bcc88d7e3f2`

  axios.get(url)
    .then(function (response) {
      console.log(response); refreshData(response.data) 
    })
    .catch(function (error) {
      const messageElement = document.getElementById("message");
      messageElement.innerText = `Invalid Zip Code, please try again.`;
      messageElement.style.color = "red";
    })  
    .finally(function () {
      console.log("All done")
    })
}  

// function getIcon(weatherData)



function refreshData(weatherData) {
  document.getElementById("cityName").innerText = `${weatherData.name}`;
  document.getElementById("fahrenheit").innerText = `${weatherData.main.temp}°F`;
  //const celsiusMath = math.ceil(fahrenheit - 32) * (5 / 9);
  //document.getElementById("celsius").innerText = celsiusMath + "°C";
  //const kelvinMath = math.ceil(celsiusMath + 273.15);
  //document.getElementById("kelvin").innerText = "(celsius + 273.15)°K";
  document.getElementById("condition").innerText = `${weatherData.weather[0].description}`;
  document.getElementById("weatherImg").innerText = `${weatherData.weather[0].icon}`


}


window.onload = function() {
  document.getElementById("sendZip").onclick = function() {
    const zip = document.getElementById("zipCodeInput").value;
    getWeather(zip);  
  }
}