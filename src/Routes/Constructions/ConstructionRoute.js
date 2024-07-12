const construction = require('../../MongoDB/Modals/Schema/Const.Schema');

async function ConstructionRoute(req, resp){
    try{
        const constructions = await construction.find();
        return resp.send(constructions);
    }
    catch(error){
        console.error(`Error fetching Constructions: ${error}`);
        resp.status(500).json({error: 'Internal Error'})
    }
} 

module.exports={ConstructionRoute}