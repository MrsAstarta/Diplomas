const express = require('express');
const router = express.Router()
const controller = require('../function/func1')


router.post('/web/:a', controller.function1)

module.exports = router;