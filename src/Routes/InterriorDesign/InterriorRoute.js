const Interrior = require('../../MongoDB/Modals/Schema/Interrior.Schema');

async function InterriorDesignRoute(req, resp){
    try{
        const InterriorDesign = await Interrior.find();
        return resp.send(InterriorDesign);
    }
    catch(error){
        console.error(`Error fetching Real Estate: ${error}`);
        resp.status(500).json({error: 'Internal Error'});
    }
} 

module.exports = { InterriorDesignRoute };
