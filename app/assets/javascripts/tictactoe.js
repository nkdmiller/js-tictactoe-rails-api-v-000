
let turn = 0;
// Returns the current player
function player(){
  if (turn % 2 === 0){
    return 'X'
  }
  else {
    return 'O'
  }
}
//Attaches listeners to the DOM
function attachListeners(){
  //Adds functionality to buttons
  $('button#previous').on('click, previousGames')
  $('button#save').on('click, saveGame')
  $('button#clear').on('click, clearGame')
  //Allows tiles to be clicked and take turn
  $('td').on('click',function(){
    doTurn($(this));
  }
}
$(document).ready(function(){
  attachListeners();
})
