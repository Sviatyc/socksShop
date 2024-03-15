const express = require('express')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
require('dotenv').config()

const Admin = require('./models/AdminSchema.js')
const Socks = require('./models/SocksSchema.js')
const schema = require('./graphqlSchemas/schema.js')
const app = express()
const db = `mongodb+srv://socks:${process.env.MONGO__PASSWORD}@cluster0.vuxdrrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`



mongoose.connect(db)
    .then(() => console.log('mongodb is connect :)'))
    .catch(() => console.log('!!! mongodb is failed !!!'))


    
app.get('/', function(req, res, err){
    res.send('Server is started correct! :)')
    console.error(err.stack)
    res.status(500).send(()=>console.log('Server is stopped! :( '))
})


   
const root = {
        getAdmins: ()=>{
            return Admin.find({})
        },
        getAllSocks: ()=>{
            return Socks.find({})
        },
        createAdmin: ({input})=>{
            new Admin(input)
                .save()
                .then((i) => console.log('запис нового адміна: ', i))
                .catch((err)=> console.log(err))
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
    





