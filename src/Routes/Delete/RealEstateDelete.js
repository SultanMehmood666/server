const RealEstateModel = require('../../MongoDB/Modals/Schema/RealEstate.Schema');
const fs = require('fs').promises;
const path = require('path');

async function RealEstateDelete(req, resp) {
  try {
    const { id } = req.query;
    if (!id) {
      return resp.status(400).send({ success: false, error: 'ID parameter is missing' });
    }

    // Fetch the document from MongoDB
    const RelEstate = await RealEstateModel.findById(id);
    if (!RelEstate) {
      return resp.status(404).send({ success: false, error: 'Real Estate not found' });
    }
    console.log('Image1:', path.join(__dirname, '..','..','..', RelEstate.gallery.img1[0].path))
  
    //  Display Image
    DeleteDisplayImg = RelEstate.DisplayImage.img[0].path;
    // Gallery
    DeleteGalleryImg1 = RelEstate.gallery.img1[0].path;
    DeleteGalleryImg2 = RelEstate.gallery.img2[0].path;
    DeleteGalleryImg3 = RelEstate.gallery.img3[0].path   
    
    fs.unlink(path.join(__dirname, '..','..','..', DeleteGalleryImg1), (error)=>{
      console.log("Error Deleting Display Image:", error)
  })

  fs.unlink(path.join(__dirname, '..','..','..', DeleteGalleryImg2), (error)=>{
    console.log("Error Deleting Display Image:", error)
})

fs.unlink(path.join(__dirname, '..','..','..', DeleteGalleryImg3), (error)=>{
  console.log("Error Deleting Display Image:", error)
})

    console.log("ImageFromDisplayImage", DeleteDisplayImg);
    fs.unlink(path.join(__dirname, '..','..','..', DeleteDisplayImg), (error)=>{
        console.log("Error Deleting Display Image:", error)
    })
    // Delete the document from MongoDB
    await RealEstateModel.findByIdAndDelete(id);

    resp.status(200).send({ success: true, message: 'RelEstate deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    resp.status(500).send({ success: false, error: 'Internal server error' });
  }
}
module.exports = { RealEstateDelete };