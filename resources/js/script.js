//door images
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//images inside the door 
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

//when doorImage is clicked to open the door
doorImage1.onclick = () => {doorImage1.src = botDoorPath};
doorImage2.onclick = () => {doorImage2.src = beachDoorPath};
doorImage3.onclick = () => {doorImage3.src = spaceDoorPath};