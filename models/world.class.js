class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusbar = new StatusBar;
    ammobar = new Ammo;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
    }

    setWorld() {
        this.character.world = this;

        for (let i = 0; i < this.level.parallaxBackground.length; i++) {
        this.level.parallaxBackground[i].world = this;
        console.log(this.level.parallaxBackground[i]);
        
        }
    }

    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log(this.character.lifebar);
                    
                    this.statusbar.setPercentage(this.character.lifebar);
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
}

