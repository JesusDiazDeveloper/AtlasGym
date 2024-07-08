
// create

document.getElementById('createProductForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const img = document.getElementById('img').value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const id_category = document.getElementById('id_category').value;
    const token = localStorage.getItem('authToken');

    if (!token) {
        alert('Token no encontrado. Por favor, inicie sesión.');
        window.location.href = 'login.html';
        return;
    }

    fetch('https://atlas-gym.vercel.app/products', {
        method: 'POST',
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
            if (response.status === 201) {
                return response.json();
            } else {
                throw new Error('Error al crear el producto');
            }
        }
        ).then(data => {
            alert('Producto creado exitosamente');
            document.getElementById('createProductForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al crear el producto. Por favor, inténtelo de nuevo más tarde.');
        });
});