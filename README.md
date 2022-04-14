# 2048
Welcome! This is a very popular webpage tile game 2048! It's created using HTML, CSS and JavaScript.
Go ahead to play [here](https://yogaliao.github.io/Game-2048/)!
## Introduction
2048 is a simple mathematical sliding-block puzzle game based on the powers of two. Sliding block puzzle games are not new, with pictorial puzzles being the most widely known. However, this was the first one with a mathematical leaning to become as popular as it did. 

## Screenshot
### Index Page
![image](https://user-images.githubusercontent.com/97146317/159106945-b1231904-fa4e-4246-8418-1d7c5c617b64.png)
### Main Page
![image](https://user-images.githubusercontent.com/97146317/159106995-3dabb515-6046-483c-abeb-b541b07bf3ba.png)

## Technologies
- HTML
- CSS
- JavaScript

## User Stories
#### Start the game
It’s a game played on 4×4 grid, with numbered tiles. User will see two "2"s on the grid at the beginning at random location.

#### Game Logic
Each turn user can make one move (left/right/up/down). When the user make one move, tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid. If two tiles of the same number fall onto one another, then they merge into a tile whose number is the sum of the tiles’ numbers. Once tiles have slid and merged, a new tile with the number of either 2 or 4 pops up at a random free location of the grid and the user will get the score which is the sum of the tiles' numbers.

#### Win Logic
Get a 2048, The user will win!

#### Game Over Logic
When the player has no legal moves (there are no empty spaces and no adjacent tiles with the same value), the game is over and the score for this time will be recorded if this is the best score ever.

#### Other instructions
- If the user do not know how to play, they can click the help button and the a game instruction will show up
- Whenever the user would like to replay, they can click the new game to restart a new game

## Unsolved Problems
- Still working on adding more animations to the game
- Working to add a hint function to the game so the user can get hint when they do not know how to move
