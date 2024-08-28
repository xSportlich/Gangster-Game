class MovableObject extends DrawableObject {
    speed = 0.8; // 0.8
    speedY = 0;
    acceleration = 2;
    // lifebar = 100;
    lastHit = 0;
    ammobar = 1;
    hitCooldown = true;


    applyGravity() {
        setInterval(() => {
            if (this.isAbouveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25); // 1000 / 25
    }

    isAbouveGround() {
        return this.y < 305;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    playAnimation(images) {
        this.loadImges(images);
        let index = this.currentImg % images.length;
        let path = images[index];
        this.img = this.imagesCache[path];
        this.currentImg++;
        if (this.currentImg >= images.length) {
            this.currentImg = 0;
        }
    }

    jump() {
        this.speedY = 20;
    }


    isColliding(obj) {
        return this.x + this.width - 90 > obj.x &&
            this.y + this.height > obj.y &&
            this.x < obj.x &&
            this.y < obj.y + obj.height
    }

    isCollidingForBullet(obj) {
        return this.x + this.width -10 > obj.x && 
            this.y + this.height > obj.y &&
            this.x < obj.x &&
            this.y < obj.y + obj.height + 100
    }

    hit() {
        setInterval(() => {
            this.hitCooldown = true;
        }, 2000);  
            if (this.hitCooldown) {
                world.character.lifebar -= 34;
                if (world.character.lifebar < 0) {
                    world.character.lifebar = 0;
                    
                } else {
                    this.lastHit = new Date().getTime();
                }   
            }  
            this.hitCooldown = false
    }

    isDaed() {
        return world.character.lifebar == 0;
    }

    itHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.8;
    }
}