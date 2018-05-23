## Reflexions of a lost developer:
#### day1 - 21 of May
* where do I start? If I open the index.html I can't see anything, where is the canvas? How should I start
to see anything? Looking at the code in engine.js to get inspirations.
#### day2: 12.10pm
* I comment out the error in the console, and finally the canvas appear! hurray! Now it's time to position
the enemies
* setting enemy location with x, y coordinates like this: let enemy1 = new Enemy(10, 46);
* setting player location with another Player class based on Enemy class
* now every console error disappeared
* giving a random x-location to all enemies based on Math.floor((Math.random() * 100) + 1)
* giving a random speed(the same to all enemies inside update() function
#### day3: 10:52 am
* enemy speed and rendering it's ok, now I focus on player handleInput function:
after struggling for a while on how to render the movement after arrows keypress, I've read on the forum some topics that suggested me to implement a different argument in Player.prototype.handleInput function, in my case 'direction' based on the keyCode pressed. I then implement an if statement to handle the borders of the canvas to avoid the player disappear, and then reset when it reaches water blocks(y=0)
* I handle collisions by checking player and enemy respective position on canvas(with some margins for realistic collisions) and reset player position if the two entities have the same coords
* Everything looks ok, I put ES6 syntax, and game it's ok
* I need to add the following improvements, I'm behind the Nanodegree deadlines, need to focus on main functionalities to submit the project, I will come back to make nice improvements(the ones on TODO list)

Final thoughts: at the beginning the project seemed impossible, way more difficult than the memory game after reading some tutorials, many posts on the forum, some guides, I started to make the first basic steps.

// TODO:
Add Scoreboard, player lives, playerselect screen
Add collectible items on screen
Multiple vehicle types
Timed games
Be creative!
