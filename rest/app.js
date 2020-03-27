const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
//require('dotenv/config');
app.use(bodyParser.json());
// Imports Routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);


//Routes 
app.get("/", (req, res) => {
    res.send("We are on Home");
});




// Connect to Mongodb with URI
//process.env.DB_URI
const URI = 'mongodb://localhost:27017/yt_DEV_tut';

mongoose.connect(URI,{ useNewUrlParser: true,  useUnifiedTopology: true  }, ()=> console.log("connected to DB"))

app.listen(8000);