const db = require('../db/db');

const getAllProducts = (req, res) => {
    const sql = 'SELECT * FROM product';

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error getting products');
        } else {
            res.send(result);
        }
    });
}







// Exporta la función
module.exports = {
    getAllProducts,
    // Agrega las demás funciones aquí si las tienes definidas
    // getProductById,
    // createProduct,
    // updateProduct,
    // deleteProduct
};