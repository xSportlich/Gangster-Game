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

    playAnimation(IMAGES_ARRAY) {
        this.loadImges(IMAGES_ARRAY);
                let i = this.currentImg % IMAGES_ARRAY.length;
                let path = IMAGES_ARRAY[i];
                this.img = this.imagesCache[path];
                this.currentImg++;
    }
}