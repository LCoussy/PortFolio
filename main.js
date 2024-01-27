/* const gameState = {
	score: 0,
    lvl: 0,
    informations: {} //informations sur le portfolio
}; */

class main extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'C:\Users\Léandre\Documents\IUT\PortFolio\assets\backGround\Space_Background.png');
    }

    create ()
    {
        this.add.image(0, 0, 'bg').setOrigin(0, 0);
    }

    update ()
    {
        
    }
}

class information extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
    }

    create ()
    {

    }
}

let mainScene = new main();

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 560,
//    backgroundColor: "b9eaff",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload:mainScene.preload, 
        create:mainScene.create,
        update:mainScene.update
    }
};

const game = new Phaser.Game(config);
