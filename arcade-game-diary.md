## Reflections of a lost developer:
#### day1 - 21 of May
* where do I start? If I open the index.html I can't see anything, where is the canvas? How should I start
to see anything? Looking at the code in engine.js to get inspirations.
#### day2: 12.10pm
* I commented out the errors in the console, and finally the canvas appear! hurray! Now it's time to position
the enemies
* I set enemy location with x, y coordinates. Like this: let enemy1 = new Enemy(10, 46);
* I set player location with another Player class based on Enemy class
* Now every console error disappeared
* I give a random x-location to all enemies based on Math.floor((Math.random() * 100) + 1)
* I give also a random speed(the same to all enemies inside update() )
#### day3: 10:52 am
* enemy speed and rendering it's ok, now I focus on player handleInput function:
* after struggling for a while on how to render the movement after arrows keypress, I've read on the forum some topics that suggested me to implement a different argument in Player.prototype.handleInput function, in my case 'direction' based on the keyCode pressed. I then implement an if statement to handle the borders of the canvas to avoid the player disappear, and then reset when it reaches water blocks(y=0)
* I handle collisions by checking player and enemy respective position on canvas(with some margins for realistic collisions) and reset player position if the two entities have the same coords(bugs eat the player)
* Everything looks ok, I convert everything to ES6 syntax, and game it's ok
* I need to add many improvements to the game but I'm behind the Nanodegree deadlines, I need to focus on main functionalities to submit the project, I will come back to make nice improvements(the ones on TODO list)

Final thoughts: at the beginning the project seemed very complicated, way more difficult than the memory game. After reading some tutorials, many posts on the forum, some guides, I started to make the first basic steps. Very important is to read and try to understand what the code inside resource.js and engine.js is doing. OOP is complicated, but this project helped me clarifying it a bit more. At the end it was just implementing the classes and the methods, nothing so impossible like I first thought. Having the right mindset and the right mental discipline is fundamental ;)

Thanks davide2894, for the diary inspiration, yours was very helpful! ;)

### TODO:
* Add Scoreboard, player lives, playerselect screen
* Add collectible items on screen
* Multiple vehicle types
* Timed games
* Be creative!
