const Construction = require('../../MongoDB/Modals/Schema/Const.Schema');
const fs = require('fs').promises;
const path = require('path');

async function ConstructionDelete(req, resp) {
  try {
    const { id } = req.query;
    if (!id) {
      return resp.status(400).send({ success: false, error: 'ID parameter is missing' });
    }

    // Fetch the document from MongoDB
    const construction = await Construction.findById(id);
    if (!construction) {
      return resp.status(404).send({ success: false, error: 'Construction not found' });
    }
  console.log('Image1:', path.join(__dirname, '..','..','..', construction.gallery.img1[0].path))
  
    //  Display Image
    DeleteDisplayImg = construction.DisplayImage.img[0].path;
    // Gallery
    DeleteGalleryImg1 = construction.gallery.img1[0].path;
    DeleteGalleryImg2 = construction.gallery.img2[0].path;
    DeleteGalleryImg3 = construction.gallery.img3[0].path   
    
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
    await Construction.findByIdAndDelete(id);

    resp.status(200).send({ success: true, message: 'Construction deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    resp.status(500).send({ success: false, error: 'Internal server error' });
  }
}

module.exports = { ConstructionDelete };
