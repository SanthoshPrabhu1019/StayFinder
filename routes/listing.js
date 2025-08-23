const express =require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js"); 
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("../schema.js")
const Listing = require("../models/listing.js")
const Review =require("../models/review.js");
const {isLoggedIn} = require("../middleware.js");

const validateListings = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errmsg= error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errmsg);
    }
    else{
        next();
    }
}

// listings

router.get("/", wrapAsync(async (req, res) => {
    const alllisting = await Listing.find({});
    console.log(alllisting);
    res.render("listings/index.ejs", { alllisting });
}));

//new route
router.get("/new",isLoggedIn, (req, res) => {
       
    res.render("listings/new.ejs");
    }
);

// show route 
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("review").populate("owner");
    if(!listing){
       req.flash("error","Listing does not exist!");
       return res.redirect("/listings"); 
    }
    res.render("listings/show.ejs", { listing });
}));

// create route
router.post("/",validateListings, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner=req.user._id;
    await newListing.save();
    console.log(req.body.listing);
    req.flash("success","New Listing Created!");
    res.redirect("/listings/");

}));

//Edit route

router.get("/:id/edit" ,isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
       req.flash("error","Listing does not exist!");
       return res.redirect("/listings"); 
    }
    res.render("listings/edit.ejs", { listing });

}));

//Update route
router.put("/:id",validateListings, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing Updated!");

    res.redirect(`/listings/${id}`);
}));



//Delete route
router.delete("/:id",isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");

    res.redirect("/listings");

}));

module.exports = router;
