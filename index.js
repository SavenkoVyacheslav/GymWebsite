/*Counts the characters in the textarea*/
function charcountupdate(str) {
  var text = str.length;
  document.getElementById("charcount").innerHTML = text + ' out of 200 characters';
}
/*Changes colour of the text*/
function changeColor(obj) {
  if (obj.style.color == 'red') {
    obj.style.color = 'white';
  } else {
    obj.style.color = 'red';
  }
}
