const { Schema, model } = require("mongoose");

const moodsSchema = new Schema({
    imageUrl: String,
    title: String,
    source: String,
    topic:{
        type: String,
        enum: ["development", "dogs", "berlin", "pop culture", "random"]
    }
},
{
    timestamps: true
})
  
const Moods = model("Moods", moodsSchema);


module.exports = Moods;