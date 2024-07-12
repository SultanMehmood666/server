const {Blog} = require('./Schema/Blog.Schema');

async function BlogModel(formData, files) {
    try {
        const newBlogData = [
            {
            title: formData['title'],
            Content: formData['content'],
            thumbnail: files[0],
            Date: formData['Date']
        }
        ]
        const newBlogContent = await Blog.create(newBlogData);
        console.log('Created Blog:', newBlogContent);
    } catch (error) {
        console.error("Error:", error);
    }
}


module.exports = { BlogModel }
