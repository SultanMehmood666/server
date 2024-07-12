const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();


// Construction routes
const {ConstructionRoute} = require('./Routes/Constructions/ConstructionRoute');
const {SpecificConstruction} = require('./Routes/Constructions/SpecificConstruction');
const {InsertConstruction} = require('./Routes/Constructions/InsertConstruction');
const {constructionBookingRoute} = require('./Routes/Constructions/constructionBookingRoute');

// Real Estate routes
const {RealEstateRoute} = require('./Routes/RealEstate/RealEstateRoute');
const {SpecificRealEstateRoute} = require('./Routes/RealEstate/SpecificRealEstate');
const {InsertRealEstate} = require('./Routes/RealEstate/InsertRealEstate');


// Interior routes
const {SpecificInterriorRoute} = require('./Routes/InterriorDesign/SpecificInterrior');
const {InterriorDesignRoute} = require('./Routes/InterriorDesign/InterriorRoute');
const {InsertInterrior} = require('./Routes/InterriorDesign/InsertInterrior');

// Delete
const {ConstructionDelete} = require('./Routes/Delete/ConstructionDelete');
const {InterriorDelete} = require('./Routes/Delete/InteriorDelete');
const {RealEstateDelete} = require('./Routes/Delete/RealEstateDelete');

// Blog
const {BlogRoute} = require('./Routes/Blog/index')
const {HandleBlogImageRoute} = require('./Routes/Blog/HandleBlogImageRoute/index');
const { FetchBlogRoute } = require('./Routes/Blog/FetchBlogRoute');
const { FetchSpecBlog } = require('./Routes/Blog/FetchSpecBlog');


// PopUps
const {PopUpRoute} = require('./Routes/PopUp/PopUp');
const {PopUpData} = require('./Routes/PopUp/PopUpData');

// Maps
const {InsertMapsRoute} = require('./Routes/Maps/InsertMapsRoute');
const { FetchMapsRoute } = require('./Routes/Maps/FetchMapsRoute');
const { DeleteSpecBlog } = require('./Routes/Blog/DeleteSpecBlog');
const { DeleteSpecificMapRoute } = require('./Routes/Maps/DeleteSpecificMapRoute');

// Testimonials
const {InsertTestimonials} = require('./Routes/Testimonials/Testimonials.Routes');
const { FetchTestimonials } = require('./Routes/Testimonials/FetchTestimonials.Route');
const { DeleteTestimonialRoute } = require('./Routes/Testimonials/DeleteTestimonial.Route');

// HomePage Slider
const { HandleSlider } = require('./Routes/HomePage/Slider.Route');
const { getSlider } = require('./Routes/HomePage/getSliders.Route');
const { DeleteSlider } = require('./Routes/HomePage/DeleteSlider.Route');

const corsOptions = {
    origin: ['http://localhost:3000','http://localhost:3001'],  // This should match your frontend origin
};


// Middleware
app.use(express.json());
app.use(cors(corsOptions));


// Construction Routes
app.get('/RetriveConstruction', ConstructionRoute);
app.get(`/ConstructionSpecific`, SpecificConstruction);
app.post('/InsertConstruction', InsertConstruction);


// Real Estate
app.get('/RealEstate', RealEstateRoute);
app.get(`/SpecificRealEstate`, SpecificRealEstateRoute);
app.post('/InsertRealEstate', InsertRealEstate);


// Interrior Design
app.get('/Interrior', InterriorDesignRoute);
app.get(`/SpecificInterrior`, SpecificInterriorRoute);
app.post(`/InsertInterrior`, InsertInterrior);

// Handle Delete
app.post('/Delete/RetriveConstruction', ConstructionDelete);
app.post('/Delete/RealEstate', RealEstateDelete);
app.post('/Delete/Interrior', InterriorDelete);
app.delete('/Delete/SpecBlog', DeleteSpecBlog)
app.delete('/Delete/deleteTestimonial', DeleteTestimonialRoute )
app.delete('/api/DeleteSpecific', DeleteSpecificMapRoute);
app.delete('/api/DeleteSlider', DeleteSlider);


// Handle Bloger
app.get('/BlogFetch', FetchBlogRoute)
app.get('/BlogSpecFetch', FetchSpecBlog)

app.post('/BlogContent', BlogRoute)
app.post('/HandleBlogImageRoute', HandleBlogImageRoute);

// Access Images
app.use('/api/files', express.static(path.join(__dirname, "../")))

// PopUp Message
app.post('/api/PopUp', PopUpRoute);
app.get('/api/PopUpData', PopUpData);

// Booking/Contact Us
app.post('/api/const/booking', constructionBookingRoute)

// Maps
app.post('/api/Maps/Insert', InsertMapsRoute);
app.get('/api/Maps/Fetch', FetchMapsRoute);

// Testimonials
app.post('/api/Testimonials/Insert', InsertTestimonials);
app.get('/api/Testimonials/Fetch', FetchTestimonials);


// HomePage Slider
app.post('/api/HomePage/Slider', HandleSlider);
app.get('/api/HomePage/getSlider', getSlider);


module.exports={app}