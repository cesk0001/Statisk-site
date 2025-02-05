const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
/*wtf?^ */

const productlistContainer = document.querySelector("#productlistcontainer");
let url = "https://kea-alt-del.dk/t7/api/products/";

function showProducts(data) {
  const markup = data
    .map(
      (product) =>
        `<div class="productlistcard${product.discount && "hasDiscount"} ${product.soldout && "isSoldOut"}">
                <img class="productlistimage" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
            </div>
            <div class="productlistcontent">${product.id}"
                <p class="productlistbrandname">${product.brandname}</p>
                <h3 class="productlistdisplayname">${product.productdisplayname}</h3>
                <p class="productlistprice">${product.price} DKK</p>
                
                <p class="productlistsoldout">Sold out!</p>
            </div>`
    )
    .join(``);
  productlistContainer.innerHTML = markup;
}
function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
}
hentData();
