const { HomePageSliderModel } = require('./Schema/HomePageSlider.Schema');

async function SliderModel(formData, files) {
    try {
        const newTestimonialData = [
         {
            title: formData['titleOne'],
            subtitle: formData['subtitleOne'],
            description: formData['desOne'],
            sliderImage: files[0],
            variationCenter: formData['variationCenterOne'],
            variationRight: formData['variationRightOne']
        },
        {
            title: formData['titleTwo'],
            subtitle: formData['subtitleTwo'],
            description: formData['desTwo'],
            sliderImage: files[1],
            variationCenter: formData['variationCenterTwo'],
            variationRight: formData['variationRightTwo']
        },
        {
            title: formData['titleThree'],
            subtitle: formData['subtitleThree'],
            description: formData['desThree'],
            sliderImage: files[2],
            variationCenter: formData['variationCenterThree'],
            variationRight: formData['variationRightThree']
        },
        {
            title: formData['titleFour'],
            subtitle: formData['subtitleFour'],
            description: formData['desFour'],
            sliderImage: files[3],
            variationCenter: formData['variationCenterFour'],
            variationRight: formData['variationRightFour']
        },
        {
            title: formData['titleFive'],
            subtitle: formData['subtitleFive'],
            description: formData['desFive'],
            sliderImage: files[4],
            variationCenter: formData['variationCenterFive'],
            variationRight: formData['variationRightFive']
        },
        {
            title: formData['titleSix'],
            subtitle: formData['subtitleSix'],
            description: formData['desSix'],
            sliderImage: files[5],
            variationCenter: formData['variationCenterSix'],
            variationRight: formData['variationRightSix']
        },
        {
            title: formData['titleSeven'],
            subtitle: formData['subtitleSeven'],
            description: formData['desSeven'],
            sliderImage: files[6],
            variationCenter: formData['variationCenterSeven'],
            variationRight: formData['variationRightSeven']
        },
        ];
        const HomePageSlider = await HomePageSliderModel.create(newTestimonialData);
        console.log('HomePageSlider:', HomePageSlider);
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = {SliderModel};