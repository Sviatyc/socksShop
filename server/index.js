const express = require('express')
const mongoose = require('mongoose')
const app = express()

const db = "mongodb+srv://socks:KpqAB62SwtaYBsHh@cluster0.vuxdrrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(db)
    .then(() => console.log('...mongodb is connect :)'))
    .catch(() => console.log('!!! mongodb is failed !!!'))


    
app.get('/', function(req, res, err){
    res.send('Server is started correct! :)')
    console.error(err.stack)
    res.status(500).send(()=>console.log('Server is stopped! :( '))
})



app.listen(3000)










// KpqAB62SwtaYBsHh
