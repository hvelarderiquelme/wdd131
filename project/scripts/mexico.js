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
        ingredients: "1 kilo of maseca dough (prepared), 250 gr of vegetable shortening or lard, 1 tsp of baking powder, salt to taste, 2 cups of chicken broth",
        preparation: "Mix all the ingredients until it becomes a uniform dough, if needed add more chicken broth. The consistency should be like an oatmeal porridge.",
        pictureLocation:"images/tamales.webp"

    },
    {
        name:"Taquitos",
        ingredients: "Any leftover meat you have from previous meals (chicken/ground pork/ground beef/beefroast/pork roast), corn tortillas (soft)",
        preparation: "Pull the meat if it is roast or chicken. Warm your tortillas so they don't break when you roll them. Place an amount of the meat in the tortilla and roll it tight. With two toothpicks, hold the rolled tortilla closed. Make groups of three taquitos. In a pan, pour about half an inch of oil, and heat on high. When the oil is ready, lower the heat to a medium high and place the taquitos in it. Fry the taquitos, flipping them once. You can have soft taquitos or hard taquitos; the difference is for how long you fry them.",
        pictureLocation:"images/taquitos.webp"
    },
    {
        name:"Pozole",
        ingredients: "1 kilogram of hominy,.5 kilogram of pork roast, 1 head of garlic, bay leaves, thyme, 1/2 onion, 2 ancho chiles, 2 tbsp chicken broth powder",
        preparation: "Boil the hominy with the head of garlic and onion; cook the meat with salt, 2 garlic cloves and a quater of an onion in a seaprate pot. When cooked, grill the chile anchos and then boil them. Blend the chiles with the bay leaves, thyme and the garlic head from the hominy. Sautee the sauce and add chicken broth powder. Strain the sauce and add to the hominy; add the meat; cook together until boiling. Add salt to taste if needed.",
        pictureLocation:"images/pozole.webp"
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
        

        name.innerHTML = `<div>${element.name}</div>`;
        instructions.innerHTML = `<span><label>Preparation:</label><br>${element.preparation}</span>`;
        photo.setAttribute("src", element.pictureLocation);
        photo.setAttribute("alt", `${element.name}`);
        photo.setAttribute("loading", "lazy");
        
        //splits the ingredients string to display in rows
        let text="";
        for(let i=0; i < splitIngredients.length; i++){
            text += splitIngredients[i] + "<br>"
        }
        ingredients.innerHTML = `<span><h3>Ingredients:</h3><br>${text}</span>`;
        
        //appends html elements
        info.appendChild(name);
        info.appendChild(photo);
        info.appendChild(ingredients);
        info.appendChild(instructions);
        document.querySelector("main").appendChild(info);
        
    });

}//end of function declaration