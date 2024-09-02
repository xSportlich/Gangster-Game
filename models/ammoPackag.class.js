class AmmoPackage extends MovableObject {
y = 435;
    constructor(img, x) {
        super().loadImg(img);
        this.x = x;
        this.width = 55;
        this.height = 50;
    }
}