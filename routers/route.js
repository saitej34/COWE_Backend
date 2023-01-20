const express = require('express')
const router = express.Router();

router.get('/',(req, res) => {
    res.send("Hello I am COWE Backend API")
})

module.exports = router;