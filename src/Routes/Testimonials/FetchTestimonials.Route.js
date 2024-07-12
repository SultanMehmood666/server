const {TestimonialModel} = require('../../MongoDB/Modals/Schema/Testimonials.Schema');

async function FetchTestimonials(req, resp){
    try{
        const Testimonials = await TestimonialModel.find();
        return resp.send(Testimonials);
    }
    catch(error){
        console.error(`Error fetching Testimonials: ${error}`);
        resp.status(500).json({error: 'Internal Error'});
    }
} 

module.exports = { FetchTestimonials };
