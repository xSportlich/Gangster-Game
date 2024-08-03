class Level {

    enemies;
    backgroundObject;
    skys;
    level_end_x = 2100;

    constructor(enemies, skys, backgroundObject) {
        this.enemies = enemies;
        this.skys = skys;
        this.backgroundObject = backgroundObject;
    }
}