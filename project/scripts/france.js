//Footer copyright and last modified information
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
let year = currentYear.getFullYear();
const spanElmt = document.createElement("span");

document.querySelector('#current-year').innerHTML = '&COPY;' +  year + '🌮 Horacio Velarde Riquelme 🌮 Canada';
document.querySelector('#last-modified').innerHTML = date;
ElmtYear.appendChild(spanElmt);
ElmtLastModified.appendChild(spanElmt); 

//Hamburger button responsive code
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () =>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//array fo recipes. Any amount of recipes can be added
const recipesArray = [
    {
        name:"Tamales",
        ingredients: "8 kilos, 9 spoons, 3 wergr",
        preparation: "efwfwefw",
        pictureLocation:"C:\Users\hvela\OneDrive\Desktop\Pathway\WDD131\wdd131\project\images\wireframeSitePlan-large.png"

    },
    {
        name:"Taquitos",
        ingredients: "8 kilos, 9 spoons, 3 wergr, 50 froan",
        preparation: "efwfwefw",
        pictureLocation:"images/wireframeSitePlan-mobile"
    },
    {
        name:"Pozole",
        ingredients: "9ij",
        preparation: "efwfwefw",
        pictureLocation:"/images/wireframeSitePlan-mobile"
    }    
];    
    
//Shows the recipes' names
displayRecipesList(recipesArray);

//More recipes can be added and also different categories cpuld be added in the future. Example, mains, salsas, soups, desserts, etc
const Tamales = document.querySelector("#Tamales");
const Taquitos = document.querySelector("#Taquitos");
const Pozole = document.querySelector("#Pozole");

//respondes to click of the mouse and calls for recipe to be displayed
Tamales.addEventListener("click", ()=>{
    let recipe = recipesArray.filter(recipe => recipe.name == "Tamales");
    displayRecipeInfo(recipe);
});

Taquitos.addEventListener("click", ()=>{
    let recipe = recipesArray.filter(recipe => recipe.name == "Taquitos");
    displayRecipeInfo(recipe);
});

Pozole.addEventListener("click", ()=>{
    let recipe = recipesArray.filter(recipe => recipe.name == "Pozole");
    displayRecipeInfo(recipe);
});

//Displays the list of recipes
function displayRecipesList(Recipes){
    
    Recipes.forEach(recipe =>{
        let info = document.querySelector("#recipes-list");
        let name = document.createElement("li");
        
        name.setAttribute("id", recipe.name);
        name.innerHTML = `<label>${recipe.name}</label>`;
        info.appendChild(name);
        document.querySelector("main").appendChild(info);
    });
}//end of functiond declaration

//Grabs the corresponding recipe and displays photo, ingredients and preparation instructions
function displayRecipeInfo(recipe){
    document.querySelector("#recipe").innerHTML = "";
    recipe.forEach(element => {
        const splitIngredients = (element.ingredients).split(",");
        let info = document.querySelector("#recipe");
        let name = document.createElement("label")
        let photo = document.createElement("img");
        let ingredients = document.createElement("h3");
        let instructions = document.createElement("p");
       

        name.innerHTML = `<label>${element.name}</label>`;
        instructions.innerHTML = `${element.preparation}`
        photo.setAttribute("src", "images/logo.jfif");
        photo.setAttribute("alt", `${element.name}`);
        photo.setAttribute("loading", "lazy");
        
        //splits the ingredients string to display in rows
        let text="";
        for(let i=0; i < splitIngredients.length; i++){
            text += splitIngredients[i] + "<br>"
        }
        ingredients.innerHTML = text;
        
        //appends html elements
        info.appendChild(name);
        info.appendChild(photo);
        info.appendChild(ingredients);
        info.appendChild(instructions);
        document.querySelector("main").appendChild(info);
        
    });

}//end of function declaration