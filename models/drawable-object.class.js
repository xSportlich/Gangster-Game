class DrawableObject {
    x = 120;
    y = 340; // 370
    height = 150;
    // width = 100;
    img;
    imagesCache = {};
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
}