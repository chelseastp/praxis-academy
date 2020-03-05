var re = /s?[\w-]+@([\w-]+\.)+[\w-]+$/i;
var rgname = /s?([^@]*)/;
var rgtId = /s?[a-zA-Z0-9]+\.[a-zA-Z]{2,4}/;
function testInfo(answer) {
  var OK = re.exec(answer.value);
  var uname = rgname.exec(answer.value);
  var nametId = rgtId.exec(answer.value);
  if (!OK) {
    alert(answer + 'Sorry, format E-mail anda salah '); 
  } else {
    alert('Halo, username anda adalah ' + uname[0] + ' domain anda adalah ' + nametId[0]);
}
}