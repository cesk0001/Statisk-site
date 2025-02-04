const productContainer = document.querySelector(".productlistcontainer");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products.map
    .map((product) => {
      markup += `<div class="productlistcard">
                <img class="productlistimage" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="">
            </div>
            <div class="productlistcontent">
                <p class="productlistbrandname">${product.brandname}</p>
                <h3 class="productlistdisplayname">${product.productdisplayname}</h3>
                <p class="productlistprice">${product.price} DKK</p>
                <p class="productlistdiscount"> ${product.discount}</p>
                <p class="productlistsoldout">Sold out!</p>
            </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
