const RealEstateModel = require('../../MongoDB/Modals/Schema/RealEstate.Schema');
const {ObjectId} = require('mongodb');

async function SpecificRealEstateRoute(req, resp){
    try{
        const {id} = req.query;
        console.log(id)
        const specificRealEstate = await RealEstateModel.findOne({_id: new ObjectId(id)})
        if(!specificRealEstate){
            console.log("Collection Not found")
        }
        resp.send(specificRealEstate);
    }
    catch(error){
        console.log(error);
    }
    
}

module.exports={SpecificRealEstateRoute}