<<<<<<< HEAD

=======
>>>>>>> c649c65b1ce7efff2b629e4a617f1ae54ed74a67
const canvas= document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 2400;
const CANVAS_HEIGHT = canvas.height = 700;
let gamespeed = 7;
let gameFrame = 0;
<<<<<<< HEAD
let dead = false;
const playerHitbox = document.getElementById("hitbox");
const obstacleHitbox = document.getElementById("obstacle");

=======
>>>>>>> c649c65b1ce7efff2b629e4a617f1ae54ed74a67

const backgroundLayer1 = new Image();
backgroundLayer1.src = "img/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "img/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "img/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src= "img/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "img/layer-5.png";
<<<<<<< HEAD
const backgroundLayer6 = new Image();
backgroundLayer6.src = "img/layer-6.png";
const backgroundLayer7 = new Image();
backgroundLayer7.src = "img/layer-7.png";
const backgroundLayer8 = new Image();
backgroundLayer8.src = "img/layer-8.png";
const backgroundLayer9 = new Image();
backgroundLayer9.src = "img/layer-9.png";
const backgroundLayer10 = new Image();
backgroundLayer10.src = "img/layer-10.png";
const backgroundLayer11 = new Image();
backgroundLayer11.src = "img/layer-11.png";


const slider = document.getElementById('slider');
// slider.value = gamespeed;
// const showGameSpeed = document.getElementById('showGameSpeed');
// showGameSpeed.innerHTML = gamespeed;
=======

const slider = document.getElementById('slider');
slider.value = gamespeed;
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gamespeed;
>>>>>>> c649c65b1ce7efff2b629e4a617f1ae54ed74a67
slider.addEventListener('change', function(e){
gamespeed = e.target.value;
showGameSpeed.innerHTML = e.target.value;

});

<<<<<<< HEAD
const checkCollision = (elm1, elm2) => {
    let elm1Rect = elm1.getBoundingClientRect();
    let elm2Rect = elm2.getBoundingClientRect();
  
    if (
      elm1Rect.right >= elm2Rect.left &&
      elm1Rect.left <= elm2Rect.right &&
      elm1Rect.bottom >= elm2Rect.top &&
      elm1Rect.top <= elm2Rect.bottom
    ) {
      dead = true;
     console.log('dead');
     
    }
   
  };
 
      function init() {
          objImage = document.getElementById("image1");
          objImage.style.position = "relative";
          objImage.style.left = "0px";
          objImage.style.top = "340px";
      }
      function getKeyAndMove(e) {
          var key_code = e.which || e.keyCode;
          switch (key_code) {
              case 37: //left arrow key
                  moveLeft();
                  break;
              case 38: //Up arrow key
                  moveUp();
                  break;
              case 39: //right arrow key
                  moveRight();
                  break;
              case 40: //down arrow key
                  moveDown();
                  break;
          }
      }
      function moveLeft() {
        //   objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
          objImage.style.transform = "scaleX(-1)" ;
          objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
      }
      function moveUp() {
          objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
       
      }
      function moveRight() {
        objImage.style.transform = "scaleX(1)" ;
          objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
  
       }
      function moveDown() {
          objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
      }
      window.onload = init;


=======
//classes in javascript
>>>>>>> c649c65b1ce7efff2b629e4a617f1ae54ed74a67
class Layer{
constructor(image,speedModifier){
    this.x = 0;
    this.y = 0;
<<<<<<< HEAD
    this.width = 2200;
=======
    this.width = 2400;
>>>>>>> c649c65b1ce7efff2b629e4a617f1ae54ed74a67
    this.height = 700;
   
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gamespeed* this.speedModifier;
}
update(){
this.speed = gamespeed * this.speedModifier;
this.x = gameFrame *this.speed % this.width;
<<<<<<< HEAD

this.x = Math.floor(this.x - this.speed);

=======
// if(this.x <= -this.width){
//     this.x = 0;
// }
// if(this.x2 <= -this.width){
//     this.x2 = this.width + this.x - this.speed;
// }
this.x = Math.floor(this.x - this.speed);
// this.x2 = Math.floor(this.x2 - this.speed);
>>>>>>> c649c65b1ce7efff2b629e4a617f1ae54ed74a67
}

draw(){
ctx.drawImage(this.image, this.x, this.y,this.width, this.height);
ctx.drawImage(this.image, this.x + this.width, this.y,this.width, this.height);
}
}

<<<<<<< HEAD
const layer1 = new Layer(backgroundLayer11, 0.1);
const layer2 = new Layer(backgroundLayer10, 0.2);
const layer3 = new Layer(backgroundLayer9, 0.3);
const layer4 = new Layer(backgroundLayer8, 0.4);
const layer5 = new Layer(backgroundLayer7, 0.5);
const layer6 = new Layer(backgroundLayer6, 0.6);
const layer7 = new Layer(backgroundLayer5, 0.7);
const layer8 = new Layer(backgroundLayer4, 0.8);
const layer9 = new Layer(backgroundLayer3, 0.9);
const layer10 = new Layer(backgroundLayer2, 1);
const layer11 = new Layer(backgroundLayer1, 1.1);





const gameObject = [layer1,layer2,layer3,layer4,layer5,layer6,layer7,layer8,layer9,layer10,layer11];
=======
const layer1 = new Layer(backgroundLayer1, 0.2);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);
const layer5 = new Layer(backgroundLayer5, 1);


const gameObject = [layer1,layer2,layer3,layer4,layer5];
>>>>>>> c649c65b1ce7efff2b629e4a617f1ae54ed74a67

function animate(){
    
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   gameObject.forEach(Object=>{
       Object.update();
       Object.draw();
   });
   gameFrame--;
<<<<<<< HEAD

    requestAnimationFrame(animate);
}



document.onkeydown = function(e) {
    if (e.code == 32) UP = true;
    console.log(e.code);
    
  };
  
  document.onkeyup = function(e) {
    if (e.code == 32) UP = false;
  };

animate();
checkCollision(playerHitbox,obstacleHitbox);
=======
//    ctx.drawImage(backgroundLayer4 ,x, 0);
//    ctx.drawImage(backgroundLayer4 ,x2, 0);
//    if(x < -2400) x = 2400 + x2 - gamespeeed;
//   else x -= gamespeeed;
//   if(x2 < -2400) x2 = 2400 + x - gamespeeed;
//   else x2 -= gamespeeed;
    requestAnimationFrame(animate);
}
animate();
>>>>>>> c649c65b1ce7efff2b629e4a617f1ae54ed74a67
