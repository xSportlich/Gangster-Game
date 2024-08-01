class Character extends MovableObject {

    height = 100;
    width = 70;
    IMAGES_STAY = ['img/Gangsters_1/stay.animation/stay2.png',
        'img/Gangsters_1/stay.animation/stay2.png',
        'img/Gangsters_1/stay.animation/stay3.png',
        'img/Gangsters_1/stay.animation/stay4.png',
        'img/Gangsters_1/stay.animation/stay5.png',
    ];

    currentImg = 0;

    constructor() {
        super().loadImg('img/Gangsters_1/stay.animation/stay1.png');
        this.loadImges(this.IMAGES_STAY);
        
        this.animate();
    }

    animate() {
        setInterval(() => {
            let path = this.IMAGES_STAY[this.currentImg];
            this.img = this.imagesCache[path];
            this.currentImg++;
        }, 1000);
    }

    jump() {

    }
}