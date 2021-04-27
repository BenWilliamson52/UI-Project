// get a handle to the canvas context
var canvas = document.getElementById("canvas");
// get 2D context for this canvas
var context = canvas.getContext("2d");

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service_worker.js');
    }
  }

var music;


var enemyHealth = 3;
var playerHealth = 3;

function drawHealthbarEnemy() {
  var width = 80;
  var height = 8;
  var max = 3;
  var val = enemyHealth;

  //Background
  context.fillStyle = "#000000";
  context.clearRect(0, 0, width, height);
  context.fillRect(140, 20, width, height);

  //Fill
  context.fillStyle = "#e60000";
  var fillVal = Math.min(Math.max(val / max, 0), 1);
  context.fillRect(140, 20, fillVal * width, height);
}

function drawHealthbarPlayer() {
    var width = 80;
    var height = 8;
    var max = 3;
    var val = playerHealth;
  
    //Background
    context.fillStyle = "#000000";
    context.clearRect(0, 0, width, height);
    context.fillRect(110, 100, width, height);
  
    //Fill
    context.fillStyle = "#00FF00";
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(110, 100, fillVal * width, height);
  }



// player image
var sprite = new Image();
sprite.src = "./images/player1.png"; 
// enemy image
var enSprite = new Image();
enSprite.src = "./images/enemy1.png";


// Updates
function update() {
//    console.log("Update ...");

if (playerHealth == 0){

    alert("you lose !!!")
}
if (enemyHealth == 0){
    alert("you win!!!")
}

}
function draw() {
 //   console.log("Draw");
   animate();
}
    // Draw player
function animate() {
    context.drawImage(enSprite, 200,20,100,90)
    context.drawImage(sprite, -40, 35, 180, 130);
    drawHealthbarEnemy();
    drawHealthbarPlayer();
}



var move = 1;

// attacks
function punchAttack(){
    move = 1;
    enemyAttack();
}
function biteAttack(){
    move = 2;
    enemyAttack();
}
function counterAttack(){
    move = 3;
    enemyAttack();
 }

 

// attacking
function enemyAttack(){

    var random = Math.floor(Math.random() * 3) + 1;
    
    if (random == 1 && move == 1){playerHealth -= 0;    document.getElementById("showPara").innerHTML="both moves identical, no damage taken";}
    if (random == 1 && move == 2){playerHealth -= 1;    document.getElementById("showPara").innerHTML="enemies attack won, you lost health";}
    if (random == 1 && move == 3){enemyHealth -= 1;     document.getElementById("showPara").innerHTML="your attack won, enemy lost health";}

    if(random == 2 && move == 1){enemyHealth -= 1;      document.getElementById("showPara").innerHTML="your attack won, enemy lost health";}
    if(random == 2 && move == 2){playerHealth -= 0;     document.getElementById("showPara").innerHTML="both moves identical, no damage taken";}
    if(random == 2 && move == 3){playerHealth -= 1;     document.getElementById("showPara").innerHTML="enemies attack won, you lost health";}

    if(random == 3 && move == 1){playerHealth -= 1;     document.getElementById("showPara").innerHTML="enemies attack won, you lost health";}
    if(random == 3 && move == 2){enemyHealth -= 1;      document.getElementById("showPara").innerHTML="your attack won, enemy lost health";}
    if(random == 3 && move == 3){playerHealth -=0 ;     document.getElementById("showPara").innerHTML="both moves identical, no damage taken";}
}


var showing;
function showHide()
{
    if(showing==1)
    {
        document.getElementById("showPara").style.display="inline";
        return showing=0;
    }

    else{
        document.getElementById("showPara").style.display="none";
        return showing=1;
    }
}


function showFor3()
{

    if( document.getElementById("showPara").style.visibility="hidden")
    {
        console.log("showPara");

        document.getElementById("showPara").style.visibility="visible";
        setTimeout(function(){document.getElementById("showPara").style.visibility="hidden";         console.log("hiding para");     }, 3000 );

    
    }

}


function gameloop() {
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}


window.requestAnimationFrame(gameloop);



