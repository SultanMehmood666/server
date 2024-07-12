const {Blog} = require('../../MongoDB/Modals/Schema/Blog.Schema');
const {ObjectId} = require('mongodb');

async function FetchSpecBlog(req, resp){
    try{
        const {id} = req.query;
        console.log(id)
        const specifiBlog = await Blog.findOne({_id: new ObjectId(id)})
        if(!specifiBlog){
            console.log("Collection Not found")
        }
        resp.send(specifiBlog);
    }
    catch(error){
        console.log(error);
    }
    
}

module.exports={FetchSpecBlog}