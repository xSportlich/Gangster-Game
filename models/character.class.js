class Character extends MovableObject {

    height = 100;
    width = 70;
    speed = 10;
    IMAGES_STAY = [
        'img/Gangsters_1/stay.animation/stay1.png',
        'img/Gangsters_1/stay.animation/stay2.png',
        'img/Gangsters_1/stay.animation/stay2.png',
        'img/Gangsters_1/stay.animation/stay3.png',
        'img/Gangsters_1/stay.animation/stay4.png',
        'img/Gangsters_1/stay.animation/stay5.png',
    ];
    IMAGES_RUN_RIGHT = [
        'img/Gangsters_1/run-right/1_mehr_links.png',
        'img/Gangsters_1/run-right/2_mehr_links.png',
        'img/Gangsters_1/run-right/3_mehr_links.png',
        'img/Gangsters_1/run-right/4_mehr_links.png',
        'img/Gangsters_1/run-right/5_mehr_links.png',
        'img/Gangsters_1/run-right/6_mehr_links.png',
        'img/Gangsters_1/run-right/7_mehr_links.png',
        'img/Gangsters_1/run-right/8_mehr_links.png',
        'img/Gangsters_1/run-right/9_mehr_links.png',
        'img/Gangsters_1/run-right/10_mehr_links.png',

    ];

    IMAGES_RUN_LEFT = [
        'img/Gangsters_1/run-left/1_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/2_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/3_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/4_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/5_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/6_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/7_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/8_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/9_mehr_links_nach_links.png',
        'img/Gangsters_1/run-left/10_mehr_links_nach_links.png',
    ];
    world;


    constructor() {
        super().loadImg('img/Gangsters_1/stay.animation/stay1.png');
        this.loadImges(this.IMAGES_STAY);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
            }  
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
            }

            this.world.camera_x = -this.x + 100;

        },1000 / 20);
        setInterval(() => {

            if (this.world.keyboard.RIGHT) {
                this.width = 130;
                this.loadImges(this.IMAGES_RUN_RIGHT);
                let i = this.currentImg % this.IMAGES_RUN_RIGHT.length;
                let path = this.IMAGES_RUN_RIGHT[i];
                this.img = this.imagesCache[path];
                this.currentImg++;
            } else {
                if (this.world.keyboard.LEFT) {

                    this.width = 130;
                    this.loadImges(this.IMAGES_RUN_LEFT);
                    let i = this.currentImg % this.IMAGES_RUN_LEFT.length;
                    let path = this.IMAGES_RUN_LEFT[i];
                    this.img = this.imagesCache[path];
                    this.currentImg++;
                } else {
                    this.width = 70;
                    let i = this.currentImg % this.IMAGES_STAY.length;
                    let path = this.IMAGES_STAY[i];
                    this.img = this.imagesCache[path];
                    this.currentImg++;
                }
            }
        }, 130);
    }


    jump() {

    }
}