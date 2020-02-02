document.getElementById("testy").innerHTML = "Moj pierwszy skrypt w js";
let a = "Hej ty";
let b = " bałwanie";
console.log(a + b);
document.getElementById("testy").innerHTML = a + b;

function mojaFunkcja() {
    document.getElementById("testy").innerHTML = " O co ci chodzi ty bałwanie?";
    console.log(onclick);
}




function mojaFunkcja2() {
    
    let one = document.getElementById("testy");
    one = one.innerText;
    let second = document.getElementById("testy");
    second = second.innerText;
    console.log(one);

    if (one != "tak"){
        document.getElementById("testy").innerHTML = "nie";
    }
    if (one == "tak"){
        document.getElementById("testy").innerHTML = "nie";
    }

    if (second == "nie"){
        document.getElementById("testy").innerHTML = "tak";
    }
    one = document.getElementById("testy");
    one = one.innerText;
    console.log(one);

}

alert(a);