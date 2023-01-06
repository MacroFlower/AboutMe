//  Photoshow

// Declaring
 const winterPhotos = winter.getElementsByTagName('img')
 let currentImageWinter=0;

 const springPhotos = spring.getElementsByTagName('img')
 let currentImageSpring=0;

 const summerPhotos = summer.getElementsByTagName('img')
 let currentImageSummer=0;

 const autumnPhotos = autumn.getElementsByTagName('img')
 let currentImageAutumn=0;

//  Function

const photoshow = (images, currentImage) => {
 
 images[currentImage].style.display = 'none';
 currentImage = (currentImage + 1) % images.length;
 images[currentImage].style.display = 'flex';
 return currentImage;
};

// calling (dr. feelgood)

document.getElementById('winter').addEventListener("click", () => {
currentImageWinter = photoshow(winterPhotos, currentImageWinter);
});

document.getElementById('spring').addEventListener("click", () => {
currentImageSpring = photoshow(springPhotos, currentImageSpring);
});

document.getElementById('summer').addEventListener("click", () => {
currentImageSummer = photoshow(summerPhotos, currentImageSummer);
});

document.getElementById('autumn').addEventListener("click", () => {
currentImageAutumn = photoshow(autumnPhotos, currentImageAutumn);
});
