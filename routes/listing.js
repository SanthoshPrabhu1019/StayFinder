const express = require("express");
const router = express.Router();
const { 
    index, 
    renderNewForm, 
    showListing, 
    createListing, 
    renderEditForm, 
    updateListing, 
    destroyListing 
} = require("../controllers/listing");
const { isLoggedIn, isOwner, validateListings } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");



// Index route & Create listing route
router.route("/")
    .get(wrapAsync(index))                       // Show all listings
    .post(isLoggedIn, validateListings, wrapAsync(createListing)); // Create new listing

// New listing form
router.get("/new", isLoggedIn, renderNewForm);

// Show, Update, Delete, Edit listing routes
router.route("/:id")
    .get(wrapAsync(showListing))                 // Show single listing
    .put(isLoggedIn, validateListings, wrapAsync(updateListing))  // Update listing
    .delete(isLoggedIn, wrapAsync(destroyListing)); // Delete listing

// Edit listing form
router.get("/:id/edit", isLoggedIn, wrapAsync(renderEditForm));

module.exports = router;
