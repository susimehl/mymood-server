const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const Moods = require("../models/Moods.model")


router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
 
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    
    res.json({ imageUrl: req.file.path });
  });


router.post("/moods",(req,res,next) =>{
Moods.create(req.body)
.then(response => {
    res.status(201).json({message: "Moods created"})
})
.catch(err => console.log(err))

})

router.get("/moods", (req,res,next) => {
    Moods.find()
        .then(response => {
res.json(response)
        })
        .catch(err => console.log(err))
    })



module.exports = router;