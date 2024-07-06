require('dotenv').config();

const express = require('express');

const productsRoutes = require('./src/routes/productsRoutes');
const instructorsRoutes = require('./src/routes/instructorsRoutes');

const { verifyToken } = require('./src/controllers/loginController');
const loginRoutes = require('./src/routes/loginRoutes');

const app = express();

app.use(express.json());

app.use('/products',verifyToken, productsRoutes);
app.use('/instructors',verifyToken, instructorsRoutes);
 
app.use('/login', loginRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));