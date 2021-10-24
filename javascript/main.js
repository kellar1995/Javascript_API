var apiKey = "22329e899a65397c7835591dd1ee7ec1";
var button = document.querySelector('#submit');

async function fetchWeather(city){
    let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    let data = await res.json()
    return data
};

var unitsC = "&units=metric";
var unitsF = "&units=imperial";

// let changeTemp;

// function displayFahrenheit(){
//     changeTemp = document.getElementById('highTemp')
//     console.log(changeTemp)
//     let kelvin = changeTemp.value
//     let fahrenheit = ((kelvin-273.15)*1.8)+32
//     console.log(fahrenheit)
//     changeTemp.textContent = fahrenheit;
// }
// function displayCelsius(){
//     changeTemp = document.getElementById('highTemp')
//     let kelvin = changeTemp.value
//     let celsius = (kelvin-273.15)
//     console.log(celsius)
//     changeTemp.textContent = celsius;
// }

button.addEventListener('click', weatherQuery);
input = document.querySelector('#city');

async function weatherQuery(){
    let city = document.getElementById('city').value;
    let data = await fetchWeather(`${city}`);
    showWeather(data)
}

function showWeather(data){
    let forecast = data.weather[0].description;
    let display = `
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header" id="cityname">${data.name}</div>
            <div class="card-body">
            <h5 class="card-title">High</h5>
            <p class="card-text" id="highTemp">${data.main.temp_max}</p>
            </div>
        </div>
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header" id="cityname"></div>
            <div class="card-body">
            <h5 class="card-title">Low</h5>
            <p class="card-text" id=""></p>
            </div>
        </div>
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header" id="cityname"></div>
            <div class="card-body">
            <h5 class="card-title">Forecast</h5>
            <p class="card-text" id="">${forecast}</p>
            </div>
        </div>
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header" id="cityname"></div>
            <div class="card-body">
            <h5 class="card-title">Humidity</h5>
            <p class="card-text" id=""></p>
            </div>
        </div>
    ` 
    let displayWeather = document.getElementById('weather')
    displayWeather.innerHTML = display
}

let changeTemp;

function displayFahrenheit(event){
    event.preventDefault()
    changeTemp = document.getElementById('highTemp')
    console.log(changeTemp)
    let kelvin = changeTemp.value
    let fahrenheit = ((kelvin-273.15)*1.8)+32
    console.log(fahrenheit)
    changeTemp.textContent = fahrenheit;
}
function displayCelsius(){
    changeTemp = document.getElementById('highTemp')
    let kelvin = changeTemp.value
    let celsius = (kelvin-273.15)
    console.log(celsius)
    changeTemp.textContent = celsius;
}

