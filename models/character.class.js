class Character extends MovableObject {
    IMAGES_STAY = [
        'img/Gangsters_1/stay.animation/Idle_1.png',
        'img/Gangsters_1/stay.animation/Idle_2.png',
        'img/Gangsters_1/stay.animation/Idle_3.png',
        'img/Gangsters_1/stay.animation/Idle_4.png',
        'img/Gangsters_1/stay.animation/Idle_5.png',
        'img/Gangsters_1/stay.animation/Idle_6.png',
    ];

    IMAGES_RUN_RIGHT = [
        'img/Gangsters_1/run-right/Run_1.png',
        'img/Gangsters_1/run-right/Run_2.png',
        'img/Gangsters_1/run-right/Run_3.png',
        'img/Gangsters_1/run-right/Run_4.png',
        'img/Gangsters_1/run-right/Run_5.png',
        'img/Gangsters_1/run-right/Run_6.png',
        'img/Gangsters_1/run-right/Run_7.png',
        'img/Gangsters_1/run-right/Run_8.png',
        'img/Gangsters_1/run-right/Run_9.png',
        'img/Gangsters_1/run-right/Run_10.png',

    ];

    IMAGES_JUMP = [
        'img/Gangsters_1/jump/1.png',
        'img/Gangsters_1/jump/2.png',
        'img/Gangsters_1/jump/3.png',
        'img/Gangsters_1/jump/4.png',
        'img/Gangsters_1/jump/5.png',
        'img/Gangsters_1/jump/6.png',
        'img/Gangsters_1/jump/7.png',
        'img/Gangsters_1/jump/8.png',
        'img/Gangsters_1/jump/9.png',
        'img/Gangsters_1/jump/10.png',
    ];

    IMAGES_RUN_LEFT = [
        'img/Gangsters_1/run-left/Run_1_nach_links.png',
        'img/Gangsters_1/run-left/Run_2_nach_links.png',
        'img/Gangsters_1/run-left/Run_3_nach_links.png',
        'img/Gangsters_1/run-left/Run_4_nach_links.png',
        'img/Gangsters_1/run-left/Run_5_nach_links.png',
        'img/Gangsters_1/run-left/Run_6_nach_links.png',
        'img/Gangsters_1/run-left/Run_7_nach_links.png',
        'img/Gangsters_1/run-left/Run_8_nach_links.png',
        'img/Gangsters_1/run-left/Run_9_nach_links.png',
        'img/Gangsters_1/run-left/Run_10_nach_links.png',

    ];

    IMAGES_DEAD = [
        'img/Gangsters_1/dead/Dead_1.png',
        'img/Gangsters_1/dead/Dead_2.png',
        'img/Gangsters_1/dead/Dead_3.png',
        'img/Gangsters_1/dead/Dead_4.png',
        'img/Gangsters_1/dead/Dead_5.png',
    ];

    IMAGES_HURT = [
        'img/Gangsters_1/hurt/Hurt_1.png',
        'img/Gangsters_1/hurt/Hurt_2.png',
        'img/Gangsters_1/hurt/Hurt_3.png',
        'img/Gangsters_1/hurt/Hurt_4.png',
        'img/Gangsters_1/hurt/Hurt_5.png',
    ];


    running_sound = new Audio('audio/running-6358.mp3');
    lifebar = 100;
    world;
    speed = 4;
    characterDeadInterval;
    i = 0;


    /**
     * Load and givs The Charackter Infos
     */
    constructor() {
        super().loadImg(this.IMAGES_STAY[0]);
        this.height = 170;
        this.width = 150;
        this.y = 305;
        this.loadImges(this.IMAGES_STAY);
        this.loadImges(this.IMAGES_JUMP);
        this.loadImges(this.IMAGES_DEAD);
        this.loadImges(this.IMAGES_HURT);
        this.loadImges(this.IMAGES_RUN_RIGHT);
        this.loadImges(this.IMAGES_RUN_LEFT);
        this.applyGravity();
        this.animate();
    }

    /**
     * Start All Animation, Logic and Function
     */
    animate() {

        /**
         * Makes the Character Move (Move Left, Move right, Jump).
         * If the keyboard key is pressed, it moves in the specified direction
         * and than the x coordinate is moving.
         */
        setInterval(() => {
            this.runningSound();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.characterMoveRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.characterMoveLeft();
            }
            if (this.world.keyboard.SPACE && this.y == 305) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 70);

        /**
         * The logic and Animation if The Character gets Hurt or is Daed.
         * If He is Dead play the Dead Animation.
         * When he was Hit play The Hit Animation.
         */
        let characterDeadInterval = setInterval(() => {
            if (this.isDaed()) {
                this.ifCharacterDie(characterDeadInterval);
            } else if (this.itHurt()) {
                this.playAnimation(this.IMAGES_HURT)
            } else {
                if (this.y < 305) {
                    this.playAnimation(this.IMAGES_JUMP);
                } else {
                    this.leftRightAnimation();
                }
            }
        }, 130);
    }

    /**
     * Configures and pauses the running sound.
     */
    runningSound() {
        this.running_sound.volume = 0.03;
        this.running_sound.playbackRate = 0.5;
        this.running_sound.pause();
    }

    /**
     * Play The Move Left and Right Animation
     */
    leftRightAnimation() {
        if (this.world.keyboard.RIGHT) {
            this.width = 140;
            this.playAnimation(this.IMAGES_RUN_RIGHT);
        } else {
            if (this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_RUN_LEFT);
            } else {
                this.playAnimation(this.IMAGES_STAY);
            }
        }
    }

    /**
     * If The Character is Dead its play The Dead Animation.
     * Givs Keyboard on false to stop Moving.
     * Dispalay The Losing Screen
     * 
     * @param {interval} characterDeadInterval 
     */
    ifCharacterDie(characterDeadInterval) {
        this.characterPlayDeadAnimation();
        this.world.keyboard = false;
        setTimeOut('img/extra/Game_over.png');
        this.i++
        if (this.i > 4) {
            clearInterval(characterDeadInterval);
        }
    }

    /**
     * Configures and pauses the running sound.
     */
    characterMoveRight() {
        this.moveRight();
        if (mute) {
            this.running_sound.pause();
        } else {
            this.running_sound.play();
        }
    }

    /**
     * Configures and pauses the running sound.
     */
    characterMoveLeft() {
        this.moveLeft();
        if (mute) {
            this.running_sound.pause();
        } else {
            this.running_sound.play();
        }
    }

    /**
    * Plays the death animation for the character.
    * 
    * - Initiates the dead animation sequence using the `playanimat` method with the `IMAGES_DEAD` array.
    * - If the last frame of the death animation is reached:
    *   - Sets the `IMAGES_DEAD` array to contain only the final frame, keeping the character in the dead state.
    */
    characterPlayDeadAnimation() {
        this.playanimat(this.IMAGES_DEAD);
        if (this.newImg == this.IMAGES_DEAD.length - 1) {
            this.IMAGES_DEAD = [this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]];
        }
    }
}