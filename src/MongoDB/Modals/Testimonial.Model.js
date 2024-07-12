const {TestimonialModel} = require('./Schema/Testimonials.Schema');


async function TestimonialsModel(formData, files){
    try{
        const newTestimonial = [
            {
               Title: formData['title'] ,
               Designation: formData['designation'],
               Profile: files[0],
               Description: formData['description']
            }
        ]
        const createTestimonials = await TestimonialModel.create(newTestimonial)
        console.log(createTestimonials)
    }catch(error){
        console.log(error)
    }
} 

module.exports={TestimonialsModel}
