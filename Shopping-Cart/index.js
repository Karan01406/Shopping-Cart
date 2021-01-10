const  list = document.getElementById("list");
const addToCart = document.getElementsById("addToCart");

cart = [];

addToCart.addEventListener("click", addToBag)

function addToBag(){

    cart.push(list);
    printnoOfitems();
}

function printnoOfitems(){
    for(let i=0; i< cart.length; i++){
        addToBag(cart[i], i);
    }
}
