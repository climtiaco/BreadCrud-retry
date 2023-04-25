//Dependencies
const express = require('express');

//Configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome app about Breads!');   
})

//Breads
const breadsController = require('./controllers/breads_controller');
app.use('/breads', breadsController);

//Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})