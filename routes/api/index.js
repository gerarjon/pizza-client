const router = require('express').Router();
const orderRoutes = require('./orders');
const customerRoutes = require('./customer');

router.use('/orders', orderRoutes)
router.use('/customer', customerRoutes)

module.exports = router;