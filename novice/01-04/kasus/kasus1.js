var re = /s?([A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{1,2})/
function testInfo(platInput) {
  var OK = re.exec(platInput.value);
  if (!OK) {
    alert(platInput.value + ' Ini bukan plat nomor kendaraan Indonesia!'); 
  } else {
    alert('Terima Kasih, plat nomor kendaraan mu adalah ' + OK[0]);}
} 