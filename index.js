let cart = {};
if(localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}


const prodContainer = document.getElementById("products-container");

function showProducts(index) {

    const cardDiv = document.createElement("div");
    cardDiv.className = "card col-4"
    
    const cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.setAttribute("src", "images/red.jpg");

    const cardBody = document.createElement("div");
    cardBody.className = "card-body"

    const prodHeading = document.createElement("h5");
    prodHeading.className = "card-title";
    prodHeading.innerText = products[index].name;

    const prodDetails = document.createElement("p");
    prodDetails.className = "card-text";
    prodDetails.innerText = products[index].price;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "btn btn-outline-danger";
    addToCartBtn.addEventListener("click", function() {
      const productId = products[index].id;
      if(cart.hasOwnProperty(productId) ){
        cart[productId] += 1;
      }else{
        cart[productId] = 1;
      }

      console.log(cart);
      refreshProducts();
    })

    const addTCBtnIcon = document.createElement("i");
    addTCBtnIcon.className = "fa fa-cart-plus";

    const cartDetails = document.createElement("span");
    if(cart.hasOwnProperty(products[index].id) ){
      cartDetails.innerText = cart[products[index].id] + " in Cart";
    }
    

    addToCartBtn.append(addTCBtnIcon);

    cardBody.append(prodHeading);
    cardBody.append(prodDetails);
    cardBody.append(addToCartBtn);
    cardBody.append(cartDetails);

    cardDiv.append(cardImg);
    cardDiv.append(cardBody);

    prodContainer.append(cardDiv);

}

for(let i = 0; i < products.length; i++) {

  showProducts(i);
}

function refreshProducts(){
  prodContainer.innerHTML = "";
  for(let i = 0; i < products.length; i++) {
    showProducts(i);
  }  
}

refreshProducts();