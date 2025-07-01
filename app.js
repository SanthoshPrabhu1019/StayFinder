const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listings = require("./models/listing.js")
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const path= require("path");
main() 
     .then((err)=>{
        console.log("connected to DB");
     })
     .catch((err)=>{
        console.log(err);
     })

async function main() {
    await mongoose.connect(MONGO_URL)
    }    
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/listings",async (req,res)=>{
    const alllisting = await  Listings.find({});
    res.render("listings/index.ejs",{alllisting});
})

// app.get("/testlisting",async  (req,res)=>{
//     let sample =new Listing({
//         title: "villa",
//         description :"BY the beach",
//         price :1200,
//         location: "Udupi",
//         country:"India",
//     });

//     await sample.save();
//     console.log("sample was saved");
//     res.send("succesful testing");

// });


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});

