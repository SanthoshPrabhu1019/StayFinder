const Joi = require('joi');

const allCategories = [
  "Trending","Rooms","Mountains","Castles","Amazing Pools","Camping","Farm","Arctic",
  "Beach","Boat","Ski-in/out","Apartment","Woodlands","Lake","Cabins","Countryside",
  "Bed & Breakfasts","Campsite","Historical Homes","Vineyard","Mansions"
];

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
        category: Joi.array().items(Joi.string().valid(...allCategories)).min(1).required()
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        ratings: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
})