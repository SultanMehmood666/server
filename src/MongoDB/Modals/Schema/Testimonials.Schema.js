const mongoose = require('mongoose');

const TestimonialsSchema = new mongoose.Schema([
        {
            Title: String,
            Designation: String,
            Profile: [],
            Description: []

        }
])
const TestimonialModel = mongoose.model("Testimonials", TestimonialsSchema);
module.exports={TestimonialModel};