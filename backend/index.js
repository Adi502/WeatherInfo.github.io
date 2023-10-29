const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./routes")

const bodyParser = require("body-parser")

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://adityasoraganvi20:aditya123@cluster0.or4stet.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log("Data base connected")
)

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(router);

app.listen(3000,()=>{
    console.log("Server has started")
})