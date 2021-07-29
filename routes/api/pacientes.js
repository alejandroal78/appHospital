const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Funsiona');
});

module.exports = router;
