require('dotenv').config();
const express = require("express");
const app = express()
const mongoose = require('mongoose')
const path = require('path')

async function conectarDB(){
  try{
    await mongoose.connect(process.env.token)
  }catch(error){
    console.log(error);
  }
}

conectarDB()

//rutas de frontend 

app.use('/',express.static(path.resolve('views', 'home')))
app.use('/tareas',express.static(path.resolve('views', 'tareas')))
module.exports = app
