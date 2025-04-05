// localStorage.setItem("numVisits-ls",0);
/*display element variabke*/
const visits = document.querySelector("#visits");

/*This gets the stored value of the numVisits-ls KEY. If it doesn't exist, then numVisits variable is given 0 as value.*/
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

/*determine if this is the first visit o rdisplay the number of visits*/

if(numVisits !== 0){
    
    visits.textContent = numVisits;
}
else{
    visits.textContent = `Thank you for taking the time to post our first review.`
}

/*Increment the number of visits by one.*/
numVisits++;

/*Store the nue visits total in local storage*/
localStorage.setItem("numVisits-ls", numVisits);

/*A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.*/