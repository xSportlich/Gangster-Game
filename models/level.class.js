class Level {

    enemies;
    backgroundObject;
    skys;
    parallaxBackground;
    level_end_x = 2100;

    constructor(enemies, skys, backgroundObject, parallaxBackground) {
        this.enemies = enemies;
        this.skys = skys;
        this.backgroundObject = backgroundObject;
        this.parallaxBackground = parallaxBackground;
    }
}