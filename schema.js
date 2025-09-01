const Joi = require('joi');
const { categories, amenities } = require('./utils/constants.js'); // import categories and amenities

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
    category: Joi.array().items(Joi.string().valid(...categories)).min(1).required(),
    amenities: Joi.object(
      Object.fromEntries(
        Object.entries(amenities).map(([section, items]) => [
          section,
          Joi.array().items(Joi.string().valid(...items))
        ])
      )
    ).optional()
  }).required()
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    ratings: Joi.number().required().min(1).max(5),
    comment: Joi.string().required()
  }).required()
});
