let temp = document.querySelector('#temp');
let speed = document.querySelector('#wind');
let wc = " ";

function windChill(temp, speed) {
    wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * (Math.pow(speed, 0.16)));
    return wc; 
}

if (temp <= 50 && speed >= 3) {
    wc = windChill(temp, speed) + "&deg;F";
    }
    else {
        wc = "n/a";
    }

document.querySelector('#windchill').innerHTML = wc;
