/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){

    putBeeper();
    moveForward();
    moveForward();
    turningLeft();
    turningLeft();
    putBeeper();
    moveForward();
    turningRight();
    putBeeper();
    turnRight();
    moveForward();
    moveForward();
    turningLeft();
    turningLeft();
    putBeeper();
    moveForward();
    turningRight();
    putBeeper();
    turnRight();
    moveForward();
    moveForward();
    }
    
    function moveForward() {
       move();
       move();
       putBeeper();
    }
       
    function turningLeft() {
       turnLeft();
       move();
     }
     
    function turningRight() {
       move();
       turnRight();
       move();
    }
       
       
       