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

const getProductById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM product WHERE id_product = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

const createProduct = (req, res) => {
    console.log("Creating Product...");
    const { img, name, price, stock, category } = req.body;

    const sql = 'INSERT INTO product (img, name, price, stock, id_category) VALUES (?,?,?, ?, ?)';
    db.query(sql, [img, name, price, stock, category], (err, result) => {
        if (err) throw err;
        res.json(
            {
                message: 'Product created',
                productId: result.insertId
            });
    })
}


const updateProduct = (req, res) => {
    console.log("Updating Product...");
    const { id } = req.params;
    const { img, name, price, stock, id_category } = req.body;
    console.log(req.params);
    const sql = 'UPDATE product SET img = ?, name = ?, price = ?, stock = ?, id_category = ? WHERE id_product = ?';
    db.query(sql, [img, name, price, stock, id_category, id], (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Product updated'
        });
    })
}


const deleteProduct = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM product WHERE id_product = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Product deleted'
        });
    })
}



// Exporta la función
module.exports = {
    getAllProducts,
    // Agrega las demás funciones aquí si las tienes definidas
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};