function countingNumbers(){
    var Liczba1 = document.getElementById("Liczba1").value;
    var Liczba2 = document.getElementById("Liczba2").value;
    var Liczba3 = document.getElementById("Liczba3").value;
    var Liczba4 = document.getElementById("Liczba4").value;

    var suma = Number(Liczba1) + Number(Liczba2) + Number(Liczba3) + Number(Liczba4);
    var srednia = (Number(Liczba1)+Number(Liczba2)+Number(Liczba3)+Number(Liczba4))/4;

    document.getElementById("suma").innerHTML=suma;
    document.getElementById("srednia").innerHTML=srednia;

    var numbersArray = [Number(Liczba1),Number(Liczba2),Number(Liczba3),Number(Liczba4)];
    var minvalue = numbersArray.reduce(function(a, b) {
        return Math.max(a, b);
    });
    document.getElementById("minimum").innerHTML=minvalue;

    var maxvalue = numbersArray.reduce(function(a, b) {
        return Math.max(a, b);
    });
    document.getElementById("maksimum").innerHTML=maxvalue;

    var LiczbaInputow = document.getElementById("LiczbaInputow").value;
    var main = document.getElementById('main');

    var addInput = Number(LiczbaInputow);

    for(i = 0;i<addInput;i++){       
        var input = document.createElement('input');

        input.type="number";       
        main.appendChild(input);
    };
}