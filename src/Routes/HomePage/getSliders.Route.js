const {HomePageSliderModel} = require('../../MongoDB/Modals/Schema/HomePageSlider.Schema')

async function getSlider(req, resp){
       try{
            const getSliders = await HomePageSliderModel.find();
            return resp.send(getSliders);
        }
        catch(error){
            console.error(`Error fetching Real Estate: ${error}`);
            resp.status(500).json({error: 'Internal Error'});
        }
    } 

module.exports={getSlider}