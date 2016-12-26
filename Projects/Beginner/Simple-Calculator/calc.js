var box = document.getElementById('display');

function addToScreen(x) {
  box.value += x;

  if (x == 'c') {
    box.value = '';
  }
}

function answer() {
  x = box.value;
  x = eval(x);
  if (x === 00069000) {
    x = "LOL 69! ;)";
  }  
  if (x === 242424) {
    x = "Sup brodi";
  }
  box.value = x;
}

function backspace() {
  var currNum = box.value;
  var length = currNum.length - 1;
  var newNum = currNum.substring(0, length);
  box.value = newNum;
}

function power() {
  x = box.value;
  x = x*x*x;
  box.value = x;
}
