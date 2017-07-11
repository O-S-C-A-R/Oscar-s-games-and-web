var preload =
    {
        preload: function()
        {
            var loadingBar = this.add.sprite(160, 240, "loading");
            loadingBar.anchor.setTo(0.5,0.5);
            this.load.setPreloadSprite(loadingBar);
            this.game.load.image('player1','player.png');
            this.game.load.image('wall','wall.png');
            this.game.load.image('wall1','wall.png');
            this.game.load.image('lava','lava.png');
            this.game.load.image('coin','coin.png');
            this.game.load.image('lavae','lavae.png');
            this.game.load.image('sand','awesomesand.jpg');
            this.game.load.image('gameTitle','gameTitle.png');
            this.game.load.image('play','play.png');
            this.game.load.image('gameOver','gameover.png');
            this.game.load.image('water','water.png');
            this.game.load.image('cloud','cloud.png');
            this.game.load.image('white','white- phaser game.png');
            this.game.load.image('grey','grey.png');
            this.game.load.image('sphinx','sphinx.png');
            this.game.load.image('pyramid','pyramid.png');
            this.game.load.image('grass','grass.png');
            this.game.load.image('sun','sun.png');
            this.game.load.image('wate','bluewater.png');
            this.game.load.image('tree','treeee.png');
            this.game.load.image('treeb','treeb.png');
            this.game.load.image('cave','cave back.png');
            this.game.load.image('egypt','egypt.png');
            this.game.load.image('fireball','fireball.png');
            this.game.load.image('tomb','tomb.png');
        },
        create: function()
        {
           
            this.game.state.start("GameTitle");  
            
        }
    };