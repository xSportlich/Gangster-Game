class World {

    character = new Character();
    enemies = [
        new NoGunEnemy(),
        new NoGunEnemy(),
        new NoGunEnemy(),
    ];
    skys = [
        new Sky(),
        new Sky(),
        new Sky(),
    ];
    backgroundObject = [
        new BackgroundObject('../img/PNG/Background_01/Background.png', 0),
        new BackgroundObject('../img/PNG/Background_01/Foreground.png', 0),
        new BackgroundObject('../img/PNG/Background_01/Ground.png', 0),
    ];
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectToMap(this.skys);
        this.addObjectToMap(this.backgroundObject);
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);


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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}