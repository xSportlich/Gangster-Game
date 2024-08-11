class ShootingAmmo extends MovableObject {


    constructor() {
        super().loadImg('img/extra/bullet-7018215_1280.png');
        this.x = 100;
        this.y = 100;
        this.width = 20;
        this.height = 10;
        this.shoot(300, 300);
    }

    shoot(x, y) {
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.x += 10
        }, 1000 / 60)
    }

}