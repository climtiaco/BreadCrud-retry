const express = require('express');
//Previously
// const breads = express.Router();
const breads_router = express.Router();
//const Bread = require('../models/bread');
const bread_data = require('../models/bread_data');

//INDEX
breads_router.get('/', (req, res) => {
    // this 'index' we're referring to is the index.jsx file
    res.render('index', 
    // so this "breads:" is just an object that we're using as the second optional argument for res.render to work.
        {
            breads: bread_data,
            title: 'Index Page'
        })
    // res.send(bread_data)
})

//Show
breads_router.get('/:arrayIndex', (req, res) => {
    if (bread_data[req.params.arrayIndex]) {
    res.render('show', {
        bread: bread_data[req.params.arrayIndex]
    }) 
        } else {
            res.send('404')
    }
})
module.exports = breads_router