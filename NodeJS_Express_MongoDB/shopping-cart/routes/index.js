var express = require('express');
var router = express.Router();
var Product = require('../models/product');
router.get('/', async function(req, res, next) {
  try {
    const products = await Product.find({}).lean(); // Add .lean() here
    const productChuck = [];
    const chucksize = 3;

    for (let i = 0; i < products.length; i += chucksize) {
      productChuck.push(products.slice(i, i + chucksize));
    }

    // console.log(products);
    res.render('shop/index', { title: 'Online shop', products: productChuck });

  } catch (error) {
    next(error);
  }
});


module.exports = router;
