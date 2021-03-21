const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.get_all_products);
router.get('/getbyname', productsController.get_products_by_name);

module.exports = router;