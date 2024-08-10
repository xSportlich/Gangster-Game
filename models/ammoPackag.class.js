class AmmoPackage extends MovableObject {
y = 435;
    constructor(img, x) {
        super().loadImg(img);
        // this.y = y
        this.x = x;
        this.width = 55;
        this.height = 50;
    }
}