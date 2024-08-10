const level1 = new Level(
    
        enemies = [
            new NoGunEnemy(),
            new NoGunEnemy(),
            new NoGunEnemy(),
            new Endboss(),
        ],
        skys = [
            new Sky('img/PNG/Sky/Sky.png', -77),
            new Sky('img/PNG/Sky/Sky.png', 222),
            new Sky('img/PNG/Sky/Sky.png', 521),
            new Sky('img/PNG/Sky/Sky.png', 819),
            new Sky('img/PNG/Sky/Sky.png', 1118),
            new Sky('img/PNG/Sky/Sky.png', 1410),
            new Sky('img/PNG/Sky/Sky.png', 1700),
            new Sky('img/PNG/Sky/Sky.png', 1990),
            new Sky('img/PNG/Sky/Sky.png', 2289),
            new Sky('img/PNG/Sky/Sky.png', 2580),
            new Sky('img/PNG/Sky/Sky.png', 2870),
            new Sky('img/PNG/Sky/Sky.png', 3160),
            new Sky('img/PNG/Sky/Sky.png', 3460),
        ],
        backgroundObject = [
            new BackgroundObject('img/PNG/Background_01/Foreground.png', -720),
            new BackgroundObject('img/PNG/Background_01/Ground.png', -720),
            new BackgroundObject('img/PNG/Background_01/Foreground.png', 0),
            new BackgroundObject('img/PNG/Background_01/Ground.png', 0),
            new BackgroundObject('img/PNG/Background_01/Foreground.png', 720),
            new BackgroundObject('img/PNG/Background_01/Ground.png', 720),
            new BackgroundObject('img/PNG/Background_01/Foreground.png', 1440),
            new BackgroundObject('img/PNG/Background_01/Ground.png', 1440),
            new BackgroundObject('img/PNG/Background_01/Foreground.png', 2160),
            new BackgroundObject('img/PNG/Background_01/Ground.png', 2160),
        ],

        parallaxBackground = [
            new ParallaxBackground('img/PNG/Background_01/Background.png', -720.),
            new ParallaxBackground('img/PNG/Background_01/Background.png', 0),
            new ParallaxBackground('img/PNG/Background_01/Background.png', 720),
            new ParallaxBackground('img/PNG/Background_01/Background.png', 1440),
            new ParallaxBackground('img/PNG/Background_01/Background.png', 2160),
        ],

        ammoPackages = [
            new AmmoPackage('img/extra/1956b1c08d23633f8a35f3d0de4508276747da3c.png', 200),
            new AmmoPackage('img/extra/1956b1c08d23633f8a35f3d0de4508276747da3c.png', 500),
            new AmmoPackage('img/extra/1956b1c08d23633f8a35f3d0de4508276747da3c.png',1000),
            new AmmoPackage('img/extra/1956b1c08d23633f8a35f3d0de4508276747da3c.png'),
        ],


    
);