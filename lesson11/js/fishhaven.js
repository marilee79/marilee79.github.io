// Fish Haven
const cityid = "5585010";
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

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

    fetch(forecastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            // console.log(jsObject);
            // let day = 0;
            const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const fiveDayForecast = jsObject.list.filter((forecast)=>forecast.dt_txt.includes('18:00:00'))
            //console.log(fiveDayForecast);

    
            fiveDayForecast.forEach( item => {
                let d = new Date(item.dt*1000);
                
                // console.log(d);
                let card = document.createElement('div');
                card.setAttribute("class", "daycard");
                

                let head = document.createElement('h3');
                head.textContent = weekdays[d.getDay()];
                head.setAttribute("class", "daysofweek");

                let img = document.createElement('img');
                const imagesrc= `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
                const desc = `${item.weather[0].description}`;
                img.setAttribute('src', imagesrc);
                img.setAttribute('alt', desc); 

                let high = document.createElement('p');
                high.innerHTML = `${item.main.temp.toFixed(0)}` + "&deg; F";
                
                card.append(head);
                card.append(img);
                card.append(high);

                document.querySelector('div.forecast').append(card);
                }

            );
            
        });
