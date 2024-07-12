const { Blog } = require('../../MongoDB/Modals/Schema/Blog.Schema');
const fs = require('fs').promises;
const path = require('path');

async function DeleteSpecBlog(req, resp) {
  try {
    const { id } = req.query;
    if (!id) {
      return resp.status(400).send({ success: false, error: 'ID parameter is missing' });
    }

    // Fetch the document from MongoDB
    const Blogger = await Blog.findById(id);
    if (!Blogger) {
      return resp.status(404).send({ success: false, error: 'Real Estate not found' });
    }

    // Display Image
    const DeleteThumbnail = Blogger.thumbnail[0].path;
    try {
      await fs.unlink(path.join(__dirname, '..', '..', '..', DeleteThumbnail));
    } catch (error) {
      console.error("Error Deleting Display Image:", error);
    }

    // Delete the document from MongoDB
    await Blog.findByIdAndDelete(id);

    resp.status(200).send({ success: true, message: 'Real Estate deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    resp.status(500).send({ success: false, error: 'Internal server error' });
  }
}

module.exports = { DeleteSpecBlog };
