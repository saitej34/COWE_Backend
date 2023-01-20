const express = require('express')
const router = express.Router();

router.get('/',(req, res) => {
    res.send("Hello I am COWE Backend API")
})
router.get('/services',(req,res)=>{
    res.send("I am an API service");
})

module.exports = router;