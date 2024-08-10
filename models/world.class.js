class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusbar = new StatusBar;
    ammobar = new Ammo;
    img;
    imagesCache = {};
    currentImg = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.checkCollisionPackage();
        this.checkCollisionAttack();
    }

    setWorld() {
        this.character.world = this;

        for (let i = 0; i < this.level.parallaxBackground.length; i++) {
        this.level.parallaxBackground[i].world = this;
        }
    }

    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)) {
                    this.character.hit();
                    // console.log(this.level.enemies);
                    //  this.checkCollisionAttack();
                    // enemy.playAnimation(enemy.IMAGES_ATTACK);
                    
                    this.statusbar.setPercentage(this.character.lifebar);
                }
            });
        }, 200);
    }



    checkCollisionAttack() {
            this.level.enemies.forEach((enemy) => {
                setInterval(() => {
                if(this.character.isColliding(enemy)) {
                    // console.log(this.level.enemies);
                    
                    enemy.playAnimation(enemy.IMAGES_ATTACK);
                    
                    // this.statusbar.setPercentage(this.character.lifebar);
                }
            });
        }, 1000 );
    }

    checkCollisionPackage() {
        setInterval(() => {
            
            this.level.ammoPackages.forEach((ammo) => {
                if(this.character.isColliding(ammo)) {
                    let index = this.level.ammoPackages.indexOf(ammo);
                    this.level.ammoPackages.splice(index, 1);
                    
                    this.ammobar.setPercentageAmmo(this.character.lifebar);
                }
            });
        }, 200);
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

