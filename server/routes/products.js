const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.get_all_products);

module.exports = router;