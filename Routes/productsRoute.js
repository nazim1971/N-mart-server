const express = require('express');
const { allPro } = require('../Controller/ProductController');

const router = express.Router()



router.get('/allProducts', allPro);


module.exports = router