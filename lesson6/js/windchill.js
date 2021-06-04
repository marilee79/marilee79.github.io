let temp = document.querySelector('#temp').textContent;
let speed = document.querySelector('#wind').textContent;

var wc = 0;
var message = 0;

//function windChill(temp, speed) {
    //wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * (Math.pow(speed, 0.16)));
    //return wc; 
//}

if (temp <= 50 && speed >= 3) {
    wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * (Math.pow(speed, 0.16)));
    message = wc.toFixed() + "&deg; F"; //wc = windChill(temp, speed) + "&deg;F";
    }
    else {
        message = "N/A";
    }

document.querySelector('#windchill').innerHTML = message;
