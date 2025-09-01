const express = require("express");
const router = express.Router();
const { 
    index, 
    renderNewForm, 
    showListing, 
    createListing, 
    renderEditForm, 
    updateListing, 
    destroyListing,
    filter,
    search 
} = require("../controllers/listing");
const { isLoggedIn, isOwner, validateListings ,wrapInCategoryArray} = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const multer  = require('multer');
const {storage} =require("../cloudConfig.js");
const upload = multer({storage});


// Index route & Create listing route
router.route("/")
    .get(wrapAsync(index))                       // Show all listings
    .post(isLoggedIn, upload.single("listing[image]"),wrapInCategoryArray ,validateListings,wrapAsync(createListing)); // Create new listing

router.get("/filter/:id", wrapAsync(filter));

// New listing form
router.get("/new", isLoggedIn, renderNewForm);
router.get("/search", wrapAsync(search));

// Show, Update, Delete, Edit listing routes
router.route("/:id")
    .get(wrapAsync(showListing))                 // Show single listing
    .put(isLoggedIn, upload.single("listing[image]"),wrapInCategoryArray, validateListings, wrapAsync(updateListing))  // Update listing
    .delete(isLoggedIn, wrapAsync(destroyListing)); // Delete listing

// Edit listing form
router.get("/:id/edit", isLoggedIn, wrapAsync(renderEditForm));

module.exports = router;
