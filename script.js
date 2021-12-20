function dec2bin() {
let x = document.getElementById("decimal").value;
if ((/[^0-9]/g.test(x)) || x == "") {
	alert ("Você deve inserir um número decimal inteiro!");
	document.getElementById("decimal").value = "";
	document.getElementById("decimal").focus();
	return false;
	}
x = parseInt(x);
let bin = x.toString(2);
let hex = x.toString(16).toUpperCase();
let octal = x.toString(8);

let figs = "<strong>A representação binária de</strong> " + x + " é " + bin + "<br>";
figs = figs + "<strong>A Representação Hexadecimal de</strong> " + x + " é " + hex + "<br>";
figs = figs + "<strong>A Representação Octal de</strong> " + x + " é " + octal + "<br>";

document.getElementById("resultado").innerHTML = figs;
}