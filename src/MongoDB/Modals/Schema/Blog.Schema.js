const mongoose = require('mongoose');

const BlogContent = new mongoose.Schema([
    {
        title: {type: String, required: true},
        Content: {type: String, required: true},
        thumbnail: [],
        Date: {type: String, required: true},
    }
])

const Blog = mongoose.model('BlogContent', BlogContent);

module.exports={Blog}