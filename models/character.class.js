class Character extends MovableObject {

    height = 100;
    width = 70;
    y = 275;
    speed = 6;
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
    running_sound = new Audio('audio/running-6358.mp3');


    constructor() {
        super().loadImg('img/Gangsters_1/stay.animation/stay1.png');
        this.loadImges(this.IMAGES_STAY);

        this.applyGravety();

        this.animate();
    }

    animate() {

        setInterval(() => {
            this.running_sound.volume = 0.03;
            this.running_sound.playbackRate = 0.5;
            this.running_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.running_sound.play();
            }  
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.running_sound.play();
            }

            this.world.camera_x = -this.x + 100;

        },1000 / 50);
        setInterval(() => {

            if (this.world.keyboard.RIGHT) {
                this.width = 130;
                this.playAnimation(this.IMAGES_RUN_RIGHT);
            } else {
                if (this.world.keyboard.LEFT) {

                    this.width = 130;
                    this.playAnimation(this.IMAGES_RUN_LEFT);
                    this.currentImg++;
                } else {
                    this.width = 70;
                    this.playAnimation(this.IMAGES_STAY);
                }
            }
        }, 130);
    }


    jump() {

    }
}