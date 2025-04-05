//localStorage.setItem("numVisits-ls",0);
/*display element variabke*/
const visits = document.querySelector("#visits");

/*This gets the stored value of the numVisits-ls KEY. If it doesn't exist, then numVisits variable is given 0 as value.*/
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

/*determine if this is the first visit o rdisplay the number of visits*/

if(numVisits !== 0){

    visits.textContent = numVisits;
}
else{
    let clearH2 = document.querySelector("h2");
    clearH2.innerHTML = "";
    visits.textContent = `Thank you for taking the time to post our first review.`
    numVisits++;
}

/*Increment the number of visits by one.*/
numVisits++;

/*Store the nue visits total in local storage*/
localStorage.setItem("numVisits-ls", numVisits);

/*A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.*/

//Footer copyright and last modified information
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
let year = currentYear.getFullYear();
const spanElmt = document.createElement("span");

document.querySelector('#current-year').innerHTML = '&COPY;' +  year + '&#x1F3B8;Horacio Velarde Riquelme &#x1F3B8; Canada';
document.querySelector('#last-modified').innerHTML = date;
ElmtYear.appendChild(spanElmt);
ElmtLastModified.appendChild(spanElmt); 