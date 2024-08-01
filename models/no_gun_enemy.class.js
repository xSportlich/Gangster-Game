class NoGunEnemy extends MovableObject {

    height = 100;
    width = 50;
    constructor() {
        super().loadImg('../img/Bilder_edu.png');
        this.x = 200 + Math.random() * 500;
    }
}