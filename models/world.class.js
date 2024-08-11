class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusbar = new StatusBar();
    shootAmmo = [];
    ammobar = new Ammo;
    reloadSound = new Audio('audio/reload.mp3');
    backgroundSound = new Audio('audio/akk-driving-techno-198984.mp3');
    hitSound = new Audio('audio/blocking-arm-with-hand-6941.mp3');
    hurtSound = new Audio('audio/male_hurt7-48124.mp3');
    bullet;
    // img;
    // imagesCache = {};
    // currentImg = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.reloadSound.pause();
        this.backgroundSound.volume = 0.02;
        // this.hurtSound.volume = 0.2;
        // this.backgroundSound.play();
        this.draw();
        this.setWorld();
        // this.checkCollision();
        this.checkCollisionPackage();
        // this.checkCollisionAttack();
        this.run();
    }

    setWorld() {
        this.character.world = this;

        for (let i = 0; i < this.level.parallaxBackground.length; i++) {
            this.level.parallaxBackground[i].world = this;
        }
    }

    run() {
        setInterval(() => {
            this.checkCollisionAttack();
            this.checkCollision();
            this.checkShootingObject();
            this.checkCollisionWithAmmo();
        }, 200)
    }

    checkShootingObject() {

        if (this.keyboard.SHOOT) {
            this.bullet = new ShootingAmmo(this.character.x + 85, this.character.y + 105);
            console.log(this.bullet);

            this.shootAmmo.push(this.bullet);
        }
    }


    checkCollision() {
        // setInterval(() => {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                // console.log(this.level.enemies);
                //  this.checkCollisionAttack();
                // enemy.playAnimation(enemy.IMAGES_ATTACK);

                this.statusbar.setPercentage(this.character.lifebar);
            }
        });
        // }, 200);
    }

    checkCollisionWithAmmo() {
        setInterval(() => {
            if (this.shootAmmo.length !== 0) {
                this.level.enemies.forEach((enemy) => {
                    this.shootAmmo.forEach((bullet) => {

                        if (bullet.isCollidingForBullet(enemy)) {
                            console.log('hit');

                            enemy.playAnimation(enemy.IMAGES_DEAD);
                            enemy.IMAGES_DEAD = ['img/Gangsters_2/dead/5.png'];
                            enemy.IMAGES_RUN = ['img/Gangsters_2/dead/5.png'];
                            enemy.IMAGES_ATTACK = ['img/Gangsters_2/dead/5.png'];
                            
                            enemy.hit = false;
                        }
                    })
                })
            }
        }, 200)

    }



    checkCollisionAttack() {
        this.level.enemies.forEach((enemy) => {
            // setInterval(() => {
            if (this.character.isColliding(enemy)) {
                // this.hurtSound.play();
                // this.hitSound.play();
                enemy.playAnimation(enemy.IMAGES_ATTACK);

                // this.statusbar.setPercentage(this.character.lifebar);
            }
            // }, 200);
        });
        this.hitSound.pause();
    }

    checkCollisionPackage() {
        setInterval(() => {
            this.reloadSound.volume = 0.02;
            this.level.ammoPackages.forEach((ammo) => {
                if (this.character.isColliding(ammo)) {
                    let index = this.level.ammoPackages.indexOf(ammo);
                    this.level.ammoPackages.splice(index, 1);
                    this.reloadSound.play();
                    this.ammobar.setPercentageAmmo(this.character.lifebar);
                }
            });
        }, 100);
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.level.skys);
        this.addObjectToMap(this.level.parallaxBackground);
        this.addObjectToMap(this.level.backgroundObject);


        this.ctx.translate(-this.camera_x, 0); // back
        // ---------Space for fixed objects ---------
        this.addToMap(this.statusbar);
        this.addToMap(this.ammobar);
        this.ctx.translate(this.camera_x, 0); // Foward


        this.addToMap(this.character);
        this.addObjectToMap(this.level.ammoPackages)
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.shootAmmo);

        this.ctx.translate(-this.camera_x, 0);


        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectToMap(objects) {
        objects.forEach(ob => {
            this.addToMap(ob);
        });
    }

    addToMap(mo) {
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
    }

    // loadImges(arr) {
    //     arr.forEach((path) => {
    //         let img = new Image();
    //         img.src = path;
    //         this.imagesCache[path] = img;
    //     });
    // }
}

