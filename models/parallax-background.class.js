class ParallaxBackground extends MovableObject {

    width = 720;
    height = 480;
    speed = 0.2;
    world;
    // direction;
    // x;



    constructor(imagePath, x) {
        super().loadImg(imagePath);
        this.y = 480 - this.height;
        this.x = x;
        // this.direction = direction;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (world !== undefined) {
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    if (this.world.keyboard.RIGHT) {
                        this.x += this.speed + 0.20;
                        this.moveRight();
                    } else {
                        if (this.world.keyboard.LEFT) {
                            this.x -= this.speed - 0.20;
                            this.moveLeft();
                        }
                    }
                }

                if (this.world.keyboard.LEFT && this.x < this.world.level.level_end_x) {
                    if (this.keyboard) {
                        this.x -= this.speed - 0.20;
                        this.moveLeft();
                    } else {
                        if (this.world.keyboard.RIGHT) {
                            this.x += this.speed + 0.20;
                            this.moveRight();
                        }
                    }
                }
            }
        }, 1000 / 70)
    }
}
