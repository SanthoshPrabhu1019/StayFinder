const express =require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js"); 
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("../schema.js")
const Review =require("../models/review.js");
const Listing = require("../models/listing.js")


const validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errmsg= error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errmsg);
    }
    else{
        next();
    }
}

// Reviews

//POST

router.post("/", validateReview, wrapAsync (async(req,res) => {
    let listing=  await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.review.push(newReview);
    await newReview.save();
    await listing.save();

    console.log("New Review Saved");
    res.redirect(`/listings/${listing._id}`);

}));

//Delete review

router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let {id,reviewId} = req.params ;
    Listing.findByIdAndUpdate(id, {$pull: {review: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));


module.exports = router;
