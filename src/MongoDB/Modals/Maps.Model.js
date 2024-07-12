const {MapsData} = require('./Schema/Maps.Schema');

async function InsertMapModel(formData, files) {
    try {
        const newMap = [{
            title: formData['title'],
            Thumbnail: files[2], 
            pdf: files[1],
            Logo: files[0]
        }]
        const createMap = await MapsData.create(newMap);
        console.log("FromInsertMapModel:",createMap) 

        return createMap;
    }catch(error){
        console.log(error)
    }
}

module.exports={InsertMapModel}