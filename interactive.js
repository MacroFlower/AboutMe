 
//  Photoshow

// Winter

 // Get a reference to the image container element
 const imageContainerWinter = document.getElementById('winter');

 // Get a reference to all of the images
 const images = winter.getElementsByTagName('img');

 // Set a counter to keep track of the current image
 let currentImage = 0;

 // Add an onclick event to the image container element
 imageContainerWinter.onclick = function () {
     // Hide the current image
     images[currentImage].style.display = 'none';

     // Increment the counter
     currentImage = (currentImage + 1) % images.length;

     // Show the next image
     images[currentImage].style.display = 'flex';
 };

 //   spring
 const imageContainerSpring = document.getElementById('spring');
 const imagesSpring = spring.getElementsByTagName('img');
 let currentImageSpring = 0;

 imageContainerSpring.onclick = function () {
     imagesSpring[currentImageSpring].style.display = 'none';
     currentImageSpring = (currentImageSpring + 1) % imagesSpring.length;
     imagesSpring[currentImageSpring].style.display = 'flex';
 }
 // summer
 const imageContainerSummer = document.getElementById('summer');
 const imagesSummer = summer.getElementsByTagName('img');
 let currentImageSummer = 0;

 imageContainerSummer.onclick = function () {
     imagesSummer[currentImageSummer].style.display = 'none';
     currentImageSummer = (currentImageSummer + 1) % imagesSummer.length;
     imagesSummer[currentImageSummer].style.display = 'flex';
 }
 //   autumn
 const imageContainerAutumn = document.getElementById('autumn');
 const imagesAutumn = autumn.getElementsByTagName('img');
 let currentImageAutumn = 0;

 imageContainerAutumn.onclick = function () {
     imagesAutumn[currentImageAutumn].style.display = 'none';
     currentImageAutumn = (currentImageAutumn + 1) % imagesAutumn.length;
     imagesAutumn[currentImageAutumn].style.display = 'flex';
 }
