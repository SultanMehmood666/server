const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Include the fs module
const filePath = path.join("Public", "construction").replace(/\\/g, '/');
const { ConstructionModel } = require('../../MongoDB/Modals/construction.Model');

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

// Route handler for handling form data
async function InsertConstruction(req, resp) {
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
            // Process form data as needed
      // Modify file paths before saving to MongoDB
      const modifiedFiles = files.map(file => ({
        ...file,
        path: path.join('Public/construction/Gallery', path.basename(file.path)).replace(/\\/g, '/')
      }));
       ConstructionModel(formData, modifiedFiles);
      //  Response
       resp.send('Form data received successfully');

    });
  } catch (error) {
    console.error('Error:', error);
    resp.status(500).send('Internal server error');
  }
}

module.exports = { InsertConstruction };
