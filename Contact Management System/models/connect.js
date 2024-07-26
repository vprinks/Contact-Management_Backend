const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Con1")
.then(()=> console.log("database connection established"))
.catch((err) => console.log(err.message));