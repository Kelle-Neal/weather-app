PSEUDOCODE 

# Pseudocode for Weather App

## QUESTIONS

- How do we make sure the zip is only 5 integers?
  - How and when does the input clear out?
- What end point are we using from the API?
  - Are there any query parameters to send over?
  - Where do I put the API key?
- What happens when we enter a new zip?
- When I click the button does it hide the bottom panel


## HTML/CSS

- Conditional rendering
  - When you first load page, the only thing seen is the input box and the button
  - After submission of a zip code you see the rest.

## OBJECTIVES

- Use a single div for the whole application in HTML  
  - document.createElement
  - document.appendChild
- Use OpenWeather API to fetch weather data.
- Use zip code as the user input.
- Use an onClick or onSubmit to execute an Axios GET request to get weather data from API
- Handle successful and unsuccessful attempts
  - If Successful display/return
    - City Name
    - Current weather conditions
    - Current temperature in Kelvin, Fahrenheit and Celsius
    - A unique image, decided by the current temp and the API
  - If Unsuccessful display/return
    - Message from the API  
  - Responsive layout using Bootstrap that works in both mobile and desktop (different layouts) and applies atomic design principles.

## STRETCH GOALS

- Get weather based on location data gathered from current location functionality.
- Store weather data in multiple locations.
- Save the location data and/or weather data in Local Storage.
- Use more data provided by the API
- Keep Track of the user's current page in local storage if they refresh accidentally
- Dynamically change CSS with Javascript based on the current temp or weather

## ATOMIC DESIGN

### ATOMS

- App Title
- Zip Input Field
- Get Weather Button
- City Label
- City Output Field
- Temperature Label
- Kelvin Output Field
- Fahrenheit Output Field
- Celsius Output Field
- Weather Condition Label
- Weather Condition Output Field
- Other Info Label
- Other Info Image
- Error Message

### MOLECULES

- **City Block**
  - City Label
  - City Output Field
- **Temperature Block**
  - Temperature Label
  - Kelvin Output Field
  - Fahrenheit Output Field
  - Celsius Output Field
- **Weather Condition Block**
  - Weather Condition Label
  - Weather Condition Output Field
- **Other Info Block**
  - Other Info Label
  - Other Info Image

### ORGANISMS

- **Action Container**
  - App Title
  - Zip Input Field
  - Get Weather Button
- **Info Container**
  - City Block
  - Temperature Block
  - Weather Condition Block
  - Other Info Block

### TEMPLATES

- Weather App

## PROCEDURES

- Install Axios
src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"  
src="https://unpkg.com/axios@1.1.2/dist/axios.min.js")  
- Install Bootstrap  
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"  
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"  
- Create variables and HTML elements (inner.html)
- Append all HTML elements to the parent MAIN  
https://www.w3schools.com/js/js_htmldom.asp  
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement  
  - MAIN Container 
    - Action Container
      - App Title - Row
      - Zip Input - Column x 6
      - Submit Button - Column x 6
    - Info Container  
      - City Label - Row
      - City Data - Row
      - Temperature Label - Row
        - Kelvin - Column x 4
        - Fahrenheit - Column x 4
        - Celsius - Column x 4
      - Condition Label - Row
      - Condition Data - Row
      - Other Info Label - Row
      - Other Info Data - Row
- Create onClick button with an event handler to start the getWeather function
  - User enters zip code into field
  - User clicks on the button
  - Calls Weather API by Zip  
  http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&lang=en&appid={API key}
    - If zip is invalid return error message and clear zip field
    - If zip is valid import data from API and clear zip field
  - When new data is entered into Zip field and submit is entered
    - Clear Data
    - Run Get Weather Function
- Get Weather Function
  - Get City Data
    - Take zip entered and get city name (may need to convert to geo codes)
      - populate HTML element City
  - Get Temperature Data
    - populate HTML elements
      - Kelvin
      - Fahrenheit
      - Celsius
  - Get Condition Data
    - populate HTML element Condition with the description based on ID code
  - Get Other Info Data
    - Get current time (comes over in UTC)
    - Get timezone for location
    - Convert UTC time to locations timezone
    - Determine if it's day or night using sunset and sunrise times
      - populate Other Info Data with Image determined by ID code
        - if night use night image
        - if day use day image

## VARIABLES

#### AXIOS  

- baseURL: "https://openweathermap.org/"

#### API IMPORTED VARIABLES

- appid - Unique API key
- zip - Zip code
- name - Name of the area found (CITY)
- country - Country of the the found zip code
- lat - latitude
- lon - longitude
- timezone - Timezone name for the requested location
- timezone_offset - Shift in seconds from UTC
- data.dt - Requested time, Unix, UTC
- data.sunrise - Sunrise time, Unix, UTC
- data.sunset - Sunset time, Unix, UTC
- data.temp - Temperature  
(https://openweathermap.org/api/one-call-3#data)
  - units
    - standard - Kelvin
    - imperial - Fahrenheit
    - metric - Celsius
- data.weather  
(https://openweathermap.org/weather-conditions)
  - data.weather.id - Weather condition id
  - data.weather.main - Group of weather parameters (Rain, Snow, Extreme etc.)
  - data.weather.description - Weather condition within the group
  - data.weather.icon - Weather icon id. How to get icons

#### HTML

## STATES


## FUNCTIONS

getDate
getWeather
