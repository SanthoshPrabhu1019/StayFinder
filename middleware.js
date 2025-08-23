const Listing =require("./routes/listing.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("./schema.js")

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create listing");
        return res.redirect("/login");
    }
    next();
}


module.exports.savedRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};



module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = Listing.findById(id);

    if (!listing.owner.equls(currUser._id)) {
        req.flash("error", "You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
    }
};

module.exports.validateListings = (req,res,next)=>{
     let {error} = listingSchema.validate(req.body);
    if(error){
        let errmsg= error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errmsg);
    }
    else{
        next();
    }
};


module.exports.validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errmsg= error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errmsg);
    }
    else{
        next();
    }
};
