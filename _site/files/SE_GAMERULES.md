# Game Rules
The Black Peter game is a shedding game. The goal of every player is to shed all of the cards on their hand. The last player who has failed to do so has the BlackPeter card and will be declared the Black Peter. (Any punishment for the Black Peter is left to the players.)

<span style="display:block;text-align:center">
    <img src="/assets/imgs/se_project_blackpeter/fox.png" width="10%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/fish.png" width="10%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/bat.png" width="10%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/mussel.png" width="10%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/blackpeter.png" width="10%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/goat.png" width="10%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/sloth.png" width="10%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/revers.png" width="10%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/bull.png" width="10%" align="center">
</span>

## Outline of gameplay
The game is initialized with a random playing order. The players take turns according to this order until the Black Peter has been determined. When it is a player's turn, they have to first draw a card from the previous player, after which they may shed any pair of identical cards they may have on their hand. Within the game, all cards are present twice (i.e., they are sheddable), except the BlackPeter card, which is a single card. The shed cards are discarded onto the discard pile. All players have the chance to shed all of their pairs in the first turn before the first player starts his turn by drawing a card.

## Starting the Game
To start the game, a network-connected BlackPeter server must be running and each player must need to be in possession of a BlackPeter client. (Details in the README.md.) When starting the executables, the BlackPeter server will print its utilized server address and port to the terminal. The clients show you a window with the connection panel. Players should fill in all connection information of the server they wish to join as-well as their name. They further may choose a profile picture. Finally, when clicking the 'Connect' button, players are placed into the lobby. On the new panel one can see all joined players, change the settings and start the game, once all players are ready!

<span style="display:block;text-align:center">
    <img src="/assets/imgs/se_project_blackpeter/connection_panel.png" width="40%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/lobby_panel.png" width="40%" align="center">
</span>

## During the Game
Upon starting the game, all players can see the main game panel. For all players, their profile as well as all of their cards are displayed at the bottom of the window. The discard pile is located in the middle of the window. Above is another player and his cards. Under this player stands in brackets whether this is the current player or the previous player. On the right side all other players are shown and in the bottom right corner are all relevant buttons. The text at the top indicates whose turn it is. When it is your turn, you can draw a card from the previous player by clicking on it. This card is added to your hand and then you are able to shed any pair. Select the cards by clicking on them and pressing the 'End Turn' button. Only if you selected no cards or only valid pairs, you can finish your turn. It is possible to change the position of the cards on your hand to sort or hide them. Two selected cards are switched when the 'Switch cards' button is pressed.

<span style="display:block;text-align:center">
    <img src="/assets/imgs/se_project_blackpeter/main_panel.png" width="99%" align="center">
</span>

## End of Game
When only one player is left, it finishes the game automatically and announces the Black Peter. You can go back to the lobby to change the settings or play again.

<span style="display:block;text-align:center">
    <img src="/assets/imgs/se_project_blackpeter/end_panel.png" width="90%" align="center">
</span>

## Settings
There are a few options to change the game or the appearance of it. The settings can be changed in the lobby and should be saved with the button before the game. All settings are listed below.
- **Total number of cards:** The maximum number of cards in the game can be determined, but the number must be over 2, under 38 and odd.
- **Show player data:** If this checkbox is enabled it shows extra information about each player in his profile. The field 'Cards' shows the number of cards left on the hand and the field 'Score' shows the negative points for how often this player has lost.
- **Add "shuffle order" cards:** If this checkbox is true it enables the special card 'Shuffle Order'.
- **Add "shuffle cards" cards:** If this checkbox is true it enables the special card 'Shuffle Cards'.
## Special Cards
The game has two special cards which cause a special effect when they are shed.
### Shuffle Order
This card creates a new random order for the players.
### Shuffle Cards
This card collects all cards, which are not shed yet, shuffles them and distributes them to all players.

<span style="display:block;text-align:center">
    <img src="/assets/imgs/se_project_blackpeter/ant_shuffle.png" width="40%" align="center">
    <img src="/assets/imgs/se_project_blackpeter/bat_shuffle.png" width="40%" align="center">
</span>
