//Footer copyright and last modified information variables and constants
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
const spanElmt = document.createElement("span");
let year = currentYear.getFullYear();

//Wind Chill Information variables and constants
const windChill = document.querySelector('#display');
const spanElmtWindChill = document.createElement("span");
let windSpeed = 5;
let temperature = 10;

// gets dates infotrmation
document.querySelector('#current-year').innerHTML = '&COPY;' +  year + '&#x1F3B8;Horacio Velarde Riquelme &#x1F3B8; Canada';
document.querySelector('#last-modified').innerHTML = date;

//gets wind Chill calculation
document.querySelector('#display').innerHTML = calculateWindChill(windSpeed,temperature);

//displays date and last modified information
ElmtYear.appendChild(spanElmt);
ElmtLastModified.appendChild(spanElmt);

//displays Wind Chill
windChill.appendChild(spanElmtWindChill);

//Calculates Wind Chill
function calculateWindChill(windSpeed,temperature){
  let result;
    if (temperature <= 10 && windSpeed > 4.8){
        result =  (13.12 + (0.6215*temperature) - 11.37*(windSpeed**0.16) + 0.3965 * temperature * (windSpeed**0.16)).toFixed(1);
        
    }
    else{
        result = "n/a"
    }
    return result;
};


