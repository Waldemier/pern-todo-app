
//packages
const cors = require('cors');
//routes
const todoRestApiRoutes = require('./routes')
//server
const express = require('express');
const app = express();

require('dotenv').config();

//middlewares
app.use(express.json()); //parse json data
app.use(express.urlencoded({ extended: false })); //parse forms data
app.use(cors()); //set cors policy headers

//routes
app.use('/todos', todoRestApiRoutes);

//server listening
const port = process.env.PORT;

app.listen(port, error => {
    if (error) {
        console.error("Server listening was crashed");
    }
    console.log(`Server is listening on port ${port}`);
})