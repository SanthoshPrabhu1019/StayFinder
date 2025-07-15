const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js")
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const path= require("path");
const  methodOveride = require ("method-override");
const  ejsMate = require('ejs-mate');

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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOveride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));





app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/listings",async (req,res)=>{
    const alllisting = await  Listing.find({});
    res.render("listings/index.ejs",{alllisting});
});

//new route
app.get("/listings/new",(req,res) =>{
    res.render("listings/new.ejs");
}
);

// show route 
app.get("/listings/:id",async(req,res)=>{
    let{id}= req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

// create route
app.post("/listings",async(req,res)=>{
const  newListing= new Listing(req.body.listing);
await newListing.save();
console.log(req.body.listing);

res.redirect("/listings");
});

//Edit route

app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});

});

//Update route
app.put("/listings/:id", async(req,res) => {
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//Delete route
app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");

});


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

