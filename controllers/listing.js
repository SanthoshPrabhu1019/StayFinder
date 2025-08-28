const Listing = require("../models/listing");
const geocoder = require("../utils/geocoder");


module.exports.index = async (req, res) => {
    const alllisting = await Listing.find({});
    res.render("listings/index.ejs", { alllisting });
};


module.exports.renderNewForm = (req, res) => {

    return res.render("listings/new.ejs");
};

module.exports.showListing =(async (req, res) => {
    let { id } = req.params;
const listing = await Listing.findById(id)
    .populate({
        path: "review",
        populate: {
            path: "author"
        }
    })
    .populate("owner");    if(!listing){
       req.flash("error","Listing does not exist!");
       return res.redirect("/listings"); 
    }
    return res.render("listings/show.ejs", { listing });
});

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    const { location, country } = req.body.listing;
    const geoData = await geocoder.geocode(`${location}, ${country}`);

    if (geoData.length > 0) {
      newListing.geometry = {
        type: "Point",
        coordinates: [geoData[0].longitude, geoData[0].latitude],
      };
    }
    await newListing.save();
    console.log(req.body.listing);
    req.flash("success","New Listing Created!");
    return res.redirect("/listings/");

};


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
       req.flash("error","Listing does not exist!");
       return res.redirect("/listings"); 
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl.replace("/upload","upload/h_300,w_250")
    return res.render("listings/edit.ejs", { listing });

};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
    }

    const { location, country } = req.body.listing;
    if (location || country) {
        const geoData = await geocoder.geocode(`${location}, ${country}`);
        if (geoData.length > 0) {
            listing.geometry = {
                type: "Point",
                coordinates: [geoData[0].longitude, geoData[0].latitude],
            };
        }
    }

    await listing.save();
    req.flash("success","Listing Updated!");
    return res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");

    return res.redirect("/listings");

};


module.exports.filter = async (req, res, next) => {
  let { id } = req.params;
  let alllisting = await Listing.find({ category: { $all: [id] } });
  if (alllisting.length != 0) {
    res.locals.success = `Listings Filtered by ${id}!`;
    res.render("listings/index.ejs", { alllisting });
  } else {
    req.flash("error", `There is no any Listing for ${id}!`);
    res.redirect("/listings");
  }
};

module.exports.search = async (req, res) => {
    const { q } = req.query;

    const alllisting = await Listing.find({
        $or: [
            { title: { $regex: q, $options: "i" } },
            { country: { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
        ],
    });

    if (alllisting.length === 0) {
        req.flash("error", `No listings found for "${q}"`);
        return res.redirect("/listings");
    }

    req.flash("success", `${alllisting.length} listings found for "${q}"`);
    res.render("listings/index.ejs", { alllisting });
};