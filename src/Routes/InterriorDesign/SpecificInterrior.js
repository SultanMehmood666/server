const Interrior = require('../../MongoDB/Modals/Schema/Interrior.Schema');
const {ObjectId} = require('mongodb');

async function SpecificInterriorRoute(req, resp){
    try{
        const {id} = req.query;
        console.log(id)
        const specificInterrior = await Interrior.findOne({_id: new ObjectId(id)})
        if(!specificInterrior){
            console.log("Collection Not found")
        }
        resp.send(specificInterrior);
    }
    catch(error){
        console.log(error);
    }
}

module.exports={SpecificInterriorRoute}