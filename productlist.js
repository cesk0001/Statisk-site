const productContainer = document.querySelector(".productlistcontainer");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log("Products:", products);
  let outputHtml = "";
  const markup = products
    .map((product) => {
      console.log("Product:", product);
      outputHtml += `
      <div class="productlistcard">
        <div class="productlistcontent">
          <a href="produkt.html">
            <img class="productlistimage" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
          </a>
          <p class="productlistbrandname">${product.brandname}</p>
          <h3 class="productlistdisplayname">${product.productdisplayname}</h3>
          <p class="productlistprice">${product.price} DKK</p>
          <p class="productlistdiscount">-${product.discount}%</p>
          <p class="productlistsoldout">Sold out!</p>
        </div>
        <div class="productlist-button-wrapper">
          <a class="productlist-button" href="produkt.html">
              Read more
          </a>
        </div>
      </div>`;
    })
    .join("");
  console.log(outputHtml);
  productContainer.innerHTML = outputHtml;
}
