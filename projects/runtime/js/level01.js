(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY-105},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:1100,y:groundY},
                {type: 'sawblade',x:1400,y:groundY},
                {type: 'sawblade',x:1200,y:groundY},
                {type: 'sawblade',x:1800,y:groundY},
                {type: 'sawblade',x:1900,y:groundY},
                {type: 'sawblade',x:2000,y:groundY},
                {type: 'sawblade',x:1600,y:groundY},
                {type: 'ship',x:1500,y:groundY-25},
                {type: 'ship',x:2500, y:groundY-25},
                {type: 'alien',x:800, y:groundY},
                {type: 'alien',x:1000, y:groundY},
                {type: 'alien',x:1200, y:groundY},
                {type: 'alien',x:1300, y:groundY},
                {type: 'alien',x:1400, y:groundY},
                {type: 'alien',x:1500, y:groundY},
                {type: 'alien',x:1700,y:groundY},
                {type: 'reward',x:2000,y:groundY-90},
                {type: 'reward',x:1000,y:groundY-90},
                {type: 'reward',x:1200,y:groundY-90},
                {type: 'reward',x:1400,y:groundY-90},
                {type: 'reward',x:1800,y:groundY-90},
                {type: 'reward',x:1900,y:groundY-90},
            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
         var createSawBlade = function(x,y) {
             
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            
            game.addGameItem(myObstacle);  
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            myObstacle.velocityX = -2;
             
            myObstacle.onPlayerCollision = function() {
                     myObstacle.shrink();
                     game.changeIntegrity(-10);
            };
         };
            //createSawBlade(500,500);
            //createSawBlade(600,300);
            //createSawBlade(700,400);
            
            
            
            var createShip = function(x,y) {
                var hitZoneSize = 30;
                var damageFromObstacle = 50;
                var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
                myObstacle.x = x;
                myObstacle.y = y;
                
                game.addGameItem(myObstacle);  
                var obstacleImage = draw.bitmap('img/ship.png');
               
                
                obstacleImage.x = -55;
                obstacleImage.y = -45;
                myObstacle.velocityX = -2; 
                myObstacle.addChild(obstacleImage);
               
                myObstacle.onPlayerCollision = function() {
                     myObstacle.shrink();
                     game.changeIntegrity(-50);
                     
                };
                myObstacle.onProjectileCollision = function(){
                    game.increaseScore(50);
                    myObstacle.shrink();
                };
         
            };
             //createShip(400,400);
             
             //functions go before conditionals
            var createEnemy = function(x,y){
                
            
                var enemy =  game.createGameItem('enemy',30);
                var obstacleImage = draw.bitmap('img/alien.png');
                obstacleImage.x = -40;
                obstacleImage.y = -35;
                enemy.addChild(obstacleImage);
            
                enemy.x = x;
                enemy.y = y-50;
                enemy.velocityX = -2;
                game.addGameItem(enemy);
                
                enemy.onPlayerCollision = function() {
                    game.changeIntegrity(-10);
                    enemy.shrink();
                };
                enemy.onProjectileCollision = function(){
                    game.increaseScore(50);
                    enemy.shrink();
                };
                enemy.rotationalVelocity = 1;
            };
            //createEnemy(800,groundY - 150);
            
            var createReward = function(x,y){
                var reward = game.createGameItem('rewardX', 30);
                var obstacleImage = draw.bitmap('img/reward.png');
                obstacleImage.x = -45;
                obstacleImage.y = -45;
                reward.addChild(obstacleImage);
                
                reward.x = x;
                reward.y = y-50;
                reward.velocityX = -2;
                game.addGameItem(reward);
                
                reward.onPlayerCollision = function(){
                    game.increaseScore(100);
                    reward.shrink();
                    
                };
                
            };
            
            
            
            
           
             
             levelData.gameItems.forEach(function(element) {
                if (element.type === 'sawblade') {
                    createSawBlade(element.x, element.y);
                }
                if (element.type==='ship'){
                    createShip(element.x, element.y);
                }
                if(element.type==='alien'){
                    createEnemy(element.x, element.y);
                }
                if(element.type==='reward'){
                    createReward(element.x,element.y);
                }
                
            });
                
         
            
          
       

    };
})(window);
