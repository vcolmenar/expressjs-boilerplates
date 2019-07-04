const express = require('express');
const router = express.Router();
const pug = require('pug');
const members = require('../../members')
const compiledFunction = pug.compileFile('pug/template.pug');

router.get('/', (req, res) => {
    res.send(compiledFunction({members:members}));
});

module.exports = router;