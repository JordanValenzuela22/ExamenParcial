/*Diseña un algoritmo en el que se ingrese 2 digitos para restarlos
y el programa los contabilice y los acumule usando el while. Ingresar la letra s para salir del bucle.*/

var cont=0
var acum=0
var n="a"

while(n!="s"){
    var num1=Number(prompt("Ingrese Primer numero: "))
    var num2=Number(prompt("Ingrese Segundo numero: "))
    var resta=num1-num2
    cont=cont+1
    acum=acum + resta
    window.alert("la resta es: "+ resta)
    n=prompt("¿desea continuar? si[a]  No[s]: ")
}


window.alert("Se han realizado "+cont+" restas\nLa suma de las restas es:"+acum)
