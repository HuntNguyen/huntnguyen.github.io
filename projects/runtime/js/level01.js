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
                {type: 'sawblade',x:1100,y:groundY-105},
                {type: 'sawblade',x:1400,y:groundY},
                {type: 'sawblade',x:1700,y:groundY-105},
                {type: 'sawblade',x:2300,y:groundY},
                {type: 'sawblade',x:2600,y:groundY},
                {type: 'sawblade',x:2000,y:groundY},
                {type: 'sawblade',x:2800,y:groundY-105},
                {type: 'sawblade',x:3100,y:groundY},
                {type: 'sawblade',x:3400,y:groundY-105},
                {type: 'sawblade',x:3800,y:groundY},
                {type: 'sawblade',x:4100,y:groundY},
                {type: 'sawblade',x:4500,y:groundY-105},
                {type: 'sawblade',x:4800,y:groundY},
                {type: 'sawblade',x:5200,y:groundY-105},
                {type: 'sawblade',x:5500,y:groundY},
                {type: 'sawblade',x:5900,y:groundY},
                {type: 'sawblade',x:6200,y:groundY},
                {type: 'sawblade',x:6600,y:groundY-105},
                {type: 'ship',x:1500,y:groundY-25},
                {type: 'ship',x:2200, y:groundY-25},
                {type: 'ship',x:2700, y:groundY-25},
                {type: 'ship',x:3000, y:groundY-25},
                {type: 'ship',x:3500, y:groundY-25},
                {type: 'ship',x:4000, y:groundY-25},
                {type: 'ship',x:4500, y:groundY-25},
                {type: 'ship',x:500, y:groundY-25},
                {type: 'ship',x:5000,y:groundY-25},
                {type: 'ship',x:5700, y:groundY-25},
                {type: 'ship',x:6000, y:groundY-25},
                {type: 'ship',x:6500, y:groundY-25},
                {type: 'alien',x:800, y:groundY},
                {type: 'alien',x:1100, y:groundY},
                {type: 'alien',x:1600, y:groundY},
                {type: 'alien',x:2000, y:groundY},
                {type: 'alien',x:2800, y:groundY},
                {type: 'alien',x:3700, y:groundY},
                {type: 'alien',x:4000,y:groundY},
                {type: 'alien',x:4200, y:groundY},
                {type: 'alien',x:4500, y:groundY},
                {type: 'alien',x:4700, y:groundY},
                {type: 'alien',x:5200, y:groundY},
                {type: 'alien',x:5300, y:groundY},
                {type: 'alien',x:5600, y:groundY},
                {type: 'alien',x:6200, y:groundY},
                {type: 'reward',x:2000,y:groundY-90},
                {type: 'reward',x:1000,y:groundY-90},
                {type: 'reward',x:1200,y:groundY-90},
                {type: 'reward',x:1400,y:groundY-90},
                {type: 'reward',x:1800,y:groundY-90},
                {type: 'reward',x:1900,y:groundY-90},
                {type: 'reward',x:2200,y:groundY-90},
                {type: 'reward',x:2300,y:groundY-90},
                {type: 'reward',x:2400,y:groundY-90},
                {type: 'reward',x:2500,y:groundY-90},
                {type: 'reward',x:2800,y:groundY-90},
                {type: 'reward',x:3000,y:groundY-90},
                {type: 'reward',x:3200,y:groundY-90},
                {type: 'epicReward', x:3000,y:groundY-90},
                {type: 'epicReward', x:6200,y:groundY-90}
                
            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

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
                    game.increaseScore(100);
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
                    game.increaseScore(250);
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
                    game.increaseScore(500);
                    reward.shrink();
                    
                };
                
            };
            
            var createEpicReward = function(x,y){
                var epicReward = game.createGameItem('epicReward', 20);
                var obstacleImage = draw.bitmap('img/planet.png');
                obstacleImage.x = -50;
                obstacleImage.y = -50;
                epicReward.addChild(obstacleImage);
                
                epicReward.x =x;
                epicReward.y = y-50;
                epicReward.velocityX = -2;
                game.addGameItem(epicReward);
                
                epicReward.onPlayerCollision = function(){
                    game.increaseScore(1000);
                    epicReward.shrink();
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
                if(element.type ==='epicReward'){
                    createEpicReward(element.x, element.y);
                    
                }
                
            });
                
         
            
          
       

    };
})(window);
