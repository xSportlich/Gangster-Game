class StatusBar extends DrawableObject {

    IMAGES = [
        'img/interface/Energybar_full.png',
        'img/interface/lebensbalken_2.png',
        'img/interface/Lebensbalken_1.png',
        'img/interface/Energybar_empty.png',
    ];

    percentag = 100;

    constructor() {

        super();
        this.loadImges(this.IMAGES);
        this.x = 40;
        this.y = 30;
        this.width = 200;
        this.height = 25;
        this.setPercentage(100);
        // this.animate();

    }

    // animate() {
    //     setInterval(() => {
    //         this.world.camera_x = -this.x + 100;

    //     }, 1000 / 70);
    // }

    setPercentage(percentag) {
        this.percentag = percentag;
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imagesCache[path];
    }

    resolveImageIndex() {
        if (this.percentag == 100) {
            return 0
        } else if (this.percentag == 66) {
            return 1
            } else if (this.percentag == 32) {
                return 2
            } else if (this.percentag >= 0) {
                return 3  
            }{
        }
    }
}