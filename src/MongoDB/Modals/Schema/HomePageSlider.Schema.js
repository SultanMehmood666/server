const mongoose = require('mongoose');

// Define the schema for the sliderImage field
const SliderImageSchema = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number
});

// Define the main schema for HomePageSlider
const HomePageSliderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sliderImage: {
    type: SliderImageSchema, // Embed the SliderImageSchema here
    required: true
  },
  variationCenter: {
    type: Boolean,
    required: true
  },
  variationRight: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

// Create the model based on the schema
const HomePageSliderModel = mongoose.model('HomePageSlider', HomePageSliderSchema);

module.exports = { HomePageSliderModel };
