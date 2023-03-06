const { Schema, model } = require("mongoose");

const moodsSchema = new Schema({
    imageUrl: String,
    title: String,
    source: String,
    topic:{
        type: String,
        enum: [ "dogs", "berlin", "pop culture", "infinite jest", "random"]
    }
},
{
    timestamps: true
})
  
const Moods = model("Moods", moodsSchema);


module.exports = Moods;