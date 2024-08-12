class Ammo extends DrawableObject {


    IMAGES = [
        'img/interface/ammo_5.png',
        'img/interface/ammo_1.png',
        'img/interface/ammo_2.png',
        'img/interface/ammo_3.png',
        'img/interface/ammo_4.png',
        'img/interface/ammo_5.png',
    ];

    percentag = 1;

    constructor() {
        super()
        this.x = 40;
        this.y = 60;
        this.width = 100;
        this.height = 35;
        this.loadImges(this.IMAGES);
        this.loadImg(this.IMAGES[0]);
        this.setPercentageAmmo();
    }

    setPercentageAmmo(percentag) {
        if (percentag == undefined) {
            percentag = 1;
        }
        this.percentag = percentag;
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imagesCache[path];
        
    }

    resolveImageIndex() {
        if (this.percentag == 5) {
            return 5;
        } else if (this.percentag == 4) {
            return 4
        } else if (this.percentag == 3) {
            return 3
        } else if (this.percentag == 2) {
            return 2
        } else if (this.percentag == 1) {
            return 1
        } else  if (this.percentag == 0) {
            return 0
        }
    }
}