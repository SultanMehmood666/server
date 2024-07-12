const construction = require('../../MongoDB/Modals/Schema/Const.Schema');
const {ObjectId} = require('mongodb');

async function SpecificConstruction(req, resp){
    try{
        const {id} = req.query;
        console.log(id)
        const specifiConst = await construction.findOne({_id: new ObjectId(id)})
        if(!specifiConst){
            console.log("Collection Not found")
        }
        resp.send(specifiConst);
    }
    catch(error){
        console.log(error);
    }
    
}

module.exports={SpecificConstruction}