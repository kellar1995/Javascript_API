var apiKey = "f04bca95d14fcff5f04c6430a09748d0";
var button = document.querySelector('#submit');

const btnCelsius = document.getElementById('btnCelsius');
const btnFahren = document.getElementById('btnFahren');
const cityname = document.getElementById('cityname');
const changeTempHigh = document.getElementById('changeTempHigh');
const changeTempLow = document.getElementById('changeTempLow');
const currentTemp = document.getElementById('currentTemp');
const Showhumidity = document.getElementById('Showhumidity');
const showForecast = document.getElementById('showForecast');


let data;


async function fetchWeather(city){
  let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  let data = await res.json()
  return data
};

const CtoF = (cTemp) => {
  const fTemp = (cTemp*1.8) + 32;
  return fTemp;
};

button.addEventListener('click', weatherQuery);


async function weatherQuery(){
    let city = document.getElementById('city').value;
     data = await fetchWeather(city);
    showWeather(data)
}


function showWeather(data){
let  city = data.name;
let  temph = data.main.temp_max;
let  curTemp = data.main.temp;
let  templ = data.main.temp_min;
let  humidity = data.main.humidity;
let  forecast = data.weather[0].description;

cityname.innerHTML = city;
changeTempHigh.innerHTML = temph + ' °C';
currentTemp.innerHTML = curTemp + ' °C';
changeTempLow.innerHTML = templ + ' °C';
showForecast.innerText = forecast;
Showhumidity.innerText = humidity;
  
}


btnCelsius.addEventListener('click', () => {
  celsMax = data.main.temp_max
  celsLow = data.main.temp_min
  celsTemp = data.main.temp
  changeTempHigh.innerHTML = `${celsMax} °C`;
  currentTemp.innerHTML = `${celsTemp} °C`;
  changeTempLow.innerHTML = `${celsLow} °C`;
});

btnFahren.addEventListener('click', () => {
  // const cels = Math.round(CtoF(data.main.temp_max));
  const fahrenMax = Math.round(CtoF(data.main.temp_max));
  const fahrenTemp = Math.round(CtoF(data.main.temp));
  const fahrenLow = Math.round(CtoF(data.main.temp_min));
  changeTempHigh.innerHTML = `${fahrenMax} °F`;
  currentTemp.innerHTML = `${fahrenTemp} °F`;
  changeTempLow.innerHTML = `${fahrenLow} °F`;
});

// var apiKey = "22329e899a65397c7835591dd1ee7ec1";
// var button = document.querySelector('#submit');

// async function fetchWeather(city){
//     let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//     let data = await res.json()
//     return data
// };

// var unitsC = "&units=metric";
// var unitsF = "&units=imperial";

// // let changeTemp;

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

// button.addEventListener('click', weatherQuery);
// input = document.querySelector('#city');

// async function weatherQuery(){
//     let city = document.getElementById('city').value;
//     let data = await fetchWeather(`${city}`);
//     showWeather(data)
// }

// function showWeather(data){
//     let forecast = data.weather[0].description;
//     let display = `
//     <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//             <div class="card-header" id="cityname">${data.name}</div>
//             <div class="card-body">
//             <h5 class="card-title">High</h5>
//             <p class="card-text" id="highTemp">${data.main.temp_max}</p>
//             </div>
//         </div>
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//             <div class="card-header" id="cityname">${data.name}</div>
//             <div class="card-body">
//             <h5 class="card-title">Current</h5>
//             <p class="card-text" id="highTemp">${data.main.temp}</p>
//             </div>
//         </div>
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//             <div class="card-header" id="cityname">${data.name}</div>
//             <div class="card-body">
//             <h5 class="card-title">Low</h5>
//             <p class="card-text" id="">${data.main.temp_min}</p>
//             </div>
//         </div>
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//             <div class="card-header" id="cityname">${data.name}</div>
//             <div class="card-body">
//             <h5 class="card-title">Forecast</h5>
//             <p class="card-text" id="">${forecast}</p>
//             </div>
//         </div>
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//             <div class="card-header" id="cityname">${data.name}</div>
//             <div class="card-body">
//             <h5 class="card-title">Humidity</h5>
//             <p class="card-text" id="">${data.main.humidity}</p>
//             </div>
//         </div>
//     ` 
//     let displayWeather = document.getElementById('weather')
//     displayWeather.innerHTML = display
// }

// let changeTemp;

// function displayFahrenheit(event){
//     event.preventDefault()
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

