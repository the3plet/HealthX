const patientsRouter = require('express').Router()
const Patient = require('../models/')

patientsRouter.get('/info',(req,res)=>{
    res.set('content-type','text/html')
    res.send(`<p>Many people present</p>`)
})