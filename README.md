This is my take on the  program challenge that needs to follow a path of characters and letters, to collect them and display them. 
It starts first with the character '>' if it doesn't start with it it come out an error.
When the program starts iterating through the characters and letters it needs to stop when it reaches the letter 's'. 
It navigates through a 2D array of strings, the x and y are coordinates indicating the current position in the maze a.k.a the grid.
 [11 12 13 14 15]
 [21 22 23 24 25]
 [31 32 33 34 35]
 [41 42 43 44 45]
The main idea of the function 'ChangingDirection()' is that it attempts to change the direction  when the current path is blocked or leads to a previously visited number (in this case character) when it encounters a '+' sign, the loop after each move, it checks if the new position is valid if it hasn't been previously visited and updates the path and letters along, and it breaks if it meets the 's' character or if there is no valid character. I still haven't found the correct solution to this.

In conclusion the code still needs to be fixed.
