//door images
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//images inside the door 
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

//other global variables
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let startButton = document.getElementById('start');
let currentlyPlaying = true;

//when doorImage is clicked to open the door
doorImage1.onclick = () => {
    if(!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };    
};

doorImage2.onclick = () => {
    if(!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    };
};

doorImage3.onclick = () => {
    if(!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    };
};

//to reset the game's state to original
const startRound = () => {
    //reset door image
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;

    //reset num of unopened doors
    numClosedDoors = 3;

    //reset startButton's content
    startButton.innerHTML = 'Good luck!';

    //reset currentlyPlaying
    currentlyPlaying = true;

    //to randomize the door content again
    randomChoreDoorGenerator();
}

startButton.onclick = () => {
    if(currentlyPlaying === false) {
        startRound();
    };
}

//game over
const gameOver = status => {
    if(status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game Over! Play again?';
    };
    currentlyPlaying = false;
}

//to check if the door has the chorebot
const isBot = door => {
    if(door.src === botDoorPath) {
        return true;
    } else {
        return false;
    };
}

//to ensure a door is clickable only once
const isClicked = door => {
    if(door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

//to check the num of remaining door unopened
const playDoor = door => {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameOver('win');
    } else if(isBot(door)) {
        gameOver();
    }
}

const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);

    switch (choreDoor) {
        case (0):
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case (1):
            openDoor2 = botDoorPath;
            openDoor1 = spaceDoorPath;
            openDoor3 = beachDoorPath;
            break;
        case (2):
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            break;
        default:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
    };
}

startRound();