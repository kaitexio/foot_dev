const images = [require('../static/media/dammy003.jpg'), require('../static/media/dammy005.jpg'),  require('../static/media/dammy001.jpg'), require('../static/media/dammy002.jpg'), require('../static/media/dammy004.jpg')]
const setImage = () => {
    const randomInt = Math.floor(Math.random() * images.length);
    const rImage = images[randomInt];
    return rImage
}

export default setImage;