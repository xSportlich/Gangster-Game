class NoGunEnemy extends MovableObject {

    height = 100;
    width = 110;
    // speed = 0.25;
    IMAGES_ENEMY_Walk = [
        'img/Gangsters_2/Walk2/1.png',
        'img/Gangsters_2/Walk2/2.png',
        'img/Gangsters_2/Walk2/3.png',
        'img/Gangsters_2/Walk2/4.png',
        'img/Gangsters_2/Walk2/5.png',
        'img/Gangsters_2/Walk2/6.png',
        'img/Gangsters_2/Walk2/7.png',
        'img/Gangsters_2/Walk2/8.png',
        'img/Gangsters_2/Walk2/9.png',
        'img/Gangsters_2/Walk2/10.png',
    ];

    constructor() {
        super().loadImg('../img/Gangsters_2/Walk/1.png');
        this.x = 200 + Math.random() * 500;
        this.loadImges(this.IMAGES_ENEMY_Walk);
        this.animate();
        this.speed = 0.25 + Math.random() * 0.25 ;
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImg % this.IMAGES_ENEMY_Walk.length;
            let path = this.IMAGES_ENEMY_Walk[i];
            this.img = this.imagesCache[path];
            this.currentImg++;
        }, 250);
    }
}