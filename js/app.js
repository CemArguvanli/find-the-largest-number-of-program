var sayilar = new Array();
for (var i = 0; i < 10; i++) {
    sayilar[i] = prompt(i + ".nci sayıyı girin");
    document.write(sayilar[i] + "<br/>");
}
var enb;
enb = parseInt(sayilar[0]);

for (var i = 0; i < 10; i++) {
    if (parseInt(sayilar[i]) > enb) {
        enb = parseInt(sayilar[i]);
    }
}

var container = document.getElementById("container");
container.innerHTML = "<span>en büyük sayı   " + enb + "  </span>"