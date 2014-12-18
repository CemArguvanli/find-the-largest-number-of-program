var sayilar = new Array();
for (var i = 0; i < 10; i++) {
    sayilar[i] = prompt(i + ".nci sayıyı girin");
    document.write(sayilar[i] + "<br/>");
}
var enb, enk;
enb = parseInt(sayilar[0]);
enk = parseInt(sayilar[0]);
for (var i = 0; i < 10; i++) {
    if (parseInt(sayilar[i]) > enb) {
        enb = parseInt(sayilar[i]);
    }
}
for (var i = 0; i < 10; i++) {
    if (parseInt(sayilar[i]) < enk) {
        enk = parseInt(sayilar[i]);
    }
}
document.write("en büyük sayı  =" + enb + " en küçük sayı= " + enk);