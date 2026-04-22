require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const produtoRoutes = require('./src/routes/produto.routes');

app.use(produtoRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})
