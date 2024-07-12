const {Blog} = require('../../MongoDB/Modals/Schema/Blog.Schema')


async function FetchBlogRoute(req, resp){
    try{
        const fetchBlog = await Blog.find();
        return resp.send(fetchBlog);
    }catch(error){
        console.log(error);
    }
}

module.exports={FetchBlogRoute}