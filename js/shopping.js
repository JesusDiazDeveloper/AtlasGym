{/* <div class="product_card">
                <picture class="img_container">
                    <img src="./assets/products/remera_blanca.png" alt="Product 1">
                </picture>
                <div class="product_info">
                    <h3 class="product_name">Product 1</h3>
                    <div class="product_price">$30000</div>
                    <button class="primary_button"> Agregar al Carrito </button>
                </div>
            </div> */}



const url = 'https://62b5c3ad42c6473c4b39c3af.mockapi.io/api/gym_products';
const products_container = document.querySelector('.products_container');

const loadProducts = () => {
    console.log("Se ejecuto");
    fetch(url).then(response => {
        let convertedToJson = response.json();
        convertedToJson.then((data) => {
            console.log(data);
            data.forEach((product) => {
                const product_card = document.createElement('div');
                product_card.setAttribute('class', 'product_card');
                product_card.innerHTML = `
                                <picture class="img_container">
                                    <img src="${product.img}" alt="${product.name + ' image'}">
                                </picture>
                                <div class="product_info">
                                    <h3 class="product_name">${product.name}</h3>
                                    <div class="product_price">${product.price}</div>
                                    <button class="primary_button"> Agregar al Carrito </button>
                                </div>
                               `;
                products_container.appendChild(product_card);
            })
        })
    })
}


loadProducts();