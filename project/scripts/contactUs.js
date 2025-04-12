//Footer copyright and last modified information
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
let year = currentYear.getFullYear();
const spanElmt = document.createElement("span");

document.querySelector('#current-year').innerHTML = '&COPY;' +  year + '🍷Horacio Velarde Riquelme🍷 Canada';
document.querySelector('#last-modified').innerHTML = date;
ElmtYear.appendChild(spanElmt);
ElmtLastModified.appendChild(spanElmt); 

/*----------Populate Select box-------------*/
const recipes = [
    {
      id: "tamales",
      name: "Tamales",
    },
    {
      id: "taquitos",
      name: "Taquitos",
    },
    {
      id: "pozole",
      name: "Pozole",
    },
    {
      id: "other",
      name: "Other",
    }
  ];
 
fillSelectBox(recipes);
    
function fillSelectBox(recipes){
    // document.querySelector("#product").innerHTML = `<option value="">Select a product...</option>`;
    
    recipes.forEach(recipe => {
        
        let selectRecipe = document.querySelector("#recipe");
        let recipeName = document.createElement("option");
        
        recipeName.innerHTML = `<option value=${recipe.id}>${recipe.name}</option>`;
        
        selectRecipe.appendChild(recipeName);

    });
}