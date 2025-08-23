const express =require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js"); 
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("../schema.js")
const Review =require("../models/review.js");
const Listing = require("../models/listing.js")
 
const {validateReview,isAuthor,isLoggedIn} =require("../middleware.js");
// Reviews

//POST

router.post("/", isLoggedIn, validateReview, wrapAsync (async(req,res) => {
    let listing=  await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.review.push(newReview);
    await newReview.save();
    await listing.save();

    console.log("New Review Saved");
    req.flash("success","New Review Created!");

    res.redirect(`/listings/${listing._id}`);

}));

//Delete review

router.delete("/:reviewId", isLoggedIn, isAuthor,wrapAsync(async(req,res)=>{
    let {id,reviewId} = req.params ;
    Listing.findByIdAndUpdate(id, {$pull: {review: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted!");

    res.redirect(`/listings/${id}`);
}));


module.exports = router;
