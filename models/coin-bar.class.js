class Coinbar extends DrawableObject {


    IMAGES = [
        'img/interface/Energybar_full.png',
        'img/interface/Energybar_full.png',
        'img/interface/Energybar_full.png',
        'img/interface/Energybar_full.png',
        'img/interface/Energybar_full.png',
        'img/interface/Energybar_full.png',
    ];

    percentag = 100;

    constructor() {
        super()
        this.x = 40;
        this.y = 60;
        this.width = 200;
        this.height = 25;
        this.loadImges(this.IMAGES);
        this.setPercentage()
    }

    setPercentage(percentag) {
        this.percentag = percentag;
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imagesCache[path];
    }

    resolveImageIndex() {
        if (this.percentag == 100) {
            return 5;
        } else if (this.percentag > 80) {
            return 4
        } else if (this.percentag > 60) {
            return 3
        } else if (this.percentag > 40) {
            return 2
        } else if (this.percentag > 20) {
            return 1
        } else {
            return 0
        }
    }
}