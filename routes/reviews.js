const express =require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js"); 
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("../schema.js");
const {validateReview,isAuthor,isLoggedIn} =require("../middleware.js");

const reviewController = require("../controllers/review.js");

// Reviews

//POST

router.post("/", isLoggedIn, validateReview, wrapAsync (reviewController.createReview));

//Delete review

router.delete("/:reviewId", isLoggedIn, isAuthor,wrapAsync(reviewController.destroyReview));


module.exports = router;
