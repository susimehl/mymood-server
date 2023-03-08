const { Schema, model } = require("mongoose");

const moodsSchema = new Schema({
    imageUrl: String,
    title: String,
    source: String,
    topic:{
        type: String,
        enum: [ "dogs", "berlin", "pop culture", "random" ]
    },
    visual: {
        type: String,
        enum: ["privat", "public"]

    }
},
{
    timestamps: true
})
  
const Moods = model("Moods", moodsSchema);


module.exports = Moods;