var gameTitle =
    {
       create: function()
        {
            var gameTitle = this.game.add.sprite(700,450, 'gameTitle');
            gameTitle.anchor.setTo(0.5,0.5);
            var title = this.game.add.sprite(700,350, 'title');
            title.anchor.setTo(0.5,0.5);
            var playButton = this.game.add.button(700,450, 'play', this.playTheGame, this);
            playButton.anchor.setTo(0.5,0.5);
        },
       playTheGame: function()
        {
            this.game.state.start('state1')   
        }
    }