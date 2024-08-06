class Sky extends MovableObject {

    y = 0;
    width = 900;
    height = 250;

    constructor() {
        super().loadImg('img/PNG/Sky/Sky.png');
        this.animate();
    }

    animate(){
        this.moveLeft();    
    }

}