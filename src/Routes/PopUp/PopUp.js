const multer = require('multer');
const {PopUpModel} = require('../../MongoDB/Modals/PopUp.Model');
const path = require('path');
const filePath = path.join("..", "Public", "PopUp").replace(/\\/g, '/');
const id = process.env.PopUpId;



// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     const galleryPath = path.resolve(filePath).replace(/\\/g, '/');
      cb(null, galleryPath); // Save files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
      const uniqueName = Date.now() + '-' + file.originalname;
      cb(null, uniqueName); // Use the original filename
    }
  });
  
  // Set up multer instance with the storage configuration
  const upload = multer({ storage: storage });

  async function PopUpRoute(req, resp){
    try{ 
     upload.any()(req, resp, function (err) {
         if (err) {
           console.error('Error parsing form data:', err);
           return resp.status(500).send('Error parsing form data');
         }
   
         const formData = req.body;
         const files = req.files; // Retrieve files from req.files
         
         // Check if files are present
         if (!Array.isArray(files) || files.length === 0) {
             console.error('No files uploaded');
             return resp.status(400).send('No files uploaded');
         }
   
         // Process form data and files as needed
         // Modify file paths before saving to MongoDB
         const modifiedFiles = files.map(file => ({
             ...file,
             path: path.join('/Public/PopUp', path.basename(file.path)).replace(/\\/g, '/')
         }));
         
         // Save form data and modified files to MongoDB using PopUpModel
         PopUpModel(id, formData, modifiedFiles);
   
         resp.send('Form data received successfully');
     });
 } catch(error){
         console.error('Error:', error);
         resp.status(500).send('Internal server error');
     }
 }
 

module.exports={PopUpRoute}