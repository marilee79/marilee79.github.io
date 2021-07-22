const appid = "fe5ce56ddb1739e03b5b9bb24fc93e2e";
const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=34.3687&lon=-84.9341&exclude=minutely,hourly&appid=${appid}&units=imperial&lang=en`;


fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const alert = jsObject.alerts[0].description;
        // const alert = document.querySelector('aside');
        // alert.textContent = jsObject.alerts[0].description;
        const button = document.querySelector('button');
   
        // const announcement = document.querySelector('.alert');
        button.addEventListener('click', () => {
            if (alert){
                let announcement = document.createElement('aside');
                let closeButton = document.createElement('button');
                
                closeButton.textContent = "❌";
                announcement.style.display = 'block'; 
                
                announcement.append(closeButton);
                document.querySelector('aside.alert').append(announcement);

                closeButton.addEventListener('click', () => {announcement.style.display = 'none'; } );
            }

                else { announcement.style.display = 'none';}
        });
            
    });


fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const current = document.querySelector('#current');
        const conditions = document.querySelector('#conditions');
        const humidity = document.querySelector('#humidity');
        current.textContent = jsObject.current.temp.toFixed(0);
        conditions.textContent = jsObject.current.weather[0].description;
        humidity.textContent = jsObject.current.humidity.toFixed(0);
    });

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const threeDayForecast = [jsObject.daily[0].temp.day, jsObject.daily[1].temp.day, jsObject.daily[2].temp.day];
        console.log(threeDayForecast);
        
        threeDayForecast.forEach( item => {
            let d = new Date(item.dt*1000);
              console.log(d);
            let card = document.createElement('div');
            card.setAttribute("class", "daycard");
            
            let day = document.createElement('h3');
            day.textContent = weekdays[d.getDay()];
            day.setAttribute("class", "daysofweek");

            let imageicon = jsObject.daily[0].weather[0].icon;
            let img = document.createElement('img');
            const imagesrc= `https://openweathermap.org/img/wn/${imageicon}.png`;
            const desc = `${jsObject.daily[0].weather[0].description}`;
            img.setAttribute('src', imagesrc);
            img.setAttribute('alt', desc); 

            let high = document.createElement('p');
            high.innerHTML = `${jsObject.daily[0].temp.day.toFixed(0)}` + "&deg; F";
                
            card.append(day);
            card.append(img);
            card.append(high);

            document.querySelector('div.forecast').append(card);
            }

        )});