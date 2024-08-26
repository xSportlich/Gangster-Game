let canvas;
let world;
let keyboard = new Keyboard();
let mute = true;

function start() {
    let content = document.getElementById('loseOrWinScreen');
    document.getElementById('top-hud').classList.remove('d-none');
    document.getElementById('bottom-hud').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    content.classList.add('d-none');
    world.character.lifebar = 100;
    world.level.enemies[3].life = 5;
    startup();
}

function init() {
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('top-hud').classList.add('d-none');
    document.getElementById('bottom-hud').classList.add('d-none');
}

function switchToUnmute() {
    let content = document.getElementById('controll-sound');
    content.innerHTML = `<img onclick="switchToMute()" class="hud-controll" src="img/infos/Taste_A.png" alt="">`;
    mute = false;
}

function switchToMute() {
    let content = document.getElementById('controll-sound');
    content.innerHTML = `<img onclick="switchToUnmute()" id="controll-sound_mute" class="hud-controll" src="img/edit-gangster.png" alt=""></img>`;
    mute = true;
}

function switchToFullscreen() {
    let screen = document.getElementById('fullscreen');
    let content = document.getElementById('controll-fullscreen');
    content.innerHTML = `<img onclick="exitFullscreenModus()" class="hud-controll-fullscreen" src="img/interface/ammo_1.png" alt="">`;
    enterFullscreen(screen);
}

function exitFullscreenModus() {
    let screen = document.getElementById('fullscreen');
    let content = document.getElementById('controll-fullscreen');
    content.innerHTML = `<img onclick="switchToFullscreen()" class="hud-controll-fullscreen" src="img/infos/Taste_A.png" alt="">`;
    exitFullscreen(screen);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
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

function startup() {
    document.getElementById('controll-left').addEventListener('touchstart', () => {
        keyboard.LEFT = true;
    }, { passive: true });
    document.getElementById('controll-left').addEventListener('touchend', () => {
        keyboard.LEFT = false;
    });

    document.getElementById('controll-right').addEventListener('touchstart', () => {
        keyboard.RIGHT = true;
    }, { passive: true });
    document.getElementById('controll-right').addEventListener('touchend', () => {
        keyboard.RIGHT = false;
    });

    document.getElementById('controll-shoot').addEventListener('touchstart', () => {
        keyboard.SHOOT = true;
    }, { passive: true });
    document.getElementById('controll-shoot').addEventListener('touchend', () => {
        keyboard.SHOOT = false;
    });

    document.getElementById('controll-jump').addEventListener('touchstart', () => {
        keyboard.SPACE = true;
    }, { passive: true });
    document.getElementById('controll-jump').addEventListener('touchend', () => {
        keyboard.SPACE = false;
    });

}

function setTimeOut(img) {
    let content = document.getElementById('loseOrWinScreen');
    setTimeout(() => {
        if (world.character.lifebar == 0 || world.level.enemies[3].life == 0) {
            world.pause = true;
            content.classList.remove('d-none');
            content.innerHTML = `<img class="youLoseYouWin" src="${img}" alt=""></img>`
        }
    }, 1500);
    // canvas = setTimeout( 1000 / 30);
}

function clearWorld() {
    canvas = null;
}




