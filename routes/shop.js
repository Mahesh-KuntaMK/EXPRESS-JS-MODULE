const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productcontroller=require('../controllers/product.js')

const router = express.Router();

router.get('/',productcontroller.getshop);

module.exports = router;
