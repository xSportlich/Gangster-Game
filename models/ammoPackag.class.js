class AmmoPackage extends MovableObject {
y = 200;
    constructor(img, x) {
        super().loadImg(img);
        // this.y = y
        this.x = x;
        this.width = 220;
        this.height = 280;
    }
}