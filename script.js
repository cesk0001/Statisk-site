let productId = 1163;
let productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `

             <div class="product-image-container">
                <img class="product-image" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="">
            </div>
            <div class="product-content">
                <p class="product-brandname">Nike</p>
                <h3 class="product-displayname">${data.productdisplayname}</h3>
                <p class="product-price"><span class="product-original-price">1595</span> <span
                        class="product-new-price">${data.price}</span> DKK</p>
                <p class="product-discount">-45%</p>
                <p class="product-sold-out">Sold out!</p>
            </div>

       
    `;
  });
