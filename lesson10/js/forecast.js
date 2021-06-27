const cityId = "5604473"
const appid = "fe5ce56ddb1739e03b5b9bb24fc93e2e";
const apitURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${appid}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let day = 0;
        const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt('18:00:00'));
        // console.log(fiveDayForecast);

        fiveDayForecast.forEach( x => {
            let d = new Date(x.dt_txt);
            //console.log(d);
            document.getElementById(`weekday${day+1}`).textContent = weekday[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
            day++
        });

        const desc = jsObject.weather[0].description;
        const image = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        
        document.getElementById('icon').setAttribute('src', image);
        document.getElementById('icon').setAttribute('alt', desc);

    });