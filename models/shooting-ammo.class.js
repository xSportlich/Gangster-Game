class ShootingAmmo extends MovableObject {


    constructor(x, y) {
        super().loadImg('img/extra/bullet-7018215_1280.png');
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 10;
        this.shoot();
    }

    shoot() {
        setInterval(() => {
            this.x += 10
        }, 1000 / 60)
    }

}