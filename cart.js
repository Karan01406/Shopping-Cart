const cartContainer = document.getElementById("cart-container");

let cart = {}

if(localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

for(key in cart) {
    console.log(cart[key]);
}

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

function showProdInCart(index) {

    const table = document.createElement("table");
    table.className = "table";
    
    const tableHead = document.createElement("thead");
    tableHead.className = "thead-dark";

    let tableRow = document.createElement("tr");

    let tableItem = document.createElement("th");
    
}