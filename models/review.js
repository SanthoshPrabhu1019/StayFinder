// /models/review.js

const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");
const Schema =  mongoose.Schema;

const reviewSchema = new Schema ({
    comment : String,
    ratings : {
        type : Number,
        min: 1,
        max: 5,
    },
    createdAt :{
        type : Date,
        default : Date.now()
    },
    author: {
        type :Schema.Types.ObjectId,
        ref: "User"
    }

});
module.exports =mangoose.model("Review",reviewSchema);