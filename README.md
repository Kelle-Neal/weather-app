# weather-app

https://openweathermap.org/api/one-call-3



Key
9f901f3fe7c99a6228539bcc88d7e3f2

CSS in Javascript
https://www.w3schools.com/jsref/dom_obj_style.asp

Events in Javascript
https://www.w3schools.com/jsref/dom_obj_event.asp




Fields in API response

https://openweathermap.org/api/one-call-3#hist_parameter




http://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&units={units}

Units of measurement
standard, metric and imperial units are available.

List of all API parameters with available units.
API call

http://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&units={units}

Parameters
units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.

Temperature is available in Fahrenheit, Celsius and Kelvin units.
Wind speed is available in miles/hour and meter/sec.

For temperature in Fahrenheit and wind speed in miles/hour, use units=imperial
For temperature in Celsius and wind speed in meter/sec, use units=metric
Temperature in Kelvin and wind speed in meter/sec is used by default, so there is no need to use the units parameter in the API call if you want this

Examples of API calls

Standard (default)

api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335

Metric

api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335&units=metric

Imperial

api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335&units=imperial -->



https://openweathermap.org/api/geocoding-api -->

Built-in API request by ZIP code
Please note if country is not specified then the search works for USA as a default.

API call

https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

Parameters
zip	required	Zip code
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
mode	optional	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more
units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more
lang	optional	You can use this parameter to get the output in your language. Learn more
Examples of API calls

https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key} -->



<!-- https://openweathermap.org/weather-conditions -->


