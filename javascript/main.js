var apiKey = "";
var button = document.querySelector('#submit');

async function fetchWeather(city){
    let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    let data = await res.json()
    return data
};

var unitsC = "&units=metric";
var unitsF = "&units=imperial";

button.addEventListener('click', weatherQuery);
input = document.querySelector('#city');

async function weatherQuery(){
    console.log('buttonclicked')
    let city = document.getElementById('city').value;
    let data = await fetchWeather(`${city}`);
    console.log(data);
    console.log(city);
}

async function showWeather(){
    await fetchWeather();
    let cityName = document.getElementById('cityname');
    cityName.innertext = data.name;

}