class MovableObject {
    x = 120;
    y = 370;
    img;
    height = 150;
    width = 100;
    imagesCache = {};
    currentImg = 0;
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

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof NoGunEnemy) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        // if (this instanceof Character || this instanceof NoGunEnemy) {
        //     this.ctx.beginPath();
        //     this.ctx.lineWidth = '5';
        //     this.ctx.strokeStyle = 'red';
        //     this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
        //     this.ctx.stroke();
        // }
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
return this.x + this.width > obj.x && 
this.y + this.height > obj.y &&
this.x < obj.x &&
this.y < obj.y + obj.height
}
}