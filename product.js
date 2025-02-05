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
    <div class="productimagecontainer ${product.soldout ? `isSoldOut` : ""}">
       <img class="productimage" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
       ${product.soldout ? `<p class="productsoldout">Sold out!</p>` : ""}
   </div>
   <div class="productcontent">
       <p class="productbrandname">${product.brandname}</p>
       <h3 class="productdisplayname">${product.productdisplayname}</h3>
       <p class="productprice">
          ${product.discount ? `<span class="productoriginalprice">${product.price}</span> <span class="productnewprice">${newPrice}</span>` : product.price}
            DKK
          </p>
       ${product.discount ? `<p class="productdiscount">-${product.discount}%</p>` : ""}
       <select class="productsizeselector" name="sizes" id="sizes">
            <option value="" disabled selected>Vælg størrelse</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        <div class="productbuttonwrapper">
            <button class="productbutton">
                Læg i kurv
            </button>
        </div>
   </div>
`;
}
