function ktop() {
    var a = parseInt(document.getElementById("val1").value);
    var c = a * 2.2;    
    document.getElementById("val3").value = c;
}

function mtoy() {
    var a = parseInt(document.getElementById("val1").value);
    var c = a * 1.09361;
    document.getElementById("val3").value = c;
}

function ctof() {
    var a = parseInt(document.getElementById("val1").value);
    var c = a * 1.8 + 32;
    document.getElementById("val3").value = c;
}

function cl() {
    document.getElementById("val1").value = "";
    document.getElementById("val3").value = "";
}

function ch() {
    document.getElementById('cal').style.display = 'none';
    document.getElementById('cal2').style.display = 'block';
}

function ch2() {
    document.getElementById('cal2').style.display = 'none';
    document.getElementById('cal').style.display = 'block';
}

function ptok() {
    var a = parseInt(document.getElementById("val2").value);
    var c = a * 0.4535;
    document.getElementById("val4").value = c;
}

function ytom() {
    var a = parseInt(document.getElementById("val2").value);
    var c = a * 0.914;
    document.getElementById("val4").value = c;
}

function ftoc() {
    var a = parseInt(document.getElementById("val2").value);
    var c = (a - 32) / 1.8;
    document.getElementById("val4").value = c;
}

function cl2() {
    document.getElementById("val2").value = "";
    document.getElementById("val4").value = "";
}