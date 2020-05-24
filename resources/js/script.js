let doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

//when doorImage is clicked to open the door
doorImage1.onclick = () => {doorImage1.src = botDoorPath};