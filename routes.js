const router = require('express').Router();
const { randNum, charactersControllers } = require('./controllers');

router.get('/random', randNum);
router.get('/count', charactersControllers);

module.exports = router;
