// Object containing url links to images from Unsplash
const IMAGE_URLS = {
    nature: 'background.jpg',
    pencils: 'bakcgound4.jpg',
  };// Sets the background image
  const setBackground = (image) => {
    document.body.style.background = "url('"+IMAGE_URLS[image]+"')";
  };
  if (true) {
    setBackground('nature');
  } else {
    setBackground('pencils');
  }