const express = require('express');

const productsRoutes = require('./src/routes/productsRoutes');
const instructorsRoutes = require('./src/routes/instructorsRoutes');

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/instructors', instructorsRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));