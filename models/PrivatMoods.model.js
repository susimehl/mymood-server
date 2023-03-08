const { Schema, model } = require("mongoose");

const privatmoodSchema = new Schema({
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
  
const PrivatMoods = model("PrivatMoods", privatmoodSchema);


module.exports = PrivatMoods;