const cityid = "5604473";
const APPID = "fe5ce56ddb1739e03b5b9bb24fc93e2e";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${5604473}&APPID=${APPID}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const temperature = document.querySelector('#current-temp');
        temperature.textContent = jsObject.main.temp.toFixed(0);
        
        // document.getElementById('current-temp').textContent = jsObject.main.temp;
        const desc = jsObject.weather[0].description;
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    
    });