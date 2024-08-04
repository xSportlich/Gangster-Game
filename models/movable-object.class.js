class MovableObject {
    x = 120;
    y = 370;
    img;
    height = 150;
    width = 100;
    imagesCache = {};
    currentImg = 0;
    otherDirection = false;
    speed = 0.8; // 0.8
    speedY = 0;
    acceleration = 2;


    applyGravity() {
        setInterval(() => {
            if (this.isAbouveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25); // 1000 / 25
    }

    isAbouveGround() {
        return this.y < 370;
    }

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
        this.x -= this.speed;
        this.otherDirection = true;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    playAnimation(IMAGES_ARRAY) {
        this.loadImges(IMAGES_ARRAY);
        let i = this.currentImg % IMAGES_ARRAY.length;
        let path = IMAGES_ARRAY[i];
        this.img = this.imagesCache[path];
        this.currentImg++;
    }

    jump() {
        this.speedY = 20;
    }
}