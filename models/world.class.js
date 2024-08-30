class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusbar = new StatusBar();
    moneybar = new MoneyBar();
    shootAmmo = [];
    shootingEnemy = [];
    ammobar = new Ammo;
    shootEnemySound = new Audio('audio/pistol-168180.mp3');
    shootSound = new Audio('audio/machine-gun-burst-43670.mp3');
    reloadSound = new Audio('audio/reload.mp3');
    backgroundSound = new Audio('audio/akk-driving-techno-198984.mp3');
    hitSound = new Audio('audio/blocking-arm-with-hand-6941.mp3');
    hurtSound = new Audio('audio/male_hurt7-48124.mp3');
    emptyAmmoSound = new Audio('audio/empty-gun-shot-6209.mp3');
    moneySound = new Audio('audio/cash-register-kaching-sound-effect-125042.mp3');
    bullet;
    enemyBullet;
    pause = false;
    // img;
    // imagesCache = {};
    // currentImg = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.reloadSound.pause();
        this.draw();
        this.setWorld();
        // this.checkCollision();
        this.checkCollisionPackage();
        // this.checkCollisionAttack();
        this.run();
        this.checkCollisionWithAmmo();
        this.enemyShootingBullet();
        this.checkCollisionWithEnemyAmmo();
        this.checkCollisionMoney();
        // this.isCollidingForBullet();
        // this.shootingEnemyCheck();
    }


    setWorld() {
        this.character.world = this;
        for (let i = 0; i < this.level.parallaxBackground.length; i++) {
            this.level.parallaxBackground[i].world = this;
        }
    }

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkShootingObject();
            this.playBackgroundMusic();
        }, 200)
    }

    checkShootingObject() {

        if (this.keyboard.SHOOT) {
            if (this.ammobar.percentag == 0) {
                if (mute) {
                    this.emptyAmmoSound.pause();
                } else {
                    this.emptyAmmoSound.volume = 0.12;
                    this.emptyAmmoSound.play();
                }
                this.keyboard.SHOOT = false;
            } else {
                this.bullet = new ShootingAmmo(this.character.x + 85, this.character.y + 105);
                this.shootAmmo.push(this.bullet);
                this.checkBulletRange();
                this.ammobar.percentag--;
                this.ammobar.setPercentageAmmo(this.ammobar.percentag);
                if (!mute) {
                    this.shootSound.volume = 0.1;
                    this.shootSound.play();
                    setTimeout(() => {
                        this.shootSound.pause();
                    },500);
                }
            }
        }
    }

    playBackgroundMusic() {
        if (mute) {
            this.backgroundSound.pause();
        } else {
            this.backgroundSound.volume = 0.02;
            this.backgroundSound.play();
        }
    }


    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.hit == true) {
                this.character.hit();
                // world.drawableObject.loadImages(enemy.IMAGES_ATTACK);  
                // console.log(drawableObject);      
                enemy.playAnimation(enemy.IMAGES_ATTACK);
                this.statusbar.setPercentage(this.character.lifebar);
                if (!mute) {
                    // console.log(!mute);
                    this.hitSound.volume = 0.4;
                    this.hitSound.play();
                    this.hurtSound.volume = 0.2;
                    this.hurtSound.play();
                }
            }
        });
    }

    checkCollisionWithAmmo() {
        let i = 0;
        setInterval(() => {
            if (this.shootAmmo.length !== 0) {
                this.level.enemies.forEach((enemy) => {
                    this.shootAmmo.forEach((bullet) => {
                        if (enemy.hit == false) {
                        } else {

                            if (bullet.isCollidingForBullet(enemy)) {

                                let index = this.shootAmmo.indexOf(bullet);
                                this.shootAmmo.splice(index, 1);

                                enemy.hit = false;
                                if (enemy == this.level.enemies[3]) {
                                    enemy.hit = true;
                                    if (enemy.life > 0) {
                                    enemy.life--
                                    // i = 0;
                                    // enemy.playAnimation(enemy.IMAGES_HIT);
                                    // setInterval(() => {
                                    //     if (i < 10) {
                                    //         // enemy.randomNumber = 0.1;
                                            enemy.hit1 = true; 
                                            console.log('hit');
                                            
                                    //         // enemy.playAnimation(enemy.IMAGES_HIT);
                                    //     } else {
                                    //         enemy.hit1 = false;
                                    //     }
                                    //     i++
                                    // }, 200)
                                    }
                                    // enemy.hit1 = true; 

                                    // }
                                }
                            }
                        }
                    })
                })
            }
        }, 10)
    }

    checkCollisionWithEnemyAmmo() {
        setInterval(() => {
            if (this.shootingEnemy.length !== 0) {
                this.shootingEnemy.forEach((bullet) => {
                    if (this.character.isColliding(bullet)) {
                        let index = this.shootingEnemy.indexOf(bullet);
                        this.shootingEnemy.splice(index, 1);
                        this.character.hit();
                        this.statusbar.setPercentage(this.character.lifebar);
                    }
                })
            }
        }, 100)
    }


    checkCollisionPackage() {
        setInterval(() => {
            this.reloadSound.volume = 0.02;
            this.level.ammoPackages.forEach((ammo) => {
                if (this.character.isColliding(ammo)) {
                    let index = this.level.ammoPackages.indexOf(ammo);
                    this.level.ammoPackages.splice(index, 1);
                    if (mute) {
                        this.reloadSound.pause();
                    } else {
                        this.reloadSound.play();
                    }

                    this.ammobar.percentag = 5;
                    this.ammobar.setPercentageAmmo(this.ammobar.percentag);
                }
            });
        }, 100);
    }

    draw() {
        if (!this.pause) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjectToMap(this.level.skys);
            this.addObjectToMap(this.level.parallaxBackground);
            this.addObjectToMap(this.level.backgroundObject);
            this.ctx.translate(-this.camera_x, 0); // back
            // ---------Space for fixed objects ---------
            this.addToMap(this.statusbar);
            this.addToMap(this.ammobar);
            this.addToMap(this.moneybar);
            this.ctx.translate(this.camera_x, 0); // Foward
            this.addToMap(this.character);
            this.addObjectToMap(this.level.ammoPackages);
            this.addObjectToMap(this.level.enemies);
            this.addObjectToMap(this.level.moneybundle);
            this.addObjectToMap(this.shootAmmo);
            this.addObjectToMap(this.shootingEnemy);
            this.ctx.translate(-this.camera_x, 0);


            // Draw() wird immer wieder aufgerufen
            let self = this;
            requestAnimationFrame(function () {
                self.draw();
            });
        }
    }

    addObjectToMap(objects) {
        objects.forEach(ob => {
            this.addToMap(ob);
        });
    }

    addToMap(mo) {
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
    }

    checkBulletRange() {
        setInterval(() => {
            if (this.bullet !== undefined) {
                if (this.bullet.x > this.character.x + 350) {
                    let index = this.shootAmmo.indexOf(this.bullet);
                    this.shootAmmo.splice(index, 1)
                }
            }
        }, 50)
    }

    checkBulletRangeEnemy() {
        let boss = this.level.enemies[3];
        setInterval(() => {

            if (this.enemyBullet !== undefined) {
                if (this.enemyBullet.x < boss.x - 450) {
                    let index = this.shootingEnemy.indexOf(this.bullet);
                    this.shootingEnemy.splice(index, 1)
                }
            }
        }, 50)
    }

    enemyShootingBullet() {
        let boss = this.level.enemies[3];
        // setInterval(() => {
        if (boss.life > 0) {
            boss.shoot = true;
            this.enemyBullet = new EnenmyAmmo(boss.x + 15, boss.y + 95);
            this.shootingEnemy.push(this.enemyBullet);
            this.checkBulletRangeEnemy();
            if (!mute) {
                this.shootEnemySound.volume = 0.1;
                this.shootEnemySound.play();
            }
        }
        // }, 3100)
    }

    checkCollisionMoney() {
        setInterval(() => {
            this.level.moneybundle.forEach((money) => {
                if (this.character.isColliding(money)) {
                    this.moneySound.volume = 0.1;
                    let index = this.level.moneybundle.indexOf(money);
                    if (mute) {
                        this.moneySound.pause();
                    } else {
                        this.moneySound.play();
                    }
                    this.level.moneybundle.splice(index, 1);
                    this.moneybar.percentag++
                    this.moneybar.setPercentagemoney(this.moneybar.percentag);
                }
            });
        }, 100);
    }
}

