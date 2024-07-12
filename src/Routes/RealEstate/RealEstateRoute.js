const RealEstateModel = require('../../MongoDB/Modals/Schema/RealEstate.Schema');

async function RealEstateRoute(req, resp){
    try{
        const realEstates = await RealEstateModel.find();
        return resp.send(realEstates);
    }
    catch(error){
        console.error(`Error fetching Real Estate: ${error}`);
        resp.status(500).json({error: 'Internal Error'});
    }
} 

module.exports = { RealEstateRoute };
