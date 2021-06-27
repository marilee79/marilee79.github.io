const cityid = "5604473";
const APPID = "fe5ce56ddb1739e03b5b9bb24fc93e2e";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const current = document.querySelector('#current');
        const temp = document.querySelector('#temp');
        const speed = document.querySelector('#wind');
        const humidity = document.querySelector('#humidity');
        current.textContent = jsObject.main.temp.toFixed(0);
        temp.textContent = jsObject.main.temp_max.toFixed(0);
        speed.textContent = jsObject.wind.speed.toFixed(0);
        humidity.textContent = jsObject.main.humidity;

var wc = 0;
var message = 0;

if (temp <= 50 && speed >= 3) {
    wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * (Math.pow(speed, 0.16)));
    message = wc.toFixed() + "&deg; F"; 
    }
    else {
        message = "N/A";
    }

document.querySelector('#windchill').innerHTML = message;
    
    });