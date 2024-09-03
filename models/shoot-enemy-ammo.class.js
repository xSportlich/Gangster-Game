class EnenmyAmmo extends MovableObject {

    /**
     * Load and Givs The Ammo infos 
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        super().loadImg('img/extra/bullet-7018215_1280.png');
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 10;
        this.shoot();
    }
    /**
     * Move The Bullte with cange the x coordinates
     */
    shoot() {
        setInterval(() => {
            this.x -= 10;
        }, 1000 / 60)

    }

}