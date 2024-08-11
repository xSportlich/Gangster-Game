class NoGunEnemy extends MovableObject {
    y = 310;
    height = 165;
    width = 150;
    hit = true;
    // speed = 0.25;
    IMAGES_ENEMY_Walk = [
        'img/Gangsters_2/Walk/Walk_1.png',
        'img/Gangsters_2/Walk/Walk_2.png',
        'img/Gangsters_2/Walk/Walk_3.png',
        'img/Gangsters_2/Walk/Walk_4.png',
        'img/Gangsters_2/Walk/Walk_5.png',
        'img/Gangsters_2/Walk/Walk_6.png',
        'img/Gangsters_2/Walk/Walk_7.png',
        'img/Gangsters_2/Walk/Walk_8.png',
        'img/Gangsters_2/Walk/Walk_9.png',
        'img/Gangsters_2/Walk/Walk_10.png',
    ];

    IMAGES_ATTACK = [
        'img/Gangsters_2/attack/1.png',
        'img/Gangsters_2/attack/2.png',
        'img/Gangsters_2/attack/3.png',
        'img/Gangsters_2/attack/4.png',
        'img/Gangsters_2/attack/5.png',
        'img/Gangsters_2/attack/6.png',
        'img/Gangsters_2/attack/Attack_2.1.png',
        'img/Gangsters_2/attack/Attack_2.2.png',
        'img/Gangsters_2/attack/Attack_2.3.png',
        'img/Gangsters_2/attack/Attack_2.4.png',
    ];

    IMAGES_RUN = [
        'img/Gangsters_2/run/Run_1.png',
        'img/Gangsters_2/run/Run_2.png',
        'img/Gangsters_2/run/Run_3.png',
        'img/Gangsters_2/run/Run_4.png',
        'img/Gangsters_2/run/Run_5.png',
        'img/Gangsters_2/run/Run_6.png',
        'img/Gangsters_2/run/Run_7.png',
        'img/Gangsters_2/run/Run_8.png',
        'img/Gangsters_2/run/Run_9.png',
        'img/Gangsters_2/run/Run_10.png',
    ];

    IMAGES_DEAD = [
        'img/Gangsters_2/dead/1.png',
        'img/Gangsters_2/dead/2.png',
        'img/Gangsters_2/dead/3.png',
        'img/Gangsters_2/dead/4.png',
        'img/Gangsters_2/dead/5.png',
    ];

    constructor() {

        super().loadImg('img/Gangsters_2/Walk.png');
        if (this.hit) {
            this.x = 700 + Math.random() * 2000;
            // this.loadImges(this.IMAGES_ATTACK);
            // this.animate();
            this.speed = 0.25 + Math.random() * 1.8;  //0.25
            console.log(this.speed);
            if (this.speed > 1.2) {
                this.loadImges(this.IMAGES_RUN);
                this.animate(this.IMAGES_RUN);
            } else {
                this.animate(this.IMAGES_ENEMY_Walk);
                this.loadImges(this.IMAGES_ENEMY_Walk);
            }
        } else {
            this.loadImg('img/Gangsters_2/dead/5.pngd')
        }
    }

    animate(arr) {
        setInterval(() => {
            if (this.hit) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.hit) {
                this.playAnimation(arr);
            }
        }, 200);
    }
}