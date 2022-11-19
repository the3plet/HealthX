const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  Age: Number,
  // Sex: String,
  //
  // Height: Number,
  // Weight: Number,
  // BP: Number,
  // Smocking: Boolean,
  // Alchohol:Boolean
});

const url =
  "mongodb+srv://admin:admin@cluster0.aoulm42.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

patientSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Patient", patientSchema);
