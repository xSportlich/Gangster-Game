class MovableObject extends DrawableObject {
    speed = 0.8; // 0.8
    speedY = 0;
    acceleration = 2;
    lifebar = 100;
    lastHit = 0;
    ammobar = 5;
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

    isColliding(obj) {
        // return  (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) && 
        //         (this.Y + this.offsetY + this.height) >= obj.Y &&
        //         (this.Y + this.offsetY) <= (obj.Y + obj.height) && 
        //         obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
        return this.x + this.width - 90 > obj.x &&
            this.y + this.height > obj.y &&
            this.x < obj.x &&
            this.y < obj.y + obj.height
    }

    hit() {
        setInterval(() => {
            this.hitCooldown = true;
        }, 2000);  
            if (this.hitCooldown) {
                this.lifebar -= 34;
                console.log(this.lifebar);
                if (this.lifebar < 0) {
                    this.lifebar = 0;
                    
                } else {
                    this.lastHit = new Date().getTime();
                }   
            }  
            this.hitCooldown = false
    }

    isDaed() {
        return this.lifebar == 0;
    }

    itHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.8;
    }
}