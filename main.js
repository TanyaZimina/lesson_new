
function check(){
    let number = Math.floor((Math.random() * 100) + 1); //число которое загадывает программа
console.log(number);

    function game(){
      var userInput = prompt('введите число');
      if(userInput == null) return alert('игра окончена');
      if(isNaN(parseFloat(userInput)) || !isFinite(userInput)) prompt('вы ввели не число');
      if(userInput > number) alert('ваше число больше');
      if(userInput < number) alert('ваше число меньше');
      if(userInput == number) return alert('вы угадали');
      game();
    }
    game();
  };
  check();
  console.dir(check);