// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.checkCollision(player);
    this.x+=dt*this.speed;
    if(this.x>=500) this.x=-100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollision=function(player){
    if(this.y===player.y) {
        if(this.x-player.x<=80&&this.x-player.x>=-80)
            isCollided=true;
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y){
    this.x=x;
    this.y=y;
    this.sprite='images/char-boy.png';
}

Player.prototype.update=function(dt){
    if(isCollided){
        alert("you lose!");
        this.y=400;
        isCollided=false;
    }
    else if(this.y==0) {
        alert("you win!");
        this.y=400;
    }
}

Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput=function(key){
    switch(key){
        case 'left':
            if(this.x>=100) this.x-=100;
            break;
        case 'up':
            if(this.y>=80) this.y-=80;
            break;
        case 'right':
            if(this.x<=300) this.x+=100;
            break;
        case 'down':
            if(this.y<=320) this.y+=80;
            break;
        default:
            break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[new Enemy(0,80,0),new Enemy(0,160,50),new Enemy(0,240,120)];
var player=new Player(300,400);

 var isCollided=false;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
