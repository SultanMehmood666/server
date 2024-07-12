const path = require('path')
const mutler = require('multer');
const filePath = path.join("Public", "Blog").replace(/\\/g, '/')

const stroage = mutler.diskStorage({
    destination: function(req, file, cb){
        const GalleryPath = path.resolve(filePath).replace(/\\/g, '/');
        cb(null, GalleryPath)
    },
    filename: function (req, file, cb){
        const uniqueSuffix = Date.now() + file.originalname;
        cb(null, uniqueSuffix)
    }
})

const upload = mutler({storage: stroage})

function HandleBlogImageRoute(req, resp){
try{
    upload.any()(req, resp, function(error){
        if(error instanceof mutler.MulterError){
            console.log("There's an error:", error.error);
            resp.status(500).send("mutler error:" + error.message);
        }
        else if(error){
            console.log("unKnown Error:", error)
            return resp.status(500).send("unKnown Error:" + error.message);
        }
        const formData = req.body;
        const files = req.files;
        if(files.length > 0){
            const uploadedFile = files[0];
            const filePath = 'http://localhost:5000/Public/Blog/' + path.basename(uploadedFile.path).replace(/\\/g, '/');
            // const modifiedFiles = files.map(file=>({...files, path:path.join('/Public/Blog', path.basename(file.path).replace(/\\/g, '/')), }))
        console.log("filePath:",filePath)
        // Concatenate strings properly before sending response
        resp.json({data: filePath});
           
    }else{
        resp.status(404).send("No File Uploaded")
    }
})
}catch(error){  
    console.log("Catch: Error", error);
    resp.status(500).send("Internal Server Error: " + error.message);
}
}

module.exports={
    HandleBlogImageRoute
}