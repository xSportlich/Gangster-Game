class DrawableObject{
    
    img;
    x = 120;
    y = 340; // 370
    height = 150;
    width = 100;
    imagesCache = [];
    currentImg = 0;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImges(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imagesCache[path] = img;
        });
    }

    // drawFrame(ctx) {
    //     if (this instanceof Character || this instanceof NoGunEnemy  || this instanceof Endboss) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'red';
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    // }
}