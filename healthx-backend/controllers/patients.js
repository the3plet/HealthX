const patientsRouter = require('express').Router()
const Patient = require('../models/patient')

patientsRouter.get('/info',(req,res)=>{
    res.set('content-type','text/html')
    res.send(`<p>Many people present</p>`)
})

patientsRouter.get('/:id',(req,res)=>{
    res.send(`Patient-${req.params.id}`)
})

patientsRouter.post('/',(req,res)=>{
const body = req.body;
})

module.exports = patientsRouter