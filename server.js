const express = require('express');
const app = express();
app.use(express.json())
app.use(require('./routers/route'))
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log('listening on port '+port)
})