const productContainer = document.querySelector(".productcontainer");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");
console.log("vores ID:", productId);

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  let newPrice;
  if (product.discount) {
    const discountPrice = (product.price / 100) * product.discount;
    newPrice = Math.ceil(product.price - discountPrice);
  }
  productContainer.innerHTML = `
    <div class="productimagecontainer">
       <img class="productimage" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
   </div>
   <div class="productcontent">
       <p class="productbrandname">${product.brandname}</p>
       <h3 class="productdisplayname">${product.productdisplayname}</h3>
       <p class="productprice">
          ${product.discount ? `<span class="productoriginalprice">${product.price}</span> <span class="productlistnewprice">${newPrice}</span>` : product.price}
            DKK
          </p>
       <p class="productdiscount">-45%</p>
       <p class="productsold-out">Sold out!</p>
   </div>
`;
}
