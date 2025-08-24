const express =require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js"); 
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("../schema.js")
const Listing = require("../models/listing.js")
const Review =require("../models/review.js");
const {isLoggedIn ,isOwner , validateListings} = require("../middleware.js");
const listingController = require("../controllers/listing.js");

// listings

router.get("/", wrapAsync(listingController.index));

//new route
router.get("/new",isLoggedIn ,wrapAsync(listingController.renderNewForm));

// show route 
router.get("/:id", wrapAsync(listingController.showListing));

// create route
router.post("/",validateListings, wrapAsync(listingController.createListing));

//Edit route

router.get("/:id/edit" ,isLoggedIn, wrapAsync(listingController.renderEditForm));

//Update route
router.put("/:id",validateListings, wrapAsync(listingController.updateListing));



//Delete route
router.delete("/:id",isLoggedIn, wrapAsync(listingController.destroyListing));

module.exports = router;
