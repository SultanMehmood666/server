const {MapsData} = require('../../MongoDB/Modals/Schema/Maps.Schema');

async function FetchMapsRoute(req, resp){
        try{
            const Maps = await MapsData.find();
            return resp.send(Maps);
        }catch(error){
            console.log(error)
        }
}

module.exports={FetchMapsRoute}