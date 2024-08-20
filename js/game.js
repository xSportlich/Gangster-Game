let canvas;
let world;
let keyboard = new Keyboard();

function start() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function init() {
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 87) {
        keyboard.UP = true
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true
    }
    if (e.keyCode == 70) {
        keyboard.SHOOT = true
    }
});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 70) {
        keyboard.SHOOT = false;
    }

});

