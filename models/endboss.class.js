class Endboss extends MovableObject {
    y = 368;
    height = 110;

    IMAGES_ENEMY_STAY = [
        'img/Gangsters_3/stay/1.png',
        'img/Gangsters_3/stay/2.png',
        'img/Gangsters_3/stay/3.png',
        'img/Gangsters_3/stay/4.png',
        'img/Gangsters_3/stay/5.png',
        'img/Gangsters_3/stay/6.png',
        'img/Gangsters_3/stay/7.png',
    ];

    constructor() {
        super().loadImg(this.IMAGES_ENEMY_STAY[0]);
        this.loadImges(this.IMAGES_ENEMY_STAY);
        this.x = 1900;
        this.animate();
    }

    animate() {
        // this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_ENEMY_STAY);
        }, 250);
    }

}