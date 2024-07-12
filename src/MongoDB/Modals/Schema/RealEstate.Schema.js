const mongoose = require('mongoose');

const RealEstateSchema = new mongoose.Schema([
    {
        id: String,
        title: String,
        slug:  String,
        logo: String,
        productImg: String,
        price: Number,
        priceRange: [String],
        discount: Number,
        country: Boolean,
        district: String,
        properties: Number,
        featured: Boolean,
        new: Boolean,
        rent: Boolean,
        photo: [String],
        video: [String],
        bedBath: [String],
        ratingCount: Number,
        rating: Number,
        saleCount: Number,
        category: [String],
        tag: [String],
        date: Date,
        comments: Number,
        propertyPrice:{
            price: Number,
            yearlyTaxRate: Number,
            yearTax: Number,
        },
        description: {
            title: String,
            fullDescription: String,
            shortDescription: String,
        },
        propertyDetails: {
            propertyStatus: String,
            Area: String,
            style: String,
            location: String,
            furnished: String,
            Corner: String,
            FacingPark: String,
            yearBuilt: Number,
            totalArea: Number,
        },
        factsAndFeatures: {
            Rooms: Number,
            bathroom: Number,
            Bedroom: Number,
            livingroom: Number,
            Diningarea: Number,
            kitchens: Number,
            garden: String,
            parking: Number,
            servantQuarters: Number,
            AirCondition: String,
            Heating: String,
            Floors: Number,
            SwimmingPool: Number,
            Jacuzzi: Number
        },
        amenities1: [String],
        amenities2: [String],
        amenities3: [String],
        AmenitiesList: [String],
    
        Agent: {
            firstName: {String},
            lastName: {String},
            fullName: {String},
            type: {String},
            img: {String},
            designation: {String},
            rating: {Number},
            description: {String},
            Social: [String],
        },
    
        DisplayImage: {
            img:[],
        },
        
        gallery: {
            img1: [],
            img2: [],
            img3: [],
        },
        propertyTypes: [String],
        youtubeVideoID: String,
        GoogleMap: String,
    
         // Floor Plans
         firstFloor: {
            title: String,
            description: String,
            image: [],
            totalArea: String,
            pets: String,
            bedroom: Number,
            lounge: Number
        },
        secondFloor: {
            title: String,
            description: String,
            image: [],
            totalArea: Number,
            pets: String,
            bedroom: Number,
            lounge: Number
        },
        thirdFloor: {
            title: String,
            description: String,
            image: [],
            totalArea: Number,
            pets: String,
            bedroom: Number,
            lounge: Number
        },
        carousel: [
            { img: [] },
            { img: [] },
            { img: [] },
            { img: [] },
            { img: [] },
            { img: [] },
            { img: [] },
        ]
    }
]);

const RealEstateModel = mongoose.model("RealEstate", RealEstateSchema);

module.exports =  RealEstateModel;
