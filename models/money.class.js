class Money extends MovableObject {
    y = 405;

    MONEY_IMG = [
        'img/extra/money/1.png',
        'img/extra/money/2.png',
        'img/extra/money/3.png',
        'img/extra/money/4.png',
        'img/extra/money/5.png',
        'img/extra/money/6.png',
        'img/extra/money/7.png',
        'img/extra/money/8.png',
        'img/extra/money/9.png',
    ];


    constructor(img, x) {
        super().loadImg(img);
        this.loadImges(this.MONEY_IMG);
        this.x = x;
        this.width = 45;
        this.height = 40;
        this.animation();
    }


    animation() {
        setInterval(() => {
            this.playAnimation(this.MONEY_IMG);
        }, 200)
    }
}