// Photospinning, hedgehog on the other page

// declaring:

let rotation = 0;
let smallRotation = 0;
let speed = 4;
let animationId;
let smallAnimationId;
const hedgehog = document.getElementById('hedgehog');
const hedgehogSmall = document.getElementById('hedgehogSmall');

// function:

  function rotate(element, speed) {
  element.style.transform = `rotate(${rotation}deg)`;
  rotation += speed;
  if (rotation >= 360) {
    rotation = 0;
  }
  animationId = requestAnimationFrame(() => rotate(element, speed));
};

function smallRotate(element, speed) {
    element.style.transform = `rotate(${smallRotation}deg)`;
    smallRotation += speed;
    if (smallRotation >= 360) {
        cancelAnimationFrame(smallAnimationId);
        smallRotation = 0;
    } else {
        smallAnimationId = requestAnimationFrame(() => smallRotate(element, speed));
    }
}


// calling:

hedgehog.addEventListener("click", () => {
    if (!animationId) {
        rotate(hedgehog, 4);
    } else {
        cancelAnimationFrame(animationId);
        animationId = 0;
        if (rotation >= 225 && rotation <= 240) {
            console.log('point(s)');
            smallRotate(hedgehogSmall, 8);
              rotation = 0;
              smallRotation = 0;
          }
    }
});