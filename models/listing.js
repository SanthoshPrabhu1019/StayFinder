const mongoose = require("mongoose");
const review = require("./review");
const { categories } = require("../utils/constants"); // import categories only
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: { 
      url: String,
      filename: String
  },
  price: Number,
  location: String,
  country: String,
  review: [{
    type: Schema.Types.ObjectId,
    ref: "Review"
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  category: {
    type: [String],
    enum: categories,  // dynamic categories
    required: true
  },
  amenities: {
    type: Map,
    of: [String]       // keys = sections, values = arrays
  }
});

// Middleware to delete associated reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await review.deleteMany({ _id: { $in: listing.review } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
