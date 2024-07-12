const { PopUpModelSchema } = require('../../MongoDB/Modals/Schema/PopUp.Schema');


async function PopUpData(req, resp) {
    try {
        const popUpData = await PopUpModelSchema.find({});
        return resp.send(popUpData);
    } catch (error) {
        console.error(`Error fetching PopUps: ${error}`);
        resp.status(500).json({ error: 'Internal Error' });
    }
}

module.exports = { PopUpData };
