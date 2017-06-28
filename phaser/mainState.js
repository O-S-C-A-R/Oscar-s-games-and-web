var mainState = 
    {
//        preload: function(){
//            this.game.load.image('player','player.png');
//            this.game.load.image('wall','wall.png');
//            this.game.load.image('lava','lava.png');
//            this.game.load.image('coin','coin.png');
//            this.game.load.image('lavae','lavae.png');
//            this.game.load.image('sand','Sand-Transparent-PNG.png');
//        },
      create: function()
        {
            this.game.world.setBounds(0,0,1400,1700);
          this.cursor =
          this.game.input.keyboard.createCursorKeys();
          this.game.stage.backgroundColor = '#7ec0ee'; 
          this.game.physics.startSystem(Phaser.Physics.ARCADE);
          this.game.world.enableBody = true;
          this.player = this.game.add.sprite(150,500, 'player1');
          this.player.body.gravity.y = 600;
          this.walls = this.game.add.group();
          this.coins = this.game.add.group();
          this.lavas = this.game.add.group();
            this.game.camera.follow(this.player);
            this.player.body.collideWorldBounds = true;
          var level = [

'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x                                                                 x',
'x                                                                 x',
'x                                                                 x',
'x                                                                 x',            
'x                                                                 x',          
'x                                                                 x',            
'x                                                                 x',             
'x                                                                 x',             
'x!                                                                x',                                                                    
'x!        o                                                       x',
'x!     xxxxx                                                      x',
'x!        !x!!!!x    o                                             ',
'xxxxx     !xxxxxx!!!!x                                             ',
'x!        !xxxxxxxxxxx!!!!x    o                                  o',
'x!     xxxxxxxxxxxxxxxxxxxx!!!!x                                  x',
'x!        !xxxxxxxxxxxxxxxxxxxxxx       o       o       o         x',
'xxxxx     !xxxxxxxxxxxxxxxxxxxxxx       x       x       x       x x',
'x!        !xxxxxxxxxxxxxxxxxxxxxxd                                x',
'x!     xxxxxxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'xxxxx     !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!     xxxxxxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',          
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',                               
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ',
'x                                                              x   ',
'x                                                              x   ',
'x                                                              x   ',
'x                                                              x   ',            
'x                                                              x   ',          
'x                                                              x   ',            
'x                                                              x   ',             
'x                                                              x   ',             
'x                                                              x   ',                                                                    
'x                                                              x   ',
'x                                                              x   ',
'x                                                              x   ',
'x                                                              x   ',
'x                                                              x   ',
'x                                                              x   ',
'x                                                              x   ',
'x                                                                  ',
'x                                                                  ',
'x                                                                  ',
'x            w                                                     ',
'x                                                                  ',
'x                                       s                          ',
'x                                                                  ',
'x                                                                  ',
'x                                                                  ',
'x                                                                  ',
'x                                                                  ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',          
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',                
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
              
              
              
              
              
          
          
          
          
          
          
          
          
          
          
          
          
          ];
            for (var i = 0; i < level.length; i++) {
for (var j = 0; j < level[i].length; j++) {

// Create a wall and add it to the 'walls' group
if (level[i][j] == 'x') {
var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
this.walls.add(wall);
wall.body.immovable = true; 
}

// Create a coin and add it to the 'coins' group
else if (level[i][j] == 'o') {
var coin = this.game.add.sprite(30+20*j, 30+20*i, 'coin');
this.coins.add(coin);
}

// Create a enemy and add it to the 'enemies' group
else if (level[i][j] == '!') {
var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
this.lavas.add(enemy);
}
    
else if (level[i][j] == 'd') {
var lavae = this.game.add.sprite(30+20*j, 30+20*i, 'lavae');
this.lavas.add(lavae);
}
else if (level[i][j] == 's') {
var sand = this.game.add.sprite(30+20*j, 30+20*i, 'sand');
this.walls.add(sand);
sand.body.immovable = true;
}
else if (level[i][j] == 'w') {
var water = this.game.add.sprite(30+20*j, 30+20*i, 'water');
this.lavas.add(water);
}
else if (level[i][j] == 'c') {
var cloud = this.game.add.sprite(30+20*j, 30+20*i, 'cloud');
this.walls.add(cloud);
cloud.body.immovable = true; 
}
}
}
        },
      update: function()
        {
           this.physics.arcade.collide(this.walls, this.player);
           this.physics.arcade.collide(this.coins, this.player, this.takeCoin, null, this);
           this.physics.arcade.overlap(this.lavas, this.player, this.restart, null, this);
           this.physics.arcade.overlap(this.lavae, this.player, this.restart, null, this);
//           this.physics.arcade.collide(this.sand, this.player);
           if(this.cursor.left.isDown)
              {
                this.player.body.velocity.x = -200;
              }
           else if(this.cursor.right.isDown)
              {
                this.player.body.velocity.x = 200; 
              }
           else
              {
                this.player.body.velocity.x = 0;   
              }
            
           if(this.cursor.up.isDown && this.player.body.touching.down)
              {
                this.player.body.velocity.y = -300; 
              }
        
        },
      takeCoin: function(player, coin)
        {
           coin.kill(); 
        },
      restart: function()
        {
           this.game.state.start("GameOver"); 
        },

    };