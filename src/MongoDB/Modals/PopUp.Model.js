const { PopUpModelSchema } = require('./Schema/PopUp.Schema');

async function PopUpModel(id, formData, files) {
    try {
        console.log(id, formData, files);
        const updateData = {
            PopUp: formData['popupEnabled'],
            Image: files.length > 0 ? files[0] : null,
            Content: formData['popupContent'],        
        };

        const updatedDocument = await PopUpModelSchema.findOneAndUpdate(updateData);
        console.log('Updated document:', updatedDocument);
        return updatedDocument;

    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
}

module.exports = { PopUpModel };
