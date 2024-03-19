const express = require('express')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
require('dotenv').config()

const Socks = require('./models/SocksSchema.js')
const schema = require('./graphqlSchemas/schema.js')
const app = express()
const db = `mongodb+srv://socks:${process.env.MONGO__PASSWORD}@Socks-Shop.vuxdrrm.mongodb.net/Socks?retryWrites=true&w=majority&appName=Socks-Shop`



mongoose.connect(db)
    .then(() => console.log('mongodb is connect :)'))
    .catch(() => console.log('!!! mongodb is failed !!!'))
    


    
app.get('/', function(req, res, err){
    res.send('Server is started correct! :)')
    console.error(err.stack)
    res.status(500).send(()=>console.log('Server is stopped! :( '))
})


   
const root = {
        getAllSocks: ()=>{
            return Socks.find({})
        },
        createSocks: ({input})=>{
            new Socks(input)
                .save()
                .then(i => console.log('Запис нового товару: ', i))
                .catch(err => console.log(err))
        }
}

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app

app.listen(3000)
    





