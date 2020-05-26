const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const startButton = document.getElementById('start');
let currentlyPlaying = true;

const isBot = door => {
	
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

isClicked = door => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  } 	
};

const playDoor = door => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  }
  else if (isBot(door) === true) {
    gameOver();
  }
};

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;   
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  } 
  else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};


door1.onclick = () => {
  if (currentlyPlaying === true && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
  playDoor(door1);
  }
};

door2.onclick = () => {
  if (currentlyPlaying === true && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
  playDoor(door2);
  }
};

door3.onclick = () => {
  if (currentlyPlaying === true && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor(door3);
  }
};

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

startButton.onclick = () => {
  if (!currentlyPlaying) {    

    
  startRound();
  }
};

const gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?'
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
};

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

startRound();