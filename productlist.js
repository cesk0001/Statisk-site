const productContainer = document.querySelector(".productlistcontainer");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log("Products:", products);
  let outputHtml = "";
  products.map((product) => {
    console.log("Product:", product);
    let newPrice;
    if (product.discount) {
      const discountPrice = (product.price / 100) * product.discount;
      newPrice = Math.ceil(product.price - discountPrice);
    }
    outputHtml += `
      <div class="productlistcard ${product.discount ? `hasDiscount` : ""} ${product.soldout ? `isSoldOut` : ""}">
        <div class="productlistcontent">
          <a href="produkt.html?id=${product.id}">
            <img class="productlistimage" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
          </a>
          <p class="productlistbrandname">${product.brandname}</p>
          <h3 class="productlistdisplayname">${product.productdisplayname}</h3>
          <p class="productlistprice">
          ${product.discount ? `<span class="productlistoriginalprice">${product.price}</span> <span class="productlistnewprice">${newPrice}</span>` : product.price}
            DKK
          </p>
          ${product.discount ? `<p class="productlistdiscount">-${product.discount}%</p>` : ""}
          ${product.soldout ? `<p class="productlistsoldout">Sold out!</p>` : ""}
        </div>
        <div class="productlistbuttonwrapper">
          <a class="productlistbutton" href="produkt.html?id=${product.id}">
              Read more
          </a>
        </div>
      </div>`;
  });
  productContainer.innerHTML = outputHtml;
}
