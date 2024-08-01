class MovableObject {
    x = 120;
    y = 380;
    img;
    height = 150;
    width = 100;
    imagesCache = {};

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImges(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imagesCache[path] = path; 
        });
    }

    moveLeft() {

    }

    moveRight() {
        console.log('move right');
    }
}