function getWeather(zip) {
  const url = "https://api.openweathermap.org/data/2.5/weather?zip=${zip}&us&units=imperial&lang=us&appid=9f901f3fe7c99a6228539bcc88d7e3f2"

const messageElement = document.getElementById("message");
  messageElement.innerHTML = `Loading...`;
  messageElement.style.color = "gray";

  axios.get(url)
    .then(function (response) {
      document.getElementById("fahrenheit").innerText = `${response.data.main.temp}°F`;
      document.getElementById("")
      console.log(response.data.main.temp)
    })


    .catch(function (error) {
      const MessageElement = document.getELementByID("error");
      errorElement.innerText = `Invalid Zip Code, please try again.`;
      errorElement.style.color = "red";
    })


    .finally(function () {
      // always executed
      console.log("All done")
    });
  }

  window.onload = function() {
    document.getELementByID("sendZip").onclick = function() {
      const zip = document.getElementById("zipCodeInput").value;
      getWeather(zip);  
    }
  }