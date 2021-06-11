window.onload = function() {
    function daysBetween(start, end) {
    //One day in milliseconds
     const oneDay = 1000 * 60 * 60 * 24;
     //const lastVisit = localStorage.getItem('today');

    //calculating the time difference between two dates
     const diffInTime = start -end;
    
    //calculating the # of days between last visit and today
     const diffInDays = Math.round(diffInTime / oneDay);

     return diffInDays

//document.querySelector('#days-ago').innerHTML = diffInDays;
 }

if (typeof(Storage) != "undefined") {
    
    let newVisitDate = new Date();

    newVisit = newVisitDate.getTime();

    if (typeof localStorage.getItem("recentVisit") == typeof "string") {
        document.querySelector("#days-ago").innerText = daysBetween(newVisit, localStorage.getItem("recentVisit"));

        let lastVisit = newVisit;

        localStorage.setItem("recentVisit", lastVisit);
    
    } else {
        let lastVisit = newVisit;

        localStorage.setItem("recentVisit", lastVisit);

        document.querySelector("#days-ago").innerTEXT = "First visit! Welcome!";
    }}  else {
        document.querySelector("#days-ago").innerText = "Sorry, your browser does not support Web Storage...";
    }}
    


