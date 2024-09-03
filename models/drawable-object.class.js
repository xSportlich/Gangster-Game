class DrawableObject{
    
    img;
    x = 120;
    y = 340; 
    height = 150;
    width = 100;
    imagesCache = {};
    currentImg = 0;
    newImg = 0;
    bossimg = 0;

    /**
     * Creat a new Img
     * 
     * @param {img.path} path 
     */
    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draw on the Canvas The Img withe The Positions
     * 
     * @param {*} ctx 
     */
    draw(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);   
    }

    /**
     * Givs The Array and Creat for Each Img an new Img and add it to imagesCache
     * 
     * @param {string} arr 
     */
    loadImges(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imagesCache[path] = img;
        });
    }
}