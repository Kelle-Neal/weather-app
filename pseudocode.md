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

### PAGES


### VARIABLES

##### STATE

- currentWeather (obj)
  - city
  - condition
  - temp - {} (k,f,c)
  - image/icon
- zipCode that got passed in?
- showConditions: boolean
- errorMessage

## FUNCTIONS

- init()
- convertTemperature()
- buildHTML() elements
  - show city, populate with stat data currentWeather.city
  - show temperature
  - change the src of the image tag to the currentWeather.image
  - populate with API data
- getData - call the API
  - Uses Axios to call some endpoint?
    - .then for success()  
      - updateState()
    - .then for state updated
      - build HTML()
    - .catch for failure()
      - handleError()    
- handleError

## PROCEDURES

- CREATE GETDATA FUNCTION

INIT
Add a zip code input 
Add a button
Add the title of the page
Add placeholders elements for all the organisms (Temp, City, Conditions)
         Hide these until submit is pressed
Bind event handler to the button - getData()

START
Get Data
Build the HTML
Fill the HTML with the Data




### INIT

-  

