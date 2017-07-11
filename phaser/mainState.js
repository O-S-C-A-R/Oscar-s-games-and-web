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
            this.game.world.setBounds(0,0,1400,9000);
          this.cursor =
          this.game.input.keyboard.createCursorKeys();
          this.game.stage.backgroundColor = '#7ec0ee'; 
          this.game.physics.startSystem(Phaser.Physics.ARCADE);
          this.game.world.enableBody = true;
          this.player = this.game.add.sprite(1300,6500, 'player1');
          //this.moves = this.game.add.group();
            this.fireball
          this.player.body.gravity.y = 600;
          this.walls = this.game.add.group();
          this.walls1 = this.game.add.group();
          this.coins = this.game.add.group();
          this.lavas = this.game.add.group();
          this.back = this.game.add.group();
            this.game.camera.follow(this.player);
            this.player.body.collideWorldBounds = true;
            
          var level = [
              
              
              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxrrrxxxxxxxxxxxxxxxxxxxxxxxxrrrxxxxxxxxxxxxxrrxxxxxxxxxxxxxxxxxxxxxx',
'xrrrrrxxxxxxrrxxxxxxrrxxxxxxx rrrrrxxxxxxxxxrrrx xxxrxxxrrxxxxxrrrxxx',
'xx rrr xxxxrrrrxx rrrrrxxxxx  rrrrr  xxxxxxxrrr  xxxrrx rrxxxxx rrxxx',
'xx  r    x  rr x   rrr xxxxx   rrr    xxxxx  r    x  r  r  xxx  r xxx',
'xxx r        r     rrr  xxx    rrr    xxxxx  r    x        xxx  r xxx',            
'xxx          r      r   xxx     r      xxx        x         x     xxx',          
'xxx                 r    x      r      xxx                  x     xxx',            
'xx                       x              x                   x     xxx',             
'x                                       x                         xxx',             
'x!                                                                xxx',                                                                    
'x!        o                                                       xxx',
'x!     xxxxx                                                      xxx',
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
'xxxxxrxxxxxxxxxxxrxxrxxxxxxxxrxxxxxxxxxxxxxxrxxxxxxxxxxxxrxxxxxxxxx',
'xxxxxxxxxxrxxxxrxxxxxxxrxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxxxxx',          
'xxxrxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxx',                               
'xxxxxxrxxxxxxrxxxxxxxxrxxxrxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxrxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxxx   ',              
'xxxxxxxxxrxxxxxxxxxrxxxxxxxxxxxxxxrxxxxxxxxxxrxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxx   ',
'xxxxxxrxxxxxxrxxxxxxxxrxxxrxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxrxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxxx   ',              
'xxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxrxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxx   ',
'xxxxxxrxxxxxxrxxxxxxxxrxxxrxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxrxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxxx   ',              
'xxxxxxxxxrxxxxxxxxxxxxrxxxxxxxxxxxrxxxxxxxxxxrxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxx   ',
'xxxxxxxxxrxxxxxxxxxrxxxxxxxxxxxxxxrxxxxxxxxxxrxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxx   ',
'xxxxxxrxxxxxxrxxxxxxxxrxxxrxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxrxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxxx   ',              
'xxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxrxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxx   ',
'xxxxxxrxxxxxxrxxxxxxxxrxxxrxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxrxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxxx   ',              
'xxxxxxxxxrxxxxxxxxxxxxrxxxxxxxxxxxrxxxxxxxxxxrxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxx   ',
'x                                                                  ',
'x                              u                                   ',
'x                                                                  ',
'x                       --                                         ',            
'x                     ------                --                     ',          
'x                  ------------            -----                   ',            
'x                    ---------              ---                    ',             
'x                                                                  ',             
'x                                                                  ',                                                                    
'x                                                                  ',
'x                                 gg--                             ',
'x                ---             og-ggg          g                 ',
'x             ogggggg           g-------gg      gggg               ',
'x             --------          -----------   ggggggg              ',
'x                                                                  ',
'x                                       ggo                        ',
'x       gg               ggg           gg--gg                      ',
'x    gggggg            gggggg         gg------                     ',
'x  gggggggggg        gggggggg        ----------                    ',
'x ew         w                                                     ',
'x e                                                                ',
'x e                                     s                          ',
'x e                                                                ',
'x e                                                                ',
'x e                                                                ',
'e e                                                                ',
'e e                                                                ',
'e eerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',          
'e eeerrrrrrerrrrrrrreerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeerrrerrrrrrexrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',                
'e eeeeerrrrrerrrrrerrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeerrerrrrrrerrrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeerrrrrrrrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeerrrrrerrrrrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeerrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeerrrrrerrrrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeerrrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeerrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeerrrererrrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeerrrrerrrrrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeerrrrerrrrrrerrrrrrerrrrrerrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeerrrrerrrrrrrrerrrrrerrrrrrrerrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeerrrrrrrerrrrerrrrrrerrrrrrerrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrerrrrrerrrrerrrrrrrrrrrrerrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrerrrrrrrrrrerrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrerrrrrrrrrrrrerrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e         e     e   e    e    e    e     e    e    e     e   e     ee',
'e    u    e     e        e    e    e     e    e    e         e     ee',
'e               e        e    e    e          e    e         e     ee',
'e               e                  e          e              e     ee',            
'e                                  e                         e     ee',          
'e                                                 n          e     ee',            
'e                                                                  ee',             
'e                                        t                         ee',             
'e                                                                  ee',                                                                    
'e                                                                  ee',
'e           n         t        n                                   ee',
'e                                                                   ',
'e                                                                   ',
'e                                                     aaaaaar       ',
'et                                       r      aaraaaarrrarreeeeee',
'e                                        araaaaaarrarrarrrarreeeeee',
'e                                        arrarrrarrarrarrrareeeeeee',
'e                                       raararrrarrarrarraaeeeeeerr',
'e                                       rarrarrrarrarraaaaeeeeerrr',
'e                               r     rrrarrarrrarraaaaaeeeeeeerr',
'e                   rr          r      rrarrarraaaaaaeeeeeeeeeer',
'e               aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeer',
'e        rraaaaaeeeeaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerr',
'e        eeeeeeeeeeeaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeee-eeeerrr',
'eeeeeeeeeeee-eeeeeeeeeee-eeeeeeeeeee-eeeeeeee-eeeeeeeeeeeeeerrrr',
'eeeee-eeeeeeeeeee-eeeeeeeeeeeeeeeeeeeeee-eeeeeeeeeeeeee-eeerrrrr', 
'eeeeeeee-eeeeeeeeeeeeeeeeeeeeeeeeee-eeeeeeeeeeee-eeeeeeeeerrrrrr',
'eeee-eeeeeeeeeeeeeeeeeee-eeeeeeeeeeeeeeeeee-eeeeeeeeeeeeerrrrrrr',          
'eeeeeeeeeeeeeeeee-eeeeeeeeeeeeeeeee-eeeeeeeeeeeeeeee-eeerrrrrrrr',
'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrr',                               
'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrr',
'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrr',              
'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrr',
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',             
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',              
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',             
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',              
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',              
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',             
'xrrrrrrrxxrrrrrxxrrrrrrrrrxxrrrxxrrrrrrrxxrrrrrrrrrrrrxxrrrrrxxx',
'xrrrrrrrxxrrrrrxxrrrrrrrrrxxrrrxxrrrrrrrxxrrrrrrrrrrrrxxrrrrrxx',              
'xxrrrrrxxxxrrrxxxxrrrrrrrxxxxrxxxxrrrrrxxxxrrrrrrrrrrxxxxrrrxxxx',
'xxrrrrrxxxxrrrxxxxrrrrrrrxxxxrxxxxrrrrrxxxxxrrrrrrrrrxxxxrrrxxxx',             
'xxxrrrxxxxxxrxxxxxxrrrrrxxxxxxxxxxxrrrxxxxxxxrrrrrrrxxxxxxrxxxxx',
'xxxrrrxxxxxxrxxxxxxrrrrrxxxxxxxxxxxrrrxxxxxxxxrrrrrxxxxxxxrxxxxx',              
'xxxxrxxxxxxxxxxxxxxxrrrxxxxxxxxxxxxxrxxxxxxxxxrrrrrxxxxxxxxxxxxx',              
'xxxxrxxxxxxxxxxxxxxxrrrxxxxxxxxxxxxxrxxxxxxxxxxrrrxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxxrrrxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xc                                                              ',
'x                                                               ',
'x                                                               ',
'x                                                               ',
'x                                                               ',
'x                                                               ',             
'x                                                               ',              
'x                                                               ',              
'x                                                               ',             
'x                                                               ',              
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',   
'xy                                                              ',
'x                                                               ',
'x                                                               ',
'x                                                               ',
'x                                                               ',
'x                                                               ',             
'x                                                               ',              
'x                                                               ',              
'x                                                               ',             
'x                                                               ',              
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x                                                               ',
'x                                                               ',              
'x                                                               ',
'x                                                               ',             
'x                                                               ',
'x                                                               ',              
'x                                                               ',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',           
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',           
'xm                                                                 ',
'x                                                                  ',
'x                                                                  ',
'x                                                                  ',
'x                                                                  ',
'x                                                                  ',             
'x                                                                  ',              
'x                                                                  ',              
'x                                                                  ',             
'x                                                                  ',              
'x                                                                  ',          
'x                                                                  ',          
'x                                                                  ',          
'x                                                                  ',          
'x                                                                  ',          
'x                                                                  ',          
'x                                                                  ',          
'x                                                                  ',
'x                                                                  ',              
'x                                                                  ',              
'x                                                                  ',              
'x  %        $                  #                   f               ',              
'x                                                                  ',              
'x                                                                  ',
'x    xx          xxxxxxxxx           xxxxxxxxx           xxxxxxxxxxx',              
'x xd xx          xxxxxxxxx          dxxxxxxxxx           xxxxxxxxxxx',
'x x  xx          xxxxxxxxx           xxxxxxxxx           xxxxxxxxxxx',             
'x x                                                      xxxxxxxxxxx',
'x x                                                      xxxxxxxxxxx',              
'x x                                                      xxxxxxxxxxx',                            
'x lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
          
          
          
          ];
            for (var i = 0; i < level.length; i++) {
for (var j = 0; j < level[i].length; j++) {

// Create a wall and add it to the 'walls' group

if (level[i][j] == 'u') {
var sun = this.game.add.sprite(30+20*j, 30+20*i, 'sun');
this.back.add(sun);
}
else if (level[i][j] == 't') {
var tree = this.game.add.sprite(30+20*j, 30+20*i, 'tree');
this.back.add(tree);
}

else if (level[i][j] == 'c') {
var cave = this.game.add.sprite(30+20*j, 30+20*i, 'cave');
this.back.add(cave);
}
else if (level[i][j] == 'y') {
var egypt = this.game.add.sprite(30+20*j, 30+20*i, 'egypt');
this.back.add(egypt);
}
else if (level[i][j] == 'm') {
var tomb = this.game.add.sprite(30+20*j, 30+20*i, 'tomb');
this.back.add(tomb);
}
else if (level[i][j] == 'n') {
var treeb = this.game.add.sprite(30+20*j, 30+20*i, 'treeb');
this.back.add(treeb);
}
else if (level[i][j] == 'x') {
var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
this.walls.add(wall);
wall.body.immovable = true; 
}
else if (level[i][j] == 'l') {
var wall1 = this.game.add.sprite(30+20*j, 30+20*i, 'wall1');
this.walls1.add(wall1);
wall1.body.immovable = true; 
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
else if (level[i][j] == 'f') {
this.fireball = this.game.add.sprite(30+20*j, 30+20*i, 'fireball');
}    
else if (level[i][j] == '#') {
this.fireball1 = this.game.add.sprite(30+20*j, 30+20*i, 'fireball');
}    
else if (level[i][j] == '$') {
this.fireball2 = this.game.add.sprite(30+20*j, 30+20*i, 'fireball');
} 
else if (level[i][j] == '%') {
this.fireball3 = this.game.add.sprite(30+20*j, 30+20*i, 'fireball');
}    
else if (level[i][j] == 'd') {
var lavae = this.game.add.sprite(30+20*j, 30+20*i, 'lavae');
this.lavas.add(lavae);
lavae.body.immovable = true;
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
else if (level[i][j] == '-') {
var white = this.game.add.sprite(30+20*j, 30+20*i, 'white');
this.walls.add(white);
white.body.immovable = true; 
}
else if (level[i][j] == 'g') {
var grey = this.game.add.sprite(30+20*j, 30+20*i, 'grey');
this.lavas.add(grey);
grey.body.immovable = true; 
}
else if (level[i][j] == 'a') {
var wate = this.game.add.sprite(30+20*j, 30+20*i, 'wate');
this.lavas.add(wate);
wate.body.immovable = true; 
}
else if (level[i][j] == 'r') {
var grey = this.game.add.sprite(30+20*j, 30+20*i, 'grey');
this.walls.add(grey);
grey.body.immovable = true; 
}
else if (level[i][j] == 'e') {
var grass = this.game.add.sprite(30+20*j, 30+20*i, 'grass');
this.walls.add(grass);
grass.body.immovable = true; 
}

}

}
            this.fireball.body.gravity.y = 600;
            this.fireball1.body.gravity.y = 600;
            this.fireball2.body.gravity.y = 600;
            this.fireball3.body.gravity.y = 600;
        },
      update: function()
        {
           
           this.game.physics.arcade.collide(this.fireball,this.lavas, this.hit(this.fireball), null, this);
           this.game.physics.arcade.collide(this.fireball1,this.lavas, this.hit(this.fireball1), null, this);   
           this.game.physics.arcade.collide(this.fireball2,this.lavas, this.hit(this.fireball2), null, this);   
           this.game.physics.arcade.collide(this.fireball3,this.lavas, this.hit(this.fireball3), null, this);   

           this.physics.arcade.collide(this.walls, this.player);
           this.physics.arcade.collide(this.walls1, this.player);
           this.physics.arcade.collide(this.coins, this.player, this.takeCoin, null, this);
           this.physics.arcade.overlap(this.lavas, this.player, this.restart, null, this);
           
           //this.physics.arcade.overlap(this.player, this.back);
           this.physics.arcade.overlap(this.moves, this.player, this.restart, null, this); 
           this.game.world.bringToTop(this.walls);
           this.game.world.bringToTop(this.lavas);
           this.game.world.bringToTop(this.player);
           
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
           else if(this.cursor.up.isDown && this.player.body.touching.down)
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
          if(this.player.body.y>900 && this.player.body.y<1860)
             {
               this.player.kill();
               this.player = this.game.add.sprite(80,1200,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else if(this.player.body.y>1861 && this.player.body.y<2900)
             {
               this.player.kill();
               this.player = this.game.add.sprite(1360,2160,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else if(this.player.body.y>2901 && this.player.body.y<4140)
             {
               this.player.kill();
               this.player = this.game.add.sprite(80,3300,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else if(this.player.body.y>6220 && this.player.body.y<6820)
             {
               this.player.kill();
               this.player = this.game.add.sprite(1360,6660,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else
             {
          this.game.state.start("GameOver"); 
             }
        },
        
      hit: function(ball)
        {
            
          ball.body.velocity.y =-600;   
        }

    };