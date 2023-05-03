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

//Create
//So here we're creating a post route... The previous ones above, we're creating a .get route. The route its posting to is our home page
// The Code along makes you test this .post route first BEFORE creating the form that we will make for the user to submit the request to post another bread... They're doing it this way so that it doesn't get confusing to debug if theres something wrong with the code.
// So the ternary is specifically for when the form is created, its the additional step we need to fully have our form create a correct post route with our website.
breads_router.post('/', (req, res) => {
    if(!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    }
    if(req.body.hasGluten === "on") {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    bread_data.push(req.body)
    res.redirect('/breads')
})

// New
breads_router.get('/new', (req, res) => {
    res.render('new')
})

//Show
breads_router.get('/:arrayIndex', (req, res) => {
    if (bread_data[req.params.arrayIndex]) {
    res.render('show', {
        bread: bread_data[req.params.arrayIndex]
    }) 
        } else {
            res.render('404')
    }
})
module.exports = breads_router