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

//MIDDLEWARE // Setting this up makes it so when we're calling res.render() it'll use the view engine we set up right here.
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//Breads
const breadsController = require('./controllers/breads_controller');
app.use('/breads', breadsController);

//404 Page
app.get('*', (req, res) => {
    res.render('404')
})

//Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})