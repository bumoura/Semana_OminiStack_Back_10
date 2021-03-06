const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministack:bruna123@cluster0-38lws.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
// Métodos  HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não relacional) 
app.listen(3333);

