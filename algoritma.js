function ge(a) { return document.getElementById(a); }
 
function TCkimlikKontrol(obj) {
 
 
var tckontrol, toplam;
tcKimlikNo = obj.value;
 
if (tcKimlikNo.length == 0) {
return true;
}
 
toplam = Number(tcKimlikNo.substring(0, 1)) + Number(tcKimlikNo.substring(1, 2)) + Number(tcKimlikNo.substring(2, 3)) + Number(tcKimlikNo.substring(3, 4)) + Number(tcKimlikNo.substring(4, 5)) + Number(tcKimlikNo.substring(5, 6)) + Number(tcKimlikNo.substring(6, 7)) + Number(tcKimlikNo.substring(7, 8)) + Number(tcKimlikNo.substring(8, 9)) + Number(tcKimlikNo.substring(9, 10));
 
strtoplam = String(toplam);
 
onunbirlerbas = strtoplam.substring(strtoplam.length, strtoplam.length - 1);
 
if (onunbirlerbas == tcKimlikNo.substring(10, 11)) {
}
else {
alert("Bu Geçerli Değil Lütfen Doğru TC Kimlik Numarası Gir!");
obj.value = "";
obj.focus();
return false;
}
}
