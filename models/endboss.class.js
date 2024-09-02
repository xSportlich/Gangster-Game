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
    coolDownInterval;
    // shoot = false;
    life = 5;
    hit1 = false;
    shoot = false;
    go = false;
    i = 0;
    hallo = false;

    constructor() {
        super().loadImg(this.IMAGES_ENEMY_STAY[0]);
        if (this.life > 0) {
            this.loadImges(this.IMAGES_ENEMY_STAY);
            this.loadImges(this.IMAGES_SHOOT);
            this.loadImges(this.IMAGES_JUMP);
            this.loadImges(this.IMAGES_WALK_RIGHT);
            this.loadImges(this.IMAGES_WALK_LEFT);
            this.loadImges(this.IMAGES_HIT);
            this.loadImges(this.IMAGES_DEAD);
            this.x = 1900; //1900
            this.applyGravity();
            this.animate();
            this.shootCoolDown();
            this.deadanimate();
            this.check();
            this.animateBoss();
            // this.randomMovingLeftAndRight();
            // this.randomJump();  
            // }else if (this.life == 0) {
            // //     this.randomNumber = 0.1;
            //     this.deadanimate();
        }
        // console.log(this.life);
    }

    animate() {
        // this.moveLeft();
        setInterval(() => {
            if (this.life > 0 && this.hit1 == false) {
                // this.playAnimation(this.IMAGES_ENEMY_STAY);
                this.randomNumber = Math.random();
                this.randomMovingLeftAndRight();
            }
            else {
                this.randomNumber = 0.1;
                // this.deadanimate();
            }
        }, 1000);
    }

    randomMovingLeftAndRight() {
        if (this.hit1 == false) {
            if (this.animationInterval) {
                clearInterval(this.animationInterval);
                // clearInterval(this.coolDownInterval);
            }
            this.animationInterval = setInterval(() => {
                console.log(this.shoot);
                
                if (this.life > 0 && this.shoot == false) {
                    // console.log(this.shoot);
                    // if (this.life > 0 && this.shoot == true) {
                        console.log('alo');
                    // } else {
                    if (this.hit1) {
                        console.log('alo');

                        // this.hallo = false;
                        this.shoot = false;
                        this.playAnimation(this.IMAGES_HIT);
                        setTimeOut(() => {
                            this.hit1 = false;
                            // this.shoot = true;
                        }, 200)
                    } else {
                        // if (this.randomNumber == 0.1) {
                        // } 
                        // else 

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
                        // }
                    }
                }
            }, 100);

        }
    }

    shootCoolDown() {
        this.coolDownInterval = setInterval(() => {
            if (this.life > 0) {
                this.shoot = true;
                // world.enemyShootingBullet();
            }
        }, 3000);
    }

    deadanimate() {
        setInterval(() => {
            if (this.life == 0) {
                //     this.playAnimation(this.IMAGES_DEAD);
                //     counter++
                this.playanimat(this.IMAGES_DEAD);
                if (this.newImg == this.IMAGES_DEAD.length - 1) {
                    this.IMAGES_DEAD = [this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]];
                    // setTimeOut('img/extra/you_win.png');
                }
            }
        }, 100)
    }

    check() {
        setInterval(() => {
            if (this.life > 0 && this.shoot == true) {
                this.hallo = true;
            }
        }, 10)
    }

    animateBoss() {
        setInterval(() => {
            if (this.hallo) {
                if (this.i >= this.IMAGES_SHOOT.length - 1) {
                    // console.log(this.IMAGES_SHOOT.length - 1);
                    world.enemyShootingBullet();
                    // let i = 0;
                    this.shoot = false;
                    this.hallo = false;
                    this.hit1 = false;
                    this.i = 0;
                    clearInterval(this.animationInterval);
                    // console.log('false');
                } else {
                    // console.log(this.i);
                    this.playanimatBoss(this.IMAGES_SHOOT, this.i);
                    this.i++
                    // console.log(this.i);
                }
            }
        }, 50)
    }
}

