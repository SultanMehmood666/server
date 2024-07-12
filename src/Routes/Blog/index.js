const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Include the fs module
const filePath = path.join("Public", "Blog").replace(/\\/g, '/');
const { BlogModel } = require('../../MongoDB/Modals/Blog.Model');


// Function to ensure directory exists
const ensureDirectoryExistence = (filePath) => {
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
  };

  // Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const galleryPath = path.resolve(filePath, 'Gallery').replace(/\\/g, '/');
      ensureDirectoryExistence(galleryPath); // Ensure the directory exists
      cb(null, galleryPath); // Save files to the 'Gallery' directory
    },
    filename: function (req, file, cb) {
      const uniqueName = Date.now() + '-' + file.originalname;
      cb(null, uniqueName); // Use the original filename
    }
  });

  // Set up multer instance with the storage configuration
const upload = multer({ storage: storage });

async function BlogRoute(req, resp){
    try {
        // Use multer middleware to parse form data
        upload.any()(req, resp, function (err) {
          if (err) {
            console.error('Error parsing form data:', err);
            return resp.status(500).send('Error parsing form data');
          }
    
          // Access form data from req.body
          const formData = req.body;
          const files = req.files;
          console.log(formData, files)
          // Process form data as needed
          // Modify file paths before saving to MongoDB
          const modifiedFiles = files.map(file => ({
            ...file,
            path: path.join('Public/Blog/Gallery', path.basename(file.path)).replace(/\\/g, '/')
          }));      
        BlogModel(formData, modifiedFiles);
        return resp.send("recieeved Sucessfully");
    });
}
    catch(error){
        console.error(`Error fetching Constructions: ${error}`);
        resp.status(500).json({error: 'Internal Error'})
    }
} 

module.exports={BlogRoute}