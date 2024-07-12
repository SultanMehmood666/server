const { HomePageSliderModel } = require('../../MongoDB/Modals/Schema/HomePageSlider.Schema');
const fs = require('fs').promises;
const path = require('path');

// Function to delete files from server
const deleteFile = async (filePath) => {
    try {
        fs.unlink(filePath);
        console.log(`Deleted file: ${filePath}`);
    } catch (error) {
        console.error(`Error deleting file: ${filePath}`, error);
    }
};

async function DeleteSlider(req, res) {
    try {
        // Fetch all slider documents to get paths
        const sliders = await HomePageSliderModel.find({});
        
        // Delete each file from server
        sliders.forEach(async (slider) => {
            if (slider.sliderImage && slider.sliderImage.path) {
                const filePath = path.join(__dirname, `../../../${slider.sliderImage.path}`);
                await deleteFile(filePath);
            }
        });

        // Delete all slider documents from MongoDB
        const result = await HomePageSliderModel.deleteMany({});
        
        res.json({ message: `${result.deletedCount} documents deleted successfully.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { DeleteSlider };
