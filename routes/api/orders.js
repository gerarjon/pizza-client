const router = require('express').Router();

router.get('/', (req,res) => {
  res.json('these are the orders')
})

module.exports = router;