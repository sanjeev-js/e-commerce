var dotenv = require('dotenv');
dotenv.config();

// creating server for routing
const  express = require('express');
const app = express();
let jwt = require('jsonwebtoken');
const config = require('./config');
var Stripe = require('stripe');
const mysql = require('mysql');
const { Model } = require('objection');
const database = require('./database/createDatabase.js')
const Knex = require('knex');
const knexConfig = require('./knexconfig');
Model.knex(Knex(knexConfig.development));

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
},console.log("Database Connected"));

// data will be sent in the request body
app.use(express.json());
app.use((request, response, next) => {
  request.base = `${request.protocol}://${request.get('host')}`
  request.db = database
  return next()
})

// route for departments
var departments = express.Router();
app.use('/departments',departments);
require('./routes/departments')(departments,knex);

//route for category
var categories = express.Router();
app.use('/categories',categories);
require('./routes/categories')(categories,knex);

//route for attributes
var attributes = express.Router();
app.use('/attributes',attributes);
require('./routes/attributes')(attributes,knex);

//route for products
var products = express.Router();
app.use('/products',products);
require('./routes/products')(products,knex,jwt);

//route for customers and customer
  var customers = express.Router();
app.use('/customers',customers);

var customer = express.Router();
app.use('/customer',customer);
require('./routes/customers')(customers,customer,knex,jwt);

//route for orders
var orders = express.Router();
app.use('/orders', orders);
require('./routes/orders')(orders, knex);

//route for shopping cart
var shoppingcart = express.Router();
app.use('/shoppingcart', shoppingcart);
require('./routes/shoppingcart')(shoppingcart, knex);

//route for tax
var tax = express.Router();
app.use('/tax',tax);
require('./routes/tax')(tax, knex);

//route for shipping
var shipping = express.Router();
app.use('/shipping',shipping);
require('./routes/shipping')(shipping, knex);

//route for stripe
var stripe_ep = express.Router();
app.use('/stripe',stripe_ep);
require('./routes/stripe')(stripe_ep, Stripe);

//Server listning
const server  = app.listen(process.env.PORT,function(){
 console.log(`Server listening ${ process.env.PORT } port`)
});
