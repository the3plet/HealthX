const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name: String,
    Sex: String,
    Age: int,
    Height: int,
    Weight: int,
    BP: int,
    Smocking: Boolean,
    Alchohol:Boolean


})