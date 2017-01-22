function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    background(0);
}

function draw() {

    //just showing you a sketch will be a resizable card
    //delete all this and replace it with your own sketch
    var counter = 0
    
     //see the corners of your sketch / think about card resizing.
    
    while (counter < 5) {
        if (counter = counter + 1) {
            strokeWeight(counter);
            stroke(255, random(counter));
            fill(255, random(255));
        }
        
        ellipse(random(windowWidth), random(windowHeight), random(counter), random(counter));
             
        if (keyIsPressed === true) {
                 background(0,10);
        }
        
        
        counter = counter + 1
    
}
}
    
    //Shake device for lines
function deviceShaken() {    
    lineShake(accelerationX, accelerationY);
}
    
    //Turn device to erase canvas
function deviceTurned() {
    eraseCanvas();
}

    //Click mouse for lines
function mouseClicked() {
    lineShake(random(windowWidth), random(windowHeight));
}
    
    //lineShake Machine
    
function lineShake(powerX, powerY) {
    strokeWeight(1);
    stroke(random(255), random(255), 255, random(255));
    line(random(0, powerX), random(0, powerY), random(powerX, windowWidth), random(powerY, windowHeight));
}
    
    //eraseCanvas Machine
    
function eraseCanvas() {
    background(0);
}
   

