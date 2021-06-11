function saveDate() {   
    const today = document.querySelector('date');

    localStorage.setItem('today', today);
}

 function loadDate() {
    //One day in milliseconds
     const oneDay = 1000 * 60 * 60 * 24;
     const lastVisit = localStorage.getItem('today');

    //calculating the time difference between two dates
     const diffInTime = today - lastVisit;
    
    //calculating the # of days between last visit and today
     const diffInDays = Math.round(diffInTime / oneDay);

document.querySelector('#days-ago').innerHTML = diffInDays;
 }