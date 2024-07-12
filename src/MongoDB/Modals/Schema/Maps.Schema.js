const mongoose = require('mongoose');

const InsertMaps = new mongoose.Schema([
    {
        title: {type: String, required: true},
        Thumbnail: [],
        pdf: [],
        Logo: [] 
    }
])

const MapsData = mongoose.model('InsertMaps', InsertMaps);

module.exports={MapsData}