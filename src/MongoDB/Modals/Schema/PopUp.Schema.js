const mongoose = require('mongoose');


const PopUpSchema = new mongoose.Schema([
    {
        PopUp: Boolean,
        Image: [],
        Content: String,
    }
])

const PopUpModelSchema = mongoose.model("PopUp", PopUpSchema);
module.exports={PopUpModelSchema}