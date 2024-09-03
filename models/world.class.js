class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    // checkCollisionClass = new CheckCollisionClass();
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

    /**
     * Load and givs The Wold Infos
     * 
     * @param {*} canvas 
     * @param {boolean} keyboard 
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.reloadSound.pause();
        this.draw();
        this.setWorld();
        this.checkCollisionPackage();
        this.run();
        this.checkCollisionWithAmmo();
        this.enemyShootingBullet();
        this.checkCollisionWithEnemyAmmo();
        this.checkCollisionMoney();
        this.checkSoundShoot();
        this.shootEnemySound.volume = 0.00;
    }

    /**
     * Givs The every parallaxBackground the World Class
     */
    setWorld() {
        this.character.world = this;
        for (let i = 0; i < this.level.parallaxBackground.length; i++) {
            this.level.parallaxBackground[i].world = this;
        }
    }

    /**
     * Add and Draw The Wold Material
     */
    draw() {
        if (!this.pause) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.drawBackground();
            this.ctx.translate(-this.camera_x, 0);
            this.addStatusBar();
            this.ctx.translate(this.camera_x, 0);
            this.addToMap(this.character);
            this.material();
            this.ctx.translate(-this.camera_x, 0);
            this.reqestFrame();
        }
    }

    /**
     * Add Statusbar infos
     */
    addStatusBar() {
        this.addToMap(this.statusbar);
        this.addToMap(this.ammobar);
        this.addToMap(this.moneybar);
    }

    /**
    * Requests an animation frame to call the `draw` method.
    * 
    * Utilizes `requestAnimationFrame` to schedule the `draw` method for the next frame.
    */
    reqestFrame() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Add Background Material
     */
    drawBackground() {
        this.addObjectToMap(this.level.skys);
        this.addObjectToMap(this.level.parallaxBackground);
        this.addObjectToMap(this.level.backgroundObject);
    }

    /**
     * Add Level Material
     */
    material() {
        this.addObjectToMap(this.level.ammoPackages);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.moneybundle);
        this.addObjectToMap(this.shootAmmo);
        this.addObjectToMap(this.shootingEnemy);
    }

    /**
     * Check if Character over 700 x coordinate then play enemy shoot Sound
     */
    checkSoundShoot() {
            setInterval(() => {
                if (this.character.x >= 700) {
                    this.shootEnemySound.volume = 0.03;
                }
            }, 500)
    }

    /**
    * Periodically executes game logic.
    * 
    * - Calls `checkCollision` to detect collisions.
    * - Calls `checkShootingObject` to handle shooting objects.
    * - Calls `playBackgroundMusic` to play or manage background music.
    * 
    * Executes these tasks every 200 milliseconds.
    */
    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkShootingObject();
            this.playBackgroundMusic();
        }, 200)

    }

    /**
    * Handles shooting logic based on keyboard input and ammunition status.
    * 
    * - Checks if the SHOOT key is pressed.
    * - If ammunition is depleted (percentag is 0), it plays a sound and stops shooting.
    * - If ammunition is available, it:
    *   - Executes the shooting action.
    *   - Checks the bullet's range.
    *   - Updates the current ammunition count.
    *   - Plays a shooting sound if not muted.
    */
    checkShootingObject() {
        if (this.keyboard.SHOOT) {
            if (this.ammobar.percentag == 0) {
                this.checkBulletSound();
                this.keyboard.SHOOT = false;
            } else {
                this.shootTheBullet();
                this.checkBulletRange();
                this.currentAmo()
                if (!mute) {
                    this.checkBulletSoundMute();
                }
            }
        }
    }

    /**
     * Play and Pause the Audio 
     */
    checkBulletSoundMute() {
        this.shootSound.volume = 0.1;
        this.shootSound.play();
        setTimeout(() => {
            this.shootSound.pause();
        }, 500);
    }

    /**
     * Change The Ammo percentag if Character Shoot 
     */
    currentAmo() {
        this.ammobar.percentag--;
        this.ammobar.setPercentageAmmo(this.ammobar.percentag);
    }

    /**
     * Play and Pause the Audio 
     */
    checkBulletSound() {
        if (mute) {
            this.emptyAmmoSound.pause();
        } else {
            this.emptyAmmoSound.volume = 0.12;
            this.emptyAmmoSound.play();
        }
    }

    /**
     * Creat a New Bullet if Character shoot
     */
    shootTheBullet() {
        this.bullet = new ShootingAmmo(this.character.x + 85, this.character.y + 105);
        this.shootAmmo.push(this.bullet);
    }

    /**
     * Play and Pause the Audio 
     */
    playBackgroundMusic() {
        if (mute) {
            this.backgroundSound.pause();
        } else {
            this.backgroundSound.volume = 0.02;
            this.backgroundSound.play();
        }
    }

    /**
    * Checks for collisions between the character and enemies.
    * 
    * - Iterates over each enemy in the level.
    * - If the character collides with an enemy that has been hit:
    *   - Calls the character's `hit` method.
    *   - Plays the attack animation for the enemy.
    *   - Updates the status bar with the character's current lifebar percentage.
    *   - Plays a sound effect for the hit.
    */
    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.hit == true) {
                this.character.hit();
                if (enemy !== this.level.enemies[5]) {
                    enemy.playAnimation(enemy.IMAGES_ATTACK);
                    this.statusbar.setPercentage(this.character.lifebar);
                    this.checkHitSound();
                }
            }
        });
    }

    /**
     * Play and Pause the Audio 
     */
    checkHitSound() {
        if (!mute) {
            this.hitSound.volume = 0.4;
            this.hitSound.play();
            this.hurtSound.volume = 0.2;
            this.hurtSound.play();
        }
    }

    /**
    * Checks for collisions between bullets and enemies.
    * 
    * - Periodically checks for collisions between all bullets and enemies.
    * - If an enemy is not hit, it is skipped.
    * - If an enemy is hit, the `hitTheEnemie` method is called to handle the collision.
    * 
    * Runs the collision check every 10 milliseconds.
    */
    checkCollisionWithAmmo() {
        setInterval(() => {
            if (this.shootAmmo.length !== 0) {
                this.level.enemies.forEach((enemy) => {
                    this.shootAmmo.forEach((bullet) => {
                        if (enemy.hit == false) {
                        } else {
                            this.hitTheEnemie(bullet, enemy)
                        }
                    })
                })
            }
        }, 10)
    }

    /**
    * Handles the collision between a bullet and an enemy.
    * 
    * - Checks if the bullet collides with the enemy.
    * - Removes the bullet from the `shootAmmo` array if a collision occurs.
    * - Marks the enemy as not hit.
    * - For a specific enemy (at index 5), updates its life and hit state if it has remaining life.
    * 
    * @param {Object} bullet - The bullet object involved in the collision.
    * @param {Object} enemy - The enemy object that may be hit by the bullet.
    */
    hitTheEnemie(bullet, enemy) {
        if (bullet.isCollidingForBullet(enemy)) {
            let index = this.shootAmmo.indexOf(bullet);
            this.shootAmmo.splice(index, 1);
            enemy.hit = false;
            if (enemy == this.level.enemies[5]) {
                enemy.hit = true;
                if (enemy.life > 0) {
                    enemy.life--
                    enemy.hit1 = true;
                }
            }
        }
    }

    /**
    * Checks for collisions between enemy bullets and the character.
    * 
    * - Periodically checks if any bullets from enemy shooters collide with the character.
    * - Calls `checkBullethitCharacter` to handle each bullet's collision with the character.
    * 
    * Runs the collision check every 100 milliseconds.
    */
    checkCollisionWithEnemyAmmo() {
        setInterval(() => {
            if (this.shootingEnemy.length !== 0) {
                this.shootingEnemy.forEach((bullet) => {
                    this.checkBullethitCharacter(bullet)
                })
            }
        }, 100)
    }


    /**
    * Checks if an enemy bullet hits the character.
    * 
    * - If the bullet collides with the character:
    *   - Removes the bullet from the `shootingEnemy` array.
    *   - Applies damage to the character by calling the `hit` method.
    *   - Updates the status bar with the character's current lifebar percentage.
    * 
    * @param {Object} bullet - The bullet object to check for collision with the character.
    */
    checkBullethitCharacter(bullet) {
        if (this.character.isColliding(bullet)) {
            let index = this.shootingEnemy.indexOf(bullet);
            this.shootingEnemy.splice(index, 1);
            this.character.hit();
            this.statusbar.setPercentage(this.character.lifebar);
        }
    }

    /**
    * Checks for collisions between the character and ammo packages.
    * 
    * - Periodically checks if the character collides with any ammo packages.
    * - If a collision is detected:
    *   - Removes the collided ammo package from the `ammoPackages` array.
    *   - Plays a sound effect for picking up the ammo package.
    *   - Increases the ammo bar percentage and updates its display.
    * 
    * Runs the collision check every 100 milliseconds.
    */
    checkCollisionPackage() {
        setInterval(() => {
            this.reloadSound.volume = 0.02;
            this.level.ammoPackages.forEach((ammo) => {
                if (this.character.isColliding(ammo)) {
                    let index = this.level.ammoPackages.indexOf(ammo);
                    this.level.ammoPackages.splice(index, 1);
                    this.ammoPackagesSound();
                    this.ammobar.percentag = 5;
                    this.ammobar.setPercentageAmmo(this.ammobar.percentag);
                }
            });
        }, 100);
    }

    /**
     * Play and Pause the Audio 
     */
    ammoPackagesSound() {
        if (mute) {
            this.reloadSound.pause();
        } else {
            this.reloadSound.play();
        }
    }

    /**
     * Adds multiple objects to the map.
     * 
     * - Iterates over the array of objects and adds each object to the map using the `addToMap` method.
     * 
     * @param {Object[]} objects - An array of objects to be added to the map.
     */
    addObjectToMap(objects) {
        objects.forEach(ob => {
            this.addToMap(ob);
        });
    }

    /**
    * Draws an object onto the map.
    * 
    * - Calls the `draw` method of the provided object to render it on the map.
    * 
    * @param {Object} mo - The object to be drawn on the map. It must have a `draw` method.
    */
    addToMap(mo) {
        mo.draw(this.ctx);
    }

    /**
    * Checks if a bullet has exceeded its range and removes it if so.
    * 
    * - Periodically checks if the bullet's x-coordinate has moved beyond a specified distance from the character's x-coordinate.
    * - If the bullet is out of range (more than 350 units away from the character), it removes the bullet from the `shootAmmo` array.
    * 
    * Runs the range check every 50 milliseconds.
    */
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

    /**
    * Checks if enemy bullets have exceeded their range and removes them if so.
    * 
    * - Periodically checks if enemy bullets have moved beyond a specified distance from the boss enemy's x-coordinate.
    * - If an enemy bullet is out of range (more than 450 units away from the boss), it removes the bullet from the `shootingEnemy` array.
    * 
    * Runs the range check every 50 milliseconds.
    */
    checkBulletRangeEnemy() {
        let boss = this.level.enemies[5];
        setInterval(() => {
            if (this.enemyBullet !== undefined) {
                if (this.enemyBullet.x < boss.x - 450) {
                    let index = this.shootingEnemy.indexOf(this.bullet);
                    this.shootingEnemy.splice(index, 1)
                }
            }
        }, 50)
    }

    /**
    * Handles the boss enemy shooting a bullet.
    * 
    * - Checks if the boss enemy has remaining life.
    * - If the boss is alive:
    *   - Sets the boss's shooting state to `true`.
    *   - Creates a new bullet (`EnenmyAmmo`) at a specified position relative to the boss.
    *   - Adds the new bullet to the `shootingEnemy` array.
    *   - Starts checking the bullet's range with `checkBulletRangeEnemy`.
    *   - Plays a sound effect for the enemy's bullet.
    */
    enemyShootingBullet() {
        let boss = this.level.enemies[5];
        if (boss.life > 0) {
            boss.shoot = true;
            this.enemyBullet = new EnenmyAmmo(boss.x + 15, boss.y + 95);
            this.shootingEnemy.push(this.enemyBullet);
            this.checkBulletRangeEnemy();
            this.enemieBulletSound();
        }
    }

    /**
     * Play and Pause the Audio 
     */
    enemieBulletSound() {
        if (!mute) {
            this.shootEnemySound.play();
        }
    }

    /**
    * Checks for collisions between the character and money bundles.
    * 
    * - Periodically checks if the character collides with any money bundles.
    * - If a collision is detected:
    *   - Plays a sound effect for collecting money.
    *   - Removes the collected money bundle from the `moneybundle` array.
    *   - Increases the money bar's percentage.
    *   - Updates the money bar display.
    *   - Plays an additional sound effect for the money collection.
    * 
    * Runs the collision check every 100 milliseconds.
    */
    checkCollisionMoney() {
        setInterval(() => {
            this.level.moneybundle.forEach((money) => {
                if (this.character.isColliding(money)) {
                    this.moneySound.volume = 0.1;
                    let index = this.level.moneybundle.indexOf(money);
                    this.level.moneybundle.splice(index, 1);
                    this.moneybar.percentag++
                    this.moneybar.setPercentagemoney(this.moneybar.percentag);
                    this.moneySoundCeck();
                }
            });
        }, 100);
    }

    /**
     * Play and Pause the Audio 
     */
    moneySoundCeck() {
        if (mute) {
            this.moneySound.pause();
        } else {
            this.moneySound.play();
        }
    }
    clearWorld() { }

    /**
    * Clears the canvas and resets the camera position.
    * 
    * - Gets the 2D rendering context of the canvas.
    * - Clears the entire canvas area.
    * - Resets the camera's x-coordinate to 0.
    */
    clearCanvas() {
        this.ctx = canvas.getContext('2d');
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.camera_x = 0;
    }

    /**
    * Resets the background sound to its start position and pauses it.
    * 
    * - Sets the playback time of the `backgroundSound` to the beginning (0 seconds).
    * - Pauses the `backgroundSound`.
    */
    resetAudios() {
        this.backgroundSound.currentTime = 0;
        this.backgroundSound.pause();
    }
}

