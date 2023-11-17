const cube = document.getElementById('cube');
const gameContainer = document.querySelector('.game-container');

let cubePosition = { x: 0, y: 0 };
const cubeSize = 50;
const moveSpeed = 50;
const gameInterval = 1000;

let isLocked = false;
let intervalId = setInterval(moveDown, gameInterval);

function moveDown() {
    if (!isLocked && cubePosition.y + cubeSize < gameContainer.clientHeight) {
        cubePosition.y += cubeSize;
        cube.style.top = cubePosition.y + 'px';
    } else {
        lockCube();
    }
}

function moveLeft() {
    if (!isLocked && cubePosition.x > 0) {
        cubePosition.x -= cubeSize;
        cube.style.left = cubePosition.x + 'px';
    }
}

function moveRight() {
    if (!isLocked && cubePosition.x + cubeSize < gameContainer.clientWidth) {
        cubePosition.x += cubeSize;
        cube.style.left = cubePosition.x + 'px';
    }
}

function lockCube() {
    clearInterval(intervalId);
    cube.style.backgroundColor = '#f00';
    isLocked = true;
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
});
