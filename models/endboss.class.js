class Endboss extends MovableObject {
    y = 308;
    height = 170;
    width = 140;

    IMAGES_ENEMY_STAY = [
        'img/Gangsters_3/stay/1.png',
        'img/Gangsters_3/stay/2.png',
        'img/Gangsters_3/stay/3.png',
        'img/Gangsters_3/stay/4.png',
        'img/Gangsters_3/stay/5.png',
        'img/Gangsters_3/stay/6.png',
        'img/Gangsters_3/stay/7.png',
    ];

    IMAGES_DEAD = [
        'img/Gangsters_3/dead/1.png',
        'img/Gangsters_3/dead/2.png',
        'img/Gangsters_3/dead/3.png',
        'img/Gangsters_3/dead/4.png',
        'img/Gangsters_3/dead/5.png',
    ];

    IMAGES_HIT = [
        'img/Gangsters_3/hit/1.png',
        'img/Gangsters_3/hit/2.png',
        'img/Gangsters_3/hit/3.png',
        'img/Gangsters_3/hit/4.png',
    ];

    IMAGES_SHOOT = [
        'img/Gangsters_3/shoot/1.png',
        'img/Gangsters_3/shoot/2.png',
        'img/Gangsters_3/shoot/3.png',
        'img/Gangsters_3/shoot/4.png',
        'img/Gangsters_3/shoot/5.png',
        'img/Gangsters_3/shoot/6.png',
        'img/Gangsters_3/shoot/7.png',
        'img/Gangsters_3/shoot/8.png',
        'img/Gangsters_3/shoot/9.png',
        'img/Gangsters_3/shoot/10.png',
        'img/Gangsters_3/shoot/11.png',
        'img/Gangsters_3/shoot/12.png',
    ];

    IMAGES_WALK_LEFT = [
        'img/Gangsters_3/walk-left/1.png',
        'img/Gangsters_3/walk-left/2.png',
        'img/Gangsters_3/walk-left/3.png',
        'img/Gangsters_3/walk-left/4.png',
        'img/Gangsters_3/walk-left/5.png',
        'img/Gangsters_3/walk-left/6.png',
        'img/Gangsters_3/walk-left/7.png',
        'img/Gangsters_3/walk-left/8.png',
        'img/Gangsters_3/walk-left/9.png',
        'img/Gangsters_3/walk-left/10.png',
    ];

    IMAGES_WALK_RIGHT = [
        'img/Gangsters_3/walk-right/1.png',
        'img/Gangsters_3/walk-right/2.png',
        'img/Gangsters_3/walk-right/3.png',
        'img/Gangsters_3/walk-right/4.png',
        'img/Gangsters_3/walk-right/5.png',
        'img/Gangsters_3/walk-right/6.png',
        'img/Gangsters_3/walk-right/7.png',
        'img/Gangsters_3/walk-right/8.png',
        'img/Gangsters_3/walk-right/9.png',
        'img/Gangsters_3/walk-right/10.png',


    ];

    randomNumber = 0;

    constructor() {
        super().loadImg(this.IMAGES_ENEMY_STAY[0]);
        this.loadImges(this.IMAGES_ENEMY_STAY);
        this.x = 1900;
        this.applyGravity();
        this.animate();

    }

    animate() {
        // this.moveLeft();
        setInterval(() => {
            // this.playAnimation(this.IMAGES_ENEMY_STAY);
            this.randomNumber = Math.random();
            console.log(this.randomNumber);
            this.randomJump();
            this.randomMovingLeftAndRight();
        }, 250);
    }

    randomMovingLeftAndRight() {

            if (this.randomNumber > 0.5 && this.x < 2000) {
                this.x += 40;
                this.playAnimation(this.IMAGES_WALK_RIGHT);

            } else {
                this.x -= 40;
                this.playAnimation(this.IMAGES_WALK_LEFT)
            }
    }

    randomJump() {
        if (this.randomNumber > 0.4 && this.randomNumber < 0.5 && this.y == 308) {
            this.jump();
        }
    }




}