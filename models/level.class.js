class Level {

    enemies;
    backgroundObject;
    skys;
    ammoPackages;
    moneybundle;
    parallaxBackground;
    level_end_x = 2100;
    level_start_x = 0;

    constructor(enemies, skys, backgroundObject, parallaxBackground, ammoPackages) {
        this.enemies = enemies;
        this.skys = skys;
        this.backgroundObject = backgroundObject;
        this.parallaxBackground = parallaxBackground;
        this.ammoPackages = ammoPackages;
        this.moneybundle = moneybundle;
    }
}