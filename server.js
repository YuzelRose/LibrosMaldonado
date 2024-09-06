const express = require('express')
const app = express()

//importacion bd Mi
const MonDB = require('./mongoConex')
const SqlDB = require('./mysqlConex')

app.get('/', (req,res) =>{
    res.end('Bienvendio')
})

//Configuracion basica del server
app.listen(5000, function(){
    console.log("El servidor funciona")
})