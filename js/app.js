var numberEntry = document.getElementById("numberEntry");


var numbers = new Array();
for (var i = 0; i < 10; i++) {
    numbers[i] = prompt(i + ".nci sayıyı girin");
    document.write(numbers[i] + "<br/>");
}
var enb;
enb = parseInt(numbers[0]);

for (var i = 0; i < 10; i++) {
    if (parseInt(numbers[i]) > enb) {
        enb = parseInt(numbers[i]);
    }
}

var container = document.getElementById("container");
container.innerHTML = "<span>en büyük sayı   " + enb + "  </span>"
