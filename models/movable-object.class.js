class MovableObject {
    x = 120;
    y = 375;
    img;
    height = 150;
    width = 100;
    imagesCache = {};
    currentImg = 0;
    speed = 0.8;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImges(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imagesCache[path] = img; 
        });
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    moveRight() {
        console.log('move right');
    }
}