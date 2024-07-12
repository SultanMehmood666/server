const RealEstateModel = require('./Schema/RealEstate.Schema');

async function createdRealEstateModel(formData, files) {
    try {
        const newRealEstate = [
            {
                title: formData['title:'],
                slug: "3-Sultan-Mehmood",
                logo: "/img/blog/gda-logo.webp",
                productImg: "gda.webp",
                price: 70,
                priceRange: [
                    "Low Budget"
                ],
                propertyPrice:{
                    price: formData['price'],
                    yearlyTaxRate: formData['yearlyTaxRate'],
                    yearTax: formData['yearTax'],
                },
                discount: 5,
                country: true,
                district: "Mission District Area",
                properties: 2,
                featured: true,
                new: true,
                rent: false,
                photo: [
                    "buying",
                    "women",
                    "women"
                ],
                video: [
                    "buying",
                    "women"
                ],
                bedBath: [
                    "Single",
                    "renting",
                    "selling"
                ],
                ratingCount: 5,
                rating: 3,
                saleCount: 5,
                category: [
                    "buying",
                    "renting"
                ],
                tag: [
                    "Popular",
                    "desgin",
                    "ux",
                    "usability",
                    "develop",
                    "icon",
                    "Car",
                    "Service",
                    "Repairs",
                    "Auto Parts",
                    "Oil",
                    "Dealer",
                    "Oil Change",
                    "Body Color"
                ],
                date: new Date('01/01/2021'),
                comments: 35,
                locantion: formData['GoogleMap'],
                description: {
                    title: "Description",
                    fullDescription: formData['fullDescription'],
                    shortDescription: formData['shortDescription']
                },
                propertyDetails: {
                    propertyStatus: formData['propertyStatus'],
                    Area: formData['Area'],
                    style: formData['style'],
                    location: formData['location'],
                    furnished: formData['furnished'],
                    Corner: formData['Corner'],
                    FacingPark: formData['FacingPark'],
                    yearBuilt: formData['yearBuilt'],
                    totalArea: formData['totalArea'],
                },
                factsAndFeatures: {
                    Rooms: formData['Rooms'],
                    bathroom: formData['bathroom'],
                    Bedroom: formData['Bedroom'],
                    livingroom: formData['livingroom'],
                    Diningarea: formData['Diningarea'],
                    kitchens: formData['kitchens'],
                    garden: formData['garden'],
                    parking: formData['parking'],
                    servantQuarters: formData['servantQuarters'],
                    AirCondition: formData['AirCondition'],
                    Heating: formData['Heating'],
                    Floors: formData['Floor'],
                    SwimmingPool: formData['SwimmingPool'],
                    Jacuzzi: formData['Jacuzzi'],
                },
                amenities1: [
                    "Air Conditioning",
                    "Gym",
                    "Microwave",
                    "Swimming Pool",
                    "WiFi"
                ],
                amenities2: [
                    "Barbeque",
                    "Recreation",
                    "Microwave",
                    "Basketball Cout",
                    "Fireplace"
                ],
                amenities3: [
                    "Refrigerator",
                    "Window Coverings",
                    "Washer",
                    "24x7 Security",
                    "Indoor Game"
                ],
                AmenitiesList: [
                    "Dishwasher"
                ],
                
                Agent: {
                    firstName: "Rosalina D",
                    lastName: "Willaimson",
                    fullName: "Rosalina D Willaimson",
                    type: "Property Seller",
                    img: "dha-logo.webp",
                    designation: "Traveller/Photographer",
                    rating: 3,
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.",
                    Social: [
                        "FaPlay",
                        "FaHome",
                        "FaArrowRight",
                        "FaArrowLeft",
                    ],
                },
                DisplayImage:{
                    img: files[3],                
                },
                gallery: {
                    img1: files[0],
                    img2: files[1],
                    img3: files[2]
                },
                propertyTypes: [
                    "House",
                    "Office Villa",
                    "Luxary Home"
                ],
                youtubeVideoID: formData['YTVideo'],
                GoogleMap: formData['GoogleMap'],
                // Floors Plan
                firstFloor: {
                    title: formData['firstFloorTitle'],
                    description: formData['firstFloorDescription'],
                    image: files[4],
                    totalArea: formData['firsttotalArea'],
                    pets: formData['firstpets'],
                    bedroom: formData['firstbedroom'],
                    lounge: formData['firstlounge']
                },
                secondFloor: {
                    title: formData['secondFloorTitle'],
                    description: formData['secondFloorDescription'],
                    image: files[5],
                    totalArea: formData['secondtotalArea'],
                    pets: formData['secondpets'],
                    bedroom: formData['secondbedroom'],
                    lounge: formData['secondlounge']
                },
                thirdFloor: {
                    title: formData['thirdFloorTitle'],
                    description: formData['thirdFloorDescription'],
                    image: files[6],
                    totalArea: formData['thirdtotalArea'],
                    pets: formData['thirdpets'],
                    bedroom: formData['thirdbedroom'],
                    lounge: formData['thirdlounge']
                },
                carousel: [
                    { img: files[7] },
                    { img: files[8] },
                    { img: files[9] },
                    { img: files[10] },
                    { img: files[11] },
                    { img: files[12] },
                    { img: files[13] },
                ]
            }]
        const createdRealEstate = await RealEstateModel.create(newRealEstate);
        console.log('Created construction:', createdRealEstate);
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = { createdRealEstateModel }