//door images
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//images inside the door 
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

//when doorImage is clicked to open the door
doorImage1.onclick = () => {doorImage1.src = openDoor1};
doorImage2.onclick = () => {doorImage2.src = openDoor2};
doorImage3.onclick = () => {doorImage3.src = openDoor3};

let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;

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

randomChoreDoorGenerator();