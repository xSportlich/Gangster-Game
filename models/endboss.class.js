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

    IMAGES_JUMP = [
        'img/Gangsters_3/jump/1.png',
        'img/Gangsters_3/jump/2.png',
        'img/Gangsters_3/jump/3.png',
        'img/Gangsters_3/jump/4.png',
        'img/Gangsters_3/jump/5.png',
        'img/Gangsters_3/jump/6.png',
        'img/Gangsters_3/jump/7.png',
        'img/Gangsters_3/jump/8.png',
        'img/Gangsters_3/jump/9.png',
        'img/Gangsters_3/jump/10.png',
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

    randomNumber = 0;
    animationInterval;
    shoot = false;
    life = 2;

    constructor() {
        super().loadImg(this.IMAGES_ENEMY_STAY[0]);
        if (this.life > 0) {
            this.loadImges(this.IMAGES_ENEMY_STAY);
            this.x = 1900;
            this.applyGravity();
            this.animate();
            this.shootCoolDown();
            this.deadanimate();
            // this.randomMovingLeftAndRight();
            // this.randomJump();  
        } 
        // else if (life <= 0) {
        //     this.randomNumber = 0.1;
        //     this.deadanimate();
        // }

    }

    animate() {
        // this.moveLeft();
        setInterval(() => {
            if (this.life > 0) {
                // this.playAnimation(this.IMAGES_ENEMY_STAY);
                this.randomNumber = Math.random();
                this.randomMovingLeftAndRight();
            } else {
                this.randomNumber = 0.1;
                // this.deadanimate();
            }
        }, 1200);
    }

    randomMovingLeftAndRight() {

        if (this.life > 0) {
            if (this.animationInterval) {
                clearInterval(this.animationInterval);
            }
            this.shoot = false;
            this.animationInterval = setInterval(() => {
                // console.log(this.shoot);
                if (this.shoot && this.life > 0) {
                    this.playAnimation(this.IMAGES_SHOOT);
                } else {
                    if (this.randomNumber == 0.1) {
                        
                    } else {
                        if (this.randomNumber > 0.1 && this.randomNumber < 0.4 && this.x < 2000) {
                            this.x += 7;
                            this.playAnimation(this.IMAGES_WALK_RIGHT);
                        } else if (this.randomNumber > 0.4 && this.randomNumber < 0.85) {
                            this.playAnimation(this.IMAGES_WALK_LEFT);
                            this.x -= 7;
                        } else {
                            this.playAnimation(this.IMAGES_JUMP);
                            if (this.y == 308) {
                                this.jump();
                            }
                        }
                        // if (this.randomNumber == 0.1) {
                        //     this.playAnimation(this.IMAGES_DEAD);
                        //     this.IMAGES_DEAD = ['img/Gangsters_3/dead/5.png'];
                        // }
                    }
                }
            }, 150);
        }
    }

    shootCoolDown() {
        if (this.life > 0) {
            setInterval(() => {
                this.shoot = true;
            }, 3100);
            this.shoot = false;
        }
    }

    deadanimate() {
        let counter = 0;
        setInterval(() => {
            if (this.life <= 0) {
                this.playAnimation(this.IMAGES_DEAD);
                counter++
            } if (counter == 5) {
                this.IMAGES_DEAD = ['img/Gangsters_3/dead/5.png'];
            }
        }, 250)
    }
}