class Sky extends MovableObject {

    y = 0;
    width = 300;
    height = 200;
    speed = 0.2;

    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.moveLeft(); 
        }, 1000 / 50);   
    }

}