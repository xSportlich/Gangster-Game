class NoGunEnemy extends MovableObject {

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
        'img/Gangsters_2/run/1.png',
        'img/Gangsters_2/run/2.png',
        'img/Gangsters_2/run/3.png',
        'img/Gangsters_2/run/4.png',
        'img/Gangsters_2/run/5.png',
        'img/Gangsters_2/run/6.png',
        'img/Gangsters_2/run/7.png',
        'img/Gangsters_2/run/8.png',
        'img/Gangsters_2/run/9.png',
        'img/Gangsters_2/run/10.png',

    ];

    IMAGES_DEAD = [
        'img/Gangsters_2/dead/1.png',
        'img/Gangsters_2/dead/2.png',
        'img/Gangsters_2/dead/3.png',
        'img/Gangsters_2/dead/4.png',
        'img/Gangsters_2/dead/5.png',
    ];

    y = 310;
    height = 165;
    width = 150;
    hit = true;

    constructor() {

        super().loadImg(this.IMAGES_ENEMY_Walk[0]);
        this.loadImges(this.IMAGES_ATTACK);
        this.loadImges(this.IMAGES_DEAD);
        if (this.hit) {
            this.Dead();
            this.x = 700 + Math.random() * 2000;
            this.speed = 0.25 + Math.random() * 1.8;
            if (this.speed > 1.2) {
                this.loadImges(this.IMAGES_RUN);
                this.animate(this.IMAGES_RUN);
            } else {
                this.animate(this.IMAGES_ENEMY_Walk);
                this.loadImges(this.IMAGES_ENEMY_Walk);
            }
        }
    }

    Dead() {
        let i = 0;
        setInterval(() => {
            if (this.hit == false) {
                this.playanimat(this.IMAGES_DEAD);
                if (this.newImg == this.IMAGES_DEAD.length - 1) {
                    this.IMAGES_DEAD = [this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]];
                }
            }
        }, 100);
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
        }, 150);
    }
}