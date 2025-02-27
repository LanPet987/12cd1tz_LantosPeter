const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())

app.listen(3000,()=>{
    console.log("A téliolipmia szervere a 3000-es porton fut")
})