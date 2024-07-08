document.addEventListener('DOMContentLoaded', function () {

    const token = localStorage.getItem('authToken');

    if (!token) {
        alert('Token no encontrado. Por favor, inicie sesión.');
        window.location.href = 'login.html';
        return;
    }

    fetch('https://atlas-gym.vercel.app/products', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            const productsTableBody = document.querySelector('#productsTable tbody');
            productsTableBody.innerHTML = ''; // Limpia la tabla

            data.forEach(product => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = product.name;
                row.appendChild(nameCell);

                const priceCell = document.createElement('td');
                priceCell.textContent = product.price;
                row.appendChild(priceCell);
                priceCell.classList.add('price-cell');
                const actionsCell = document.createElement('td');
                actionsCell.classList.add('actions-cell');
                // Botón de modificar
                const editButton = document.createElement('button');
                editButton.textContent = 'Modificar';
                editButton.classList.add('button', 'editButton');
                editButton.addEventListener('click', () => {
                    // Lógica para modificar el producto
                    showUpdateForm(product.id_product);
                });
                actionsCell.appendChild(editButton);

                // Botón de borrar
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Borrar';
                deleteButton.classList.add('button', 'deleteButton');
                deleteButton.addEventListener('click', () => {
                    console.log(product.id_product);
                    // Lógica para borrar el producto
                    fetch(`https://atlas-gym.vercel.app/products/${product.id_product}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }).then(response => {
                            if (response.ok) {
                                console.log(response);
                                return response.json();
                            } else {
                                alert('Error al borrar el producto');
                                throw new Error('Error al borrar el producto');
                            }
                        })
                        .then(data => {
                            alert(`Producto ${product.name} borrado`);
                            row.remove(); // Eliminar la fila de la tabla
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert('Error al borrar el producto. Por favor, inténtelo de nuevo más tarde.');
                        });
                });
                actionsCell.appendChild(deleteButton);

                row.appendChild(actionsCell);
                productsTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al cargar los productos. Por favor, inténtelo de nuevo más tarde.');
        });
});

document.querySelector('.create_product_button_container button').addEventListener('click', () => {
    window.location.href = 'admin_create.html';
});


showUpdateForm = (id) => {

    let product = fetch(`https://atlas-gym.vercel.app/products/${id}`)
        .then(response => response.json())
        .then(product => {
            let p = product[0];
            console.log(p);

            // Mostrar el formulario de actualización y llenar los campos con los datos del producto
            const formContainer = document.querySelector('.pop_up_container');
            const overlay = document.querySelector('.overlay');

            // Mostrar el formulario y el overlay
            formContainer.classList.add('active');
            overlay.style.display = 'block';

            // Llenar los campos del formulario con los datos del producto
            const form = formContainer.querySelector('form');
            console.log(form);
            form.querySelector('#imgUpdate').value = p.img;
            form.querySelector('#nameUpdate').value = p.name;
            form.querySelector('#priceUpdate').value = p.price;
            form.querySelector('#stockUpdate').value = p.stock;
            form.querySelector('#id_categoryUpdate').value = p.id_category;
            form.querySelector('#productIdUpdate').value = p.id_product;


        })
        .catch(error => {
            console.error('Error fetching product:', error);
        });
}


// cerrar el formulario de actualización
document.getElementById('closeFormButton').addEventListener('click', closeUpdateModal);

function closeUpdateModal() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.pop_up_container').classList.remove('active');
}



// update
document.getElementById('updateProductForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const img = document.getElementById('imgUpdate').value;
    const name = document.getElementById('nameUpdate').value;
    const price = document.getElementById('priceUpdate').value;
    const stock = document.getElementById('stockUpdate').value;
    const id_category = document.getElementById('id_categoryUpdate').value;
    const productId = document.getElementById('productIdUpdate').value;

    const token = localStorage.getItem('authToken');

    if (!token) {
        alert('Token no encontrado. Por favor, inicie sesión.');
        window.location.href = 'login.html';
        return;
    }
    let body = {
        img: img,
        name: name,
        price: price,
        stock: stock,
        id_category: id_category
    }
    console.log(body);
    fetch(`https://atlas-gym.vercel.app/products/${productId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            img: img,
            name: name,
            price: price,
            stock: stock,
            id_category: id_category
        })

    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al actualizar el producto');
        })
        .then(data => {
            alert('Producto actualizado exitosamente');
            closeUpdateModal();
            // Aquí puedes realizar acciones adicionales, como actualizar la interfaz de usuario
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al actualizar el producto. Por favor, inténtelo de nuevo más tarde.');
        });
});
