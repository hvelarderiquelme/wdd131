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

/*----------Populate Select box-------------*/
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
 
fillSelectBox(products);
  
function fillSelectBox(products){
    document.querySelector("#product").innerHTML = `<option value="">Select a product...</option>`;
    
    products.forEach(product => {
        
        let selectProduct = document.querySelector("#product");
        let productName = document.createElement("option");
        
        productName.innerHTML = `<option value=${product.id}>${product.name}</option>`;
        
        selectProduct.appendChild(productName);

    });
}