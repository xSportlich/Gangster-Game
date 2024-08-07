class Character extends MovableObject {

    height = 140;
    width = 110;
    y = 335;
    speed = 4; //6
    IMAGES_STAY = [
        'img/Gangsters_1/bsp3.png'
        // 'img/Gangsters_1/x1.png',
        // 'img/Gangsters_1/stay.animation/stay2.png',
        // 'img/Gangsters_1/stay.animation/stay2.png',
        // 'img/Gangsters_1/stay.animation/stay3.png',
        // 'img/Gangsters_1/stay.animation/stay4.png',
        // 'img/Gangsters_1/stay.animation/stay5.png',
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

    IMAGES_JUMP = [

        'img/Gangsters_1/bsp1.png'
        // 'img/Gangsters_1/jump/sprung_bissel_links1.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks2.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks3.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks4.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks5.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks6.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks7.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks8.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks9.png',
        // 'img/Gangsters_1/jump/sprung_bissellinks10.png',
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
    IMAGES_DEAD = ['img/Gangsters_1/Dead.png',];
    IMAGES_HURT = ['img/Gangsters_1/Hurt.png'];
    running_sound = new Audio('audio/running-6358.mp3');


    constructor() {
        super().loadImg('img/Gangsters_1/1__100px.png');
        this.loadImges(this.IMAGES_STAY);
        this.loadImges(this.IMAGES_JUMP);
        this.loadImges(this.IMAGES_DEAD);
        this.loadImges(this.IMAGES_HURT);
        this.applyGravity();

        this.animate();
    }


    animate() {

        setInterval(() => {
            this.running_sound.volume = 0.03;
            this.running_sound.playbackRate = 0.5;
            this.running_sound.pause();

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.running_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.running_sound.play();
            }

            if (this.world.keyboard.SPACE && this.y == 350) {
                this.jump();
            }

            this.world.camera_x = -this.x + 100;

        }, 1000 / 70); // 1000 / 50
        setInterval(() => {

            if (this.isDaed()) {
                this.playAnimation(this.IMAGES_DEAD);
                } else  if (this.itHurt()) {
                    this.playAnimation(this.IMAGES_HURT)
                 } else{

                if (this.y < 330) {
                    // this.height = 135;
                    // this.width = 190;
                    this.playAnimation(this.IMAGES_JUMP);
                } else {
                    // this.height = 100;
                    // this.width = 70;
                    if (this.world.keyboard.RIGHT) {
                        this.width = 130;
                        this.playAnimation(this.IMAGES_RUN_RIGHT);
                    } else {
                        if (this.world.keyboard.LEFT) {

                            // this.width = 130;
                            this.playAnimation(this.IMAGES_RUN_LEFT);
                            this.currentImg++;
                        } else {
                            // this.height = 200;
                            // this.width = 200;
                            this.playAnimation(this.IMAGES_STAY);
                        }
                    }
                }
            }
        }, 120); // 130
    }
}