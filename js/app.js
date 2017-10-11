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
    this.x+=dt*this.speed;
    if(this.x>=500) this.x=-100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y){
    this.x=x;
    this.y=y;
    this.isCollided=false;
    this.isVictory=false;
    this.sprite='images/char-boy.png';
}

Player.prototype.update=function(dt){
    if(this.isCollided) {
        this.reset();
        alert("You lose!");
    }
    else if(this.isVictory) {
        alert("You win!");
        this.reset();
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

Player.prototype.reset=function(){
   this.y=400;
   this.isCollided=false;
   this.isVictory=false;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[new Enemy(0,80,100),new Enemy(0,160,50),new Enemy(0,240,120)];
var player=new Player(300,400);

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
