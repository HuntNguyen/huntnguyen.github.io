(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
         var backgroundBox;
         var building;
        var buildings = [];
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
           

            background.removeAllChildren();
            
             

            // TODO: 3 - YOUR DRAW CODE GOES HERE

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,498,'black');
            background.addChild(backgroundFill);
            
            //var galaxy = draw.bitmap('img/galaxypng.png');
            //galaxy.scaleX = 1;
            //galaxy.scaleY = .5;
            //background.addChild(galaxy);
            
            
            
            backgroundBox = draw.rect(100,100,'red');
            backgroundBox.x = 300;
            backgroundBox.y = 350;
            //background.addChild(backgroundBox);
           
           var buildingHeight = 300;
            
            //for(var i=0;i<10;++i) {
                //building = draw.rect(50,buildingHeight,'red','Black',1);
                //building.x = 200*i;
                //building.y = groundY-buildingHeight;
                //background.addChild(building);
                //buildings.push(building);
                //}
                var circle;
            for(var i=0;i<50;i++){
                circle = draw.circle(3,'white','LightGray',2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle);
                
                }
            
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            backgroundBox.x = backgroundBox.x - 1;
            
            
            if(backgroundBox.x < -100) {
            backgroundBox.x = canvasWidth;
            }
            
            for(var i = 0; i < buildings.length; i++){
                var building = buildings[i];
        
                building.x = building.x - 1;
                
                if(building.x < -100) {
                    building.x = canvasWidth;
                }
            }
            
                    

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        

        return background;
    };
}(window));