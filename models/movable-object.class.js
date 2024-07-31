class MovableObject {
    x = 120;
    y = 400;
    img;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveLeft() {

    }

    moveRight() {
        console.log('move right');
    }
}