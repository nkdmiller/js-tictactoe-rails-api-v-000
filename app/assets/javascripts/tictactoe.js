// Code your JavaScript / jQuery solution here
let turn = 0;
function player(){
  if (turn % 2 === 0){
    return 'X'
  }
  else {
    return 'O'
  }
}
