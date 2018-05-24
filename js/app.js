"use strict";
/******************************************************
    E N E M I E S
 *****************************************************/
// Enemies our player must avoid

class Enemy {
  constructor(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = (Math.floor((Math.random() * 360) + 160));
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
  }
  // Draw the enemy on the screen, required method for game
  render() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = (dt * this.speed) + this.x;
    if (this.x > 500) {
      this.speed = (Math.floor((Math.random() * 360) + 160));
      //enemy speed is changing after an enemy goes off screen
      this.x = -150;
      //enemy location resets left of canvas after an enemy goes off screen

      let diffYValues = [60, 140, 220];
      //these 3 numbers position the enemies at the center of respective rows (stone lines)
      let randomIndex = (Math.floor(Math.random() * diffYValues.length));
      this.y = diffYValues[randomIndex];
      //enemy location resets on a random row(stone line)
    }
    if ((this.y - 40 <= player.y && this.y + 40 >= player.y) && (this.x - 60 <= player.x && this.x + 60 >= player.x)) {
      player.x = 200;
      player.y = 400;
    }
    // this if checks the collisions with player and resets its position if true
    return dt;
  };
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks


/******************************************************
    P L A Y E R
 *****************************************************/
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Enemy {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }
  update(dt) {
    return dt;
  };
  handleInput(direction) {
    if (direction === 'left' && this.x > 0) {
      this.x = this.x - 100;
    }
    if (direction === 'up' && this.y > 0) {
      this.y = this.y - 90;
      if (this.y <= 0) {
        this.x = 200;
        this.y = 400;
        alert("CONGRATULATIONS! YOU WON THE GAME!")
      } //nested if resets player position when it reaches water blocks(player.y = 0)
    }
    if (direction === 'right' && this.x < 400) {
      this.x = this.x + 100;
    }
    if (direction === 'down' && this.y < 400) {
      this.y = this.y + 90;
    }
  }
};

/******************************************************
    I S T A N C E S
 *****************************************************/
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [];
for (let i = 0; i < 3; i++) {
  let enemy = new Enemy(-150, 70 * (i + 1));
  allEnemies.push(enemy);
}

let player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  let allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
