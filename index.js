var dropDown = document.querySelector("#dropdown");
var products = document.querySelector("#product-dropdown")
products.addEventListener("mouseover", mouseOverOn)
products.addEventListener("mouseout", mouseOverOff)

function mouseOverOn(){
    dropDown.classList.remove("hidden");
}

function mouseOverOff(){
    dropDown.classList.add("hidden");
}